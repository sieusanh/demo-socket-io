import { Route, BrowserRouter, Routes } 
from 'react-router-dom';
import { Home } from './features/Home';
import { Dashboard, Contact } from '@/routes';
import React, { Suspense } from 'react';
import { MainPage, AddEditPage} from './features/Photo/pages';
import { NotFound } from '@/components';
import Header from '@/components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';

const LazyComponent = React.lazy(() => import ('./features/Home/components/LazyLoad'));

export default function App() {

  return (
    <div className='photo-app'>
      <Suspense fallback={<div>'Loading...'</div>}>
        <BrowserRouter>
          <Header />
          {/* <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/lazy' element={<LazyComponent />} />
            <Route path='/photos'>
              <Route path='' element={<MainPage />} />
              <Route path='add' element={<AddEditPage />} />
              <Route path=':photoId' element={<AddEditPage />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes> */}
        </BrowserRouter>
      </ Suspense>
    </div>
  );

  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Header />,
  //     children: [
  //       {
  //         // path: '/',
  //         element: <div>Home</div>,
  //         index: true
  //       }
  //     ]
  //     // children: [
  //     //   { 
  //     //     path: '/', 
  //     //     element: <Home />,
  //     //     // index: true
  //     //     // errorElement: <ErrorPage />,
  //     //   },
  //     //   { path: '/dashboard', element: <Dashboard />},
  //     //   { path: '/contact', element: <Contact />},
  //     //   { 
  //     //     path: '/lazy',  
  //     //     element: 
  //     //       // <Suspense fallback='Loading...'>
  //     //         <LazyComponent />
  //     //       // </Suspense>
  //     //   },
  //     //   // {
  //     //   //   path: '/photos',
  //     //   //   // element: <Photo />,
  //     //   //   children: [
  //     //   //     {
  //     //   //       path: '',
  //     //   //       element: <MainPage />
  //     //   //     },
  //     //   //     {
  //     //   //       path: 'add',
  //     //   //       element: <AddEditPage />,
  //     //   //     },
  //     //   //     // {
  //     //   //     //   path: ':photoId',
  //     //   //     //   element: <AddEditPage />
  //     //   //     // },
  //     //   //   ]
  //     //   // },
  //     //   {
  //     //     path: '*',
  //     //     element: <NotFound />,
  //     //   }
  //     // ]
  //   },
  // ]);
  // , {
  //   basename: '/app/',
  // });
  
  // return (
  //   <div className='app'>
  //     <RouterProvider router={router} />;
  //   </div>
  // );
}