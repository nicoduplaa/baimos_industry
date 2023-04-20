import { useState } from "react";

 export const useCounter = (initial = 0, min, max) => {
    const [contador, setContador] = useState(initial);

    let handleSuma = () => {
        if (contador < max) {
            setContador(contador +1)
        }
    }

    let handleResta = () => {
        if (contador > min) {
            setContador(contador -1)
        }
    }

    return {contador, handleResta, handleSuma}
}