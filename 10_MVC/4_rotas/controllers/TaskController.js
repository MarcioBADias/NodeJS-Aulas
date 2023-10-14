const Task = require('../models/Task')

module.exports =  class TaskController {
    static createTask( req, res ){
        res.render('tasks/create.handlebars')
    }

    static showTask( req, res ){
        res.render('tasks/all.handlebars')
    }
}