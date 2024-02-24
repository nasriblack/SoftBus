import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderComponentProps {}

const HeaderComponent: FC<HeaderComponentProps> = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <div
        onClick={() => {
          navigate('/');
        }}
        className="nav__logo"
      >
        SoftBus
      </div>
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
      <button
        onClick={() => {
          navigate('/ticket-seat');
        }}
        className="btn"
      >
        Book
      </button>
    </nav>
  );
};

export default HeaderComponent;
