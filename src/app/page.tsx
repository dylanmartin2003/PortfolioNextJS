import Image from 'next/image'
import Header from "@/app/header/header";

export default function Home() {
  return (
    <main>
        <div>
            <Header/>
            <section className="py-12 mx-auto section-home">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                    {/* Photo à gauche */}
                    <div className="mb-8 md:mb-0 md:mr-8 pres">
                        <img
                            src="https://fakeimg.pl/400x300/"
                            alt="Ma Photo"
                            className="w-full h-auto rounded-md shadow-md"
                        />
                    </div>

                    <div className="max-w-md">
                    <h2 className="text-3xl font-bold mb-4">Bienvenue sur ma page de présentation</h2>
                        <p className="text-gray-600 mb-4">
                            Je suis Dylan, un développeur passionné par [vos intérêts et compétences].
                        </p>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis felis vel mi eleifend
                            aliquam vel nec ligula. Vivamus a nisi et leo interdum tincidunt. Vestibulum fringilla
                            risus et justo ullamcorper, nec bibendum ex posuere.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    </main>
  )
}
