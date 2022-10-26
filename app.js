const PORT = 3000;
const app = require('./routes/routing.js');
app.set('view engine', 'ejs');
app.listen(PORT, () => console.log('escuchando en puerto: ', PORT));
