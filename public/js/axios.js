const postRequest = document.querySelector('#post');
const readAllRequest = document.querySelector('#readAll');
const readRequest = document.querySelector('#read');
const updateRequest = document.querySelector('#update');
const deleteRequest = document.querySelector('#delete');


postRequest.addEventListener('click', async (e) => {
    e.preventDefault();
    const res = await Axios.post('https://web-blog-express-mas-app.herokuapp.com/api/blogs',
    {data: {}});
    console.log(res);
});

readAllRequest.addEventListener('click',async (e) => {
    e.preventDefault(); 
    const res = await Axios.get('https://web-blog-express-mas-app.herokuapp.com/api/blogs',);
    console.log(res);
});

readRequest.addEventListener('click',async (e) => {
    e.preventDefault();
    const res = await Axios.get('https://web-blog-express-mas-app.herokuapp.com/api/blogs',);
});

updateRequest.addEventListener('click',async (e) => {
    e.preventDefault();
    const res = await Axios.patch('https://web-blog-express-mas-app.herokuapp.com/api/blogs',);
});

deleteRequest.addEventListener('click',async (e) => {
    e.preventDefault();
    const res = await Axios.delete('https://web-blog-express-mas-app.herokuapp.com/api/blogs',);
});