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

        </div>
    )
}