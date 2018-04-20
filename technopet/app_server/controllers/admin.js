/* lista de usuarios*/

module.exports.usersList = function (req,res) {
  res.render('index',{title:'Lista de usuarios'});
};

/*Editar usuario seleccionado*/

module.exports.usersEdit = function (req,res) {
  res.render('index',{title:'Editar usuario'});
};


/*Muesta lista de componentes*/

module.exports.compList = function (req,res) {
  res.render('compList',{
    title: 'Lista de componentes',
    pageHeader: {
      title: 'Lista de componentes',
      strapline: 'Ecuentra sensores y actudores en el edificio'
    },
    componentes:[{
      nombre:'Sensor 23',
      ubicacion:'Aula 1',
      tipo:'Luz',
      ubiMap:'23,54',
      protocolo:'Ethernet',
      direccion:'192.168.0.25',
      activar:'Si',
      observaciones: '--'
    },{
      nombre:'Sensor 22',
      ubicacion:'Aula 4',
      tipo:'Temperatura',
      ubiMap:'80,32',
      protocolo:'Ethernet',
      direccion:'192.168.0.52',
      activar:'Si',
      observaciones: '--'
    },{nombre:'Sensor 57',
      ubicacion:'Aula 1',
      tipo:'Luz',
      ubiMap:'23,54',
      protocolo:'Ethernet',
      direccion:'192.168.0.8',
      activar:'Si',
      observaciones: '--'
    }]
  });
};

/*Editar componente*/

module.exports.compEdit = function (req,res) {
  res.render('compEdit',{title:'Editar componente'});
};

/*Detalles del componente*/

module.exports.compDetalles = function (req,res) {
  res.render('compDetalles',{title:'Detalles de componente'});
};


/*Muesta lista de planos del edificio*/

module.exports.infraList = function (req,res) {
  res.render('index',{title:'Infraestructura'});
};


/*cambiar plano*/

module.exports.infraEdit = function (req,res) {
  res.render('index',{title:'Cambiar plano'});
};








