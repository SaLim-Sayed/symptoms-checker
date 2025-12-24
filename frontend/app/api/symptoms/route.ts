import { NextResponse } from 'next/server'
import { symptomPredictor } from '../../../lib/symptomPredictor'

export async function GET() {
  try {
    const symptoms = symptomPredictor.getAvailableSymptoms()
    return NextResponse.json({ symptoms })
  } catch (error) {
    console.error('Error fetching symptoms:', error)
    return NextResponse.json(
      { error: 'Failed to fetch symptoms' },
      { status: 500 }
    )
  }
}

