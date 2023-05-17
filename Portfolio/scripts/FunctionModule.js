const Functions = {};

function addToModule(funcName, func) {
  Functions[funcName] = func;
}
function TransportToPage(button) {
  if (!button.id.includes("AboutMe")) {
    document.location = `/Portfolio/pages/${button.id}.html`;
  } else {
    document.location = `/Portfolio/pages/GeneralExp.html`;
  }
}
function onClick() {
  if (this.id !== null || this.id !== "") {
    var button = document.getElementById(this.id);

    if (button.className.includes("TransportTo")) {
      TransportToPage(button);
    }
  }
}

addToModule("onClick", onClick);
addToModule("TransportToPage", TransportToPage);

export { Functions };
