import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

const RootLayout = () => {
  return (
    <div>
      <div>
        <div>
          <Header />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
