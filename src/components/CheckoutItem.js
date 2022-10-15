import './cartItem.css'


function CheckoutItem({id, title, price, image, quantity}) {


  return (
    <div className="cartItem">
      <div className="cartItem__info">
      <h3 className="cartItem__title">{title}</h3>
      <img className="cartItem__image" src={image} alt='item'/>
      <h4 className='Amount'>
      You have now bought this with the amount of: {quantity}
      </h4>
        <p className="checkout__price">
            with the price of the each: <span>{price} dollar</span> 
        </p>
       
      </div>
    </div>
  )
}

export default CheckoutItem;