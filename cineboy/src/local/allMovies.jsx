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

export default function AllMovies() {
    return (
        <main className='flex flex-col items-center gap-2 pt-10'>
            <section className='h-auto w-[90vw] flex flex-col gap-9'>
                <h2 className="font-display text-2xl tracking-wide font-bold text-white lg:text-4xl">L'affiche</h2>
                <div className='w-full h-auto flex flex-col'>
                    <MovieCard title={"Avatar 2"} director={"James Cameron"} description="Jake Sully et Ney'tiri ont formé une famille et font tout pour rester aussi soudés que possible. Ils sont cependant contraints de quitter leur foyer." img={Avatar2} star={3} />
                    <MovieCard title={"Fast & Furious"} director={"Rob Cohen"} description={"Dominic Toretto règne sur les rues de Los Angeles, avec son équipe passionnée de vitesse, défiant les limites dans des rodéos urbains à plus de 250 km/h."} img={FF3} star={5} />
                    <MovieCard title={"Equalizer"} director={"Antoine Fuqua"} description={"Depuis qu'il a renoncé à sa vie d'assassin au service du gouvernement, Robert McCall peine à faire la paix avec ses démons du passé et trouve un étrange réconfort en défendant les opprimés"} img={Equalizer} star={5} />
                    <MovieCard title={"Cars"} director={"John Lasseter"} description={"L'histoire se situe dans une espèce de monde parallèle peuplés de voitures vivantes qui ont remplacer les humains . Flash McQueen est une jeune voiture de course égocentrique avide de succès et promis à un belle avenir qui ne pense qu'à remporter de nombreuses course et ne se souçiant guère des autres."} img={Cars} star={5} />
                </div>
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


