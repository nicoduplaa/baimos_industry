import './Item.css'


import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Item = ({id, category, name, price, img}) => {

  return (
    <Col xl>
            <div key={id} className='item-cont'>
              <Link to = {`/detail/${id}`}>
                <Card className={category}>
                   
                    
                      <Card.Img className='img-card' src={img} alt="Card image" />
                      <Card.ImgOverlay className='card-text' >
                        <Card.Title className='card-title'>{name}</Card.Title>
                        <div className='sub-cont'>
                            <Card.Subtitle className="mb-2 series">{category} series</Card.Subtitle>
                        </div>
                        <Button className='precio' variant="danger">{price}</Button>{' '}
                        
                        
                    </Card.ImgOverlay>
              </Card>

              </Link>
            </div>
    </Col>

  )
}

export default Item