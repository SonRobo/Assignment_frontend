import React, { useState, useEffect } from 'react';
import axios from 'axios';
import test from '../test.json'

const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('API'); 
      setImages(response.data.posts); 
      // setImages(test.posts)
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.imageUrl} alt={`Image ${index}`} />
          <ul>
            {image.comments.map((comment, commentIndex) => (
              <li key={commentIndex}>
                <b>{comment.userId}: </b>{comment.comment}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
