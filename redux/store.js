import {combineReducers, createStore} from 'redux';
import historicPlaces from "../constants/historic-places.json";

const initialState = {
    historicPlaces: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_LIST':
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

const reducers = combineReducers({
    historicPlaces: rootReducer,
});

export function setHistoricPlacesList() {
    return {
        type: "ADD_LIST",
        payload: {
            historicPlaces,
        },
    };
}

// Create the Redux store
const store = createStore(reducers);

export default store;