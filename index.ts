#! /usr/bin/env node

import inquirer from "inquirer"

let c_value: {[key: string]: number} = {
    PKR:278.40,
    UAE: 3.67,
    USD: 1
};


let user_answer = await inquirer.prompt(
    [
        {
            name: "from",
            message: "Converting From",
            type: "list",
            choices: ['PKR','UAE','USD']
        },
        {
            name: "to",
            message: "Converting to",
            type: "list",
            choices: ['PKR','UAE','USD']   
        },
        {
            name: "amount",
            message: "Enter your amount",
            type: "number"
        }
    ]
)

console.log(c_value[user_answer.to] / c_value[user_answer.from] * user_answer.amount);
    

