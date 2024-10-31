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


const SLIDES = [
    Avatar2,
    Cars,
    Equalizer,
    FF3
];

export default function Movie() {
    return (
        <main className='flex flex-col items-center gap-2'>
            <section
                className='h-[75svh] w-full flex flex-col items-center justify-end gap-9 bg-cover bg-center bg-no-repeat'
                style={{
                    backgroundImage: `linear-gradient(to bottom, 
        rgba(0, 0, 0, 1) 0%,          
        rgba(0, 0, 0, 0.1) 10%,       
        rgba(0, 0, 0, 0.6) 80%,
        rgba(0, 0, 0, 0.9) 90%,       
        rgba(0, 0, 0, 1) 100%),      
        url(${Avatar2})`,
                }}
            >
                <h2 className="font-display text-2xl tracking-wide font-bold text-white lg:text-4xl">Avatar 2</h2>
            </section>
        </main>
    );
}


const MovieCard = (props) => {
    return (
        <div className='w-full h-[22em] flex justify-between items-center border-t-2 border-white/20'>
            <div className='p-2 w-1/2 h-[90%] flex flex-col items-start justify-between gap-16'>
                <div className='w-full h-2 flex flex-col'>
                    <h3 className='w-2/3 text-2xl text-nowrap tracking-wide font-bold text-white lg:text-4xl'>{props.title}</h3>
                    <p className='text-slate-500'>{props.director}</p>
                </div>
                <div className='w-full h-full flex flex-col mt-8 justify-between'>
                    <p className='line-clamp-6 text-white/70 text-sm'>{props.description}</p>
                    <div className='w-full h-auto flex items-center justify-start gap-1 pl-1'>
                        <span className='flex gap-2 mt-[1px]'>{props.star}</span>
                        <img src={Star} alt="logo_etoile" className='w-[1rem]' />
                    </div>
                </div>

            </div>
            <div className='w-1/2 h-[90%] flex flex-col items-end justify-between'>
                <img src={props.img} alt="imageDuFilm" className='w-[90%] h-fit rounded-s-sm' />
                <Button variant="cineYellow" className="w-[90%]">Réserver</Button>
            </div>
        </div>
    )
}


