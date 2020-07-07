import { actions } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.setFavorite:
      return {
        ...state,
        mylist: state.mylist.filter((item) => item.id === action.payload.id).length === 0 ?
          [...state.mylist, action.payload] :
          [...state.mylist],
      };

    case actions.deleteFavorite:
      return {
        ...state,
        mylist: state.mylist.filter((items) => items.id !== action.payload),
      };

    case actions.loginRequest:
      return {
        ...state,
        user: action.payload,
      };

    case actions.logoutRequest:
      return {
        ...state,
        user: {}
      };
      

    default:
      return state;
  }
};

export default reducer;