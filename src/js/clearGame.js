export function clearGame() {
    const numbersElementSelected =
       Array.from(document.querySelectorAll(".number[numberSelected]"));

   numbersElementSelected.forEach(numberElement => {
       numberElement.removeAttribute("numberSelected");
       numberElement.style.backgroundColor = '#ADC0C4';
   })

}

