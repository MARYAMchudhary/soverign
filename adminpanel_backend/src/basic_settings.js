module.exports = function (app, db, upload, uploadImages, nodemailer) {
  app.get("/basic_settings", function (req, res) {
    db.connect(function (err) {
      if (err) {
        res.send(err);
      } else {
        res.send("Basic_Settings - Connected!");
      }
    });
  });

  app.get("/getuser", (req, res) => {
    try {
      db.query(
        "SELECT basic_settings_logo FROM basic_settings",
        (err, result) => {
          if (err) {
            console.log("error");
          } else {
            console.log("data get");
            res.status(201).json(result[0]);
          }
        }
      );
    } catch (error) {
      res.status(422).json({ status: 422, error });
    }
  });

  app.post("/upload_logo", upload.single("photo"), async (req, res) => {
    db.connect(function (err) {
      if (!req.file) {
        console.log("No file upload");
      } else {
        console.log(req.file.filename);
        try {
          var imgsrc = req.file.filename; //ab kr
          var insertData =
            "INSERT INTO basic_settings (basic_settings_logo) VALUES(?)";
          db.query(insertData, [imgsrc], (err, result) => {
            if (err) {
              throw err;
            } else {
              res.send("Up");
            }
            console.log("file uploaded");
          });
        } catch (error) {
          console.log(error);
        }
      }

      // try {
      //   db.query(
      //     "INSERT INTO basic_settings (basic_settings_logo) VALUES(?)",

      //     (err, result) => {
      //       if (err) {
      //         console.log("error");
      //       } else {
      //         console.log("data added");
      //         res.status(201).json({ status: 201, data: req.body });
      //       }
      //     }
      //   );
      // } catch (error) {
      //   console.log(error);
      // }
    });
  });

  //!LINKS
  app.get("/get_links", (req, res) => {
    try {
      db.query("SELECT * FROM basic_settings", (err, result) => {
        if (err) {
          console.log("error");
        } else {
          console.log("data get");
          res.status(201).json(result[6]);
        }
      });
    } catch (error) {
      res.status(422).json({ status: 422, error });
    }
  });

  app.post("/add_links", async (req, res) => {
    db.connect(function (err) {
      const {
        fbLink,
        instLink,
        discordLink,
        twitterLink,
        tgLink,
        watspLink,
        gitLink,
      } = req.body;
      const values = [
        fbLink,
        instLink,
        discordLink,
        twitterLink,
        tgLink,
        watspLink,
        gitLink,
      ];
      let sql =
        "INSERT INTO basic_settings(basic_settings_facebook_link,basic_settings_instagram_link,basic_settings_discord_link,basic_settings_twitter_link,basic_settings_telegram_link,basic_settings_whatsapp_link,basic_settings_github_link) VALUES (?)";
      db.query(sql, [values], (err, result) => {
        if (err) {
          console.log(`here is the ${err}`);
        } else {
          console.log(`succesfully post ${result[0]}`);
          res.status(201).json(req.body);
          // res.redirect("/api/players");
        }
      });
    });
  });
  //!WEBTITLE
  app.post("/add_webtitle", async (req, res) => {
    db.connect(function (err) {
      const { webTitle } = req.body;
      const values = [webTitle];
      let sql =
        "INSERT INTO basic_settings(basic_settings_website_title) VALUES (?)";
      db.query(sql, [values], (err, result) => {
        if (err) {
          console.log(`here is the ${err}`);
        } else {
          console.log(`succesfully post ${result[0]}`);
          res.status(201).json(req.body);
          // res.redirect("/api/players");
        }
      });
    });
  });
};
