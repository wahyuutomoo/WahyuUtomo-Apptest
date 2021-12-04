const initialState = {
    list_data: [],
}

const ContactReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LIST_CONTACT':
            return {
                ...state,
                list_data: action.data,
            };

        default:
            return state;
    }
};

export default ContactReducer;
