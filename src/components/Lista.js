import React from 'react'
import { Link } from 'react-router-dom';

class Listar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      datosCargados: false,
      empleados:[]
    };
  }

  cargarDatos() {
    fetch("http://localhost:3004/personas")
    .then(respuesta=>respuesta.json())
    .then((datosrespuesta)=>{
      
      console.log(datosrespuesta);
      this.setState({ datosCargados: true, empleados: datosrespuesta });
    
    })
    .catch(console.log)
  }
  componentDidMount() {
    this.cargarDatos();

  }
  render() { 
    const{datosCargados, empleados} = this.state
      if(!datosCargados){
        return( <div>Cargando....</div>)
      }else{
            return ( 
              <div className="card">
                <div className="card-header">
                <Link className="btn btn-success" to={'/crear'}>Agregar nuevo empleado</Link>
                </div>
                <div className="card-body">
                  <h4>  Lista de Empleado</h4>
                <table className="table">
              <thead>
                <tr>
                        <th>ID</th>
                        <th>CI</th>
                        <th>SIS</th>
                        <th>COMPLEMENTO</th>
                        <th>NOMBRE1</th>
                        <th>NOMBRE2</th>
                        <th>APELLIDO1</th>
                        <th>APELLIDO2</th>
                        
                        <th>ACCIONES</th>
                </tr>
              </thead>
                <tbody>
                  {empleados.map(
                    (empleado) =>
                    <tr key={empleado.id}>
                  <td>{empleado.id}</td>
                          <td>{empleado.ci}</td>
                          <td>{empleado.sis}</td>
                          <td>{empleado.complemento}</td>
                          <td>{empleado.nombre1}</td>
                          <td>{empleado.nombre2}</td>
                          <td>{empleado.apellido1}</td>
                          <td>{empleado.apellido2}</td>
                    <td>
                      <div className="btn-group" role="group" aria-label="">
                        <Link className="btn btn-warning" to={'/editar'}>Editar</Link>
                        <button type="button" className="btn btn-danger">Borrar</button>
                      </div>
                    </td>
                  </tr>
                  )}
                </tbody>
            </table> 
                </div>
                <div className="card-footer text-muted">
            
                </div>
              </div>
          );
      }
  }
}
export default Listar;