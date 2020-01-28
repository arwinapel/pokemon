import React, {useContext} from "react"
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {MyPokemonContext} from "../../context/Detail/MyPokemonContext";
import {useStyles} from "../AppCss";
import {imgUrl} from "../AppConst";

export function Pokemon(props) {
    const classes = useStyles();
    const {index, style} = props;
    const {detail, setDetail} = useContext(MyPokemonContext);

    const handleClick = () => {
        setDetail({...detail, selected: props.data[index]})
    };
    let split = props?.data[index]?.url?.split('/');
    const img = split !== undefined ? `${imgUrl}${split[6]}.png` : props.data[index].sprites.front_default;
    return (
        <ListItem button style={style} key={index} onClick={handleClick}>
            <ListItemAvatar>
                <Avatar>
                    <img src={img} alt={`${props?.data[index]?.name || 'loading'}`}/>
                </Avatar>
            </ListItemAvatar>
            <ListItemText className={classes.capitalize} primary={`${props?.data[index]?.name || 'loading'}`}/>
            <ChevronRightIcon/>
        </ListItem>
    )
}