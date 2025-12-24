import { NextResponse } from 'next/server'
import { symptomPredictor } from '../../lib/symptomPredictor'
import { getConditionTranslation } from '../../lib/conditionTranslations'
import { Language, translations } from '../../lib/translations'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { symptoms, language = 'en' }: { symptoms: string[], language?: Language } = body

    if (!symptoms || !Array.isArray(symptoms) || symptoms.length === 0) {
      return NextResponse.json(
        { error: 'No symptoms provided' },
        { status: 400 }
      )
    }

    const result = symptomPredictor.predict(symptoms)
    const t = translations[language]
    
    // Translate conditions based on language
    const translatedResult = {
      ...result,
      possible_conditions: result.possible_conditions.map(condition => {
        const translation = getConditionTranslation(condition.condition, language)
        return {
          ...condition,
          condition: translation.name,
          description: translation.description || condition.description,
          recommendations: translation.recommendations.length > 0 
            ? translation.recommendations 
            : condition.recommendations
        }
      }),
      // Translate severity
      severity: result.severity === 'High' ? t.severity.high 
        : result.severity === 'Medium' ? t.severity.medium 
        : t.severity.low,
      // Translate advice
      advice: (() => {
        const topCondition = result.possible_conditions[0]?.condition
        const conditionTranslation = getConditionTranslation(topCondition, language)
        const conditionName = conditionTranslation.name || topCondition
        
        if (result.severity === 'High') {
          return t.advice.highSeverity(conditionName)
        } else if (result.severity === 'Medium') {
          return t.advice.mediumSeverity(conditionName)
        } else {
          return t.advice.lowSeverity(conditionName)
        }
      })()
    }

    return NextResponse.json(translatedResult)
  } catch (error) {
    console.error('Error predicting condition:', error)
    return NextResponse.json(
      { error: 'Failed to predict condition' },
      { status: 500 }
    )
  }
}

