import { Link } from 'react-router-dom';
import './DetailCompra.css';

const DetailCompra = () => {
  return (
    <div className='detailCompraCont'>
        <Link to='/cart'>
            <button className='btn btn-danger endbuy'>Finish</button>

        </Link>

        <Link to = '/'>
            <button className='btn btn-danger endbuy'>Keep Buying</button>

        </Link>
    </div>
  )
}

export default DetailCompra