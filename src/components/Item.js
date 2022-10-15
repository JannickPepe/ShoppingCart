import './item.css'
import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/cartSlice';

import "react-toastify/dist/ReactToastify.css"; // this makes it so u can add stuff into the ToastContainer</>
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { css } from "glamor";

let toastId = null;

function displayToast() {
  if (!toast.isActive(toastId)) {
    console.log("Displaying Toast");
    toastId = toast("Your purchased has been succesfully", {
      className: css({
        background: "#00FF00 !important",
        color: "white !important",
        fontWeight: "bold"
      }),
      closeOnClick: false,
      toastId: "my_toast",
     
      closeButton: false,
      position: toast.POSITION.BOTTOM_CENTER
    });
  } else {
    console.log("Toast already active");
  }
}

function Item({id, title, image, price}) {

  const dispatch = useDispatch()

  return (
    <div className="item">
      <div className="item__info">
        <p className="item__title">{title}</p>
        <p className="item__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img
        src={image}
        alt="item"
      />
      <button 
        onClick={() => {
          displayToast();
          dispatch(addToCart({
            id, title, image, price
          }));
         } }>Add to Cart
      </button>
      <ToastContainer
      autoClose={700}
       />
    </div>
  )
}

export default Item