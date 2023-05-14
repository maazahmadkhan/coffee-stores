import { createContext, Dispatch, PropsWithChildren, useReducer } from "react";
import { AnyAction } from ".";
import { CoffeeStore } from "../pages";

export const ActionTypes = {
  SET_LAT_LONG: "SET_LAT_LONG",
  SET_COFFEE_STORE: "SET_COFFEE_STORE",
};

export type AppState = {
  latLong: string;
  coffeeStores: CoffeeStore[];
};

const storeReducer = (
  state: AppState = initialState,
  action: AnyAction
): AppState => {
  switch (action.type) {
    case ActionTypes.SET_COFFEE_STORE: {
      return {
        ...state,
        coffeeStores: action.payload.coffeeStores,
      };
    }
    case ActionTypes.SET_LAT_LONG: {
      return {
        ...state,
        latLong: action.payload.latLong,
      };
    }
    default:
      throw new Error(`Unhandled action type : ${action.type}`);
  }
};

const dispatch: Dispatch<AnyAction> = () => {};

const initialState: AppState = {
  latLong: "",
  coffeeStores: [],
};

export const StoreContext = createContext({
  state: initialState,
  dispatch,
});

export const StoreProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
