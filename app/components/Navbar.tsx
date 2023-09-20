import Link from "next/link"


export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-1 sticky top-0 drop-shadow-xl z-10">
        <div className="md:px-6 prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
            <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                <Link href="/" className="text-white/90 no-underline hover:text-white">Altai Gantumur
                </Link>
            </h1>
            <div className="flex flex-row justify-center gap-3">
                
                <Link href="/programming" className="text-white/90 no-underline hover:text-white">Programming</Link>
                <Link href="/health" className="text-white/90 no-underline hover:text-white">Health and Science</Link>
                <Link href="/training" className="text-white/90 no-underline hover:text-white">Basketball and Training</Link>
                <Link href="/art" className="text-white/90 no-underline hover:text-white">Art and Drawing</Link>
                <Link href="/books" className="text-white/90 no-underline hover:text-white">Books</Link>
                <Link href="/movies" className="text-white/90 no-underline hover:text-white">Movies</Link>
                <Link href="/other" className="text-white/90 no-underline hover:text-white">Other</Link>
            </div>
            
            

        </div>
    </nav>
  )
}
