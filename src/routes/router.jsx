import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/home';
import CaseStudy from '../pages/case-study/caseStudy';
import About from '../pages/about/about';
import RootLayout from '../layout/root-layout';
import NotFoundPage from '../pages/error/404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'case-study',
        element: <CaseStudy />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

export default router;
