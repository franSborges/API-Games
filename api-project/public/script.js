
const list = document.querySelector(".list");

const URL = ('http://localhost:3000/games');

  axios.get(URL).then(res => { 

    const response = res.data
  
    response.forEach(element => {
        
     const li = document.createElement("li");
      li.textContent = `${ element.name } - (${element.year_release})`

      list.appendChild(li)
    });

  }).catch(err => {
    console.log(err);
  })

