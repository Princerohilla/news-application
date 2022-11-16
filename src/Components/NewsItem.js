import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
    let {title ,description ,imageUrl , newsUrl, author, date, source}  = this.props;
    return (
      <div className='my-5'>
        <div className="card">
        <span className='position-absolute top-0  translate-middle badge rounded-pill bg-danger' style={{left:'85%', zIndex:'1'}}> {source}</span>
            <img src={!imageUrl?"https://cdn-europe1.lanmedia.fr/var/europe1/storage/images/europe1/sciences/des-astronomes-revelent-la-premiere-image-dun-trou-noir-3889442/52841894-1-fre-FR/Des-astronomes-revelent-la-premiere-image-d-un-trou-noir.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title} </h5>
                <p className="card-text">{description}</p>
                <p className='card-text'><small className='text-muted'>By {!author?"unknown":author} on {date}</small></p>
                <a href={newsUrl} target = "_blank"  rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
           </div>
         </div>
       </div>
    )
  }
}

export default NewsItem