import './App.css';
import Header from './component/Header';
import ListEmployeeComponent from './component/ListEmployeeComponent';
import EmployeeComponent from './component/EmployeeComponent';
import AdminDashboard from './component/AdminDashboard';
import UserPage from './component/UserPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ListEmployeeComponent />} />
          <Route path='/emplist' element={<ListEmployeeComponent />} />
          <Route path='/add-employee' element={<EmployeeComponent />} />
          <Route path='/update-employee/:id' element={<EmployeeComponent />} />
          <Route path='/admin' element={<AdminDashboard />} />
          <Route path='/user' element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
