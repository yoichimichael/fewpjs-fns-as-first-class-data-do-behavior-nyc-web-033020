/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
  let hour = parseInt(time.split(':')[0], 10)
  let minute = parseInt(time.split(':')[1], 10)
  if (hour < 12) {
    return "Good Morning"
  } else if (hour >= 17) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  let element = document.getElementById('greeting')
  element.innerText = `${string}`
}