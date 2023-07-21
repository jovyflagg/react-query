import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () => {
    return axios.get(`http://localhost:4000/superheroes`)
}
const fetchFriends = () => {
    return axios.get(`http://localhost:4000/friends`)
}

const ParallelQueriesPage = () => {
const { data: superHeroes } = useQuery('super-hores', fetchSuperHeroes)
const { data: friends } = useQuery('friends', fetchFriends)


  return (
    <div>Parallel Queries Page</div>
  )
}

export default ParallelQueriesPage