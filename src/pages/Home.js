import './home.css'
import Item from '../components/Item'
import { ShoppingCart } from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';



function Home() {

  // we start with the cart, where we have the cart onto this state page, because its here we have our products
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)

  // empty state first, but everytime we click on item, quanity goes up by 1
  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }

  return (
    <div className="home">
      <div className="home__container">
        <h2>Welcome to: <span>Jannicks Lemonade Stand</span></h2>
        <div className="home__row">
          <Item
            id={4}
            title="Lemonade drink with perpermin"
            price={5}
            image="https://thetravelbite.com/wp-content/uploads/2021/06/Mint-Lemonade-TheTravelBite.com-16-scaled-720x720.jpg"
          />
          
          <Item
            id={2}
            title="Lemonade drink with lime and fruits"
            price={7}
            image="https://recipesfromapantry.com/wp-content/uploads/2021/07/peach-lemonade-recipe-24-of-29.jpg"
          />

          <Item
            id={3}
            title="Classic Lemonade drink"
            price={3}
            image="https://veryvera.wierstewarthosting.com/wp-content/uploads/2019/09/11101810/Webp.net-resizeimage-33.png"
          />

          <Item
            id={5}
            title="Deluxe edition with berrires, lime, fruits and crushed ice - special offer!!"
            price={4}
            image="https://www.taketwotapas.com/wp-content/uploads/2019/05/Sparkling-Mixed-Berry-Lemonade-Cocktail-5.jpg.webp"
          />

          <Item 
            id={1}
            title="Special edition !! Lemonade with chocolate, cream and crushed waffle"
            price={8}
            image="https://fastly.4sqi.net/img/general/600x600/82999431_E2ZtqE8vWawgaBuCwdrH_xh7N-38lrwsSHYY1e7M1C8.png"
            rating={4}
          />
          <Item 
            id={6}
            title="The sundown lemonade drink, special offer !!!"
            price={12}
            image="https://i0.wp.com/thehealthyishspork.com/wp-content/uploads/2020/09/dsc_0999-scaled.jpg?fit=2560%2C1707&ssl=1"
          />
        </div>
      </div>
      {/*Here we have the nagivate for the cart icon and it shows the quatity in a badge icon */}
      <div className='shopping-cart' onClick={() => navigate('/cart')}>
        <ShoppingCart id='cartIcon'/>
        <p>{getTotalQuantity() || 0}</p>
      </div>
    </div>
  )
}

export default Home