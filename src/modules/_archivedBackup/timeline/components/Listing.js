import React from 'react';

const Listing = (props) => {
  return (
    <ul className={props.search_on ? 'active' : ''}>
      {props.listData.length > 0 ?
        props.listData.map((data, d) => {
          return (
            <li key={data.datetime}>
              <span className="time">{data.datetime}</span>
              <p className="description">{data.description}</p>
            </li>
          )
        }) : <li>no record found!</li>
      }
    </ul>
  )
}

export default Listing;