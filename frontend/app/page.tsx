'use client'

import { useState } from 'react'
import SymptomSelector from './components/SymptomSelector'
import ResultsDisplay from './components/ResultsDisplay'
import axios from 'axios'

// Use local API routes (no external backend needed)
const API_URL = ''

export default function Home() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const [results, setResults] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSymptomToggle = (symptom: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptom)
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    )
    setResults(null)
    setError(null)
  }

  const handleCheckSymptoms = async () => {
    if (selectedSymptoms.length === 0) {
      setError('Please select at least one symptom')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await axios.post('/api/predict', {
        symptoms: selectedSymptoms,
      })
      setResults(response.data)
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Failed to get prediction. Please try again.')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setSelectedSymptoms([])
    setResults(null)
    setError(null)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-4 md:py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            AI Symptoms Checker
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Select your symptoms and get AI-powered health insights
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-6">
          <SymptomSelector
            selectedSymptoms={selectedSymptoms}
            onSymptomToggle={handleSymptomToggle}
          />
        </div>

        {selectedSymptoms.length > 0 && (
          <div className="mb-6">
            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-gray-700 mb-2">Selected Symptoms:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedSymptoms.map(symptom => (
                  <span
                    key={symptom}
                    className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {symptom}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleCheckSymptoms}
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              >
                {loading ? 'Analyzing...' : 'Check Symptoms'}
              </button>
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
              >
                Reset
              </button>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {results && <ResultsDisplay results={results} />}
      </div>
    </main>
  )
}

