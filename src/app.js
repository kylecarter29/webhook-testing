const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.static("public"))
app.use( express.json() );
app.post( '/', ( req, res ) => {
    console.log( 'received webhook', req.body );
    res.sendStatus(200);
} );
app.listen( port, () => console.log( 'Node.js server started on port' + port ) );