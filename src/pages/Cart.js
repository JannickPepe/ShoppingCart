import './cart.css'
import Total from '../components/Total'
import CartItem from '../components/CartItem'
import { useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'


function Cart() {

  // Have the cart state onto this page as well otherwise good luck with the items 
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)

  return (
    <div className="cart">
      <div className="cart__left">
        <div className='gobackbtn' onClick={() => navigate('/')}>
          <button><h4>Go back</h4></button>
        </div>
        <div>
          {/*Here we can choose how much detail we want from our cartItem*/}
          <h3>Shopping Cart</h3>
          {cart?.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price} 
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>

      <div className="cart__right">
        <Total/>
        <div className='checkoutbtn' onClick={() => navigate('/checkout')}>
            <button><h4>checkout</h4></button>
        </div>
      </div>
      
    </div>
  )
}

export default Cart