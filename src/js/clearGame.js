export function clearGame() {
    const numbersElementSelected =
       Array.from(document.getElementsByClassName("number-selected"));

    for( const numberElement of numbersElementSelected){
        
    numberElement.classList.remove('number-selected');
    }

}

