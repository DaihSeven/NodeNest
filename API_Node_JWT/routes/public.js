import express from 'express';
import { PrismaClient } from '@prisma/client'

const router = express.Router();
const prisma = new PrismaClient()


// Cadastro
router.post('/register',async (req, res) => {
    const user = req.body;

    await prisma.user.create({
        data: {
            email: user.email,
            name: user.name,
            password
        }
    });
    res.status(201).json(user)
});

export default router;

// bdaih0405
// Nj8uXx13w4vg1wsm
// mongodb+srv://bdaih0405:<db_password>@nodenest.gzl8dho.mongodb.net/?retryWrites=true&w=majority&appName=NodeNest