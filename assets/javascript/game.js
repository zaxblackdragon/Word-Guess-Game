


 $(document).ready(function() {

    document.onkeyup = function () {
        var userguess = String.fromCharCode(event.keyCode).toLowerCase();
        $("#userGuess").append(userguess);
    };

    $(".themeChoices").on("click", function(){
        for (var i = 0; i < logic.length; i++) {
            $("#theme").append("logic.");
        }
        
        }) ;

        // theme object with words
     var logic = [{
            themes: "Hairstyles" ,
            words: ["afro", "mullet"]
        },
        {
            themes: "cars" ,
            words: ["honda", "ford"]
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
