import pic from '../assets/img/bus.jpg';
import header_shape from '../assets/svg/header-shape-1.svg';

import { useNavigate } from 'react-router-dom';
import HeaderLayout from '../layouts/HeaderLayout';

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="header__navbar">
        <div className="shader__shape"></div>
        <HeaderLayout>
          <header className="section__container header__container">
            <h1 className="section__header">
              Find And Book
              <br />A Great Experience
            </h1>
            <img src={pic} alt="header" />
          </header>
        </HeaderLayout>
      </div>
    </>
  );
}

export default Home;
