import { useSelector } from 'react-redux'
import InfiniteMovieList from '../components/InfiniteMovieList'

export default function InfiniteMovie() {

    const ppMovies = useSelector((state)=>state.popular);
    // console.log(ppMovies)

  return (
    <div>
        <InfiniteMovieList/>
    </div>
  )
}
