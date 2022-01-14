

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
};

const url = "http://ergast.com/api/f1/2022.json";

 async function getSchedule() {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
    
        const months = document.querySelectorAll('.month-container');

        const races = data.MRData.RaceTable.Races;
        
        races.forEach(race => {

            let month = race.date.slice([5],[7]) - 1// get month of the race
            let day = race.date.slice([8],[10]) // get day of the race
            const days = document.querySelectorAll('.day-content');

            console.log(month);
            console.log(day);

            let day_365 = 0; // Translates month - day format to 365 date format

            for (let i = 0; i <= month; i++){
                
                let currentMonth = document.querySelector("[data-month-id="+CSS.escape(i)+"]");
                let currentDay = currentMonth.querySelectorAll('.day-content');

                if (i == month){
                
                      day_365 += parseInt(day);
                      days[day_365].classList.add("active");
                      
                      
                }else{

                    day_365 += currentDay.length;
                    
                }
             
            }
            console.log(day_365);
            
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
