import React from "react";
import { useNavigate } from "react-router-dom";
import EmblaCarousel from "./EmblaCarousel";
import TextReveal from "@/components/ui/text-reveal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import StarIcon from "@/assets/star.svg";
import newsletterImg from "../assets/newsletter.svg";
import Avatar2 from "../assets/avatar.jpg";
import Cars from "../assets/cars.jpg";
import Equalizer from "../assets/equalizer.jpg";
import FF3 from "../assets/tokyo_drift.jpg";

const SLIDES = [Avatar2, Cars, Equalizer, FF3];
const OPTIONS = { loop: true, autoplay: true };
const MOVIES = [
    {
        title: "Avatar 2",
        director: "James Cameron",
        description:
            "Jake Sully et Ney'tiri ont formé une famille et font tout pour rester aussi soudés que possible. Ils sont cependant contraints de quitter leur foyer.",
        img: Avatar2,
        star: 3,
    },
    {
        title: "Fast & Furious",
        director: "Rob Cohen",
        description:
            "Dominic Toretto règne sur les rues de Los Angeles, avec son équipe passionnée de vitesse, défiant les limites dans des rodéos urbains à plus de 250 km/h.",
        img: FF3,
        star: 5,
    },
    {
        title: "Equalizer",
        director: "Antoine Fuqua",
        description:
            "Depuis qu'il a renoncé à sa vie d'assassin au service du gouvernement, Robert McCall peine à faire la paix avec ses démons du passé et trouve un étrange réconfort en défendant les opprimés.",
        img: Equalizer,
        star: 5,
    },
    {
        title: "Cars",
        director: "John Lasseter",
        description:
            "L'histoire se situe dans une espèce de monde parallèle peuplés de voitures vivantes qui ont remplacé les humains. Flash McQueen est une jeune voiture de course égocentrique avide de succès.",
        img: Cars,
        star: 5,
    },
];

const MovieCard = ({ title, director, description, img, star }) => (
    <div className="w-full h-[22em] flex justify-between items-center border-t-2 border-white/20">
        <div className="p-2 w-1/2 h-[90%] flex flex-col items-start justify-between gap-16">
            <div>
                <h3 className="text-2xl font-bold text-white lg:text-4xl">{title}</h3>
                <p className="text-slate-500">{director}</p>
            </div>
            <div className="mt-8">
                <p className="line-clamp-6 text-white/70 text-sm">{description}</p>
                <div className="flex items-center justify-start gap-1 mt-3">
                    <span>{star}</span>
                    <img src={StarIcon} alt="star" className="w-4" />
                </div>
            </div>
        </div>
        <div className="w-1/2 h-[90%] flex flex-col items-end">
            <img src={img} alt={`${title} poster`} className="w-[90%] rounded-s-sm" />
            <Button variant="cineYellow" className="w-[90%] mt-2">
                Réserver
            </Button>
        </div>
    </div>
);

export default function Home() {
    const navigate = useNavigate();

    return (
        <main className="flex flex-col items-center gap-20 pt-10">

            <section className="w-[90vw] flex flex-col gap-8">
                <h2 className="text-2xl font-bold text-white lg:text-4xl">L'affiche</h2>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                <div className='w-full h-auto flex flex-col pl-4 pr-4 gap-4'>
                    <div className='w-full h-2/4 flex justify-between gap-4 items-start flex-nowrap'>
                        <p className='text-white/50'>Action, Âge légal 16/16 ans</p>
                        <div className='w-auto h-full flex items-center justify-end gap-1'>
                            <span className='flex gap-2 text-white/50'>5</span>
                            <img src={StarIcon} alt="logo_etoile" className='w-[1rem] opacity-85' />
                        </div>
                    </div>
                    <div className='w-full h-2/4 flex justify-between gap-4 items-end'>
                        <Button variant="cineYellow" className="w-full">Réserver</Button>
                    </div>
                </div>
            </section>

            <section className="w-[90vw] flex flex-col gap-9">
                <h2 className="text-2xl font-bold text-white lg:text-4xl">
                    Tous les films
                </h2>
                {MOVIES.map((movie, index) => (
                    <MovieCard key={index} {...movie} />
                ))}
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        {[1, 2, 3].map((page) => (
                            <PaginationItem key={page}>
                                <PaginationLink href="#" isActive={page === 1}>
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </section>


            <section className="w-[90vw] flex items-center justify-center">
                <TextReveal text="Vivez le cinéma autrement avec Cineboy, là où chaque film devient une aventure." />
            </section>


            <section className="w-[90vw] p-9 flex flex-col gap-6 md:max-w-[40vw]">
                <h1 className="text-4xl font-bold text-white lg:text-5xl">
                    Newsletter
                </h1>
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <p className="text-white/50">
                        Ne manquez plus aucun film culte ! Inscrivez-vous à la newsletter de
                        Cineboy et vivez le cinéma au quotidien.
                    </p>
                    <img
                        src={newsletterImg}
                        alt="Newsletter"
                        className="w-[8em] md:w-[18em]"
                    />
                </div>
                <div className="flex w-full gap-4">
                    <Input placeholder="Email" />
                    <Button variant="cineYellow">Go</Button>
                </div>
            </section>
        </main>
    );
}
