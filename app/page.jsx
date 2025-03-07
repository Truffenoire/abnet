'use client'
import Image from "next/image";
import { TaskContext } from "./components/taskContext";
import { useContext } from "react";
import { Gravitas_One, Signika } from "next/font/google";

const gravitas_one = Gravitas_One({
  weight: ['400'],
  subsets: ["latin"],
});
const signika = Signika({
  weight: ['300','400', '500', '600', '700'],
  subsets: ["latin"],
});

export default function Home() {

  const { tasks } = useContext(TaskContext);
  
  return (
    <div className="flex flex-col dark:bg-white dark:text-black">
      <div className="flex flex-1 bg-blue-950 text-white">
        <div className="flex flex-col justify-center items-center w-full relative">
          <div className="absolute w-[100vw] h-[70vh]">
            <video
              className="object-cover top-0 left-0 h-[70vh] w-[100vw]"
              autoPlay
              loop
              muted
              width="auto"
              height="auto"
            // controls preload="none"
            >
              <source src="/water_wach2.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={`${signika.className} title text-center self-center font-bold z-10 text-white text-3xl md:text-5xl uppercase p-6 lg:p-12 rounded-2xl `}>entreprise de nettoyage</div>
          <button className={`${gravitas_one.className} title z-10 border-2 px-6 py-4 mt-6 hover:bg-blue-950 transition-all duration-750`}>devis gratuit</button>
        </div>
      </div>
      <div className="md:flex justify-center items-center mt-[25vh] lg:h-[70vh] md:mt-[30vh]">
        <div className="text-center p-6 lg:w-1/2 text-3xl lg:text-5xl lg:rotate-90 origin-center uppercase">
          <span className={`${gravitas_one.className} font-bold text-blue-950`}>mission </span>
          et<br />
          <span className={`${gravitas_one.className} font-bold text-blue-950`}>vision</span>
        </div>
        <div className="lg:w-1/2 p-2">
          <Image
            src={'/nettoyage_vitre.avif'}
            alt="nettoyage d'une vitre"
            className="rounded-lg shadow-[1px_1px_13px_black]"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="border-t-2 p-2">
        <h1 className="text-3xl font-semibold text-center"><span className={`${gravitas_one.className} font-bold text-blue-950`}>AB NET</span>, une société de nettoyage réactive et à l'écoute de ses clients</h1>
        <div className="p-2 md:p-8 text-center">
          <p className="p-2">Nous contribuons <span className="font-bold">depuis plus d'une décennie </span> au bien-être et à la satisfaction de nos clients.</p>
          <p className="p-2">En travaillant en collaboration, nous développons des services tournés vers le bien-être et la <span className="font-bold">bienveillance</span>, dans une démarche de fidélisation des occupants et de <span className="font-bold">valorisation de l’image de marque de nos clients</span>.</p>
          <p className="p-2">Nous comprenons que la propreté est essentielle pour créer un environnement de travail ou de vie agréable et sain.</p>
          <p className="p-2">C'est pourquoi nous mettons en place des protocoles de nettoyage rigoureux, utilisant des produits et des techniques de pointe pour garantir une propreté impeccable et une désinfection optimale.
            Nous disposons d'une gamme complète de services de nettoyage destiné aux entreprises.</p>
          <p className="p-2"><span className="font-bold">Nos équipes de professionnels formés et expérimentés</span> sont à votre disposition pour vous offrir un service sur mesure, adapté à vos besoins et à votre budget.</p>
          <p className="p-2"><span className="font-bold">Laissez vous guider au quotidien par un service de qualité</span>, qui allie performance et bien-être de vos occupants.</p>
        </div>
      </div>
      <div>
        <h3 className={`${signika.className} self-center z-10 text-2xl md:text-5xl uppercase p-6 lg:p-12 my-2 border-b-2`}>nos engagements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-center p-6 bg-blue-950 text-white">
          <div className="p-8 border-b-2">
            <h4 className="font-bold uppercase">réactivité</h4>
            <div className="min-h-[100px] flex justify-center items-center">
              <Image
                src={'/fast.png'}
                alt="symbol de"
                width={100}
                height={100}
              />
            </div>
            <p>
              Etre proche de vous, c'est répondre au plus vite à vos demandes les plus urgentes et aux imprévus
            </p>
          </div>
          <div className="p-8 border-b-2">
            <h4 className="font-bold uppercase">proximité</h4>
            <div className="min-h-[100px] flex justify-center items-center">
              <Image
                src={'/hand.png'}
                alt="symbol de"
                width={100}
                height={100}
              />
            </div>
            <p>
              Un nombre d'interlocuteur réduit privilégiant la proximité avec ses partenaires
            </p>
          </div>
          <div className="p-8 border-b-2 md:border-b-0">
            <h4 className="font-bold uppercase">éfficacité</h4>
            <div className="min-h-[100px] flex justify-center items-center">
              <Image
                src={'/clock.png'}
                alt="symbol de"
                width={100}
                height={100}
              />
            </div>
            <p>
              Nous sommes ouvert 7j/7
              Une équipe efficace et réactive à l'écoute de vos besoins
            </p>
          </div>
          <div className="p-8">
            <h4 className="font-bold uppercase">qualité</h4>
            <div className="min-h-[100px] flex justify-center items-center">
              <Image
                src={'/jewel.png'}
                alt="symbol de"
                width={100}
                height={100}
              />
            </div>
            <p>
              Un personnel formé et équipé de matériel professionnel performant
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
