import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import Footer from "../components/Footer"
import AppBar from "../components/header/AppBar"

function AddProjectView() {
    const [description, setDescription] = useState<string>('');

    function handleDescriptionChange(value: string) {
        setDescription(value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
    }

    return (
        <>
            <AppBar />
            <div className="container-fluid mx-auto px-4 mt-5" style={{marginBottom:"5rem"}}>
                <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
                    <h2 className="text-xl font-semibold mb-4">Add Project</h2>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="project-name"
                            >
                                Project Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="project-name"
                                type="text"
                                placeholder="Enter project name"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="tech-stack"
                            >
                                Tech Stack
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="tech-stack"
                                type="text"
                                placeholder="Enter tech stack separated by commas. e.g: Ruby,Python,Java"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="project-category"
                            >
                                Project Category
                            </label>
                            <div className="relative">
                                <select
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="project-category"
                                >
                                    <option>Select project category</option>
                                    <option>Web Development</option>
                                    <option>Mobile Development</option>
                                    <option>UI/UX Design</option>
                                    <option>Digital Marketing</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="project-name"
                            >
                                Licence
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="project-name"
                                type="text"
                                placeholder="Enter project licence."
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="project-name"
                            >
                                Project Repository
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="project-name"
                                type="text"
                                placeholder="Enter project repository url."
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="project-image"
                            >
                                Project Image
                            </label>
                            <div className="relative">
                                <input
                                    type="file"
                                    className="opacity-0 absolute z-10"
                                    id="project-image"
                                    name="project-image"
                                />
                                <div className="bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                                    <div className="flex items-center">
                                        <svg
                                            className="h-6 w-6 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            />
                                        </svg>
                                        <span>Choose a file...</span>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="col-span-2">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                                Description
                            </label>
                            <ReactQuill
                                className="bg-white border border-solid border-gray-300 rounded-lg p-4 w-full"
                                value={description}
                                onChange={handleDescriptionChange}
                            />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Add Project
                        </button>
                    </div>
                </form>
            </div>


            <Footer />
        </>
    )
}

export default AddProjectView
