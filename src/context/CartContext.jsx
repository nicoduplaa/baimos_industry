import {createContext, useState} from 'react'

export const CartContext = createContext([]);

export const CartContextProvider = ({children}) => {

    const [cartList , setCartList] = useState([]);

    const addToCart = (newProduct) => {

        const repeat = cartList.some((repeatProd) => repeatProd.id === newProduct.id)

        if (repeat) {
            cartList.map((prod) => {
                if (prod.id === newProduct.id) {
                    prod.cantidad = prod.cantidad + newProduct.cantidad
                    setCartList([ ...cartList])
                }
            })
        } else {

            setCartList([
                ... cartList, 
                newProduct
            ])

        }
    }

    const removeItem = (id) => {
        const itemFound = cartList.find((ele) => ele.id === id);

        setCartList(cartList.filter((cartId) => {
            return cartId !== itemFound;
        }))
    }

    const eraseCart = () => {
        setCartList([])
    }

    
    const total = () => {
        let totalCompra = cartList.reduce((acc, el) => acc + parseFloat(el.price.replace('U$D','')) * el.cantidad, 0)
        
        return totalCompra
    }
    
    const masCant = (prodId, base = 1) => {
        const prodModif = cartList.find((el) => el.id === prodId)

        prodModif.cantidad += base

        setCartList([...cartList])
    }


    const menosCant = (prodId, base = 1) => {
        const prodModif = cartList.find((el) => el.id === prodId)


        if (prodModif.cantidad <= 1) {
            return;
        }
        prodModif.cantidad -= base



        setCartList([...cartList])
    }




    const totalCant = () => {
        let totalCant = cartList.reduce((acc,el)=> acc + el.cantidad, 0)
        return totalCant
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            eraseCart,
            removeItem,
            total,
            totalCant,
            menosCant,
            masCant

        }}>

            {children}
        </CartContext.Provider>
    )

}