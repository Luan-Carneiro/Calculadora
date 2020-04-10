const getOutputBox = document.getElementById("OutputBox")
const getHistoryBox = document.getElementById("HistoryBox")
let arrayOfNumbers = []
let countTypeVariable = ""

function setNumberOnOutput(num) {
    getOutputBox.innerHTML += num
}

function CountType(type) {
    const getNumber = Number(getOutputBox.textContent)

    if (type == "Sum") {
        arrayOfNumbers.push(getNumber)
        getOutputBox.innerHTML = ""
        countTypeVariable = "Sum"
        getHistoryBox.innerHTML += `${getNumber} + `

    } else if (type == "Sub") {
        arrayOfNumbers.push(getNumber)
        getOutputBox.innerHTML = ""
        countTypeVariable = "Subtrair"
        getHistoryBox.innerHTML += `${getNumber} - `

    } else if (type == "Mult") {
        arrayOfNumbers.push(getNumber)
        getOutputBox.innerHTML = ""
        countTypeVariable = "Multiplicar"
        getHistoryBox.innerHTML += `${getNumber} * `

    } else if (type == "Div") {
        arrayOfNumbers.push(getNumber)
        getOutputBox.innerHTML = ""
        countTypeVariable = "Dividir"
        getHistoryBox.innerHTML += `${getNumber} / `
    }

}

function GenerateResult() {
    const getNumber = Number(getOutputBox.textContent)
    arrayOfNumbers.push(getNumber)
    getHistoryBox.innerHTML += `${getNumber}`
    getOutputBox.innerHTML = ""

    if (countTypeVariable == "Sum") {
        const reducerSum = (accumulator, currentValue) => accumulator + currentValue
        let getReducer = arrayOfNumbers.reduce(reducerSum)
        getOutputBox.innerHTML = getReducer
        arrayOfNumbers = []
        arrayOfNumbers.push(getReducer)
        getHistoryBox.innerHTML = ""

    } else if (countTypeVariable == "Subtrair") {
        const reducerSub = (accumulator, currentValue) => accumulator - currentValue
        let getReducer2 = arrayOfNumbers.reduce(reducerSub)
        getOutputBox.innerHTML = getReducer2
        arrayOfNumbers = []
        arrayOfNumbers.push(getReducer2)
        getHistoryBox.innerHTML = ""

    } else if (countTypeVariable == "Multiplicar") {
        const reducerMul = (accumulator, currentValue) => accumulator * currentValue
        let getReducer3 = arrayOfNumbers.reduce(reducerMul)
        getOutputBox.innerHTML = getReducer3
        arrayOfNumbers = []
        arrayOfNumbers.push(getReducer3)
        getHistoryBox.innerHTML = ""

    } else if (countTypeVariable == "Dividir") {
        const reducerDiv = (accumulator, currentValue) => accumulator / currentValue
        let getReducer4 = arrayOfNumbers.reduce(reducerDiv)
        getOutputBox.innerHTML = getReducer4
        arrayOfNumbers = []
        arrayOfNumbers.push(getReducer4)
        getHistoryBox.innerHTML = ""

    }

    arrayOfNumbers = []

}

function clearAll() {
    arrayOfNumbers = []
    getHistoryBox.innerHTML = ""
    getOutputBox.innerHTML = ""
}
