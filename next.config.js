import dotenv from 'dotenv';

dotenv.config();

module.exports = {
  env: {
    API_KEY:process.env.SHOPIFY_API_KEY,
  },
};
