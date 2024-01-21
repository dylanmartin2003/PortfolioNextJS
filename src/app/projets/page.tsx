import Header from "@/app/header/header";
import React from "react";
import Image from 'next/image';
import spaceInvadersPic from './spaceInvaders.webp';
import pokemonPic from './pokemon.webp';
import marathonPic from './marathonWeb.webp';
import meteoPic from './meteo.webp';
import tictactoePic from './tic_tac-toe.webp';

const Projets = () => {
    const projects = [
        {
            title: "Space invaders",
            description: "Réalisation d’uns space invader en java grâce à JavaFX par équipe de 4. Ce projet m’a permis de mettre en pratique les patrons de conceptions en Java.",
            link: "https://gitlab.univ-artois.fr/thomas-dylan-thimo-vincent/projet-2022-2023",
            imageSrc: spaceInvadersPic,
        },
        {
            title: "Projet Pokémon",
            description: "Création d’une application web pour gérer une liste de Pokémons, d’utilisateur et de jeux en PHP. Pour réaliser ce projet, j’ai utilisé le framework Laravel et pour Breeze gérer l’authentification des utilisateurs.",
            link: "https://gitlab.univ-artois.fr/dylan_martin/projet-pokemon",
            imageSrc: pokemonPic,
        },
        {
            title: "Marathon Web",
            description: "Réalisation d’un site web en 48h, par équipe (Info + MMI). Ce projet m’a permis de réaliser un projet dans une grande équipe avec un enjeu et des délais stricts.",
            link: "https://gitlab.univ-artois.fr/leo_mosse/marathon-web-barons-du-web",
            imageSrc: marathonPic,
        },
        {
            title: "Application météo",
            description: "Réalisation d’une application web en Python avec Flask et utilisation d’API permettant de récupérer automatiquement les informations météorologiques de certaines villes ",
            link: "https://gitlab.univ-artois.fr/thomas-dylan-thimo-vincent/projetmsi",
            imageSrc: meteoPic,
        },
        {
            title: "Tic Tac Toe",
            description: "Pour un test technique j’ai réalisé un Tic Tac Toe en React en 24h, ce projet m’a permis de découvrir le JavaScript et le React.",
            link: "https://gitlab.univ-artois.fr/dylan_martin/tic-tac-toe",
            imageSrc: tictactoePic,
        },
        {
            title: "Projet 6",
            description: "Description du projet 6.",
            link: "https://example.com/project3",
            imageSrc: pokemonPic,
        },
    ];

    return (
        <main>
            <Header/>
            <section className="py-12">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Mes projets</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="p-6 rounded-md shadow-md bg-slate-300">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <Image
                                    src={project.imageSrc}
                                    alt={project.title}
                                    priority={false}
                                />
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-950 hover:underline"
                                >
                                    Voir le projet
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Projets;
