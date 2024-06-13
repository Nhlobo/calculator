function calculate() {
  var target = parseFloat(document.getElementById('target').value);
  var monthly = parseFloat(document.getElementById('monthly').value);
  var interest = parseFloat(document.getElementById('interest').value);
  
  if (isNaN(target) || isNaN(monthly) || isNaN(interest)) {
    document.getElementById('result').innerHTML = "Please enter valid numbers.";
    return;
  }
  
  if (monthly <= 0 || interest <= 0) {
    document.getElementById('result').innerHTML = "Monthly savings and interest rate must be greater than zero.";
    return;
  }
  
  var monthlyInterestRate = interest / 100 / 12; // Convert annual interest rate to monthly
  var months = Math.ceil(Math.log(target / (monthly * (1 + monthlyInterestRate) - monthlyInterestRate)) / Math.log(1 + monthlyInterestRate));
  
  document.getElementById('result').innerHTML = "It will take approximately " + months + " months to reach your savings goal.";
}
