import {combineReducers, createStore} from 'redux';
import historicPlaces from "../constants/historic-places.json";
import {shuffleArray} from "../utils/helpers";

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

export function setHistoricPlacesList(historicPlacesFromParam = []) {
    let historicPlacesNew = historicPlaces.map(item => ({...item, visited: false}));

    historicPlacesNew = shuffleArray(historicPlacesNew);

    if (historicPlacesFromParam.length) {
        historicPlacesNew = historicPlacesFromParam;
    }

    return {
        type: "ADD_LIST",
        payload: {
            historicPlaces: historicPlacesNew,
        },
    };
}

const store = createStore(reducers);

export default store;