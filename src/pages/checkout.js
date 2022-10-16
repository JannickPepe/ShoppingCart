import './cart.css'
import '../components/checkoutitem.css'
import CheckoutTotal from '../components/CheckoutTotal'
import { useSelector} from 'react-redux'
import CheckoutItem from '../components/CheckoutItem';
import {useNavigate} from 'react-router-dom'
import React,{useState,useEffect} from 'react';


function Checkout() {


  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)

  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('../../data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  
  return (
    <div className="checkout">
    <div className='checkout__container'>
    <h2>Thank you for your purchase - <span>Jannicks Lemonade Stand</span></h2>
    <CheckoutTotal/>
        <div className='checkout__row'>
        {cart?.map((item) => (
            <CheckoutItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price} 
              image={item.image}
              quantity={item.quantity}
            />
          ))}
        </div>
        <div className='acceptbtn' onClick={() => navigate('/')}>
            <button><h3>Accept and return</h3></button>
        </div>
      <div className='apicontent'>
        {
          data && data.length>0 && data.map((item)=><p>{item.about}</p>)
        }
        {
          data && data.length>0 && data.map((item)=><p>{item.name}</p>)
        }
        {
          data && data.length>0 && data.map((item)=><p>{item.phone}</p>)
        }
        {
          data && data.length>0 && data.map((item)=><p>{item.email}</p>)
        }

      </div>
        
    </div>
        
    </div>
  )
}

export default Checkout;