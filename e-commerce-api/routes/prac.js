const router = require("express").Router();
const User = require("../models/User");

//REGISTER
router.post("/", async (req, res) => {
    // const img = new RegExp(req.body.img, "i");
    const val = "tes,not";
    const str = val.split(',')[0]
    const str2 = val.split(',')[1]
    const img = new RegExp(str, "i")
    const img2 = new RegExp(str2, "i")
    console.log(img)
    const posts = await User.find({ img: {$in: [img, img2]} });
    res.send(posts)
});
  

module.exports = router;