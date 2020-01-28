import React, {useContext, useEffect, useState} from "react";
import AxiosService from "../../service/AxiosService";
import {Button, Grid, IconButton, ListItemText, TextField, Typography} from "@material-ui/core"
import {useStyles} from "../AppCss";
import {Moves} from "./Moves";
import {MyPokemonContext} from "../../context/Detail/MyPokemonContext";

export const DetailPokemon = React.memo((props) => {
    const [detailState, setDetailState] = useState({});
    const classes = useStyles();
    const {detail, setDetail} = useContext(MyPokemonContext);
    const [catchIt, setCatchIt] = useState(false);
    const [nickname, setNickname] = useState('');
    const [gotIt, setGotIt] = useState(null);

    useEffect(() => {
        getDetailPokemon()
    }, []);

    const getDetailPokemon = async () => {
        try {
            const res = await AxiosService.get(props.url);
            setDetailState(res);
        } catch (e) {
            console.log(e)
        }
    };

    const handleCatchIt = () => {
        if(!catchIt) {
            setGotIt(Math.round(Math.random()))
        } else {
            setGotIt(null)
        }
        setCatchIt(!catchIt)
    };

    const handleChangeNick = (e) => {
        setNickname(e.target.value)
    };

    const handleSubmit = () => {
        const newPokemon = {
            id: detailState.id,
            nick: nickname,
        };
        setDetail({selected: {}, myPokemon: [...detail.myPokemon, newPokemon]})
    };

    return (
        <Grid container>
            <Grid item xs={12} className={classes.center_grid}>
                <Grid container>
                    <Grid item xs={6}>
                        <img src={detailState?.sprites?.front_default} alt={"sprites"}/>
                    </Grid>
                    <Grid item xs={6}>
                        {gotIt !== 1 && <IconButton onClick={handleCatchIt}>
                            <img src={process.env.PUBLIC_URL + '/assets/img/pokeball.png'} width={25} alt={"pokeball"}/>
                            <Typography>{!catchIt ? ' Catch' : ' Retry'}</Typography>
                        </IconButton>}
                        {
                            gotIt === 1 &&
                            (
                                <form onSubmit={handleSubmit}>
                                    <Typography>yay you got it</Typography>
                                    <TextField label="Nickname" variant="outlined" value={nickname}
                                               onChange={handleChangeNick}/>
                                    <Button type={"submit"} variant="contained" color="primary">
                                        Store
                                    </Button>
                                </form>
                            )
                        }
                        {
                            gotIt === 0 &&
                            (
                                <Typography>mmmmmm, you miss it</Typography>
                            )
                        }
                    </Grid>
                    <Grid container direction={"row"}>
                        <Grid item xs={4} className={classes.center_grid}>
                            <ListItemText primary={"Types"}/>
                        </Grid>
                        {detailState?.types?.map((type, idx) => {
                            return (
                                <Grid item xs={4} key={idx}>
                                    <ListItemText className={[classes.roundedBorder, classes.whiteFontColor, classes[type.type.name]].join(" ")} primary={type.type.name}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
            {detailState?.abilities?.map((ability, idx) => {
                return (
                    <Grid item className={[classes.center_grid, classes.roundedBorder].join(" ")} xs={6} key={idx}>
                        <ListItemText primary={ability?.ability?.name}
                                      secondary={ability?.is_hidden ? "Hidden Ability" : null}/>
                    </Grid>
                )
            })}
            <Moves data={detailState?.moves}/>
        </Grid>
    )
});