/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getUser: (req, res) => {
        let data = req.body;
        // resultt = add database ? 0 : 1 
        return res.send(data);
    },
    create: (req, res) => {
        let data = req.body;
        User.create(data).exec((err, result) => {
            if(err){
                
            }
            return res.send(result);
        })
    }
};

