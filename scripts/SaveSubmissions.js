import { saveSurveySubmission } from "./TransientState.js"
// Responsibility to provide UI controls for survey taker to choose yes or no for ownership of blue jeans




/*
     Since the value of the radio buttons is the string of
     'true' and the string of 'false', you must convert the
     string to an actual boolean with JSON.parse() as seen below
 */
     const handleSurveySubmissionsClick = (clickEvent) => {
        if (clickEvent.target.id === "saveSubmission") {
            
            saveSurveySubmission()
        }
    }

    export const SaveSubmission = () => {

        document.addEventListener("click", handleSurveySubmissionsClick)
    
        return "<div><button id='saveSubmission'>Save Submission</button></div>"
        
    }