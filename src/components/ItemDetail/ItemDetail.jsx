

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './ItemDetailDivine.css';
import './ItemDetailEmote.css';
import './ItemDetailKitten.css';
import './ItemDetailPirate.css';

const ItemDetail = ({id, category, name, price, img}) => {


    
  return (
        

        <Container fluid>
            
            <div className={`detail-${category}`}>
                <img src={img} alt="" />
                <div className='detail'>
                    <h3>{name}</h3>
                    <Link to = {`/categoria/${category}`}><h4>{category} series</h4></Link>                   
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                    <Button className='precio-det' variant="danger">
                        <h5>{price}</h5>
                    </Button>{' '}
                </div>
                
            </div>
        </Container>

  )
}

export default ItemDetail