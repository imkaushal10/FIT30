import React, { useState } from "react"
import Modal from "./Modal"
import { exerciseDescriptions } from "../utils"

export default function WorkoutCard(props) {
    const { trainingPlan, workoutIndex, type, dayNum, icon, savedWeights, handleSave, handleComplete } = props

    const { warmup, workout } = trainingPlan || {}
    const [showExerciseDescription, setShowExerciseDescription] = useState(null)
    const [weights, setWeights] = useState(savedWeights || {})

    function handleAddWeight(title, weight) {
        const newObj = {
            ...weights,
            [title]: weight
        }
        setWeights(newObj)
    }

    return (
        <div className="workout-container">
            {showExerciseDescription && (
                <Modal showExerciseDescription={showExerciseDescription} handleCloseModal={() => {
                    setShowExerciseDescription(null)
                }} />
            )}
            <div className="workout-card card">
                <div className="plan-card-header">
                    <p>Day {dayNum}</p>
                    {icon}
                </div>
                <div className="plan-card-header">
                    <h2><b>{type} Workout</b></h2>
                </div>
            </div>

            <div className="workout-grid">
                        <div className="exercise-name">
                            <h4>Warmup</h4>
                        </div>
                        <h6>Sets</h6>
                        <h6>Reps</h6>
                        <h6 className="weight-input">Max Weight</h6>
                        {warmup.map((warmupExercise, warmupIndex) => {
                            return (
                                <React.Fragment key={warmupIndex}>
                                    <div className="exercise-name">
                                        <p>{warmupIndex + 1}. {warmupExercise.name}</p>
                                        <button onClick={() => {
                                            setShowExerciseDescription({
                                                name: warmupExercise.name,
                                                description: exerciseDescriptions[warmupExercise.name]
                                            })
                                        }} className="help-icon">
                                            <i className="fa-regular fa-circle-question" />
                                        </button>
                                    </div>
                                    <p className="exercise-info">{warmupExercise.sets}</p>
                                    <p className="exercise-info">{warmupExercise.reps}</p>
                                    <input className="weight-input" placeholder="N/A" disabled />
                                </React.Fragment>
                            )
                        })}
                </div>

        </div>
    )
}