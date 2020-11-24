const axios = require('axios');


var boton = document.getElementById('json_get');

boton.addEventListener('click', function () {
    loading.style.display = 'block';
    axios.get('/blogs', {
        responseType: 'json'
    })
        .then(function (res) {
            if (res.status == 200) {
                console.log(res.data);
                mensaje.innerHTML = res.data.title;
            }
            console.log(res);
        })
        .catch(function (err) {
            console.log(err);
        })
        .then(function () {
            loading.style.display = 'none';
        });
});