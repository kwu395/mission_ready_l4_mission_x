const app = require("./index");
const PORT = process.env.PORT || process.env.DB_PORT;

app.listen(PORT, () => {
    console.log(`Server is alive on http://localhost:${PORT}`)
})
.on("error", (error) => {
    if(error.code === "EADDRINUSE"){
        console.log("Port is already in use, either close all other servers or choose another port")
    } else {
        console.log("Server Error", error)
    }
});

