import './estilo/Boton.css'

const Boton = (props) => {

const esOperador = valor => {

    return isNaN(valor) && (valor != '.') && (valor != '/')
}

  return (
    <>
        <div
        className={`btn-conten ${esOperador(props.children) ? 'operador' : null}`.trimEnd()}
        onClick={() => props.manejarClick(props.children)}
        >{props.children}</div>
    </>
  )
}

export default Boton