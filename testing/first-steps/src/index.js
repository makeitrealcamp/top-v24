exports.sum = (a, b) => {
  return a + b;
};

exports.multiply = (a, b) => {
  return a * b;
};

exports.subs = (a, b) => {
  return a - b;
};

exports.divide = (a, b) => {
  return a / b;
};

exports.person = (name, age) => {
  return {
    name,
    age,
    greet() {
      return `Hola ${name}!`;
    },
  };
};

exports.map = (cb) => {
  cb();
};
