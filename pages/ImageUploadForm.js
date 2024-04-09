import React, { useState } from 'react';
import axios from 'axios';

const ImageUploadForm = ({ username }) => {
  const [image, setImage] = useState(null);
  const [comments, setComments] = useState(['']); 

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleCommentChange = (e, index) => {
    const newComments = [...comments];
    newComments[index] = e.target.value;
    setComments(newComments);
  };

  const handleAddComment = () => {
    setComments([...comments, '']);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('username', username);
      comments.forEach((comment, index) => {
        formData.append(`comment[${index}]`, comment);
      });

      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Image uploaded successfully:', response.data);

      setImage(null);
      setComments(['']); 
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleImageChange} />
      {comments.map((comment, index) => (
        <input
          key={index}
          type="text"
          value={comment}
          onChange={(e) => handleCommentChange(e, index)}
          placeholder={`Comment ${index + 1}`}
        />
      ))}
      <button type="button" onClick={handleAddComment}>Add Comment</button>
      <button type="submit">Upload Image</button>
    </form>
  );
};

export default ImageUploadForm;
