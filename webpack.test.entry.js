//var context = require.context("./src", true, /__test__\/\S+\.js$/);
var context = require.context("./src", true, /.*\.spec\.js$/);
context.keys().forEach(context);