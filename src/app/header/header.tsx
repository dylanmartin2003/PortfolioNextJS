export default function header() {
    return (
        <header className="flex items-center justify-between px-4 py-6 md:px-8 lg:px-12 bg-cyan-500">
            <a className="flex items-center" href="/">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                >
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                </svg>
                <span className="pl-3 text-base">MARTIN Dylan</span>
            </a>
            <nav className="flex gap-4 lg:gap-8">
                <a className="text-sm sm:text-base font-medium hover:text-sky-900" href="/competences">
                    Compétences
                </a>
                <a className="text-sm md:text-base font-medium hover:text-sky-900" href="/projets">
                    Projets
                </a>
                <a className="text-sm md:text-base font-medium hover:text-sky-900" href="/contacts">
                    Contact
                </a>
            </nav>

        </header>
    )
}
