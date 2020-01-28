import {fade, makeStyles} from "@material-ui/core/styles";

export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },

    center_grid: {
        textAlign: "center"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    search: {
        position: 'relative',
        marginBottom: 5,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade("#2d2d2d", 0.15),
        '&:hover': {
            backgroundColor: fade("#2d2d2d", 0.25),
        },
        marginLeft: 0,
        display: 'flex'
    },
    searchIcon: {
        display: 'flex',
        alignSelf: "center",
        marginLeft: '10px',
        marginRight: '10px'
    },
    inputRoot: {
        color: 'inherit',
        flex: 1
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    roundedBorder: {
        border: "1px solid",
        borderRadius: "10px",
    },
    whiteFontColor: {
        color: "#fff"
    },
    normal: {
        background: "#A8A878"
    },
    fire: {
        background: "#F08030"
    },
    fighting: {
        background: "#C03028"
    },
    water: {
        background: "#6890F0"
    },
    flying: {
        background: "#A890F0"
    },
    grass: {
        background: "#78C850"
    },
    poison: {
        background: "#A040A0"
    },
    electric: {
        background: "#F8D030"
    },
    ground: {
        background: "#E0C068"
    },
    psychic: {
        background: "#F85888"
    },
    rock: {
        background: "#B8A038"
    },
    ice: {
        background: "#98D8D8"
    },
    bug: {
        background: "#A8B820"
    },
    dragon: {
        background: "#7038F8"
    },
    ghost: {
        background: "#705898"
    },
    dark: {
        background: "#705848"
    },
    steel: {
        background: "#B8B8D0"
    },
    fairy: {
        background: "#EE99AC"
    },
    else: {
        background: "#68A090"
    }

}));