import React, { useState } from 'react';

const FileUpload = ({ onUploadSuccess }) => {
    const [selectedFiles, setSelectedFiles] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFiles(e.target.files);
    };

    const handleFileUpload = async () => {
        const formData = new FormData();
        for (let i = 0; i < selectedFiles.length; i++) {
            formData.append('nationalIdPhoto', selectedFiles[i]);
        }

        try {
            const response = await fetch('http://localhost:3000/rent/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                onUploadSuccess();
                alert('Files uploaded successfully');
            } else {
                alert('File upload failed');
            }
        } catch (err) {
            console.error('File upload error', err);
        }
    };

    return (
        <div>
            <input type="file" multiple onChange={handleFileChange} />
            <button onClick={handleFileUpload}>Upload Files</button>
        </div>
    );
};

export default FileUpload;
