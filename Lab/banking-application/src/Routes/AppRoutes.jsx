import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Dashboard from '../Pages/Dashboard';
import Accounts from '../Pages/Accounts';
import Transactions from '../Pages/Transactions';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/accounts" element={<Accounts />} />
    <Route path="/transactions/:id" element={<Transactions />} />
  </Routes>
);

export default AppRoutes;
