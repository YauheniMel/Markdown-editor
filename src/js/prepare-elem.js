import { showElem } from "./show-elem.js";

function prepareElem(data) {

  document.addEventListener("set-position", function(event) {

    const valuesObj = {
      template:data,
      positionX: event.detail[0],
      positionY: event.detail[1]
    };

    showElem(valuesObj);
  }, { once: true });
}

export { prepareElem };
