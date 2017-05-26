import Sequelize from 'sequelize'
import { dbname, dbuser, dbpwd } from '../config'

const db = new Sequelize(dbname, dbuser, dbpwd, {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

const Voice = db.define('voice', {
  content: {
    type: Sequelize.STRING,
    allowNull: false
  },
  author: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  likes: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  tags: {
    type: Sequelize.STRING,
    defaultValue: ''
  }
}, {
    timestamps: true
})


export default Voice 