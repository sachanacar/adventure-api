var express = require('express');
var router = express.Router();
var url = require('url');

var inventory = ['empty', 'empty', 'empty', 'empty', 'empty'];
var i = inventory.length;
//Welcome page
router.get('/welcome', function(req, res) {
  res.send("======================================\n\n  __    __     _ \n / / /\\ \\ \\___| | ___ ___  _ __ ___   ___ \n \\ \\/  \\/ / _ \\ |/ __/ _ \\| '_ ` _ \\ / _ \\  \n  \\  /\\  /  __/ | (_| (_) | | | | | |  __/  \n   \\/  \\/ \\___|_|\\___\\___/|_| |_| |_|\\___|\n\nYou've trespassed on the API Temple. Prepare to die, or be tickled by lolcatz or something... I am Reginald X, your assistant for the road ahead, but just call me Regex or Reggie. You can always ask for help by calling me at /regex . Start the adventure by entering the temple (/start)\n\n\n======================================\n");
});

//This is Reggie the assistant
router.get('/regex', function(req, res) {
  res.send("======================================\n\nI'm Reggie, your faithful assistant. \n\n༼ つ ◕_◕ ༽つ\n\n\n\nInventory:\n==========\n\nYou can use your inventory items by passing them as parameters in a request! (For example, unlocking a door using an access code you picked up becomes: '../door/unlock?code=xxx')\n\n- "+inventory[0]+"\n- "+inventory[1]+"\n- "+inventory[2]+"\n- "+inventory[3]+"\n- "+inventory[4]+"\n\n======================================\n");
});

//Entrance!
router.get('/start', function(req, res) {
  	 res.send("======================================\n\n\n                                  /   \\ \n _                        )      ((   ))     (\n(@)                      /|\\      ))_((     /|\\ \n|-|                     / | \\    (/\\|/\\)   / | \\                      (@)\n| | -------------------/--|-voV---\\`|'/--Vov-|--\\---------------------|-|\n|-|                         '^`   (o o)  '^`                          | |\n| |                               `\\Y/'                               |-|\n|-|                                                                   | |\n| |    You have now entered the temple, you will have to make         |-|\n|-|    decisions that could be fatal at any moment. You have one      | |\n| |    to make now: /west-room or /east-room ?                        |-|\n|_|___________________________________________________________________| |\n(@)              l   /\\ /         ( (       \\ /\\   l                `\\|-|\n                 l /   V           \\ \\       V   \\ l                  (@)\n                 l/                _) )_          \\I\n                                   `\\ /\n\n\n======================================\n")});

//Hall

//West Room
router.get('/west-room', function(req, res) {
var wurl = req.url;
var parsedUrl = url.parse(wurl, true, true);
var torch = parsedUrl.query.torch;
console.log(torch);
if (torch == 'true'){
  var index = inventory.indexOf('empty');
  var codestring = inventory.indexOf('code:678');
  if (index !== -1 && codestring ==-1) {
    inventory[index] = 'code:678';
  }
  res.send("======================================\nYou lit up your torch.\n\nOh! seems like there's something in the corner.\n\nIt's a piece of paper with a code on it: '687'. Let's keep it for later...\n\n[Code stored in your inventory!]\n\n======================================\n");
}else{
  res.send("======================================\n\nYou've entered the West Room. It's dark in here...\n\n\n༼ つ ◕_◕ ༽つ\n\n**Reggie**: use your torch! (/west-room?torch=true)\n\n======================================\n");
}
});

//East Room

module.exports = router;





				  

// //Big Boss
//                                                  /===-_---~~~~~~~~~------____
//                                                 |===-~___                _,-'
//                  -==\\                         `//~\\   ~~~~`---.___.-~~
//              ______-==|                         | |  \\           _-~`
//        __--~~~  ,-/-==\\                        | |   `\        ,'
//     _-~       /'    |  \\                      / /      \      /
//   .'        /       |   \\                   /' /        \   /'
//  /  ____  /         |    \`\.__/-~~ ~ \ _ _/'  /          \/'
// /-'~    ~~~~~---__  |     ~-/~         ( )   /'        _--~`
//                   \_|      /        _)   ;  ),   __--~~
//                     '~~--_/      _-~/-  / \   '-~ \
//                    {\__--_/}    / \\_>- )<__\      \
//                    /'   (_/  _-~  | |__>--<__|      | 
//                   |0  0 _/) )-~     | |__>--<__|      |
//                   / /~ ,_/       / /__>---<__/      |  
//                  o o _//        /-~_>---<__-~      /
//                  (^(~          /~_>---<__-      _-~              
//                 ,/|           /__>--<__/     _-~                 
//              ,//('(          |__>--<__|     /                  .----_ 
//             ( ( '))          |__>--<__|    |                 /' _---_~\
//          `-)) )) (           |__>--<__|    |               /'  /     ~\`\
//         ,/,'//( (             \__>--<__\    \            /'  //        ||
//       ,( ( ((, ))              ~-__>--<_~-_  ~--____---~' _/'/        /'
//     `~/  )` ) ,/|                 ~-_~>--<_/-__       __-~ _/ 
//   ._-~//( )/ )) `                    ~~-'_/_/ /~~~~~~~__--~ 
//    ;'( ')/ ,)(                              ~~~~~~~~~~ 
//   ' ') '( (/
//     '   '  `   