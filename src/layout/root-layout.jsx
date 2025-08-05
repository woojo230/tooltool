import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const RootLayout = () => {
  return (
    <div>
      <div>
        <div>
          <Header />
        </div>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
