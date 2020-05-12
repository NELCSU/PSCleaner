"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showError(msg) {
    console.log(msg);
    var mv = document.getElementById("modalView");
    var mm = document.querySelector(".modal-message");
    mm.innerHTML = msg;
    mv.open = true;
    setTimeout(function () { return mv.open = false; }, 3000);
}
exports.showError = showError;
