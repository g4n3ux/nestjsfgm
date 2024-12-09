import 'dotenv/config'; 
import * as joi from 'joi';

interface EnvVars {
    PORT : number;
}

const envsSchema = joi.object({
    PORT : joi.number().required()
})
.unknown(true);

const {error, value } = envsSchema.validate(process.env);

if (error ) {
    throw new Error(`Config valaidation  error: ${error.message}`);
}
const EnvVars : EnvVars = value;

export const envs = { port : EnvVars.PORT,    
}