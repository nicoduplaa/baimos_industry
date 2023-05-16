

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Counter from '../Counter/Counter';
import { useContext, useState } from 'react';

import './ItemDetailDivine.css';
import './ItemDetailEmote.css';
import './ItemDetailKitten.css';
import './ItemDetailPirate.css';
import './ItemDetail.css';
import DetailCompra from '../DetailCompra/DetailCompra';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({producto}) => {

    const [isCant, setIsCant] = useState(false)

    const {addToCart} = useContext(CartContext)

    const onAdd = (cantidad) => {
        addToCart( {...producto , cantidad})
        setIsCant(true)
    }

   
    
  return (
        

        <Container fluid>
            
            <div className={`detail-${producto.category}`}>
                <img src={producto.img} alt="" />
                <div className='detail'>
                    <h3>{producto.name}</h3>
                    <Link to = {`/categoria/${producto.category}`}><h4>{producto.category} series</h4></Link>                   
                    <p>
                        {producto.desc} 
                    </p>
                    <div className='botones-detalle'>
                        <Button className='precio-det' variant="danger">
                            <h5>{producto.price}</h5>
                        </Button>{' '}

                        {
                            !isCant ?


                                <Counter onAdd={onAdd}/>
                            
                            :

                                <DetailCompra />

                            
                        }


                    </div>
                </div>
                
            </div>
        </Container>

  )
}

export default ItemDetail