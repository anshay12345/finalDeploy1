import { createStore } from "redux";

const initialState = {
  hello: false,
  hmm: false
 
};
const crudReducer = (state = initialState, action) => {
  if (action.type == "hello") {
    return {
      ...state,
      hello: action.value,
    };
  }
  if(action.type=="hmm"){
    return{
        ...state,
        hmm: action.value
    }
  }
  return state;
};

const curdStore = createStore(crudReducer);

export default curdStore;