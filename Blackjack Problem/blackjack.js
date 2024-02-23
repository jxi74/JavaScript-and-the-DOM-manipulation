let dealer_score = 0;
let player_score = 0;
let stand_count = 0;
let player_cards = [];
let dealer_cards = [];
let ace_check1 = 0;
let ace_check2 = 0;
let showdown = 0;
let down_card;
let ace_mark1 = 0;
let ace_mark2 = 0;

// Creates a cards class to represent each card in a deck
class cards {
    constructor(card, value) {
        this.card = card;
        this.value = value;
    }
}

// Array for each card object in a deck with their respective value
let deck = [
    new cards("ace_of_clubs.png", 11),
    new cards("ace_of_diamonds.png", 11),
    new cards("ace_of_hearts.png", 11),
    new cards("ace_of_spades.png", 11),

    new cards("2_of_clubs.png", 2),
    new cards("2_of_diamonds.png", 2),
    new cards("2_of_hearts.png", 2),
    new cards("2_of_spades.png", 2),

    new cards("3_of_clubs.png", 3),
    new cards("3_of_diamonds.png", 3),
    new cards("3_of_hearts.png", 3),
    new cards("3_of_spades.png", 3),

    new cards("4_of_clubs.png", 4),
    new cards("4_of_diamonds.png", 4),
    new cards("4_of_hearts.png", 4),
    new cards("4_of_spades.png", 4),

    new cards("5_of_clubs.png", 5),
    new cards("5_of_diamonds.png", 5),
    new cards("5_of_hearts.png", 5),
    new cards("5_of_spades.png", 5),

    new cards("6_of_clubs.png", 6),
    new cards("6_of_diamonds.png", 6),
    new cards("6_of_hearts.png", 6),
    new cards("6_of_spades.png", 6),

    new cards("7_of_clubs.png", 7),
    new cards("7_of_diamonds.png", 7),
    new cards("7_of_hearts.png", 7),
    new cards("7_of_spades.png", 7),

    new cards("8_of_clubs.png", 8),
    new cards("8_of_diamonds.png", 8),
    new cards("8_of_hearts.png", 8),
    new cards("8_of_spades.png", 8),

    new cards("9_of_clubs.png", 9),
    new cards("9_of_diamonds.png", 9),
    new cards("9_of_hearts.png", 9),
    new cards("9_of_spades.png", 9),

    new cards("10_of_clubs.png", 10),
    new cards("10_of_diamonds.png", 10),
    new cards("10_of_hearts.png", 10),
    new cards("10_of_spades.png", 10),

    new cards("jack_of_clubs.png", 10),
    new cards("jack_of_diamonds.png", 10),
    new cards("jack_of_hearts.png", 10),
    new cards("jack_of_spades.png", 10),

    new cards("king_of_clubs.png", 10),
    new cards("king_of_diamonds.png", 10),
    new cards("king_of_hearts.png", 10),
    new cards("king_of_spades.png", 10),

    new cards("queen_of_clubs.png", 10),
    new cards("queen_of_diamonds.png", 10),
    new cards("queen_of_hearts.png", 10),
    new cards("queen_of_spades.png", 10)

]

// Event listener to check if the deal button (div) has been clicked, if so calls deal function
document.getElementById("deal").addEventListener("click", deal);

function card_deal(div_id) {
    // Picks a random card (index) based on how many cards are left in the deck
    let card_pick = deck[Math.floor(Math.random() * deck.length)];
    let img = document.createElement("img");
    img.src = card_pick.card; // card.png
    let src = document.getElementById(div_id); // card element
    img.width = 200;
    img.margin = 50;
    src.appendChild(img); // Add image to element
    return card_pick;
}

function removeButtons() {
    document.getElementById("hit").removeEventListener("click", hit); // makes it so you can't click again
    document.getElementById("hit").style.visibility = "hidden"; // removes div from side-table
    document.getElementById("stand").removeEventListener("click", stand); // makes it so you can't click again
    document.getElementById("stand").style.visibility = "hidden"; // removes div from side-table
}

function deal() {

    let card_pick = card_deal("up-card"); // Dealer up-card
    dealer_cards.push(card_pick.card); // Adds card to dealer array to keep track of cards dealer has

    dealer_score += card_pick.value; // Keeps track of the dealer score by adding card value
    deck.splice(deck.indexOf(card_pick), 1); // Removes up-card from deck

    let down_card_img = document.getElementById("down-card"); // Sets down-card visible
    down_card_img.style.visibility = "visible";

    down_card = deck[Math.floor(Math.random() * deck.length)]; // Picks down_card
    dealer_cards.push(down_card.card); // Adds card to dealer array to keep track of cards dealer has

    dealer_score += down_card.value; // Keeps track of the dealer score by adding card value
    deck.splice(deck.indexOf(down_card), 1); // Removes down_card from deck

    // If Dealer has blackjack after cards are dealt, GG
    if (dealer_score === 21) {
        window.setTimeout(function() {removeButtons();}, 1);
        //let twenty_one = new Audio("21.mp3");
        //twenty_one.volume = 0.3;
        //twenty_one.play();
        window.setTimeout(function(){alert("OMG!! Dealer got Blackjack :((")}, 2000);
        down_card_img.width = 200;
        window.setTimeout(function(){down_card_img.src = down_card.card}, 1000);
    }


    // Gets player's first card and sets it visible
    card_pick = card_deal("player-card-1");
    player_cards.push(card_pick.card); // Adds card to player array to keep track of cards dealer has

    player_score += card_pick.value; // Keeps track of player score by adding card value
    deck.splice(deck.indexOf(card_pick), 1); // Removes player's first card from deck

    // Gets player's second card and sets it visible
    card_pick = card_deal("player-card-2");
    player_cards.push(card_pick.card); // Adds card to player array to keep track of cards dealer has

    player_score += card_pick.value; // Keeps track of player score by adding card value
    deck.splice(deck.indexOf(card_pick), 1); // Removes player's second card from deck

    // If Player has blackjack after cards are dealt, GG
    if (player_score === 21) {
        let blackjack = new Audio("correct.mp3");
        blackjack.volume = 0.3;
        blackjack.play();
        window.setTimeout(function(){alert("Player got BLACKJACK!")}, 2000);
    }

    // If Player or Dealer gets two Aces, set score to 12
    if (player_score === 22) {
        player_score = 12;
        ace_mark1 += 1;
    }

    if (dealer_score === 22) {
        dealer_score = 12;
        ace_mark2 += 1;
    }

    document.getElementById("deal").removeEventListener("click", deal); // Removes event listener for deal button (div)
    document.getElementById("deal").style.visibility = "hidden"; // Hides deal button (div) from side-table

    // Now that game has started, make hit and stand buttons visible and add event listeners for them to call hit and stand functions
    document.getElementById("hit").style.visibility = "visible";
    document.getElementById("stand").style.visibility = "visible";
    document.getElementById("hit").addEventListener("click", hit);
    document.getElementById("stand").addEventListener("click", stand);
}

function hit() {
    let boom = new Audio("vine-boom.mp3");
    boom.volume = 0.4;
    boom.play();

    let card_pick = card_deal("player-card-3");
    player_cards.push(card_pick.card); // Adds card to player array to keep track of cards player has

    // Ace check
    if (card_pick.value === 11) {

        if (player_score >= 11) { // If player_score is currently >= 11, then you can't add 11 or you would bust, instead add 1
            player_score += 1
            ace_mark1 += 1
        }
        else
            player_score += card_pick.value; // Else add 11 like normally
    }
    else
        player_score += card_pick.value; // Else add normally

    deck.splice(deck.indexOf(card_pick), 1); // Removes players next card from deck

    if (ace_check1 === 0) { // Makes it so you can only get a soft hit once
        if (player_cards.includes("ace_of_clubs.png") || player_cards.includes("ace_of_diamonds.png") ||
            player_cards.includes("ace_of_hearts.png") || player_cards.includes("ace_of_spades.png")) {
            if (player_score > 21 && ace_mark1 === 0) {
                player_score -= 10;
                ace_check1 += 1;
            }
        }
    }

    if (player_score > 21) {
        let lose = new Audio("sad-trombone.mp3");
        lose.volume = 0.3;
        lose.play();

        window.setTimeout(function(){alert("You busted! The Dealer Wins!")}, 2000);
        removeButtons(); // Removes buttons from play
    }
}

let timer;
function startTimer() {
    timer = window.setInterval(stand, 1000);
}

function stand() {

    removeButtons(); // Removes buttons from play

    let src = document.getElementById("down-card"); // Select down-card element
    src.width = 200;
    let card_pick2;

    // Causes stand function to loop on timer once stand is first clicked
    if (stand_count === 0) {
        src.src = down_card.card;
        stand_count += 1;
        startTimer();
        return;
    }

    if (dealer_score >= 17 && dealer_score <= 21) {
        //kill off interval
        window.clearInterval(timer);
        showdown += 1;
        if (player_score > dealer_score) {
            let win = new Audio("congratulations-you-won.mp3");
            win.volume = 0.3;
            win.play();
            window.setTimeout(function(){alert("Congratulations! You beat the Dealer in score!")}, 2000);
        }
        else if (player_score < dealer_score) {
            let lose = new Audio("lose-horn.mp3");
            lose.volume = 0.3;
            lose.play();
            window.setTimeout(function(){alert("Dealer wins, The Dealer beat the Player in score.")}, 2000);
        }
        else if (player_score === dealer_score) {
            let augh = new Audio("augh.mp3");
            augh.volume = 0.3;
            augh.play();
            window.setTimeout(function(){alert("PUSH!")}, 2000);
        }
    }

    if (stand_count === 1 && showdown === 0) {
        card_pick2 = card_deal("dealer-card");
        dealer_cards.push(card_pick2.card);
    }

    // Ace check
    if (card_pick2.value === 11) {
        if (dealer_score >= 11) {// If dealer_score >= 11, then you can't add 11 or you would bust, instead add 1
            dealer_score += 1;
            ace_mark2 += 1;
        }
        else
            dealer_score += card_pick2.value; // Else add 11 like normally
    }
    else
        dealer_score += card_pick2.value;

    deck.splice(deck.indexOf(card_pick2), 1); //removes card_pick2 from array

    if (ace_check2 === 0) { // Makes it so you can only get a soft hit once
        if (dealer_cards.includes("ace_of_clubs.png") || dealer_cards.includes("ace_of_diamonds.png") ||
            dealer_cards.includes("ace_of_hearts.png") || dealer_cards.includes("ace_of_spades.png")) {
            if (dealer_score > 21 && ace_mark2 === 0) {
                dealer_score -= 10;
                ace_check2 += 1;
            }
        }
    }

    if (dealer_score > 21) {
        let victory = new Audio("victory-jingle.mp3");
        victory.volume = 0.4;
        victory.play();
        window.setTimeout(function(){alert("Dealer busted! You won!")}, 2000);
        window.clearInterval(timer);
    }


}

// Resets board
document.getElementById("reset").addEventListener("click", function() { location.reload(); });

// Closes Game
document.getElementById("exit").addEventListener("click", function() { close(); });
