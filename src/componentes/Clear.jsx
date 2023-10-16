import './estilo/Clear.css'

const Clear = (props) => {
  return (
    <>
        <div className="btn-clear" onClick={() => props.manejarClick()}>{props.children}</div>
    </>
  )
}

export default Clear