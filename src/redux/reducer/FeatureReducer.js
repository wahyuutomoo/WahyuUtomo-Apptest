const initialState = {
    loading_screen: false
}

const FeatureReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING_SCREEN':
            return {
                ...state,
                loading_screen: action.data,
            };

        default:
            return state;
    }
};

export default FeatureReducer;
