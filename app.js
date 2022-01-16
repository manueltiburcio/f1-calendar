

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
};

const url = "https://ergast.com/api/f1/2022.json";
const modal = document.querySelector(".modal");

//-----------// Track Images //-----------//
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'images/1.png';

imgArray[1] = new Image();
imgArray[1].src = 'images/2.png';

imgArray[2] = new Image();
imgArray[2].src = 'images/3.png';

imgArray[3] = new Image();
imgArray[3].src = 'images/4.png';

imgArray[4] = new Image();
imgArray[4].src = 'images/5.png';

imgArray[5] = new Image();
imgArray[5].src = 'images/6.png';

imgArray[6] = new Image();
imgArray[6].src = 'images/7.png';

imgArray[7] = new Image();
imgArray[7].src = 'images/8.png';

imgArray[8] = new Image();
imgArray[8].src = 'images/9.png';

imgArray[9] = new Image();
imgArray[9].src = 'images/10.png';

imgArray[10] = new Image();
imgArray[10].src = 'images/11.png';

imgArray[11] = new Image();
imgArray[11].src = 'images/12.png';

imgArray[12] = new Image();
imgArray[12].src = 'images/13.png';

imgArray[13] = new Image();
imgArray[13].src = 'images/14.png';

imgArray[14] = new Image();
imgArray[14].src = 'images/15.png';

imgArray[15] = new Image();
imgArray[15].src = 'images/16.png';

imgArray[16] = new Image();
imgArray[16].src = 'images/17.png';

imgArray[17] = new Image();
imgArray[17].src = 'images/18.png';

imgArray[18] = new Image();
imgArray[18].src = 'images/19.png';

imgArray[19] = new Image();
imgArray[19].src = 'images/20.png';

imgArray[20] = new Image();
imgArray[20].src = 'images/21.png';

imgArray[21] = new Image();
imgArray[21].src = 'images/22.png';

imgArray[22] = new Image();
imgArray[22].src = 'images/23.png';

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

            //console.log(race.raceName)
            //console.log(month);
            //console.log(day);

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


        // document.querySelectorAll('.open').forEach(item => 
        //         item.addEventListener('click', event => {
        //           console.log(event.target)
        //      })
        //    )

            //  modal.innerHTML = 
            //   `<h1> ${race.raceName}</h1>
            //     <p>${race.time}</p>
            //     <button id="close">Close</button>
              
            //   `;
              

            //console.log(modal.innerHTML);
            
        });

        modal.innerHTML = 
        ` <h1>definition</h1>
          <img src="">
          <p>Track Time:</p>
          <p>definition</p>
          <button id="close">Close</button>
        
        `;

        const modalContainer = document.getElementById('modal-container');
        let close = document.getElementById('close');
        
        document.querySelectorAll('.open').forEach(item => {
            item.addEventListener('click', event => {
                modalContainer.classList.add('show');

                let clickedDay = parseInt(event.target.innerHTML);
                console.log(clickedDay);

                let clickedMonth = parseInt(event.target.parentNode.parentNode.parentNode.parentNode.getAttribute("data-month-id"));
                
                console.log(clickedMonth);


                races.forEach(race => {

                    let monthLookUp = race.date.slice([5],[7]) - 1// get month of the race
                    let dayLookUp = race.date.slice([8],[10])// get day of the race

                    //console.log("clickedDay " + clickedDay);
                    //console.log("clickedMonth " + clickedMonth);

                    //console.log("monthLookUp" + monthLookUp);
                    //console.log("dayLookUp "+ dayLookUp);


                    if ( (monthLookUp == clickedMonth) && (dayLookUp == clickedDay) ){
                        modal.getElementsByTagName('h1')[0].innerHTML = race.raceName;
                        let raceImg = parseInt(race.round) - 1;
                        console.log("race.round " + race.round);
                        console.log("race photo " + imgArray[raceImg]);

                        modal.getElementsByTagName('img')[0].src = imgArray[raceImg].src;
                        modal.getElementsByTagName('p')[1].innerHTML = race.time.slice([0],[5]);
                    }


                // modal.getElementsByTagName('h1')[0].innerHTML = clickedDay;
                // modal.getElementsByTagName('h1')[1].innerHTML = clickedMonth;
                
            });

            
          })
         

        close.addEventListener('click',() => {
            modalContainer.classList.remove('show');
        });    
        
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
