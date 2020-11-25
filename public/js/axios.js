const postRequest = document.querySelector('#post');
const readAllRequest = document.querySelector('#readAll');
const readRequest = document.querySelector('#read');
const updateRequest = document.querySelector('#update');
const deleteRequest = document.querySelector('#delete');


postRequest.addEventListener('click', async (e) => {
    e.preventDefault();
    const res = await axios.post('https://web--express-mas-app.herokuapp.com/api/s',
    {data: {}});
    console.log(res);
});

readAllRequest.addEventListener('click',async (e) => {
    e.preventDefault(); 
    const res = await axios.get('https://web--express-mas-app.herokuapp.com/api/s',);
    console.log(res);
});

readRequest.addEventListener('click',async (e) => {
    e.preventDefault();
    const res = await axios.get('https://web--express-mas-app.herokuapp.com/api/s',);
});

updateRequest.addEventListener('click',async (e) => {
    e.preventDefault();
    const res = await axios.patch('https://web--express-mas-app.herokuapp.com/api/s',);
});

deleteRequest.addEventListener('click',async (e) => {
    e.preventDefault();
    const res = await axios.delete('https://web--express-mas-app.herokuapp.com/api/s',);
});