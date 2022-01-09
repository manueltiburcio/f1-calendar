

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
};

const url = "http://ergast.com/api/f1/2022.json";

 async function getSchedule() {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        // console.log(data);
        // console.log(data.MRData.RaceTable.Races.length);
        // console.log(data.MRData.RaceTable.Races[0].date);
        const months = document.querySelectorAll('.month-container');
        console.log(months);

        const days = document.querySelectorAll('.day-content');
        console.log(days);

        const races = data.MRData.RaceTable.Races;

        races.forEach(race => {

            let month = race.date.slice([5],[7]) // get month of the race
            let day = race.date.slice([8],[10]) // get day of the race

            for(let i = 0; i <= month; i++){ // check what month of the year is the race
                if(i === month){ // enter that month
                    for(let x = 0; x <= day; x++){ // check what day of the month selected is the race
                         if (x === day){
                            
                         }

                    }
                }
            };

            console.log(day);
            
        });
      

       
        
        
}

getSchedule();






    // fetch(url, requestOptions)
    //   .then(response => response.text())
    //   .then(data => {
    //       console.log(data)
    //   })
    //   .catch(error => console.log('error', error));
  
   
    









// Credits Paul-DS year-calendar js-year-calendar: https://github.com/year-calendar/js-year-calendar
