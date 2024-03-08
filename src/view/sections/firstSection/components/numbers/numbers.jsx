
import React, { useEffect, useState } from 'react';

import styles from './numbers.module.css';

const Numbers = () => {

  const [value, setValue] = useState(0);

  const [filledSections, setFilledSections] = useState([true, false, false, false]);


  const thresholds = [22, 41, 59, 78];



  const _sliderChange = (event) => {
    const slider = event.target;
    const newValue = parseFloat(slider.value);
    setValue(newValue);
  };

  const arraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }

  const _imageClick = (index) => {
    const updatedSections = filledSections.map((_, i) => i <= index ? true : _);
    setFilledSections(updatedSections);
  };

  useEffect(() => {
    const updatedSections = filledSections.map((_, index) => {
      return value >= thresholds[index];
    });
    if (arraysEqual(updatedSections, filledSections)) {
      return;
    }
    setFilledSections(updatedSections);
  }, [value, thresholds, filledSections]);

  useEffect(() => {
    setFilledSections(filledSections);
  }, [filledSections])

  return (
    <div className={styles.mainContainer}>
      {/* numbers */}
      <div className={styles.numbersContainer}>
        {filledSections.map((isFilled, index) => (
          <img
          onClick={() => _imageClick(index)}
            key={index}
            src={`${!isFilled ? `../assets/sections/firstSection/empty${index + 1}.svg` : `../assets/sections/firstSection/filled${index + 1}.svg`}`}
            alt={`number${index + 1}`}
            className={styles.numberStyle}
          />
        ))}
      </div >
      {/* line */}
      <div className={styles.rel}>
        <input
          type='range'
          onChange={(e) => _sliderChange(e)}
          min='0' max='100' value={value}
          onClick={(e) => _sliderChange(e)}
          className={`${filledSections.map((filled, index) => filled && styles[`input${index + 1}`]).join(' ')} ${styles.input}`}
        />
        <div className={styles.line}>
          {[...Array(4)].map((_, index) => (
            <div key={index} className={`${filledSections[index] && styles.dotClicked} ${styles.dot}`}/>
          ))}
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}


export default Numbers;




