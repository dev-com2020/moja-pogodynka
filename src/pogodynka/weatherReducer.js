
const initialState = {
    weather: null,
    isFetching: false,
    errorMessage: undefined
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_WEATHER_START':
            return {
                ...state, isFetching: true
            };
        case 'FETCH_WEATHER_SUCCESS':
            return {
                ...state, isFetching: false,
                weather: action.payload
            };
        case 'FETCH_WEATHER_FAILURE':
            return {
                ...state, isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;

    }
}