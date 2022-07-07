var time0900 = $('hour-0900');
var time1000 = $('hour-1000');
var time1100 = $('hour-1100');
var time1200 = $('hour-1200');
var time1300 = $('hour-1300');
var time1400 = $('hour-1400');
var time1500 = $('hour-1500');
var time1600 = $('hour-1600');
var time1700 = $('hour-1700');
var containEl = $('#container');
var saveBtn = $('saveBtn');
var hour = moment().hour();
var timeBlock = document.querySelectorAll('.time');
var textTime =document.querySelectorAll('.description');

var timeArray = [
    time0900,
    time1000,
    time1100,
    time1200,
    time1300,
    time1400,
    time1500,
    time1600,
    time1700
];





function updateTime() {
    var today = moment();

    $("#presentDay").text(today.format('dddd, MMMM Do YYYY'));
    // var now = moment().format('kk');    
    
}
updateTime();
 
for (let i = 0; i < timeArray.length; i++) {
    var timeVal = timeArray[i].id;
    if (timeVal > hour) {
        textTime[i].classList.add('future');
    }
    else if(timeVal == hour) {
        textTime[i].classList.add('present');
    }else {
        textTime[i].classList.add('past');
    }
};


for (i=0; i < textTime.length; i++) {
    var recieve = textTime[i].id;
    textTime[i].value = localStorage.getItem(recieve);

    saveBtn[i].addEventListener('click', function(event){
        event.preventDefault();
        //@ts-ignore
        var parentEl = event.target.parentElement;
        var textBoxValue = parentEl.querrySelector('.description').value;
        var keySet = parentEl.querrySelector('.description').id;
        
    });
};



//  for(let i = 0; i < timeArray.length; i++) {
//      timeArray[i].removeClass('future past present');

//      if(now > timeArray[i].data('hour')) {
//          timeArray[i].addClass('past')
//      }else if (now === timeArray[i].attr('data-hour')) {
//          timeArray[i].addClass('present');
//      }else {
//          timeArray[i].addClass('future')
//      }
//  }





// var time0900 = $('hour-0900');
// var time1000 = $('hour-1000');
// var time1100 = $('hour-1100');
// var time1200 = $('hour-1200');
// var time1300 = $('hour-1300');
// var time1400 = $('hour-1400');
// var time1500 = $('hour-1500');
// var time1600 = $('hour-1600');
// var time1700 = $('hour-1700');
// var containEl = $('#container');
// var saveBtn = $('saveBtn');

var timeArray = [
    time0900,
    time1000,
    time1100,
    time1200,
    time1300,
    time1400,
    time1500,
    time1600,
    time1700
];
// lastRegistered();
// updateTime();
// setInterval(updateTime, 1000);


// function lastRegistered() {
//     for (let el of timeArray) {
//         var timeBlockValue = localStorage.getItem('time block' + el.data('hour'));
//         el.val(timeBlockValue);
        
//         console.log(timeBlockValue);
//     }
// }

// function formSubmit(event) {
//     event.preventDefault();
//     var buttonClick = $(event.CurrentTarget);
//     var targetText = buttonClick.siblings('textarea');
//     var timeBlockTarget = targetText.data('hour');
//     localStorage.setItem('time block' +timeBlockTarget, targetText.val());
// }

// saveBtn.on('click', formSubmit);