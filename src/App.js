
import './App.css';
import Listar from './components/Lista';
import Crear from './components/Crear';
import Editar from './components/Editar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="nav navbar-nav">
              <Link className="nav-item nav-link active" to={"/"}>Sistema <span className="sr-only">(current)</span></Link>
              <Link className="nav-item nav-link" to={"/crear"}>Crear empleado</Link>
              <Link className="nav-item nav-link" to={"/editar"}>Editar empleado</Link>
          </div>
      </nav>
    <div className='container'>
      <br />
      <Routes>
          <Route  exact path='/' element={<Listar />} />
          <Route  path='/crear' element={<Crear />} />
          <Route  path='/editar' element={<Editar />} />
      </Routes>
    </div>
      </Router>

  
  );
}

export default App;
