import { combineReducers, createStore } from "redux";
import {BaiTapBookingTicketReducer} from './BaiTapBookingTicketReducer'

const rootReducer = combineReducers({
    BaiTapBookingTicketReducer:BaiTapBookingTicketReducer
})

export const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());