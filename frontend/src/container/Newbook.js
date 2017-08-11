/**
 * Created by finch on 2017/8/11.
 */
import React, {Component} from 'react';
import bookImg from '../assert/img/book.jpg';

import BookItem from '../component/book/book_item';


class NewBook extends Component {
  BookList = [
	{
	  title: '我爱读书',
	  author: 'finch',
	  img: bookImg
	},
	{
	  title: '我爱读书',
	  author: 'finch',
	  img: bookImg
	},
	{
	  title: '我爱读书',
	  author: 'finch',
	  img: bookImg
	},
	{
	  title: '我爱读书',
	  author: 'finch',
	  img: bookImg
	},
	{
	  title: '我爱读书',
	  author: 'finch',
	  img: bookImg
	},
	{
	  title: '我爱读书',
	  author: 'finch',
	  img: bookImg
	},
	{
	  title: '我爱读书',
	  author: 'finch',
	  img: bookImg
	},
	{
	  title: '我爱读书',
	  author: 'finch',
	  img: bookImg
	},
  ];

  render() {
	return (
		<div className="container-fluid">
		  <div className="row">
			{this.BookList.map((item, key) => {
			  console.log(key);
			  return <BookItem key={key} title={item.title} author={item.author} img={item.img}/>
			})}
		  </div>
		</div>
	);
  }
}

export default NewBook;
