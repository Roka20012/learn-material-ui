import React, { Component } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import { exercises, muscles } from "../store";

class App extends Component {
    state = {
        exercises,
        category: "",
        exercise: {}
    };

    getExercisesByMuscles = () => {
        return Object.entries(
            this.state.exercises.reduce((exercises, exercise) => {
                const { muscles } = exercise;

                exercises[muscles] = exercises[muscles]
                    ? [...exercises[muscles], exercise]
                    : [exercise];
                return exercises;
            }, {})
        );
    };

    handleCategorySelect = category => {
        this.setState({
            category
        });
    };

    handleExerciseSelect = id => {
        this.setState(({ exercises }) => ({
            exercise: exercises.find(ex => ex.id === id)
        }));
    };

    handleExerciseCreate = (exercise) => {
        this.setState(({exercises}) => ({
            exercises: [
                ...exercises,
                exercise
            ]
        }))
    }

    render() {
        const exercises = this.getExercisesByMuscles(),
            { category, exercise } = this.state;
        return (
            <>
                <Header muscles={muscles} onCreateExercise={this.handleExerciseCreate}/>
                <Exercises
                    category={category}
                    exercises={exercises}
                    exercise={exercise}
                    onSelect={this.handleExerciseSelect}
                />
                <Footer
                    category={category}
                    muscles={muscles}
                    onSelect={this.handleCategorySelect}
                />
            </>
        );
    }
}

export default App;
