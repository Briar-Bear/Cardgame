const pickCardBtn = document.createElement('button')
const holdBtn = document.createElement('button')
const restartBtn = document.createElement('button')

const createRoomIdBtn = document.createElement('button')
const roomInputId = document.createElement('input')
const playerNameInput = document.createElement('input')

roomInputId.type = 'number'

const joinGameBtn = document.createElement('button')
const startGameBtn = document.createElement('button')

pickCardBtn.textContent = 'Pick a card'
holdBtn.textContent = 'Hold'
restartBtn.textContent = 'Restart'

createRoomIdBtn.textContent = 'Create Room ID'
joinGameBtn.textContent = 'Join Game'
startGameBtn.textContent = 'Start Game'

document.body.append(createRoomIdBtn, roomInputId, playerNameInput, joinGameBtn, startGameBtn)

createRoomIdBtn.addEventListener('click', () => {
    fetch('http://localhost:3000/room/create').then((response) => {
        return response.json()
    }).then((data) => {
        const element = document.createElement('p')
        element.textContent = data.roomId

        document.body.append(element)
    })
})

joinGameBtn.addEventListener('click', () => {
    fetch('http://localhost:3000/room/join', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            roomId: roomInputId.value,
            playerName: playerNameInput.value
        })
    }).then((data) => {
        console.log(data)
    })
})

//  let currentPlayer = {}

// fetch('http://localhost:3000/create', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         players: [
//             'Player 1',
//             'Player 2'
//         ]
//     })
// })

//     .then(response => response.json ())
//     .then(game => {
//         currentPlayer = game.players[game.currentPlayer]
//         for (let i = 0; i < game.players.length; i++) {
//             const player = game.players[i];

//             const nameElement = document.createElement('h2')
//             const scoreElement = document.createElement('p')
//             const cardElement = document.createElement('p')
//             const holdElement = document.createElement('p')
//             const restartElement = document.createElement('p')
//             const id = player.id

//             nameElement.setAttribute('id', 'name-' + id)
//             scoreElement.setAttribute('id', 'score-' + id)
//             cardElement.setAttribute('id', 'card-' + id)
//             holdElement.setAttribute('id', 'hold-' + id)
//             restartElement.setAttribute('id', 'restart-' + id)

//             nameElement.textContent = player.name
//             scoreElement.textContent = player.score
//             cardElement.textContent = player.card
//             holdElement.textContent = player.hold
//             restartElement.textContent = player.restart

//             document.body.append(nameElement, scoreElement, cardElement, holdElement, restartElement)

//         }
//            pickCardBtn.addEventListener('click', () => {
//             fetch('http://localhost:3000/card/draw')

//             .then((response) => response.json())
//             .then (card => {
//                 const id = card.player.id

//                 const nameElement = document.querySelector('#name-' + id)
//                 const scoreElement = document.querySelector('#score-' + id)
//                 const cardElement = document.querySelector('#card-' + id)

//                 nameElement.textContent = card.player.name
//                 scoreElement.textContent = card.player.score
//                 cardElement.textContent = card.player.card
//             })
//         })

//             holdBtn.addEventListener('click', () => {
//                 fetch('http://localhost:3000/player/hold')


//                 .then(hold => {

//                 const id = currentPlayer.id

//                 const holdElement = document.querySelector('#hold-' + id)

//                 holdElement.textContent = currentPlayer.name + ' Has held hand'

//                 currentPlayer = hold.player
//             })
//         })

//         restartBtn.addEventListener('click', () => {
//             fetch('http://localhost:3000/player/hold')

//             .then(restart => {

//                 const id = currentPlayer.id

//                 const restartElement = document.querySelector('#restart-' + id)

//                 restartElement.textContent = currentPlayer.name + ' Has restarted the game'

//                 restart = game.restart
//             })
//         })
//     })

// function deckFactory () {
//     return {
//         getRandomCard () {
//             const index = Math.floor(Math.random() * this.cards.length)

//             return this.cards[index]
//         },
//         getCardValue (card) {
//             let value = ''

//             for (let index = 0; index < card.length; index++) {
//                 const element = card[index];

//                 if (!isNaN(element)) {
//                     value += element
//                 }

//             }

//             return parseInt(value)
//         },

//         removeCard (oldCard) {
//             for (let i = 0; i < this.cards.length; i++) {
//                 const card = this.cards[i];

//                 if (card === oldCard) {
//                     this.cards.splice(i, 1)
//                 }

//             }
//         },
//          cards: [
//             '2C',
//             '3C',
//             '4C',
//             '5C',
//             '6C',
//             '7C',
//             '8C',
//             '9C',
//             '10C',
//             '2D',
//             '3D',
//             '4D',
//             '5D',
//             '6D',
//             '7D',
//             '8D',
//             '9D',
//             '10D',
//             '2S',
//             '3S',
//             '4S',
//             '5S',
//             '6S',
//             '7S',
//             '8S',
//             '9S',
//             '10S',
//             '2H',
//             '3H',
//             '4H',
//             '5H',
//             '6H',
//             '7H',
//             '8H',
//             '9H',
//             '10H',
//          ]
//     }
// }

// function playerFactory (name) {
//     const playerName = document.createElement('h2')
//     const playerScore = document.createElement('p')
//     const playerCard = document.createElement('p')
//     const playerWinCondition = document.createElement('p')
//     // append elements here
//     document.body.append(playerName, playerScore, playerCard, playerWinCondition)

//     return {
//         name,
//         score: 0,
//         card: '',
//         reset () {
//             this.card = ''
//             this.score = 0
//         },
//         updateScore (score) {
//             this.score = this.score + score
//         },
//         display () {
//             playerName.textContent = this.name
//             playerScore.textContent = 'score: ' + this.score
//             playerCard.textContent = 'card: ' + this.card
//         }
//     }
// }

// function blackjack (players = []) {
//     const activePlayers = []

//     for (let i = 0; i < players.length; i++) {
//         activePlayers.push(i)
//     }

//     return {
//         deck: deckFactory(),
//         players,
//         currentPlayer: 0,
//         activePlayers,
//         hasCards () {
//             return !!deck.cards.length
//         },
//         getPlayer () {
//             return this.players[this.currentPlayer]
//         },
//         endGame () {
//             //...
//         },
//         restartGame () {
//             for (let i = 0; i < this.players.length; i++) {
//                 const player = this.players[i];

//                 player.reset()
//             }

//             for (let i = 0; i < players.length; i++) {
//                 activePlayers.push(i)
//            }

//             this.deck = deckFactory()
//             this.currentPlayer = 0
//         },
//         endTurn () {
//             if (this.currentPlayer < this.activePlayers.length - 1) {
//               return  ++ this.currentPlayer
//             } else {
//                 this.currentPlayer = 0
//             }

//         },

//         drawCard () {
//          const player = this.getPlayer()
//          // get card from deck
//          const card = deck.getRandomCard()
//          // get card value
//          const cardValue = deck.getCardValue(card)
//          //update player score
//          player.updateScore(cardValue)
//          player.card = card
//          // remove card from deck
//          deck.removeCard(card)
//          // change player
//          this.endTurn()
//         },
//         hold () {
//             const currentPlayer = this.getPlayer()

//             for (let i = 0; i < this.players.length; i++) {
//                 const player = players[i];
//                     // find player with the same name
//                 if (currentPlayer.name === player.name) {
//                     const index = this.activePlayers.indexOf(i)
//                     // remove active player
//                     this.activePlayers.splice(index, 1)
//                 }
//             }
//         },
//     }
// }
// function tableFactory () {
//         //buttons
//         const pickCardBtn = document.createElement('button')
//         const holdBtn = document.createElement('button')
//         const restartBtn = document.createElement('button')
//         document.body.append(pickCardBtn, holdBtn, restartBtn)
//         pickCardBtn.textContent = 'Pick a card'
//         holdBtn.textContent = 'Hold'
//         restartBtn.textContent = 'Restart Game'

//         return {
//             pickCardEvent (player, score, card) {
//                 pickCardBtn.addEventListener('click', () => {
//                     if (game.hasCards()) {
//                         game.drawCard()
//                     } else {
//                         pickCardBtn.disabled = true
//                     }
//                     // display players score
//                     playerScore = 'score: ' + player.score

//                     // display players card
//                     playerCard = 'card: ' + player.card

//                 })
//             }
//         }
// }

// let deck = deckFactory()
// let player1 = playerFactory('Tom')
// let player2 = playerFactory('Edward')
// let game = blackjack([player1, player2])
// let people = playerFactory()
// let table = tableFactory()

// table.pickCardEvent()

document.body.append(
    pickCardBtn,
    holdBtn,
    restartBtn
)

// not sure if it is correct but added the event listeners into the interfaceDisplay function

// win/lose conditions
//     holdBtn.addEventListener('click', () => {
//     game.hold()

//     if(game.activePlayers.length === 0) {
//     pickCardBtn.disabled = true

//     if (player1.score < 22 && player1.score > player2.score) {
//     p1WinCondition.textContent = 'You win!'
//     p2WinCondition.textContent = 'You lose!'
//     } else {
//     p1WinCondition.textContent = 'You lose!'
//     p2WinCondition.textContent = 'You win!'
//     }
//    }
//  })

//     // restart game
//     restartBtn.addEventListener('click', () => {
//     game.restartGame()

//     // reset players score
//     player1Score.textContent = 'score: ' + player1.score
//     player2Score.textContent = 'score: ' + player2.score
//     // reset players card
//     player1Card.textContent = 'card: ' + player1.card
//     player2Card.textContent = 'card: ' + player2.card
//     // reset win condition
//     p1WinCondition.textContent = ''
//     p2WinCondition.textContent = ''
//     pickCardBtn.disabled = false
//    })
