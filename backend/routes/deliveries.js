const router = require('express').Router();
let Delivery = require('../models/delivery.model');

router.route('/').get((req, res) => {
  Delivery.find()
    .then(deliveries => res.json(deliveries))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const phoneNumber = Number(req.body.phoneNumber);
  const province = req.body.province;
  const district = req.body.district;
  const city = req.body.city;
  const address = req.body.address;
  const postalCode = Number(req.body.postalCode);

  const newDelivery = new Delivery({
    name,
    phoneNumber,
    province,
    district,
    city,
    address,
    postalCode,
  });

  newDelivery.save()
  .then(() => res.json('Delivery added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Delivery.findById(req.params.id)
    .then(delivery => res.json(delivery))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Delivery.findByIdAndDelete(req.params.id)
    .then(() => res.json('Delivery deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Delivery.findById(req.params.id)
    .then(delivery => {
        delivery.name = req.body.name;
        delivery.phoneNumber = Number(req.body.phoneNumber);
        delivery.province = req.body.province;
        delivery.district = req.body.district;
        delivery.city = req.body.city;
        delivery.address = req.body.address;
        delivery.postalCode = Number(req.body.postalCode);


      delivery.save()
        .then(() => res.json('Delivery updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;


