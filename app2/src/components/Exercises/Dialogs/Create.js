import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    withStyles
} from "@material-ui/core/";
import Add from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

const styles = theme => ({
    FormControl: {
        width: 500
    }
});

export default withStyles(styles)(
    class extends React.Component {
        state = {
            open: false,
            exercise: {
                title: "",
                description: "",
                muscles: ""
            }
        };

        handleToggle = () => {
            this.setState({
                open: !this.state.open
            });
        };

        handleChange = name => ({ target: { value } }) => {
            this.setState({
                exercise: {
                    ...this.state.exercise,
                    [name]: value
                }
            });
        };

        handleSubmit = () => {
            //TODO: validate
            const { exercise } = this.state;
            this.props.onCreate({...exercise,
            id: exercise.title.toLowerCase().replace(/ /g, '-')});
            this.setState({
                open: false,
                exercise: {
                    title: "",
                    description: "",
                    muscles: ""
                }
            });
        };

        render() {
            const {
                    open,
                    exercise: { title, description, muscles }
                } = this.state,
                { classes, muscles: categories } = this.props;
            return (
                <>
                    <Fab
                        onClick={this.handleToggle}
                        color="secondary"
                        aria-label="add"
                        size="medium"
                    >
                        <Add />
                    </Fab>

                    <Dialog open={open} onClose={this.handleToggle}>
                        <DialogTitle id="form-dialog-title">
                            Create new exercise
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Please fill out the form below.
                            </DialogContentText>
                            <form action="#">
                                <TextField
                                    label="Title"
                                    value={title}
                                    onChange={this.handleChange("title")}
                                    margin="normal"
                                    className={classes.FormControl}
                                />
                                <br />
                                <FormControl className={classes.FormControl}>
                                    <InputLabel htmlFor="muscles">
                                        Muscles
                                    </InputLabel>
                                    <Select
                                        value={muscles}
                                        onChange={this.handleChange("muscles")}
                                    >
                                        {categories.map(category => (
                                            <MenuItem value={category}>
                                                {category}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <br />
                                <TextField
                                    multiline
                                    rows="4"
                                    label="Description"
                                    value={description}
                                    onChange={this.handleChange("description")}
                                    margin="normal"
                                    className={classes.FormControl}
                                />
                            </form>
                        </DialogContent>
                        <DialogActions>
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={this.handleSubmit}
                            >
                                Create
                            </Button>
                        </DialogActions>
                    </Dialog>
                </>
            );
        }
    }
);
