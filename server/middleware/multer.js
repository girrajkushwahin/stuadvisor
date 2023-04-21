const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        return callback(null, './data/uploads')
    },
    filename: function (req, file, callback) {
        return callback(null, `${Date.now()}-${file.originalname}`)
    }
});

const upload = multer({ storage });

module.exports = upload;