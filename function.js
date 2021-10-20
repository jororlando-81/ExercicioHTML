var num1 = 0;
var num2 = 0;
var func = 0;     //  "var" variavel global


function limpar(){ 
    
                    document.getElementById("tela").value = null;

                    var num1 = 0;
                    var num2 = 0;


                }   

function adicionarNUM(  numero  ){

                                  var numero;
                                 
                                  document.getElementById("tela").value += numero;
                                 
                                  // var final =   document.getElementById("tela").value;


}


function operacao(tipo) {
                               num1 =  document.getElementById("tela").value ;
                               
                               document.getElementById("tela").value = null;
                               
                               func = tipo;

}


function resultado() {

                        num2 = document.getElementById("tela").value ;

                        if (  func == 1  ) {

                        var resultado = parseInt(num1) + parseInt(num2);

                       }    
                       
                       
                        else if (  func == 2 ) {

                            var resultado = parseInt(num1) - parseInt(num2);
    
                           }   

                        else if (  func == 3 ) {

                            var resultado = parseInt(num1) / parseInt(num2);
    
                           }   
                         
                           else if (  func == 4 ) {

                            var resultado = parseInt(num1) * parseInt(num2);
    
                           }      
                           
                           else if (  func == 5 ) {

                           var resultado =  parseInt(num1) * parseInt(num2) / 100 ;  
    
                           }   
                          
                          
                          
                           else if (  func == 6 ) {

                            var resultado =  Math.sqrt( parseInt(num1) ) ;
    
                           }   
                         
                         
                         
                         
                           document.getElementById("tela").value = resultado ;

                    }