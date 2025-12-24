# Symptoms Checker - AI Health Assistant

A modern web application that uses AI to predict possible health conditions based on user-selected symptoms. Built with Next.js (React) frontend and Python FastAPI backend.

## Features

- 🎯 **Interactive Symptom Selection**: Choose from a comprehensive list of symptoms
- 🤖 **AI-Powered Predictions**: Get intelligent condition predictions with probability scores
- 📊 **Detailed Results**: View possible conditions, descriptions, and recommendations
- 🎨 **Modern UI**: Beautiful, responsive design with Tailwind CSS
- ⚡ **Fast Performance**: Built with Next.js for optimal performance

## Tech Stack

### Frontend
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Axios** - HTTP client

### Backend
- **FastAPI** - Modern Python web framework
- **Pydantic** - Data validation
- **Uvicorn** - ASGI server

## Project Structure

```
symtoms-checker/
├── frontend/          # Next.js application
│   ├── app/
│   │   ├── components/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   └── package.json
├── backend/           # FastAPI application
│   ├── main.py
│   ├── symptom_predictor.py
│   └── requirements.txt
└── README.md
```

## Quick Start

For macOS/Linux, you can use the provided startup script:

```bash
./start.sh
```

This will automatically:
- Set up Python virtual environment
- Install all dependencies
- Start both backend and frontend servers

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm/yarn
- Python 3.8+
- pip (Python package manager)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment (recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the backend server:
```bash
python main.py
```

The API will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file (optional, defaults to localhost:8000):
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

4. Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Usage

1. Start both the backend and frontend servers
2. Open your browser and navigate to `http://localhost:3000`
3. Select symptoms from the list
4. Click "Check Symptoms" to get AI-powered predictions
5. Review the results, including:
   - Possible conditions with probability scores
   - Condition descriptions
   - Personalized recommendations
   - Severity assessment
   - General advice

## API Endpoints

### `GET /`
Health check endpoint

### `GET /api/symptoms`
Get list of all available symptoms

### `POST /api/predict`
Predict conditions based on symptoms

**Request Body:**
```json
{
  "symptoms": ["Fever", "Cough", "Headache"]
}
```

**Response:**
```json
{
  "possible_conditions": [
    {
      "condition": "Influenza (Flu)",
      "probability": 0.75,
      "description": "A contagious respiratory illness...",
      "recommendations": ["Rest and stay home", "..."]
    }
  ],
  "severity": "Medium",
  "advice": "Your symptoms may indicate..."
}
```

## How It Works

The symptom predictor uses a rule-based AI system that:

1. **Matches Symptoms**: Compares user-selected symptoms with known condition symptom patterns
2. **Calculates Scores**: Determines how well symptoms match each condition
3. **Ranks Conditions**: Orders possible conditions by probability
4. **Assesses Severity**: Evaluates symptom severity based on critical indicators
5. **Provides Recommendations**: Offers personalized advice and next steps

**Note**: This is a simplified implementation for demonstration. In production, you would replace this with a trained machine learning model using real medical data.

## Customization

### Adding More Symptoms

Edit `frontend/app/components/SymptomSelector.tsx` to add more symptoms to the list.

### Adding More Conditions

Edit `backend/symptom_predictor.py` and add new entries to the `condition_symptoms` dictionary.

### Replacing with ML Model

Replace the `SymptomPredictor` class logic in `symptom_predictor.py` with your trained model's prediction logic.

## Important Disclaimer

⚠️ **This application is for educational and informational purposes only. It is NOT a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.**

## License

This project is open source and available for educational purposes.

## Contributing

Feel free to submit issues, fork the repository, and create pull requests for any improvements.

