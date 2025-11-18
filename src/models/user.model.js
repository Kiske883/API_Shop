import { Schema, model } from "mongoose";

// Filosifia Fat Model, skinny controller
// En definitiva un model bien gordo de funcionalidad y un controlador lo mas sencillo posible

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    role:String
},{
    // Cuando hacemos un create en mongodb, nos crea un campo v__, que contiene un numero que sería la version
    // para eliminarlo pq relamente no se utiliza tenemos q ue hacer versionkey, además con timestamps nos añade 
    // los 2 campos create_at y updated_at
    versionKey:false, timestamps:true
}
);

const User = model('user', userSchema);

export default User ; 
