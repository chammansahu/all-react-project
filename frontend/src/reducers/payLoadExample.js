const init = { gameName: "football" ,playerName:"leonardo"};
function gamesReducer(state = init, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        gameName: action.payload,
      };

    default:
      return state;
  }
}
export default gamesReducer;
