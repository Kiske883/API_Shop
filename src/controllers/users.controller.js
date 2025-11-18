import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/user.model';

export const register = async (req, res) => {
  
  req.body.password = bcrypt.hashSync(req.body.password,12);
  const newUser = await User.create ( req.body) ;

  res.json(newUser);

  // libreria passport, es una libreria para hacer login social ( gitHub, google, etc ... )
  // mirar firebase y supabase plataformas de autenticacion
};
