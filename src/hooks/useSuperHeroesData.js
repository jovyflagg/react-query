import { useQuery } from "react-query"
import axios from "axios"

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}

export const useSuperHeroesData = (onSuccess, onError) => {
   return useQuery(
        'super-heroes',
        fetchSuperHeroes,
        {
            onSuccess,
            onError

            // Homework:
            // Combine polling and callback side effect config
            // Hints:
            // 1. Set a state variable for time refetch every 3 secs and assign it to 'refetchInterval' config
            // 2. On db.json, add a new superhero
            // 3. 'onSuccess' callback/function, check if the number of heroes is 4, if it is the case, stop polling (aka refetchIntervalBackground)
            // refetchInterval: intervalTime !==false ? intervalTime : null,
        }

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
    )
}