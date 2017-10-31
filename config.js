module.exports = {
    port : process.env.PORT || 8800,
    db : process.env.DB,
    secret : process.env.SECRET,
    data: process.env.DATA,
    database: "mongodb://ccy:raprap@ds243335.mlab.com:43335/dive-reviews"
}