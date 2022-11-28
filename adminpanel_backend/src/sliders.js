module.exports = function (app, db, upload, uploadImages, nodemailer) {

    app.get('/sliders', function (req, res) {
        db.connect(function (err) {
            if (err) {
                res.send(err)
            }
            else{
                res.send("sliders - Connected!");
            }
        });
    });
    
    
};