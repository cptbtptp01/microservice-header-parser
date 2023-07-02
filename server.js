const express = require('express');
const app = express();
const port = 3000;

// define route
// parsing request headers
app.get('/api/whoami', (req, res) => {
    // parsing info
    const ipAddress = req.ip;
    const language = req.headers['accept-language'];
    const software = req.headers['user-agent'];

    // write into json
    res.json({
        ipaddress: ipAddress,
        language: language,
        software: software
    });
})

// server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})