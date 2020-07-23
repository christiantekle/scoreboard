const games = (state = [], action) => {
  switch (action.type) {
    case "ADD_GAME":
      return [
        ...state,
        {
          text: action.text,
        },
      ];
    default:
      return state;
  }
};
export default games;
