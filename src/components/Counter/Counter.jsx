
import './Counter.css'
import { useCounter } from "../../hook/useCounter"





const Counter = ({initial = 1, stock=10, onAdd}) => {
    const {contador, handleResta, handleSuma} = useCounter(initial,1,stock)
  return (
    <div className="counterContainer">
        <button className='btn btn-danger' onClick={handleResta} >
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-minus" width="30" height="30" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#F2EEE9" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
        </button>
        <div className="numberCont">
            <h6>{contador}</h6>
        </div>
        <button className='btn btn-danger' onClick={handleSuma}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="30" height="30" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#F2EEE9" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
        </button>

        <button onClick={() =>{onAdd(contador)}} className='btn btn-danger cart-butt'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="45" height="45" viewBox="0 0 24 24" strokeWidth="2" stroke="#F2EEE9" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                </svg>
        </button>
    </div>
  )
}

export default Counter