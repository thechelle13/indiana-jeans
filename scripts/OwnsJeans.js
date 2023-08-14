import { setOwnsBlueJeans } from "./TransientState.js"
// Responsibility to provide UI controls for survey taker to choose yes or no for ownership of blue jeans




/*
     Since the value of the radio buttons is the string of
     'true' and the string of 'false', you must convert the
     string to an actual boolean with JSON.parse() as seen below
 */
     const handleOwnershipChange = (changeEvent) => {
        if (changeEvent.target.name === "owns") {
            const convertedToBoolean = JSON.parse(changeEvent.target.value)
            setOwnsBlueJeans(convertedToBoolean)
        }
    }

    export const OwnJeansChoices = () => {

        document.addEventListener("change", handleOwnershipChange)
    
        let choicesHTML = "<h2>Do you own a pair of blue jeans?</h2>"
        choicesHTML += "<input type='radio' name='owns' value=true /> Yes"
        choicesHTML += "<input type='radio' name='owns' value=false /> No"
    
        return choicesHTML
    }