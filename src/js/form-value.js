class FormValue {
  constructor(form) {
    this.form = form;

    this.init();
  }

  init() {
    if(this.form) {
      this.form.addEventListener("submit", this.handleSubmitGetFormValue());
    }
  }

  handleSubmitGetFormValue() {
    const inputEl = this.form.querySelector("input");

    const formValue = new FormData(this.form);

    document.dispatchEvent(new CustomEvent("check-validation", {
      detail: { value: formValue, input: inputEl }
    }));
  }
}

export { FormValue };
