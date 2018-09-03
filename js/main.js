var global_images = document.getElementsByTagName('img');
var global_images_valeur = new Array('img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg','img/05.jpg','img/06.jpg','img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg','img/05.jpg','img/06.jpg');
var global_data = {
  first_card_value: "",
  second_card_value: "",
  first_card_id: "",
  second_card_id: "",
  tab_id_win: []
}

function button_click(element){
  var attribut = element.id;
  var attribut_nb = parseFloat(attribut);

  if (! global_data.first_card_value) {
    global_data.first_card_value = element.getAttribute("valeur");
    global_images[attribut].setAttribute("src", global_images_valeur[attribut]);
    global_data.first_card_id = element.id;
  }
  else {
    setTimeout(function(){ compare(); }, 400);
    global_data.second_card_value =element.getAttribute("valeur");
    global_images[attribut].setAttribute("src", global_images_valeur[attribut]);
    global_data.second_card_id = element.id;
  }
}

function compare(){

  if (global_data.first_card_value == global_data.second_card_value) {
    global_data.tab_id_win.push(global_data.first_card_id);
    global_data.tab_id_win.push(global_data.second_card_id);
    console.log(global_data.tab_id_win.length);
    console.log(global_images.length);
    global_data.first_card_value = "";
    global_data.second_card_value = "";

      if (global_data.tab_id_win.length == global_images.length) {
          document.getElementById('win').style.display = "block";
        }
  }

  else {
    global_data.first_card_value = "";
    global_data.second_card_value = "";
    global_images[global_data.first_card_id].setAttribute("src", "img/img_lights.jpg");
    global_images[global_data.second_card_id].setAttribute("src", "img/img_lights.jpg");
  }
}

function restart(){
  document.location.reload(true);
}
