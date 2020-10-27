const options = {
      dragging: false,
      touchZoom: false,
      doubleClickZoom: false,
      scrollwheelZoom: false,
      zoomControl: false,
      
}

//het values from html
const lat = document.querySelector('span[data-lat]',).dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//criate mapi
const map = L.map('mapid', options).setView([-25.4339314,-49.2982778], 12);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//criate icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,69],
    popupAnchor: [170, 2]
})


//create and add marker

L.marker([lat, lng], {icon})
.addTo(map)

// image gallery

function selectImage(event) {
    const button = event.currentTarget

    //remover todas as classes .active
    const buttons = document.querySelectorAll('.images button')
    console.log(buttons)

    buttons.forEach(removeActiveClass)
    function removeActiveClass(button){
        button.classList.remove('active')
    }
    //selecionar a img clicada
    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-datails > img')

    //atualizar o container de imagem
    imageContainer.src = image.src
    //adicionar a classe .active para o botão clicado
    button.classList.add('active')
}