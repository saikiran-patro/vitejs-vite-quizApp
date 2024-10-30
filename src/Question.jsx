import React, { useEffect, useState } from 'react';

const Question = ({ currentQuestion, next }) => {
  const { question, options, correctOption } = currentQuestion;
  const [showColor, setShowColor] = useState(false);
  const checkAnswer = (id) => {
    if (id === correctOption) {
      console.log('Hurray');
    }
    next();
    setShowColor(true);
  };

  useEffect(() => {
    setShowColor(false);
  }, [question]);
  return (
    <>
      <div>
        {question}
        <br />
        <br />
        <div>
          {options.map((item, index) => (
            <button
              key={index}
              style={
                index === correctOption
                  ? showColor
                    ? { marginRight: '10px', background: 'green' }
                    : { marginRight: '10px', background: 'transparent' }
                  : showColor
                  ? { margrinRight: '10px', backround: 'yellow' }
                  : { marginRight: '10px', background: 'transparent' }
              }
              onClick={() => checkAnswer(index)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Question;
