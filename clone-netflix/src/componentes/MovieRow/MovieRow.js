import React from 'react'

import './MovieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const MovieRow = ({title, items}) => {
  const [scrollX, setScrollX] = React.useState(0)

  function handleLeftArrow() {
    let scrollLeft = scrollX + Math.round(window.innerWidth / 2);
    if(scrollLeft >= 0) {
      scrollLeft = 0;
    }
    setScrollX(scrollLeft);
  }

  function handleRightArrow() {
    let scrollRight = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = items.results.length * 150;
    if((window.innerWidth - listWidth) > scrollRight) {
      scrollRight = (window.innerWidth - listWidth) - 60;
    }
    setScrollX(scrollRight);
  }

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{fontSize: 50}}/>
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{fontSize: 50}}/>
      </div>
      <div className="movieRow--listarea">
        <div className="movieRow--list" style= {{
          marginLeft: scrollX,
          width: items.results.length * 150
        }}>
          {items.results.length > 0 && items.results.map((item, key) =>(
            <div key={key} className="movieRow--item">
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.orginal_title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieRow
