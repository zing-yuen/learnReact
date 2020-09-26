function addElement() {
    const h1 = document.createElement("h1");
    const title = document.createTextNode("Learn React");

    h1.appendChild(title);

    const currentDiv = document.getElementById("app");

    document.body.insertBefore(h1, currentDiv);
}