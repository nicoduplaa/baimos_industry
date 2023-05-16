
import Item from '../Item/Item'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './ItemList.css'
import { memo } from 'react';





const ItemList = memo (
  ({productos}) => {
  
  
    return (
      <div className='itemList-cont'>
          <Container fluid>
  
              
              <Row sm = {1} md = {2}  xl = {3}>
                  {
                  productos.map(prod => <Item key = {prod.id}{...prod} />)
                  }   
              </Row>
  
          </Container>
  
      </div>
    )

  }
) 

export default ItemList