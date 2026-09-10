import { useMemo, useState } from 'react'
import './App.css'

const currencyOptions = [
  'USD',
  'EUR',
  'GBP',
  'INR',
  'JPY',
  'AUD',
  'CAD',
  'CHF',
  'CNY',
  'NZD',
]

const rateTable = {
  USD: { USD: 1, EUR: 0.93, GBP: 0.80, INR: 83.50, JPY: 141.2, AUD: 1.55, CAD: 1.36, CHF: 0.86, CNY: 6.80, NZD: 1.68 },
  EUR: { USD: 1.07, EUR: 1, GBP: 0.86, INR: 89.88, JPY: 151.9, AUD: 1.67, CAD: 1.47, CHF: 0.92, CNY: 7.30, NZD: 1.81 },
  GBP: { USD: 1.25, EUR: 1.16, GBP: 1, INR: 104.40, JPY: 176.3, AUD: 1.94, CAD: 1.71, CHF: 1.07, CNY: 8.50, NZD: 2.10 },
  INR: { USD: 0.012, EUR: 0.011, GBP: 0.0096, INR: 1, JPY: 1.69, AUD: 0.019, CAD: 0.016, CHF: 0.010, CNY: 0.081, NZD: 0.020 },
  JPY: { USD: 0.0071, EUR: 0.0066, GBP: 0.0057, INR: 0.59, JPY: 1, AUD: 0.011, CAD: 0.0097, CHF: 0.0061, CNY: 0.048, NZD: 0.012 },
  AUD: { USD: 0.65, EUR: 0.60, GBP: 0.52, INR: 53.80, JPY: 91.20, AUD: 1, CAD: 0.88, CHF: 0.55, CNY: 4.37, NZD: 1.08 },
  CAD: { USD: 0.74, EUR: 0.68, GBP: 0.59, INR: 61.10, JPY: 103.8, AUD: 1.14, CAD: 1, CHF: 0.62, CNY: 4.96, NZD: 1.22 },
  CHF: { USD: 1.16, EUR: 1.09, GBP: 0.93, INR: 98.30, JPY: 167.2, AUD: 1.82, CAD: 1.61, CHF: 1, CNY: 8.03, NZD: 1.97 },
  CNY: { USD: 0.15, EUR: 0.14, GBP: 0.12, INR: 12.25, JPY: 20.80, AUD: 0.23, CAD: 0.20, CHF: 0.12, CNY: 1, NZD: 0.25 },
  NZD: { USD: 0.60, EUR: 0.55, GBP: 0.48, INR: 49.30, JPY: 76.40, AUD: 0.93, CAD: 0.82, CHF: 0.51, CNY: 4.02, NZD: 1 },
}

function App() {
  const [amount, setAmount] = useState('')
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('EUR')

  const convertedValue = useMemo(() => {
    const parsed = parseFloat(amount)
    if (!parsed || parsed <= 0) {
      return null
    }
    const rate = rateTable[fromCurrency]?.[toCurrency] ?? 1
    return parsed * rate
  }, [amount, fromCurrency, toCurrency])

  return (
    <div className="app-shell">
      <div className="converter-card">
        <div className="converter-header">
          <h1>Currency Converter</h1>
        </div>

        <div className="converter-body">
          <label className="field">
            <span>Amount</span>
            <input
              type="number"
              min="0"
              step="0.01"
              value={amount}
              placeholder=""
              onChange={(event) => setAmount(event.target.value)}
            />
          </label>

          <label className="field">
            <span>From</span>
            <select
              value={fromCurrency}
              onChange={(event) => setFromCurrency(event.target.value)}
            >
              {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>To</span>
            <select
              value={toCurrency}
              onChange={(event) => setToCurrency(event.target.value)}
            >
              {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="converter-result">
          {convertedValue !== null ? (
            <p>
              {amount.toLocaleString(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
              })}{' '}
              {fromCurrency} ={' '}
              <strong>
                {convertedValue.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 4,
                })}{' '}
                {toCurrency}
              </strong>
            </p>
          ) : (
            <p className="status">Enter an amount to convert.</p>
          )}
        </div>

        <div className="converter-footnote">
        </div>
      </div>
    </div>
  )
}

export default App
