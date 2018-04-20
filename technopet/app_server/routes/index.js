var express = require('express');
var router = express.Router();
var ctrlDashboard = require ('../controllers/dashboard');
var ctrlAdmin = require ('../controllers/admin');
var ctrlReports = require ('../controllers/reports');
var ctrlOthers = require ('../controllers/others');
/* GET home page. Obtener pAgina principal*/

router.get('/', ctrlDashboard.index);
router.get('/users', ctrlAdmin.usersList);
router.get('/users/edit', ctrlAdmin.usersEdit);
router.get('/comp', ctrlAdmin.compList);
router.get('/comp/edit', ctrlAdmin.compEdit);
router.get('/comp/Detalles', ctrlAdmin.compDetalles);
router.get('/infra', ctrlAdmin.infraList);
router.get('/infra/edit', ctrlAdmin.infraEdit);
router.get('/reports', ctrlReports.reportsList);
router.get('/reports/details', ctrlReports.reportsDetails);
router.get('/about', ctrlOthers.about);
module.exports = router;
