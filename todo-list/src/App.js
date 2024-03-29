import React, { Component } from "react";
import { Paper, Typography, TextField, Button } from "@material-ui/core";
import {
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

class App extends Component {
    state = {
        exercises: [
            { id: 1, title: "Bench Press" },
            { id: 2, title: "Deadlift" },
            { id: 3, title: "Squats" }
        ],
        title: ""
    };

    handleChange = ({ target: { name, value } }) =>
        this.setState({ [name]: value });

    handleCreate = e => {
        e.preventDefault();

        if (this.state.title) {
            this.setState(({ exercises, title }) => ({
                exercises: [
                    ...exercises,
                    {
                        title,
                        id: Date.now()
                    }
                ],
                title: ""
            }));
        }
    };

    handleDelete = id =>
        this.setState(({ exercises }) => ({
            exercises: exercises.filter(ex => ex.id !== id)
        }));

    render() {
        const { title, exercises } = this.state;
        const { classes } = this.props;
        return (
            <>
                <Paper className={classes.root}>
                    <Typography variant="h1" align="center" gutterBottom>
                        Exercises
                    </Typography>
                    <form
                        action="#"
                        onSubmit={this.handleCreate}
                        align="center"
                        className={classes.form}
                    >
                        <TextField
                            name="title"
                            label="Exercise"
                            value={title}
                            onChange={this.handleChange}
                            margin="dense"
                        />
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            margin="none"
                        >
                            Create
                        </Button>
                    </form>
                    <List>
                        {exercises.map(({ title, id }) => (
                            <ListItem key={id}>
                                <ListItemText primary={title} />
                                <ListItemSecondaryAction>
                                    <IconButton
                                        color="primary"
                                        onClick={() => this.handleDelete(id)}
                                    >
                                        <Delete />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </>
        );
    }
}

const styles = {
    root: { margin: 20, padding: 20, maxWidth: 400 },
    form: {
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-evenly"
    }
};
export default withStyles(styles)(App);
