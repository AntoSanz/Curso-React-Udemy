import { Fragment } from 'react'
export const FragmentApp = () => {
  return (
    <Fragment>
      <div>Hola Mundo!</div>
      <p>Soy un subtitulo</p>
    </Fragment>
  )
}

//Si no se quiere importar el fragmento solo hay qu emeter los elementos entre <> </> en vez de importar el Fragment y meterlos entre <Fragment></Fragment>

// export const FragmentApp = () => {
//   return (
//     <> 
//       <div>Div dentro del Fragment</div>
//       <p>Subtitulo</p>
//     </>
//   )
// }