
export const header = document.createElement('header');
export const textarea = document.createElement('textarea');
export const divKeyboardBody = document.createElement('div');

export const firstDiv = document.createElement('div');
  for (let i = 0; i <= 13; i++) {
    let smallKeyFirst = document.createElement('div');
    firstDiv.append(smallKeyFirst);
    smallKeyFirst.id = `firstKey${i}`;
  }

  export const secondDiv = document.createElement('div');
  for ( let i = 0; i <= 14; i++) {
    let smallKeySecond = document.createElement('div');
    secondDiv.append(smallKeySecond);
    smallKeySecond.id = `secondKey${i}`;
  }

  const thirdDiv = document.createElement('div');
  for (let i = 0; i <= 12; i++) {
    let smallKeyThird = document.createElement('div');
    thirdDiv.append(smallKeyThird);
    smallKeyThird.id = `thirdKey${i}`;
  }

  const fourthDiv = document.createElement('div');
  for (let i = 0; i <= 12; i++) {
    let smallKeyfourth = document.createElement('div');
    fourthDiv.append(smallKeyfourth);
    smallKeyfourth.id = `fourthKey${i}`;
  }

  const fifthDiv = document.createElement('div');
  for (let i = 0; i <= 8; i++) {
    let smallKeyfifth = document.createElement('div');
    fifthDiv.append(smallKeyfifth);
    smallKeyfifth.id = `fifthKey${i}`;
  }


header.innerHTML = 'RSSchool Virtual Keyboard';
divKeyboardBody.className = 'keyboardBody';
firstDiv.className = 'firstDiv';
secondDiv.className = 'secondDiv';
thirdDiv.className = 'thirdDiv';
fourthDiv.className = 'fourthDiv';
fifthDiv.className = 'fifthDiv';


document.body.append(header);
document.body.append(textarea);
document.body.append(divKeyboardBody);
divKeyboardBody.append(firstDiv);
divKeyboardBody.append(secondDiv);
divKeyboardBody.append(thirdDiv);
divKeyboardBody.append(fourthDiv);
divKeyboardBody.append(fifthDiv);