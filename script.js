function ShowAlert() {
    var timestring = $('#AssiduityTimeWorked').text();

    if (timestring[1] === "h") {
        var hoursString = timestring[0];
    }
    else if (timestring[2] === "h") {
        var hoursString = timestring[0] + timestring[1];
    }

    timestring = timestring.replace(hoursString, '');
    timestring = timestring.replace('h', '');
    timestring = timestring.replace('m', '');
    timestring = timestring.replace(' ', '');

    var minutesString = timestring;
    var intMinutes = parseInt(minutesString) + parseInt(hoursString) * 60;

    if (intMinutes >= 480) {
        alert("Já devias era estar em casa");
    }
    else {
        var alertMessage;
        var intHours = 0;
        var intMinutesLeft = 8 * 60 - intMinutes;
        var minutesYouGetOut = 480 - intMinutes;
        var hoursToGetOut = 0;

        while (intMinutesLeft >= 60) {
            intHours++;
            intMinutesLeft -= 60;
        }

        while (minutesYouGetOut >= 60) {
            hoursToGetOut++;
            minutesYouGetOut -= 60;
        }

        var today = new Date();
        var currentHour = today.getHours();
        var currentMinute = today.getMinutes();
        var nowEpoch = Math.trunc(today.getTime() / 1000) + intHours * 3600 + intMinutesLeft * 60;

        currentHour += intHours;
        currentMinute += intMinutesLeft;

        while (currentMinute >= 60) {
            currentHour++;
            if (currentHour >= 24) {
                currentHour -= 24;
            }
            currentMinute -= 60;
        }

        alertMessage = "\nFaltam " + intHours + "h " + intMinutesLeft + "m" +
            "\nSais às " + currentHour + "h " + currentMinute + "m - " + "<t:" + nowEpoch + ":R>";

            
        if (intHours * 60 + intMinutesLeft > 240) {
            var oneHourLunchHour = currentHour + 1;
            var oneHourLunchMinute = currentMinute;
        
            if (currentMinute >= 30) {
                var lunchTimeMin = currentMinute - 30;
                var lunchTimeHour = currentHour + 1;
            }
            else {
                lunchTimeMin = currentMinute + 30;
                lunchTimeHour = currentHour;
            }

            alertMessage += "\n\n30 min de almoço sais às " + lunchTimeHour + "h " + lunchTimeMin + "m - " + "<t:" + (nowEpoch + 30 * 60) + ":R>" +
                            "\n1h de almoço sais às " + oneHourLunchHour + "h " + oneHourLunchMinute + "m - " + "<t:" + (nowEpoch + 60 * 60) + ":R>" +
                            "\n1h 30 min de almoço sais às " + (lunchTimeHour + 1) + "h " + lunchTimeMin + "m - " + "<t:" + (nowEpoch + 90 * 60) + ":R>";
        }
        alertMessage += "\n\nA cada break acrescer o valor expectável";
        alert(alertMessage);
    }
}
