const { Router, response, request } = require("express");
const costaRicaMd = require("../models/costaRica");
const guatemalaMd = require("../models/guatemala");
// GET
const CostaRicaGet = async (req, res) => {
  const costaRicaList = await costaRicaMd.find().exec();

  res.json({
    ok: true,
    infoEstudiante: "MELVIN ALEXANDER SOSA MEDRANO CARNET 17-1683-2017",
    costaRicaList,
  });
};
// POST
const CostaRicaPost = async (req, res) => {
  const { codigo, nombreproyecto, paisqueejecuta, fechacierre } = req.body;
  // acceder a cuerpo de la peticion
  const body = req.body;

  // Objeto usuario
  const costaRica = new costaRicaMd({
    codigo,
    nombreproyecto,
    paisqueejecuta,
    fechacierre,
  });

  // Almacenamos en la BD
  costaRica.save();
  console.log(costaRica);
  res.json({
    ok: true,
    msg: costaRica,
    infoEstudiante: "MELVIN ALEXANDER SOSA MEDRANO CARNET 17-1683-2017",
  });
};

// PUT
const CostaRicaPut = async (req, res) => {
  const { _id, codigo, nombreproyecto, paisqueejecuta, ...resto } = req.body;

  const costaRica = await costaRicaMd.findByIdAndUpdate(_id, resto);
  res.json({
    ok: true,
    msg: "PUT REALIZADO CORRRECTAMENTE",
    infoEstudiante: "MELVIN ALEXANDER SOSA MEDRANO CARNET 17-1683-2017",
    costaRica,
  });
};
// DELETE
const CostaRicaDelete = async (req, res) => {
  const { _id } = req.body;
  console.log(_id);
  const costaRica = await costaRicaMd.findByIdAndDelete(_id);
  res.json({
    ok: true,
    infoEstudiante: "MELVIN ALEXANDER SOSA MEDRANO CARNET 17-1683-2017",
    msg: "ELIMINACION EXITOSA",
  });
};
// GET
const GuatemalaGet = async (req, res) => {
  const guatemalaList = await guatemalaMd.find().exec();

  res.json({
    ok: true,
    infoEstudiante: "MELVIN ALEXANDER SOSA MEDRANO CARNET 17-1683-2017",
    guatemalaList,
  });
};

// POST
const GuatemalaPost = async (req, res) => {
  const { codigo, nombreproyecto, monto, fecha } = req.body;
  // acceder a cuerpo de la peticion
  const body = req.body;

  // Objeto usuario
  const guatemala = new guatemalaMd({ codigo, nombreproyecto, monto, fecha });

  guatemala.save();
  console.log(guatemala);
  res.json({
    ok: true,
    msg: guatemala,
    infoEstudiante: "MELVIN ALEXANDER SOSA MEDRANO CARNET 17-1683-2017",
  });
};
// PUT
const GuatemalaPut = async (req, res) => {
  const { _id, codigo, nombreproyecto, ...resto } = req.body;

  const guatemala = await guatemalaMd.findByIdAndUpdate(_id, resto);
  res.json({
    ok: true,
    msg: "PUT REALIZADO CORRRECTAMENTE",

    infoEstudiante: "MELVIN ALEXANDER SOSA MEDRANO CARNET 17-1683-2017",
    guatemala,
  });
};
// DELETE
const GuatemalaDelete = async (req, res) => {
  const { _id } = req.body;
  console.log(_id);
  const guatemala = await guatemalaMd.findByIdAndDelete(_id);
  res.json({
    ok: true,
    infoEstudiante: "MELVIN ALEXANDER SOSA MEDRANO CARNET 17-1683-2017",
    msg: "ELIMINACION EXITOSA",
  });
};

// Export de funciones para acceso desde otros archivos.
module.exports = {
  GuatemalaGet,
  GuatemalaPost,
  GuatemalaPut,
  GuatemalaDelete,
  CostaRicaGet,
  CostaRicaPost,
  CostaRicaPut,
  CostaRicaDelete,
};
