#! usr/bin/env/node
import inquirer from "inquirer";
console.log("\t C U R R E N C Y   C O N V E R T E R");
let cur = await inquirer.prompt([
    {
        message: "\tEnter amount of money you want to convert!:\n",
        type: "number",
        name: "amount"
    },
    {
        message: "\tSelect currency you have given the amount from:\n",
        name: "chooseCurrent",
        type: "list",
        choices: ["Dollar", "Euro", "PKR", "Dinar", "Riyal"]
    },
    {
        message: "\tSelect currency you want to convert your amount in:\n",
        name: "chooseConvert",
        type: "list",
        choices: ["Dollar", "Euro", "PKR", "Dinar", "Riyal"]
    }
]);
let userAmount = cur.amount;
let userChoice = cur.chooseCurrent;
let userChoiceConvert = cur.chooseConvert;
if (userChoice === "Dollar") {
    userAmount *= 277;
}
else if (userChoice === "Euro") {
    userAmount *= 301;
}
else if (userChoice === "Dinar") {
    userAmount *= 903;
}
else if (userChoice === "Riyal") {
    userAmount *= 721;
}
else if (userChoice === "PKR") {
    userAmount;
}
if (userChoiceConvert === "Dollar") {
    console.log("\n\tAmount converted: ", userAmount / 277);
}
else if (userChoiceConvert === "Euro") {
    console.log("\n\tAmount converted: ", userAmount / 301);
}
else if (userChoiceConvert === "Dinar") {
    console.log("\n\tAmount converted: ", userAmount / 903);
}
else if (userChoiceConvert === "Riyal") {
    console.log("\n\tAmount converted: ", userAmount / 721);
}
else if (userChoiceConvert === "PKR") {
    console.log("Amount converted: ", userAmount);
}
else
    console.log("Invalid Selectionn");
