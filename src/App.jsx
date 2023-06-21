import { useState } from 'react';

function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [convertedAmount, setConvertedAmount] = useState('');

  const convertCurrency = () => {
    const conversionRates = {
      USD: 0.0035, // 1 USD to USD (1:1)
      GBP: 0.0027, // Example rate for GBP conversion
      CNY: 0.025, // Example rate for CNY conversion
    };

    const convertedAmount = amount * conversionRates[selectedCurrency];
    setConvertedAmount(convertedAmount.toFixed(2));
  };

  function handleSetAmount(e){
    setAmount(e.target.value)
    setConvertedAmount('')
  }

  function handleSetSelectedCurrency(e){
    setSelectedCurrency(e.target.value)
    setConvertedAmount('')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md">
        <h1 className="text-3xl font-semibold mb-6 text-white">Currency Converter</h1>
        <div className="flex flex-col gap-4">
          <div className="relative">
            <label htmlFor="amount" className="text-white">Amount</label>
            <input
              id="amount"
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => handleSetAmount(e)}
            />
          </div>
          <div className="relative">
            <label htmlFor="currency" className="text-white">Currency</label>
            <select
              id="currency"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
              value={selectedCurrency}
              onChange={(e) => handleSetSelectedCurrency(e)}
            >
              <option value="USD">US Dollar</option>
              <option value="GBP">British Pound</option>
              <option value="CNY">Chinese Yen</option>
            </select>
          </div>
        </div>
        <div className="mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
            onClick={convertCurrency}
          >
            Convert
          </button>
        </div>
        {convertedAmount && (
          <div className="mt-6">
            <label htmlFor="result" className="text-white">Result</label>
            <p id="result" className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white">{convertedAmount + " " + selectedCurrency}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CurrencyConverter;
