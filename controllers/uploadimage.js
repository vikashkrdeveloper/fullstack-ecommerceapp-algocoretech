const multer = require('multer')

const storage = multer.memoryStorage({
    // limits: {
    //   fileSize: 1024 * 1024,
    // },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed.'), false);
        }
    },
});
const upload=multer({storage:storage});

module.exports=upload;