import React, {useContext} from 'react'
import {FixedSizeList as List} from "react-window";
import {MyPokemonContext} from "../../context/Detail/MyPokemonContext";
import {MyPokemon} from "./MyPokemon";

export function MyPokemonList() {
    const {detail} = useContext(MyPokemonContext);

    return (
        <List
            itemData={detail.myPokemon}
            height={700}
            width={"100%"}
            itemSize={50}
            itemCount={detail.myPokemon.length}
        >
            {MyPokemon}
        </List>
    )
}