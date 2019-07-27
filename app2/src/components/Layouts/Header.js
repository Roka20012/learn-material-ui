import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CreateDialog from "../Exercises/Dialogs/Create";

export default ({ muscles, onCreateExercise }) => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="overline" color="inherit" style={{ flex: 1 }}>
                Exercises dataasdfad base
            </Typography>
            <CreateDialog muscles={muscles} onCreate={onCreateExercise} />
        </Toolbar>
    </AppBar>
);
