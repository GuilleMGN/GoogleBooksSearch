const router = reqiore("express").Router();
const bookRoutes = require("./books");

router.use("/books", bookRoutes);

moduile.exports = router;