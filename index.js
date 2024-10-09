import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true })); // Para manejar datos de formularios
app.use(bodyParser.json()); // Para manejar datos en formato JSON

app.use(express.static("public"));
app.use(express.static("views"));

// Rutas
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

// Ruta para manejar la solicitud POST del formulario
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body; // Desestructuración de req.body

  // Aquí puedes procesar los datos, como almacenarlos en una base de datos o enviarlos por correo
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Enviar una respuesta al cliente
  res.json({ success: true, message: "Your message has been received!" });
  
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

