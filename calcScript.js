const clearScreen = () => {
    document.getElementById("result").innerHTML = "";
}

const numberShorten = () => {
    if (document.getElementById("result").innerHTML.length > 26) {
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML.slice(1);
    }
}

const display = (value) => {
    let outInfo = document.getElementById("result").innerHTML;
    let outLength = outInfo.length - 1;

    if (!(document.getElementById("result").innerHTML.length === 0 && (value === '/' || value === '*' || value === '+' || value === '.'))) {
        if ((outInfo[outLength] !== '/' && outInfo[outLength] !== '*' && outInfo[outLength] !== '-'
                && outInfo[outLength] !== '+' && outInfo[outLength] !== '.')
            || (value !== '/' && value !== '*' && value !== '-' && value !== '+' && value !== '.')) {
            numberShorten();
            document.getElementById("result").innerHTML += value;
        } else if ((outInfo[outLength] === '/' || outInfo[outLength] === '*' || outInfo[outLength] === '-'
            || outInfo[outLength] === '+' || outInfo[outLength] === '.') && (value === '/' || value === '*'
            || value === '-' || value === '+' || value === '.')) {
            let outputLine = document.getElementById("result").innerHTML;

            if (outputLine.length > 1) {
                document.getElementById("result").innerHTML = outputLine.substr(0, outputLine.length - 1) + value;
            }
        }
    }
}

const calculate = () => {
    let outputValue = document.getElementById("result").innerHTML;

    document.getElementById("result").innerHTML = eval(outputValue);
}

const removeLast = () => {
    let outLine = document.getElementById("result").innerHTML;

    document.getElementById("result").innerHTML = outLine.substr(0, outLine.length - 1);
}
