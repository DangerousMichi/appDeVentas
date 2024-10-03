var rutas = require("express").Router();
//var {Router} = require("express"); - alternativa
var{mostrarUsuarios, nuevoUsuario, borrarUsuario, buscarPorID} = require("../db/usuariosBD");


rutas.get("/",async(req,res)=>{
    //res.send("hola estas en raiz");
    var usuariosValidos = await mostrarUsuarios();
    console.log(usuariosValidos);
    res.json(usuariosValidos);
});

rutas.get("/buscarPorId/:id",async(req,res)=>{
    var usuarioValido = await buscarPorID(req.params.id);
    res.json(usuarioValido);
});

rutas.delete("/borrarUsuario/:id",async(req,res)=>{
    var usuarioBorrado = await borrarUsuario(req.params.id);
    res.json(usuarioBorrado);
});

rutas.post("/nuevoUsuario",async(req,res)=>{
    var usuarioValido = await nuevoUsuario(req.body);
    res.json(usuarioValido);
});

//Ruta de productos 
module.exports=rutas;