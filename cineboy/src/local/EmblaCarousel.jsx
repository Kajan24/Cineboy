import React, { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number, min, max) =>
    Math.min(Math.max(number, min), max);

const EmblaCarousel = (props) => {
    const { slides, options } = props;
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
            .on('slideFocus', tweenOpacity);
    }, [emblaApi, tweenOpacity]);

    return (
        <div className="embla mt-5">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide, index) => (
                        <div className="embla__slide" key={index}>
                            <img
                                className="embla__slide__img rounded-lg h-[40vh] w-auto"
                                src={slide}  // Utilisation directe de l'URL ou de la source locale
                                alt={`Slide ${index + 1}`}  // Description alternative améliorée
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmblaCarousel;
