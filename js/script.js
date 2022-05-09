import { header } from "../js/layout.js";
import { textarea } from "../js/layout.js"



function one(event) {
  if (textarea === document.activeElement) {
    return 0
  }

  else {
    if (event.key === 'CapsLock' || event.key === 'Shift' || event.key === 'Control' || event.key === 'Alt' || event.key === 'Meta') {
      return 0
    }
    else if (event.key === 'Tab') {
      textarea.value += '    ';
      event.preventDefault();
    }
    else if (event.key === 'Enter'){
      textarea.value += '\r\n';
    }
    else if (event.key === 'ArrowUp') {textarea.value += '↑'}
    else if (event.key === 'ArrowDown') {textarea.value += '↓'}
    else if (event.key === 'ArrowLeft') {textarea.value += '←'}
    else if (event.key === 'ArrowRight') {textarea.value += '→'}
    else if (event.key === 'Backspace' || event.key === 'Delete') {
      const text = textarea.value;
      const back = text.substring(0, text.length - 1);
      textarea.value = back;
      }
    else { 
      textarea.value += event.key;
    }
  }
};



window.addEventListener('keydown', one);
