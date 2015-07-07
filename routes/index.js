var express = require('express');
var router = express.Router();

//Welcome page
router.get('/welcome', function(req, res) {
  res.send("  __    __     _ \n / / /\\ \\ \\___| | ___ ___  _ __ ___   ___ \n \\ \\/  \\/ / _ \\ |/ __/ _ \\| '_ ` _ \\ / _ \\  \n  \\  /\\  /  __/ | (_| (_) | | | | | |  __/  \n   \\/  \\/ \\___|_|\\___\\___/|_| |_| |_|\\___|\n\nYou've trespassed on the API Temple. Prepare to die, or be tickled by lolcatz or something... I am Reginald X, your assistant for the road ahead, but just call me Regex or Reggie. You can always ask for help by calling me at /regex . See you on July 29th!\n\n\n");
});

//This is Reggie the assistant
router.get('/regex', function(req, res) {
  res.send("\n\nI'm Reggie, your faithful assistant. Stay tuned for more info! \n\n༼ つ ◕_◕ ༽つ\n\n");
});

module.exports = router;
