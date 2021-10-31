const type1 = true;
const type2 = 'Hello world';
const type3 = 20;
const esp1 = {
  nombre: 'Mau',
  edad: 21,
  puto: true,
  ropa: {
    zapatos: 'Negros',
    pantalon: 'Mezclilla'
  },
  type3
};
const esp2 = ['Mau', 21, true, { zapatos: 'Negros', pantalon: 'Mezclilla' }, type3];

export default function inmutability() {
  const esp1New = { ...esp1, puto: false, nuevoValor: 'gay' };
  const esp2New = [...esp2, type2];

  console.log('type1: ', type1);
  console.log('type2: ', type2);
  console.log('type3: ', type3);

  console.log('esp1New: ', esp1New);
  console.log('esp1: ', esp1);
  console.log('esp2New: ', esp2New);
  console.log('esp2: ', esp2);
}
