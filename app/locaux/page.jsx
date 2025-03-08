import Image from "next/image";

export default function page() {
    return (
        <div className="dark:bg-white dark:text-black">
            <div className="copro bg-[url('/fond_bulles.jpg')] bg-cover bg-center">
                <h1 className="uppercase text-4xl md:text-6xl text-center font-bold p-4 text-white title">copropriété</h1>
                <div className="p-2 flex flex-col gap-4 text-lg md:text-2xl">
                    <p>Vous êtes syndic, bailleur social, gestionnaire ou propriétaire d'un ou plisieurs immeubles en copropriété ?</p>
                    <p>En nous confiant l'entretien de votre proprité, vous profiterez de nos équipes habitueés aux méthodes de nettoyage professionnelles des immeubles.</p>
                    <p>Votre copropriété est ainsi propre et agréable, assurant son attractivité et sa valorisation.</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 p-2 items-center">
                    <div className="justify-items-center w-full ">
                        <Image
                            src={'/ascenceur.jpg'}
                            alt="logo ascenceur"
                            width={200}
                            height={200}
                            className="h-[200px] object-cover rounded-full object-center"
                        />
                        <h5 className="title text-center text-orange-400 font-bold text-xl">Nettoyage des parties communes</h5>
                    </div>
                    <div className="justify-items-center w-full">
                        <Image
                            src={'/recycle.jpg'}
                            alt="logo recyclage"
                            width={200}
                            height={200}
                            className="h-[200px] object-cover rounded-full object-bottom"

                        />
                        <h5 className="title text-center text-orange-400 font-bold text-xl">Entrée et sortie des containers</h5>
                    </div>
                    <div className="justify-items-center w-full">
                        <Image
                            src={'/vitres.jpg'}
                            alt="logo nettoyage de vitre"
                            width={200}
                            height={200}
                            className="h-[200px] object-cover rounded-full object-bottom"

                        />
                        <h5 className="title text-center text-orange-400 font-bold text-xl">Nettoyage des vitreries et mirroirs</h5>
                    </div>
                    <div className="justify-items-center w-full">
                        <Image
                            src={'/balai.jpg'}
                            alt="logo balai"
                            width={200}
                            height={200}
                            className="h-[200px] object-cover rounded-full object-bottom"
                        />
                        <h5 className="title text-center text-orange-400 font-bold text-xl">Remise en état suite à changement de locataire, travaux, sinistre...</h5>
                    </div>
                    <div className="justify-items-center w-full">
                        <Image
                            src={'/parking.jpg'}
                            alt="logo panneau parking"
                            width={200}
                            height={200}
                            className="h-[200px] object-cover rounded-full object-bottom"

                        />
                        <h5 className="title text-center text-orange-400 font-bold text-xl">Etretien extérieur parkings; garages, porches</h5>
                    </div>
                </div>
            </div>
            <div className="bg-[url('/bg_locaux_com.jpg')] bg-cover bg-center py-10">
                <div className="locaux mt-10">
                    <div className="h_groupe">
                        <h2 className="text-white text-2xl md:text-5xl p-2 font-bold uppercase md:ml-10">remise en état</h2>
                        <h2 className="text-blue-300 text-3xl md:text-6xl py-4 p-2 font-bold uppercase">locaux professionnelles</h2>
                    </div>
                    <div className="grid lg:grid-cols-3 lg:my-10 gap-4 justify-center justify-items-center">
                        <div className="bg-white rounded-3xl p-4 flex flex-col justify-center items-center gap-4 md:w-[50%]">
                            <Image
                                src={'/visseuse.png'}
                                alt="visseuse"
                                width={150}
                                height={150}
                            />
                            <h3 className="text-lg font-bold">Après travaux</h3>
                            <p>Une fois vos travaux réalisés <span className="text-blue-950 font-bold">AB NET</span> s'occupe de tout !<br></br> Nous réalisons le nettoyage de fin pour vos locaux, bureaux ou autres sites de production</p>
                        </div>
                        <div className="bg-white rounded-3xl p-4 flex flex-col justify-center items-center gap-4 md:w-[50%]">
                            <Image
                                src={'/fire.jpg'}
                                alt="visseuse"
                                width={150}
                                height={150}
                            />
                            <h3 className="text-lg font-bold">Après sinistre</h3>
                            <p>Dégradation ou sinistre ? <br /> Nous intervenons en urgence pour la remise en état de vos locaux</p>
                        </div>
                        <div className="bg-white rounded-3xl p-4 flex flex-col justify-center items-center gap-4 mb-4 md:w-[50%]">
                            <Image
                                src={'/horloge.png'}
                                alt="visseuse"
                                width={150}
                                height={150}
                            />
                            <h3 className="text-lg font-bold">Ponctuelle</h3>
                            <p><span>AB NET</span> vous écoute dans vos besoins d'intervention spécifiques, occasionnels, saisonniers ou annuels</p>
                        </div>
                    </div>
                </div>
                <div className="border-t-4 border-white">
                    <div className="flex flex-col gap-4 md:flex-row text-white m-2">
                        <h4 className="text-4xl p-8 font-bold">remettez<br /> en état vos locaux professionnels</h4>
                        <div className="text-xl md:text-2xl flex flex-col gap-4">
                            <p>
                                Vous avez récemment finalisé les <span className="font-bold">travaux de rénovation</span> de vos locaux professionnels ? Votre bâtiment a subi une <span className="font-bold">dégradation</span> suite à un <span className="font-bold">sinistre</span> ?
                            </p>
                            <p>
                                <span className="font-bold">AB NET</span> vous propose de remettre en état vos locaux.
                                <br />
                                Nos équipes de professionnels de la  propreté réalisent : <br />
                                l'enlèvement de déchets de chantier, le lessivage des murs et plafonds, le décapage et lustrage des sols, le shampoing moquette, l'aspiration des poussieères et des eaux...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-6">
                <div className="h_groupe py-4">
                    <h2 className="text-blue-950 text-3xl md:text-5xl px-2 font-bold uppercase md:ml-10">Entretien et nettoyage</h2>
                    <h2 className="text-blue-800 text-4xl md:text-6xl px-2 font-bold uppercase ml-2 md:ml-20">de bureaux / locaux</h2>
                </div>
                <div className="mt-5 flex flex-col gap-4 text-xl">
                    <div
                        className="w-[50%] title h-[100px] m-2 p-4 font-bold bg-red-300 text-white bg-[url('/reunion.png')] bg-cover bg-bottom">
                        Salle de réunion
                    </div>
                    <div
                        className="w-[60%] title h-[100px] m-2 md:p-4 font-bold bg-red-300 text-white text-center bg-[url('/cabinet.png')] bg-cover bg-top">
                        Cabinet comptable, notarial, avocat, banque, assurance
                    </div>
                    <div
                        className="w-[70%] title h-[100px] m-2 p-4 font-bold bg-red-300 text-white text-end bg-[url('/open_space.png')] bg-cover bg-center">
                        Open Space
                    </div>
                    <div
                        className="w-[80%] title h-[100px] m-2 p-4 font-bold bg-red-300 text-white text-end bg-[url('/spa.png')] bg-cover bg-center">
                        SPA
                    </div>
                </div>
            </div>
            <div className="my-6">
                <div className="h_groupe flex flex-col md:flex-row">
                    <Image 
                    src={'/nettoyage_regulier.png'}
                    alt="homme de menage"
                    width={200}
                    height={200}
                    className=""
                    />
                    <h2 className="text-blue-800 text-4xl md:text-6xl px-2 font-bold uppercase md:self-center">Nettoyage régulier</h2>
                </div>
                <div className="mt-5 flex flex-col text-xl items-end">
                    <div
                        className="w-[70%] title h-[100px] m-2 p-4 font-bold bg-red-300 text-white bg-[url('/produits_entretien.png')] bg-cover bg-bottom">
                        Approvisionnement de produit d'hygiène
                    </div>
                    <div
                        className="w-[90%] title h-[100px] m-2 p-4 font-bold bg-red-300 text-white text-center bg-[url('/point_contact.png')] bg-cover bg-top">
                        Désinfection des points de contact
                    </div>
                </div>
            </div>
        </div>
    );
}