var ajax;
function carregarImagens() {
  ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function () {
    if ((ajax.readyState == 4) && (ajax.status == 200)) {
      var data = JSON.parse(ajax.responseText);
      var imagesDiv = document.getElementById("images");      
      data.animals.forEach(function(randomAnimal) {
        var randomAnimal = data.animals[Math.floor(Math.random() * data.animals.length)];
        var img = document.createElement("img");
        img.src = randomAnimal.imagemUrl;
        img.alt = randomAnimal.name;
        imagesDiv.appendChild(img);
      });
    }
  };
  ajax.open("GET", "externo.json", true);
  ajax.send();
}
window.onscroll = function(ev) {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    carregarImagens();
  }
};
