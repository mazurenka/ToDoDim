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
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'


export type InitialStateType = {
    status: RequestStatusType,
    error: string | null
}

export const setErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)

type ActionsType =
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setStatusAC>








