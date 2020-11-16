    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
    const hourHandOne = document.querySelector('.hour-hand.one');
    const hourHandTwo = document.querySelector('.hour-hand.two');
    const hourHandThr = document.querySelector('.hour-hand.thr');
    const oneSelector = document.querySelector('#one');
    const twoSelector = document.querySelector('#two');
    const thrSelector = document.querySelector('#thr');


    function setDate(){
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();

      function calcHour(hours){
        return ((hours /12) * 360) + 90;
      }

      const secondsDegrees = ((seconds / 60) * 360) + 90;
      const minutesDegrees = ((minutes / 60) * 360) + 90;
      const hoursDegrees = ((hours / 12) * 360) + 90;
      const hoursDegreesOne = (((hours + parseInt(oneSelector.value)) / 12) * 360) + 90;
      const hoursDegreesTwo = (((hours + parseInt(twoSelector.value)) / 12) * 360) + 90;
      const hoursDegreesThr = (((hours + parseInt(thrSelector.value)) / 12) * 360) + 90;

      secondHand.style.transform =  `rotate(${secondsDegrees}deg)`;
      minuteHand.style.transform =  `rotate(${minutesDegrees}deg)`;
      hourHand.style.transform =  `rotate(${hoursDegrees}deg)`;
      hourHandOne.style.transform = `rotate(${hoursDegreesOne}deg`;
      hourHandTwo.style.transform = `rotate(${hoursDegreesTwo}deg`;
      hourHandThr.style.transform = `rotate(${hoursDegreesThr}deg`;
    }
    setInterval(setDate, 1000);
