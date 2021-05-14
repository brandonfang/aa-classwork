
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  let pEle = document.createElement('p');
  pEle.innerHTML = string;
  htmlElement.append(pEle);
};

htmlGenerator('Party Time.', partyHeader);
