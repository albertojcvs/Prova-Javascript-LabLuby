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
