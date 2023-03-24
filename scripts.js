const linksList = [
    {
        normal_text: "¿Eres estudiante de la UAO?", 
        bold_text: "¡Haz parte de la comunidad en WhatsApp!",
        class: "rojo",
        url: "https://forms.gle/A6EFTocGgDbKwqHw6"
    },
    {
        normal_text: "¿Quieres dar una charla?", 
        bold_text: "¡Únete a nuestro Call for speakers!",
        class: "azul",
        url: "https://forms.gle/4hs4GkYaLwEkRhwv8"
    },
    {
        normal_text: "¿Tienes alguna sugerencia?", 
        bold_text: "¡Déjala aquí!",
        class: "verde",
        url: "https://forms.gle/mH3mwfDEngnGuStY9"
    },

];

const linksContainer = document.getElementById("main");

function createBtn(linksList) {
    //Creando el div que contendrá los botones
    const divButtons = document.createElement("div");
    divButtons.classList.add("buttons");
    linksList.map((item) => {
        //Creando los botones
        const itemDivs = document.createElement("div");
        itemDivs.classList.add("boton", item.class);
        //Creando el salto de linea
        const br = document.createElement("br");

        //Creando la etiqueta <a> junto con sus atributos
        const enlace = document.createElement("a");
        enlace.target = "_blank";
        enlace.href = item.url;
        enlace.textContent = item.normal_text;
        const br_a = document.createElement("br");
        //Creando la etiqueta <b> para el texto en negrita
        const negrita = document.createElement("b");
        negrita.textContent = item.bold_text;

        divButtons.appendChild(itemDivs);
        divButtons.appendChild(br);
        itemDivs.appendChild(enlace);
        enlace.appendChild(br_a);
        enlace.appendChild(negrita);
    });
    linksContainer.appendChild(divButtons);

}
createBtn(linksList);









//Usando funciones
function alert_function(data) {
    alert(data);
    console.log("Este es el texto: " + data);
}
