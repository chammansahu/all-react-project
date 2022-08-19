import axios from "axios";
const getAllPizzas = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_PIZZAS_REQUEST" });
    const { data } = await axios.get("/api/pizzas/getallpizzas");
    // console.log(data)
    dispatch({
      type: "GET_PIZZAS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_PIZZAS_FAILED",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export default getAllPizzas;
