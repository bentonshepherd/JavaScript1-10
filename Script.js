//write first method
function sleep_in(weekday, vacation) {
    if(vacation == true){
        return true;
    }
    if(weekday == true) {
        return false;
    }
    if(weekday == false && vacation == false) {
        return true;
    }
}

//write second method

function monkey_trouble(param1, param2) {
    if(param1 == param2) {
        return true;
    }else{
        return false;
    }
}

//add 2-10 below here...

function string_times(word, int) {
    var newWord = "";
    for(var i = 0; i < int; i++) {
        newWord = newWord + word;
    }
    return newWord;
}

function front_times(word, int) {
    word = word.substring(0, 3);
    var newWord = "";
    for(var i = 0; i < int; i++) {
        newWord = word + newWord;
    }
    return newWord;
}

function string_bits(word) {
    var newWord = "";
    for(var i = 0; i < word.length; i++) {
        if(i % 2 != 0) {
            newWord = newWord + word.substring(i - 1, i);
        }
    }
    return newWord;
}

function caughtSpeeding(speed, birthday) {
    var n = 0;
    if (birthday == true) {
        n = 5;
    }
    if (speed <= 60 + n) {
        return 0;
    } else {
        if (speed >= 61 + n && speed <= 80 + n) {
            return 1;
        } else {
            if (speed >= 81 + n) {
                return 2;
            }
        }
    }
}

function fizz_buzz(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return "FizzBuzz";
    }
    if (num % 3 == 0) {
        return "Fizz";
    }
    if (num % 5 == 0) {
        return "Buzz";
    }
    return num + "!";
}

function teaParty(tea, candy) {
    if (tea < 5 || candy < 5) {
        return 0;
    }
    if (candy * 2 <= tea || tea * 2 <= candy) {
        return 2;
    }
    if (tea >= 5 && candy >= 5) {
        return 1;
    }
}

function blackjack(int1, int2) {
    if (int1 > 21 && int2 > 21) {
        return 0;
    }
    if (int1 > int2 && int1 <= 21) {
        return int1;
    } else {
        if(int2 <= 21){
            return int2;
        } else {
            return int1;
        }
    }
}

function loneSum(a, b, c) {
    var sum = a + b + c;
    if (a == b && a == c) {
        return 0;
    }
    if (a == b) {
        sum = sum - a * 2;
    }
    if (a == c) {
        sum = sum - a * 2;
    }
    if (b == c) {
        sum = sum - b * 2;
    }
    return sum;
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    //test third method, etc
}
