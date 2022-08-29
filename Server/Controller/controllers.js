const db = require('../Models/betterReadsModel.js');

module.exports = {
    verifyUser: async (req, res, next) => {
        try {
            const { username, password } = req.body;
            const dada = await db.query(`SELECT * FROM user_login WHERE username = '${username}' AND password = '${password}' ;`)
            console.log(dada.rows)
            const data = await db.query(`SELECT * FROM users WHERE login_id = '${dada.rows[0].id}';`)
            res.locals.data = data.rows[0];
            res.redirect('/app');
            return next();
        } catch(err) {
            return res.status(400).json({
                err: "User cannot be found. Please try again."
            })
        }
    },
    addUser: async (req, res, next) => {
        try {
            const { username, password, firstname, lastname } = req.body;
            await db.query(`INSERT INTO user_login (username, password) VALUES ('${username}', '${password}');`)
            const userid = await db.query(`SELECT id FROM user_login WHERE username = '${username}' AND password = '${password}';`) 
            await db.query(`INSERT INTO users(firstname, last_name, username, login_id) VALUES ('${firstname}', '${lastname}', '${username}', '${userid.rows[0].id}');`);
            // const dada = await db.query(`SELECT * FROM user_login WHERE username = '${username}' AND password = '${password}' ;`)
            // console.log(dada.rows)
            // const data = await db.query(`SELECT * FROM users WHERE login_id = '${dada.rows[0].id}';`)
            // res.locals.data = data.rows[0];
            return next();
        } catch (err) {
            console.log(err)
            res.locals.message = 'Failed to add user'
            return next(err);
        }
    }, //this is not what was suppose to happy lol, but we present in 1 hr
    addBook: async (req, res, next) => {
            try {
                const { title } = req.body;
                console.log(req.body)
                await db.query(`INSERT INTO books(title, author, publisher, published_date) VALUES ('${title}', 'null', 'null', NOW()::Date);`)
                return next();
            }
        catch (err) {
            console.log(err)
            res.locals.book = 'Failed to add book'
            return next(err);
        }  
    },
    getBooks: async (req, res, next) => {
            try{
                const books = await db.query(`SELECT title FROM books;`)
                res.locals.allBooks = books.rows;
                return next();
            }
            catch (err) {
                console.log(err)
                res.locals.allBooks = 'Failed to get all books'
                return next(err);
            }  
    }
}


