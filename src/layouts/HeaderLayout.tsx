import { FC } from 'react';
import HeaderComponent from './HeaderComponent';

interface HeaderLayoutProps {
  children: JSX.Element;
}

const HeaderLayout: FC<HeaderLayoutProps> = ({ children }) => {
  return (
    <div>
      <HeaderComponent />
      {children}
    </div>
  );
};

export default HeaderLayout;
