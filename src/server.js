//App setup
import express from "express"
import log from "./modules/log"
const app = express()
app.set("case sensitive routing", true);

//Main app module
import { main } from "./modules/app"

//Get Feeds
app.use(async (req, res, next) => {
    const results = await main(req.url)
    if(results.status === 200){
        res.set("Content-Type", "text/xml");
    }
    res.status(results.status).send(results.msg)
})

//port
app.listen(8080, () => {
    log.info("Server -> App listening on port 8080")
})
