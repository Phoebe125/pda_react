const initialState = {
  counter: 0,
  color: "black",
};

// Action Type
export const INCREASE_COUNTER = "counter/INCREASE_COUNTER";
export const DECREASE_COUNTER = "counter/DECREASE_COUNTER";
export const SET_COLOR = "counter/SET_COLOR";

// Action Creator
export const increaseCounter = () => ({
  type: INCREASE_COUNTER,
  payload: {},
});

export const decreaseCounter = () => ({
  type: DECREASE_COUNTER,
  payload: {},
});

export const setColor = (color) => ({
  type: SET_COLOR,
  payload: {
    color,
  },
});

function counterReducer(state = initialState, action) {
  switch (action.type) { // action.type: 어떤 주문을 했는지 확인하는 것
    case INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case SET_COLOR:
      return {
        ...state,
        color: action.payload.color,
      };
    default:
      return state;
  }
}

export default counterReducer;
