window.onload = function (){ 
    console.log("Hello world!")
    const form = document.querySelector("#contactForm")
    const submitButton = document.querySelector("#submitButton")
    const scriptURL = 'https://script.google.com/macros/s/1XTaVdkdAnzhAHoLOA-x0K4svtJOB9RUnp2OgudFCNoEE4Lo8muDKOgSO/exec'
 
    form.addEventListener('submit', e => {
      submitButton.disabled = true
      e.preventDefault()
      let requestBody = new FormData(form)
      fetch(scriptURL, { method: 'POST', body: requestBody})
        .then(response => {
           alert('Success!', response)
           submitButton.disabled = false
          })
        .catch(error => {
        alert('Error!', error.message)
        console.log(requestBody.entries)
          submitButton.disabled = false
 
        }
        )
    })
}