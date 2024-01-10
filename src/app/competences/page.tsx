import Header from "@/app/header/header";
import Carte from "@/app/carteCompetences/carte";
import React from "react";

export default function Home() {
    return (
        <main>
            <div>
                <Header />
                <Carte/>
            </div>
        </main>
    )
}
