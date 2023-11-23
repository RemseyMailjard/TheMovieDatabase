function getDay(_day, _isLeap) {
  // input
  //let isLeapYear = false;

  //  let month = ["Januari", "Februari", "March"]
  // We have 366 days if it is a leap year
  // Every 4 year we have a leap year
  // if it is leap year then after 60 days it is "Februari,29"
  // if it is a leap year then after 61 day it is "March, 1"
  // if it is not a leap year, then after 60 day it is "March, 1
  // Jan 31, Feb 28, March 31, April, 30, May 31, June 30, July 31, August 31, September 30, October 31, November, 30, December 31
    if (_day == 1 && _isLeap == false) {
          return "Januari, 1"
     }

     else if (_day == 1 && _isLeap == false) {
        return "Januari, 1"
     }


 // let firstDayOftheYear = new Date(2023, 0, 1);
 // let newDate = new Date();
// newDate = firstDayOftheYear.setDate(firstDayOftheYear + _day);
 // console.log(date);
  // algoritme /// When you divide a year by 4 then it is a leap year
  // calculate the amount days after first of janauri.
  // output
  //let monthName = "";
  //    let day = 0;
  //   console.log(monthName,day); //Date Format  MM, dddd
}

const firsdayOfTheYear = new Date('2023-01-01'); // June 1, 2022 UTC time

new Date(
    firsdayOfTheYear.setDate(firsdayOfTheYear.getDate() + 41)
);

console.log(date);


