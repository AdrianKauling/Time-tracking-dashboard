let lastOption = 'weekly'

const datas = [
    {
      "title": "work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "self-care",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

function changeColorButton(event) {

    //Essa função muda a cor da letra das opções (daily, weekly, monthly),
    //onde a opção clicada fica branca e as demais ficam a um tom padrão

    const buttonClick = event.target

    const buttonPrevious = buttonClick.parentNode.parentNode.querySelector(`#${lastOption}`)
    buttonPrevious.style.color = "#4D5191"

    lastOption = buttonClick.id
    console.log(lastOption)
    buttonClick.style.color = "#fff"
}


function eventDaily(event) {
    
    changeColorButton(event)

    //Pego os elementos chave que mudaram o conteúdo(elementsCorrent,elementsPrevious)
    //ou vão ser usados
    //para comparação no method "find"(nameTask)

    const elementsCorrent = document.querySelectorAll('.current')
    const elementsPrevious = document.querySelectorAll('.previous')
    const nameTask = document.querySelectorAll('.task')

    for(let element = 0 ;element < elementsCorrent.length; element++) {

        //Encontra no array de dados dos dias a task que tem o mesmo id dos paragrafos
        //que tem o conteudo == o nome da task 

        //  --Exemplo--
        // <p id="work" class="task">Work</p>
        //no loop dataDaily[0].title é igual a "work" e então o find vai buscar um 
        //paragrafo com id == "work"

        const data = datas.find(posi => posi.title == nameTask[element].id)
        console.log(data)

        elementsCorrent[element].innerText = data.timeframes[lastOption].current + 'hrs'
        elementsPrevious[element].innerText = `Last daily - ${data.timeframes[lastOption].previous} hrs`
    }
}


const elementDaily = document.querySelector('#daily')
const elementWeekly = document.querySelector('#weekly')
const elementMonthly = document.querySelector('#monthly')
elementDaily.addEventListener("click", eventDaily)
elementWeekly.addEventListener("click", eventDaily)
elementMonthly.addEventListener("click", eventDaily)