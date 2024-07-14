import React from 'react';
import { useLocation } from 'react-router-dom';
import './AestheticResult.scss';
import { images } from '../db';

const calculateAesthetic = (likedUrls, dislikedUrls) => {
    let aesthetic = {
        y2k: 0,
        Grunge: 0,
        cottagecore: 0
    };
    for(let likedUrl of likedUrls) {
        let image = images.find(element => element['img'] === likedUrl);
        if (image.asthetic === 'y2k') aesthetic.y2k+=1;
        else if (image.asthetic === 'Grunge') aesthetic.Grunge+=1;
        else if (image.asthetic === 'cottagecore') aesthetic.cottagecore+=1;
    }
    aesthetic.y2k = (aesthetic.y2k * 100) / likedUrls.length;
    aesthetic.Grunge = (aesthetic.Grunge * 100) / likedUrls.length;
    aesthetic.cottagecore = (aesthetic.cottagecore * 100) / likedUrls.length;
    return aesthetic;
};

export const AestheticResult = () => {
  const location = useLocation();
  const { likedUrls, dislikedUrls } = location.state || { likes: [], dislikes: [] };

  const aesthetic = calculateAesthetic(likedUrls, dislikedUrls);

  const recommendedImages = images.filter(image => aesthetic[image.asthetic] > 0);

  return (
    <div className="body-type-result">
      <h1>Your Aesthetic Analysis</h1>
      <div className="result-container">
        <div className="result">
          <h2>Y2K</h2>
          <div className="progress-bar">
            <div className="fill pear" style={{ width: `${aesthetic.y2k}%` }}></div>
          </div>
          <p>{aesthetic.y2k}%</p>
        </div>
        <div className="result">
          <h2>GRUNGE</h2>
          <div className="progress-bar">
            <div className="fill hourglass" style={{ width: `${aesthetic.Grunge}%` }}></div>
          </div>
          <p>{aesthetic.Grunge}%</p>
        </div>
        <div className="result">
          <h2>COTTAGECORE</h2>
          <div className="progress-bar">
            <div className="fill inverted-triangle" style={{ width: `${aesthetic.cottagecore}%` }}></div>
          </div>
          <p>{aesthetic.cottagecore}%</p>
        </div>
      </div>
      <div className="recommendations">
        <h2>Recommendations</h2>
        <div className="recommendation-images">
          {recommendedImages.map((image, index) => (
            <div key={index} className="recommendation-image">
              <img src={image.img} alt={`${image.asthetic}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
