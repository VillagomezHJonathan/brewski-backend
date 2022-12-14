'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Brewery extends Model {
    static associate(models) {
      Brewery.belongsToMany(models.User, {
        as: 'liked_brewery',
        through: models.User_Brewery,
        foreignKey: 'breweryId'
      })
      Brewery.belongsToMany(models.User, {
        as: 'reviewed_brewery',
        through: models.Review,
        foreignKey: 'breweryId'
      })
    }
  }
  Brewery.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      beers: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date()
      }
    },
    {
      sequelize,
      modelName: 'Brewery',
      tableName: 'breweries'
    }
  )
  return Brewery
}
