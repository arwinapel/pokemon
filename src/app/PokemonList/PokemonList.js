import React, {useEffect, useState} from 'react'
import AxiosService from "../../service/AxiosService";
import {FixedSizeList as List} from 'react-window';
import {Pokemon} from "./Pokemon";
import {LIMIT} from "../AppConst";
import InfiniteLoader from "react-window-infinite-loader";
import SearchIcon from "@material-ui/icons/Search";
import {InputBase} from "@material-ui/core";
import {useStyles} from "../AppCss";

const context = 'pokemon';

export function PokemonList(props) {
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const [pokemonState, setPokemonState] = useState({
        count: 0,
        next: '',
        results: []
    });

    useEffect(() => {
        getListPokemon()
    }, []);

    const getListPokemon = async () => {
        try {
            const url = search ? `${context}/${search}` : pokemonState.next || `${context}?limit=${LIMIT}`;
            const res = await AxiosService.get(url);
            let dataPokemon;
            if (search !== '') {
                dataPokemon = new Array(res);
                setPokemonState({...pokemonState, count: 1, next: '', results: dataPokemon})
            } else if (pokemonState.next === '') {
                dataPokemon = [...res.results];
                setPokemonState({...pokemonState, count: res.count, next: res.next, results: dataPokemon})
            } else {
                dataPokemon = [...pokemonState.results, ...res.results];
                setPokemonState({...pokemonState, count: res.count, next: res.next, results: dataPokemon})
            }
        } catch (e) {
            props.setError(e?.message || e)
        }
    };

    const isItemLoaded = index => !!pokemonState.results[index];

    const handleSearch = (e) => {
        setSearch(e.target.value)
    };

    const handleSubmitSearch = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            getListPokemon(search)
        }
    };

    return (
        <div>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon/>
                </div>
                {/*<form onSubmit={handleSubmitSearch}>*/}
                <InputBase
                    placeholder="Ex: pikachu"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{
                        'aria-label': 'search',
                        'defaultValue': search,
                        'onChange': handleSearch,
                        'onKeyPress': handleSubmitSearch
                    }}
                />
                {/*</form>*/}
            </div>

            <InfiniteLoader
                isItemLoaded={isItemLoaded}
                itemCount={pokemonState.count}
                loadMoreItems={getListPokemon}
            >
                {({onItemsRendered, ref}) => (
                    <List
                        itemData={pokemonState.results}
                        height={700}
                        width={"100%"}
                        itemSize={50}
                        itemCount={pokemonState.count}
                        onItemsRendered={onItemsRendered}
                        ref={ref}
                    >
                        {Pokemon}
                    </List>

                )}
            </InfiniteLoader>
        </div>
    )
}