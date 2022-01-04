var requestOptions = {
    method: 'GET',
    redirect: 'follow',
};

    const url = "http://ergast.com/api/f1/2022.json";

    async function getSchedule() {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        console.log(data);
        console.log(data.MRData.RaceTable.Races.length);
        console.log(data.MRData.RaceTable.Races[0].date);
    }
    // fetch(url, requestOptions)
    //   .then(response => response.text())
    //   .then(data => {
    //       console.log(data)
    //   })
    //   .catch(error => console.log('error', error));
  
  
    getSchedule();
      









// Credits Paul-DS year-calendar js-year-calendar: https://github.com/year-calendar/js-year-calendar
