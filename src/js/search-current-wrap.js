import { choiceWrapElem } from "./choice-wrap-elem.js";
import { makingActiveElem } from "./making-active-elem.js";

function searchCurrentWrap() {

  document.addEventListener("click", (event) => {
    const targetEl = event.target;
    const targetNavEl = targetEl.closest(".nav-item");

    const wrapHelpEl = document.querySelector(".wrap-help");
    const wrapMarkdownEl = document.querySelector(".wrap-markdown");
    const wrapPreviewEl = document.querySelector(".wrap-preview");
    const arrElements = [wrapHelpEl, wrapMarkdownEl, wrapPreviewEl];

    if(targetNavEl) {
      makingActiveElem(targetNavEl);

      if(targetNavEl.classList.contains("nav-help")) {
        choiceWrapElem(arrElements, "wrap-help");
      } else if(targetNavEl.classList.contains("nav-markdown")) {
        choiceWrapElem(arrElements, "wrap-markdown");
      } else choiceWrapElem(arrElements, "wrap-preview");
    }
  });
}

export { searchCurrentWrap };
