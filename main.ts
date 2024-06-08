import inquirer from "inquirer";
import { continueCode, data, headAndTail, numberGuessingGame, starMakingGame } from "./games.js";
await data()
const mainFunc = async() => {
    const games = await inquirer.prompt([
        {
            name:"totalGames",
            type:"list",
            message:"Here are some games for you...",
            choices:["Star Making Game","Number Guessing","Head or Tail"]
        }
    ])
    switch(games.totalGames){
        case "Star Making Game": {
            await starMakingGame()
            await continueCode(mainFunc)
            break
        }
        case "Number Guessing": {
            await numberGuessingGame()
            await continueCode(mainFunc)
            break
        }
        case "Head or Tail": {
            await headAndTail()
            await continueCode(mainFunc)
            break
        }

    }
}
mainFunc()
