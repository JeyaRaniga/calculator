
// notes: 
// there will be a string input_var that will update on click. 
// This variable will increment with each click. 
// The eval function will create a string for computation and calculate value.
// this will update ans.
// should input_var be part of the global scope?

// getNumber function to get a number from input
// declare input var
// create a switch statement for numbers 0-9 that will be added to the string input_var
getNumber = (num) => {
    var input_var = document.getElementById('input')
    switch (num) {
        case 1:
            input_var.value += "1";
            break;
        case 2:
            input_var.value += "2";
            break;
        case 3:
            input_var.value += "3";
            break;
        case 4:
            input_var.value += "4";
            break;
        case 5:
            input_var.value += "5";
            break;
        case 6:
            input_var.value += "6";
            break;
        case 7:
            input_var.value += "7";
            break;
        case 8:
            input_var.value += "8";
            break;
        case 9:
            input_var.value += "9";
            break;
        case 0:
            input_var.value += "0";
            break;
        case ".":
            input_var.value += ".";
            break;
    }
}


// clearScreen function - when you click CE it should clear screen.
//answer and input should both equal null.
clearScreen = () => {
    document.getElementById('input').value = ""
    document.getElementById('answer').value = ""
}



// getOperator function
// input var
// create a switch statement for the operators so they update input_var
getOperator = (operator) => {
    var input_var = document.getElementById('input')
    switch (operator) {
        case '+':
            input_var.value += '+';
            break;
        case '-':
            input_var.value += '-';
            break;
        case 'x':
            input_var.value += '*';
            break;
        case '/':
            input_var.value += '/';
            break;

    }
}

// backSpace function
// remove the last character in input string
backSpace = () => {
    var input_var = document.getElementById('input')
    //create new variable that will trim the input variable by length -1
    var trim = input_var.value;
    // remove the last charater in the string
    if (trim.length > 0) {
        trim = trim.substring(0, trim.length-1);
        input_var.value = trim
    }
}



// compute function
//get [input]
//define ans = math.floor?(+eval(input.value)) look up the reference when working this out. 
// get [answer] = "=" + ans
compute = () => {
    var input_var = document.getElementById('input')
    var ans = eval(input_var.value)
    document.getElementById('answer').value = " = " + ans
}


// brackets function - the brackets must close.
var x = 0;
// x represents an open bracket. The open bracket should always be displayed first. If open bracket is displayed, then close the bracket.
// var x should be part of the global scope. Assign any value that will alternatively assign values that represent the brackets. This should update input_var
brackets = () => {
    var input_var = document.getElementById('input') 
    if (x == 0) {
        input_var.value += '(';
        x = 1;
    } else if (x == 1) {
        input_var.value += ')';
        x = 0;
    }
}