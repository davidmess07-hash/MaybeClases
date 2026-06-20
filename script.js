// Año dinámico en el pie de página
document.getElementById ( ' y ' ) . textContent = new Date ( ) . getFullYear ( ) ;​​   
// Menú móvil
const cajón = document.getElementById ( ' cajón ' ) ;​​   
const openBtn = document.getElementById ( ' openMenu ' ) ;​​   
const closeBtn = document.getElementById ( ' closeMenu ' ) ;​​   
function openDrawer ( ) { drawer . classList . add ( ' open ' ) ; document . body . style . overflow = ' hidden ' ; }    
function closeDrawer ( ) { drawer . classList . remove ( ' open ' ) ; document . body . style . overflow = ' ' ; }    
abrirBtn ? . addEventListener ( ' hacer clic ' , abrirDrawer ) ; 
closeBtn ? . addEventListener ( ' click ' , closeDrawer ) ; 
cajón ? . addEventListener ( ' clic ' , ( e ) = > { if ( e . target = = = cajón ) closeDrawer ( ) ; } ) ;      
documento . querySelectorAll ( ' [data-close] ' ) . forEach ( a = > a . addEventListener ( ' click ' , closeDrawer ) ) ;   
// Formulario -> WhatsApp
const WA_NUMBER = ' 34699331196 ' ;   
const form = document.getElementById ( ' waForm ' ) ;​​   
formulario ? . addEventListener ( ' enviar ' , ( e ) = > {   
e . preventDefault ( ) ;  
const data = new FormData ( form ) ;      
const nombre = ( datos . obtener ( ' nombre ' ) | | ' ' ) . aCadena ( ) . trim ( ) ;       
const level = ( data . get ( ' level ' ) | | ' ' ) . toString ( ) . trim ( ) ;       
const msg = ( data . get ( ' msg ' ) | | ' ' ) . toString ( ) . trim ( ) ;       
si ( ! nombre ) {    
alert ( ' Por favor, indícanos tu nombre. ' ) ;    
regresar ;    
}  
texto constante =    
` Hola Quizás, soy ${ nombre } .
Nivel del alumno: ${ nivel } .
${ mensaje ? ' Mensaje: ' + msg : ' Me gustaría más información. ' } ` ;      
const url = ` https://wa.me/ ${ WA_NUMBER } ?text= ${ encodeURIComponent ( text ) } ` ;     
ventana.abrir ( url , ' _blank ' , ' noopener ' ) ;​​    
} ) ;
// Desplazamiento suave para enlaces internos (por si el navegador no aplica scroll-behavior)
documento . querySelectorAll ( ' a[href^= " # " ] ' ) . forEach ( a = > {  
a . addEventListener ( ' clic ' , ( e ) = > {     
const id = a . getAttribute ( ' href ' ) ;       
si ( id & & id . length > 1 ) {          
const target = document.querySelector ( id ) ;​​         
si ( objetivo ) {        
e . preventDefault ( ) ;        
objetivo . scrollIntoView ( { comportamiento : ' suave ' , bloque : ' inicio ' } ) ;             
}      
}    
} ) ;  
} ) ;
