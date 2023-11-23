// function getDay(_day, _isLeap) {

//     if(_isLeap == true) {
//         numberOfDaysInAyear = 366
//     }
//     else(_isLeap == false) 
//     {
//         numberOfDaysInAyear = 365
//     }

//   noLeapYear = Jan 31, Feb 28, March 31, April, 30, May 31, June 30, July 31, August 31, September 30, October 31, November, 30, December 31
//   isLeapYear = Jan 31, Feb 29, March 31, April, 30, May 31, June 30, July 31, August 31, September 30, October 31, November, 30, December 31
//   _day = 100 




//     if (_day == 1 && _isLeap == false) {
//         return "Januari, 1"
//    }
//    else if (_day == 1 && _isLeap == true) {
//       return "Januari, 1"
//    }
//    else if (_day == 31 && _isLeap == true) {
//     return "Januari, 31"
//  }
//     else if (_day == 59 && _isLeap == false) {
//         return "Februari, 28"
//     }
//     else if (_day == 60 && _isLeap == false) {
//         return "March, 1"
//     }

//     else if (_day == 60 && _isLeap == true) {
//         return "Februari, 29"
//     }
// }

// 

// function getDay(day, isLeap){
//     const months = [
//             ["January", 31],
//             ["February", isLeap ? 29 : 28],
//             ["March", 31],
//             ["April", 30],
//             ["May", 31],
//             ["June", 30],
//             ["July", 31],
//             ["August", 31],
//             ["September", 30],
//             ["October", 31],
//             ["November", 30],
//             ["December", 31],
//         ];
    
//         let month = 1;
      
//         for (let i = 0; i < months.length; i++) {
//             if (day > months[i][1]) {
//                 day -= months[i][1];
//                 month += 1;
//             } else {
//                 break;
//             }
//         }
//         return `${months[month - 1][0]}, ${day}`;
//     }



function getDay(day, isLeap) {
    // Initialize the date to January 1st of a non-leap year
    let date = new Date(`1/1/2000`);
    // Add the day offset

    date.setDate(day + (isLeap && day > 59 ? -1 : 0));
    // Format the date as "Month, day"
    return date.toLocaleString('en-US', { month: 'long', day: 'numeric' });
}


console.log(getDay(60,false));

//{ // Array of days in each month for a non-leap year const daysInMonth = [31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; let monthIndex = 0; while (day > daysInMonth[monthIndex]) { // Subtract the days of the current month and move to the next month day -= daysInMonth[monthIndex]; monthIndex++; } // Return the corresponding date in the format "Month, day" return `${months[monthIndex]}, ${day}`; }