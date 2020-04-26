

var length = (prompt("How many characters will your password be? Enter a number between 8 and 128"));

if(length !== parseInt(length) && length < 8 || length > 128 ){
    alert("enter number between 8 and 128")
}else {
  var num = confirm("wil it contain numbers");
  console.log("You do want numbers: " + num);
  var upper =  confirm("will it contain uppercase");
  console.log("You do want uppercase characters: " + upper);
  var lower =  confirm("will it contain lowercase");
  console.log("You do want lowercase characters: " + lower);
  var special =  confirm("will it contain special character");
  console.log("You do want special characters: " + special);
}


var generateEl = document.getElementById('generate');
var textareaEl = document.getElementById('textarea');
var copyEl = document.getElementById('copy');

// When someone clicks the password generator button
generateEl.addEventListener('click', function(){
 

   // generate a password for them, randomly
      // pick a lot of random characters from 1, 2, 3, ..., A, B, C, ..., a, b, c, ..., !, @, #
      // if they want num
      // if they wnat upper
      // if they want lower
      // if they want special

      // IF they say "yes" to numbers and special character, but no to upper and lower case?
        // then possible password will be "1$67%83("
        var master = "";

        var number ="0123456789";
        var upperCase ="ABCDEFGHIGKLMNOPQRSTUVWXYZ";
        var lowerCase = "abcdefghijklmnopqrstuvwxyz";
        var symbol = "!@#$%^&*()+_][{}?>,.~!";

        if(num){ 
          master = master + number;
        }

        if(upper){
          master = master + upperCase;
        }

        if(lower){
          master += lowerCase

        }
        if(special){
          master += symbol;
        }

        // console.log("master string: " + master);

        // Now that we have our master string, we want to randomly pull characters from string
        // How many? length

            // Loop length amount of times to give us length amount of random characters
            var str ='';
            for(var i = 0; i < length; i++){
              // Pull these random characters from what? Master


                  var randomNumber =  Math.floor(Math.random()*master.length);
                 str += master[randomNumber]

          
           textareaEl.textContent = str;
            }
            
})

copyEl.addEventListener('click',function() {
 
  textareaEl.select();
  textareaEl.setSelectionRange(0, 99999)
  document.execCommand("copy");

  textareaEl.textContent = textareaEl.value;
}
)






