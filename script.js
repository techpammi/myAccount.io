const scriptURL = 'https://script.google.com/macros/s/AKfycbxXw_GTxAIOI4G5IuhzImxq4_JFCYgFotTe7kLkpYC1GLGn1LORO01Q9m72cf6ADeaH/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})