 const addToCart = (pizza, quantity,varient) => (dispatch) => {
  var cartItem = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    varient,
    quantity,
    prices: pizza.prices,
    price: pizza.prices[0][varient] * quantity,
    };
    
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
   
};
export default addToCart