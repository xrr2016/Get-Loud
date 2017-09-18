import React from 'react'
import { Link } from 'react-router-dom'

const Filter = () => (
  <p className="filters">
    <Link filter={FilterTypes.All}>{FilterTypes.All}</Link>
    <Link filter={FilterTypes.COMPLETED}>{FilterTypes.COMPLETED}</Link>
    <Link filter={FilterTypes.UNCOMPLETED}>{FilterTypes.UNCOMPLETED}</Link>
  </p>
)