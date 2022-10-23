const { Router } = require("express");
const {
  CostaRicaGet,
  CostaRicaPost,
  CostaRicaPut,
  CostaRicaDelete,
  GuatemalaGet,
  GuatemalaPost,
  GuatemalaPut,
  GuatemalaDelete,
} = require("../controllers/paisController");

const router = Router();

///// CODIGO PARA INSERTAR   ----- POST
router.get("/CostaRicaGet", CostaRicaGet);
router.post("/CostaRicaPost", CostaRicaPost);
router.put("/CostaRicaPut/:id", CostaRicaPut);
router.delete("/CostaRicaDelete/:id", CostaRicaDelete);
router.get("/GuatemalaGet", GuatemalaGet);
router.post("/GuatemalaPost", GuatemalaPost);
router.put("/GuatemalaPut/:id", GuatemalaPut);
router.delete("/GuatemalaDelete/:id", GuatemalaDelete);
module.exports = router;
