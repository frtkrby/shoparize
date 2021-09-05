module.exports = (sequelize, Sequelize) => {
	const Products = sequelize.define('products', {
	  id: {
		  type: Sequelize.STRING,
		  primaryKey: true
	  },
	  title: {
		  type: Sequelize.STRING
	  },
	  description: {
		  type: Sequelize.STRING
	  },
	  link: {
		  type: Sequelize.STRING
	  },
	  image_link: {
		  type: Sequelize.STRING
	  },
	  availability: {
		  type: Sequelize.STRING
	  },
	  price: {
		type: Sequelize.STRING
	  },
	  brand: {
		  type: Sequelize.STRING
	  },
	  gtin: {
		  type: Sequelize.STRING
	  },
	  mpn: {
		  type: Sequelize.STRING
	  },
	  condition: {
		  type: Sequelize.STRING
	  },
	  shipping: {
		  type: Sequelize.STRING
	  },
	  identifier_exists: {
		  type: Sequelize.STRING
	  },
	  google_product_category: {
		  type: Sequelize.STRING
	  },
	  adult: {
		  type: Sequelize.STRING
	  },
	  gender: {
		  type: Sequelize.STRING
	  },
	  color: {
		  type: Sequelize.STRING
	  }
	}, {
	    timestamps: false,
	    freezeTableName: true
	});
	
	return Products;
}