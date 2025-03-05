"use client"
import Image from "next/image";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


export default function footer() {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <footer>
            <ul className="flex justify-between font-serif text-sm">
                <li>
                    <Image
                        src={'/logo_ab_net.png'}
                        width={100}
                        height={100}
                        alt="logo socité ab net"
                    />
                </li>
                <li onClick={handleScrollToTop} className="self-end p-4 mx-4 text-white bg-gray-300 rounded-full cursor-pointer">
                    <FaArrowUp />
                </li>
            </ul>
            <ul>
                <li>
                    <div className="flex items-center justify-between p-4">
                        <Link href={'/page_4'}>CGV & RGPD</Link>
                        <ul className="flex gap-3 text-2xl cursor-pointer">
                            <li><FaInstagram /></li>
                            <li><FaFacebook /></li>
                            <li><FaLinkedinIn /></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </footer>
    );
}