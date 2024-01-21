import Header from "@/app/header/header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
        <div>
            <Header/>
            <div
                className="container mx-auto bg-white p-8 shadow-md rounded-md flex flex-col items-center justify-center mt-8 lg:flex-row">
                <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                    <Image src="https://via.placeholder.com/400" alt="Placeholder Image"
                           width={400} height={400}/>
                </div>
                <div className="w-full lg:w-1/2 p-4">
                    <h2 className="text-2xl font-bold mb-4">MARTIN Dylan</h2>
                    <p>Je m'appelle Martin Dylan, j'ai 20 ans et je suis passionné par l'informatique. Actuellement, je suis en alternance chez Lenrek Informatique, où je m'immerge dans le monde captivant des technologies et des solutions informatiques.
                        Mon parcours dans le domaine informatique a été une aventure stimulante, m'offrant des opportunités d'apprentissage constant. Mon intérêt pour l'informatique va au-delà des simples lignes de code ; j'aime explorer les nouvelles tendances technologiques, résoudre des problèmes complexes et contribuer à des projets innovants.
                        En tant que jeune professionnel, je suis constamment en quête de nouvelles connaissances et d'expériences enrichissantes. Travailler en alternance chez Lenrek Informatique m'offre l'occasion idéale d'appliquer mes compétences tout en apprenant aux côtés d'experts du secteur.</p>
                </div>
            </div>
        </div>
    </main>
  )
}
