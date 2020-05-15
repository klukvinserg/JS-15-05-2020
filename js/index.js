function getName() {
  if (event.keyCode >= 48 && event.keyCode <= 57) {
    event.preventDefault();
    return false;
  }
}
