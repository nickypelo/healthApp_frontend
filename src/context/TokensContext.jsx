import { createContext, useState } from "react";

const TokensContext = createContext();

export const TokensProvider = ({children}) =>{

    const [tokens, setTokens] = useState(0);
    const [dayObjective, setDayObjective] = useState(1);
    const [exerciseCount, setExerciseCount] = useState(0);

    //calculate the tokens
    const addTokens = (num) =>{
        setTokens(tokens + num);
    }

    //values for progress bar
    const progressBar = (num) =>{
        setDayObjective(dayObjective+num)
    }

    //values for set exercise count
    const setExercise = () =>{
        setExerciseCount(exerciseCount+1)
    }

    const tokenData = {
        points: tokens,
        addTokens: addTokens,
        progressBar: progressBar,
        dayObjective: dayObjective,
        exercise: exerciseCount,
        addExercise: setExercise
    }

    return(

        <TokensContext.Provider value={tokenData}>
            {children}
        </TokensContext.Provider>
    )
}

export default TokensContext;