// getPrice = function() {
//     var numVal1 = Number(document.getElementById("price").value);
//     var numVal2 = Number(document.getElementById("discount").value) / 100;
//     var totalValue = numVal1 - (numVal1 * numVal2)
//     document.getElementById("total").value = totalValue.toFixed(2)
// }

document.getElementById('button-id').addEventListener('click',function(){
    const priceId = document.getElementById('price-id')
    const priceIdString = priceId.value
    const priceIdNumber = parseFloat(priceIdString)
    
    const percentId = document.getElementById('percent-id')
    const percentIdString = percentId.value / 100
    const percentIdNumber = parseFloat(percentIdString)
    console.log(percentIdNumber);

    const calculation =  priceIdNumber - (percentIdNumber * priceIdNumber)
    console.log(calculation);

    const inputId = document.getElementById('input-id')
    inputId.value = calculation
    
})