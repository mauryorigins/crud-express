// const suma1 = function (a: number, b: number) {
//  return a + b;
// };

const suma2 = (a: number, b: number) => (a + b);

type CBSuma = (x: number, y: number) => number;

function duplicarSuma(addMethod: CBSuma, a: number, b: number) {
  return addMethod(a, b) * 2;
}

export default duplicarSuma(suma2, 2, 4);
