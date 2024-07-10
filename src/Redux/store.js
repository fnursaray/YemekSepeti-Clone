import { combineReducers, createStore, applyMiddleware } from "redux";
import restaurantReducer from "./reducers/restaurantReducer";
import productReducer from "./reducers/productReducer";
import { thunk } from "redux-thunk";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
  product: productReducer,
  restaurant: restaurantReducer,
  cart: cartReducer,
});

// applyMiddleware herhangi bir arayazılımı redux'a dahil etmeye yarar. Biz burda thunk arayazılımını dahil etmek için kullandık. Artık thunk'ın asenkron aksiyonlarını yazabiliriz.
export default createStore(rootReducer, applyMiddleware(thunk));
