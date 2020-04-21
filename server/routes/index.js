const channelController = require('./channel');
// const messageController = require('./msgController');

const router = require('express').Router();

router.get('/channels', channelController.findAll);
router.post('/channels', channelController.create);
router.get('/channel/:id', channelController.getChannel);

  // Create a new review
  // app.post('/channel', channelController.create);


  // // Update a review with reviewId
  // app.patch('/channel/:id', controller.update);

  // // Delete a review with reviewId
  // app.delete('/channel/:id', controller.delete);


module.exports = router