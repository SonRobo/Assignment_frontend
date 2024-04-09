import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Home = () => {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleUsernameSubmit = async (e) => {
    router.push('/ImageUploadForm')
    e.preventDefault();
    try {
    
      await axios.post('API', { username });

      router.push('/ImageUploadForm');
    } catch (error) {
      console.error('Error posting username:', error);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleDisplayImages = () => {
    router.push('/ImageList');
  };

  return (
    <div>
      <h1>Image Upload</h1>
      <form onSubmit={handleUsernameSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter your username"
        />
        <button type="submit">Submit</button>
      </form>
      
      <button onClick={handleDisplayImages}>Display Images</button>
    </div>
  );
};

export default Home;
