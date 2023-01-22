import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './DragDropComponent.css'; // import your own css file
import { IonIcon } from '@ionic/react';
import { documentOutline } from 'ionicons/icons';
import { trashOutline } from 'ionicons/icons';
import axios from 'axios';
import { saveAs } from 'file-saver';


const DragDropComponent = () => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleRemoveFile = (file) => {
    setFiles(prevFiles => prevFiles.filter(f => f !== file));
    };

async function downloadFile() {
    const response = await fetch('/download', { method: 'GET' });
    const blob = await response.blob();

    saveAs(blob, 'Name.zip');
}

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag and drop your files here, or click to select files</p>
      <div className="preview-container">
        {files.map((file, index) => (
          <div className="preview-item">
             <IonIcon icon={documentOutline} size="xlarge" className="file-icon" />
                <IonIcon icon={trashOutline} size="small" className="trash-icon" onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveFile(file);
                }} 
                />
                </div>
        ))}
        </div>
            <div>
       
        </div>
         <button onClick={ (e) => {
                e.stopPropagation();
                const formData = new FormData();
                files.forEach(file => formData.append('files', file));
                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:5000/upload',
                    data: formData,
                    responseType: 'blob', // set the response type to blob
                  })
                .then(response => {
                    const blob = new Blob([response.data], {
                        type: response.headers['content-type']
                    });
                    saveAs(blob, 'CapitalGains.zip');  // use the saveAs function to download the file
                })
                .catch(error => {
                    console.log(error);
                });
        }}>Submit</button>

    </div>

        );
};

export default DragDropComponent;
