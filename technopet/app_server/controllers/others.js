/* Esta pAgina proporciona informaciOn acerca del proyecto */

module.exports.about = function (req,res) {
  res.render('generic-text',{title:'Acerca de'});
};