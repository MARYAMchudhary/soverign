module.exports = function (app, db, upload, uploadImages, nodemailer) {

    app.get('/basic_settings', function (req, res) {
        db.connect(function (err) {
            if (err) {
                res.send(err)
            }
            else{
                res.send("Basic_Settings - Connected!");
            }
        });
    });
    
    
};