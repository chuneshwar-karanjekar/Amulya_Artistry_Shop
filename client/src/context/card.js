const { createContext, useState, useEffect, useContext } = require("react");

const CartContext = createContext();
const CartProvider = ({children} )=>{
    const [cart, setCard] = useState([]);

    useEffect(() => {
       let existingCartItem =localStorage.getItem('cart')
       if(existingCartItem) setCard(JSON.parse(existingCartItem))
        
    }, []);
    return(
        <CartContext.Provider value={[cart, setCard]}>
            {children}
        </CartContext.Provider>
    );
}

const useCart = () =>useContext(CartContext);
export {useCart, CartProvider}; 