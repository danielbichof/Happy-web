
//criate mapi
const map = L.map('mapid').setView([-25.4339314,-49.2982778], 12);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//criate icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,69],
})

let marker
//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    //remove icon
    marker && map.removeLayer(marker)

    //add icon Layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})


// adicionar o campo de fotos
function addPhotoField (){
    //pegar o container de fotos #images
    const container = document.querySelector('#images');

    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');

    //clonar a ultima imagem da ultima imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    //verificar se o campo está vazio, se sim, não adicionar ao container de imagens.
    const input = newFieldContainer.children[0]
    if (input.value == "") {
        return
    }

    // limpar o campo antes de adicionar ao container de imagens.
    input.value = ""
    
    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer);

}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload');
    if(fieldsContainer.length < 2){
        //limpar o calor do campo
        span.parentNode.children[0].value = ""
        return;
    }
    span.parentNode.remove();
}

// selecionar o sim/não
function toggleSelect(event){
    //retirar a class .active (dos botões)
    document.querySelectorAll('.button-select button')
    .forEach( button => button.classList.remove('active'))

    //colocar a class.active nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o input hidden
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value

}

function validate(event){
    //validar se lat e lng estão preenchidos
    const needsLatAndLng = true;
    if (needsLatAndLng) {
        
    }
}