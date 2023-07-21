import { useInfiniteQuery } from 'react-query'
import axios from 'axios'
import { Fragment } from 'react';

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);
}


const InfiniteQueriesPage = () => {

  const {
    isLoading,
    isError,
    error,
    data,
    hasNextPage, //
    fetchNextPage, //
    isFetching, //
    isFetchingNextPage//
  } = useInfiniteQuery(['colors'], fetchColors, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1
      } else {
        return undefined
      }
    },
  }
  )

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }
  return (
    <>
      <div>
        {
          data?.pages.map((group, index) => {
            return (
              <Fragment key={index}>
                {
                  group.data.map((color) => {
                    const { id, label } = color;
                    return (
                      <div key={id}>
                        {id}. {label}
                      </div>
                    )
                  })
                }
              </Fragment>
            )
          })
        }
      </div>
      <div>
        <button
          onClick={fetchNextPage}
          disabled={!hasNextPage}>Load more</button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching data...' : null}</div>
    </>
  )
}

export default InfiniteQueriesPage