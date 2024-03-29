const express = require('express');
const router = express.Router();
const { CreateProfile, UserLogin, SelectProfile, UpdateProfile } = require('../controllers/ProfileController');
const { AuthVerifyMiddleWare } = require('../middleware/AuthVerifyMiddleware');

const { CreateToDo, SelectToDo, UpdateToDo, UpdateStatusToDo, RemoveToDo, SelectToDoByStatus, SelectToDoByDate } = require('../controllers/TodoListController');

// user authentication routes
router.post("/CreateProfile", CreateProfile)
router.post("/UserLogin", UserLogin)
router.get("/SelectProfile", AuthVerifyMiddleWare, SelectProfile)
router.get("/UpdateProfile", AuthVerifyMiddleWare, UpdateProfile)


// todolist routes
router.post("/CreateToDo", AuthVerifyMiddleWare, CreateToDo)
router.get("/SelectToDo", AuthVerifyMiddleWare, SelectToDo)
router.post("/UpdateToDo", AuthVerifyMiddleWare, UpdateToDo)
router.post("/UpdateStatusToDo", AuthVerifyMiddleWare, UpdateStatusToDo)
router.post("/RemoveToDo", AuthVerifyMiddleWare, RemoveToDo)
router.get("/SelectToDoByStatus", AuthVerifyMiddleWare, SelectToDoByStatus)
router.get("/SelectToDoByDate", AuthVerifyMiddleWare, SelectToDoByDate)






module.exports = router;