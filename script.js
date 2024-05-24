//переменная для кнопки
let btn = document.querySelector(".btn-img")
//переменная для вывода очков
let  scoreText = document.querySelector("h2")
//переменная для очков
let score = 0 
//переменная для клика
let sound = document.querySelector("#click")
//перемненнная для автоклика
      let clicker = document.querySelector("#clicker")

      let autoClickBtn = document.querySelector("#btn")

      let autoClickCount = 0
      //загрузка кликов из хранилища
if(localStorage.getItem("score")){
    score = localStorage.getItem("score")
    scoreText.innerHTML = score
}

function click(){
    score++
    scoreText.innerHTML = score 
    sound.play()

  //сохранить клики в локал хранилище
  localStorage.setItem("score",score)
}

btn.addEventListener("click", click)

function buyAutoClick(){
    if(score >= 500){
        //вычитаем скоре
        score = score - 500
        scoreText.innerHTML = score

        autoClickCount++
        localStorage.setItem("autoClickCount", autoClickCount)

        setInterval(function(){
            score++
            scoreText.innerHTML = score
            localStorage.setItem("score",score)
        }, 1000)
    }
}
autoClickBtn.addEventListener("click", buyAutoClick)