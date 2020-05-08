

var length = (prompt("How many characters will your password be? Enter a number between 8 and 128"));



if(isNaN(length) || length < 8 || length > 128 ){
    alert("Enter number between 8 and 128")
   
}else {
  var num = confirm("Will it contain numbers");
  console.log("You do want numbers: " + num);
  var upper =  confirm("Will it contain uppercase");
  console.log("You do want uppercase characters: " + upper);
  var lower =  confirm("Will it contain lowercase");
  console.log("You do want lowercase characters: " + lower);
  var special =  confirm("Will it contain special character");
  console.log("You do want special characters: " + special);
  
}

if(num ===false&& upper === false && lower === false&& special === false){
  alert('You should enter at least  one charachter ')
  
 
}
else{

var generateEl = document.getElementById('generate');
var textareaEl = document.getElementById('textarea');
var copyEl = document.getElementById('copy');

// When someone clicks the password generator button
generateEl.addEventListener('click', function(){
 

  if(isNaN(length) || length < 8 || length > 128 ){
    alert("Enter number between 8 and 128")
   
}else{
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
        var str = "";
        
        if(num){ 
          master = master + number;
          var randomNumber =  Math.floor(Math.random()*number.length);        
          str += number[randomNumber]

        }

        if(upper){
          master = master + upperCase;
          var randomNumber =  Math.floor(Math.random()*upperCase.length);
          str += upperCase[randomNumber]
        }

        if(lower){
          master += lowerCase
          var randomNumber =  Math.floor(Math.random()*lowerCase.length);     
          str += lowerCase[randomNumber]

        }
        if(special){
          master += symbol;
          var randomNumber =  Math.floor(Math.random()*symbol.length);
          str += symbol[randomNumber]
        }

        // console.log("master string: " + master);

        // Now that we have our master string, we want to randomly pull characters from string
        // How many? length

            // Loop length amount of times to give us length amount of random characters
            var x =(length - str.length);
           
            for(var i = 0; i < x; i++){
              // Pull these random characters from what? Master


                var randomNumber =  Math.floor(Math.random()*master.length);
                str += master[randomNumber]
                textareaEl.textContent = str;
            }
            
}})}

copyEl.addEventListener('click',function() {
 
  textareaEl.select();
  textareaEl.setSelectionRange(0, 99999)
  document.execCommand("copy");
  

  textareaEl.textContent = textareaEl.value;

}
)






