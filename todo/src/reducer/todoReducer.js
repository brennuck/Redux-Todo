import { ADD_TODO } from '../actions';

const initialState = {
    tasks: [
        {
            name: 'redux'
        },
        {
            name: 'mvp'
        }
    ]
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                tasks: [...state.tasks, {
                    name: action.payload
            }]
        }
        default:
            return state;
    }
}

export default reducer;