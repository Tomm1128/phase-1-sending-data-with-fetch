// Add your code here

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
}
