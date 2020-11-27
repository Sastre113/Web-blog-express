const postRequest = document.querySelector('#post');
const readAllRequest = document.querySelector('#readAll');
const readRequest = document.querySelector('#read');
const updateRequest = document.querySelector('#update');
const deleteRequest = document.querySelector('#delete');

const contenido = document.querySelector('.right');
const form = document.querySelector('#formularioDin');

const contenidos = ["#HUD","#formularioDin","#getDatos","#getUnDato","#updateDatos","#deleteDatos"]

// Funcion auxiliar

function mostrarSelector(target){
    contenidos.forEach( campo =>{
        if(target != campo)
            document.querySelector(campo).style.display = "none";
        else
            document.querySelector(target).style.display = "block";
    });
}

// Boton Post

postRequest.addEventListener('mouseover',  (e) =>{
    e.preventDefault();
    mostrarSelector("#formularioDin");
});

form.addEventListener('submit', async (e) => {
    console.log(e.target);
    e.preventDefault();

    let title = document.querySelector('#titulo')
    let snippet = document.querySelector('#snippet')
    let body = document.querySelector('#body')

    
    const resultado = await axios.post('https://web-blog-express-mas-app.herokuapp.com/api/blogs', {
        title: e.target.elements.titulo.value,
        snippet: e.target.elements.snippet.value,
        body: e.target.elements.body.value,
    });
    
    form.reset();
    console.log(resultado)
});

// Boton Obtener todos los datos


readAllRequest.addEventListener('mouseover',  (e) =>{
    e.preventDefault()
    mostrarSelector("#getDatos");
});

readAllRequest.addEventListener('click',async (e) => {
    e.preventDefault(); 
    document.querySelector('#HUD').innerHTML = "";
    const res = await axios.get('https://web-blog-express-mas-app.herokuapp.com/api/blogs',);
    
    console.log(res);
});

// Boton Obtener 1 dato


readRequest.addEventListener('mouseover',  (e) =>{
    e.preventDefault()
    mostrarSelector("#getUnDato");
});

readRequest.addEventListener('click',async (e) => {
    e.preventDefault();
    const res = await axios.get('https://web-blog-express-mas-app.herokuapp.com/api/blogs',);
});


// Boton Actualizar datos

updateRequest.addEventListener('mouseover',  (e) =>{
    e.preventDefault()
    mostrarSelector("#updateDatos");
});

updateRequest.addEventListener('click',async (e) => {
    e.preventDefault();
    const res = await axios.patch('https://web-blog-express-mas-app.herokuapp.com/api/blogs',);
});


deleteRequest.addEventListener('mouseover',  (e) =>{
    e.preventDefault()
    mostrarSelector("#deleteDatos");
});


deleteRequest.addEventListener('click',async (e) => {
    e.preventDefault();
    const res = await axios.delete('https://web-blog-express-mas-app.herokuapp.com/api/blogs',);
});
