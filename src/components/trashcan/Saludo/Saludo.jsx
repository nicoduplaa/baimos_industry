import './Saludo.css'


export const Saludo = (prop) => {
  return (
    <div className="saludo">
        <h3><span>{prop.baimoTitulo}</span></h3>
    </div>
  )
}
