const router = require('express')()

const port = process.env.PORT || 3000;
const hostname = "localhost"

router.get("/", (request, response)=>{
    response.send({
        message: "howdy from api"
    });
})

router.listen(port, "0.0.0.0", ()=>{
    console.log(`listening at http://${hostname}:${port}`)
})

console.log("howdy")