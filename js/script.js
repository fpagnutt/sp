const fullImgBox = document.getElementById("fullImgBox")
const fullImg = document.getElementById("fullImg")

function closeImg(){
    fullImgBox.style.display = "none";
}

function openFullImg(id){
    fullImgBox.style.display = "flex";
    fullImg.src = id;
}

/*function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(-46.1580854,-13.0079101),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }
*/
function cargarMenu(){
    for(const p of tradizionali){
        const contenedor = document.getElementById("sapori-trad")
        contenedor.innerHTML += ` <div style="text-align: center; font-family: 'Cairo', sans-serif;" ><span class="gusti">${p.gust}</span> (${p.desc})</div>
                                      
                         `
    }
    for(const p of doc){
        const contenedor2 = document.getElementById("sapori-doc")
        contenedor2.innerHTML += ` <div style="text-align: center; font-family: 'Cairo', sans-serif;" ><span class="gusti">${p.gust}</span> (${p.desc})</div>
                                      
                         `
    }
    for(const p of speciali){
        const contenedor2 = document.getElementById("sapori-speciali")
        contenedor2.innerHTML += ` <div style="text-align: center; font-family: 'Cairo', sans-serif;" ><span class="gusti">${p.gust}</span> (${p.desc})</div>
                                      
                         `
    }
    for(const p of sfiziose){
        const contenedor2 = document.getElementById("sapori-sfiziose")
        contenedor2.innerHTML += ` <div style="text-align: center; font-family: 'Cairo', sans-serif;" ><span class="gusti">${p.gust}</span> (${p.desc})</div>
                                      
                         `
    }
}


cargarMenu()



