const router = require("express").Router()
const userCont = require("../Controller/userCont")

router.post("/add", userCont.addNewUser)
router.get("/find", userCont.findUser)
router.get("/sal", userCont.findSalary)
router.get("/exp", userCont.findExp)
router.get("/grad", userCont.findGradExp)
router.put("/upsal", userCont.updateSal)
router.delete("/del", userCont.DeleteUser)


module.exports = router