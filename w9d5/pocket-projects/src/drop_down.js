
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

const dogLinkCreator = (dogs) => {
  let dogLinks = [];

  Object.entries(dogs).forEach((dog) => {
    
    const [key, value] = dog;
    let liEle = document.createElement('li');
    liEle.classList.add('dog-link');
    let aEle = document.createElement('a');
    aEle.innerHTML = key;
    aEle.setAttribute('href', value);
    liEle.append(aEle);
    dogLinks.push(liEle);
  });
};

