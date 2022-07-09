// PLAYER:
const input_username = document.querySelector("#username");
const button_start = document.querySelector("#start");
const div_game = document.querySelector("#game");
let user = null;
let time_played=null
let time_playedFinish=null

input_username.addEventListener("keyup", function () {
    button_start.disabled = this.value == "";
});

button_start.addEventListener("click", function () {
  time_played=null;
    this.parentElement.querySelector(
        "h2"
    ).innerText += `Hello ${input_username.value}, let's play`;
    this.parentElement.querySelector("h2").style.display = "block";
    
    // creamos el user:
    user = new User(input_username.value);
   time_played= Date.now()

    input_username.disabled = true;
    this.disabled = true;
    div_game.style.display = "flex";

    
});

// GAME:
const pi_decimals =
  "1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109";

let position = 0;
let attempts = 0;
let success_attempts = 0;
let failed_attempts = 0;
let score = 0;
// variables de tiempo
let last_attempt = null;

const container_modal = document.querySelector(".container-modal");
const lost_container = document.querySelector(".lost-container");
const container = document.querySelector("#container");

const input_pi = document.querySelector("#user_pi");
const result_pi = document.querySelector("#result_pi");

const h3_attempts = document.querySelector("#h3_attempts");
const h3_success_attempts = document.querySelector("#h3_success_attempts");
const h3_failed_attempts = document.querySelector("#h3_failed_attempts");
const h3_score = document.querySelector("#h3_score");
const h3_score_finish = document.querySelector("#h3_score_finish");
const btn_reiniciar = document.querySelector("#btn-reiniciar");

// KeyDown -> KeyPress -> input value -> KeyUp
input_pi.addEventListener("keyup", function () {
    this.value = "";
    this.focus();
});

input_pi.addEventListener("keydown", function (evt) {
    const decimal = String.fromCharCode(evt.keyCode);

    // el momento en que pongamos un numero
    let now_attempt = Date.now();
    
    

    attempts++;

    // evaluar reglas:
    if (decimal == "" || isNaN(decimal) || decimal != pi_decimals.charAt(position)) {
        div_game.style.backgroundColor = "red";
        failed_attempts++;
        evalGameOver();
    } else {
        // si pasó las reglas:
        // recuerden que la primera vez position es 0
        if (position > 0) {
        calcScore(now_attempt);
        console.log(score);
        }
        div_game.style.backgroundColor = "green";
        result_pi.innerText += decimal;
        position++;
        success_attempts++;
    }

    last_attempt = now_attempt;
    // usar timeout para pintarlo de negro:
    setTimeout(function () {
        div_game.style.backgroundColor = "transparent";
    }, 250);

    // SCORE:
    h3_attempts.querySelector("span").innerText = attempts;
    h3_success_attempts.querySelector("span").innerText = success_attempts;
    h3_failed_attempts.querySelector("span").innerText = failed_attempts;
    h3_score.querySelector("span").innerText = score.toFixed(2);
});






function calcScore(now_attempt) {
    const diff_time = (now_attempt - last_attempt) * 0.01;
    const attempt_score =
	position > 10
	  ? 10 + Number(String(position).charAt(0)) - diff_time
	  : 10 - diff_time;
    score += Math.max(attempt_score, -1);
}







function evalGameOver() {
    if (failed_attempts >= 10) {
      time_playedFinish=Date.now();
        // activamos los estilos
        document.body.style.overflow = "hidden";
        container_modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        container_modal.style.position = "relative";
        container_modal.style.height = "100vh";
        container.style.position = "absolute";
        lost_container.style.display = "block";
        container.style.zIndex = -1;
        input_pi.disabled = true;
        h3_score_finish.querySelector("span").innerText = score.toFixed(2);
        // Crear el usuario y agregarlo a la lista de usuarios:

        if (user !== null) {
            
            const user_index = users.findIndex(
              (user_find) => user_find.username === user.username
            );
      
            // juanito no existe en el array de usuarios por ende la funcion findIndex retorna
            // -1, porque no encontro a la persona
      
            // nota: Si findIndex no encuentra lo busquedo retornara -1 porque no encontro
            // ni una posicion
            if (user_index === -1) {
              // si entra al if el usuario no existe
              user.games.push({
                score: score,
                attempts: attempts,
                success_attempts: success_attempts,
                failed_attempts: failed_attempts,
                gameover_at: user.gameover(),
              });
      
              addUserToLocalStorage(user);
            } else {
              // si entra ya exister
              users[user_index].games.push({
                score: score,
                attempts: attempts,
                success_attempts: success_attempts,
                failed_attempts: failed_attempts,
                gameover_at: user.gameover(),
              });
      
              updateUserLocalStorage(users);
              // debemos agregar este dato a locastorage
            }
          }
        }
      }
      
      btn_reiniciar.onclick = () => window.location.reload();


      const container_history = document.querySelector("#history_container");
   const btnSearch=document.querySelector("#btn_buscar")
   const input_search=document.querySelector("#input_buscar")
   
      btnSearch.onclick=()=>{
        container_history.innerHTML=""
        const text=input_search.value
        
        if(text=="")alert("campo vacio")
          
        const filtro=users.filter(user=>user.username.toLowerCase().includes(text.toLowerCase()))
        
       console.log("mensaje",filtro)
      createTableHistoric(filtro)
        
        }