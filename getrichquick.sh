#!/bin/bash
echo "What's your name?"
read name

echo "How old are you?"
read age

echo "Hello $name, you are $age years old."

echo "This is a tarot reader, I will predict when will you get rich and what will come to you this month"
sleep 1
echo "There are 3 cards (1,2,3). Please type in the number of the card you want to choose"
read option

case $option in
    1)
        rich_days=$((RANDOM % 365 + 1))
        echo "This month, $name will need to work hard to get what you want. It will come unexpectedly, so try to do your best!"
        echo "Also, you will get rich in $rich_days days."
        ;;

    2)
        rich_days=$((RANDOM % 365 + 1))
        echo "This month, someone has a crush on you and they will invite you out for a date. Good luck $name!"
        echo "Also, you will get rich in $rich_days days."
        ;;

    3)
        rich_days=$((RANDOM % 365 + 1))
        echo "This month, you need to be aware of your spending, or else you will be stressed because of not having money. But you will earn it later. No worries $name."
        echo "Also, you will get rich in $rich_days days."
        echo "Also, investing can help you become rich!"
        ;;

    *)
        echo "Invalid option. Please choose a number between 1, 2, and 3."
        ;;
esac

echo "Hope you have a great day!"
echo "Let's see what the weather is like today!"
curl -L --max-time 5 "wttr.in"
sleep 2
echo "Have a wonderful day!"
