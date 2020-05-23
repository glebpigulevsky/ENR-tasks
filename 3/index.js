const phonesBlock = document.querySelector('.block-phones');
let phoneCount = 1;
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('button_addPhone')) {
    e.preventDefault();
    e.target.parentNode.removeChild(e.target);
    phonesBlock.innerHTML += `
    <div>
      <input type="text" id="phone${phoneCount}" placeholder="phone">
      <button class="button_addPhone">+</button>
    </div>
    `;
    phoneCount += 1;
  }
  
})