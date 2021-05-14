
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  // let pEle = document.createElement('p');
  // pEle.innerHTML = string;
  // if (Array.from(htmlElement.children).length > 0) {
  //   htmlElement.innerHTML = '';
  // }
  // htmlElement.append(pEle);
  
  htmlElement.innerHTML = `<p>${string}</p>`;
};

// htmlGenerator('Party Time.', partyHeader);
