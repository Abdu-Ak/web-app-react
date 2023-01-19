import { createStore } from "redux";

const initialState = {
    token: "",
    id: "",
    data: "",
  }

  const tokenReducer = (prevState = initialState,action)=>{
    switch(action.type){
        case "StoreToken":
      return {
        ...prevState,
        token: action.token,
        accountType:action.accountType,
        id: action.id,
      };
        
      case "RemoveToken":
        return {
          ...prevState,
          token: "",
          accountType: "",
          id: "",
        };
        case "editData":
      return {
        ...prevState,
        data: action.data,
      };
    
        default:
            break;
    }  
  }

  const Store = createStore(tokenReducer);

export default Store;