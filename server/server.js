const app = require("./src/app")

const PORT = 3055

const server = app.listen(PORT, () => {
    console.log("Server is running at http://localhost:" + PORT)
})
