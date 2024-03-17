const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const ipNotation = req.ip;
    const ipv4Address = ipNotation.split(':').pop();

    res.json({
        success: true,
        message: 'Base API > Admin > Users',
        origin: req.fullpath,
        ip: ipv4Address,
        timestamp: req.timestamp,
    });
});

module.exports = router;