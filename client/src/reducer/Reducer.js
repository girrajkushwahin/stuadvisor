export const initialState = null;

export const reducer = (state, action) => {
    if (action.type === 'SWITCH') {
        return action.payload;
    }

    return state;
}