
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  // let pEle = document.createElement('p');
  // pEle.innerHTML = string;
  htmlElement.innerHTML = `<p>${string}</p>`;
};

// htmlGenerator('Party Time.', partyHeader);
