
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import {doc, getDoc, getFirestore} from 'firebase/firestore'
import ItemDetail from "../ItemDetail/ItemDetail"
import Container from "react-bootstrap/esm/Container"
import Spinner from "react-bootstrap/esm/Spinner"


const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { pid } = useParams()
    


    useEffect(() => {
    const dbFirestore = getFirestore()
    const queryDoc = doc(dbFirestore, 'productos', pid)

    getDoc(queryDoc)
        .then(resp => setProductos({id: resp.id, ...resp.data()}))
        .catch( error => console.log(error))
        .finally(()=> setLoading(false))
  }, [])


    
  return (
    
    <>
      {
        loading ? 
        
        <center>
            <div className="spinnerCont">
            <Spinner  variant="light" animation="grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            
            </div>

        </center>
        
        :
        
        <Container fluid> 
        <ItemDetail producto = {productos} /> 
        </Container>
        
      }
    
    </>
    
  )
}

export default ItemDetailContainer