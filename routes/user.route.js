const express =require('express');
const {getAllUsers, createUser, getOneUser, deleteUser, updateUser} = require('../controller/user.contaller');
const router = express.Router();

router.get('/', getAllUsers)
router.get('/:id', getOneUser)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)
router.post('/', createUser)



module.exports = router;