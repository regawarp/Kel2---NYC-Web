/* Author : Cahya Ramadhan (171524007) */

function validateForm()
{
    validateLettersOnly('input_first_name');
    validateLettersOnly('input_last_name');
    validateLettersOnly('input_city');
    validateLettersOnly('input_state');

    validateNumber('input_pin', 6); //6 digit
    validateNumber('input_phone_number', 10); //10 digit
    validateBirthDate();
    validateCountry();
    validateEmailAddress();
}

function validateLettersOnly(id)
{
    var id_value = document.getElementById(id).value;
    var id_alert = document.getElementById(id + '_alert');
    var regex = /^[A-Za-z]+$/;
    if(id_value == ''){
        id_alert.innerHTML = "*required";
    } else if(id_value.match(regex)){ //hanya huruf
        id_alert.innerHTML = "";
    } else {
        id_alert.innerHTML = "(max 30 characters a-z and A-Z)";
    }
}

function validateNumber(id, length)
{
    var id_value = document.getElementById(id).value;
    var id_alert = document.getElementById(id + '_alert');
    var regex = /^[0-9]+$/;
    if(id_value == ''){
        id_alert.innerHTML = "*required";
    } else if(id_value.match(regex)){ //hanya angka
        if(id_value.length == length){
            id_alert.innerHTML = "";
        } else {
            var temp = length - id_value.length;
            id_alert.innerHTML = "Please fill " + temp + " more numbers.";
        }
    } else {
        id_alert.innerHTML = "(" + length + " digit number)";
    }
}

function validateBirthDate()
{
    var alert = document.getElementById('input_date_alert')

    var day = document.getElementById('input_day');
    var day_value = day.options[day.selectedIndex].value;

    var month = document.getElementById('input_month');
    var month_value = month.options[month.selectedIndex].value;

    var year = document.getElementById('input_year');
    var year_value = year.options[year.selectedIndex].value;

    var alert_output = "*Please enter the ";
    var sum = 0;
    if(day_value == "Day"){
        alert_output += "day";
        sum++;
    }
    if(month_value == "Month"){
        if(sum >= 1){
            alert_output += ", ";
        }
        alert_output += "month"
        sum++;
    }
    if(year_value == "Year"){
        if(sum >= 1){
            alert_output += ", ";            
        } 
        alert_output += "year";
    }
    alert_output += ".";
    if(sum == 0){
        alert_output = "";
    }
    alert.innerHTML = alert_output;
}

function validateCountry()
{
    var alert = document.getElementById('input_country_alert')

    var country = document.getElementById('input_country');
    var country_value = country.options[country.selectedIndex].value;

    if(country_value == "Country"){
        alert.innerHTML = "*Please enter the country name.";
    } else {
        alert.innerHTML = "";
    }

}

function validateEmailAddress()
{
    var id_value = document.getElementById('input_email').value;
    var id_alert = document.getElementById('input_email' + '_alert');
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //sumber regex: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    if(id_value == ''){
        id_alert.innerHTML = "*required";
    } else if(id_value.match(regex)){ //hanya huruf
        id_alert.innerHTML = "";
    } else {
        id_alert.innerHTML = "Please enter a valid e-mail address.";
    }
}

function calculateAge()
{
    var day = document.getElementById('input_day');
    var day_value = day.options[day.selectedIndex].value;

    var month = document.getElementById('input_month');
    var month_value = month.options[month.selectedIndex].value;

    var year = document.getElementById('input_year');
    var year_value = year.options[year.selectedIndex].value;

    if(day_value != "Day" && month_value != "Month" && year_value != "Year")
    {
        month_value = getMonthFromString(month_value);
        var birth_date_string = year_value + "-" + month_value + "-" + day_value; 
        var birth_date = new Date(birth_date_string);
        var age = _calculateAge(birth_date);
        document.getElementById('output_age').innerHTML = age + " tahun.";
    } else {
        document.getElementById('output_age').innerHTML = "... tahun.";
    }
}

function getMonthFromString(mon)
{
    //sumber: https://stackoverflow.com/questions/13566552/easiest-way-to-convert-month-name-to-month-number-in-js-jan-01
    return new Date(Date.parse(mon +" 1, 2012")).getMonth()+1
}

function _calculateAge(birthday) {
    //sumber: https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd?page=1&tab=votes#tab-top
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); 
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}


function resetForm()
{
    document.forms["student_form"].reset(); //hapus isi field form
    var alertList = document.getElementsByClassName("alert"); //menghapus semua alert
    for (var i = 0; i < alertList.length; i++) {
        alertList[i].innerHTML = "";
    }
    document.getElementById('output_age').innerHTML = "... tahun."; //me-reset usia
}


