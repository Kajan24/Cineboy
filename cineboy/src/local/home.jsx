import React from 'react';
import ReactDOM from 'react-dom/client';
import EmblaCarousel from './EmblaCarousel';
import Avatar2 from '../assets/avatar.jpg';
import Cars from '../assets/cars.jpg';
import Equalizer from '../assets/equalizer.jpg';
import FF3 from '../assets/tokyo_drift.jpg';

export default function Home() {
    const OPTIONS = { loop: true, autoplay: true};

    const SLIDES = [
        Avatar2,
        Cars,
        Equalizer,
        FF3
    ];

    return (
        <main className='flex flex-col items-center gap-20 pt-10'>
            <section className='h-[75vh] w-[90vw]'>
                <h2 className="font-display text-2xl tracking-wide font-bold text-white lg:text-9xl">L'affiche</h2>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </section>
        </main>
    );
}
