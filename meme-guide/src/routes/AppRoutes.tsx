import { Routes, Route } from 'react-router-dom';
import { TablePage } from '../pages/TablePage';
import { ListPage } from '../pages/ListPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path='/'
        element={<TablePage />}
      />
      <Route
        path='/list'
        element={<ListPage />}
      />
    </Routes>
  );
}
