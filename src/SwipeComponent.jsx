import React, { useState, useEffect, useRef } from 'react';
import './SwipeComponent.scss';

export const SwipeComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const maxSwipes = 9;

  const cardsRef = useRef([]);
  const outcomeRef = useRef(null);
  const resultSlideRef = useRef(null);
  const resultTextRef = useRef(null);
  const recommendationPhotosRef = useRef(null);

  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  useEffect(() => {
    const handleMouseDown = startDrag;
    const handleMouseMove = onDrag;
    const handleMouseUp = endDrag;
    const handleTouchStart = startDrag;
    const handleTouchMove = onDrag;
    const handleTouchEnd = endDrag;

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  useEffect(() => {
    if (cardsRef.current[currentIndex]) {
      cardsRef.current[currentIndex].style.zIndex = 100;
    }
  }, [currentIndex]);

  const handleSwipe = (direction) => {
    if (currentIndex <= maxSwipes) {
      const currentCard = cardsRef.current[currentIndex];

      if (direction === 'right') {
        currentCard.style.transform = 'translateX(100%)';
        outcomeRef.current.textContent = 'Liked';
        outcomeRef.current.style.color = 'green';
        setLikes(likes + 1);
      } else if (direction === 'left') {
        currentCard.style.transform = 'translateX(-100%)';
        outcomeRef.current.textContent = 'Disliked';
        outcomeRef.current.style.color = 'red';
        setDislikes(dislikes + 1);
      }

      currentCard.style.opacity = '0';
      setCurrentIndex(currentIndex + 1);

      setTimeout(() => {
        currentCard.style.display = 'none';
      }, 300);

      if (currentIndex >= maxSwipes) {
        showResult();
      }
    }
  };

  const showResult = () => {
    const resultMessage = `You liked ${likes} out of ${maxSwipes + 1} items.`;
    resultTextRef.current.textContent = resultMessage;

    const photos = [
      "https://via.placeholder.com/80",
      "https://via.placeholder.com/80",
      "https://via.placeholder.com/80"
    ];

    recommendationPhotosRef.current.innerHTML = '';
    photos.forEach(photo => {
      const img = document.createElement('img');
      img.src = photo;
      img.alt = "Recommendation";
      recommendationPhotosRef.current.appendChild(img);
    });

    resultSlideRef.current.style.opacity = 1;
    resultSlideRef.current.style.pointerEvents = 'auto';
  };

  const startDrag = (event) => {
    startX = event.type === 'touchstart' ? event.touches[0].clientX : event.clientX;
    isDragging = true;
  };

  const onDrag = (event) => {
    if (isDragging) {
      currentX = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
      const diffX = currentX - startX;
      const currentCard = cardsRef.current[currentIndex];

      currentCard.style.transform = `translateX(${diffX}px)`;
    }
  };

  const endDrag = () => {
    if (!isDragging) return;

    isDragging = false;
    const diffX = currentX - startX;
    const currentCard = cardsRef.current[currentIndex];

    if (Math.abs(diffX) > 100) {
      if (diffX > 0) {
        handleSwipe('right');
      } else {
        handleSwipe('left');
      }
    } else {
      currentCard.style.transform = 'translateX(0)';
    }
  };

  const images = [
    "https://cdn.tobi.com/product_images/lg/2/white-im-the-one-crop-top.jpg",
    "https://2.bp.blogspot.com/-X-gL1Fjlz18/T6Dthr2Z5YI/AAAAAAAAAO4/ryT0xCZEcCY/s1600/tops-dressy-top-dsy-pxd-013-hot-pink.jpg",
    "https://litb-cgis.rightinthebox.com/images/384x500/202107/bps/product/inc/tupkle1626234171612.jpg",
    "https://d44ri6pmeripj.cloudfront.net/morilee/wp-content/uploads/2019/10/9541-0019.jpg",
    "https://africanclothingstore.co.uk/wp-content/uploads/2019/08/DSC_0303.jpg.webp",
    "https://techwear.es/wp-content/uploads/2022/09/techwear-tops-2.jpg",
    "https://i.pinimg.com/736x/19/1b/2f/191b2fd624f7a73976fa8056f8b3e76c.jpg",
    "https://www.korea-zanmai.com/images/k/maxi%20dresses-054qga.jpg",
    "https://natalet.com/images5/1116/evening-dress-tops/evening-dress-tops-51.jpeg",
    "https://3.bp.blogspot.com/-GdQQ8STozls/T4_A2Awu2bI/AAAAAAAAAI0/d4D5tN_Izsg/s1600/tops-dressy-top-dsy-pxd-001-pink.jpg"
  ];

  return (
    <div className="card-container">
      {images.map((src, index) => (
        <div
          key={index}
          className="card"
          ref={(el) => (cardsRef.current[index] = el)}
          style={{ zIndex: 100 - index }}
        >
          <img src={src} alt={`Image ${index + 1}`} />
        </div>
      ))}
      <div className="instructions left">Swipe Left</div>
      <div className="instructions right">Swipe Right</div>
      <div className="outcome" ref={outcomeRef}>Swipe to start</div>
      <div className="result-slide" ref={resultSlideRef}>
        <div className="result-text" ref={resultTextRef}></div>
        <div className="recommendation-photos" ref={recommendationPhotosRef}></div>
      </div>
    </div>
  );
};
