import React, { useState } from "react";
import Avatar2 from "../assets/avatar.jpg";
import { format, parse } from "date-fns";
import { fr } from "date-fns/locale";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const MOVIE_DATE = [
    {
        date: "24-12-2024",
        time: "21:30",
    },
    {
        date: "27-12-2024",
        time: "20:15",
    },
    {
        date: "29-11-2024",
        time: "12:00",
    },
    {
        date: "30-11-2024",
        time: "19:30",
    },
    {
        date: "01-12-2024",
        time: "08:30",
    },
];

const sortDates = (dates) => {
    return dates.sort((a, b) => {
        const dateA = parse(a.date, "dd-MM-yyyy", new Date());
        const dateB = parse(b.date, "dd-MM-yyyy", new Date());
        return dateA - dateB;
    });
};

const formatDate = (dateString) => {
    const date = parse(dateString, "dd-MM-yyyy", new Date());
    if (isNaN(date)) {
        console.error("Invalid date:", dateString);
        return "";
    }

    const day = format(date, "d");
    const shortMonth = format(date, "MMM", { locale: fr });
    return `${day} ${shortMonth.charAt(0).toUpperCase() + shortMonth.slice(1)}`;
};

const MovieDateCard = ({ date, time, isActive }) => (
    <div className={` ${isActive ? "bg-cineYellow" : 'border border-neutral-500'} min-w-[20vw] h-36 rounded-lg flex flex-col items-center text-white p-4 gap-4`}>
        <div className="w-full h-2/3 text-center flex flex-col justify-center items-center text-[130%]">
            <p>{formatDate(date)}</p>
        </div>
        <div className="w-full h-1/3 text-center flex flex-col justify-center items-center text-[125%]">
            <p>{time}</p>
        </div>
    </div>
);


const CustomCard = () => {
    return (
        <div className="border border-neutral-500 min-w-[20vw] h-36 rounded-lg flex flex-col items-center justify-center text-white p-4 gap-4">
            <svg
                width="24px"
                height="24px"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="white"
            >
                <path
                    d="M15 4V2M15 4V6M15 4H10.5M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10H3Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M3 10V6C3 4.89543 3.89543 4 5 4H7"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M7 2V6"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M21 10V6C21 4.89543 20.1046 4 19 4H18.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};

export default function Movie() {
    const sortedDates = sortDates(MOVIE_DATE);

    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();

    // Date du jour formatée
    const formattedDate = `${day}-${month}-${year}`;

    return (
        <main className="flex flex-col items-center gap-2">
            <section
                className="h-[75svh] w-full flex flex-col items-center justify-end gap-9 bg-cover bg-center bg-no-repeat"
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
                <div className="w-full flex items-center flex-col justify-center gap-2">
                    <h2 className="font-display text-2xl tracking-wide font-bold text-white lg:text-4xl">
                        Avatar 2
                    </h2>
                    <p className="text-white/50">Action, Âge légal 16/16 ans</p>
                </div>
            </section>

            <section className="h-auto w-[90vw] flex flex-col gap-9 mt-20">
                <h2 className="font-display text-lg tracking-wide font-bold text-white lg:text-4xl">
                    Prochaine séances
                </h2>
                <div className="w-full h-auto flex items-center gap-4 overflow-x-scroll">
                    <MovieDateCard date={formattedDate} time={"19:30"} isActive={true} />
                    {sortedDates.map((movie, index) => (
                        <MovieDateCard key={index} {...movie} />
                    ))}
                    <CustomCard />
                </div>
            </section>

            <section className="h-auto w-[90vw] flex flex-col gap-9 mt-20">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Séance: 08.10.2028 12:30</TableHead>
                            <TableHead>Prix</TableHead>
                            <TableHead className="text-right">Quantité</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Adulte</TableCell>
                            <TableCell>$250.00</TableCell>
                            <TableCell className="text-right">Paid</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Étudiants / Chomage</TableCell>
                            <TableCell>$250.00</TableCell>
                            <TableCell className="text-right">Paid</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">{"Enfants (en dessous de 16 ans)"}</TableCell>
                            <TableCell>$250.00</TableCell>
                            <TableCell className="text-right">Paid</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </section>
        </main>
    );
}
