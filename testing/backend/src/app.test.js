const req = require("supertest")
const { connect, disconnected, cleanup } = require("./database")

describe("App", () => {

  beforeAll(async () => {
    await connect()
  })

  beforeEach(async () => {
    await cleanup()
  })

  afterAll(async () => {
    await disconnected()
  })

  it("Should app", () => {
    expect(true).toBeTruthy()
  })
})