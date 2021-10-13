import {ClassValueInstaller} from "./class-value-installer.js";

function changeViewWrapPreview(btn) {
  const classInstall = new ClassValueInstaller;
  const wrapPreviewEl = document.querySelector(".wrap-preview");

  btn.addEventListener("click", () => {
    const useEl = btn.querySelector("use");
    if(useEl.getAttribute("xlink:href") === "#iconLarge") {
      useEl.setAttribute("xlink:href", "#iconSmall");

      classInstall.buildLargWrap(wrapPreviewEl);
    } else {
      useEl.setAttribute("xlink:href", "#iconLarge");

      classInstall.buildSmallWrap(wrapPreviewEl);
    }
  });
}

export {changeViewWrapPreview};
