
import { useEffect, useState } from "react"
import './ItemListContainer.css'
import { mFetch } from "../../utils/mFetch"

import Spinner from 'react-bootstrap/Spinner';


import ItemList from "../ItemList/ItemList"

import { useParams } from "react-router-dom";
  



const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const { cid } = useParams()

  useEffect(()=>{
    if (!cid) {
      mFetch()
      .then( resultado=> {
        setProductos(resultado)
      })
      .catch( error => console.log(error))
      .finally(()=> setLoading(false))
      
    } else {

      mFetch()
      .then( resultado=> {
        setProductos(resultado.filter(productos => productos.category === cid))
      })
      .catch( error => console.log(error))
      .finally(()=> setLoading(false))

    }
  }, [cid])


  // // const handleProductFiltered = ({filterState, handleFilterChange}) => {
  // //   return (    
  // //   <div>
  // //     <h2>Buscar</h2>
  // //     {filterState}
  // //     <input type="text" value={filterState} onChange={handleFilterChange} />
  // //   </div>
  // //   )

  // }

  console.log(cid);

  return (

    <div className="item-cont">

      { loading ? 

          
          <div className="spinnerCont">
          <Spinner animation="border" role="status">
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