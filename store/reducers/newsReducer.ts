const initialState = {

}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_NEWS':
            return {...state, loading: false}
        default:
            return state
    }
}
