export const stringToArray = string => {
    let output = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            let num = "";
            while (string[i] !== " ") {
                num += string[i];
                i++;
                if (i === string.length) { break; }
            }
            output.push(parseInt(num));
        }
    }
    return output;
}

export const arrayToString = input => {
    let output = "";
    for (let i = 0; i < input.length; i++) {
        output += input[i]
        if (i !== input.length - 1) {
            output += " "
        }
    }
    return output
}