import React from 'react';

import HeaderSection from '../../view/header/headerSection';
import FirstSection from '../../view/sections/firstSection/firstSection';
import SecondSection from '../../view/sections/secondSection/secondSection';
import ThirdSection from '../../view/sections/thirdSection/thirdSection';
import FourthSection from '../../view/sections/fourthSection/fourthSection';
import FifthSection from '../../view/sections/fifthSection/fifthSection';
import PhoneButton from '../../components/buttons/PhoneButton/PhoneButton';

const Home = () => {
  return (
    <div style={{position: 'relative'}}>
    <HeaderSection />
    <FirstSection />
    <SecondSection/>
    <ThirdSection/>
    <FourthSection/>
    <FifthSection/>
    <PhoneButton/>
  </div>
  )
}

export default Home;
