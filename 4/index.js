const phonesBlock = document.querySelector('.block-phones');
let phoneCount = 1;
class Person{
  constructor(name, phone, comment){
    this.name = name;
    this.phone = phone;
    this.comment = comment;
  }
  send(){
    document.getElementById('name').value = this.name;
    document.getElementById('phone').value = this.phone;
    document.getElementById('comment').value = this.comment;
    return;
  }

}
let firstPerson = new Person('Петрович', '+5674526745', 'Завхоз');

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

  if (e.target.classList.contains('button_send')) {
    firstPerson.send();
    setTimeout(() =>{
      alert('Message sended');
    }, 0);
    e.preventDefault();
  }
  
})