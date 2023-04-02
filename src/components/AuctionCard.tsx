import React from "react"

const AuctionCard = ({ imageUrl, title, bid, description, seller }) => {
  return(
    <div className="bg-white rounded-xl shadow-md overflow-hidden m-4 p-4 min-w-96 md:mx-auto">
      <div className="md:flex">
        <div>
          <img className="h-48 w-full object-cover md:w-48" src={imageUrl} alt={title} />
        </div>
        <div className="px-4">
          <div className="uppercase tracking-wide text-base text-gray-500 font-semibold ">{title}</div>
          <div className="">
            <p className="mt-2 text-gray-500">{'Seller: ' + seller}</p>
            <p className="mt-2 text-gray-500">{'Highest Bid: $' + bid}</p>
            <p className="mt-2 text-gray-500">{'Description: ' + description}</p>
          </div>
          <div className="mt-4">
            <button 
              className = "py-1 w-full px-4 h-10 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded text-center"
            >
              {'Bid'}
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AuctionCard

