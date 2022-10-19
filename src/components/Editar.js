import React from 'react';
class Editar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state = {
      datosCargados: false,
      empleado: []
      }
  }
  
  componentDidMount= () =>{
  
    // console.log(this.props.match.param.id);         //error
    fetch("http://localhost/empleados/?consultar="+this.props.match.param.id)
    .then(respuesta=>respuesta.json())
    .then((datosrespuesta)=>{
      
      console.log(datosrespuesta);
      this.setState({ 
                    datosCargados: true, 
                    empleado: datosrespuesta[0] 
                  });
    })
    .catch(console.log)
  }

  render() { 
    const {datosCargados, empleado} = this.state;
    return ( <div className="card">
      <div className="card-header">
        Editar Empleados
      </div>
      <div className="card-body">
          {empleado.id}
          {empleado.nombre}
          {empleado.correo}
      </div>
      <div className="card-footer text-muted">
        Footer
      </div>
    </div> );
  }
}
export default Editar;