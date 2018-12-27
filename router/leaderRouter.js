const express = require('express');
const bodyParser = require ('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req, res, next) => {
  res.statusCode =200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req, res, next) =>{
  res.end('Will send all the leaderes to you');
})
.post((req,res,next) => {
  res.end('Will add the leader ' + req.body.name
  + ' with details ' + req.body.description);
})
.put((req,res,next) => {
  res.statusCode = 403;
  res.end('PUT operation is not supported on /leader');
})
.delete((req,res,next) => {
  res.end('Delete all the leader');
});
leaderRouter.route('/:leaderId')
.get((req, res, next) =>{
  res.end('Will send the leader to you '
+ req.params.leaderId + ' to you.');
})
.post((req,res,next) => {
  res.statusCode = 403;
  res.end('POST operation is not supported on /leader');
})
.put((req,res,next) => {
res.write('Update the leader: ' + req.params.leaderId + '\n');
  res.end('Will update the leader ' + req.body.name +
'with details: ' + req.body.description);
})
.delete((req,res,next) => {
  res.end('Delete the leaderID :' + req.params.leaderId);
});

module.exports = leaderRouter;
