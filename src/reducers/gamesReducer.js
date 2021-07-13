const initState = {
  popular: [],
  newGames: [],
  upcomingGames: [],
  searched: [],
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcomingGames: action.payload.upcomingGames,
        newGames: action.payload.newGames,
      };
    default:
      return { ...state };
  }
};

export default gameReducer;
