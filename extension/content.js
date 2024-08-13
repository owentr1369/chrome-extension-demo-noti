/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.message === "startup") {
//     appendContent();
//   }
// });

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.message === "new_window") {
//     handleNewWindowEvent();
//   }
//   sendResponse({ status: "received" });
// });

// function handleNewWindowEvent() {
//   appendContent("A new window has been opened!");
// }

const appendContent = () => {
  const body = document.querySelector("body");
  const fixedElement = document.createElement("div");
  const imageElement = document.createElement("img");
  imageElement.src = "https://media.tenor.com/z168S__FUKcAAAAi/duolingo.gif";
  imageElement.style.width = "300px";
  imageElement.style.position = "relative";
  imageElement.style.right = "-60px";
  fixedElement.style.position = "fixed";
  fixedElement.style.bottom = "0";
  fixedElement.style.right = "0";
  fixedElement.style.zIndex = "9999";
  fixedElement.appendChild(imageElement);
  const dialogBox = document.createElement("div");
  dialogBox.style.position = "fixed";
  dialogBox.style.bottom = "200px";
  dialogBox.style.right = "10px";
  dialogBox.style.padding = "5px 20px";
  dialogBox.style.borderRadius = "10px";
  dialogBox.style.border = "1px solid black";
  dialogBox.style.backgroundColor = "#54cc04";
  dialogBox.style.color = "#fff";
  dialogBox.style.zIndex = "9999";
  const dialogText = document.createElement("p");
  dialogText.textContent = "Hôm nay bạn đã học tiếng anh chưa?";
  dialogText.style.textAlign = "center";
  dialogText.style.margin = 0;
  dialogText.style.fontFamily = "Arial, sans-serif";
  dialogText.style.fontSize = "18px";
  const dialogAnswers = document.createElement("div");
  dialogAnswers.style.display = "flex";
  dialogAnswers.style.justifyContent = "center";
  dialogAnswers.style.marginTop = "10px";
  dialogAnswers.style.gap = "10px";
  const yesButton = document.createElement("button");
  yesButton.textContent = "Có";
  yesButton.style.backgroundColor = "#fff";
  yesButton.style.color = "#54cc04";
  yesButton.style.border = "1px solid #54cc04";
  yesButton.style.borderRadius = "5px";
  yesButton.style.padding = "5px 10px";
  yesButton.style.cursor = "pointer";
  yesButton.addEventListener("click", () => {
    alert("Chúc mừng bạn đã học tiếng anh");
    body.removeChild(fixedElement);
  });
  const noButton = document.createElement("button");
  noButton.textContent = "Chưa";
  noButton.style.backgroundColor = "#fff";
  noButton.style.color = "#54cc04";
  noButton.style.border = "1px solid #54cc04";
  noButton.style.borderRadius = "5px";
  noButton.style.padding = "5px 10px";
  noButton.style.cursor = "pointer";
  noButton.addEventListener("click", () => {
    alert("Hãy nhanh chóng học tiếng anh nhé");
    body.removeChild(fixedElement);
  });
  dialogAnswers.appendChild(yesButton);
  dialogAnswers.appendChild(noButton);
  dialogBox.appendChild(dialogText);
  dialogBox.appendChild(dialogAnswers);
  fixedElement.appendChild(dialogBox);
  body.appendChild(fixedElement);
};
setTimeout(() => {
  appendContent();
}, 3000);
/******/ })()
;
//# sourceMappingURL=content.js.map