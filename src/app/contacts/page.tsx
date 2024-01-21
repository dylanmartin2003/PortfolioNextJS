import Image from 'next/image'
import Header from "@/app/header/header";
import React from "react";

export default function Home() {
    return (
        <main>
            <div>
                <Header />
                <div className="container mx-auto my-8 p-8 bg-white shadow-md rounded-md">
                    <h2 className="text-2xl font-bold mb-6">Coordonnées</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-sm font-medium text-gray-700">Nom :</p>
                            <p className="mt-1 text-lg font-semibold">Martin Dylan</p>
                        </div>

                        <div>
                            <p className="text-sm font-medium text-gray-700">Âge :</p>
                            <p className="mt-1 text-lg font-semibold">20 ans</p>
                        </div>

                        <div>
                            <p className="text-sm font-medium text-gray-700">Formation :</p>
                            <p className="mt-1 text-lg font-semibold">BUT Informatique, IUT Lens.</p>
                        </div>

                        <div>
                            <p className="text-sm font-medium text-gray-700">Ville :</p>
                            <p className="mt-1 text-lg font-semibold">Mazingarbe</p>
                        </div>

                        <div>
                            <p className="text-sm font-medium text-gray-700">Mail :</p>
                            <p className="mt-1 text-lg font-semibold">martindylan0406@gmail.com</p>
                        </div>

                        <div>
                            <p className="text-sm font-medium text-gray-700">Poste :</p>
                            <p className="mt-1 text-lg font-semibold">En alternance en informatique chez Lenrek
                                Informatique</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
