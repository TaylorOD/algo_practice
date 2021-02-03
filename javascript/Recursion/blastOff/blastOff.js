// Write a recursive function that counts down from 10 to 0

const blastOff = function (inputNumber) {
  if (inputNumber === 0) {
    console.log("Blastoff!")
    return
  } else {
    console.log(inputNumber)
    inputNumber -= 1
    blastOff(inputNumber)
  }
}

blastOff(10)