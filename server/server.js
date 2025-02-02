const app = require("../server/src/api/v1/app")

const PORT = process.env.PORT || 3056

const server = app.listen(PORT, () => {
    console.log("Server is running at http://localhost:" + PORT)
})
