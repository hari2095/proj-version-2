/*var OpenTok = require('opentok'),
opentok = new OpenTok(45250532,'54afc8f4b42cbec283a979313eea14ea398fb221');
*/

var express = require('express');
var app = express();

var http = require('http');
var httpServer = http.Server(app);

//app.use(express.static(__dirname+'/node-js-getting-started'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/servercode.html');
});
app.listen(8080);

/*app.get(' ', function(request, response){
response.sendfile('sample.html');
});
*/

/*
// Create a session that will attempt to transmit streams directly between
// clients. If clients cannot connect, the session uses the OpenTok TURN server:
opentok.createSession(function(err, session) {
if (err) return console.log(err);
// save the sessionId
//db.save('session', session.sessionId, done);
// Genrate a Token from a session object (returned from createSession)
token = session.generateToken();
console.log("Token created");
console.log(token);


session.connect(token, function (error) {
        if (session.capabilities.publish == 1) {
            session.publish(publisher);
        } else {
            console.log("You cannot publish an audio-video stream.");
        }
    });

/*opentok.startArchive(session.sessionId, { name: 'Important Presentation' }, function(err, archive) {
  if (err) {
    return console.log(err);
  } else {
    // The id property is useful to save off into a database
    console.log("new archive:" + archive.id);
  }
});*/



/*
var publisher;
var targetElement = 'publisherContainer';
publisher = OpenTok.initPublisher(targetElement, null, function(error) {
if (error) {
// The client cannot publish.
// You may want to notify the user.
} else {
console.log('Publisher initialized.');
}
});


}); 
*/

