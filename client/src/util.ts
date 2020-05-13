/**
 * Displays error message to user
 * @param msg - message to display
 */
export function showError(msg: string) {
  console.log(msg);
  const mv = document.getElementById("modalView") as any;
  const mm = document.querySelector(".modal-message") as HTMLElement;
  mm.innerHTML = msg;
  mv.open = true;
  setTimeout(() => mv.open = false, 3000);
}
