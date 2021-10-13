function showElem(obj) {

  const wrapPreviewEl = document.querySelector(".wrap-preview");
  const wrapNewEl = document.createElement("div");

  wrapNewEl.innerHTML = obj.template;

  wrapNewEl.style.cssText = `
    position: absolute;
    top: ${obj.positionY}px;
    left: ${obj.positionX}px;
  `;

  wrapPreviewEl.append(wrapNewEl);
}

export {showElem};
