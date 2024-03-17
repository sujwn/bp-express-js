const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
require("dotenv").config();
const { format, formatInTimeZone } = require('date-fns-tz');
const clog = require("clog");
const { handleError, errorNotFound } = require("./helpers/ErrorHandler");

const selectedTimeZone = process.env.DEFAULT_TIMEZONE || "Asia/Jakarta";
const now = formatInTimeZone(new Date(), selectedTimeZone, 'yyyy-MM-dd HH:mm:ss');
const timezone = format(new Date(), 'z', { timeZone: selectedTimeZone });

app.use(morgan("short")); // HTTP request log
const corsOptions = {
    origin: true,
    credentials: true,
};

app.use(function (req, res, next) {
    cors(corsOptions)(req, res, next);
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet()); // Setting HTTP headers

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.set(clog);
app.set('env', NODE_ENV); // Set app environment

// Pass variables to all requests
app.use((req, res, next) => {
    req.fullpath = req.path;
    req.timestamp = formatInTimeZone(new Date(), selectedTimeZone, 'yyyy-MM-dd HH:mm:ssXXX');
    next();
});

app.get("/", (req, res) => {
    const ipNotation = req.ip;
    const ipv4Address = ipNotation.split(':').pop();

    res.json({
        success: true,
        ip: ipv4Address,
        timestamp: `${now} (${timezone})`,
    });
});

app.use('/api', require('./routes'));

// Use custom error handler as middleware
app.use((err, req, res, next) => {
    handleError(err, req, res);
});

app.listen(PORT, () => {
    clog('server', `${now} (${timezone}) Server started on port ${PORT} in ${app.get('env')} mode`);
});

// Handle not found
app.use(function (req, res, next) {
    errorNotFound(req, res);
});