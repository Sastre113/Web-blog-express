const postRequest = document.querySelector('#post');
const readAllRequest = document.querySelector('#readAll');
const readRequest = document.querySelector('#read');
const updateRequest = document.querySelector('#update');
const deleteRequest = document.querySelector('#delete');


postRequest.addEventListener('click', async (e) => {
    console.log(e.target)
    e.preventDefault()

    console.log("Esto es elements", e.target.elements);
    console.log()

    const resultado = await axios.post('https://web-blog-express-mas-app.herokuapp.com/api/blogs', {
        question: e.target.elements.question.value,
        answer1: e.target.elements.answer1.value,
        answer2: e.target.elements.answer2.value,
        answer3: e.target.elements.answer3.value,
        answer4: e.target.elements.answer4.value
    });
    console.log(resultado)
});

readAllRequest.addEventListener('click', async (e) => {
    e.preventDefault();
    const res = await axios.get('https://web-blog-express-mas-app.herokuapp.com/api/blogs',);

    var campos = {};
    res.data.forEach(element => {
        campos[element.name] = element.value;
    });
    console.log(campos)
    console.log(res);
});

readRequest.addEventListener('click', async (e) => {
    e.preventDefault();
    const res = await axios.get('https://web-blog-express-mas-app.herokuapp.com/api/blogs',);
});

updateRequest.addEventListener('click', async (e) => {
    e.preventDefault();
    const res = await axios.patch('https://web-blog-express-mas-app.herokuapp.com/api/blogs',);
});

deleteRequest.addEventListener('click', async (e) => {
    e.preventDefault();
    const res = await axios.delete('https://web-blog-express-mas-app.herokuapp.com/api/blogs',);
})