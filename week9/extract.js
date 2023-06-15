//select input area
const firstArea = document.getElementById('txtarea');

//select output area
const secArea = document.getElementById('txtarea2');

//Add event listener to button
document.getElementsByTagName('button')[0].addEventListener('click', lookUp);

//array for valid emails
//needs to persist between clicks
let holder = [];

//email validator
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

//clears the output area then populates with holder values
function pushHolder(){
    secArea.value = ''
    secArea.value = holder.join(',')
}

//parses input from first area
function lookUp() {
    const rawTxt = firstArea.value;
    //delimit with semicolon
    const eData = rawTxt.split(';');
    for (let i = 0; i < eData.length; i++)
        //if email is new and valid then add to holder
        if (!holder.includes(eData[i]) && validateEmail(eData[i])){
            holder.push(eData[i]);
        }
    //update output area
    pushHolder();
}