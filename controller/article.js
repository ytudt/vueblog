'use strict'
class articleController {
    constructor() {}
    showArticle(req, res, next) {
        if (req.session.userInfo) {
            res.json({
                articleList: [],
                user: req.session.userInfo || {}
            });
        } else {
            res.json({
                articleList: [],
                user: {}
            });

        }
    }
}
module.exports = new articleController();
