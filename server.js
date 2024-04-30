const express = require('express');
const { exec } = require('child_process');
const data = require('./GaSchedule.json');

const app = express();
const port = 300;

app.use(express.json());

app.post('/schedule', (req, res) => {
    exec(`python ./ConsoleApp.py '${JSON.stringify(data)}'`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).send(stderr);
        }
        res.send(stdout);
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
