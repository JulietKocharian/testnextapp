import styles from '.././../carousel.module.css';

export const ScrollToLeft = (props) => {
  console.log(props)
  const { onClick } = props;
  return (
    <button className={`${styles.prevArrow} ${styles.arrowButton}`} onClick={onClick}>
      <img src='../assets/sections/fifthSection/leftArrow.svg' alt='arrow' />
    </button>
  );
};

export const ScrollToRight = (props) => {
  const { onClick } = props;
  return (
    <div className={`${styles.nextArrow} ${styles.arrowButton}`} onClick={onClick}>
      <img src='../assets/sections/fifthSection/rightArrow.svg' alt='arrow' />
    </div>
  );
};


export const ScrollToTop = (props) => {
  const { onClick } = props;
  return (
    <div className={`${styles.nextArrow} ${styles.arrowButtonTop}`} onClick={onClick}>
      <img src='../assets/sections/fifthSection/topArrow.svg' alt='arrow' style={{ width: '40px' }} />
    </div>
  )
}