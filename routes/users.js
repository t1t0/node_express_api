import express from 'express'
import { getAllUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js'

const router = express.Router()

router.get('/', getAllUsers)
router.post('/', createUser)
router.get('/:id', getUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)


export default router