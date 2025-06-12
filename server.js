// server.js
const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
require('dotenv').config(); 

const connectDB = require('./config/db'); // Підключення до бази даних

// Імпорт маршрутів
const pageRoutes = require('./routes/pageRoutes');
const userRoutes = require('./routes/userRoutes');
const accountRoutes = require('./routes/accountRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const budgetRoutes = require('./routes/budgetRoutes');


const app = express();
const port = process.env.PORT || 3000;

// Підключення до MongoDB
connectDB();

// Налаштування шаблонізатора Mustache
app.engine('mustache', mustacheExpress(
    path.join(__dirname, 'views', 'partials'), // Шлях до partials
    '.mustache'
));
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views')); // Шлях до views

// Middleware для обробки даних форм
app.use(express.json()); // Для обробки JSON-даних (наприклад, з API)
app.use(express.urlencoded({ extended: true })); // Для обробки даних з HTML-форм

// Обслуговування статичних файлів (CSS, JS, зображення)
app.use(express.static(path.join(__dirname, 'public')));

// Використання маршрутів
app.use('/', pageRoutes);
app.use('/users', userRoutes);
app.use('/accounts', accountRoutes);
app.use('/transactions', transactionRoutes);
app.use('/budgets', budgetRoutes);

// Обробка 404 помилок
app.use((req, res, next) => {
    res.status(404).send('Сторінку не знайдено!');
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущено на http://localhost:${port}`);
});
