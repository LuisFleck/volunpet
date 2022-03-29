const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
require(".../models/categoria")
const Categoria = mongoose.model("categoria")

router.get('/index', (req, res)=> {
   // res.render("/admin/index")
   res.render('admin/index', {layout : 'main'});
   
    })
router.get('/ong', (req, res)=> {

    res.render('admin/ong', {layout : 'main'});
        
    })
router.get('/cadvoluntario', (req, res)=> {

    res.render('admin/cadVoluntario', {layout : 'main'});
            
    })
router.post('/categoria/nova', (req, res) =>{
    const categoria ={
        nomeVoluntario: req.body.nomeVoluntario,
        ruaVoluntario: req.body.ruaVoluntario,
        bairroVoluntario: req.body.bairroVoluntario,
        cidadeVoluntario: req.body.cidadeVoluntario,
        estadoVoluntario: req.body.estadoVoluntario,
        senhaVoluntario: req.body.senhaVoluntario,
        emailVoluntario:req.body.emailVoluntario,
        telefoneVoluntario: req.body.telefoneVoluntario

    }

})
router.get('/contato', (req, res)=> {
        // res.render("/admin/index")
    res.render('admin/contato', {layout : 'main'});
        
         })        

module.exports = router