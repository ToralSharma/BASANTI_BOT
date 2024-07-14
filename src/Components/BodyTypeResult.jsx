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


import React from 'react';
import { useLocation } from 'react-router-dom';
import './BodyTypeResult.scss';

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

  // Ensure at least one body type has a non-zero percentage
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
    </div>
  );
};

export default BodyTypeResult;
