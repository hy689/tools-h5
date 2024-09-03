import { createContext, useReducer, useContext } from "react";

interface State {
    user: any;
    token: string | null;
    loading: boolean;
}

const initialState: State = {
    user: {},
    token: null,
    loading: false,
}

const reducer = (state: State, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
}

const StoreContext = createContext<State | null>(null);
const StoreDispatchContext = createContext<React.Dispatch<any> | null>(null);

export const useStore = () => {
    return useContext(StoreContext)
}

export const useStoreDispatch = () => {
    return useContext(StoreDispatchContext)
}

export default function StoreProvider({ children }: any) {
    const [store, dispatch] = useReducer(reducer, initialState);


    return (
        <StoreContext.Provider value={store}>
            <StoreDispatchContext.Provider value={dispatch}>
                {children}
            </StoreDispatchContext.Provider>
        </StoreContext.Provider>
    )
}
