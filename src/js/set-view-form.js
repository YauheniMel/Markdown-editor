import { showForm } from "./show-form.js";

function setViewForm(clickPosition, wrapPosition) {
  const positionX = clickPosition.x - wrapPosition.left - 10;
  const positionY = clickPosition.y - wrapPosition.top;

  document.onclick = function() {
    document.dispatchEvent(new CustomEvent("set-position", {
      detail: [positionX, positionY]
    }));
  };

  const rightX = wrapPosition.right - clickPosition.x;

  if(rightX < 485) {
    const template = `
      <div class="line-item" style="top: ${positionY}px;">
        <form navalidate action="" style="margin-left: 630px;" novalidate>
          <button type="submit" class="btn btn-outline-secondary btn-confirm-value">Готово</button>
          <button type="button" style="margin-left: 7px;" class="btn btn-outline-danger btn-delete-line">Отмена</button>
          <input required pattern=[#]{1,4}.+||[*]{2}.+[*]{2}||[~]{2}.+[~]{2}||[\\[].+[\\]][(][A-Za-z0-9.:/]+[)]||[-]{3}||[-][|]||[\\[][+]{2}.+[+]{2}[\\]]||[\\[][-]{2}.+[-]{2}[\\]]||([\\*][\\w.,:;]+)+ type="text" name="cod" style="margin-left: 7px;">
        </form>
      </div>
    `;

    showForm(template);
  } else {
    const template = `
      <div class="line-item" style="top: ${positionY}px;">
        <form novalidate action="" novalidate>
          <input required pattern=[#]{1,4}.+||[*]{2}.+[*]{2}||[~]{2}.+[~]{2}||[\\[].+[\\]][(][A-Za-z0-9.:/]+[)]||[-]{3}||[-][|]||[\\[][+]{2}.+[+]{2}[\\]]||[\\[][-]{2}.+[-]{2}[\\]]||([\\*][\\w.,:;]+)+ type="text" name="cod" style="margin-left: ${positionX}px;">
          <button type="submit" style="margin-left: 7px;" class="btn btn-outline-secondary btn-confirm-value">Готово</button>
          <button type="button" style="margin-left: 7px;" class="btn btn-outline-danger btn-delete-line">Отмена</button>
        </form>
      </div>
    `;
    showForm(template);
  }
}

export { setViewForm };
