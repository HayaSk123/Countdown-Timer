import inquirer from "inquirer";
import chalk from "chalk";
import { differenceInSeconds } from "date-fns";
// Prompting the user to input time in seconds
const time = await inquirer.prompt([{
        name: "time",
        type: "number",
        message: "Enter the amount of Seconds",
        validate: (input) => {
            if (isNaN(input)) {
                return chalk.redBright("Please Enter a Valid Number");
            }
            else if (input > 60) {
                return chalk.redBright("Please Enter a Number below 60");
            }
            else {
                return true;
            }
        }
    }]);
// Storing user's input in a variable called input
let input = time.time;
// Creating a function which does the main task of the countdown timer
function func_start(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val + 2);
    const intervalTime = new Date(intTime);
    const intervalId = setInterval(() => {
        const currTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currTime);
        if (timeDiff <= 0) {
            console.log("Timer has Expired");
            clearInterval(intervalId); // Stop the interval when the timer expires
        }
        else {
            const Min = Math.floor((timeDiff % (3600 * 24)) / 3600);
            const Seconds = Math.floor(timeDiff % 60);
            console.log(chalk.blueBright(` ${Seconds} seconds`));
        }
    }, 1000);
}
func_start(input);
