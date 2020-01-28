import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import React, {useContext} from "react";
import {drawerWidth} from "../AppCss";
import {MyPokemonContext} from "../../context/Detail/MyPokemonContext";
import _ from 'lodash'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    capitalize: {
        textTransform: 'capitalize'
    },
}));

export function Header(props) {
    const classes = useStyles();
    const {detail} = useContext(MyPokemonContext);

    return (
        <AppBar position="fixed" color={"secondary"} className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={props.handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap className={classes.capitalize}>
                    {_.isEmpty(detail.selected) ? props.menuName : detail.selected.name}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}