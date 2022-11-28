module.exports = function (app, pool, upload, uploadImages, nodemailer) {

    app.get('/apis_2', function (req, res) {
        pool.connect(function (err) {
            if (err) {
                res.send(err)
            }
            else{
                res.send("APIS 2 - Connected!");
            }
        });
    });
    
    
};