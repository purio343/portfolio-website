function embeddingInformation() {
  fetch("info.json")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("title").innerHTML = data.title;
      document.getElementById("name").innerHTML = data.name;
      document.getElementById("email").innerHTML = data.email;
    });
}

embeddingInformation();
