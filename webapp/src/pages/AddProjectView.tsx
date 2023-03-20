import { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import Footer from "../components/Footer"
import AppBar from "../components/header/AppBar"

function AddProjectView() {
    const [title, setTitle] = useState<string>('');
    const [techStack, setTechStack] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [license, setLicense] = useState<string>('');
    const [repoUrl, setRepoUrl] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [bannerImage, setBannerImage] = useState<File | undefined>(undefined);


    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setBannerImage(file);
    };

    function handleDescriptionChange(value: string) {
        setDescription(value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = { title, techStack, category, license, repoUrl,bannerImage, description }
        console.log(formData)
    }

    return (
        <>
            <AppBar />
            <div className="container-fluid mx-auto px-4 mt-5" style={{ marginBottom: "5rem" }}>
                <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
                    <h2 className="text-xl font-semibold mb-4">Add Project</h2>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="project-name"
                            >
                                Project Title
                            </label>
                            <input
                                className="appearance-none block w-full  text-gray-700 border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="project-title"
                                type="text"
                                placeholder="Enter project title"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
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
                                className="appearance-none block w-full  text-gray-700 border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="tech-stack"
                                type="text"
                                placeholder="Enter tech stack separated by commas. e.g: Ruby,Python,Java"
                                name="techStack"
                                value={techStack}
                                onChange={(e) => setTechStack(e.target.value)}
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
                                    className="block bg-white appearance-none w-full  border border-primary text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="project-category"
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option>Select project category</option>
                                    <option value="web-development">Web Development</option>
                                    <option value="mobile-development">Mobile Development</option>
                                    <option value="UI/UX-desig">UI/UX Design</option>
                                    <option value="digital-marketing">Digital Marketing</option>
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
                                className="appearance-none block w-full  text-gray-700 border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="license"
                                type="text"
                                placeholder="Enter project license."
                                name="license"
                                value={license}
                                onChange={(e) => setLicense(e.target.value)}
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
                                className="appearance-none block w-full  text-gray-700 border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="repo-url"
                                type="text"
                                placeholder="Enter repo url"
                                name="repoUrl"
                                value={repoUrl}
                                onChange={(e) => setRepoUrl(e.target.value)}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 bg-white">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="project-image">
                                Project Image
                            </label>
                            <div className="relative">
                                <input
                                    type="file"
                                    className="opacity-0 absolute z-10 appearance-none block w-full text-gray-700 border border-primary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="project-image"
                                    name="project-image"
                                    style={{ backgroundImage: 'url("/path/to/background-image.png")', backgroundSize: 'cover', backgroundColor: 'white' }}
                                    onChange={handleFileInputChange}
                                />
                                <div className="bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                                    <div className="flex items-center">
                                        <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        <span>{bannerImage ? bannerImage.name : 'Choose a file...'}</span>
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
                            Add Submission
                        </button>
                    </div>
                </form>
            </div>


            <Footer />
        </>
    )
}

export default AddProjectView
