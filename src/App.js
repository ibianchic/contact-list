import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import ContactForm from './views/ContactForm'; // Importa el componente ContactForm

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} /> {/* Define la ruta principal */}
          <Route path='/contact' element={<ContactForm />} /> {/* Define la ruta para el formulario de contacto */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;