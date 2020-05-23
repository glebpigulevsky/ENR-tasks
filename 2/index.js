const flag = document.createElement('div');
flag.classList.add('flag');
const data = {
  height: 60,
  width: 80,
  content: 'O',
}
document.addEventListener('DOMContentLoaded', () => {
  for (line = 0; line < 3; line += 1){
    let div = document.createElement('div');
    for (h = 0; h < data.height/3 ; h += 1){
      for (i = 0; i < data.width; i += 1){
        div.innerHTML += data.content;
      }
      div.innerHTML += '<br>';
    }
    
    
    flag.appendChild(div);
  }
  
  
  document.body.append(flag);
});