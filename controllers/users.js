import { v4 as uuidv4 } from 'uuid'

let users = [
]

export const getAllUsers = (req, res) => {
    res.send(users)
}

export const createUser = (req, res) => {
    const user = req.body

    users.push({id: uuidv4(), ...user})

    res.send(`User with the name ${user.firstName} added to the database!`)
}

export const getUser = (req, res) => {
    const { id } = req.params
    
    const founduser = users.find((user) => user.id === id)

    res.send(founduser)
}

export const updateUser = (req, res) => {
    const {id} = req.params

    const { firstName, lastName, age } = req.body

    let user = users.find((user) => user.id === id)

    if(firstName) user.firstName = firstName

    if(lastName) user.lastName = lastName

    if(age) user.age = age

    res.send(`User with the ID of ${id} has been updated`)

}

export const deleteUser = (req, res) => {
    const {id} = req.params

    users = users.filter( (user) => user.id != id )

    res.send(`User deleted from the database!`)
}