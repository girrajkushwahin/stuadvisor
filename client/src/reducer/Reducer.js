const token = localStorage.getItem('jwtoken');

export const initialState = token;

export const reducer = (state, action) => {
    if (action.type === 'SWITCH') {
        return action.payload;
    }

    return state;
}