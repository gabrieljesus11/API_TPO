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
    {id: 1, curso: 'Marketing', duracion: 25, frecuencia: 3, precio: 40000},
    {id: 2, curso: 'Diseño UX', duracion: 30, frecuencia: 2, precio: 50000},
    {id: 3, curso: 'Cerámica', duracion: 15, frecuencia: 3, precio: 10000},
    {id: 4, curso: 'Yoga', duracion: 4, frecuencia: 24, precio: 20000},
    {id: 5, curso: 'Zumba', duracion: 6, frecuencia: 2, precio: 20000},
    {id: 6, curso: 'Programación', duracion: 45, frecuencia: 4, precio: 80000},
    
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
        var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+elemento.id);
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
            <Button type="button" className="btn btn-custom" onClick={()=>this.mostrarModalInsertar()}>Agregar nuevo curso</Button>
            <br />
            <br />

            <Table responsive striped bordered hover>
            <thread>
                <tr>
                    <th>id</th>
                    <th>Curso</th>
                    <th>Duración (hs)</th>
                    <th>Frecuencia (días)</th>
                    <th>Precio ($)</th>
                    <th>Modificar</th>
                    <th>Publicar</th>
                    <th>Eliminar</th>
                </tr>
            </thread>
            <tbody>
                {this.state.data.map((elemento)=>(
                    <tr>
                        <td>{elemento.id}</td>
                        <td>{elemento.curso}</td>
                        <td>{elemento.duracion}</td>
                        <td>{elemento.frecuencia}</td>
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