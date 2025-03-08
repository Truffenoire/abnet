'use client'
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { RiAdminFill } from "react-icons/ri";


export default function menu() {
    gsap.registerPlugin(ScrollTrigger);
    const [isOpen, setIsOpen] = useState(false);

    const menuRef = useRef(null)
    useEffect(() => {
        gsap.from('.animated', {
            width: 0,
            duration: .3,
        })
    }, [isOpen]);
    useEffect(() => {
        gsap.to(menuRef.current,
            {
                height: '10vh',
                position: "fixed",
                top: 0,
                z: 100,
                color: "black",
                width: '95%',
                border: "2px solid black",
                backgroundColor: "white",
                scrollTrigger: {
                    // trigger: ".scroller",
                    // trigger: ".trigger_object",
                    // markers: true,
                    start: '+=100',
                    end: '+=100',
                    scrub: true,

                }
            }
        )
    }, [])

    return (
        <nav className='z-20 flex justify-center p-2 dark:bg-white dark:text-black'>
            <div ref={menuRef} className='z-20 flex items-center w-[95%] rounded-xl justify-between md:text-gray-600'>
                <Image
                    src={'/logo_ab_net.png'}
                    width={50}
                    height={50}
                    alt='logo entreprise'
                    className='ml-2 rounded-lg'
                />
                <ul className='hidden md:flex justify-around items-center rounded-b-xl w-full p-2 uppercase'>
                    <li><Link className='hover:bg-gray-200 p-2 px-6 rounded-xl border-2' href={'/'}>Accueil</Link></li>
                    <li><Link className='hover:bg-gray-200 p-2 px-6 rounded-xl border-2' href={'/task'}>Travaux</Link></li>
                    <li><Link className='hover:bg-gray-200 p-2 px-6 rounded-xl border-2' href={'/chantiers'}>Chantiers</Link></li>
                    <li><Link className='hover:bg-gray-200 p-2 px-6 rounded-xl border-2' href={'/locaux'}>Locaux</Link></li>
                    <li><Link className='hover:bg-gray-200 p-2 px-6 rounded-xl border-2' href={'/contact'}>Contact</Link></li>
                    <li><Link className='hover:bg-gray-200 flex flex-col items-center w-[50px] p-2 px-6 rounded-xl border-2' aria-label='menu admin' title='menu admin' href={'/admin'}><RiAdminFill /></Link></li>
                </ul>
                <button aria-label="menu" className="md:hidden p-6 mr-4" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w.org/http/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
                <div className={`md:hidden ${isOpen ? 'block text-black' : 'hidden'} z-20 w-full absolute left-0 top-[12vh] bg-white animated`}>
                    <ul className="flex flex-col items-center border-2">
                        <Link onClick={() => setIsOpen(false)} className="w-[150px] text-center p-3 border-[3px] border-transparent hover:border-black" href={'/'}>Accueil</Link>
                        <Link onClick={() => setIsOpen(false)} className="w-[150px] text-center p-3 border-[3px] border-transparent hover:border-black" href={'/task'}>Travaux</Link>
                        <Link onClick={() => setIsOpen(false)} className="w-[150px] text-center p-3 border-[3px] border-transparent hover:border-black" href={'/chantiers'}>Chantiers</Link>
                        <Link onClick={() => setIsOpen(false)} className="w-[150px] text-center p-3 border-[3px] border-transparent hover:border-black" href={'/locaux'}>Locaux</Link>
                        <Link onClick={() => setIsOpen(false)} className="w-[150px] text-center p-3 border-[3px] border-transparent hover:border-black" href={'/contact'}>Contact</Link>
                        <div>
                            <Link onClick={() => setIsOpen(false)} aria-label="menu admin" title='menu admin' className="w-[150px] text-center p-3 border-[3px] border-transparent hover:border-black" href={'/admin'}><RiAdminFill /></Link>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
