// Hacer un sitio con 3 rutas: "/", "/about" y "/products". Acuérdense que van a ser todos código 200, y van a tener que tener un 404 para cualquier ruta que no sea esa. Pónganle un poco de contenido y estilos a cada una de las rutas!

const http = require('http');
const PORT = process.env.PORT || 8000;

const homePage = () =>
  `
  <div
  style="
    background-color: rgb(151, 151, 159);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;

  "
  >
  <h1 style="color: red">Corriendo en localhost:${PORT}</h1>
  <p style="color: black; font-size: 46px">Esta es mi pagina</p>
  <div
        style="
          background-color: red;
          height: 100px;
          width: 100px;
          border-radius: 50%;
        "
      ></div>
  </div>
  <div style="
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        ">
            <a
                style="
                text-decoration: none;
                color: black;
                font-weight: bold;
                font-size: 30px;
                cursor: pointer;
                padding-bottom: 20px;
                "
                href="/products"
        >Products</a
        >
            <a style="
                text-decoration: none;
                color: black;
                font-weight: bold;
                font-size: 30px;
                cursor: pointer;
        "
                 href="/about">About</a>
  </div>
    `;
const aboutPage = () =>
  `
  <div
  style="
    background-color: rgb(151, 151, 159);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;

  "
  >
  <h1 style="color: lightblue">Corriendo en localhost:${PORT}/about</h1>
  <p style="color: black; font-size: 46px">Esta es mi pagina</p>
  <div
        style="
          background-color: lightblue;
          height: 100px;
          width: 100px;
          border-radius: 50%;
        "
      ></div>
  </div>
  <div style="
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ">
  <a style="
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 30px;
    cursor: pointer;
    padding-bottom: 20px;

    "
    href="/">Home</a>
  <a
  style="
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 30px;
    cursor: pointer;
    "
    href="/products"
    >Products</a
    >
    
    </div>
    `;

const productPage = () => `
<div
style="
  background-color: rgb(151, 151, 159);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
"
>
<h1 style="color: green">Corriendo en localhost:${PORT}/products</h1>
<p style="color: black; font-size: 46px">Esta es mi pagina</p>
<div
style="
  background-color: green;
  height: 100px;
  width: 100px;
  border-radius: 50%;
"
></div>
</div>
<div style="
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
">
<a
style="
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
  padding-bottom: 20px;
  "
  href="/"
  >Home</a
  >
  <a style="
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
  "
  href="/about">About</a>
  </div>
    `;
const errorPage = () => `
<div
style="
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
"
>
<p style="color: black; font-size: 46px">Caiste en un error 402</p>
<span style="color: black; font-size: 30px">$$$$$$ Poniendo estaba la ganza $$$$$$</span>
<div
style="
  background-color: green;
  height: 100px;
  width: 100px;
  border-radius: 50%;
"
>
</div>
<span style="color: black; font-size: 30px">O sino presiona en Home</span>
</div>
<div style="
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
">
<a
style="
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
  padding-bottom: 20px;
  "
  href="/"
  >Home</a
  >
 
  </div>
    `;

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(homePage());
    res.end();
  } else if (req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(aboutPage());
    res.end();
  } else if (req.url == '/products') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(productPage());
    res.end();
  } else {
    res.writeHead(402, { 'Content-Type': 'text/html' });
    res.write(errorPage());
    res.end();
  }
});

server.listen(PORT, (err) => {
  if (err) {
    console.log(err, 'Ouch!');
  } else {
    console.log(`Andando en localhost:${PORT}`);
  }
});
