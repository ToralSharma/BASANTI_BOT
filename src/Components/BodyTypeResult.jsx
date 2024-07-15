import React from 'react';
import { useLocation } from 'react-router-dom';
import './BodyTypeResult.scss';
import { images } from '../db';

const calculateBodyType = (chest, waist, hip) => {
  let bodyType = {
    pear: 0,
    hourglass: 0,
    rectangle: 0
  };

  if (hip >= chest + 7 && Math.abs(chest - waist) <= 2) {
    bodyType.pear = 100;
  }

  if (Math.abs(chest - hip) <= 2 && (chest - waist) >= 7) {
    bodyType.hourglass = 100;
  }

  if ((chest - hip) >= 4 && Math.abs(hip - waist) <= 2) {
    bodyType.rectangle = 100;
  }

  if (bodyType.pear === 0 && bodyType.hourglass === 0 && bodyType.rectangle === 0) {
    const maxRatio = Math.max(
      hip / chest,
      chest / waist,
      chest / hip,
    );

    if (maxRatio === hip / chest) {
      bodyType.pear = 100;
    } else if (maxRatio === chest / waist) {
      bodyType.hourglass = 100;
    } else {
      bodyType.rectangle = 100;
    }
  }

  return bodyType;
};

export const BodyTypeResult = () => {
  const location = useLocation();
  const measurements = location.state || {};
  const { chest, waist, hip } = measurements;

  const bodyType = calculateBodyType(chest, waist, hip);

  const recommendedImages = images.filter(image => bodyType[image.bodyType] > 0);

  return (
    <div className="body-type-result">
      <h1>Body Type Analysis</h1>
      <div className="result-container">
        <div className="result">
          <h2>Pear Shaped</h2>
          <div className="progress-bar">
            <div className="fill pear" style={{ width: `${bodyType.pear}%` }}></div>
          </div>
          <p>{bodyType.pear}%</p>
        </div>
        <div className="result">
          <h2>Hourglass</h2>
          <div className="progress-bar">
            <div className="fill hourglass" style={{ width: `${bodyType.hourglass}%` }}></div>
          </div>
          <p>{bodyType.hourglass}%</p>
        </div>
        <div className="result">
          <h2>Rectangle</h2>
          <div className="progress-bar">
            <div className="fill inverted-triangle" style={{ width: `${bodyType.rectangle}%` }}></div>
          </div>
          <p>{bodyType.rectangle}%</p>
        </div>
      </div>
      <div className="recommendations">
        <h2>Recommendations</h2>
        <div className="recommendation-images">
          {recommendedImages.map((image, index) => (
            <div key={index} className="recommendation-image">
              <img src={image.img} alt={`${image.bodyType}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
