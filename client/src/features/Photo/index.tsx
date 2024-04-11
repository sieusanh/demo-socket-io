
import { createBrowserRouter, useLocation, 
    RouterProvider } from 'react-router-dom';
import { NotFound } from '@/components';
import { MainPage, AddEditPage} from './pages';

export default function Photo(props: any) {
    const location = useLocation();
    const pathName = location.pathname;

    const router = createBrowserRouter([
        {
            path: `${pathName}/`,
            element: <MainPage />,
            // errorElement: <ErrorPage />,
        },
        { path: `${pathName}/add`, element: <AddEditPage /> },
        { path: `${pathName}/:photoId`, element: <AddEditPage /> },
        // NotFound
    ]);
    
    return <RouterProvider router={router} />;
}