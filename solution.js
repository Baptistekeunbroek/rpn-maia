function getSolution(rpnExpression) {
  if (rpnExpression == " ") {
    throw TypeError("Empty string");
  }
  stack = [];
  rpnExpressionSplited = rpnExpression.split(" ");
  rpnExpressionSplited.forEach((value) => {
    const isNum = /^\d+$/.test(value);
    if (isNum) {
      stack.push(Number(value));
    } else if (value === "+") {
      const num1 = stack.pop();
      const num2 = stack.pop();
      stack.push(num2 + num1);
    } else if (value === "-") {
      const num1 = stack.pop();
      const num2 = stack.pop();
      stack.push(num2 - num1);
    } else if (value === "*") {
      const num1 = stack.pop();
      const num2 = stack.pop();
      stack.push(num2 * num1);
    } else if (value === "/") {
      const num1 = stack.pop();
      const num2 = stack.pop();
      stack.push(num2 / num1);
    } else if (value === "sqrt") {
      const num1 = stack.pop();
      stack.push(Math.sqrt(num1));
    } else if (value === "max") {
      stackCopy = stack.slice();
      stack = [];
      stack.push(Math.max(...stackCopy));
    }
  });
  return stack[0];
}

module.exports = getSolution;
