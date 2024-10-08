function convert_to_unicode()
{

var array_one = new Array(//"kZsa", 
// "(",")", 
"Ã±","Q+Z","sas","aa",")Z","ZZ","â€˜","â€™","â€œ","â€",

"Ã¥","Æ’","â€ž","â€¦","â€ ","â€¡","Ë†","â€°","Å ","â€¹", 

"Â¶+","d+","[+k","[+","x+","T+","t+","M+","<+","Q+",";+","j+","u+",
"Ã™k","Ã™","Ã¤","â€“","â€”","Ã©","â„¢","=kk","f=k",  

"Ã ","Ã¡","Ã¢","Ã£","Âºz","Âº","Ã­","{k","{","=","Â«",   
"NÃ®","VÃ®","BÃ®","MÃ®","<Ã®","|","K","}",
"J","VÂª","MÂª","<ÂªÂª","NÂª","Ã˜","Ã","nzZ","Ã¦","Ã§","Ã","xz","#",":",

"vâ€š","vks","vkS","vk","v","bÂ±","Ãƒ","bZ","b","m","Ã…",",s",",","_",

"Ã´","d","Dk","D","Â£","[k","[","x","Xk","X","Ã„","?k","?","Â³", 
"p","Pk","P","N","t","Tk","T",">","Ã·","Â¥",

"Ãª","Ã«","V","B","Ã¬","Ã¯","M+","<+","M","<",".k",".",    
"r","Rk","R","Fk","F",")","n","/k","Ã¨k","/","Ã‹","Ã¨","u","Uk","U",   

"i","Ik","I","Q","Â¶","c","Ck","C","Hk","H","e","Ek","E",
";","Â¸","j","y","Yk","Y","G","o","Ok","O",
"'k","'","\"k","\"","l","Lk","L","g", 

"Ãˆ","z", 
"ÃŒ","Ã","ÃŽ","Ã","Ã‘","Ã’","Ã“","Ã”","Ã–","Ã˜","Ã™","Ãœk","Ãœ",

"â€š","Â¨","ks","Â©","kS","k","h","q","w","`","s","Â¢","S",
"a","Â¡","%","W","â€¢","Â·","âˆ™","Â·","~j","~","\\","+"," à¤ƒ",
"^","*","Ãž","ÃŸ","(","Â¼","Â½","Â¿","Ã€","Â¾","A","-","&","&","Å’","]","~ ","@",
"à¤¾à¥‡","à¤¾à¥…","à¤‚à¥ˆ","à¥‡à¥à¤°","à¤…à¥Œ","à¤…à¥‹","à¤†à¥…")

var array_two = new Array(//"ksaZ",
//"Â¼","Â½", 
"à¥°","QZ+","sa","a","à¤°à¥à¤¦à¥à¤§","Z","\"","\"","'","'",

"à¥¦","à¥§","à¥¨","à¥©","à¥ª","à¥«","à¥¬","à¥­","à¥®","à¥¯",   

"à¥žà¥","à¥˜","à¥™","à¥™à¥","à¥š","à¤œà¤¼à¥","à¥›","à¥œ","à¥","à¥ž","à¥Ÿ","à¤±","à¤©",    // one-byte nukta varNas
"à¤¤à¥à¤¤","à¤¤à¥à¤¤à¥","à¤•à¥à¤¤","à¤¦à¥ƒ","à¤•à¥ƒ","à¤¨à¥à¤¨","à¤¨à¥à¤¨à¥","=k","f=",

"à¤¹à¥à¤¨","à¤¹à¥à¤¯","à¤¹à¥ƒ","à¤¹à¥à¤®","à¤¹à¥à¤°","à¤¹à¥","à¤¦à¥à¤¦","à¤•à¥à¤·","à¤•à¥à¤·à¥","à¤¤à¥à¤°","à¤¤à¥à¤°à¥", 
"à¤›à¥à¤¯","à¤Ÿà¥à¤¯","à¤ à¥à¤¯","à¤¡à¥à¤¯","à¤¢à¥à¤¯","à¤¦à¥à¤¯","à¤œà¥à¤ž","à¤¦à¥à¤µ",
"à¤¶à¥à¤°","à¤Ÿà¥à¤°","à¤¡à¥à¤°","à¤¢à¥à¤°","à¤›à¥à¤°","à¤•à¥à¤°","à¤«à¥à¤°","à¤°à¥à¤¦à¥à¤°","à¤¦à¥à¤°","à¤ªà¥à¤°","à¤ªà¥à¤°","à¤—à¥à¤°","à¤°à¥","à¤°à¥‚",

"à¤‘","à¤“","à¤”","à¤†","à¤…","à¤ˆà¤‚","à¤ˆ","à¤ˆ","à¤‡","à¤‰","à¤Š","à¤","à¤","à¤‹",

"à¤•à¥à¤•","à¤•","à¤•","à¤•à¥","à¤–","à¤–","à¤–à¥","à¤—","à¤—","à¤—à¥","à¤˜","à¤˜","à¤˜à¥","à¤™",
"à¤š","à¤š","à¤šà¥","à¤›","à¤œ","à¤œ","à¤œà¥","à¤","à¤à¥","à¤ž",

"à¤Ÿà¥à¤Ÿ","à¤Ÿà¥à¤ ","à¤Ÿ","à¤ ","à¤¡à¥à¤¡","à¤¡à¥à¤¢","à¤¡à¤¼","à¤¢à¤¼","à¤¡","à¤¢","à¤£","à¤£à¥",   
"à¤¤","à¤¤","à¤¤à¥","à¤¥","à¤¥à¥","à¤¦à¥à¤§","à¤¦","à¤§","à¤§","à¤§à¥","à¤§à¥","à¤§à¥","à¤¨","à¤¨","à¤¨à¥",    

"à¤ª","à¤ª","à¤ªà¥","à¤«","à¤«à¥","à¤¬","à¤¬","à¤¬à¥","à¤­","à¤­à¥","à¤®","à¤®","à¤®à¥",  
"à¤¯","à¤¯à¥","à¤°","à¤²","à¤²","à¤²à¥","à¤³","à¤µ","à¤µ","à¤µà¥",   
"à¤¶","à¤¶à¥","à¤·","à¤·à¥","à¤¸","à¤¸","à¤¸à¥","à¤¹", 

"à¥€à¤‚","à¥à¤°",    
"à¤¦à¥à¤¦","à¤Ÿà¥à¤Ÿ","à¤Ÿà¥à¤ ","à¤¡à¥à¤¡","à¤•à¥ƒ","à¤­","à¥à¤¯","à¤¡à¥à¤¢","à¤à¥","à¤•à¥à¤°","à¤¤à¥à¤¤à¥","à¤¶","à¤¶à¥",

"à¥‰","à¥‹","à¥‹","à¥Œ","à¥Œ","à¤¾","à¥€","à¥","à¥‚","à¥ƒ","à¥‡","à¥‡","à¥ˆ",
"à¤‚","à¤","à¤ƒ","à¥…","à¤½","à¤½","à¤½","à¤½","à¥à¤°","à¥","?","à¤¼",":",
"â€˜","â€™","â€œ","â€",";","(",")","{","}","=","à¥¤",".","-","Âµ","à¥°",",","à¥ ","/",
"à¥‹","à¥‰","à¥ˆà¤‚","à¥à¤°à¥‡","à¤”","à¤“","à¤‘")

//Corrections for Spelling mistakes (see above under the first Array):
// "sas","aa","ZZ","=kk","f=k",
//
// The following two characters are to be replaced through proper checking of locations:
// "Z" )
// "à¤°à¥" (reph) 

// "f" )
// "à¤¿"  


var array_one_length = array_one.length ;

var modified_substring = document.getElementById("legacy_text").value  ;

//****************************************************************************************
//  Break the long text into small bunches of max. max_text_size  characters each.
//****************************************************************************************
    var text_size = document.getElementById("legacy_text").value.length ;

    var processed_text = '' ;  //blank

    var sthiti1 = 0 ;  var sthiti2 = 0 ;  var chale_chalo = 1 ;
 
    var max_text_size = 6000;

    while ( chale_chalo == 1 ) 
    {
     sthiti1 = sthiti2 ;

     if ( sthiti2 < ( text_size - max_text_size ) )  
     { 
      sthiti2 +=  max_text_size ;
      while (document.getElementById("legacy_text").value.charAt ( sthiti2 ) != ' ') {sthiti2--;}
     } 
     else  { sthiti2 = text_size  ;  chale_chalo = 0 }

     var modified_substring = document.getElementById("legacy_text").value.substring ( sthiti1, sthiti2 )  ;

    Replace_Symbols( ) ;

    processed_text += modified_substring ;

//****************************************************************************************
//  Breaking part code over
//****************************************************************************************
//  processed_text = processed_text.replace( /mangal/g , "Krutidev010" ) ;   

    document.getElementById("unicode_text").value = processed_text  ;
   }


// --------------------------------------------------

function Replace_Symbols( )
{

//substitute array_two elements in place of corresponding array_one elements

if ( modified_substring != "" )  // if stringto be converted is non-blank then no need of any processing.
{
for ( input_symbol_idx = 0;   input_symbol_idx < array_one_length;    input_symbol_idx++ )

{

idx = 0  ;  // index of the symbol being searched for replacement

while (idx != -1 ) //whie-00
{

modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_two[input_symbol_idx] )
idx = modified_substring.indexOf( array_one[input_symbol_idx] )

} // end of while-00 loop
} // end of for loop

//**********************************************************************************
// Code for Replacing five Special glyphs
//**********************************************************************************

//**********************************************************************************
// Code for Glyph1 : Â± (reph+anusvAr)
//**********************************************************************************
   modified_substring = modified_substring.replace( /Â±/g , "Zà¤‚" ) ; // at some places  Ã¬  is  used eg  in "à¤•à¤°à¥à¤•à¤‚à¤§à¥,à¤ªà¥‚à¤°à¥à¤£à¤¾à¤‚à¤•".
//
//**********************************************************************************
// Glyp2: Ã†
// code for replacing "f" with "à¤¿" and correcting its position too. (moving it one position forward)
//**********************************************************************************

modified_substring = modified_substring.replace( /Ã†/g , "à¤°à¥f" ) ;  // at some places  Ã†  is  used eg  in "à¤§à¤¾à¤°à¥à¤®à¤¿à¤•".

var position_of_i = modified_substring.indexOf( "f" )

while ( position_of_i != -1 )  //while-02
{
var character_next_to_i = modified_substring.charAt( position_of_i + 1 )
var character_to_be_replaced = "f" + character_next_to_i
modified_substring = modified_substring.replace( character_to_be_replaced , character_next_to_i + "à¤¿" ) 
position_of_i = modified_substring.search( /f/ , position_of_i + 1 ) // search for i ahead of the current position.

} // end of while-02 loop

//**********************************************************************************
// Glyph3 & Glyph4: Ã‡  Ã‰
// code for replacing "fa" with "à¤¿à¤‚"  and correcting its position too.(moving it two positions forward)
//**********************************************************************************

modified_substring = modified_substring.replace( /Ã‡/g , "fa" ) ; // at some places  Ã‡  is  used eg  in "à¤•à¤¿à¤‚à¤•à¤°".
modified_substring = modified_substring.replace( /Ã‰/g , "à¤°à¥fa" ) ; // at some places  Ã‰  is  used eg  in "à¤¶à¤°à¥à¤®à¤¿à¤‚à¤¦à¤¾"

var position_of_i = modified_substring.indexOf( "fa" )

while ( position_of_i != -1 )  //while-02
{
var character_next_to_ip2 = modified_substring.charAt( position_of_i + 2 )
var character_to_be_replaced = "fa" + character_next_to_ip2
modified_substring = modified_substring.replace( character_to_be_replaced , character_next_to_ip2 + "à¤¿à¤‚" ) 
position_of_i = modified_substring.search( /fa/ , position_of_i + 2 ) // search for i ahead of the current position.

} // end of while-02 loop

//**********************************************************************************
// Glyph5: ÃŠ
// code for replacing "h" with "à¥€"  and correcting its position too.(moving it one positions forward)
//**********************************************************************************

modified_substring = modified_substring.replace( /ÃŠ/g , "à¥€Z" ) ; // at some places  ÃŠ  is  used eg  in "à¤•à¤¿à¤‚à¤•à¤°".


/*
var position_of_i = modified_substring.indexOf( "h" )

while ( position_of_i != -1 )  //while-02
{
var character_next_to_i = modified_substring.charAt( position_of_i + 1 )
var character_to_be_replaced = "h" + character_next_to_i
modified_substring = modified_substring.replace( character_to_be_replaced , character_next_to_i + "à¥€" ) 
position_of_i = modified_substring.search( /h/ , position_of_i + 1 ) // search for i ahead of the current position.

} // end of while-02 loop
*/


//**********************************************************************************
// End of Code for Replacing four Special glyphs
//**********************************************************************************

// following loop to eliminate 'chhotee ee kee maatraa' on half-letters as a result of above transformation.

var position_of_wrong_ee = modified_substring.indexOf( "à¤¿à¥" ) 

while ( position_of_wrong_ee != -1 )  //while-03

{
var consonent_next_to_wrong_ee = modified_substring.charAt( position_of_wrong_ee + 2 )
var character_to_be_replaced = "à¤¿à¥" + consonent_next_to_wrong_ee 
modified_substring = modified_substring.replace( character_to_be_replaced , "à¥" + consonent_next_to_wrong_ee + "à¤¿" ) 
position_of_wrong_ee = modified_substring.search( /à¤¿à¥/ , position_of_wrong_ee + 2 ) // search for 'wrong ee' ahead of the current position. 

} // end of while-03 loop

//**************************************
// 
//**************************************
//   alert(modified_substring);
//**************************************


// Eliminating reph "Z" and putting 'half - r' at proper position for this.
set_of_matras = "à¤… à¤† à¤‡ à¤ˆ à¤‰ à¤Š à¤ à¤ à¤“ à¤” à¤¾ à¤¿ à¥€ à¥ à¥‚ à¥ƒ à¥‡ à¥ˆ à¥‹ à¥Œ à¤‚ : à¤ à¥…" 

var position_of_R = modified_substring.indexOf( "Z" )

// alert(" 1. modified_substring = "+modified_substring );
// alert(" 2. position_of_R = "+position_of_R )

while ( position_of_R > 0 )  // while-04
{
probable_position_of_half_r = position_of_R - 1 ;

 //alert(" 3. probable_position_of_half_r = "+probable_position_of_half_r );

var character_at_probable_position_of_half_r = modified_substring.charAt( probable_position_of_half_r )

 //alert(" 4. character_at_probable_position_of_half_r = "+character_at_probable_position_of_half_r );

//************************************************************
// trying to find non-maatra position left to current O (ie, half -r).
//************************************************************

while ( set_of_matras.match( character_at_probable_position_of_half_r ) != null )  // while-05
// some vowel maatraa or anusvaar found, move to previous character
   {   probable_position_of_half_r = probable_position_of_half_r - 1 ;
       character_at_probable_position_of_half_r = modified_substring.charAt( probable_position_of_half_r ) ;
   
     //alert(" 5. probable_position_of_half_r = "+probable_position_of_half_r );
     //alert(" 6. character_at_probable_position_of_half_r = "+character_at_probable_position_of_half_r );
   } // end of while-05

//************************************************************
// check if the previous character to the present character is a halant
//************************************************************
   var previous_to_position_of_half_r = probable_position_of_half_r - 1 ;
 //alert(" 7. previous_to_position_of_half_r = "+previous_to_position_of_half_r );

   if (previous_to_position_of_half_r > 0)  // if-03
   {  var character_previous_to_position_of_half_r = modified_substring.charAt( previous_to_position_of_half_r )
    //alert(" 8. character_previous_to_position_of_half_r = "+character_previous_to_position_of_half_r );

      while ("à¥".match( character_previous_to_position_of_half_r ) != null ) // while-06
//    halant found, move to previous character
      {  probable_position_of_half_r = previous_to_position_of_half_r - 1 ;
         character_at_probable_position_of_half_r = modified_substring.charAt( probable_position_of_half_r ) ;

       //alert(" 9. probable_position_of_half_r = "+probable_position_of_half_r );
       //alert("10. character_at_probable_position_of_half_r = "+character_at_probable_position_of_half_r );
       
         previous_to_position_of_half_r = probable_position_of_half_r - 1 ;
         character_previous_to_position_of_half_r = modified_substring.charAt( previous_to_position_of_half_r )

       //alert("11. previous_to_position_of_half_r = "+previous_to_position_of_half_r );
       //alert("12. character_previous_to_position_of_half_r = "+character_previous_to_position_of_half_r );
      } // end of while-06
   } // end of if-03

//************************************************************

character_to_be_replaced = modified_substring.substr ( probable_position_of_half_r , ( position_of_R - probable_position_of_half_r ) ) ;
new_replacement_string = "à¤°à¥" + character_to_be_replaced ; 
character_to_be_replaced = character_to_be_replaced + "Z" ;
modified_substring = modified_substring.replace( character_to_be_replaced , new_replacement_string ) ;
position_of_R = modified_substring.indexOf( "Z" ) ;

 //alert("13. character_to_be_replaced = "+character_to_be_replaced );
 //alert("14. modified_substring = "+modified_substring );

} // end of while-04

} // end of IF  statement  meant to  supress processing of  blank  string.

//**************************************
//   alert(modified_substring);
//**************************************


} // end of the function  Replace_Symbols
 
} // end of Krutidev_to_unicode function

//*******************************************************************************
function Convert_to_Krutidev_010()
{
var array_one = new Array( 
// ignore all nuktas except in à¤¡à¤¼ and à¤¢à¤¼
"â€˜","â€™","â€œ","â€","(",")","{","}","=","à¥¤","?","-","Âµ","à¥°",",",".","à¥ ", 
"à¥¦","à¥§","à¥¨","à¥©","à¥ª","à¥«","à¥¬","à¥­","à¥®","à¥¯","x","+",";","_",

"à¥žà¥","à¥˜","à¥™","à¥š","à¤œà¤¼à¥","à¥›","à¥œ","à¥","à¥ž","à¥Ÿ","à¤±","à¤©",    // one-byte nukta varNas
"à¤¤à¥à¤¤à¥","à¤¤à¥à¤¤","à¤•à¥à¤¤","à¤¦à¥ƒ","à¤•à¥ƒ",

"à¤¶à¥à¤µ","à¤¹à¥à¤¨","à¤¹à¥à¤¯","à¤¹à¥ƒ","à¤¹à¥à¤®","à¤¹à¥à¤°","à¤¹à¥","à¤¦à¥à¤¦","à¤•à¥à¤·à¥","à¤•à¥à¤·","à¤¤à¥à¤°à¥","à¤¤à¥à¤°","à¤œà¥à¤ž",
"à¤›à¥à¤¯","à¤Ÿà¥à¤¯","à¤ à¥à¤¯","à¤¡à¥à¤¯","à¤¢à¥à¤¯","à¤¦à¥à¤¯","à¤¦à¥à¤µ",
"à¤¶à¥à¤°","à¤Ÿà¥à¤°","à¤¡à¥à¤°","à¤¢à¥à¤°","à¤›à¥à¤°","à¤•à¥à¤°","à¤«à¥à¤°","à¤¦à¥à¤°","à¤ªà¥à¤°","à¤—à¥à¤°","à¤°à¥","à¤°à¥‚",
"à¥à¤°",

"à¤“","à¤”","à¤†","à¤…","à¤ˆ","à¤‡","à¤‰","à¤Š","à¤","à¤","à¤‹",

"à¤•à¥","à¤•","à¤•à¥à¤•","à¤–à¥","à¤–","à¤—à¥","à¤—","à¤˜à¥","à¤˜","à¤™",
"à¤šà¥ˆ","à¤šà¥","à¤š","à¤›","à¤œà¥","à¤œ","à¤à¥","à¤","à¤ž",

"à¤Ÿà¥à¤Ÿ","à¤Ÿà¥à¤ ","à¤Ÿ","à¤ ","à¤¡à¥à¤¡","à¤¡à¥à¤¢","à¤¡","à¤¢","à¤£à¥","à¤£",  
"à¤¤à¥","à¤¤","à¤¥à¥","à¤¥","à¤¦à¥à¤§","à¤¦","à¤§à¥","à¤§","à¤¨à¥","à¤¨",  

"à¤ªà¥","à¤ª","à¤«à¥","à¤«","à¤¬à¥","à¤¬","à¤­à¥","à¤­","à¤®à¥","à¤®",
"à¤¯à¥","à¤¯","à¤°","à¤²à¥","à¤²","à¤³","à¤µà¥","à¤µ", 
"à¤¶à¥", "à¤¶",  "à¤·à¥", "à¤·",  "à¤¸à¥",   "à¤¸",   "à¤¹",     

"à¤‘","à¥‰","à¥‹","à¥Œ","à¤¾","à¥€","à¥","à¥‚","à¥ƒ","à¥‡","à¥ˆ",
"à¤‚","à¤","à¤ƒ","à¥…","à¤½","à¥ ","à¥","à¤¼","/")

var array_two = new Array( 

"^","*","Ãž","ÃŸ","Â¼","Â½","Â¿","Ã€","Â¾","A","\\","&","&","Å’","]","-","~ ", 
"Ã¥","Æ’","â€ž","â€¦","â€ ","â€¡","Ë†","â€°","Å ","â€¹","Ã›","$","(","&",

// "Â¶","d","[k","x","T","t","M+","<+","Q",";","j","u",
"Â¶+","d+","[k+","x+","T+","t+","M+","<+","Q+",";+","j+","u+",
"Ã™","Ã™k","Ã¤","â€“","â€”",       

"Ãœo","Ã ","Ã¡","Ã¢","Ã£","Âºz","Âº","Ã­","{","{k","Â«","=","K", 
"NÃ®","VÃ®","BÃ®","MÃ®","<Ã®","|","}",
"J","VÂª","MÂª","<ÂªÂª","NÂª","Ã˜","Ã","Ã¦","Ã§","xz","#",":",
"z",

"vks","vkS","vk","v","bZ","b","m","Ã…",",s",",","_",

"D","d","Ã´","[","[k","X","x","?","?k","Â³", 
"pkS","P","p","N","T","t","Ã·",">","Â¥",

"Ãª","Ã«","V","B","Ã¬","Ã¯","M","<",".",".k",   
"R","r","F","Fk",")","n","Ã¨","Ã¨k","U","u",   

"I","i","Â¶","Q","C","c","H","Hk","E","e",
"Â¸",";","j","Y","y","G","O","o",
"'","'k","\"","\"k","L","l","g",      

"vâ€š","â€š","ks","kS","k","h","q","w","`","s","S",
"a","Â¡","%","W","Â·","~ ","~","+","@")   // "~j"
  
//************************************************************
//Put "Enter chunk size:" line before "<textarea name= ..." if required to be used.    
//************************************************************
//Enter chunk size: <input type="text" name="chunksize" value="6000" size="7" maxsize="7" style="text-align:right"><br/><br/>
//************************************************************
// The following two characters are to be replaced through proper checking of locations:

// "à¤°à¥" (reph) 
// "Z" )

// "à¤¿"  
// "f" )


var array_one_length = array_one.length ;

var modified_substring = document.getElementById("unicode_text").value  ;

//****************************************************************************************
//  Break the long text into small bunches of max. max_text_size  characters each.
//****************************************************************************************
    var text_size = document.getElementById("unicode_text").value.length ;

    var processed_text = '' ;  //blank

    var sthiti1 = 0 ;  var sthiti2 = 0 ;  var chale_chalo = 1 ;
 
    var max_text_size = 6000;

   //************************************************************
   // var max_text_size = chunksize;	
   // alert(max_text_size);
   //************************************************************

    while ( chale_chalo == 1 ) 
    {
     sthiti1 = sthiti2 ;

     if ( sthiti2 < ( text_size - max_text_size ) )  
     { 
      sthiti2 +=  max_text_size ;
      while (document.getElementById("unicode_text").value.charAt ( sthiti2 ) != ' ') {sthiti2--;}
     } 
     else  { sthiti2 = text_size  ;  chale_chalo = 0 }

     var modified_substring = document.getElementById("unicode_text").value.substring ( sthiti1, sthiti2 )  ;

    Replace_Symbols( ) ;

    processed_text += modified_substring ;

//****************************************************************************************
//  Breaking part code over
//****************************************************************************************
//  processed_text = processed_text.replace( /mangal/g , "Krutidev010" ) ;   

    document.getElementById("legacy_text").value = processed_text  ;
   }


//**************************************************

function Replace_Symbols( )
   {


    // if string to be converted is non-blank then no need of any processing.
    if (modified_substring != "" )  
       {

// first replace the two-byte nukta_varNa with corresponding one-byte nukta varNas.

modified_substring = modified_substring.replace ( /à¤¤à¥à¤°à¥à¤¯/g , "Â«à¤¯" )  ; 
modified_substring = modified_substring.replace ( /à¤¶à¥à¤°à¥à¤¯/g , "Ãœâ€â€zà¤¯" )  ; 

modified_substring = modified_substring.replace ( /à¤•à¤¼/ , "à¥˜" )  ; 
modified_substring = modified_substring.replace ( /à¤–à¤¼â€Œ/g , "à¥™" )  ;
modified_substring = modified_substring.replace ( /à¤—à¤¼/g , "à¥š" )  ;
modified_substring = modified_substring.replace ( /à¤œà¤¼/g , "à¥›" )  ;
modified_substring = modified_substring.replace ( /à¤¡à¤¼/g , "à¥œ" )  ;
modified_substring = modified_substring.replace ( /à¤¢à¤¼/g , "à¥" )  ;
modified_substring = modified_substring.replace ( /à¤¨à¤¼/g , "à¤©" )  ;
modified_substring = modified_substring.replace ( /à¤«à¤¼/g , "à¥ž" )  ;
modified_substring = modified_substring.replace ( /à¤¯à¤¼/g , "à¥Ÿ" )  ;
modified_substring = modified_substring.replace ( /à¤°à¤¼/g , "à¤±" )  ;


        // code for replacing "à¤¿" (chhotee ee kii maatraa) with "f"  and correcting its position too.
        
        var position_of_f = modified_substring.indexOf( "à¤¿" )  ;
         while ( position_of_f != -1 )  //while-02
           {
            var character_left_to_f = modified_substring.charAt( position_of_f - 1 )  ;
            modified_substring = modified_substring.replace( character_left_to_f + "à¤¿" ,  "f" + character_left_to_f )  ;

            position_of_f = position_of_f - 1  ;

            while (( modified_substring.charAt( position_of_f - 1 ) == "à¥" )  &  ( position_of_f != 0  ) )
               {
                var string_to_be_replaced = modified_substring.charAt( position_of_f - 2 ) + "à¥"  ;
                  modified_substring = modified_substring.replace( string_to_be_replaced + "f", "f" + string_to_be_replaced ) ;

                position_of_f = position_of_f - 2  ;
               }
            position_of_f = modified_substring.search( /à¤¿/ , position_of_f + 1 ) ; // search for f ahead of the current position.

           } // end of while-02 loop
   //************************************************************     
   //     modified_substring = modified_substring.replace( /fà¤°à¥/g , "Â£"  )  ;
   //************************************************************     
        // Eliminating "à¤°à¥" and putting  Z  at proper position for this.

       set_of_matras = "à¤¾à¤¿à¥€à¥à¥‚à¥ƒà¥‡à¥ˆà¥‹à¥Œà¤‚:à¤à¥…" 

modified_substring += '  '    ;  // add two spaces after the string to avoid UNDEFINED char in the following code.

       var position_of_half_R = modified_substring.indexOf( "à¤°à¥" ) ;
    //  alert(" 21. position_of_half_R = " + position_of_half_R);

//************************************************************************************
   while ( position_of_half_R > 0  )  // while-03
   {
    // "à¤°à¥"  is two bytes long
    var probable_position_of_Z = position_of_half_R + 2   ;  
    var character_at_probable_position_of_Z = modified_substring.charAt( probable_position_of_Z )

 // alert(" 3. probable_position_of_Z = "+probable_position_of_Z );
 // alert(" 4. character_at_probable_position_of_Z = "+character_at_probable_position_of_Z );

    // trying to find non-maatra position right to probable_position_of_Z .

    while( set_of_matras.match( character_at_probable_position_of_Z ) != null ) // while-04 
    {
     probable_position_of_Z = probable_position_of_Z + 1 ;
     character_at_probable_position_of_Z = modified_substring.charAt( probable_position_of_Z ) ;

// alert(" 5. probable_position_of_Z = "+probable_position_of_Z );
// alert(" 6. character_at_probable_position_of_Z = "+character_at_probable_position_of_Z );
    } // end of while-04
//************************************************************
// check if the next character is a halant
//************************************************************
    var right_to_position_of_Z = probable_position_of_Z + 1 ;
 // alert(" 7. right_to_position_of_Z = "+right_to_position_of_Z );

    if (right_to_position_of_Z > 0)  // if-03
    { var character_right_to_position_of_Z = modified_substring.charAt( right_to_position_of_Z )
   // alert(" 8. character_right_to_position_of_Z = "+character_right_to_position_of_Z );
//    while ("à¥".match( character_right_to_position_of_Z ) != null ) // while-05

      while ( character_right_to_position_of_Z == "à¥" ) // while-05
      {  
//       halant found, move to next character
         probable_position_of_Z = right_to_position_of_Z + 1 ;
         character_at_probable_position_of_Z = modified_substring.charAt( probable_position_of_Z ) ;

    // alert(" 9. probable_position_of_Z = "+probable_position_of_Z );
    // alert("10. character_at_probable_position_of_Z = "+character_at_probable_position_of_Z );
       
         right_to_position_of_Z = probable_position_of_Z + 1 ;
         character_right_to_position_of_Z = modified_substring.charAt( right_to_position_of_Z )

    // alert("11. right_to_position_of_Z = "+right_to_position_of_Z );
    // alert("12. character_right_to_position_of_Z = "+character_right_to_position_of_Z );
      } // end of while-05

    // alert("121. position_of_half_R = "+position_of_half_R);
    // alert("122. probable_position_of_Z = "+probable_position_of_Z);

   } // end of if-03
//************************************************************

       string_to_be_replaced = modified_substring.substr ( position_of_half_R + 2,(probable_position_of_Z - position_of_half_R)-1) ;
//************************************************************
//     check if character_right_to_position_of_Z is a space
//       if (space.match(character_right_to_position_of_Z) != null) 
//       {
//          string_to_be_replaced = string_to_be_replaced.substr(0,string_to_be_replaced.length - 1)
//        alert("13. string_to_be_replaced = "+string_to_be_replaced );
//        alert("14. string_to_be_replaced.length ="+string_to_be_replaced.length);
//       }
       modified_substring = modified_substring.replace( "à¤°à¥" + string_to_be_replaced, string_to_be_replaced + "Z" ) ;

//     alert("15. string_to_be_replaced = "+string_to_be_replaced );
//     alert("16. modified_substring = "+modified_substring );
       position_of_half_R = modified_substring.indexOf( "à¤°à¥" ) ;
//      alert("17. position_of_half_R = "+position_of_half_R )

   } // end of while-03
//***********************************************************
modified_substring = modified_substring.substr ( 0 , modified_substring.length - 2 )  ;



        //substitute array_two elements in place of corresponding array_one elements

        for( input_symbol_idx = 0; input_symbol_idx < array_one_length; input_symbol_idx++ )
           {
            idx = 0  ;  // index of the symbol being searched for replacement

            while (idx != -1 ) //whie-00
               {
                modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_two[input_symbol_idx] )
                idx = modified_substring.indexOf( array_one[input_symbol_idx] )
               } // end of while-00 loop
           } // end of for loop

        } // end of IF  statement  meant to  supress processing of  blank  string.
modified_substring = modified_substring.replace( /Zksa/g , "ksZa" ) ; 
modified_substring = modified_substring.replace( /~ Z/g , "Z~" ) ; 
modified_substring = modified_substring.replace( /Zk/g , "kZ" ) ; 
modified_substring = modified_substring.replace( /Zh/g , "ÃŠ" ) ; 

    } // end of the function  Replace_Symbols( )


  } // end of Convert_Unicode_to_Krutidev010 function