import './total.css'
import {useSelector} from 'react-redux'

function CheckoutTotal() {

  const cart = useSelector((state) => state.cart)

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return {totalPrice, totalQuantity}
  }

  return (
    <div className="">
      <h4>What you have bought</h4>
      <div>
        <p className="">
          total ({getTotal().totalQuantity} items) 
          : <strong>${getTotal().totalPrice}</strong>
        </p>
      </div>
    </div>
  )
}

export default CheckoutTotal;