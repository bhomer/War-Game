$(document).ready(function() {

	//what does this do?
	function convert_value_to_string(value) {
		if (value > 10) {
			switch (value) {
				case 11:
				return 'Jack';
				break;
				case 12:
				return 'Queen';
				break;
				case 13:
				return 'King';
				break;
			}
		}
		return value.toString();
	}

	//what does this do?
	var deck = [];
	var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
	for (var i = 0; i<suits.length; i++) {
		var suit = suits[i];
		for (var j = 0; j<13; j++) {
			deck.push({number: j+1, suit: suit});
		}
	}
	
	//shuffle the deck
	shuffle(deck);

	//divide out the cards into the two arrays

	// function stack() {
	// 	this.cards_player_1 = new Array();

	// 	this.deal = stackDeal;
	// 	this.draw = stackDraw;
	// 	this.addCard = stackAddCard;
	// 	this.combine = stackCombine;
	// 	this.cardCount = stackCardCount;
	// }
	
	var cards_player_1 = [];
	var cards_player_2 = [];

	function stackDeal() {
		if (this.cards_player_1.length > 0)
			deck.push(card_player_1);
		else
			return null;
		if (this.cards_player_2.length > 0)
			deck.push(card_player_1);
		else
			return null;
	}


	// var randomGenerator = random.number(1,2,3,4,5,6,7,8,9,10,11,12,13);
	// var randomSuit = ()
	// var intIndex = generator.nextInt();

	// function deal() {
	// 	var randomGenerator

	// 	randomGenerator = new random(); //picks random card
	// 	intIndex = generator.nextInt(cards.size());
	// 	return cards.remove(index); //removes card from list
	// });

	
	
	//create a function (algorithm) called "war" that takes two cards as parameters, compares them and returns a winner. A tie should return false.
	//get first card from each players deck (lifo)//
	//compare the values of each card//
	//determine which is higher//
	//push both cards to bottom of winners deck//
	//settle a tie (black diamond)
	function war() {
		//where cards are flipped//
	}
	
	
	//create a play function
		//compare the cards
		//give the winner both cards (at end of deck)
	function play() {
		//where comparison is made//
		//this function (defined below) will continue to the next turn
		advance();
	}
	
	function advance() {
		//take the top two cards and display them
		if (cards_player_1.length) {
			var card_1 = cards_player_1[0];
			var card_2 = cards_player_2[0];
			$("#opp-card").html(convert_value_to_string(card_1.number)+" "+card_1.suit);
			$("#opp-card-count").html(cards_player_1.length);
			$("#my-card").html(convert_value_to_string(card_2.number)+" "+card_2.suit);
			$("#my-card-count").html(cards_player_2.length);
			
		}
	}
	advance();
	
	$(".btn").click(function() {
		play();
	});
});