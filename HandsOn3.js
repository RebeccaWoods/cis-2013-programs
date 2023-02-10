var floatAge, floatDays, intWeeks, floatMonths, intFortnight;
floatAge= parseFloat(prompt("How old are you?"))
floatDays= parseFloat(floatAge*365.25)
intWeeks=parseInt(floatDays/7)
floatMonths=parseFloat(floatAge*12)
intFortnight=parseInt(floatDays/14)
alert("Do you want to see something cool?")
alert("You are "+floatAge+" years old!"+"\n"+"You are "+floatDays+" days old!"+"\n"+"You are "+intWeeks+" weeks old!"+"\n"+"You are "+floatMonths+" months old!"+"\n"+"And finally, you are "+intFortnight+" in terms of fortnights!")
alert("Ta-da!! Have a great day!")