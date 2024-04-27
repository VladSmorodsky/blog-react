import {faClose} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";

export const UploadImage = ({image, setImage}) => {
    const [error, setError] = useState(null);
    const handleChooseImage = (event) => {
        setError(null);
        const file = event.target.files[0];

        if (!file?.type.startsWith('image')) {
            setError('Incapable file type');
            return;
        }

        setImage(event.target.files[0])
    }

    return (
        <div className="flex items-center justify-center flex-col w-full mb-2">
            {!image && (
                <label htmlFor="dropzoneFile"
                       className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500"><span
                            className="font-semibold">Click to upload</span> or
                            drag and drop</p>
                        <p className="text-xs text-gray-500">SVG, PNG, JPG</p>
                    </div>
                    <input id="dropzoneFile"
                           type="file"
                           className="hidden"
                           onChange={(event) => handleChooseImage(event)}
                    />
                </label>
            )}
            {image && (
                <div
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center relative border">
                        <div
                            className='absolute flex justify-center align-middle text-center top-0 right-0 w-6 h-6 bg-red-500 text-white hover:bg-white hover:text-red-500 hover:border hover:border-red-500'
                            onClick={() => setImage(null)}
                        >
                            <div>
                                <FontAwesomeIcon icon={faClose}/>
                            </div>
                        </div>
                        <div className='w-44'>
                            <img src={URL.createObjectURL(image)} alt=""/>
                            {image.name}
                        </div>
                    </div>
                </div>
            )}
            {error && (
                <div className='text-red-500 font-semibold'>
                    {error}
                </div>
            )}
        </div>
    );
}