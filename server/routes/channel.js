const express = require('express');
const router = express.Router();
// const router = express.Router();
const Channel = require('../../database/models/channel');
const channelController = {};

channelController.findAll = (req, res, next) => {
  Channel.find({})
    .then(data => data ? res.json(data) : res.send("nodata"))
    .catch(next)
};

channelController.getChannel = (req, res, next) => {
  const id = req.params.id;
  Channel.find({}, {_id: id})
    .then(data => data ? res.json(data) : res.send("nodata"))
    .catch(next)
};

channelController.create = (req, res, next) => {
  console.log('here', req.body);
  if(req.body.title && req.body.owner){
    Channel.create(req.body)
      .then(data => res.json(data))
      .catch(next)
  } else {
    res.json({
      error: "Needs more channel info"
    })
  }
}

channelController.deleteChannel = (req, res, next) => {
  Channel.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
};

module.exports = channelController;