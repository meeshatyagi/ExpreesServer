const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
res.statusCode = 200;
res.setHeader('Content-Type','text/plain');
next();
})
.get((req,res,next) => {
    res.end('Sending the LEADERS at /leader');
})
.post((req,res,next) => {
    res.end('Will add Leader: ' + req.body.name + ' and description ' + req.body.description);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('PUT is not supported! at /leader');
})
.delete((req,res,next) => {
    res.end('Deleting all the LEADERS')
});

leaderRouter.route('/:leaderId')
.all((req,res,next) => {
res.statusCode = 200;
res.setHeader('Content-Type','text/plain');
next();
})
.get((req,res,next) => {
    res.end('Sending the LEADER: ' + req.params.leaderId);
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end('POST is not supported! at /leader/' + req.params.leaderId );
})
.put((req,res,next) => {
    res.end('Will update the Leader with name: ' + req.body.name + ' and description: ' + req.body.description);
})
.delete((req,res,next) => {
    res.end('Deleting the LEADER ' + req.params.leaderId);
});

module.exports = leaderRouter;