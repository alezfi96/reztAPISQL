import app from './app.js'
import { PORT } from './config.js';

app.listen(PORT);
console.log( `servicio ejecutandose en el puerto ${PORT}` )