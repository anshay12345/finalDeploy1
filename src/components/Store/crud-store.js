import { createStore } from "redux";

const initialState = {
  hello: false,
  hmm: false,
  pos: 0,
  pos1: 0
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
  if(action.type=="pos"){
    return{
      ...state,
      pos: action.value
    }
  }
  if(action.type=="pos1"){
    return{
      ...state,
      pos1: action.value
    }
  }
  return state;
};

const curdStore = createStore(crudReducer);

export default curdStore;