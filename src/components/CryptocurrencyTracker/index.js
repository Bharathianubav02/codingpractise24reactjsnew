// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner' 

import CryptocurreinciesList from '../CryptocurrienciesList'
import './index.css'

const apiUrl = 'https://apic.ccbp.in/crypto-currency-converter'

class CryptocurrencyTrackter extends Component {
    state = {
        CryptocurreinciesData: [],
        isLoading: true,
    }

componentDidMount() {
    this.getCryptocurrencies()
}

getCryptocurrencies = async () => {
    const response = await fetch(apiUrl)
    const fetchedData = await response.json()

    this.setState({
        cryptocurrienciesData: fetchedData.map(eachCryptocurrency => ({
            id: eachCryptocurrency.id,
            currencyLogoUrl: eachCryptocurrency.currency_logo,
            currencyName: eachCryptocurrency.currency_name,
            usdValue: eachCryptocurrency.usd_value,
            euroValue: eachCryptocurrency.euro_Value,
        })),
        isLoading: false,
    })
}


renderCryptocurrenciesList = () => {
    const {CryptocurreinciesData} = this.state 
    return <CryptocurreinciesList cryptocurrienciesData={cryptocurrienciesData}
}

renderLoader = () => (
  <div testid="loader">
  <Loader type="Rings" color="#ffffff" height={80} width={80}/>
  
  
  </div>



)


render(){
    const {isLoading} = this.state 
    return (

     <div className="app-container">
     {isLoading ? this.renderLoader(): this.renderCryptocurrenciesList()}
     
     
     
     </div>


    )
}
}
export default CryptocurrencyTracker