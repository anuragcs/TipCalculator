//TIP CALCULATOR

//calculateBill
//increasePeople
//decreasePeople
//numberOfPeople
//perpersontotal

const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberpeople')
const perpersonTotal = document.getElementById('pertotal')


let numberOfPeople = Number(numberOfPeopleDiv.textContent)

const calculateBill = () => {
    const bill = Number(billInput.value)
    //console.log(bill)

    const tipPercentage = Number(tipInput.value)/100

    const tipAmount = bill*tipPercentage
    

    const total = tipAmount + bill
    
    //calculate the per person total and divide by the total

    const perpersontotalis = total / numberOfPeople

    perpersonTotal.textContent = `$${perpersontotalis.toFixed(2)}`

}

const increasePeople = () => {
    numberOfPeople +=1
    numberOfPeopleDiv.textContent = numberOfPeople
    calculateBill()
}

const decreasePeople = () => {
    if(numberOfPeople<=1){
        throw 'Wrong Entry, You can not have less than 1 person'
        return
    }
    numberOfPeople-=1
    numberOfPeopleDiv.textContent = numberOfPeople
    
    calculateBill()
}




