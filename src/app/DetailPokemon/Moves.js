import {
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary, Grid, Paper, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow,
    Typography
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, {useState} from "react";
import {useStyles} from "../AppCss";

export const Moves = React.memo((props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Grid item xs={12}>
            {props?.data?.map((move, idx) => {
                return (
                    <ExpansionPanel key={idx} expanded={expanded === move.move.name}
                                    onChange={handleChange(move.move.name)}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.heading}>Moves</Typography>
                            <Typography className={classes.secondaryHeading}>{move.move.name}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Learn Level at</TableCell>
                                            <TableCell align="right">Move Learn Method</TableCell>
                                            <TableCell align="right">Version</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {move.version_group_details.map((row, idx) => (
                                            <TableRow key={`${move.move.name}-${idx}`}>
                                                <TableCell component="th"
                                                           scope="row">{row.level_learned_at}</TableCell>
                                                <TableCell align="right">{row.move_learn_method.name}</TableCell>
                                                <TableCell align="right">{row.version_group.name}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                )
            })}
        </Grid>
    )
});