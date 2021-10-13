function choiceWrapElem (elements, classvalue) {
  elements.forEach((item) => {
    if(item.classList.contains(classvalue)) {
      item.classList.remove("hide");
    } else item.classList.add("hide");
  });
}

export {choiceWrapElem};
