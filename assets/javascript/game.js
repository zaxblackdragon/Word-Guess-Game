


 $(document).ready(function() {
    var lettersTyped = [];
    var compWord;
    var userguess;
    

    $(document).on ("keyup", function () {
       
        userguess = String.fromCharCode(event.keyCode).toLowerCase();
       
      
       if (lettersTyped.indexOf(userguess) === -1) {
            lettersTyped.push(userguess);
            //console.log(lettersTyped);
            $("#userGuess").html(lettersTyped);
       }
       
       for (var i = 0; i < compWord.length; i++) {
        //console.log(compWord[i]);
        while ()
       };

    });
    
    $(".themeChoices").on("click", function(){
        var randomNum = Math.floor(Math.random() * logic.length);

        $("#theme").html(logic[randomNum].themes);

        var word = logic[randomNum].words
            word.length;
        var randomNumWord = Math.floor(Math.random() * word.length);


        compWord = word[randomNumWord];
        //console.log(compWord);
        
        var placeHolder = [];
        for (var i = 0; i < compWord.length; i++) {
            //for every letter in word + "_" html
            placeHolder.push('_ ');
            //console.log(placeHolder);
        }
        $("#placeHolder").html(placeHolder);
        });

        // theme object with words
     var logic = [{
            themes: "Hairstyles" ,
            words: ["afro", "mullet"]
        },
        {
            themes: "cars" ,
            words: ["honda", "ford"]
        },
        {
            themes: "animals" ,
            words: ["horse", "dog"]
        },
    ];
        // user select theme
        //          user input 
        //          type  checks to see if the letter is in the word.
        //    if the letter is there replace the _ 
        //     if not got to usecs  letters and reduce guesses   
        //      if user guesses the word b4 the guesses are used acc Wins





    });
    // var logic = [{
    //     themes: 'car',
    //     words: [
    //         'honda', 'civic', 'toyota'
    //     ],}, 
    //     {
    //     themes: 'hairstyles',
    //     words: [
    //         'afro', 'mohakw', 'nothing'
    //     ], }, {
    //     themes: 'other',
    //     words: [
    //         'afd', 'asdf', 'adsf'
    //     ], }, 
    // ];
    // var answers = 0;
    // var wrongAsnwer = 0;
    // var quesses = 10;
    // var currentquestion= questions;
    // for ( var i = 0; i < logic.length; i++){
    //     $('#themechoices').html('<h1>' + logic.themes[i] + '</h1>' );
    // }
