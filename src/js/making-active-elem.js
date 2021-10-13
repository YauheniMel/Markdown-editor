function makingActiveElem(targetEl) {
  const navWrapEl = document.querySelector("nav");
  const arrLinksNavEl = navWrapEl.querySelectorAll("a");

  arrLinksNavEl.forEach((item) => {
    const targetLinkEl = targetEl.querySelector("a");

    if(item === targetLinkEl) {
      item.classList.add("active");
    } else item.classList.remove("active");
  });
}

export {makingActiveElem};
