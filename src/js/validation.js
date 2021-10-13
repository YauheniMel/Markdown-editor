class Validation {
  constructor() {

    this.init();
  }

  init() {
    document.addEventListener("check-validation", function(event) {
      const checkValidFormValue = event.detail.input.checkValidity();
      if(checkValidFormValue) {
        event.detail.value.forEach((value) => {
          console.log(value);
          document.dispatchEvent(new CustomEvent("confirm-value", {
            detail: value
          }));
        });
      }
    });
  }
}

export {Validation};
