/* Mostrar lista de reportes*/

module.exports.reportsList = function (req,res) {
  res.render('index',{title:'Lista de reportes'});
};


/* Detalles del reporte*/

module.exports.reportsDetails = function (req,res) {
  res.render('index',{title:'Detalles del reporte'});
};