import {setViewForm} from "./set-view-form.js";
import {FormValue} from "./form-value.js";

class EventsManager {
  constructor() {

    this.init();
  }

  init() {
    document.addEventListener("click", (event) => {
      event.preventDefault();

      const targetEl = event.target;

      const position = {
        x: event.clientX,
        y: event.clientY
      };

      this.handleClickWrapMarkdownEl(targetEl, position);
    });
  }

  handleClickWrapMarkdownEl(targetEl, position) {
    const wrapMarkdownEl = targetEl.closest(".wrap-markdown");
    const btnConfirmValueEl = targetEl.closest(".btn-confirm-value");
    const btnDeleteLineEl = targetEl.closest(".btn-delete-line");
    const lineItemEl = targetEl.closest(".line-item");

    if(wrapMarkdownEl && !lineItemEl) {
      const objPositionEl = wrapMarkdownEl.getBoundingClientRect();

      setViewForm(position, objPositionEl);
    } else if(btnConfirmValueEl) {
      this.handleClickBtnConfirmValue(targetEl);

    } else if(btnDeleteLineEl) {
      document.dispatchEvent(new CustomEvent("delete-elem", {
        detail: lineItemEl
      }));
    }
  }

  handleClickBtnConfirmValue(targetEl) {
    const formEl = targetEl.closest("form");

    new FormValue(formEl);
  }
}

export {EventsManager};
