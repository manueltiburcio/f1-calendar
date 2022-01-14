

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
};

const url = "http://ergast.com/api/f1/2022.json";
const modal = document.querySelector(".modal");
 async function getSchedule() {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
    
        const months = document.querySelectorAll('.month-container');

        const races = data.MRData.RaceTable.Races;
        console.log(races)
        
        races.forEach(race => {

            let month = race.date.slice([5],[7]) - 1// get month of the race
            let day = race.date.slice([8],[10]) - 1 // get day of the race
            const days = document.querySelectorAll('.day-content');

            console.log(race.raceName)
            console.log(month);
            console.log(day);

            let day_365 = 0; // Translates month - day format to 365 date format

            for (let i = 0; i <= month; i++){
                
                let currentMonth = document.querySelector("[data-month-id="+CSS.escape(i)+"]");
                let currentDay = currentMonth.querySelectorAll('.day-content');

                if (i == month){
                
                      day_365 += parseInt(day);
                      days[day_365].classList.add("active");
                      days[day_365].classList.add("open");
                      
                      
                }else{

                    day_365 += currentDay.length;
                    
                }
             
            }
            


             modal.innerHTML = 
              `<h1>${race.raceName}</h1>
                <p>${race.time}</p>
                <button id="close">Close</button>
              
              `;
              

            console.log(modal.innerHTML);
            
        });

       
        const modalContainer = document.getElementById('modal-container');
        const close = document.getElementById('close');
        

        
        document.querySelectorAll('.open').forEach(item => {
            item.addEventListener('click', event => {
                modalContainer.classList.add('show');
            })
          })


        close.addEventListener('click',() => {
            modalContainer.classList.remove('show');
        });


       
        
        
}

getSchedule();

// Modal
// let open = document.querySelectorAll('.open');


// function openModal(){
//     modalContainer.classList.add('show');

// }

// let open = document.querySelectorAll(".open");

// open.forEach(function(elem) {
//     elem.addEventListener("click", function() {
//         modalContainer.classList.add('show');
//     });
// });

// for (var i = 0 ; i < open.length; i++) {
//     open[i].addEventListener('click' , openModal, false ) ; 
//  }




    









// Credits Paul-DS year-calendar js-year-calendar: https://github.com/year-calendar/js-year-calendar
