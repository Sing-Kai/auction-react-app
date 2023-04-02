import React from "react"
import AuctionCard from './AuctionCard'
import banana from '../images/banana.jpg'
import AuctionUrl from '../urls/urls'
import useFetch from '../hooks/useFetch'

const url = new AuctionUrl()

const Auctions = () => {
  
  const {loading, error, data} = useFetch( url.getAuctions('OPEN'))

  if(error){
    return (
      <div>
        {'Ooops something went wrong'}
      </div>
    )
  }

  if(loading){
    return (
      <div>loading banans</div>
    )
  }

  const cards = data.map(({id, seller, title}) =>{
    return(
      <AuctionCard
        key={id}
        imageUrl ={banana}
        title= {title}
        bid={0}
        description={'Banana'}
        seller={seller}
      />
    )
  })

  return(
    <div className ="flex gap-2 flex-col">
      {cards}
    </div>
  )
}

export default Auctions

