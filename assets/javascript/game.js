
//      basic jquery function syntax
    // $(function () {
    //     console.log('this works too');
    // });

$(document).ready(function(){

    // Turn the below into an opject obj = theme, key =  word, val = arr of letters
var colors = [ 'red', 'blue', 'green' ];
var hairStyles = [ 'afro', 'behive', 'Mullet' ];
var style = [ 'lava lamp', 'disco ball', 'platform shoes' ];
var missedGuess = 10; 
//      Steps:
//      1. onClick ANY KEY to  load the following
//          visuals:
//              => theme name (ie : colors) 
//              => word to guess  in  the form of placeHolder = "_ "
//              => set the guess counter to 0
//  
//            In the back
//             => word to guess for comparison
//        2. Guesses 
//              onClick: 
var userInput = "";

$(this).on("keyup", function(){
    
    $( ".guessed" ).append( document.createTextNode( "Hello" ) )

    });
// $( "#lettersGuessed" ).append( "<p>Test</p>" );

//                  iteration:
//               var letterCompare = function () {     
     //                  if (userInput typeof  != string) {
    //                      alert('Please choose a letter')
    //                   } else if (missedGuess  === 0) {
    //                      alert('Game Over! You lose sucka!')
    //                  } else {
                //              for (var i = 0; i < array.length; i++) {
                //                  if (userInput !== array[i]) {
                //                      alert('Please choose a letter')
                //                   }  else if (char === letterInWord) {
                //                      placeHolder = userInput;
                //                  }  else {
                //                      log to previous guesses;
                //                      missedGuess--;
                //                  }
                //              }
    //             };
    //            letterCompare();



    $('.pressMe').on('click', function () {
        alert("pressed");
    });
    $('#open').on('click', function () {
        alert("opened");
    });

 
 });
