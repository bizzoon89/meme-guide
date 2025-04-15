import { Route, Routes } from 'react-router-dom';
import { TablePage } from './pages/TablePage';
import { ListPage } from './pages/ListPage';
import { AppNavbar } from './components/AppNavbar';

export default function App() {
  return (
    <>
      <AppNavbar />
      <main className='p-4 max-w-7xl mx-auto '>
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
      </main>
    </>
  );
}
