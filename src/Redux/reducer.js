import { ADD_TODO, GET_TODO } from "./actions.types";

const init = {
  getData: {
    todo: [],
    },

    addData:{
    data:{},
    },
};
export const reducer = (state = init, { type, payload }) => {
   
    switch (type) {
      case GET_TODO: {
        return {
          ...state,
          getData: { ...state.getData, todo: payload },
        };
      }
      case ADD_TODO: {
        return {
          ...state,
            getData: { ...state.getData, todo: [...state.getData.todo, payload]  } ,
          addData: { ...state.addData, todo: payload },
        };
      }

      default:
        return state;
    }
}