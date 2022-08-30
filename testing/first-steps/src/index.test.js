const { sum, multiply, subs, divide, person, map } = require(".");

describe("sum", () => {
  it("should add two numbers correctly", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
    expect(sum(5, 10)).toBe(15);
    expect(sum(1321654, 634565161)).toBe(635886815);
  });
});

describe("multiply", () => {
  it("should to multiply two number correctly", () => {
    expect(multiply(4, 5)).toBe(20);
  });

  it("should multiply 3 and 5 correctly", () => {
    const result = multiply(3, 5);
    expect(result).toBe(15);
  });
});

describe("subs", () => {
  it("should substract two number correctly", () => {
    expect(subs(3, 2)).toBe(1);
  });
});

describe("division", () => {
  it("should divive number correctly", () => {
    expect(divide(10, 2)).toBe(5);
  });
});

describe("person", () => {
  it("should create with name jhon and age 33", () => {
    const john = person("john", 33);
    expect(john).toMatchObject({ name: "john", age: 33 });
    expect(john.name).toBe("john");
    expect(john.age).toBe(33);
  });

  it("should be able to greet", () => {
    const name = "john";
    const john = person(name, 33);
    // expect(john.greet()).toMatch(/hola john/i);
    expect(john.greet()).toMatch(`Hola ${name}`);
  });
});

describe("map", () => {
  it("should execute callback", () => {
    const handleSubmit = jest.fn();
    map(handleSubmit);

    expect(handleSubmit).toHaveBeenCalled();
  });
});
