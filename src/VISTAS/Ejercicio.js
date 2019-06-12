import React, { Component } from 'react';

const dataGrupouser = [
  {
    conglomerado: 'conglomerado1',
    empresa: 'empresa1',
    sede: 'sede1',
    dependencia: 'dependencia1',
    id: 1,
    nombre: 'nombreUsuario1'
  },
  {
    conglomerado: 'conglomerado2',
    empresa: 'empresa2',
    sede: 'sede2',
    dependencia: 'dependencia2',
    id: 2,
    nombre: 'nombreUsuario2'
  },
  {
    conglomerado: 'conglomerado3',
    empresa: 'empresa3',
    sede: 'sede3',
    dependencia: 'dependencia3',
    id: 3,
    nombre: 'nombreUsuario3'
  },
  {
    conglomerado: 'conglomerado4',
    empresa: 'empresa4',
    sede: 'sede4',
    dependencia: 'dependencia4',
    id: 4,
    nombre: 'nombreUsuario4'
  },
  {
    conglomerado: 'conglomerado5',
    empresa: 'empresa5',
    sede: 'sede5',
    dependencia: 'dependencia5',
    id: 5,
    nombre: 'nombreUsuario5'
  }
];
class Ejercicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: dataGrupouser,
      data: []
    };
  }

  render() {
    const aux = this.state.list.map((item, id) => {
      return (
        <option
          key={id}
          newArray={() => {
            this.newarray();
          }}
        >
          {item.nombre}
        </option>
      );
    });
    return (
      <form>
        <div className="col-md-6">
          <label>Usuarios disponibles</label>
          <select className="form-control form-control-sm" multiple>
            {aux}
          </select>
        </div>
      </form>
    );
  }
}
export default Ejercicio;
