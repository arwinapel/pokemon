import React, {createContext, useState} from "react";

export const MyPokemonContext = createContext();

export const MyPokemonProvider = props => {
    const [detail, setDetail] = useState({
        selected: {},
        myPokemon: []
    });

    return (
        <MyPokemonContext.Provider value={{detail, setDetail}}>
            {props.children}
        </MyPokemonContext.Provider>
    )
};