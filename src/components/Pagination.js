import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  const [index, setIndex] = useState(0)

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginatePage=(number, idx)=>{
    console.log({number})
    console.log({index})
    console.log({idx})

    paginate(number)
    setIndex(idx)
  }
  return (
    <div className="ui center aligned grid">
          <div className='ui pagination menu center aligned'>
        {index-1>= 0? <Link onClick={() => paginatePage(pageNumbers[index-1],index-1)} to={`/${index}`} className='item' >
        &#60;
            </Link>: ''}
        
        {pageNumbers.map((number,idx) => (
            <Link onClick={() => paginatePage(number,idx)} to={`/${number}`} className='item' key={number} >
              {number}
            </Link>
        ))}
        {index+1<pageNumbers.length? <Link onClick={() => paginatePage(pageNumbers[index+1],index+1)} to={`/${index}`} className='item' >
        &#62;
            </Link>: ''}
        
      </div>
      </div>
  );
};

export default Pagination;