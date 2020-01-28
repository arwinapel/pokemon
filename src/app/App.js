import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {useStyles} from "./AppCss";
import {SideBar} from "./SideBar/SideBar";
import {Body} from "./Body/Body";
import {Header} from "./Header/Header";
import {Menu} from "./AppConst";
import {MyPokemonProvider} from "../context/Detail/MyPokemonContext";

function App() {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [menu, setMenu] = useState(Menu[0]);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <MyPokemonProvider>
                <Header handleDrawerToggle={handleDrawerToggle} menuName={menu}/>
                <SideBar handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} setMenu={setMenu}/>
                <Body openedMenu={menu} setMenu={setMenu}/>
            </MyPokemonProvider>
        </div>
    );
}

export default App;
