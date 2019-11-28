function runWithDebugger(callback, callbackArguments) {
  debugger;
  if (callbackArguments && Array.isArray(callbackArguments)) {
    callback.apply(this, callbackArguments);
  } else if (callbackArguments && !Array.isArray(callbackArguments)) {
    console.error('The second argument should be an array.');
  } else {
    callback();
  }
}
