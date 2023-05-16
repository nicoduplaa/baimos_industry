
import { useEffect, useState } from "react"
import './ItemListContainer.css'


import Spinner from 'react-bootstrap/Spinner';

import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

import ItemList from "../ItemList/ItemList"

import { useParams } from "react-router-dom";
  



const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const { cid } = useParams()

  useEffect(()=>{
    if (!cid) {
      
    const dbFirestore = getFirestore()
    const queryCollection = collection(dbFirestore, 'productos')

    getDocs(queryCollection)
        .then(res => setProductos( res.docs.map(producto =>({ id: producto.id, ...producto.data() }) ) ))
        .catch( error => console.log(error))
        .finally(()=> setLoading(false))

    } else {

      const dbFirestore = getFirestore()
      const queryCollection = collection(dbFirestore, 'productos')
  
      const queryCollectionFiltered = query(queryCollection, where('category', '==' , cid))
  
      getDocs(queryCollectionFiltered)
          .then(res => setProductos( res.docs.map(producto =>({ id: producto.id, ...producto.data() }) ) ))
          .catch( error => console.log(error))
          .finally(()=> setLoading(false))

    }
  }, [cid])





  return (

    <div className="item-cont">

      { loading ? 

          
          <div className="spinnerCont">
          <Spinner  variant="light" animation="grow" role="status">
              <span className="visually-hidden">Loading...</span>
          </Spinner>

          </div>

        :

        
        <ItemList productos={productos}/>
    

        
          
      }

      
  </div>


  )
}

export default ItemListContainer