import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import AppRoutes from './Routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
