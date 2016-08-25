          <script>
	
				function calculate() {
					var principal = parseFloat(document.getElementById("amtinvested").value);
					var period = parseFloat(document.getElementById("nofoyears").value);
					var freq = 1
					var rateofreturn = parseFloat(document.getElementById("rateofreturn").value);	
					if (isNaN(principal)) {
						alert("Please enter Amount Invested in each Installment");
					} else if (isNaN(period)) {
						alert("Please enter No of Years");
					}else if (isNaN(freq)) {
						alert("Please enter Frequency");
					} else if (isNaN(rateofreturn)) {
						alert("Please enter Rate of Return");
					} else {
						var instalment_amount = principal;
						var no_of_compounding_periods = (12/freq)*period;
						var int_rate_per_period = rateofreturn/(12/freq)/100;	
						var total_amount_invested = period*instalment_amount*12;
						var expected_amount_on_maturity =  instalment_amount*((Math.pow(1+int_rate_per_period, no_of_compounding_periods)-1)/int_rate_per_period)*(1+int_rate_per_period);
						document.getElementById("totalInvested").value = total_amount_invested.toFixed(2);
						document.getElementById("expectedAmount").value = expected_amount_on_maturity.toFixed(2);
		
					}
	
				}
				</script>