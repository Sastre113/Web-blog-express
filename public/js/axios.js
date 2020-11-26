const postRequest = document.querySelector('#post');
const readAllRequest = document.querySelector('#readAll');
const readRequest = document.querySelector('#read');
const updateRequest = document.querySelector('#update');
const deleteRequest = document.querySelector('#delete');


const form = document.querySelector('#formDin');

postRequest.addEventListener('mouseover',  (e) =>{
    e.preventDefault()
    console.log("has pasado por encima del boton")
    document.querySelector('#HUD').innerHTML="";
    document.getElementById('formDin').style.display = "inline";
});

form.addEventListener('submit', async (e) => {
    console.log(e.target)
    e.preventDefault()
   
    console.log()
    let title = document.querySelector('#titulo')
    let snippet = document.querySelector('#snippet')
    let body = document.querySelector('#body')

    
    const resultado = await axios.post('https://web-blog-express-mas-app.herokuapp.com/api/blogs', {
        title: e.target.elements.titulo.value,
        snippet: e.target.elements.snippet.value,
        body: e.target.elements.body.value,
    });
    console.log(resultado)
});

// readAllRequest.addEventListener('click',async (e) => {
//     e.preventDefault(); 
//     document.querySelector('#HUD').innerHTML = "<h1> HOLA PEPE</h1>";
//     const res = await axios.get('https://web-blog-express-mas-app.herokuapp.com/api/blogs',);
    
//     console.log(res);
// });

// readRequest.addEventListener('click',async (e) => {
//     e.preventDefault();
//     const res = await axios.get('https://web-blog-express-mas-app.herokuapp.com/api/blogs',);
// });

// updateRequest.addEventListener('click',async (e) => {
//     e.preventDefault();
//     const res = await axios.patch('https://web-blog-express-mas-app.herokuapp.com/api/blogs',);
// });

// deleteRequest.addEventListener('click',async (e) => {
//     e.preventDefault();
//     const res = await axios.delete('https://web-blog-express-mas-app.herokuapp.com/api/blogs',);
// });
