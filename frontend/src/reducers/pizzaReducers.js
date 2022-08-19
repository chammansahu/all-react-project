 const getAllPizzasReducer = (state = {pizzas:[],loading:false} , action) => {
  switch (action.type) {
    case "GET_PIZZAS_REQUEST":
      return {
        pizzas: [],
        loading:true,
      };
    case "GET_PIZZAS_SUCCESS":
      return {
        loading:false,
        pizzas:action.payload
      };
    case "GET_PIZZAS_FAILED":
      return {
        error:action.payload
      };

    default:return state;
  }
};
export default getAllPizzasReducer