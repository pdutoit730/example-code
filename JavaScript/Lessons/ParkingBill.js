import React from 'react';

const ParkingBill = () => {
  // PARKINGBILL

  let E = '00:00';
  let L = '23:59';
  let EF = 2;
  let FH = 3;
  let SH = 4;
  let cost = 0;

  let startHour = E.substring(0, 2);
  console.log('start hour:', startHour);
  let endHour = L.substring(0, 2);
  console.log('end hour:', endHour);

  let startMinute = E.substring(3, 5);
  console.log('start minute:', startMinute);
  let endMinute = L.substring(3, 5);
  console.log('end minute:', endMinute);

  let hours = endHour - startHour;
  console.log('hours:', hours);

  let minutes = endMinute - startMinute;
  console.log('minutes:', minutes);

  if (hours < 1 && minutes <= 59) {
    cost = EF + FH;
    console.log('cost:', cost);
  }

  if (hours === 1 && minutes === 0) {
    cost = EF + FH;
    console.log('cost:', cost);
  }

  if (hours >= 1 && minutes <= 0) {
    cost = EF + FH + SH * (hours - 1);
    console.log(cost);
  }

  if (hours >= 1 && minutes > 0) {
    cost = EF + FH + SH * hours;
    console.log(cost);
  }

  return cost;
  return <div>ParkingBill</div>;
};

export default ParkingBill;
