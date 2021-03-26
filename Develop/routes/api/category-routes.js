const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include:[
      {
        model:Product,
        attributes: ['product_id', 'product_name','price','stock','category_id']
      }
    ]
  })
  .then(categoryData => {
    res.status(200).json(categoryData)
  })
  .catch(err => {
    res.status(500).json(err)
  }) 
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findByPk({
    where:{
      category_id:req.params.id
    },
    include:[
      {
        model:Product,
        attributes: ['product_id', 'product_name','price','stock','category_id']
      }
    ]
  })
  .then(categoryData => {
    res.status(200).json(categoryData)
  })
  .catch(err => {
    res.status(500).json(err)
  })
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name:req.body.category_name
  })
  .then((newCategory) => {
    res.json(newCategory)
  })
  .catch((err) => {
    res.json(err);
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    category_name:req.body.category_name
  },
  {
    where:{
      category_id:req.params.id
    }
  })
  .then((updatedCategory) => {
    res.json(updatedCategory)
  })
  .catch((err) => {
    res.json(err)
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where:{
      category_id:req.params.id
    }
  })
  .then((deletedCategory) => {
    res.json(deletedCategory)
  })
  .catch((err) => {
    res.json(err)
  })
});

module.exports = router;
