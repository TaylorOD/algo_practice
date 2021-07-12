// The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

// Examples
// fiftyThirtyTwenty(10000) ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

// fiftyThirtyTwenty(50000) ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }

// fiftyThirtyTwenty(13450) ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }

// Create function that takes in ATI variable 
function fiftyThirtyTwenty(ati) {
  // Create Result hash
	let result = {}
  
  // Create Needs value that equals 50% of ATI
  result.Needs = ati * .50
  // Create Wants value that equals 30% of ATI
  result.Wants = ati * .30
  // Create Savings value that equals 20% of ATI
	result.Savings = ati * .20
	// Return result variable 
	return result
}
// Call function with example variables 
console.log(fiftyThirtyTwenty(10000))
console.log(fiftyThirtyTwenty(5000))
console.log(fiftyThirtyTwenty(13450))