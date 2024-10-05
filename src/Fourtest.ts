// Consider a scenario where a user needs to withdraw money from an ATM.To facilitate this, create a function named giveNotes that takes two arguments:
//  an array representing the available notes and the amount the user wishes to withdraw.The function should provide the user with the requested amount in notes,
//     or prompt the user to enter a new withdrawal amount based on the available notes if an exact match is not possible.
//    Below is input and expected output
// input1:
// giveNotes(arrNotes: [1000, 200, 500, 100], amount: 2700)
// output1:
//    Please collect Notes[500: 1, 1000: 2, 200: 1]
// input2:
// giveNotes(arrNotes: [1000, 200, 100], amount: 2700)
// output2:
//     Please collect Notes[100: 1, 200: 3, 1000: 2]
// input3:
// giveNotes(arrNotes: [1000, 200, 100], amount: 2000)
// output3:
//     Please collect Notes[1000: 2]
// giveNotes(arrNotes: b, amount: 2750)
//    please enter another amount
