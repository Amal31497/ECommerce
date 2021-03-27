// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreign_key: 'id'
})
// Categories have many Products
Category.hasMany(Product, {
  foreign_key:'id',
  onDelete: 'CASCADE'
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreign_key:'id',
  //unique:false
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreign_key:'tag_id'
  //unique:false
})


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
