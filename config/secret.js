module.exports = {

  database: process.env.DATABASE || 'mongodb://marketers_user:999999999@localhost:27017/marketers_db',
  port: process.env.PORT || 3029,
  secret: process.env.SECRET || 'FIV4444',

}
