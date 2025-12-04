import { createBrowserRouter } from 'react-router-dom';
import { PropertyListPage } from '../pages/PropertyListPage';
import { PropertyDetailPage } from '../pages/PropertyDetailPage';
import { PropertyFormPage } from '../pages/PropertyFormPage';

export const router = createBrowserRouter([
  { path: '/', element: <PropertyListPage /> },
  { path: '/properties/:id', element: <PropertyDetailPage /> },
  { path: '/properties/create', element: <PropertyFormPage /> },
  { path: '/properties/edit/:id', element: <PropertyFormPage /> },
]);
