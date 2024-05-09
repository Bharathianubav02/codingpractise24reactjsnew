// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {CryptocurrencyDetails} = props
  const {currencyLogoUrl, currencyName, usdValue, euroValue} =
    CryptocurrencyDetails

  return (
    <li className="Cryptocurrency-item">
      <div className="logo-title-container">
        <img
          className="currency-logo"
          src={currencyLogoUrl}
          alt={currencyName}
        />
        <p className="currencyName">{currencyName}</p>
      </div>

      <div className="usd-and-euro-values-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
