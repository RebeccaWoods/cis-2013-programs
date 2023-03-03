var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function () 
{
    var floatHwPts,floatMidPts, floatFinPts, intGradeOption,floatFinalGrade, stringFinalGrade;

    floatHwPts = parseFloat($("hw_pts").value);
    floatMidPts= parseFloat($("mid_pts").value);
    floatFinPts= parseFloat($("fin_pts").value);
    floatFinalGrade= parseFloat(floatFinPts+ floatHwPts+ floatHwPts);
    stringFinalGrade= parseFloat($("final_grade").value);
    intGradeOption= parseFloat($("grade_option").value);




if (intGradeOption===1)
    { 
        if (floatFinalGrade >=80)
        {stringFinalGrade= "Pass" }
             else 
                {stringFinalGrade= "Fail"}
    }
else
    {if (floatFinalGrade>=90)
        {stringFinalGrade="A";}
            else if (floatFinalGrade>=80 && floatFinalGrade <90)
                {stringFinalGrade= "B";}
                 else if (floatFinalGrade >=70 && floatFinalGrade <80)
                    {stringFinalGrade= "C";}
                        else if (floatFinalGrade >=60 && floatFinalGrade <70)
                            {stringFinalGrade= "D";}
                                else 
                                {stringFinalGrade="F";}
    }
$("final_grade").value= stringFinalGrade;
};

window.onload = function () 
{
    $("final_grade").value = ""; //blanks the final grade text box upon page load
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hw_pts").focus(); //puts the cursor on the first DOM text input box
};