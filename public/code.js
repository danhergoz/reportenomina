let menubtn = document.getElementById('menu');
let mdesplegable = document.getElementById('menudesplegable');
let clicks = 0;

let lyrbtn = document.getElementById('login');
let loginyregister = document.getElementById('registerylogin');
let clicks2 = 0;

let lyrbtn = document.getElementById('crear_nomina');
let loginyregister = document.getElementById('newnomina');
let clicks2 = 0;

let lyrbtn = document.getElementById('download');
let loginyregister = document.getElementById('downloadnomina');
let clicks2 = 0;

let lyrbtn = document.getElementById('backward');
let loginyregister = document.getElementById('newnomina');
let clicks2 = 0;

menubtn.addEventListener('click',(e)=>{
    clicks+=1;
    if(clicks==2){
        mdesplegable.style.left='-100%';
        setTimeout(()=>{
            mdesplegable.style.display='none';
        },200)
        clicks=0;
    }else{
        mdesplegable.style.display='flex';
        setTimeout(()=>{
            mdesplegable.style.left='2%';
        },2)
    }
    
})

lyrbtn.addEventListener('click',(e)=>{
    clicks2+=1;
    if(clicks2==2){
        loginyregister.style.right='-100%';
        setTimeout(()=>{
            loginyregister.style.display='none';
        },200)
        clicks2=0;
    }else{
        loginyregister.style.display='flex';
        setTimeout(()=>{
            loginyregister.style.right='4%';
        },2)
    }
    
})

/*Ventana de cambio*/

openmenu.addEventListener('click',(e)=>{
        menu.style.display='flex';
        setTimeout(()=>{
            menu.style.opacity="100%"
        },410)
});
closemenu.addEventListener('click',(e)=>{
    menu.style.opacity='0';
        setTimeout(()=>{
            menu.style.display="none"
        },410)
})
