import Image from 'next/image'
import Header from "@/app/header/header";
import React from "react";

const Projets = () => {
    const projects = [
        {
            title: 'Projet 1',
            description: 'Description du projet 1.',
            link: 'https://example.com/project1',
        },
        {
            title: 'Projet 2',
            description: 'Description du projet 2.',
            link: 'https://example.com/project2',
        },
        {
            title: 'Projet 3',
            description: 'Description du projet 3.',
            link: 'https://example.com/project3',
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
                            <div key={index} className="bg-gray-100 p-6 rounded-md shadow-md">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
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
