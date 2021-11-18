export function createGameLink(props, isFirtsGameLink = false) {
  const element = document.createElement("li");
  element.innerHTML = `<input type="radio" name="gameOption" id="${props.name}Option" ${isFirtsGameLink ? 'checked':''}>
                       <label for="${props.name}Option" class="game-link">${props.name}</label>`;

  const label = element.querySelector("label");
  label.style.borderColor = props.color;
  label.style.color = props.color;
  const input = element.querySelector("input");

  input.setAttribute("isChecked", false);
  input.onchange = () => {
    Array.from(document.querySelectorAll("label")).forEach((labelElement) => {
      const color = labelElement.style.borderColor;
      labelElement.style.backgroundColor = "#F7F7F7";
      labelElement.style.color = color;
      console.log(color);
      input.removeAttribute('checked');
    });
    label.style.backgroundColor = props.color;
    label.style.color = "white";
  };

  if (isFirtsGameLink) {
    label.style.backgroundColor = props.color;
    label.style.color = "white";
  }

  return element;
}
