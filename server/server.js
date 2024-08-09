const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json()); // JSON verilerini işlemek için

// Kayıt verilerini bir dosyaya kaydetme
app.post('/save-user', (req, res) => {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
        return res.status(400).json({ message: 'Eksik veri' });
    }

    const userData = `Email: ${email}, Username: ${username}, Password: ${password}\n`;

    fs.appendFile(path.join(__dirname, 'users.txt'), userData, (err) => {
        if (err) {
            return res.status(500).json({ message: 'Dosya yazma hatası' });
        }
        res.status(200).json({ message: 'Kullanıcı başarıyla kaydedildi!' });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
