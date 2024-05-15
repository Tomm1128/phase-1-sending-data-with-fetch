const submitData = (userName, userEmail) => {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
      "Accept": "application/json",
    }, 
    body: JSON.stringify({name: userName, email: userEmail}),
  })
  .then((response) => {
    return response.json()
  })
  .then((userObj) => {
    const body = document.querySelector("body")
    const p = document.createElement("p")
    p.textContent = userObj.id
    body.appendChild(p)
  })
  .catch((error) => {
    alert("Something went wrong, please refresh and try again")
    const body = document.querySelector("body")
    const errorMessage = error.message
    const p = document.createElement("p")
    p.textContent = errorMessage
    body.appendChild(p)
  })
}
