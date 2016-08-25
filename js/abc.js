
<script type="text/javascript" language="javascript">



var rcc_InflationRate = null;

var rcc_ReturnRate = null;

var rcc_YearsToRetire = null;

var rcc_YearsInRetirement = null;

var rcc_AmtreqMonthly = null;

$(document).ready(function() {

    rcc_InflationRate = $("[id$=RCC_InflationRate_TB]");

    rcc_ReturnRate = $("[id$=RCC_ReturnRate_TB]");

    rcc_YearsToRetire = $("[id$=RCC_YearsToRetire_TB]");

    rcc_YearsInRetirement = $("[id$=RCC_YearsInRetirement_TB]");

    rcc_AmtreqMonthly = $('[id$=RCC_MonthlyAmtReq_TB]');

    rcc_InflationRate.blur(function() {

        validateText($(this));

    });

    rcc_YearsToRetire.blur(function() {

        validateText($(this));

    });

    rcc_YearsInRetirement.blur(function() {

        validateText($(this));

    });

    rcc_AmtreqMonthly.blur(function() {

        validateText($(this));

    });

    DisplayRateOfReturn()

});



function clearBlocks() {



    $("#Message").hide();

    $("#RCC_calcResults").css("visibility", "hidden");

}



function validateRetirementCorpusCalc() {

    var allGood = validateText(rcc_InflationRate);

    allGood = validateText(rcc_AmtreqMonthly);

    allGood = validateText(rcc_YearsInRetirement);

    allGood = validateText(rcc_YearsToRetire);

    return allGood;

}



var ComputeFunction = function IY_CalculateRetirementCorpus(btnId) {



    if(validateRetirementCorpusCalc())

    {

        clearBlocks();

        

        var effRate = calc_ComputeEffectiveRate(rcc_ReturnRate.val(), rcc_InflationRate.val());

        var pmt = rcc_AmtreqMonthly.val();

        

        //Calculate Retirement corpus required Today    

        var reqToday = Math.round(calc_calculatePVOfAnnuity(pmt, effRate, rcc_YearsInRetirement.val(), "monthly", 0));

        //Calculate Corpus required on Retirement

        var reqOnRet = Math.round(calc_calculateFVOfSingleSum(reqToday, rcc_InflationRate.val(), rcc_YearsToRetire.val(), "annual", 0));



        //Display the calculated values in UI

        //$('[id$=RCC_RealRate_TB]').val(RoundNumber(effRate, 2));

        

        //Display results after calculation

        $('#RCC_RetirementCorpusReqToday_SP').html(numberFormat(reqToday,"Rs. "));

        $('#RCC_CorpusReqOnRetirement_SP').html(numberFormat(reqOnRet,"Rs. "));



        $("#RCC_calcResults").css("visibility", "visible");

        

//        $('[id*=ButtonRow]').hide();

//        $('[id*=usercontroldiv]').show();

        //        $('[id*=emailcalculationdiv]').show();



        $('[id*=ButtonRow]').hide();

        $('[id*=head]').hide();

        $('#SummaryString').html(CreateSummaryString());

        $('[id*=CalculateSummary]').show();

        $('[id*=EmailCalculationTool_newcalcbutton]').hide();

        //$('[id*=usercontroldiv]').show();

        $('[id*=emailcalculationdiv]').show();

        $('[id*=Recalculate_Button_div]').hide();

        $('.AfterCalculation').show();

        $("#RCC_calcResults").show();







    }

}

function DisplayRateOfReturn()

{

    var inflationRate = Number(rcc_InflationRate.val());

    var returnRate = inflationRate + 1;

    rcc_ReturnRate.val(returnRate);

}



function CreateSummaryString() {

  //  alert("Create Summary String Function Calledd....");

    $('[id*=head]').hide();

     var yrstoretire = $('[id$=RCC_YearsToRetire_TB]').val();

    var yrsinretire = $('[id$=RCC_YearsInRetirement_TB]').val();

    var monthlyamount = $('[id$=RCC_MonthlyAmtReq_TB]').val();

    var inflationrate = $('[id$=RCC_InflationRate_TB]').val();

    var returnrate = $('[id$=RCC_ReturnRate_TB]').val();

//    var retirement_corpus = $('[id$=RCC_RetirementCorpusReqToday_SP]').val();

//    var corpus_required = $('[id$=RCC_CorpusReqOnRetirement_SP]').val();





    // console.log('loanamount ' + loanamount + 'Period ' + Period + 'Interest rate ' + Interestrate);

    var summary = 'With';



    if (yrstoretire > 0) {





        summary = summary + ' years to retire being ' + '<b>' + yrstoretire + '</b>' + '<b> years' + '</b>';

    }

    if (yrsinretire > 0) {





        summary = summary + ',years in retirement ' + '<b>' + yrsinretire + '</b>' + '<b> years' + '</b>';

    }





   

    if (inflationrate > 0) {





        summary = summary + ', inflation rate ' + '<b>' + inflationrate + '</b>' + '<b>% p.a' + '</b>';

    }

    if (returnrate > 0) {





        summary = summary + ' and return rate ' + '<b>' + returnrate + '</b>' + '<b>% p.a' + '</b>';

    }





    console.log(summary);

    return summary;



}



function resetHLE() {

    clearBlocks();

}

</script>