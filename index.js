const fs = require('fs')
const path = require('path')

const q_path = path.resolve(__dirname, './SU_DUKU_QU.txt')
const a_path = path.resolve(__dirname, './SU_DUKU_AN.txt')

// 生成一行数据
const generateRow = function () {
  let row = []
  for (let i = 0; i < 9; i++) {
    const number = Math.round(Math.random() * 9)
    Math.random() > 0.6 ? row.push(number) : row.push(0)
  }
  return row
}

// 生成一个数独表
const generateTable = async function() {
  let table = ''
  for (let i = 0; i < 9; i++) {
    let row = await generateRow()
    table += `${row}\n`
  }
  return table
}

// 生成数据问题文件
const generateQuestions = async function (case_num) {
  for (let i = 0; i < case_num; i++) {
    let table = await generateTable()
    fs.appendFileSync(q_path, `[${i}]\n`)
    await fs.appendFileSync(q_path, table)
    console.log(`数独表${i}生成成功.`)
  }
}

generateQuestions(3)

const getQuestions = function (err, data) {
  if (err) throw err
  console.log(data)
}

fs.readFile(q_path, 'utf8', getQuestions)
