function getSolution(rpnExpression) {
    if (rpnExpression == " ") {
        throw TypeError("Empty string");
    }
    stack = [];
    rpnExpressionSplited = rpnExpression.split(" ");
    rpnExpressionSplited.forEach((token) => {
        const isNumOrDecimal = /^\d*\.?\d+$/.test(token);
        if (isNumOrDecimal) {
            stack.push(Number(token));
        } else if (token === "sqrt") {
            const num1 = stack.pop();
            stack.push(Math.sqrt(num1));
        } else if (token === "max") {
            stackCopy = stack.slice();
            stack = [];
            stack.push(Math.max(...stackCopy));
        } else if (stack.length < 2) {
            throw TypeError("Not enough operands");
        } else if (token === "+") {
            const num1 = stack.pop();
            const num2 = stack.pop();
            stack.push(num2 + num1);
        } else if (token === "-") {
            const num1 = stack.pop();
            const num2 = stack.pop();
            stack.push(num2 - num1);
        } else if (token === "*") {
            const num1 = stack.pop();
            const num2 = stack.pop();
            stack.push(num2 * num1);
        } else if (token === "/") {
            const num1 = stack.pop();
            const num2 = stack.pop();
            stack.push(num2 / num1);
        } else {
            throw TypeError("Unknown token");
        }
    });
    return stack.pop();
}

module.exports = getSolution;
