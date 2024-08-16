const express = require('express');
const sequelize = require('./config/database');
const bookRoutes = require('./routes/book-routes');
const studentRoutes = require('./routes/student-routes');
const loanRoutes = require('./routes/loan-routes');

const app = express();

app.use(express.json());
// app.post('/books', (req, res) => {

//     res.status(201).send('Livre ajouté');
// });
// app.use('/books', bookRoutes);

// app.use('/students', studentRoutes);

// app.use('/loans', loanRoutes);

app.use('/api', bookRoutes);
app.use('/api', studentRoutes);
app.use('/api', loanRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});
