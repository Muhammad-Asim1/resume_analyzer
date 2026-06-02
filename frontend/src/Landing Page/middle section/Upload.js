import React, { useState } from "react";
import UploadCloud from "../images/uploadCloud.png"
import {useNavigate} from 'react-router-dom'

export default function Upload() 
{
    const [fileName, setFileName] = useState("");
    const [dragging, setDragging] = useState(false);

    const navigate = useNavigate();

    const handleFileChange = (e) => 
    {
        if (e.target.files.length > 0) 
            setFileName(e.target.files[0].name);
    };

    const handleDragOver = (e) => 
    {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => 
    {
        setDragging(false);
    };
 
    const handleDrop = (e) => 
    {
        e.preventDefault();
        setDragging(false);
        if (e.dataTransfer.files.length > 0) 
            setFileName(e.dataTransfer.files[0].name);
    };

    const handleUpload = async() => 
    {
        if (!fileName) return;

        const formData = new FormData();
        formData.append("file", document.querySelector('input[type="file"]').files[0]);

        try {
            const response = await fetch("http://127.0.0.1:5000/upload", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Failed to upload file");
            }

            const data = await response.json();
            console.log("Response from backend:", data);

            // Pass data to results page
            navigate("/results", { state: { jobs: data.jobs, courses: data.courses, cv_scores: data.cv_scores} });
        } catch (error) {
            console.error("Error uploading file:", error);
        }

    };

    return (
        <div className="JustifyCenter">
            <div className="uploadSuper">
                <div className="text">
                    <p>upload your creation</p>
                </div>

                <div className={`upload-container ${dragging ? "dragging" : ""}`}
                     onDragOver={handleDragOver}
                     onDragLeave={handleDragLeave}
                     onDrop={handleDrop}
                >
                    <div className="upload-box">
                        <img className="upload-icon"src={UploadCloud} /> 
                        <p>select your file or drag and drop</p>
                        <small>only pdf accepted</small>
                        <br />
                        <label className="browse-button">
                            <input
                                type="file"
                                onChange={handleFileChange}
                                style={{ display: "none" }}
                                accept=".pdf"
                            />
                            browse
                        </label>
                        {fileName && <p className="file-name">{fileName}</p>}
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="buttons">
                        <button className="cancel"
                            disabled={!fileName}
                            onClick={() => setFileName("")}
                        >
                            cancel</button>
                        <button className="upload"
                            disabled={!fileName}
                            onClick={handleUpload}
                        >upload</button>
                    </div>
                </div>
            </div>
        </div>
    );
}