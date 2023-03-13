
import Carousel from 'react-elastic-carousel'
import { Base_URL } from '../credConfig';
import {genreData} from '../lib/helper';

export default function HeroSection({trendMovie, genres}) {
  console.log(genres)
  return (
    <div className='hero-wrapper'>
      <div className='top-hero-wrapper'>
        <Carousel verticalMode itemsToShow={1}
          enableAutoPlay autoPlaySpeed={20500}
        renderPagination={({ pages, onClick }) => {
          return (
            <div className='pagination-wrapper'>
              {pages.map(page => {
                // const isActivePage = activePage === page
                return (
                  <div key={page}
                  onClick={() => onClick(page)}
                  className="pagination-p"
                  >
                  </div>
                )
              })}
            </div>
          )
        }}
        >
        {
          trendMovie.results.slice(10,15).map((item)=>(
            <div key={item.id} className='top-hero' style={{backgroundImage:`url(${Base_URL}/w1280/${item.backdrop_path})`}}>
              <div className='hero-content-wrapper'>
                <div className='upper-flex'>
                  <div>
                    <p className='hero-badge'>Recommended for you &#10024;</p>
                    <div className='hero-genre'>
                        {
                          genreData(genres,item.genre_ids)
                        }
                      </div>
                  </div>
                  <div className='get-dtl-btn'>
                    Get Details
                  </div>
                </div>  
                <div>
                <p className='hero-title'>{item.title}</p>
                <div className='hero-detail'>{item.overview}</div>
                </div>
              </div>
            </div>
          ))
        }
        </Carousel>
      </div>
      <div className='popular-wrapper'></div>
    </div>
  )

} 
