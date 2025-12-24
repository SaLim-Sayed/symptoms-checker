'use client'

interface ResultsDisplayProps {
  results: {
    possible_conditions: Array<{
      condition: string
      probability: number
      description: string
      recommendations: string[]
    }>
    severity: string
    advice: string
  }
}

export default function ResultsDisplay({ results }: ResultsDisplayProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Analysis Results</h2>

      <div className="mb-6">
        <div className={`inline-block px-4 py-2 rounded-full font-semibold ${
          results.severity === 'High' 
            ? 'bg-red-100 text-red-800'
            : results.severity === 'Medium'
            ? 'bg-yellow-100 text-yellow-800'
            : 'bg-green-100 text-green-800'
        }`}>
          Severity: {results.severity}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Possible Conditions:</h3>
        <div className="space-y-4">
          {results.possible_conditions.map((condition, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-gray-800">{condition.condition}</h4>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {(condition.probability * 100).toFixed(1)}%
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-3">{condition.description}</p>
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">Recommendations:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  {condition.recommendations.map((rec, idx) => (
                    <li key={idx}>{rec}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <h3 className="font-semibold text-gray-800 mb-2">General Advice:</h3>
        <p className="text-gray-700">{results.advice}</p>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Disclaimer:</strong> This is an AI-powered tool for informational purposes only. 
          It is not a substitute for professional medical advice, diagnosis, or treatment. 
          Always seek the advice of your physician or other qualified health provider with any 
          questions you may have regarding a medical condition.
        </p>
      </div>
    </div>
  )
}

