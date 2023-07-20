import React, { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}
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


    // const { isLoading, data, isError, error, isFetching } = useQuery(
    const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
        'super-heroes',
        fetchSuperHeroes,

        //FETCHING Configs
        //{
        // //configurations for side effects/callbacks
        // onSuccess,
        // onError,

        //},
        //{
        // //configurations for fetching - onMount, onWindowFocus, polling, onClick
        // refetchOnMount: true,
        // refetchOnWindowFocus: true // dependent on user interaction, fetching happens when tab is highlighted

        // refetchInterval: 2000, //every 2 secs Polling (use 'null' as value if you want tp stop polling)
        // refetchIntervalInBackground: true, // Polling, frequent fetch, think stocks

        // enabled: false, //onClick, useQuery use function called refetch destructured and assigned to a button onClick, false value is default

        //},
        {
            //Homework:
            // Combine polling and callback side effect config
            // Hints:
            // 1. Set a state variable for time refetch every 3 secs and assign it to 'refetchInterval' config
            // 2. On db.json, add a new superhero
            // 3. 'onSuccess' callback/function, check if the number of heroes is 4, if it is the case, stop polling (aka refetchIntervalBackground)
            refetchInterval: intervalTime !==false ? intervalTime : null,
            onSuccess,
            onError,
        }
    )

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
                const { name } = hero;
                return (
                    <div key={name}
                    >
                        {name}
                    </div>
                )
            })}
        </>
    )
}

export default RQSuperHeroesPage