import { createStore } from "redux";
import portfolioReducer from "./reducers/portfolio";

export default createStore(portfolioReducer);