/**
 * Created by finch on 2017/8/11.
 */
import React from 'react';
const book_item = ({title, author, img}) => {
  return (
	  <div className="col-xs-6 col-md-4">
		<div className="cover">
		  <a href="#">
			<img src={img} alt="" style={{width: '106px', height: '158px'}}/>
		  </a>
		</div>

		<div className="book_info">
		  <a href="#">
			<span>{title}</span>
		  </a>
		  <div>
			<span>{author}</span>
		  </div>
		</div>
	  </div>
  )
};

export default book_item;