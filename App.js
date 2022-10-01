

const moreThanOneTimezone = ["Morocco", "Democratic Republic of the Congo", "United States", "Argentina", "Brazil", "Canada", "Mexico", "Greenland", "Chile", "Antarctica", "Kazakhstan", "Russia", "Palestinian Territory", "Mongolia", "Indonesia", "Malaysia", "Cyprus", "Uzbekistan", "China", "Spain", "Portugal", "Australia", "Germany", "Ukraine", "New Zealand", "Ecuador", "Kiribati", "Micronesia", "Marshall Islands", "French Polynesia", "Papua New Guinea", "United States Minor Outlying Islands"];


const uniqueCountry = ["Ivory Coast", "Ghana", "Ethiopia", "Algeria", "Eritrea", "Mali", "Central African Republic", "Gambia", "Guinea-Bissau", "Malawi", "Republic of the Congo", "Burundi", "Egypt", "Morocco", "Spain", "Guinea", "Senegal", "Tanzania", "Djibouti", "Cameroon", "Sierra Leone", "Botswana", "Zimbabwe", "South Africa", "South Sudan", "Uganda", "Sudan", "Rwanda", "Democratic Republic of the Congo", "Nigeria", "Gabon", "Togo", "Angola", "Zambia", "Equatorial Guinea", "Mozambique", "Lesotho", "Eswatini", "Somalia", "Liberia", "Kenya", "Chad", "Niger", "Mauritania", "Burkina Faso", "Benin", "Sao Tome and Principe", "Libya", "Tunisia", "Namibia", "United States", "Anguilla", "Antigua and Barbuda", "Brazil", "Argentina", "Aruba", "Paraguay", "Canada", "Mexico", "Barbados", "Belize", "Colombia", "Venezuela", "French Guiana", "Cayman Islands", "Costa Rica", "Curacao", "Greenland", "Dominica", "El Salvador", "Turks and Caicos Islands", "Grenada", "Guadeloupe", "Guatemala", "Ecuador", "Guyana", "Cuba", "Jamaica", "Bonaire, Saint Eustatius and Saba", "Bolivia", "Peru", "Sint Maarten", "Nicaragua", "Saint Martin", "Martinique", "Saint Pierre and Miquelon", "Uruguay", "Montserrat", "Bahamas", "Panama", "Suriname", "Haiti", "Trinidad and Tobago", "Puerto Rico", "Chile", "Dominican Republic", "Saint Barthelemy", "Saint Kitts and Nevis", "Saint Lucia", "U.S. Virgin Islands", "Saint Vincent and the Grenadines", "Honduras", "British Virgin Islands", "Antarctica", "Australia", "Svalbard and Jan Mayen", "Yemen", "Kazakhstan", "Jordan", "Russia", "Turkmenistan", "Iraq", "Bahrain", "Azerbaijan", "Thailand", "Lebanon", "Kyrgyzstan", "Brunei", "Mongolia", "Sri Lanka", "Syria", "Bangladesh", "Timor Leste", "United Arab Emirates", "Tajikistan", "Cyprus", "Palestinian Territory", "Vietnam", "Hong Kong", "Indonesia", "Israel", "Afghanistan", "Pakistan", "Nepal", "India", "Malaysia", "Kuwait", "Macao", "Philippines", "Oman", "Cambodia", "North Korea", "Qatar", "Saudi Arabia", "Uzbekistan", "South Korea", "China", "Singapore", "Taiwan", "Georgia", "Iran", "Bhutan", "Japan", "Laos", "Myanmar", "Armenia", "Portugal", "Bermuda", "Cabo Verde", "Faroe Islands", "Iceland", "South Georgia and the South Sandwich Islands", "Saint Helena", "Falkland Islands", "Netherlands", "Andorra", "Greece", "Serbia", "Germany", "Slovakia", "Belgium", "Romania", "Hungary", "Moldova", "Denmark", "Ireland", "Gibraltar", "Guernsey", "Finland", "Isle of Man", "Turkey", "Jersey", "Ukraine", "Slovenia", "United Kingdom", "Luxembourg", "Malta", "Aland Islands", "Belarus", "Monaco", "Norway", "France", "Montenegro", "Czechia", "Latvia", "Italy", "San Marino", "Bosnia and Herzegovina", "North Macedonia", "Bulgaria", "Sweden", "Estonia", "Albania", "Liechtenstein", "Vatican", "Austria", "Lithuania", "Poland", "Croatia", "Switzerland", "Madagascar", "British Indian Ocean Territory", "Christmas Island", "Cocos Islands", "Comoros", "French Southern Territories", "Seychelles", "Maldives", "Mauritius", "Mayotte", "Reunion", "Samoa", "New Zealand", "Papua New Guinea", "Micronesia", "Vanuatu", "Tokelau", "Fiji", "Tuvalu", "French Polynesia", "Solomon Islands", "Guam", "Kiribati", "Marshall Islands", "United States Minor Outlying Islands", "Nauru", "Niue", "Norfolk Island", "New Caledonia", "American Samoa", "Palau", "Pitcairn", "Cook Islands", "Northern Mariana Islands", "Tonga", "Wallis and Futuna"]


var timeZone1 = [];
var timeZone2 = []
let moretime2 = document.getElementById('more-time2');
let moretime1 = document.getElementById('more-time1');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const error1 = document.getElementById('error1');
const error2 = document.getElementById('error2');
const error3 = document.getElementById('error3');
const checked = document.getElementById('checked');
const result = document.getElementById('result');


let firstCountry = "";
for (let i = 0; i < uniqueCountry.length; i++) {
    firstCountry += `<option>${uniqueCountry[i]}</option>`
}

const list = document.getElementById('list');
list.insertAdjacentHTML("afterbegin", firstCountry);


const fetchData = async (input1) => {
    const data = await fetch("http://api.timezonedb.com/v2.1/list-time-zone?key=SXH1UBEFL3QP&format=json");
    // 
    const a = await data.json();
    const arr = a.zones;
    return final = arr.filter((element) => {
        if (element.countryName == input1) {
            return element
        }
    })
}

const singleData = async (input1, input2) => {
    const data = await fetch("http://api.timezonedb.com/v2.1/list-time-zone?key=SXH1UBEFL3QP&format=json");
    const a = await data.json();
    const arr = a.zones;

    return final = arr.filter((element) => {
        if (element.zoneName == input1 || element.zoneName == input2) {
            return element
        }
    })
}

const withoutChecked = async (ans1, ans2, time) => {

    let f = `https://api.timezonedb.com/v2.1/convert-time-zone?key=SXH1UBEFL3QP&format=json&from=${ans1}&to=${ans2}&time=${time}`;
    //      
    let a = await fetch(f)
    const data = await a.json();
    console.log(timeZone1, timeZone2);
    if (checked.checked) {
        if (data.offset === 0) {
            result.innerHTML = `The time in ${timeZone2[0].countryName} is SAME in <span class="key">${timeDiff}</span>`;
        } else {
            let dis = true;
            let off = data.offset;
            if (off < 0) {
                dis = false;
            }
            toTimestamp = data.toTimestamp;

            const date = new Date(toTimestamp * 1000);
            let v = date.toISOString()

            const timeDiff = v.substring(0, 10) + " " + v.substring(11, 19);
            result.innerHTML = `The time in ${timeZone2[0].countryName} is <span class="key">${timeDiff}</span>`
        }
    } else {
        if (data.offset === 0) {
            result.innerHTML = `There is <span class="key">No time differnce</span> between ${timeZone1[0].countryName} and ${timeZone2[0].countryName}`;
        } else {
            let dis = true;
            let off = data.offset;
            if (off < 0) {
                off = Number(off.toString().substr(1));
                dis = false;
            }

            const date = new Date(off * 1000);
            const d = date.toISOString();
            const timeDiff = d.substring(11, 19)

            result.innerHTML = `${timeZone2[0].countryName} is <span class="key">${timeDiff} HOURS</span> <span class="key">${dis ? "AHEAD" : "BEHIND"}</span> of ${timeZone1[0].countryName}`

        }
    }
}


function getData() {

    if (uniqueCountry.indexOf(input1.value) < 0) {
        return;
    }
    if (uniqueCountry.indexOf(input2.value) < 0) {
        return;
    }

    let ans1 = "";
    let ans2 = "";

    if (timeZone1.length == 1) {
        ans1 = timeZone1[0].zoneName;
    } else {
        let option = moretime1.options[moretime1.selectedIndex];
        ans1 = option.value;
    }

    if (timeZone2.length == 1) {
        ans2 = timeZone2[0].zoneName;
    } else {
        let option = moretime2.options[moretime2.selectedIndex];
        ans2 = option.value;
    }

    if (timeZone1.length == 1 && timeZone2.length == 1 && timeZone1[0].countryName === timeZone2[0].countryName) {
        result.innerHTML = `OOPS, Both zone are same So there is a <span class="key">No time differnce</span> 😑`
        return;
    }

    error3.style.visibility = "hidden"

    if (checked.checked) {

        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        if (date == "" || time == "") {
            error3.style.visibility = "visible"
            return;
        }

        const d = new Date(date + " " + time + ":00");
        const timestampInMs = d.getTime();
        const unixTimestamp = Number(Math.floor(timestampInMs / 1000)) + 19800 
        result.innerHTML = "Loading..."
        withoutChecked(ans1, ans2, unixTimestamp.toString())

    } else {
        const time = Math.floor(Date.now() / 1000);
        result.innerHTML = "Loading..."
        withoutChecked(ans1, ans2, time.toString())
    }


}


function moreOne(a) {
    var moreOne = "";
    for (let i = 0; i < a.length; i++) {
        moreOne += `<option value=${a[i].zoneName}>${a[i].zoneName.substr(a[i].zoneName.indexOf("/") + 1)}</option>`
    }
    return moreOne;
}


function hanldeInput1() {

    if (!uniqueCountry.includes(input1.value) || uniqueCountry.indexOf(input1.value) < 0) {
        error1.style.visibility = "visible";
        return;
    } else {
        error1.style.visibility = "hidden";
    }

    const data = async () => {
        let a = await fetchData(input1.value);
        moretime1.innerHTML = moreOne(a);
        timeZone1 = a;
        if (moreThanOneTimezone.includes(input1.value)) {
            moretime1.style.visibility = "visible"
        } else {
            moretime1.style.visibility = "hidden"
        }
    }
    data();
}


function hanldeInput2() {

    if (!uniqueCountry.includes(input2.value) || uniqueCountry.indexOf(input2.value) < 0) {
        error2.style.visibility = "visible";
        return;
    } else {
        error2.style.visibility = "hidden";
    }

    const data = async () => {
        let a = await fetchData(input2.value);
        moretime2.innerHTML = moreOne(a);
        timeZone2 = a;
        if (moreThanOneTimezone.includes(input2.value)) {
            moretime2.style.visibility = "visible"
        } else {
            moretime2.style.visibility = "hidden"
        }
    }
    data();
}


// checked.addEventListener("click", function () {
//     if (checked.checked) {
//         document.querySelector('.date').disabled = false;
//         document.querySelector('.time').disabled = false;
//     } else {
//         document.querySelector('.date').disabled = true;
//         document.querySelector('.time').disabled = true;
//     }
// })
