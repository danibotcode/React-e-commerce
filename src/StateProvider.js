// setup data layer
// track record of basket, to use at checkout page; track user for use at homepage
import React, {createContext, useContext, useReducer} from "react";

// Data layer
export const StateContext = createContext();

// Build provider
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    </StateContext.Provider>
)