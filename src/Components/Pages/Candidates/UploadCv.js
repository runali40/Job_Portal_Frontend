import React, { useState } from 'react'
import { Upload, Image as ImageIcon } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { apiClient } from '../../../ApiClient';


const UploadCv = () => {
    const [file, setFile] = useState(null);

    const onFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.type === 'application/pdf') {
            setFile(selectedFile);
        } else {
            toast.error("Please upload a valid PDF file.");
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            toast.error("Please select a PDF file first.");
            return;
        }

        const formData = new FormData();
        formData.append('resumeFile', file); // 'UFileName' should match your backend parameter name

        formData.append('UFileName', file.name);
        // Get userId from sessionStorage and append
        const userId = sessionStorage.getItem('userid');
        formData.append('UserId', userId);
        try {
            const response = await apiClient.post('/UserMaster/AddResumeWithFile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            toast.success("File uploaded successfully!");
            console.log("Upload response:", response.data);
        } catch (error) {
            toast.error("Upload failed.");
            console.error("Upload error:", error);
        }
    };
    return (
        <>
            <Header />

            <main className="main-content" style={{ marginTop: "150px" }}>
                <div className="upload-section">
                    <form onSubmit={onSubmit}>
                        <div className="drop-zone">
                            <ImageIcon size={48} />
                            <p>Click to upload or drag and drop</p>
                            <input
                                type="file"
                                accept="application/pdf"
                                onChange={onFileChange}
                                className="file-input"
                                id="fileInput"
                            />
                            <button
                                type="button"
                                onClick={() => document.getElementById('fileInput').click()}
                                className="btn btn-secondary"
                            >
                                Choose File
                            </button>
                        </div>

                        {file && <p className="selected-file">Selected file: {file.name}</p>}

                        <button type="submit" className="btn btn-success upload-btn">
                            Upload
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default UploadCv