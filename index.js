#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
// Define the player class
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
// Define the opponent class
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Please Enter your Name:"
    }
]);
let opponent = await inquirer.prompt([
    {
        type: "list",
        name: "select",
        message: "Select your Opponent",
        choices: ["Dracula", "Giant", "Monster"]
    }
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    //  DRACULA
    if (opponent.select == "Dracula") {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "opt",
                message: "Select your action",
                choices: ["Attack", "Drinking", "Run away"]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You loose! Better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win!!"));
                    process.exit();
                }
            }
        }
        // Player chooses to drinking
        if (ask.opt == "Drinking") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.yellowBright(`Your drinking fuel is ${p1.fuel}`));
        }
        // Player chooses to run away
        if (ask.opt == "Run away") {
            console.log(chalk.bold.italic.cyan("You lose! Better luck next time"));
            process.exit();
        }
    }
    //  GIANT
    if (opponent.select == "Giant") {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "opt",
                message: "Select your action",
                choices: ["Attack", "Drinking", "Run away"]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You loose! Better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win!!"));
                    process.exit();
                }
            }
        }
        // Player chooses to drinking
        if (ask.opt == "Drinking") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.yellowBright(`Your drinking fuel is ${p1.fuel}`));
        }
        // Player chooses to run away
        if (ask.opt == "Run away") {
            console.log(chalk.bold.italic.cyan("You lose! Better luck next time"));
            process.exit();
        }
    }
    //  MONSTER
    if (opponent.select == "Monster") {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "opt",
                message: "Select your action",
                choices: ["Attack", "Drinking", "Run away"]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You loose! Better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win!!"));
                    process.exit();
                }
            }
        }
        // Player chooses to drinking
        if (ask.opt == "Drinking") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.yellowBright(`Your drinking fuel is ${p1.fuel}`));
        }
        // Player chooses to run away
        if (ask.opt == "Run away") {
            console.log(chalk.bold.italic.cyan("You lose! Better luck next time"));
            process.exit();
        }
    }
} while (true);
