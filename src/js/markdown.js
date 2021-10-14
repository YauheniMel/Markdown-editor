import { prepareElem } from "./prepare-elem.js";

class Markdown {
  template = "";
  content = "";
  indicator = "";
  constructor(value) {
    this.value = value;

    this.init();
  }

  init() {
    this.getStringValue();
  }

  getStringValue() {
    const arrRegExp = ["(?<indicator>#{1,4})(?<string>.+)", "(?<indicator>[*]{2})(?<string>.+)([*]{2})", "(?<indicator>[~]{2})(?<string>.+)([~]{2})", "\\[(?<string>.+)\\]\\((?<indicator>[A-Za-z0-9.:/]+)\\)", "(?<indicator>[-]{3})", "(?<indicator>[-][|])", "\\[(?<indicator>[+]{2})(?<string>.+)([+]{2})\\]", "\\[(?<indicator>[-]{2})(?<string>.+)([-]{2})\\]", "(^|\\b)((?<indicator>[*]{1})(?<string>[^*]+))"];

    document.addEventListener("confirm-value", function(event) {

      arrRegExp.forEach((item, index) => {
        const regExp = new RegExp(item, "gim");

        const results = event.detail.matchAll(regExp);

        if(regExp.test(event.detail)) {

          if(index !== 8) {
            for(let result of results) {
              this.indicator = result.groups.indicator;

              this.content = result.groups.string;
            }
          } else {
            const arr = Array.from(results);

            this.content = [];
            for(let i = 0; i < arr.length; i++) {
              this.content.push(`<li>${arr[i][4]}</li>`);
            }
            this.template = `<ul>${this.content.join("")}</ul>`;
          }

          if(index === 0) {
            this.template = `<h${this.indicator.length}>${this.content}</h${this.indicator.length}>`;
          } else if (index === 1) {
            this.template = `<strong>${this.content}</strong>`;
          } else if (index === 2) {
            this.template = `<strike>${this.content}</strike>`;
          } else if (index === 3) {
            this.template = `<a href="${this.indicator}" target="_blank" rel="noopener">${this.content}</a>`;
          } else if (index === 4) {
            this.template = "<hr>";
          } else if (index === 5) {
            this.template = "<br>";
          } else if (index === 6) {
            this.template = `<span class="text-success">${this.content}</span>`;
          } else if (index === 7) {
            this.template = `<span class="text-danger">${this.content}</span>`;
          }
        }
      });

      prepareElem(this.template);
    });
  }
}

export { Markdown };
