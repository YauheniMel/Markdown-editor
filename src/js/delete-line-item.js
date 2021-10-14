function deleteLineItem() {
  document.addEventListener("delete-elem", function(event) {
    event.detail.remove();
  });
}

export { deleteLineItem };
