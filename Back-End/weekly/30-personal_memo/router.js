const express = require('express');
const ults = require('./renderData.js');

// router
class Router {
    constructor(input) {
        this.memo = input
    }
    route() {
        let memoAction = express.Router();
        memoAction.get('/', (req, res) => {
            this.memo.list(req.auth.user).then(data => {
                return res.send(ults.outputHTML(req.auth.user, data));
            }).catch(err=>{console.log('from router_get '+err);})
        })
        memoAction.get('/logout', (req, res) => {
            return res.sendStatus(401)
        })
        memoAction.post('/', (req, res) => {
            this.memo.add(req.auth.user, req.body.memo).then(data => {
                return res.send(ults.outputHTML(req.auth.user, data));
            }).catch(err=>{console.log('from router_post '+err);})
        })
        memoAction.put('/:id', (req, res) => {
            this.memo.update(req.auth.user, req.body.memo, req.params.id).then(data => {
                return res.send(ults.outputHTML(req.auth.user, data));
            }).catch(err=>{console.log('from router_put '+err);})
        })
        memoAction.delete('/:id', (req, res) => {
            this.memo.remove(req.auth.user, req.params.id).then(data => {
                return res.send(ults.outputHTML(req.auth.user, data));
            }).catch(err=>{console.log('from router_delete '+err);})
        })
        return memoAction
    }
}
module.exports = Router;