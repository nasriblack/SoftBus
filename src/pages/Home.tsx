import pic from '../assets/img/bus.jpg';
import header_shape from '../assets/svg/header-shape-1.svg';

function Home() {
  return (
    <>
      <div>
        <nav>
          <div className="nav__logo">SoftBus</div>
          <ul className="nav__links">
            <li className="link">
              <a href="#">(+216) 20 184 681</a>
            </li>
            <li className="link">
              <a href="#">(+216) 20 184 681</a>
            </li>
            <li className="link">
              <a href="#">(+216) 20 184 681</a>
            </li>
          </ul>
          <button className="btn">Contact</button>
        </nav>
        <header className="section__container header__container">
          <h1 className="section__header">
            Find And Book
            <br />A Great Experience
          </h1>
          <img src={pic} alt="header" />
        </header>
      </div>
    </>
  );
}

export default Home;
