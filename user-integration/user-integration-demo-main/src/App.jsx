import { Routes, Route } from 'react-router-dom';
import Dashboard from './views/dashboard/Dashboard';
import Register from './views/register/Register';
import './App.css';
import Users from './views/users/Users';
import UserDetails from './views/users/components/UserDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/users/:id" element={<Users />} />
      <Route path="/users/:id/details" element={<UserDetails />} />
      
    </Routes>
  );
}

export default App;
