import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import React, {useContext} from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Badge from "@material-ui/core/Badge"
import {useStyles} from "../AppCss";
import {Menu} from "../AppConst";
import {MyPokemonContext} from "../../context/Detail/MyPokemonContext";

export function SideBar(props) {
    const {container} = props;
    const classes = useStyles();
    const {detail, setDetail} = useContext(MyPokemonContext);

    const handleClick = (text) => () => {
        if (props.mobileOpen) {
            props.handleDrawerToggle()
        }
        props.setMenu(text);
        setDetail({...detail, selected: {}})
    };

    const renderMenu = (text, idx) => {
        if (text === Menu[1]) {
            return (
                <Badge key={idx} invisible={detail.myPokemon.length === 0} badgeContent={detail.myPokemon.length}
                       color="primary">
                    <ListItem button onClick={handleClick(text)}>
                        <ListItemText primary={text}/>
                    </ListItem>
                </Badge>
            )
        } else {
            return (
                <ListItem button key={idx} onClick={handleClick(text)}>
                    <ListItemText primary={text}/>
                </ListItem>
            )
        }
    };

    const drawer = (
        <div>
            <div className={[classes.toolbar, classes.center_grid].join(" ")}>
                <img src={process.env.PUBLIC_URL + '/assets/img/logo.png'} width={120} alt={"logo"} />
            </div>
            <Divider/>
            <List>
                {Menu.map((text, idx) => {
                    return (renderMenu(text, idx))
                })}
            </List>
        </div>
    );

    return (
        <nav className={classes.drawer}>
            <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={'left'}
                    open={props.mobileOpen}
                    onClose={props.handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
    )
}