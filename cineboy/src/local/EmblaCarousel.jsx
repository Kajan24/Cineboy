import React, { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number, min, max) =>
    Math.min(Math.max(number, min), max);

const EmblaCarousel = (props) => {
    const { slides, options, onSlideChange } = props; // Ajoutez onSlideChange ici
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const tweenFactor = useRef(0);

    const setTweenFactor = useCallback((emblaApi) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
    }, []);

    const tweenOpacity = useCallback((emblaApi, eventName) => {
        const engine = emblaApi.internalEngine();
        const scrollProgress = emblaApi.scrollProgress();
        const slidesInView = emblaApi.slidesInView();
        const isScrollEvent = eventName === 'scroll';

        emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress;
            const slidesInSnap = engine.slideRegistry[snapIndex];

            slidesInSnap.forEach((slideIndex) => {
                if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

                if (engine.options.loop) {
                    engine.slideLooper.loopPoints.forEach((loopItem) => {
                        const target = loopItem.target();

                        if (slideIndex === loopItem.index && target !== 0) {
                            const sign = Math.sign(target);

                            if (sign === -1) {
                                diffToTarget = scrollSnap - (1 + scrollProgress);
                            }
                            if (sign === 1) {
                                diffToTarget = scrollSnap + (1 - scrollProgress);
                            }
                        }
                    });
                }

                const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
                const opacity = numberWithinRange(tweenValue, 0, 1).toString();
                emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
            });
        });
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        setTweenFactor(emblaApi);
        tweenOpacity(emblaApi);
        emblaApi
            .on('reInit', setTweenFactor)
            .on('reInit', tweenOpacity)
            .on('scroll', tweenOpacity)
            .on('slideFocus', tweenOpacity)
            .on('select', () => {
                const selectedIndex = emblaApi.selectedScrollSnap();
            });
    }, [emblaApi, tweenOpacity, onSlideChange]);

    return (
        <div className="embla mt-5 md:w-[20vw]">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide, index) => (
                        <div className="embla__slide flex justify-center items-center relative" key={index}>
                            <div className="absolute inset-0 backdrop-blur-md z-0"></div>
                            <img
                                className="embla__slide__img relative z-10 rounded-lg h-[40vh] w-auto"
                                src={slide}
                                alt={`Slide ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmblaCarousel;
