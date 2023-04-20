
import './Counter.css'
import { useCounter } from "../../hook/useCounter"





const Counter = ({initial = 1, stock=10, onAdd}) => {
    const {contador, handleResta, handleSuma} = useCounter(initial,1,stock)
  return (
    <div className="counterContainer">
        <button onClick={handleResta} >
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-minus" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="#597e8d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
        </button>
        <div className="numberCont">
            <p>{contador}</p>
        </div>
        <button onClick={handleSuma}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
        </button>

        <button>🛒</button>
    </div>
  )
}

export default Counter