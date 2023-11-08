function getSolution(rpnExpression) {
  stack = [];
  rpnExpressionSplited = rpnExpression.split(" ");
  rpnExpressionSplited.forEach((value) => {
    const isNum = /^\d+$/.test(value);
    if (isNum) {
      stack.push(Number(value));
    } else if (value === "+") {
      const num1 = stack.pop();
      const num2 = stack.pop();
      stack.push(num1 + num2);
    }
  });
  return stack[0];
}

module.exports = getSolution;
