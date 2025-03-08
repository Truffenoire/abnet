import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function page() {
    return (
        <div className="dark:bg-white dark:text-black">
            <div className="chantier mt-10 dark:bg-white dark:text-black">
                <div className="h_groupe">
                    <h2 className="text-blue-950 text-3xl md:text-5xl px-2 font-bold uppercase md:ml-10">remise en état</h2>
                    <h2 className="text-orange-500 text-4xl md:text-6xl px-2 font-bold uppercase ml-2 md:ml-20 title">fin de chantier</h2>
                </div>
                <div className="mt-5 flex flex-col gap-10 text-xl">
                    <div
                        className="w-[60%] h-[100px] m-2 font-bold bg-red-300 text-white bg-[url('/life-style.jpg')] bg-cover bg-bottom">
                        Étape 1 : après levée de reserve
                    </div>
                    <div
                        className="w-[80%] h-[100px] m-2 font-bold bg-red-300 text-white text-center bg-[url('/life-style.jpg')] bg-cover bg-top">
                        Étape 2 : avant O.P.R.
                    </div>
                    <div
                        className="w-[95%] h-[100px] m-2 font-bold bg-red-300 text-white text-end bg-[url('/life-style.jpg')] bg-cover bg-center">
                        Étape 3 : après réception
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-2 p-2 text-lg">
                        <p>
                            En fin de chantier, le client doit obligatoirement procéder au nettoyage complet des lieux afin que ceux-ci soient remis
                            en état.
                        </p>
                        <p>
                            C'est une obligation contractuelle qui doit être respectée, sous peine de sanction.
                        </p>
                        <p>
                            Elle s'applique à tout sous-traintant ou agent travaillant sur le site. Cela inclut également ceux qui sont lié
                            au projet, tels que les fournisseurs ou les sous-traitants.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold m-4 border-2 p-2 border-blue-900">
                            La norme NF P03-001 encadre cette obligation de nettoyage :
                            "Chaque entrepreneur, après intervention en un lieu donné, doit laisser l'emplacement propre et libre de tout déchet.
                            L'entrepreneur quo lui succède est en droit d'exiger cet état de propreté avant d'entreprendre ses travaux (...)
                            Chaque entrepreneur aura la charge de procéder au nettoyage de ses propres ouvrages même si
                            les documents du marché attribuent le nettoyage du chantier à un lot déterminé".
                        </p>
                    </div>
                </div>
            </div>
            <div className="debarra my-10 dark:bg-white dark:text-black">
                <div className="flex flex-col bg-[url('/cube_orange.png')] bg-cover bg-center text-white h-[60vh] p-4">
                    <h2 className="title uppercase text-4xl md:text-6xl font-bold border-b-4">debarrassage</h2>
                    <div className="flex flex-col justify-around flex-1 text-xl md:text-4xl font-bold uppercase">
                        <div className="title inline-block origin-bottom">Chantier btp</div>
                        <div className="title self-center inline-block origin-bottom">appartements et maisons</div>
                        <div className="title self-end inline-block origin-bottom">Locaux et caves</div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 text-lg">
                    <div className="h-[40vh] p-10">
                        <h4 className="uppercase font-bold text-3xl md:text-5xl">artisans</h4>
                        <div className="p-4">
                            <FaLongArrowAltRight
                                size={50}
                                className="float-left rounded-full shape"
                            />
                            <p className="w-full">
                                <span className="ml-4">Nous </span>intervenons en début et en fin de chantier afin d'évacuer les détritus post travaux.
                            </p>
                        </div>
                    </div>
                    <div className="h-[40vh] p-10 bg-linear-to-r to-orange-300 from-orange-200 text-white title font-bold">
                        <h4 className="uppercase font-bold text-3xl md:text-5xl">syndics</h4>
                        <div className="p-4">
                            <FaLongArrowAltRight
                                size={50}
                                className="float-left rounded-full shape"
                            />
                            <p>
                                <span className="ml-4">Nous </span>intervenons à la demande des syndicats de copropriété pour tous les enlèvements dans les parties communes et les caves.
                            </p>
                        </div>
                    </div>
                    <div className="h-[40vh] p-10 bg-linear-to-l to-red-500 from-orange-300 text-white title font-bold">
                        <div className="p-4">
                            <FaLongArrowAltRight
                                size={50}
                                className="float-left rounded-full shape"
                            />
                            <p>
                                <span className="ml-4">Nous </span>débarrassons et déblayons tous les locaux commerciaux, entrepôts, hangars, bureaux, ateliers etc...
                            </p>
                        </div>
                    </div>
                    <div className="h-[40vh] p-10">
                        <div className="p-4">
                            <FaLongArrowAltRight
                                size={50}
                                className="float-left rounded-full shape"
                            />
                            <p>
                                <span className="ml-4">Vous </span> souhaitez vous débarrasser et faire détruire des archives, dossiers ou tous support de données de stockage.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
