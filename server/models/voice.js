import Sequelize from 'sequelize'
import config from '../config'

const db = new Sequelize(config.dbname, config.dbuser, config.dbpwd, {
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
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
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
  },
  create_at: {
    type: Sequelize.DATE(),
    defaultValue: Date.now
  },
  update_at: {
    type: Sequelize.DATE(),
    defaultValue: Date.now
  }
}, {
    timestamps: false
  })

Voice.sync()

export default Voice 