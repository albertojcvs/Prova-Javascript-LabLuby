import '../styles/main.css';
import '../styles/header.css';
import '../styles/footer.css';
import '../styles/global.css';
import '@fortawesome/fontawesome-free/js/all'
import '@fortawesome/fontawesome-free/css/all.css'

(() => {
  window.onload = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("get", "./src/data/games.json");
    xhr.send();
    xhr.addEventListener(
      "loadend",
      () => {
        window.gamesInfo = JSON.parse(xhr.response);
      },
      false
    );
  };
})();
