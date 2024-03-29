import {Router} from 'express';
import {login, register, logout, profile, verifyToken} from '../controllers/auth.controller.js';
import { auth_requied } from '../middlewares/validate_token.js';
import { validateSchema } from '../middlewares/validator.middelware.js';
import { registerSchema, loginSchema } from '../schemas/auth.schema.js';

const router = Router();

router.post('/register', validateSchema(registerSchema),register);

router.post('/login', validateSchema(loginSchema),login);

router.post('/logout', logout);

router.get('/verify', verifyToken);

router.get('/profile',auth_requied ,profile);

export default router