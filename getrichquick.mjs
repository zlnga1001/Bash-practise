#!/usr/bin/env node

import readline from 'readline';
import util from 'util';
import { exec } from 'child_process';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  const name = await askQuestion("What's your name? ");
  const age = await askQuestion("How old are you? ");
  console.log(`Hello ${name}, you are ${age} years old.`);
  console.log("This is a tarot reader, I will predict when you will get rich and what will come to you this month");
  await util.promisify(setTimeout)(1000);
  const option = await askQuestion("There are 3 cards (1, 2, 3). Please type in the number of the card you want to choose: ");
  
  switch (option) {
    case '1':
      const richDays1 = Math.floor(Math.random() * 365) + 1;
      await util.promisify(setTimeout)(1000);
      console.log(`This month, ${name} will need to work hard to get what you want. It will come unexpectedly, so try to do your best!`);
      await util.promisify(setTimeout)(1000);
      console.log(`Also, you will get rich in ${richDays1} days.`);
      break;

    case '2':
      const richDays2 = Math.floor(Math.random() * 365) + 1;
      await util.promisify(setTimeout)(1000);
      console.log(`This month, someone has a crush on you and they will invite you out for a date. Good luck, ${name}!`);
      await util.promisify(setTimeout)(1000);
      console.log(`Also, you will get rich in ${richDays2} days.`);
      break;

    case '3':
      const richDays3 = Math.floor(Math.random() * 365) + 1;
      await util.promisify(setTimeout)(1000);
      console.log(`This month, you need to be aware of your spending, or else you will be stressed because of not having money. But you will earn it later. No worries, ${name}.`);
      await util.promisify(setTimeout)(1000);
      console.log(`Also, you will get rich in ${richDays3} days.`);
      await util.promisify(setTimeout)(1000);
      console.log("\nAlso, investing can help you become rich!");
      break;

    default:
    await util.promisify(setTimeout)(1000);
      console.log("\nInvalid option. Please choose a number between 1, 2, and 3.");
      break;
  }
  
  console.log("Hope you have a great day!");
  console.log("Let's see what the weather is like today!");
  exec("curl -L --max-time 30 'wttr.in'", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error fetching weather: ${error.message}`);
      return;
    }
    console.log(stdout);
    console.log("Have a wonderful day!");
  });
  
  rl.close();
}

main();
