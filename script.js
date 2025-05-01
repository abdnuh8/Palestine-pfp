
function copyMessage() {
  const message = "Palestinians are being killed with our tax dollars. Stop the genocide. Ceasefire NOW. #FreePalestine";
  navigator.clipboard.writeText(message).then(() => {
    const copiedText = document.getElementById("copiedText");
    copiedText.classList.remove("hidden");
    setTimeout(() => copiedText.classList.add("hidden"), 2000);
  });
}
