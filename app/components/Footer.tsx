import Link from "next/link"
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa"

export default function Footer() {
    return (
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl bg-zinc-800">

                <Link className="text-white/90 hover:text-white" href="#">
                    <FaYoutube />
                </Link>
                <Link className="text-white/90 hover:text-white" href="#">
                    <FaLaptop />
                </Link>
                <Link className="text-white/90 hover:text-white" href="#">
                    <FaGithub />
                </Link>
                <Link className="text-white/90 hover:text-white" href="#">
                    <FaTwitter />
                </Link>
                
            </div>
    )
}