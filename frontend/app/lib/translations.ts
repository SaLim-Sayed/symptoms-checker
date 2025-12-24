export type Language = 'en' | 'ar'

export interface Translations {
  // Common
  common: {
    select: string
    selected: string
    reset: string
    close: string
    loading: string
  }
  // Main page
  main: {
    title: string
    subtitle: string
    checkSymptoms: string
    analyzing: string
    selectedSymptoms: string
    noSymptomsError: string
    apiError: string
  }
  // Symptom selector
  selector: {
    title: string
    selectBodyPart: string
    selectCategory: string
    viewSymptoms: string
  }
  // Categories
  categories: {
    head: string
    respiratory: string
    digestive: string
    musculoskeletal: string
    skin: string
    eyes: string
    urinary: string
    mental: string
    general: string
  }
  // Results
  results: {
    title: string
    severity: string
    possibleConditions: string
    recommendations: string
    generalAdvice: string
    disclaimer: string
    disclaimerText: string
  }
  // Severity levels
  severity: {
    high: string
    medium: string
    low: string
  }
  // Advice templates
  advice: {
    highSeverity: (condition: string) => string
    mediumSeverity: (condition: string) => string
    lowSeverity: (condition: string) => string
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    common: {
      select: 'Select',
      selected: 'Selected',
      reset: 'Reset',
      close: 'Close',
      loading: 'Loading...',
    },
    main: {
      title: 'AI Symptoms Checker',
      subtitle: 'Select your symptoms and get AI-powered health insights',
      checkSymptoms: 'Check Symptoms',
      analyzing: 'Analyzing...',
      selectedSymptoms: 'Selected Symptoms:',
      noSymptomsError: 'Please select at least one symptom',
      apiError: 'Failed to get prediction. Please try again.',
    },
    selector: {
      title: 'Select Your Symptoms by Body Part',
      selectBodyPart: 'Select Body Part',
      selectCategory: 'Select a category from the sidebar to view symptoms',
      viewSymptoms: 'View Symptoms',
    },
    categories: {
      head: 'Head & Neurological',
      respiratory: 'Respiratory & Chest',
      digestive: 'Digestive & Abdominal',
      musculoskeletal: 'Musculoskeletal',
      skin: 'Skin & Dermatological',
      eyes: 'Eyes & Ears',
      urinary: 'Urinary & Genital',
      mental: 'Mental & Emotional',
      general: 'General & Systemic',
    },
    results: {
      title: 'Analysis Results',
      severity: 'Severity',
      possibleConditions: 'Possible Conditions:',
      recommendations: 'Recommendations:',
      generalAdvice: 'General Advice:',
      disclaimer: 'Disclaimer',
      disclaimerText:
        'This is an AI-powered tool for informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.',
    },
    severity: {
      high: 'High',
      medium: 'Medium',
      low: 'Low',
    },
    advice: {
      highSeverity: (condition: string) => `Your symptoms suggest ${condition}. Please consult a healthcare professional immediately, especially if you experience severe symptoms like chest pain or difficulty breathing.`,
      mediumSeverity: (condition: string) => `Your symptoms may indicate ${condition}. Monitor your symptoms closely and consider consulting a healthcare provider if they worsen or persist for more than a few days.`,
      lowSeverity: (condition: string) => `Your symptoms are consistent with ${condition}. Rest, stay hydrated, and monitor your symptoms. If they persist or worsen, consult a healthcare provider.`,
    },
  },
  ar: {
    common: {
      select: 'اختر',
      selected: 'محدد',
      reset: 'إعادة تعيين',
      close: 'إغلاق',
      loading: 'جاري التحميل...',
    },
    main: {
      title: 'مدقق الأعراض بالذكاء الاصطناعي',
      subtitle: 'اختر أعراضك واحصل على رؤى صحية مدعومة بالذكاء الاصطناعي',
      checkSymptoms: 'فحص الأعراض',
      analyzing: 'جاري التحليل...',
      selectedSymptoms: 'الأعراض المحددة:',
      noSymptomsError: 'يرجى تحديد عرض واحد على الأقل',
      apiError: 'فشل الحصول على التنبؤ. يرجى المحاولة مرة أخرى.',
    },
    selector: {
      title: 'اختر أعراضك حسب جزء الجسم',
      selectBodyPart: 'اختر جزء الجسم',
      selectCategory: 'اختر فئة من الشريط الجانبي لعرض الأعراض',
      viewSymptoms: 'عرض الأعراض',
    },
    categories: {
      head: 'الرأس والعصبية',
      respiratory: 'الجهاز التنفسي والصدر',
      digestive: 'الجهاز الهضمي والبطن',
      musculoskeletal: 'العضلات والعظام',
      skin: 'الجلد',
      eyes: 'العينان والأذنان',
      urinary: 'البول والتناسلية',
      mental: 'النفسية والعاطفية',
      general: 'عام وجهازي',
    },
    results: {
      title: 'نتائج التحليل',
      severity: 'الشدة',
      possibleConditions: 'الحالات المحتملة:',
      recommendations: 'التوصيات:',
      generalAdvice: 'نصيحة عامة:',
      disclaimer: 'إخلاء المسؤولية',
      disclaimerText:
        'هذه أداة مدعومة بالذكاء الاصطناعي لأغراض إعلامية فقط. ليست بديلاً عن المشورة الطبية المهنية أو التشخيص أو العلاج. استشر دائماً طبيبك أو مقدم الرعاية الصحية المؤهل مع أي أسئلة قد تكون لديك بخصوص حالة طبية.',
    },
    severity: {
      high: 'عالية',
      medium: 'متوسطة',
      low: 'منخفضة',
    },
    advice: {
      highSeverity: (condition: string) => `تشير أعراضك إلى ${condition}. يرجى استشارة أخصائي رعاية صحية على الفور، خاصة إذا كنت تعاني من أعراض شديدة مثل ألم الصدر أو صعوبة التنفس.`,
      mediumSeverity: (condition: string) => `قد تشير أعراضك إلى ${condition}. راقب أعراضك عن كثب وفكر في استشارة مقدم رعاية صحية إذا ساءت أو استمرت لأكثر من بضعة أيام.`,
      lowSeverity: (condition: string) => `أعراضك متسقة مع ${condition}. استرح، حافظ على الترطيب، وراقب أعراضك. إذا استمرت أو ساءت، استشر مقدم رعاية صحية.`,
    },
  },
}

