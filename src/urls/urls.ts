const baseUrl = process.env.REACT_APP_AUCTIONS_ENDPOINT

class AuctionUrl{

  private baseUrl;

  constructor(){
    this.baseUrl = process.env.REACT_APP_AUCTIONS_ENDPOINT
  }

  public getAuctions(status:string): string{
    if(status !=='OPEN' && status !=='CLOSED'){
      status = 'OPEN'
    } 
    return `${this.baseUrl}/auctions?status=${status}`
  }

  public getCreateAuctionUrl(): string {
    return `${this.baseUrl}/auction`
  }

  public getAuctionByIdUrl(id: string): string{
    return `${this.baseUrl}/auction/${id}`
  }

  public getBidAuctionUrl(id: string): string {
    return `${this.baseUrl}/auction/${id}/bid`
  }

}

export default AuctionUrl;
