
var emailWebServiceUrl = "/Calculators/SendCalculationOnEmail.asmx/sendemail";
function sendemail(emaildata, onSucessEmail, onErrorEmail) {
    console.log("sendemail called");
    //var email_url = "/Calculators/SendCalculationOnEmail.asmx/sendemail";
    //Change Send button to Sending... text
    sendemail_AjaxRequest(emaildata, onSucessEmail, onErrorEmail);

}

function sendemail_AjaxRequest(emaildata, onSucessEmail, onErrorEmail) {
    setTimeout(function () {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset = utf-8",
            url: app_root + '/themes/yogi/WebServices/' + emailWebServiceUrl,
            data: JSON.stringify(emaildata),
            dataType: "json",
            success:
            function (data) {

                //Change Sending... text to Sent text
                var obj;

                if (data.hasOwnProperty("d")) {
                    obj = data["d"];
                }
                else {
                    obj = data;
                }
                onSucessEmail(obj);
            },
            error:
            function (XMLHttpRequest, textStatus, errorThrown) {
                onErrorEmail(XMLHttpRequest, textStatus, errorThrown);
            }

        });
    }, "1");
}


function onSucessEmail(resp) {
    console.log("Email sending successful");
    //$('[id*=emailbutton]').val('Sent');
    $("#iysentcalc").css('display', 'block');
    $("#EmailCalculationTool_newcalcbutton").css('display', 'block');
    $("#iysendingcalc").css('display', 'none');
    ShowEmailView();
}

function onErrorEmail(XMLHttpRequest, textStatus, errorThrown, btnId) {
    errorFn(XMLHttpRequest, textStatus, errorThrown);

}