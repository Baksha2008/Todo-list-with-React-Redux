const initialState = []

export default function todo(state = initialState, action) {
    if (action.type === 'ADD_TODO') {
        return [
            ...state, action.payload
        ]
    }
    if (action.type === 'DELETE_TODO') {
        state.splice(action.payload, 1)
        return [
            ...state
        ]

    }
    return state
}