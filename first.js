let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
    try{
      string = eval(string);
      document.querySelector('input').value = string;
    }catch(err){
        document.querySelector('input').value ="Error" ;
    }
    }
    else if(e.target.innerHTML == 'CA'){
      string = ""
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'DE'){
      string = string.substring(0,string.length-1);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == '%'){
      string = string/100;
      document.querySelector('input').value = string;
    }else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
     }
  })
})