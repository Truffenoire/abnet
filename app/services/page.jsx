import Image from "next/image";

export default function page() {
    return (
        <div className="">
            <div className="copro bg-[url('/fond_bulles.jpg')] bg-cover bg-center">
                <h1 className="uppercase text-4xl text-center font-bold m-4">copropriété</h1>
                <div className="p-2 flex flex-col gap-4 text-lg">
                    <p>Vous êtes syndic, bailleur social, gestionnaire ou propriétaire d'un ou plisieurs immeubles en copropriété ?</p>
                    <p>En nous confiant l'entretien de votre proprité, vous profiterez de nos équipes habitueés aux méthodes de nettoyage professionnelles des immeubles.</p>
                    <p>Votre copropriété est ainsi propre et agréable, assurant son attractivité et sa valorisation.</p>
                </div>
                <div className="flex flex-col gap-4 p-2 items-center">
                    <div className="justify-items-center w-full ">
                        <Image
                            src={'/ascenceur.jpg'}
                            alt="logo ascenceur"
                            width={200}
                            height={200}
                            className="h-[200px] object-cover rounded-full object-center"
                        />
                        <h5 className="text-center text-orange-400 font-bold text-xl">Nettoyage des parties communes</h5>
                    </div>
                    <div className="justify-items-center w-full">
                        <Image
                            src={'/recycle.jpg'}
                            alt="logo recyclage"
                            width={200}
                            height={200}
                            className="h-[200px] object-cover rounded-full object-bottom"

                        />
                        <h5 className="text-center text-orange-400 font-bold text-xl">Entrée et sortie des containers</h5>
                    </div>
                    <div className="justify-items-center w-full">
                        <Image
                            src={'/vitres.jpg'}
                            alt="logo nettoyage de vitre"
                            width={200}
                            height={200}
                            className="h-[200px] object-cover rounded-full object-bottom"

                        />
                        <h5 className="text-center text-orange-400 font-bold text-xl">Nettoyage des vitreries et mirroirs</h5>
                    </div>
                    <div className="justify-items-center w-full">
                        <Image
                            src={'/balai.jpg'}
                            alt="logo balai"
                            width={200}
                            height={200}
                            className="h-[200px] object-cover rounded-full object-bottom"
                        />
                        <h5 className="text-center text-orange-400 font-bold text-xl">Remise en état suite à changement de locataire, travaux, sinistre...</h5>
                    </div>
                    <div className="justify-items-center w-full">
                        <Image
                            src={'/parking.jpg'}
                            alt="logo panneau parking"
                            width={200}
                            height={200}
                            className="h-[200px] object-cover rounded-full object-bottom"

                        />
                        <h5 className="text-center text-orange-400 font-bold text-xl">Etretien extérieur parkings; garages, porches</h5>
                    </div>
                </div>
            </div>
            <div className="chantier mt-10">
                <div className="h_groupe">
                    <h2 className="text-blue-950 text-3xl md:text-5xl px-2 font-bold uppercase md:ml-10">remise en état</h2>
                    <h2 className="text-orange-500 text-4xl md:text-6xl px-2 font-bold uppercase ml-2 md:ml-20">fin de chantier</h2>
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
        </div>
    );
}
