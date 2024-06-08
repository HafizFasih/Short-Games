import inquirer from "inquirer";
export const data = async () => {
  const name: { userName: string } = await inquirer.prompt([
    {
      name: "userName",
      type: "input",
      message: "Please enter your name in titlecase",
      validate: (val: string) => {
        const firstChar: string = val.charAt(0).toUpperCase();
        if (val.charAt(0) === firstChar) {
          return true;
        } else {
          return "Make sure that your name is in titlecase..";
        }
      },
    },
  ]);
  const userName: string = name.userName.split(" ").join("");
  const emailAdress: string =
    userName + Math.floor(Math.random() * 5000) + "@gmail.com"; //! concatenation
  console.log(`Generated Email Adress: ${emailAdress}`);
  const code = await inquirer.prompt([
    {
      name: "userCode",
      type: "input",
      message: "Please Generate a Code.",
    },
  ]);
  await inquirer.prompt([
    {
      name: "userPass",
      type: "input",
      message: "Please Enter the code to login.",
      validate: function (val: string) {
        if (val === code.userCode) {
          return true;
        } else {
          return "Your password is incorrect.";
        }
      },
    },
  ]);

  console.log("Your password is Correct.");
  const verfCode: number = Math.floor(Math.random() * 5000);
  console.log(`Your Verification code: ${verfCode}`);

  await inquirer.prompt([
    {
      name: "userVerf",
      type: "input",
      message: "Enter a verification code.",
      validate: (val: string) => {
        if (val !== verfCode.toString()) {
          return "Your verification code is incorrect.";
        } else {
          return true;
        }
      },
    },
  ]);
  console.log("Welcome " + name.userName);
  console.log("Here is your details, please save them.");
  console.log(`Email Adress: ${emailAdress}`);
  console.log(`Password: ${code.userCode}`);
};
const checkCode = async(gameName:string) =>{
  const gameCode: number = Math.floor(Math.random() * 5000);
  console.log(`${gameName}: ${gameCode}`);
  await inquirer.prompt([
    {
      name: "userCode",
      type: "input",
      message: "Enter the game code.",
      validate: (val: string) => {
        if (val === gameCode.toString()) {
          return true;
        } else {
          return "Your pin is incorrect.";
        }
      },
    },
  ]);
}
//! Star making game
export const starMakingGame = async () => {
await checkCode("Star Making Game")
  const ask = await inquirer.prompt([
    {
      name: "quantity",
      type: "input",
      message: "Enter the quantity",
    },
  ]);
  let star: string = "";
  for (let i = 1; i <= ask.quantity; i++) {
    star += "*";
    console.log(star);
  }
};
//! Number Guessing game
export const numberGuessingGame = async () => {
  await checkCode("Number Guessing Game")
  const randomNum: number = Math.floor(Math.random() * 5 + 1);
  const userGuessedNum = await inquirer.prompt([
    {
      name: "num",
      type: "input",
      message: "Guess the number between 1 and 5",
      validate: (val: string) => {
        let value: number = Number(val);
        if (value > 5 || value < 1) {
          return "Select number between 1 and 5";
        } else {
          return true;
        }
      },
    },
  ]);
  let message: string =
    randomNum === userGuessedNum.num
      ? "You guessed the right number"
      : "You guessed the wrong number";
  console.log(message);
  console.log(`The computer guessed number was ${randomNum}`);
};

//! Head and Tail Game
export const headAndTail = async () => {
  await checkCode("Head and Tail")
  const randomNum: number = Math.floor(Math.random() * 2);
  let computerAns: string = "";
  switch (randomNum) {
    case 0:
      computerAns = "head";
      break;
    case 1:
      computerAns = "tail";
      break;
  }
  const userGuessed:{
    ans:string;
  } = await inquirer.prompt([
    {
      name: "ans",
      type: "input",
      message: "Head or Tail???",
    },
  ]);
  let message: string =
    computerAns === userGuessed.ans.toLowerCase() ? "You won" : "You lose";
  console.log(message);
};

export const continueCode = async(Func:() => Promise<void>) => {
  const message = await inquirer.prompt([
    {
      name:"msg",
      type:"list",
      message:"Do you want to continue...?",
      choices:["Yes","No"]
    }
  ])
  switch(message.msg){
    case "Yes": await Func() ; break ;
    case "No":{
      console.log("Thank you");
      process.exit();
    } 
  }
}