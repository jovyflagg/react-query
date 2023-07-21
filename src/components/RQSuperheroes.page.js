import React, { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useSearchParams, Link } from 'react-router-dom'
import { useSuperHeroesData } from '../hooks/useSuperHeroesData'


const RQSuperHeroesPage = () => {

    //the state variable below is assigned to 'refetchInterval' configuration, this state combines handling side effect and polling
    const initialState = 3000;
    const [intervalTime, setIntervalTime] = useState(initialState);


    //Side effects
    const onSuccess = (data) => {
        const numOfSuperheroes = data?.data.length;
        console.log('Perform side effect after data fetching', data);

        if (numOfSuperheroes === 4) {
            setIntervalTime(false);
        }
        // console.log('LENGTH: ', '12345')
        //console.log('LENGTH: ', numOfSuperheroes)
    }
    const onError = (error) => {
        console.log('Perform side effect after encountering error', error);
        //Inspect element => Console, under config => url. Check for url
    }

    const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError)

    if (isLoading || isFetching) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }
    return (
        <>
            <h2>RQ SuperHeroes Page</h2>
            <button onClick={refetch}>fetch heroes</button>
            {data?.data.map((hero) => {
                const { name, id } = hero;
                return (
                    <div key={id}
                    >
                        <Link to={`/rq-super-heroes/${id}`}>
                            {name}
                        </Link>
                    </div>
                )
            })}
        </>
    )
}

export default RQSuperHeroesPage