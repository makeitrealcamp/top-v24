const clonServer = require("supertest")
const app = require("../app")
const { connect, disconnected, cleanup } = require("../database")

describe("User", () => {

  beforeAll(async () => {
    await connect()
  })

  beforeEach(async () => {
    await cleanup()
  })

  afterAll(async () => {
    await disconnected()
  })

  it("should create a user correctly", async () => {
    const user = { email: "test@test.com", password: "12345" }
    const res = await clonServer(app).post("/auth/local/signup").send(user)

    expect(res.statusCode).toBe(201)
    expect(res.body.data).toHaveProperty("token")
    expect(res.body.data.token).toMatch(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/)
  })

  it("should nor create user when there is no email", async () => {
    const user = { password: "12345" }
    const res = await clonServer(app).post("/auth/local/signup").send(user)

    expect(res.statusCode).toBe(400)
    expect(res.body.message).toMatch("User could not created")
    //expect(res.body.errors.email.message).toMatch(/el correo es requerido/i)
  })

  it("should not create user when email is invalid", async () => {
    const user = { email: "test", password: "12345" }
    const res = await clonServer(app).post("/auth/local/signup").send(user)

    expect(res.statusCode).toBe(400)
    expect(res.body.error).toMatch(/el email no es valido/i)
  })

  it("should not create user when email already exists", async () => {
    const user = { email: "test@test.com", password: "12345" }
    await clonServer(app).post("/auth/local/signup").send(user)
    const res = await clonServer(app).post("/auth/local/signup").send(user)

    expect(res.statusCode).toBe(400)
    expect(res.body.error).toMatch(/El correo ya existe/i)
  })

  it("should signin user correctly", async () => {
    const user = { email: "test@test.com", password: "12345" }
    await clonServer(app).post("/auth/local/signup").send(user)
    const res = await clonServer(app).post("/auth/local/signin").send(user)

    expect(res.statusCode).toBe(201)
    expect(res.body.message).toMatch(/User login successfully/i)
  })

  it("should not login if incorrect password", async () => {
    const user = { email: "test@test.com", password: "12345" }
    await clonServer(app).post("/auth/local/signup").send(user)
    const res = await clonServer(app).post("/auth/local/signin").send({ ...user, password: "1" })

    expect(res.statusCode).toBe(400)
    expect(res.body.message).toMatch(/User could not login/i)
    expect(res.body.error).toMatch(/Email o contraseña invalidos/i)
  })

  it("should nopt login user if email does not exist", async () => {
    const user = { email: "test@test.com", password: "12345" }
    const res = await clonServer(app).post("/auth/local/signin").send(user)

    expect(res.statusCode).toBe(400)
    expect(res.body.message).toMatch(/User could not login/i)
  })
})

