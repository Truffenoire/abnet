'use client'
import AddTask from "../components/addTasks";
import { doAdmin } from "../api/doAdmin/action";
import { useContext, useEffect, useState } from 'react'
import { TaskContext } from "../components/taskContext";
import { MdModeEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";


export default function page() {
    const [userAdmin, setUserAdmin] = useState(true);
    const [password, setPassword] = useState("");
    const { tasks, setTasks } = useContext(TaskContext);

    // -----------------------------------------
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState(null);
    const [confirmationText, setConfirmationText] = useState('');
    // -----------------------------------------

    // État pour la modification
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState(null);
    const [editTitle, setEditTitle] = useState("");
    const [editDescription, setEditDescription] = useState("");
    const [editImage, setEditImage] = useState(null);
    const [previewImage, setPreviewImage] = useState("");

    // on recupere déjà la data avec taskContext
    useEffect(() => {
        fetch('/api/getDataTask')
            .then(res => res.json())
            .then(data => {
                console.log(data);

                setTasks(data);
            });
    }, [])

    const handleChange = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('password', password);

        const response = await doAdmin({ password })

        if (response === true) {
            setUserAdmin(true);
            setPassword("");
        } else {
            alert("Mauvais mot de passe");
        }
    };

    const handleQuit = () => {
        setUserAdmin(false);
    };

    // -----------------------------------------
    const handleDelete = async () => {
        const textToConfirm = confirmationText.trim().toUpperCase();
        if (textToConfirm !== 'SUPPRIMER') {
            alert('Le texte de confirmation est incorrect.');
            return;
        }

        try {
            // Supprimer l'image de Cloudinary
            if (taskToDelete.imageUrl) {

                const public_id_rework = taskToDelete.imageUrl.split('image')
                const public_id = public_id_rework[1].split('/')

                //supprime le doublon .jpg .png etc...
                let fileNameTEST = public_id[4]
                const fileModif = fileNameTEST.split(".")
                const r = fileModif[0] + '.' + fileModif[1];
                const result = `${public_id[3]}/${r}`

                const decodedResult = decodeURIComponent(result);
                console.log(decodedResult);

                await fetch('/api/upload', {
                    method: 'DELETE',
                    body: JSON.stringify({ public_id: decodedResult }),
                });
            }

            // Supprimer la tâche de la base de données
            // -----------------------------------------
            await fetch('/api/crud', {
                method: 'DELETE',
                body: JSON.stringify({ _id: taskToDelete._id }),
            });

            // Mettre à jour l'état des tâches
            setTasks(tasks.filter(task => task._id !== taskToDelete._id));

            setIsModalOpen(false);
            setConfirmationText('');
        } catch (error) {
            console.error('Erreur lors de la suppression de la tâche:', error);
        }
    };
    // -----------------------------------------

    // Fonctions pour la modification
    const openEditModal = (task) => {
        console.log('task dans open modal', task);
        setTaskToEdit(task);
        setEditTitle(task.title);
        setEditDescription(task.description);
        setPreviewImage(task.imageUrl);
        setIsEditModalOpen(true);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setEditImage(file);
            // Créer une URL pour prévisualiser l'image
            const previewUrl = URL.createObjectURL(file);
            setPreviewImage(previewUrl);
        }
    };

    const handleEdit = async (e) => {
        e.preventDefault();
        console.log("taskToEdit", taskToEdit);

        try {
            let imageUrl = taskToEdit.imageUrl;

            // Si une nouvelle image a été sélectionnée, télécharger sur Cloudinary
            if (editImage) {
                // D'abord supprimer l'ancienne image si elle existe
                if (taskToEdit.imageUrl) {
                    const public_id_rework = taskToEdit.imageUrl.split('image');
                    const public_id = public_id_rework[1].split('/');

                    let fileNameTEST = public_id[4];
                    const fileModif = fileNameTEST.split(".");
                    const r = fileModif[0] + '.' + fileModif[1];
                    const result = `${public_id[3]}/${r}`;

                    const decodedResult = decodeURIComponent(result);

                    await fetch('/api/upload', {
                        method: 'DELETE',
                        body: JSON.stringify({ public_id: decodedResult }),
                    });
                }

                // Télécharger la nouvelle image
                const uploadFormData = new FormData();
                uploadFormData.append('file', editImage);

                const uploadResponse = await fetch('/api/upload', {
                    method: 'POST',
                    body: uploadFormData,
                });

                const uploadData = await uploadResponse.json();
                if (uploadData.success) {
                    imageUrl = uploadData.imageUrl;
                }
            }

            // Mettre à jour la tâche
            // prevoir même modification que dans addTasks pour le post ne pas utiliser
            const newTask = {
                _id: taskToEdit._id,
                title: editTitle,
                description: editDescription,
                imageUrl: imageUrl,
            }
            // new formData mais newTask voir /components/addTasks.jsx
            const formData = new FormData();
            formData.append('_id', taskToEdit._id);
            formData.append('title', editTitle);
            formData.append('description', editDescription);
            formData.append('imageUrl', imageUrl);
            console.log('newTask', newTask);

            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }

            const response = await fetch('/api/crud', {
                method: 'PUT',
                headers: { "Content-Type": "application/json" }, // Envoi en JSON
                // body: formData,
                body: JSON.stringify(newTask),
            });

            const data = await response.json();
            // console.log('data', data);
            
            if (data.acknowledged) {
                // Mettre à jour l'état local des tâches
                const updatedTasks = tasks.map(task =>
                    task._id === taskToEdit._id ?
                        { ...task, title: editTitle, description: editDescription, imageUrl: imageUrl }
                        : task
                );
                setTasks(updatedTasks);
                setIsEditModalOpen(false);

                // Nettoyer les états
                if (previewImage && previewImage !== taskToEdit.imageUrl) {
                    URL.revokeObjectURL(previewImage);
                }
                setEditImage(null);
                setTaskToEdit(null);
            } else {
                alert("Erreur lors de la mise à jour de la tâche.");
            }
        } catch (error) {
            console.error('Erreur lors de la modification de la tâche:', error);
            alert("Une erreur est survenue lors de la modification.");
        }
    };

    return (
        <>
            {userAdmin === false ?
                <div className="flex flex-col justify-center items-center pl-4 pt-[18vh] h-[82vh] dark:bg-white dark:text-black">
                    <form className="flex flex-col" onSubmit={handleChange}>
                        <label className="font-bold border-b-2 border-black mb-4 p-4 m-2">Mdp Admin</label>
                        <input
                            className="border-2 p-2 ml-4 rounded-lg"
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            required
                        />
                        <button className="m-6 p-2 bg-gray-200 hover:bg-gray-300 rounded-xl" type="submit" >Espace réservé</button>
                    </form>
                </div>
                :
                <>
                    <div className="flex flex-col justify-center items-center pl-2 pt-[18vh] dark:bg-white dark:text-black">
                        <div className="border-t-2 border-black w-[80vw]">
                            <h3 className="text-3xl">Ajouter un chantier :</h3>
                        </div>
                        <AddTask />
                        <button className="m-6 p-2 bg-gray-200 hover:bg-gray-300 rounded-xl" onClick={handleQuit}>Quitter</button>
                    </div>
                    <div className="flex flex-col justify-center items-center px-2 dark:bg-white dark:text-black">
                        {tasks.map((task, index) => {
                            return (
                                <div key={index} className="z-20 flex gap-[2px] justify-between items-center min-h-10 border-b-black border-2 lg:max-w-[80vw] lg:min-w-[30vw] w-full">
                                    <div id={task.id} className="w-[5%]">{index + 1}</div>
                                    <div className="text-xs w-1/4 lg:w-[10%]">
                                        {task.title}
                                    </div>
                                    <div className="w-1/3 lg:w-1/2 text-xs border-x-2 border-black p-2">
                                        {task.description}
                                    </div>
                                    <div className="flex md:w-1/6 justify-around">
                                        <button
                                            className="bg-blue-300 rounded-full p-2 hover:bg-blue-400 mr-2"
                                            onClick={() => openEditModal(task)}
                                        >
                                            < MdModeEdit />
                                        </button>
                                        <button
                                            className="bg-gray-300 rounded-full p-2 hover:bg-gray-400"
                                            onClick={() => {
                                                setTaskToDelete(task);
                                                console.log(task);
                                                setIsModalOpen(true);
                                            }}
                                        >
                                            < FaRegTrashAlt />
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Modal de suppression */}
                    {isModalOpen && (
                        <div
                            className="opacity-90"
                            style={{
                                position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
                                background: "black", display: "flex", justifyContent: "center", alignItems: "center",
                                zIndex: 50
                            }}
                        >
                            <div className="opacity-100 modal-content max-w-md h-2/3 bg-white text-black rounded-lg text-xl flex flex-col p-2">
                                <h2 className="p-2 m-4">Confirmer la suppression</h2>
                                <p className="p-2 m-4">Veuillez taper "SUPPRIMER" pour confirmer.</p>
                                <input
                                    className="p-2 m-4 w-1/2 self-center border-2"
                                    type="text"
                                    value={confirmationText}
                                    onChange={(e) => setConfirmationText(e.target.value)}
                                />
                                <div className="self-center m-2">
                                    <button className="px-4 m-2 py-2 bg-red-500 text-white rounded-md hover:bg-red-600" onClick={handleDelete}>Confirmer</button>
                                    <button className="px-4 m-2 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600" onClick={() => setIsModalOpen(false)}>Annuler</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Modal de modification */}
                    {isEditModalOpen && taskToEdit && (
                        <div
                            className="modal"
                            style={{
                                position: "fixed", top: 30, left: 0, width: "100vw", height: "100vh",
                                background: "rgba(0,0,0,0.8)", display: "flex", justifyContent: "center", alignItems: "center",
                                zIndex: 50
                            }}
                        >
                            <div className="modal-content bg-white rounded-lg p-6 max-w-md w-full">
                                <h2 className="text-2xl font-bold mb-4">Modifier la tâche</h2>

                                <form onSubmit={handleEdit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Titre:</label>
                                        <input
                                            type="text"
                                            value={editTitle}
                                            onChange={(e) => setEditTitle(e.target.value)}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Description:</label>
                                        <textarea
                                            value={editDescription}
                                            onChange={(e) => setEditDescription(e.target.value)}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                            rows="3"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Image actuelle:</label>
                                        {previewImage && (
                                            <img
                                                src={previewImage}
                                                alt="Prévisualisation"
                                                className="mt-2 max-h-40 object-contain"
                                            />
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Nouvelle image (optionnel):</label>
                                        <input
                                            type="file"
                                            onChange={handleImageChange}
                                            accept="image/*"
                                            className="mt-1 block w-full"
                                        />
                                    </div>

                                    <div className="flex justify-end space-x-3">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setIsEditModalOpen(false);
                                                if (previewImage && previewImage !== taskToEdit.imageUrl) {
                                                    URL.revokeObjectURL(previewImage);
                                                }
                                            }}
                                            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                                        >
                                            Annuler
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                        >
                                            Enregistrer
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </>
            }
        </>
    );
}