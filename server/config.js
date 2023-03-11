import * as dotenv from 'dotenv';

dotenv.config();

export const GPT_KEY = process.env.GPT_KEY;
export const PORT = process.env.PORT;

export const CONFIG = {
    "trial_count": 3,
    "trial_mode": 2,
    "interval_config_update": 43200
};