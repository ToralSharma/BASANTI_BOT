// import React from 'react';
// import './BodyTypeResult.scss';


// export const BodyTypeResult = () => {
//   return (
//     <div className="body-type-result">
//       <h1>Body Type Analysis</h1>
//       <div className="result-container">
//         <div className="result">
//           <h2>Pear Shaped</h2>
//           <div className="progress-bar">
//             <div className="fill pear" style={{ width: '60%' }}></div>
//           </div>
//           <p>60%</p>
//         </div>
//         <div className="result">
//           <h2>Hourglass</h2>
//           <div className="progress-bar">
//             <div className="fill hourglass" style={{ width: '40%' }}></div>
//           </div>
//           <p>40%</p>
//         </div>
//       </div>
//     </div>
//   );
// };


// import React from 'react';
// import './BodyTypeResult.scss';

// export const BodyTypeResult = () => {
//   return (
//     <div className="body-type-result">
//       <h1>Body Type Analysis</h1>
//       <div className="result-container">
//         <div className="result">
//           <h2>Pear Shaped</h2>
//           <div className="progress-bar">
//             <div className="fill pear" style={{ width: '60%' }}></div>
//           </div>
//           <p>60%</p>
//         </div>
//         <div className="result">
//           <h2>Hourglass</h2>
//           <div className="progress-bar">
//             <div className="fill hourglass" style={{ width: '40%' }}></div>
//           </div>
//           <p>40%</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BodyTypeResult;


// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './BodyTypeResult.scss';

// const calculateBodyType = (chest, waist, hip) => {
//   const ratios = {
//     pear: hip / chest,
//     hourglass: chest / waist,
//   };

//   const bodyType = {
//     pear: ratios.pear > 1.05 ? 100 : Math.min(100, Math.max(0, (ratios.pear - 1) * 200)),
//     hourglass: ratios.hourglass >= 1.2 ? 100 : Math.min(100, Math.max(0, (ratios.hourglass - 1) * 200)),
//   };

//   return bodyType;
// };

// export const BodyTypeResult = () => {
//   const location = useLocation();
//   const measurements = location.state || {};
//   const { chest, waist, hip } = measurements;

//   const bodyType = calculateBodyType(chest, waist, hip);

//   return (
//     <div className="body-type-result">
//       <h1>Body Type Analysis</h1>
//       <div className="result-container">
//         <div className="result">
//           <h2>Pear Shaped</h2>
//           <div className="progress-bar">
//             <div className="fill pear" style={{ width: `${bodyType.pear}%` }}></div>
//           </div>
//           <p>{bodyType.pear}%</p>
//         </div>
//         <div className="result">
//           <h2>Hourglass</h2>
//           <div className="progress-bar">
//             <div className="fill hourglass" style={{ width: `${bodyType.hourglass}%` }}></div>
//           </div>
//           <p>{bodyType.hourglass}%</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BodyTypeResult;


// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './BodyTypeResult.scss';

// const calculateBodyType = (chest, waist, hip) => {
//   let bodyType = {
//     pear: 0,
//     hourglass: 0,
//     invertedTriangle: 0,
//   };

//   if (hip >= chest + 7 && Math.abs(chest - waist) <= 2) {
//     bodyType.pear = 100;
//   }

//   if (Math.abs(chest - hip) <= 2 && (chest - waist) >= 7) {
//     bodyType.hourglass = 100;
//   }

//   if ((chest - hip) >= 4 && Math.abs(hip - waist) <= 2) {
//     bodyType.invertedTriangle = 100;
//   }

//   return bodyType;
// };

// export const BodyTypeResult = () => {
//   const location = useLocation();
//   const measurements = location.state || {};
//   const { chest, waist, hip } = measurements;

//   const bodyType = calculateBodyType(chest, waist, hip);

//   return (
//     <div className="body-type-result">
//       <h1>Body Type Analysis</h1>
//       <div className="result-container">
//         <div className="result">
//           <h2>Pear Shaped</h2>
//           <div className="progress-bar">
//             <div className="fill pear" style={{ width: `${bodyType.pear}%` }}></div>
//           </div>
//           <p>{bodyType.pear}%</p>
//         </div>
//         <div className="result">
//           <h2>Hourglass</h2>
//           <div className="progress-bar">
//             <div className="fill hourglass" style={{ width: `${bodyType.hourglass}%` }}></div>
//           </div>
//           <p>{bodyType.hourglass}%</p>
//         </div>
//         <div className="result">
//           <h2>Inverted Triangle</h2>
//           <div className="progress-bar">
//             <div className="fill inverted-triangle" style={{ width: `${bodyType.invertedTriangle}%` }}></div>
//           </div>
//           <p>{bodyType.invertedTriangle}%</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BodyTypeResult;


// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './BodyTypeResult.scss';

// const calculateBodyType = (chest, waist, hip) => {
//   let bodyType = {
//     pear: 0,
//     hourglass: 0,
//     invertedTriangle: 0,
//   };

//   // Define weights for each criterion
//   const weights = {
//     pear: 0.5,
//     hourglass: 0.3,
//     invertedTriangle: 0.2,
//   };

//   // Calculate criteria for each body type
//   const pearCriteria = (hip >= chest + 7 && Math.abs(chest - waist) <= 2) ? 1 : 0;
//   const hourglassCriteria = (Math.abs(chest - hip) <= 2 && (chest - waist) >= 7) ? 1 : 0;
//   const invertedTriangleCriteria = ((chest - hip) >= 4 && Math.abs(hip - waist) <= 2) ? 1 : 0;

//   // Calculate weighted percentages
//   bodyType.pear = pearCriteria * weights.pear * 100;
//   bodyType.hourglass = hourglassCriteria * weights.hourglass * 100;
//   bodyType.invertedTriangle = invertedTriangleCriteria * weights.invertedTriangle * 100;

//   // Normalize to make sure the sum of percentages is 100
//   const total = bodyType.pear + bodyType.hourglass + bodyType.invertedTriangle;
//   if (total > 0) {
//     bodyType.pear = (bodyType.pear / total) * 100;
//     bodyType.hourglass = (bodyType.hourglass / total) * 100;
//     bodyType.invertedTriangle = (bodyType.invertedTriangle / total) * 100;
//   }

//   return bodyType;
// };

// const calculateBodyType = (chest, waist, hip) => {
//   let bodyType = {
//     pear: 0,
//     hourglass: 0,
//     invertedTriangle: 0,
//   };

//   if (hip >= chest + 7 && Math.abs(chest - waist) <= 2) {
//     bodyType.pear = 100;
//   }

//   if (Math.abs(chest - hip) <= 2 && (chest - waist) >= 7) {
//     bodyType.hourglass = 100;
//   }

//   if ((chest - hip) >= 4 && Math.abs(hip - waist) <= 2) {
//     bodyType.invertedTriangle = 100;
//   }

//   // Ensure at least one body type has a non-zero percentage
//   if (bodyType.pear === 0 && bodyType.hourglass === 0 && bodyType.invertedTriangle === 0) {
//     const maxRatio = Math.max(
//       hip / chest,
//       chest / waist,
//       chest / hip,
//     );

//     if (maxRatio === hip / chest) {
//       bodyType.pear = 100;
//     } else if (maxRatio === chest / waist) {
//       bodyType.hourglass = 100;
//     } else {
//       bodyType.invertedTriangle = 100;
//     }
//   }

//   return bodyType;
// };


// export const BodyTypeResult = () => {
//   const location = useLocation();
//   const measurements = location.state || {};
//   const { chest, waist, hip } = measurements;

//   const bodyType = calculateBodyType(chest, waist, hip);

//   return (
//     <div className="body-type-result">
//       <h1>Body Type Analysis</h1>
//       <div className="result-container">
//         <div className="result">
//           <h2>Pear Shaped</h2>
//           <div className="progress-bar">
//             <div className="fill pear" style={{ width: `${bodyType.pear}%` }}></div>
//           </div>
//           <p>{bodyType.pear}%</p>
//         </div>
//         <div className="result">
//           <h2>Hourglass</h2>
//           <div className="progress-bar">
//             <div className="fill hourglass" style={{ width: `${bodyType.hourglass}%` }}></div>
//           </div>
//           <p>{bodyType.hourglass}%</p>
//         </div>
//         <div className="result">
//           <h2>Inverted Triangle</h2>
//           <div className="progress-bar">
//             <div className="fill inverted-triangle" style={{ width: `${bodyType.invertedTriangle}%` }}></div>
//           </div>
//           <p>{bodyType.invertedTriangle}%</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BodyTypeResult;


//import React from 'react';
//import { useLocation } from 'react-router-dom';
// import './BodyTypeResult.scss';

// const images = [
//   {
//     img: "https://m.media-amazon.com/images/I/71BwBI4pxYL._SY550_.jpg",
//     bodyType: "pear",
//     asthetic: "cottagecore"
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/71ay8xhTkyL._SY679_.jpg",
//     bodyType: "pear",
//     asthetic: "cottagecore"
//   },
//   {
//     img: "https://i.pinimg.com/564x/c5/15/25/c51525bf68186aff48b4934e897a7769.jpg",
//     bodyType: "pear",
//     asthetic: "Grunge"
//   },
//   {
//     img: "https://i5.walmartimages.com/seo/Women-Gothic-Dress-Punk-Off-Shoulder-Striped-Knit-Dress-Y2k-Fairy-Grunge-Dress-Halloween-Dark-Academia-Clothes_e829872f-4126-4e07-af69-b5ad57e3b754.5925e822eac92bc548310e70d15e3862.png?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
//     bodyType: "pear",
//     asthetic: "Grunge"
//   },
//   {
//     img: "https://www.getpeachy.in/cdn/shop/products/y2k-dress-628238_900x.jpg?v=1695892135",
//     bodyType: "pear",
//     asthetic: "y2k"
//   },
//   {
//     img: "https://i.pinimg.com/564x/8c/99/77/8c99770dfeb7d055ec970403ca8805d5.jpg",
//     bodyType: "hourglass",
//     asthetic: "cottagecore"
//   },
//   {
//     img: "https://i.pinimg.com/736x/dd/ba/eb/ddbaebe3068789d5829d7516a4c733f6.jpg",
//     bodyType: "hourglass",
//     asthetic: "y2k"
//   },
//   {
//     img: "https://i.pinimg.com/564x/84/3c/22/843c22c7517a7171e3ebe6509bb623cb.jpg",
//     bodyType: "hourglass",
//     asthetic: "y2k"
//   },
//   {
//     img: "https://i.pinimg.com/564x/30/ad/b2/30adb2b1c9d7678f42f43b0b3d29a065.jpg",
//     bodyType: "hourglass",
//     asthetic: "cottagecore"
//   },
//   {
//     img: "https://i.pinimg.com/736x/2f/67/e4/2f67e484bcf8a009a1745c9b6798ed66.jpg",
//     bodyType: "hourglass",
//     asthetic: "Grunge"
//   },
//   {
//     img: "https://i.pinimg.com/564x/e8/58/1a/e8581ae151b887e9a44312b93c6ff374.jpg",
//     bodyType: "rectangle",
//     asthetic: "cottagecore"
//   },
//   {
//     img: "https://i.pinimg.com/736x/7d/79/14/7d79144b46ee4a0c11389d47fcc7baf5.jpg",
//     bodyType: "rectangle",
//     asthetic: "Grunge"
//   },
//   {
//     img: "https://i.pinimg.com/564x/63/1b/98/631b98537aa11e779c8c04059ac62976.jpg",
//     bodyType: "rectangle",
//     asthetic: "Grunge"
//   },
//   {
//     img: "https://i.pinimg.com/564x/91/7b/c2/917bc2acba6a027bb3f2d6ee69e49394.jpg",
//     bodyType: "rectangle",
//     asthetic: "y2k"
//   },
//   {
//     img: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*jsQRjSPGRWkK-QgE.jpg",
//     bodyType: "rectangle",
//     asthetic: "y2k"
//   }
// ];

// const calculateBodyType = (chest, waist, hip) => {
//   let bodyType = {
//     pear: 0,
//     hourglass: 0,
//     invertedTriangle: 0,
//   };

//   if (hip >= chest + 7 && Math.abs(chest - waist) <= 2) {
//     bodyType.pear = 100;
//   }

//   if (Math.abs(chest - hip) <= 2 && (chest - waist) >= 7) {
//     bodyType.hourglass = 100;
//   }

//   if ((chest - hip) >= 4 && Math.abs(hip - waist) <= 2) {
//     bodyType.invertedTriangle = 100;
//   }
//   if (bodyType.pear === 0 && bodyType.hourglass === 0 && bodyType.invertedTriangle === 0) {
//     const maxRatio = Math.max(
//       hip / chest,
//       chest / waist,
//       chest / hip,
//     );

//     if (maxRatio === hip / chest) {
//       bodyType.pear = 100;
//     } else if (maxRatio === chest / waist) {
//       bodyType.hourglass = 100;
//     } else {
//       bodyType.invertedTriangle = 100;
//     }
//   }

//   return bodyType;
// };

// export const BodyTypeResult = () => {
//   const location = useLocation();
//   const measurements = location.state || {};
//   const { chest, waist, hip } = measurements;

//   const bodyType = calculateBodyType(chest, waist, hip);

//   const recommendedImages = images.filter(image => bodyType[image.bodyType] > 0);

//   return (
//     <div className="body-type-result">
//       <h1>Body Type Analysis</h1>
//       <div className="result-container">
//         <div className="result">
//           <h2>Pear Shaped</h2>
//           <div className="progress-bar">
//             <div className="fill pear" style={{ width: `${bodyType.pear}%` }}></div>
//           </div>
//           <p>{bodyType.pear}%</p>
//         </div>
//         <div className="result">
//           <h2>Hourglass</h2>
//           <div className="progress-bar">
//             <div className="fill hourglass" style={{ width: `${bodyType.hourglass}%` }}></div>
//           </div>
//           <p>{bodyType.hourglass}%</p>
//         </div>
//         <div className="result">
//           <h2>Inverted Triangle</h2>
//           <div className="progress-bar">
//             <div className="fill inverted-triangle" style={{ width: `${bodyType.invertedTriangle}%` }}></div>
//           </div>
//           <p>{bodyType.invertedTriangle}%</p>
//         </div>
//       </div>
//       <div className="recommendations">
//         <h2>Recommendations</h2>
//         <div className="recommendation-images">
//           {recommendedImages.map((image, index) => (
//             <div key={index} className="recommendation-image">
//               <img src={image.img} alt={`${image.bodyType} - ${image.asthetic}`} />
//               <p>{`${image.bodyType} - ${image.asthetic}`}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

import React from 'react';
import { useLocation } from 'react-router-dom';
import './BodyTypeResult.scss';

const images = [
  {
    img: "https://m.media-amazon.com/images/I/71BwBI4pxYL._SY550_.jpg",
    bodyType: "pear",
    asthetic: "cottagecore"
  },
  {
    img: "https://m.media-amazon.com/images/I/71ay8xhTkyL._SY679_.jpg",
    bodyType: "pear",
    asthetic: "cottagecore"
  },
  {
    img: "https://i.pinimg.com/564x/c5/15/25/c51525bf68186aff48b4934e897a7769.jpg",
    bodyType: "pear",
    asthetic: "Grunge"
  },
  {
    img: "https://i5.walmartimages.com/seo/Women-Gothic-Dress-Punk-Off-Shoulder-Striped-Knit-Dress-Y2k-Fairy-Grunge-Dress-Halloween-Dark-Academia-Clothes_e829872f-4126-4e07-af69-b5ad57e3b754.5925e822eac92bc548310e70d15e3862.png?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
    bodyType: "pear",
    asthetic: "Grunge"
  },
  {
    img: "https://www.getpeachy.in/cdn/shop/products/y2k-dress-628238_900x.jpg?v=1695892135",
    bodyType: "pear",
    asthetic: "y2k"
  },
  {
    img: "https://i.pinimg.com/564x/8c/99/77/8c99770dfeb7d055ec970403ca8805d5.jpg",
    bodyType: "hourglass",
    asthetic: "cottagecore"
  },
  {
    img: "https://i.pinimg.com/736x/dd/ba/eb/ddbaebe3068789d5829d7516a4c733f6.jpg",
    bodyType: "hourglass",
    asthetic: "y2k"
  },
  {
    img: "https://i.pinimg.com/564x/84/3c/22/843c22c7517a7171e3ebe6509bb623cb.jpg",
    bodyType: "hourglass",
    asthetic: "y2k"
  },
  {
    img: "https://i.pinimg.com/564x/30/ad/b2/30adb2b1c9d7678f42f43b0b3d29a065.jpg",
    bodyType: "hourglass",
    asthetic: "cottagecore"
  },
  {
    img: "https://i.pinimg.com/736x/2f/67/e4/2f67e484bcf8a009a1745c9b6798ed66.jpg",
    bodyType: "hourglass",
    asthetic: "Grunge"
  },
  {
    img: "https://i.pinimg.com/564x/e8/58/1a/e8581ae151b887e9a44312b93c6ff374.jpg",
    bodyType: "rectangle",
    asthetic: "cottagecore"
  },
  {
    img: "https://i.pinimg.com/736x/7d/79/14/7d79144b46ee4a0c11389d47fcc7baf5.jpg",
    bodyType: "rectangle",
    asthetic: "Grunge"
  },
  {
    img: "https://i.pinimg.com/564x/63/1b/98/631b98537aa11e779c8c04059ac62976.jpg",
    bodyType: "rectangle",
    asthetic: "Grunge"
  },
  {
    img: "https://i.pinimg.com/564x/91/7b/c2/917bc2acba6a027bb3f2d6ee69e49394.jpg",
    bodyType: "rectangle",
    asthetic: "y2k"
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*jsQRjSPGRWkK-QgE.jpg",
    bodyType: "rectangle",
    asthetic: "y2k"
  }
];

const calculateBodyType = (chest, waist, hip) => {
  let bodyType = {
    pear: 0,
    hourglass: 0,
    invertedTriangle: 0,
  };

  if (hip >= chest + 7 && Math.abs(chest - waist) <= 2) {
    bodyType.pear = 100;
  }

  if (Math.abs(chest - hip) <= 2 && (chest - waist) >= 7) {
    bodyType.hourglass = 100;
  }

  if ((chest - hip) >= 4 && Math.abs(hip - waist) <= 2) {
    bodyType.invertedTriangle = 100;
  }

  if (bodyType.pear === 0 && bodyType.hourglass === 0 && bodyType.invertedTriangle === 0) {
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
      bodyType.invertedTriangle = 100;
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
          <h2>Inverted Triangle</h2>
          <div className="progress-bar">
            <div className="fill inverted-triangle" style={{ width: `${bodyType.invertedTriangle}%` }}></div>
          </div>
          <p>{bodyType.invertedTriangle}%</p>
        </div>
      </div>
      <div className="recommendations">
        <h2>Recommendations</h2>
        <div className="recommendation-images">
          {recommendedImages.map((image, index) => (
            <div key={index} className="recommendation-image">
              <img src={image.img} alt={`${image.bodyType} - ${image.asthetic}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyTypeResult;

