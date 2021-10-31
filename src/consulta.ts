/* eslint-disable dot-notation */
const objeto = {
  nombre: 'Mau',
  edad: 21,
  puto: true,
  ropa: {
    zapatos: 'Negros',
    pantalon: 'Mezclilla'
  },
  yugi: ['exodia', 'mago oscuro', 'hyudra']
};

const arreglo = ['Mau', 21, true, { zapatos: 'Negros', pantalon: 'Mezclilla' }];

export default function consulta() {
  console.log('--------------OBJETOS-------------\n');
  console.log('Operador punto: ', objeto.nombre);
  const { nombre } = objeto;
  console.log('Destructuracion: ', nombre);
  console.log('Indireccion por nombre: ', objeto['nombre']);
  console.log('--------------ARREGLOS-------------\n');
  console.log('especificando subIndice', arreglo[0]);
  const indexes = arreglo.map((element, i) => {
    console.log(`elemento: ${element} con index: ${i}`);
    return i;
  });
  console.log('indexes: ', indexes);
}
