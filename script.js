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

    if (intMinutes > 480) {
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

        currentHour += intHours;
        currentMinute += intMinutesLeft;


        while (currentMinute >= 60) {
            currentHour++;
            if (currentHour >= 24) {
                currentHour -= 24;
            }
            currentMinute -= 60;
        }

        alertMessage = "Faltam " + intHours + "h " + intMinutesLeft + "m" +
            "\nSais às " + currentHour + "h " + currentMinute + "m";

        var oneHourLunchHour = currentHour + 1;
        var oneHourLunchMinute = currentMinute;


        if (intHours * 60 + intMinutes < 60 * 5) {
            oneHourLunchMessage = "\n1h de almoço sais às " + oneHourLunchHour + "h " + oneHourLunchMinute + "m";

            if (currentMinute >= 30) {
                var lunchTimeMin = currentMinute - 30;
                var lunchTimeHour = currentHour + 1;
            }
            else {
                lunchTimeMin = currentMinute + 30;
                lunchTimeHour = currentHour;
            }
            alertMessage += "\n\n30 min de almoço sais às " + lunchTimeHour + "h " + lunchTimeMin + "m" +
                oneHourLunchMessage;

            lunchTimeHour = lunchTimeHour + 1;

            alertMessage += "\n1h 30 min de almoço sais às " + lunchTimeHour + "h " + lunchTimeMin + "m";
        }

        if (currentMinute >= 45) {
            var withOneBreakMinute = currentMinute - 45;
            var withOneBreakHour = currentHour + 1;
        }
        else {
            var withOneBreakMinute = currentMinute + 15;
            var withOneBreakHour = currentHour;
        }
        alertMessage += "\n\n1 break (15 min): " + withOneBreakHour + "h " + withOneBreakMinute + "m";

        if (intHours * 60 + intMinutes < 60 * 3) {
            if (currentMinute >= 30) {
                var withTwoBreaksMinute = currentMinute - 30;
                var withTwoBreaksHour = currentHour + 1;
            }
            else {
                var withTwoBreaksMinute = currentMinute + 30;
                var withTwoBreaksHour = currentHour;
            }
            alertMessage += "\n2 breaks (15 min cada): " + withTwoBreaksHour + "h " + withTwoBreaksMinute + "m";
        }

        alert(alertMessage);
    }
}
