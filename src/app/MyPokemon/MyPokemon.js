import React, {useContext} from "react"
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import {MyPokemonContext} from "../../context/Detail/MyPokemonContext";
import {useStyles} from "../AppCss";
import {imgUrl} from "../AppConst";

export function MyPokemon(props) {
    const classes = useStyles();
    const {index, style} = props;
    const {detail, setDetail} = useContext(MyPokemonContext);

    const handleClick = () => {
        const data = [...props.data];
        data.splice(index, 1);
        setDetail({...detail, myPokemon: data})
    };

    return (
        <ListItem button style={style} key={index} onClick={handleClick}>
            <ListItemAvatar>
                <Avatar>
                    <img src={`${imgUrl}${props.data[index].id}.png`} alt={"logo"}/>
                </Avatar>
            </ListItemAvatar>
            <ListItemText className={classes.capitalize} primary={`${props.data[index]?.nick || 'loading'}`}/>
            <CloseIcon/>
        </ListItem>
    )
}