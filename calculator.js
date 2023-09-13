function displayData(data){
    cal1.value+=data
}
function allClear(){
    cal1.value=""
}
function findOut(){
    cal1.value=eval(cal1.value)
}
function backSpace(){
    cal1.value=cal1.value.slice(0,-1)
}