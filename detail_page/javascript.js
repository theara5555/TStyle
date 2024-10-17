tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {},
  },
};
function changeImage(src) {
  document.getElementById("mainImage").src = src;
}
kofiWidgetOverlay.draw("mohamedghulam", {
  type: "floating-chat",
  "floating-chat.donateButton.text": "Support me",
  "floating-chat.donateButton.background-color": "#323842",
  "floating-chat.donateButton.text-color": "#fff",
});
