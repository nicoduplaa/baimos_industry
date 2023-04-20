
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { mFetch } from "../../utils/mFetch"
import ItemDetail from "../ItemDetail/ItemDetail"
import Container from "react-bootstrap/esm/Container"


const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([])

    const { pid } = useParams()
    console.log(pid)

    useEffect(()=>{
   
        mFetch()
        .then( resultado=> {
          setProductos(resultado.filter(productos => productos.id === pid))
        })
        
    },[])

    
  return (
    <Container fluid> 
        {productos.map(prod => <ItemDetail key = {prod.id}{...prod} />)}
    </Container>
    
      
    
  )
}

export default ItemDetailContainer