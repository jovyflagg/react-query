import React from 'react'
import { useQueries } from 'react-query'
import axios from 'axios'

const fetchSuperHero = (id) => {
  return axios.get(`http://localhost:4000/superheroes/${id}`)
}
const DynamicParallelPage = ({ ids }) => {
  const queryResults = useQueries(
    ids.map((id) => {
      return {
        queryKey: ['super-hero', id],
        queryFn: () => fetchSuperHero(id),
      }
    })
  )
  return (
    <div>DynamicParallelPage</div>
  )
}

export default DynamicParallelPage
