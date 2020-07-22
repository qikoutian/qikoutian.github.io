// 1. Code runs as you type: edit message
let msg = 'hello world'

// 2. Files import automatically: uncomment this
// msg = capitalize(msg)

$('#header')
  .html(msg)
  // 3. Smart autocomplete: type .fadeIn('slow')
  // after .fadeOut('slow')
  .fadeOut(1000)
  
console.log({ myMessage: msg })

var button = document.createElement("button");
button.innerHTML = "Do Something";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("did something");
});