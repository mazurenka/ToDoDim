type InitialStateType = {
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null
}

const initialState: InitialStateType = {
    status: 'idle',
    error: 'some errorrrr'
}

export const appReducer = (state: InitialStateType, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS' :
            return {...state, status: action.status}
        case 'APP/SET-ERROR' :
            return {...state, error: action.error}
        default:
            return {...state}
    }
}

type ActionsType = any








