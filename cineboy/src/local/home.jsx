import React from 'react';
import ReactDOM from 'react-dom/client';
import EmblaCarousel from './EmblaCarousel';
import Avatar2 from '../assets/avatar.jpg';
import Cars from '../assets/cars.jpg';
import Equalizer from '../assets/equalizer.jpg';
import FF3 from '../assets/tokyo_drift.jpg';
import TextReveal from "@/components/ui/text-reveal";
import newsletterImg from "../assets/newsletter.svg";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Star from '@/assets/star.svg';

export default function Home() {
    const OPTIONS = { loop: true, autoplay: true };

    const SLIDES = [
        Avatar2,
        Cars,
        Equalizer,
        FF3
    ];

    return (
        <main className='flex flex-col items-center gap-2 pt-10'>
            <section className='h-auto w-[90vw] flex flex-col gap-8'>
                <h2 className="font-display text-2xl tracking-wide font-bold text-white lg:text-4xl">L'affiche</h2>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                <div className='w-full h-auto flex flex-col pl-4 pr-4'>

                    <div className='w-full h-2/4 flex justify-between gap-4 items-start flex-nowrap'>
                        <h3 className='w-2/3 text-2xl text-nowrap tracking-wide font-bold text-white lg:text-4xl'>Nom du film</h3>
                        <div className='w-auto h-full flex items-center justify-end gap-1'>
                            <span className='flex gap-2'>5</span>
                            <img src={Star} alt="logo_etoile" className='w-[1rem]' />
                        </div>
                    </div>
                    <div className='w-full h-2/4 flex justify-between gap-4 items-end'>
                        <p className='text-white/50'>Nom du directeur</p>
                        <Button variant="cineYellow" className="w-2/4">Réserver</Button>
                    </div>
                </div>
                <Button variant="default" className="w-full">Voir tout l'affiche</Button>
            </section>

            <section className='h-auto w-[90vw] flex items-center justify-center'>
                <TextReveal text="Vivez le cinéma autrement avec Cineboy, là où chaque film devient une aventure." />
            </section>

            <section className='h-auto w-[90vw] p-9 flex flex-col gap-6 md:w-auto md:max-w-[40vw] mb-6'>
                <h1 className="font-display text-4xl tracking-wide font-bold text-white lg:text-5xl">Newsletter</h1>
                <div className='flex w-full h-auto gap-4 md:flex-col md:items-center'>
                    <p className='text-white/50'>Ne manquez plus aucun film culte ! Inscrivez-vous à la newsletter de Cineboy et vivez le cinéma au quotidien.</p>
                    <img src={newsletterImg} alt="svg_newsletter" className='w-[8em] md:w-[18em]' />
                </div>
                <div className='flex w-full h-auto gap-4'>
                    <Input placeholder="Email" />
                    <Button variant="cineYellow">Go</Button>
                </div>
            </section>


        </main>
    );
}
