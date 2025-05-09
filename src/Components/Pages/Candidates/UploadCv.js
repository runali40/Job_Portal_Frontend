import React from 'react'
import { Upload, Image as ImageIcon } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';


const UploadCv = () => {
    return (
        <>
            <Header />
            <main className="main-content" style={{marginTop:"150px"}}>
                <div className="upload-section">
                    <form /* onSubmit={onFileSubmit} */>
                        <div className="drop-zone">
                            <ImageIcon size={48} />
                            <p>Click to upload or drag and drop</p>
                            <input
                                type="file"
                                accept="image/*"
                                //   onChange={onFileChange}
                                className="file-input"
                                id="fileInput"
                            />
                            <button
                                type="button"
                                //   onClick={() => document.getElementById('fileInput').click()}
                                className="btn btn-secondary"
                            >
                                Choose File
                            </button>
                        </div>

                        {/* {file && <p className="selected-file">Selected file: {file.name}</p>} */}

                        <button
                            type="submit"
                            // disabled={isUploading}

                            className="btn btn-success upload-btn"
                        >
                            {/* {isUploading ? 'Processing...' : 'Upload and Process'} */}
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