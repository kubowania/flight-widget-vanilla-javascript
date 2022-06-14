const tableBody = document.getElementById('table-body')

let flights = [
  {
    time: "08:11",
    destination: "OMAN",
    flight: "OX 203",
    gate: "A 01",
    remarks: "ON TIME"
   },
  {
    time: "12:39",
    destination: "LONDON",
    flight: "CL 320",
    gate: "C 31",
    remarks: "CANCELLED"
   },
  {
    time: "13:21",
    destination: "DUBAI",
    flight: "DXB 201",
    gate: "A 19",
    remarks: "CANCELLED"
  },
  {
    time: "14:01",
    destination: "FRANKFURT",
    flight: "FR 402",
    gate: "B 02",
    remarks: "ON TIME"
  },
  {
    time: "15:22",
    destination: "TOKYO",
    flight: "TK 211",
    gate: "A 32",
    remarks: "DELAYED"
  }
]

const destinations = ["TOKYO", "FRANKFURT", "DUBAI", "LONDON", "OMAN", "BEIRUT"]
const remarks = ["ON TIME", "DELAYED", "CANCELLED"]
let hour = 15

function populateTable() {
  for (const flight of flights) {
    const tableRow = document.createElement("tr")
    const tableIcon = document.createElement("td")
    tableIcon.textContent = "✈"
    tableRow.append(tableIcon)

    for (const flightDetail in flight) {
      const tableCell = document.createElement("td")
      const word = Array.from(flight[flightDetail])

      for (const [index, letter] of word.entries()) {
        const letterElement = document.createElement("div")
        setTimeout(() => {
          letterElement.classList.add('flip')
          letterElement.textContent = letter
          tableCell.append(letterElement)
        }, 100 * index)


      }
      tableRow.append(tableCell)
    }
    tableBody.append(tableRow)
  }
}
populateTable() 



function generateRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}

function generateRandomNumber(maxNumber) {
  const numbers = "0123456789"
  if (maxNumber) {
    const newNumbers = numbers.slice(0, maxNumber)
    return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length))
  } else {
    return numbers.charAt(Math.floor(Math.random() * numbers.length))
  }
}

function generateTime() {
  let displayHour = hour
  if (hour < 24) {
    hour++
  }
  if (hour >= 24) {
    hour = 1
    displayHour = hour
  }
  if (hour < 10) {
    displayHour = "0" + hour
  }
  return displayHour +  ":" + generateRandomNumber(5) + generateRandomNumber()
}

function shuffleUp() {
  flights.shift()
  flights.push({
    time: generateTime(),
    destination: destinations[Math.floor(Math.random() * destinations.length)],
    flight: generateRandomLetter() + generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber() + generateRandomNumber(),
    gate: generateRandomLetter() + " " + generateRandomLetter() + generateRandomLetter(),
    remarks: remarks[Math.floor(Math.random() * remarks.length)]
  })
  tableBody.textContent = ""
  populateTable()
}


setInterval(shuffleUp, 5000)
