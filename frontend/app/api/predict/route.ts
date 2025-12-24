import { NextResponse } from 'next/server'
import { symptomPredictor } from '../../../lib/symptomPredictor'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { symptoms } = body

    if (!symptoms || !Array.isArray(symptoms) || symptoms.length === 0) {
      return NextResponse.json(
        { error: 'No symptoms provided' },
        { status: 400 }
      )
    }

    const result = symptomPredictor.predict(symptoms)
    return NextResponse.json(result)
  } catch (error) {
    console.error('Error predicting condition:', error)
    return NextResponse.json(
      { error: 'Failed to predict condition' },
      { status: 500 }
    )
  }
}

