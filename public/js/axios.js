const postRequest = document.querySelector('#post');
const readAllRequest = document.querySelector('#readAll');
const readRequest = document.querySelector('#read');
const updateRequest = document.querySelector('#update');
const deleteRequest = document.querySelector('#delete');


postRequest.addEventListener('click', async (e) => {
    console.log(e.target)
    e.preventDefault()
   
    console.log(e.target.elements)
    
    const resultado = await axios.post('https://x-express-web.herokuapp.com/api/tests', {
        question: e.target.elements.question.value,
        answer1: e.target.elements.answer1.value,
        answer2: e.target.elements.answer2.value,
        answer3: e.target.elements.answer3.value,
        answer4: e.target.elements.answer4.value
    })
    console.log(resultado)
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