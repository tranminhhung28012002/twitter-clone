import React, { useState } from 'react';
import axios from 'axios';
import styles from './item.module.scss';
export default function Item() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedImage(event.target.files?.[0] || null);
  };

  const handleUploadClick = async () => {
    if (!selectedImage) {
      alert('Please select an image first!');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await axios.post('/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Image uploaded successfully', response.data);
    } catch (error) {
      console.error('Error uploading image', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {selectedImage && (
        <div>
          <p>Selected image: {selectedImage.name}</p>
          <button onClick={handleUploadClick}>Upload Image</button>
        </div>
      )}
    </div>
  );
}
