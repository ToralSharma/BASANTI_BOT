import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Basanti.scss';

export const Basanti = () => {
  const [messages, setMessages] = useState([]);
  const [measurements, setMeasurements] = useState({
    chest: '',
    waist: '',
    hip: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Add default introduction message
    setMessages([
      { text: "Hello! I am Basanti, your personal stylist bot.", type: "bot", options: ["I want to know about my body type", "End"] }
    ]);
  }, []);

  const handleOptionClick = (option) => {
    if (option === "End") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Goodbye! Have a great day!", type: "bot", options: [] }
      ]);
      return;
    }

    if (option === "I want to know about my body type") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: option, type: "user", options: [] },
        { text: "Have you taken the swipe survey?", type: "bot", options: ["Yes, already done", "No, I will take later", "End"] }
      ]);
    } else if (option === "Yes, already done") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: option, type: "user", options: [] },
        { text: "Great! Let's continue. Please provide your chest measurement in inches.", type: "bot", options: [] }
      ]);
    } else if (option === "No, I will take later") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: option, type: "user", options: [] },
        { text: "No problem. You can take it later", type: "bot", options: [] }
      ]);
    }
  };

  const handleMeasurementInput = (e, measurementType) => {
    setMeasurements({
      ...measurements,
      [measurementType]: e.target.value
    });
  };

  const handleMeasurementSubmit = (measurementType, nextQuestion) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: `My ${measurementType} is ${measurements[measurementType]} inches.`, type: "user", options: [] },
      { text: nextQuestion, type: "bot", options: [] }
    ]);
  };

  const handleResultClick = () => {
    navigate('/done', { state: measurements });
  };

  return (
    <div className="chatbot">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.type}`}>
          <p>{message.text}</p>
          {message.options && (
            <div className="options">
              {message.options.map((option, idx) => (
                <button key={idx} onClick={() => handleOptionClick(option)}>
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
      {messages[messages.length - 1]?.text.includes('chest measurement') && (
        <div className="message input">
          <input
            type="number"
            placeholder="Enter your chest measurement"
            value={measurements.chest}
            onChange={(e) => handleMeasurementInput(e, 'chest')}
          />
          <button onClick={() => handleMeasurementSubmit('chest', 'Please provide your waist measurement in inches.')}>
            Submit
          </button>
        </div>
      )}
      {messages[messages.length - 1]?.text.includes('waist measurement') && (
        <div className="message input">
          <input
            type="number"
            placeholder="Enter your waist measurement"
            value={measurements.waist}
            onChange={(e) => handleMeasurementInput(e, 'waist')}
          />
          <button onClick={() => handleMeasurementSubmit('waist', 'Please provide your hip measurement in inches.')}>
            Submit
          </button>
        </div>
      )}
      {messages[messages.length - 1]?.text.includes('hip measurement') && (
        <div className="message input">
          <input
            type="number"
            placeholder="Enter your hip measurement"
            value={measurements.hip}
            onChange={(e) => handleMeasurementInput(e, 'hip')}
          />
          <button onClick={() => handleMeasurementSubmit('hip', 'Thank you for providing your measurements!')}>
            Submit
          </button>
        </div>
      )}
      {messages[messages.length - 1]?.text.includes('Thank you for providing your measurements!') && (
        <div className="message result">
          <button onClick={handleResultClick}>Show Result</button>
        </div>
      )}
    </div>
  );
};

export default Basanti;
