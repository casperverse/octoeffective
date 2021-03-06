





var plugin = function(options) {
var seneca = this;
/*** Sends an email using a template email.
*/
seneca.add({area: "email", action: "send", template: "*"},
function(args, done) {
// TODO: More code to come.
});
/**
* Sends an email including the content.
*/
seneca.add({area: "email", action: "send"}, function(args, done) {
// TODO: More code to come.
});
};





var mandrillClient = new mandrill.Mandrill("<YOUR-KEY-HERE>");
mandrillClient.users.info({}, function(result){
console.log(result);
}, function(e){
console.log(e);
});




/**
* Sends an email including the content.
*/
seneca.add({area: "email", action: "send"}, function(args, done)
{
console.log(args);
var message = {
"html": args.content,
"subject": args.subject,
"to": [{
"email": args.to,
"name": args.toName,
"type": "to"
}],
"from_email": "info@micromerce.com",
"from_name": "Micromerce"
}
mandrillClient.messages.send({"message": message},
function(result) {
done(null, {status: result.status});
}, function(e) {
done({code: e.name}, null);
});
});



/**
* Sends an email using a template email.
*/
seneca.add({area: "email", action: "send", template: "*"},
function(args, done) {
console.log("sending");
var message = {
"subject": args.subject,
"to": [{
"email": args.to,
"name": args.toName,
"type": "to"
}],
"from_email": "info@micromerce.com",
"from_name": "Micromerce",
"global_merge_vars": args.vars,
}
mandrillClient.messages.sendTemplate(
{"template_name": args.template, "template_content": {},
"message": message},
function(result) {
done(null, {status: result.status});
}, function(e) {
done({code: e.name}, null);
});
});



/**
* Sends an email including the content.
*/
seneca.add({area: "email", action: "send", cc: "*"},
function(args, done) {
var message = {
"html": args.content,
"subject": args.subject,
"to": [{
"email": args.to,
"name": args.toName,
"type": "to"
},{
"email": args.cc,
"name": args.ccName,
"type": "cc"
}],
"from_email": "info@micromerce.com",
"from_name": "Micromerce"
}
mandrillClient.messages.send({"message": message},
function(result) {
done(null, {status: result.status});
}, function(e) {
done({code: e.name}, null);
});
});


Here is the package.json for the e-mailer microservice:
{
"name": "emailing",
"version": "1.0.0",
"description": "Emailing sub-system",
"main": "index.js",
"keywords": [
"microservices",
"emailing"
],
"author": "David Gonzalez",
"license": "ISC",
"dependencies": {
"mandrill-api": "^1.0.45",
"seneca": "^0.8.0"
}
}
