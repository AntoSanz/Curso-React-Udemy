// Si no hay dependencias se recomienda que las funciones, constantes, variables estén fuera del componente
const newString = "Hello World!";
const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newObject = {
  nombre: "Antonio",
  apellido: "Sanz",
};
const getString = () => {
  return "Hello function!";
};

export const FirstApp = () => {
  return (
    <>
      {/* <></> es lo mismo que <Fragment></Fragment> y no es necesario importar el Fragment*/}
      <h2>{newString}</h2>
      <p>{newArray}</p>
      {/* React no puede procesar objetos de manera que para mostrar el objeto tenemos que usar una expresion de JS: JSON.stringify(Objeto)
            Para mostar las porpiedades del objeto podemos llamar Objeto.propiedad */}
      <code>{JSON.stringify(newObject)}</code>
      <p>{getString()}</p>
    </>
  );
};
