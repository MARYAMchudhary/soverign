const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const multer = require("multer")
const bcrypt = require("bcrypt")

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "unialso1_sovereignnft",
    host: "70.32.23.53",
    password: "unialso1_sovereignnft",
    database: "unialso1_sovereignnft"
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./nodeassets/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "--" + file.originalname);
    },
})

const upload = multer({
    storage: storage
})
const uploadImages = multer({
    storage: storage
}).array('nft_images');


app.post("/storeToken", (req, res) => {
    uploadImages(req, res, function (err) {
        console.log("Inner Images: ", req.body)
        console.log("FilesError: ", err);
        if (err) {
            console.log("FilesError: ", err);
            return;
        }
        let profileImage = ""
        let images = []
        req.files.forEach((element, index) => {
            if (index == 0) {
                profileImage = element.filename
            }
            else {
                images.push(element.filename)
            }
        });
        const query = "INSERT INTO `tbl_nfts` (`nft_image`, `nft_name`, `nft_url`, `nft_description`, `nft_mint_date`, `nft_pre_mint_spots`, `nft_pre_mint_price`, `nft_extra_images`, `nft_link_domain`, `nft_link_discord`, `nft_link_twitter`, `nft_link_instagram`, `nft_link_reddit`,`nft_wallet_address`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        db.query(query, [
            profileImage,
            req.body.nft_name,
            req.body.nft_url,
            req.body.nft_description,
            req.body.nft_mint_date,
            req.body.nft_pre_mint_spots,
            req.body.nft_pre_mint_price,
            JSON.stringify(images),
            req.body.nft_link_domain,
            req.body.nft_link_discord,
            req.body.nft_link_twitter,
            req.body.nft_link_instagram,
            req.body.nft_link_reddit,
            req.body.nft_wallet_address
        ], (err, data) => {
            if (err) {
                return res.status(400).json(err)
            }
            return res.json(data, res.insertId)

        })
    });
})
app.post("/updateToken", (req, res) => {
    uploadImages(req, res, function (err) {
        console.log("Inner Images: ", req.body)
        console.log("FilesError: ", err);
        if (err) {
            console.log("FilesError: ", err);
            return;
        }
        let profileImage = ""
        let images = []
        req.files.forEach((element, index) => {
            if (index == 0) {
                profileImage = element.filename
            }
            else {
                images.push(element.filename)
            }
        });

        const query = "UPDATE tbl_nfts SET `nft_image`=? , `nft_name`=?,`nft_url`=?,`nft_description`=?,`nft_mint_date`=?,`nft_pre_mint_spots`=?,`nft_pre_mint_price`=?,`nft_extra_images`=?,`nft_link_domain`=?,`nft_link_discord`=?,`nft_link_twitter`=?,`nft_link_instagram`=?,`nft_link_reddit`=? WHERE nft_id =?";

        db.query(query, [
            profileImage,
            req.body.nft_name,
            req.body.nft_url,
            req.body.nft_description,
            req.body.nft_mint_date,
            req.body.nft_pre_mint_spots,
            req.body.nft_pre_mint_price,
            JSON.stringify(images),
            req.body.nft_link_domain,
            req.body.nft_link_discord,
            req.body.nft_link_twitter,
            req.body.nft_link_instagram,
            req.body.nft_link_reddit,
            req.body.nft_id
        ], (err, data) => {
            if (err) {
                return res.status(400).json(err)
            }
            return res.json(data)

        })
    });
})

app.get("/getNfts", (req, res) => {
    db.query("SELECT * FROM tbl_nfts", (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
})
app.get("/getNftById/:id", (req, res) => {
    db.query("SELECT * FROM tbl_nfts WHERE nft_id=" + req.params.id, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
})
app.post("/storeInvestment", (req, res) => {

    const query = "INSERT INTO `tbl_investments` (`investment_amount`, `nft_id`, `user_wallet_address`, `investment_status`) VALUES (?, ?, ?, ?)";

    db.query(query, [
        req.body.amount,
        req.body.nft_id,
        req.body.user_wallet_address,
        req.body.investment_status
    ], (err, data) => {
        if (err) {
            return res.json(err)
        }
        return res.json(data)

    })
})
app.post("/getInvestment/:nft_id", (req, res) => {
    console.log(req.body)
    db.query("SELECT * FROM tbl_investments WHERE nft_id=" + req.params.nft_id + " AND user_wallet_address=" + req.body.user_wallet + "ORDER BY investment_timestamp", (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
})

app.get("/getMintCount", (req, res) => {
    db.query("SELECT * FROM tbl_nfts WHERE nft_id", (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            // console.log( result[ result.length - 1 ].nft_id + 1 );
            res.send(result);
        }
    })
});

app.post("/refundInvestment", (req, res) => {

    const query = "UPDATE tbl_investments SET `investment_status`=? WHERE nft_id =? AND user_wallet_address=?";

    db.query(query, [
        req.body.investment_status,
        req.body.nft_id,
        req.body.user_wallet_address,

    ], (err, data) => {
        if (err) {
            return res.json(err)
        }
        return res.json(data)

    })
})

app.post("/storeUser", (req, res) => {

    const query = "INSERT INTO `users` (`user_wallet_address`, `user_uid`) VALUES (?, ?)";

    db.query(query, [
        req.body.user_wallet_address,
        req.body.user_uid
    ], (err, data) => {
        if (err) {
            return res.json(err)
        }
        return res.json(data)

    })
})
app.get("/getUserByWalletAddress/:id", (req, res) => {
    db.query("SELECT * FROM users WHERE user_wallet_address=" + req.params.id, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
})
app.get("/getUserById/:id", (req, res) => {
    db.query("SELECT * FROM users WHERE user_id=" + req.params.id, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
})
app.get("/getUserByUsername/:user_name", (req, res) => {
    console.log(req.params)
    db.query("SELECT * FROM users WHERE user_name='" + req.params.user_name+"'", (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
})
app.post("/updateUser", upload.single("user_image"), (req, res) => {
    bcrypt.hash(req.body.user_password, 10)
        .then(hash => {
            console.log(hash)
            const userId = req.body.user_id;
            console.log(userId)
            const query = "UPDATE users SET `user_name`=? , `user_email`=?,`user_password`=?,`user_image`=?,`user_interests`=? WHERE user_id =?";
            const values = [
                req.body.user_name,
                req.body.user_email,
                hash,
                user_image = req.file.filename,
                req.body.user_interests
            ];
            db.query(query, [...values, userId], (err, data) => {
                if (err) {
                    return res.status(400).json(err)
                }
                return res.status(200).json(data)
            })
            // Store hash in the database
        })
        .catch(err => {
            console.log(err)
        })

})
app.listen("3001", () => {
    console.log(`Example app listening on port ${3001}`)
})
