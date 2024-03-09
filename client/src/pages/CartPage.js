import React from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth'
import { useCart } from '../context/card';

const CartPage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCard] = useCart();

  // total calculate
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price
    });
      return total;
    } catch (error) {
      console.log(error);
    }
  }

  // remove cart item
  const removeCart = (pid) =>{
    try {
      let myCart = [...cart]
      let index = myCart.findIndex(item =>item._id === pid)
      myCart.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(myCart))
      setCard(myCart)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Layout>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='text-center bg-light p-2 mb-1'>{`Hello ${auth?.token && auth?.user?.name}`}</h1>

            <h4 className='text-center'>{cart?.length > 1 ? `You have ${cart?.length} items in your cart ${auth?.token ? "" : "please login to checkout."
              }` : "Your Cart is Empty."}</h4>
          </div>
        </div>
        <div className='row '>
          <div className='col-md-8'>
            {cart?.map((p) => (
              <div className='row flex-row m-3 card '>
                <div className='col-md-4' >
                  <img src={`/api/v1/product/product-photo/${p._id}`} className="card-img-top  img-fluid" alt={p.name} 
                   />

                </div>
                <div className='col-md-8 text-center'>
                  <h2 className="card-title">{p.name}</h2>
                  <h5 className="card-text">{p.discreption}</h5>
                  <h3 className="card-text text-primary"> ₹ {p.price} </h3>
                  <button className='btn btn-danger' onClick={()=> removeCart(p._id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className='col-md-4 text-center'>
            <h2>Cart Summary</h2>
            <p>Total | Checkout | Payment</p>
            <hr/>
            <h4>Total : ₹ {totalPrice()}</h4>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CartPage