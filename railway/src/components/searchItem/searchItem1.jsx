import './searchItem.css';

const SearchItem = () => {
  return (
<div className="searchItem">
    <img src="https://images.pexels.com/photos/18990341/pexels-photo-18990341/free-photo-of-hotel-moszna-castle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    alt="" 
    className="siImg"
     />
    <div className="siDesc">
        <h1 className="siTitle">The Park Bangalore </h1>
        <span className="siDistance">This boutique hotel offers a 24-hour restaurant, a spa, and a pool.</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Studio</span>
        <span className="siFeatures">Entire apartment • 1 bedroom • 1 bathroom • 1 kitchen • 29m²</span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
    </div>
    <div className="siDetails">
        <div className="siRating">
            <span>Excellent</span>
            <button>7.8</button>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">₹ 5,324</span>
            <span className="siTaxOp">includes taxes and fees</span>
            <button className='siCheckButton'>See availability</button>
        </div>
    </div>
    
    
</div>

    )
}

export default SearchItem