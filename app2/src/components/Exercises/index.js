import React from "react";
import {
    Grid,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText
} from "@material-ui/core";

const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 300,
        overflowY: "auto"
    }
};

export default ({
    exercises,
    category,
    onSelect,
    exercise: {
        id,
        title = " Welcome! ",
        description = "Please select an exercise from the list on the left"
    }
}) => (
    <Grid container>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {exercises.map(([group, exercises]) =>
                    !category || category === group ? (
                        <React.Fragment key={group}>
                            <Typography
                                style={{ textTransform: "capitalize" }}
                                variant="subtitle1"
                                
                            >
                                {group}
                            </Typography>
                            <List
                                component="ul"
                                aria-label="secondary mailbox folders"
                            >
                                {exercises.map(({ id, title }) => (
                                    <ListItem
                                        key={id}
                                        button
                                        onClick={() => onSelect(id)}
                                    >
                                        <ListItemText primary={title} />
                                    </ListItem>
                                ))}
                            </List>
                        </React.Fragment>
                    ) : null
                )}
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>
                <Typography variant="h4" style={{ marginTop: 20 }}>
                    {title}
                </Typography>
                <Typography variant="subtitle1">{description}</Typography>
            </Paper>
        </Grid>
    </Grid>
);
