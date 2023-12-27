import './searchItem.css';

const SearchItem = () => {
  return (
<div className="searchItem">
    <img src="https://images.pexels.com/photos/18971223/pexels-photo-18971223/free-photo-of-hotel-with-a-swimming-pool-with-the-view-of-a-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    alt="" 
    className="siImg"
     />
    <div className="siDesc">
        <h1 className="siTitle">IBIS Bangalore</h1>
        <span className="siDistance">4km from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Studio</span>
        <span className="siFeatures">Entire apartment • 1 bedroom • 1 bathroom • 1 kitchen • 29m²</span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
    </div>
    <div className="siDetails">
        <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">₹ 3,324</span>
            <span className="siTaxOp">includes taxes and fees</span>
            <button className='siCheckButton'>See availability</button>
        </div>
    </div>
    
    
</div>

    )
}

export default SearchItem