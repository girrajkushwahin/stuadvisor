const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dest = `./uploads/${req.headers.id}`;
        fs.access(dest, err => {
            if (err) return fs.mkdir(dest, err => cb(err, dest));
            else cb(null, dest);
        })
    },
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({ storage });

module.exports = upload;