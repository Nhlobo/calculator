function calculate() {
  var principal = parseFloat(document.getElementById('principal').value);
  var rate = parseFloat(document.getElementById('rate').value);
  var period = parseFloat(document.getElementById('period').value);
  var type = document.getElementById('type').value;
  var frequency = document.getElementById('frequency').value;
  
  if (isNaN(principal) || isNaN(rate) || isNaN(period)) {
    document.getElementById('result').innerHTML = "Please enter valid numbers.";
    return;
  }
  
  if (principal <= 0 || rate <= 0 || period <= 0) {
    document.getElementById('result').innerHTML = "Please enter positive numbers for principal, rate, and period.";
    return;
  }
  
  var n = 1; // Number of compounding periods per year (defaulted to yearly)
  if (frequency === 'monthly') {
    n = 12;
  } else if (frequency === 'quarterly') {
    n = 4;
  }
  
  var effectiveRate = rate / 100; // Convert annual rate to decimal
  
  var totalAmount;
  if (type === 'simple') {
    totalAmount = principal * (1 + effectiveRate * period);
  } else { // compound interest
    totalAmount = principal * Math.pow(1 + effectiveRate / n, n * period);
  }
  
  totalAmount = totalAmount.toFixed(2); // Round to 2 decimal places
  
  document.getElementById('result').innerHTML = "After " + period + " years, your investment will be approximately ZAR " + totalAmount + ".";
}
