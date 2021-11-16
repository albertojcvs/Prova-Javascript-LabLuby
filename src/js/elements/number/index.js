export function createNumberElement(value){
  if (value < 10) value = '0' + value;

  
  const element = document.createElement('div')
    element.classList.add('number');
    element.innerText = value;
  return element;
}