import React, {useContext, useState} from "react";
import {useStyles} from "../AppCss";
import {Menu} from "../AppConst";
import {PokemonList} from "../PokemonList/PokemonList";
import {MyPokemonList} from "../MyPokemon/MyPokemonList";
import {Snackbar} from "@material-ui/core";
import {DetailPokemon} from "../DetailPokemon/DetailPokemon";
import {MyPokemonContext} from "../../context/Detail/MyPokemonContext";
import _ from 'lodash'

export function Body(props) {
    const classes = useStyles();
    const {detail} = useContext(MyPokemonContext);
    const [error, setError] = useState(null);

    const handleClose = () => {
        setError(null);
    };

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            {!_.isEmpty(detail.selected) ?
                <DetailPokemon {...detail.selected}/> : props.openedMenu === Menu[0] ? (
                    <PokemonList setError={setError} setMenu={props.setMenu}/>) : (<MyPokemonList/>)}
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={Boolean(error)}
                autoHideDuration={3000}
                onClose={handleClose}
                message={error}
            />
        </main>
    )
}