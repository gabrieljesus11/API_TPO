import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';




const data = [
    {id: 1, curso: 'Marketing', duracion: "25 horas", frecuencia: "3 veces por semana", precio: 40000, moneda: "ARS"},
    {id: 2, curso: 'Diseño UX', duracion: "30 horas", frecuencia: "2 días al mes", precio: 50000, moneda: "ARS"},
    {id: 3, curso: 'Cerámica', duracion: "15 horas", frecuencia: "3 horas diarias", precio: 10000, moneda: "ARS"},
    {id: 4, curso: 'Yoga', duracion: "4 horas por clase", frecuencia: "Cada 24 días", precio: 20000, moneda: "ARS"},
    {id: 5, curso: 'Zumba', duracion: "1 hora por clase", frecuencia: "2 veces a la semana", precio: 20000, moneda: "ARS"},
    {id: 6, curso: 'Programación', duracion: "45 horas", frecuencia: "4 veces a la semana", precio: 80000, moneda: "ARS"}
    
  ];


class ABMcursos extends React.Component{
  
    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
          id: "",
          curso: "",
          duracion: "",
          frecuencia: "",
          precio: "",
        },
      };

    mostrarModalActualizar = (elemento) => {
        this.setState({
          form: elemento,
          modalActualizar: true,
        });
      };
    
      cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
      };
    
      mostrarModalInsertar = () => {
        this.setState({
          modalInsertar: true,
        });
      };
    
      cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
      };
    
      editar = (elemento) => {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
          if (elemento.id === registro.id) {
            arreglo[contador].personaje = elemento.personaje;
            arreglo[contador].anime = elemento.anime;
          }
          contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
      };
    
      eliminar = (elemento) => {
        var opcion = window.confirm("Estás seguro que deseas eliminar el curso "+elemento.curso + "?");
        if (opcion === true) {
          var contador = 0;
          var arreglo = this.state.data;
          arreglo.map((registro) => {
            if (elemento.id === registro.id) {
              arreglo.splice(contador, 1);
            }
            contador++;
          });
          this.setState({ data: arreglo, modalActualizar: false });
        }
      };
    
      insertar= ()=>{
        var valorNuevo= {...this.state.form};
        valorNuevo.id=this.state.data.length+1;
        var lista= this.state.data;
        lista.push(valorNuevo);
        this.setState({ modalInsertar: false, data: lista });
      }

    handleChange = (e) => {
        this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
          },
        });
      };

    render(){
        return(
            <>
            <Container>
            <br />
            <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Agregar nuevo curso</Button>
            <br />
            <br />

            <Table responsive striped bordered hover>
           
                <tr>
                    <th>Curso</th>
                    <th>Duración</th>
                    <th>Frecuencia</th>
                    <th>Moneda</th>
                    <th>Precio</th>
                    <th>Modificar</th>
                    <th>Publicar</th>
                    <th>Eliminar</th>
                </tr>
            
            <tbody>
                {this.state.data.map((elemento)=>(
                    <tr>
                        <td>{elemento.curso}</td>
                        <td>{elemento.duracion}</td>
                        <td>{elemento.frecuencia}</td>
                        <td>{elemento.moneda}</td>
                        <td>{elemento.precio}</td>
                        <td><Button color="primary" onClick={() => this.mostrarModalActualizar(elemento)}>Modificar</Button></td>
                        <td> <FormControlLabel control={<Switch defaultChecked />} label="Publicar"/></td>
                        <td><IconButton aria-label="Eliminar" onClick={()=> this.eliminar(elemento)}><DeleteIcon /></IconButton></td>
                    </tr>
                ))}
            </tbody>

            </Table>

            </Container>

            <br />
            <br />
            <br />

            <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Modificar</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Curso: 
              </label>
              <input
                className="form-control"
                name="curso"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.curso}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Duración (hs): 
              </label>
              <input
                className="form-control"
                name="duracion"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.duracion}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Frecuencia: 
              </label>
              <input
                className="form-control"
                name="frecuencia"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.frecuencia}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Precio: 
              </label>
              <input
                className="form-control"
                name="precio"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.precio}
              />
            </FormGroup>

          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Modificar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Crear Curso</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Curso: 
              </label>
              <input
                className="form-control"
                name="curso"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.curso}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Duración (hs): 
              </label>
              <input
                className="form-control"
                name="duracion"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.duracion}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Frecuencia: 
              </label>
              <input
                className="form-control"
                name="frecuencia"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.frecuencia}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Precio: 
              </label>
              <input
                className="form-control"
                name="precio"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.precio}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Crear
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

            </>
        )
    }
}

export default ABMcursos;