import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SwipeComponent.scss';

const images = [
  'https://miro.medium.com/v2/resize:fit:828/format:webp/0*jsQRjSPGRWkK-QgE.jpg',
  'https://i.pinimg.com/564x/63/1b/98/631b98537aa11e779c8c04059ac62976.jpg',
  'https://i.pinimg.com/564x/e8/58/1a/e8581ae151b887e9a44312b93c6ff374.jpg',
  'https://i.pinimg.com/736x/2f/67/e4/2f67e484bcf8a009a1745c9b6798ed66.jpg',
  'https://i.pinimg.com/564x/30/ad/b2/30adb2b1c9d7678f42f43b0b3d29a065.jpg',
  'https://i.pinimg.com/564x/84/3c/22/843c22c7517a7171e3ebe6509bb623cb.jpg',
  'https://www.getpeachy.in/cdn/shop/products/y2k-dress-628238_900x.jpg?v=1695892135'
];

export const SwipeComponent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const navigate = useNavigate();

  const handleLike = () => {
    setLikes(likes + 1);
    nextImage();
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
    nextImage();
  };

  const nextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      navigate('/result', { likes, dislikes });
    }
  };

  return (
    <div className="image-list">
      <img src={images[currentImageIndex]} alt="Current" />
      <div className="buttons">
        <button className="dislike-button" onClick={handleDislike}>NAYY</button>
        <button className="like-button" onClick={handleLike}>LOVE IT</button>
      </div>
    </div>
  );
};