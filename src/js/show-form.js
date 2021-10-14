function showForm(template) {
  const wrapMarkdownEl = document.querySelector(".wrap-markdown");

  wrapMarkdownEl.innerHTML += template;
}

export { showForm };



