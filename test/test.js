var arc = require('../arc');
var log = arc.log;
log.error = arc.error;

log("bar", "error");
log("bar", "FATAL");
log("baz", "WARN");
log.error("oh noes it errored!", new Error("Im ded"));
