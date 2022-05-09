const body = document.querySelector('body');
const inner = document.createElement('div');
inner.className ='inner';
inner.setAttribute('id', 'inner')
const textarea = document.createElement('textarea');
textarea.className = 'textarea';
const btn = document.querySelector('.btn');
const title = document.createElement('h1');
title.className = 'title';
title.textContent = 'Key-board';
const subtitle = document.createElement('h2');
subtitle.className = 'subtitle';
subtitle.textContent = 'Created on Windows';

body.appendChild(title)
body.appendChild(subtitle)
body.appendChild(textarea)
body.appendChild(inner)

const keyboard = [0,49,50,51,52,53,54,55,56,57,48,173,61,8,9,81,87,69,82,84,89,85,73,79,80,91,13,20,65,83,68,70,71,72,74,75,76,59,222,220,27,16, 90,88,67,86,66,78,77,188,190,191,16,17, 18,32, 18,17 ]
document.onkeydown = function(event){
console.log(event)
    keyboard.push(event.charCode);
   console.log(keyboard)
};
 function init(){
     let out = '';
     for (let i = 0; i < keyboard.length; i++){
        out += ' <div class ="btn" data ="'+keyboard[i] +'">' + String.fromCharCode(keyboard[i])+ '</div>';
    }
   inner.innerHTML = out;
 
};
init();

const btnKeys = document.querySelectorAll('.btn');

btnKeys[11].textContent = '-'
btnKeys[0].textContent = '`'
btnKeys[38].textContent = '\''
btnKeys[39].textContent = '\/'
btnKeys[25].textContent = 'Win'
btnKeys[40].textContent = 'Esc'
btnKeys[49].textContent = '<'
btnKeys[50].textContent = '>'
btnKeys[51].textContent = '?'

const backSpace = btnKeys[13]
   backSpace.classList.add ('back-space');
   backSpace.textContent = 'Back Space';
   backSpace.setAttribute('id', 'backspace');
    
   const tab = btnKeys[14];
   tab.classList.add ('tab');
   tab.textContent = 'Tab';
  
   const enter = btnKeys[26];
   enter.classList.add ('enter');
   enter.textContent = 'Enter';

   const capsLock = btnKeys[27];
   capsLock.classList.add ('caps-lock');
   capsLock.textContent = 'Caps Lock';
   
   const shift = btnKeys[52];
  shift.classList.add ('shift');
  shift.textContent = 'Shift';
 
  const shiftTwo = btnKeys[41];
  shiftTwo.classList.add ('shift');
  shiftTwo.textContent = 'Shift';

  const ctrl = btnKeys[53];
  ctrl.classList.add ('ctrl');
  ctrl.textContent = 'Ctrl';
  

  const ctrlTwo = btnKeys[57];
  ctrlTwo.classList.add ('ctrl');
  ctrlTwo.textContent = 'Ctrl';

  const space = btnKeys[55];
  space.classList.add ('space');

  const alt = btnKeys[54];
  alt.classList.add ('alt');
  alt.textContent = 'Alt';
  
  const altTwo = btnKeys[56];
  altTwo.classList.add ('alt');
  altTwo.textContent = 'Alt';
  
  document.onkeydown = function(event){
    console.log(event.code)
    console.log(event.keyCode)
    document.querySelectorAll('#inner .btn').forEach(function(element){
        element.classList.remove('active');
    })
    document.querySelector('#inner .btn[data="'+ event.keyCode +'"]').classList.add('active');
  };
  
   document.querySelectorAll('#inner .btn').forEach(function(element){
       element.onclick = function(event){
        document.querySelectorAll('#inner .btn').forEach(function(element) {
            element.classList.remove('active'); 
        });
        let code = this.getAttribute('data');
        this.classList.add('active');
       textarea.innerHTML = code;
       };
   
   });
