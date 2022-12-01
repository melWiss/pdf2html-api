const router = require('express')();
var bodyParser = require('body-parser');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');

const port = process.env.PORT || 3000;
const hostname = "0.0.0.0";

router.use(bodyParser.text({type: "text/plain", limit: '50mb'}))

router.post("/", async (request, response)=>{
    const fileName = `_temp${Date.now()}`;
    fs.writeFileSync(`pdfs/${fileName}.pdf`, request.body, {encoding: "base64"});
    // convert to html
    await exec(`pdf2htmlEX pdfs/${fileName}.pdf output/${fileName}.html`);
    // load html file
    const html = fs.readFileSync(`output/${fileName}.html`,{encoding: "utf8"}).toString("utf8");
    // add css to it
    const result = `
    ${html}
    ${css}
    `;
    // send it back
    response.send(result);
    fs.writeFileSync(`output/${fileName}.html`, result, {encoding: "utf8"});
})

router.listen(port, "0.0.0.0", ()=>{
    console.log(`listening at http://${hostname}:${port}`)
})


const css = `
<style type="text/css">
    .h0 {
        height: 100vh;
    }

    .w0 {
        width: 100%;
    }

    .pf {
        margin: 0px auto;
        box-shadow: 0px rgba(255, 255, 255, 0);
        border-collapse: separate;
    }
</style>
`;