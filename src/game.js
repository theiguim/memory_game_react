let game = {

    techs: [
        'bootstrap',
        'css',
        'electron',
        'firebase',
        'html',
        'javascript',
        'jquery',
        'mongo',
        'node',
        'react'
    ],

    cards: null,

    lockMode: false,
    firstCard: null,
    secondCard: null,


    setCards: function (id){

        let card = this.cards.filter(card=> card.id === id)[0];
        

        if(card.flipped || this.lockMode){
            return false
        }

        if(!this.firstCard){
            
            this.firstCard = card;
            this.firstCard.flipped= true;
            return true;
        }else{
            this.secondCard = card;
            this.secondCard.flipped = true;
            this.lockMode = true;
            return true;
        }
    },

    checkMatch: function (){
        if(!this.firstCard || !this.secondCard){
            return false
        }

        return this.firstCard.icon === this.secondCard.icon;
    },

    clearCards: function (){
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
    },

    unflipCards: function (){
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
    },

    checkGameOver: function (){
        return this.cards.filter(card=> !card.flipped).length === 0
    },


    createCardsFromTechs: function () {

        this.cards = [];

        this.techs.forEach((tech) => {

            this.cards.push(this.createPairFromTech(tech));
        });

        this.cards = this.cards.flatMap(pair => pair);
        this.shuflerCards();
        return this.cards;
    },

    shuflerCards: function (){

        let initialIndex = this.cards.length;
        let randomIndex = 0;

        while(initialIndex !== 0){

            randomIndex = Math.floor(Math.random() * initialIndex);
            initialIndex --;

            [this.cards[initialIndex], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[initialIndex]];
        };
    },

    createPairFromTech: function (tech) {

        return [{
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false,
        }, {
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false,
        }];
    },

    createIdWithTech: function (tech) {

        return tech + parseInt(Math.random() * 1000);

    },




};

export default game