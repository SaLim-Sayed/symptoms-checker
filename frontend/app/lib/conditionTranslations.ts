export interface ConditionTranslation {
  en: {
    name: string
    description: string
    recommendations: string[]
  }
  ar: {
    name: string
    description: string
    recommendations: string[]
  }
}

export const conditionTranslations: Record<string, ConditionTranslation> = {
  "Common Cold": {
    en: {
      name: "Common Cold",
      description: "A viral infection of the upper respiratory tract.",
      recommendations: [
        "Get plenty of rest",
        "Stay hydrated",
        "Use over-the-counter cold medications",
        "Gargle with warm salt water",
        "Use a humidifier"
      ]
    },
    ar: {
      name: "نزلة برد",
      description: "عدوى فيروسية في الجهاز التنفسي العلوي.",
      recommendations: [
        "احصل على قسط كافٍ من الراحة",
        "حافظ على الترطيب",
        "استخدم أدوية البرد المتاحة دون وصفة طبية",
        "تغرغر بالماء المالح الدافئ",
        "استخدم مرطب الهواء"
      ]
    }
  },
  "Influenza (Flu)": {
    en: {
      name: "Influenza (Flu)",
      description: "A contagious respiratory illness caused by influenza viruses.",
      recommendations: [
        "Rest and stay home",
        "Drink plenty of fluids",
        "Take antiviral medications if prescribed",
        "Use fever reducers",
        "Seek medical attention if symptoms worsen"
      ]
    },
    ar: {
      name: "الإنفلونزا",
      description: "مرض تنفسي معدي تسببه فيروسات الإنفلونزا.",
      recommendations: [
        "استرح وابق في المنزل",
        "اشرب الكثير من السوائل",
        "تناول الأدوية المضادة للفيروسات إذا وصفها الطبيب",
        "استخدم خافضات الحرارة",
        "اطلب العناية الطبية إذا ساءت الأعراض"
      ]
    }
  },
  "COVID-19": {
    en: {
      name: "COVID-19",
      description: "A respiratory illness caused by the SARS-CoV-2 virus.",
      recommendations: [
        "Isolate yourself from others",
        "Monitor your symptoms closely",
        "Seek medical attention if breathing difficulties occur",
        "Get tested for COVID-19",
        "Follow public health guidelines"
      ]
    },
    ar: {
      name: "كوفيد-19",
      description: "مرض تنفسي يسببه فيروس SARS-CoV-2.",
      recommendations: [
        "اعزل نفسك عن الآخرين",
        "راقب أعراضك عن كثب",
        "اطلب العناية الطبية إذا حدثت صعوبات في التنفس",
        "قم بإجراء اختبار كوفيد-19",
        "اتبع إرشادات الصحة العامة"
      ]
    }
  },
  "Migraine": {
    en: {
      name: "Migraine",
      description: "A neurological condition characterized by severe headaches.",
      recommendations: [
        "Rest in a dark, quiet room",
        "Apply cold or warm compresses",
        "Take prescribed migraine medications",
        "Identify and avoid triggers",
        "Practice stress management"
      ]
    },
    ar: {
      name: "الصداع النصفي",
      description: "حالة عصبية تتميز بصداع شديد.",
      recommendations: [
        "استرح في غرفة مظلمة وهادئة",
        "ضع كمادات باردة أو دافئة",
        "تناول أدوية الصداع النصفي الموصوفة",
        "حدد وتجنب المحفزات",
        "مارس إدارة الإجهاد"
      ]
    }
  },
  "Gastroenteritis": {
    en: {
      name: "Gastroenteritis",
      description: "Inflammation of the stomach and intestines, often caused by infection.",
      recommendations: [
        "Stay hydrated with clear fluids",
        "Avoid solid foods initially",
        "Gradually reintroduce bland foods",
        "Rest and avoid strenuous activity",
        "Seek medical attention if dehydration occurs"
      ]
    },
    ar: {
      name: "التهاب المعدة والأمعاء",
      description: "التهاب المعدة والأمعاء، غالباً بسبب العدوى.",
      recommendations: [
        "حافظ على الترطيب بالسوائل الصافية",
        "تجنب الأطعمة الصلبة في البداية",
        "أعد إدخال الأطعمة الخفيفة تدريجياً",
        "استرح وتجنب النشاط الشاق",
        "اطلب العناية الطبية إذا حدث الجفاف"
      ]
    }
  },
  "Allergic Reaction": {
    en: {
      name: "Allergic Reaction",
      description: "An immune system response to a foreign substance.",
      recommendations: [
        "Identify and avoid the allergen",
        "Take antihistamines",
        "Apply cool compresses for skin reactions",
        "Use eye drops for eye irritation",
        "Seek emergency care for severe reactions"
      ]
    },
    ar: {
      name: "رد فعل تحسسي",
      description: "استجابة الجهاز المناعي لمادة غريبة.",
      recommendations: [
        "حدد وتجنب مسببات الحساسية",
        "تناول مضادات الهيستامين",
        "ضع كمادات باردة لتفاعلات الجلد",
        "استخدم قطرات العين لتهيج العين",
        "اطلب الرعاية الطارئة للتفاعلات الشديدة"
      ]
    }
  },
  "Bronchitis": {
    en: {
      name: "Bronchitis",
      description: "Inflammation of the bronchial tubes in the lungs.",
      recommendations: [
        "Rest and avoid irritants",
        "Stay hydrated",
        "Use a humidifier",
        "Take cough suppressants if needed",
        "See a doctor if symptoms persist"
      ]
    },
    ar: {
      name: "التهاب الشعب الهوائية",
      description: "التهاب الأنابيب الشعبية في الرئتين.",
      recommendations: [
        "استرح وتجنب المهيجات",
        "حافظ على الترطيب",
        "استخدم مرطب الهواء",
        "تناول مثبطات السعال إذا لزم الأمر",
        "راجع الطبيب إذا استمرت الأعراض"
      ]
    }
  },
  "Strep Throat": {
    en: {
      name: "Strep Throat",
      description: "A bacterial infection causing inflammation of the throat.",
      recommendations: [
        "See a doctor for antibiotic treatment",
        "Gargle with warm salt water",
        "Rest your voice",
        "Stay hydrated",
        "Take pain relievers as needed"
      ]
    },
    ar: {
      name: "التهاب الحلق العقدي",
      description: "عدوى بكتيرية تسبب التهاب الحلق.",
      recommendations: [
        "راجع الطبيب للعلاج بالمضادات الحيوية",
        "تغرغر بالماء المالح الدافئ",
        "ارح صوتك",
        "حافظ على الترطيب",
        "تناول مسكنات الألم حسب الحاجة"
      ]
    }
  },
  "Anxiety": {
    en: {
      name: "Anxiety",
      description: "A mental health condition characterized by excessive worry and fear.",
      recommendations: [
        "Practice deep breathing exercises",
        "Consider therapy or counseling",
        "Maintain a regular sleep schedule",
        "Limit caffeine and alcohol",
        "Engage in regular physical activity"
      ]
    },
    ar: {
      name: "القلق",
      description: "حالة صحية نفسية تتميز بالقلق والخوف المفرطين.",
      recommendations: [
        "مارس تمارين التنفس العميق",
        "فكر في العلاج أو الاستشارة",
        "حافظ على جدول نوم منتظم",
        "قلل من الكافيين والكحول",
        "انخرط في نشاط بدني منتظم"
      ]
    }
  },
  "Depression": {
    en: {
      name: "Depression",
      description: "A mood disorder causing persistent sadness and loss of interest.",
      recommendations: [
        "Seek professional help",
        "Maintain social connections",
        "Engage in regular exercise",
        "Establish a routine",
        "Consider medication if recommended by a doctor"
      ]
    },
    ar: {
      name: "الاكتئاب",
      description: "اضطراب مزاجي يسبب الحزن المستمر وفقدان الاهتمام.",
      recommendations: [
        "اطلب المساعدة المهنية",
        "حافظ على الروابط الاجتماعية",
        "انخرط في التمارين المنتظمة",
        "أنشئ روتيناً",
        "فكر في الدواء إذا أوصى به الطبيب"
      ]
    }
  },
  "Urinary Tract Infection (UTI)": {
    en: {
      name: "Urinary Tract Infection (UTI)",
      description: "An infection in any part of the urinary system.",
      recommendations: [
        "Drink plenty of water",
        "See a doctor for antibiotics",
        "Avoid irritants like caffeine",
        "Use heating pads for pain",
        "Complete the full course of antibiotics"
      ]
    },
    ar: {
      name: "عدوى المسالك البولية",
      description: "عدوى في أي جزء من الجهاز البولي.",
      recommendations: [
        "اشرب الكثير من الماء",
        "راجع الطبيب للمضادات الحيوية",
        "تجنب المهيجات مثل الكافيين",
        "استخدم وسادات التدفئة للألم",
        "أكمل دورة المضادات الحيوية الكاملة"
      ]
    }
  },
  "Sinusitis": {
    en: {
      name: "Sinusitis",
      description: "Inflammation of the sinuses, often due to infection.",
      recommendations: [
        "Use nasal decongestants",
        "Apply warm compresses",
        "Use a saline nasal spray",
        "Stay hydrated",
        "See a doctor if symptoms persist"
      ]
    },
    ar: {
      name: "التهاب الجيوب الأنفية",
      description: "التهاب الجيوب الأنفية، غالباً بسبب العدوى.",
      recommendations: [
        "استخدم مزيلات احتقان الأنف",
        "ضع كمادات دافئة",
        "استخدم بخاخ الأنف المالح",
        "حافظ على الترطيب",
        "راجع الطبيب إذا استمرت الأعراض"
      ]
    }
  },
  "Pneumonia": {
    en: {
      name: "Pneumonia",
      description: "Infection that inflames air sacs in one or both lungs.",
      recommendations: [
        "Seek immediate medical attention",
        "Get plenty of rest",
        "Stay hydrated",
        "Take prescribed antibiotics",
        "Monitor breathing closely"
      ]
    },
    ar: {
      name: "الالتهاب الرئوي",
      description: "عدوى تلتهب فيها الأكياس الهوائية في إحدى الرئتين أو كليهما.",
      recommendations: [
        "اطلب العناية الطبية الفورية",
        "احصل على قسط كافٍ من الراحة",
        "حافظ على الترطيب",
        "تناول المضادات الحيوية الموصوفة",
        "راقب التنفس عن كثب"
      ]
    }
  },
  "Asthma": {
    en: {
      name: "Asthma",
      description: "A condition in which airways narrow and swell, producing extra mucus.",
      recommendations: [
        "Use prescribed inhaler",
        "Avoid triggers",
        "Monitor symptoms closely",
        "Seek emergency care if breathing becomes difficult",
        "Follow asthma action plan"
      ]
    },
    ar: {
      name: "الربو",
      description: "حالة تضيق فيها الممرات الهوائية وتنتفخ، مما ينتج مخاطاً إضافياً.",
      recommendations: [
        "استخدم البخاخ الموصوف",
        "تجنب المحفزات",
        "راقب الأعراض عن كثب",
        "اطلب الرعاية الطارئة إذا أصبح التنفس صعباً",
        "اتبع خطة عمل الربو"
      ]
    }
  },
  "Conjunctivitis (Pink Eye)": {
    en: {
      name: "Conjunctivitis (Pink Eye)",
      description: "Inflammation of the conjunctiva, the thin clear tissue over the white part of the eye.",
      recommendations: [
        "Avoid touching eyes",
        "Wash hands frequently",
        "Use prescribed eye drops",
        "Apply cool compresses",
        "See a doctor for proper treatment"
      ]
    },
    ar: {
      name: "التهاب الملتحمة (العين الوردية)",
      description: "التهاب الملتحمة، النسيج الرقيق الشفاف فوق الجزء الأبيض من العين.",
      recommendations: [
        "تجنب لمس العينين",
        "اغسل يديك frequently",
        "استخدم قطرات العين الموصوفة",
        "ضع كمادات باردة",
        "راجع الطبيب للعلاج المناسب"
      ]
    }
  },
  "Otitis Media (Ear Infection)": {
    en: {
      name: "Otitis Media (Ear Infection)",
      description: "Infection of the middle ear, often following a cold.",
      recommendations: [
        "See a doctor for antibiotics if bacterial",
        "Use pain relievers",
        "Apply warm compresses",
        "Rest and stay hydrated",
        "Avoid getting water in ear"
      ]
    },
    ar: {
      name: "التهاب الأذن الوسطى",
      description: "عدوى الأذن الوسطى، غالباً بعد نزلة برد.",
      recommendations: [
        "راجع الطبيب للمضادات الحيوية إذا كانت بكتيرية",
        "استخدم مسكنات الألم",
        "ضع كمادات دافئة",
        "استرح وحافظ على الترطيب",
        "تجنب دخول الماء في الأذن"
      ]
    }
  },
  "Arthritis": {
    en: {
      name: "Arthritis",
      description: "Inflammation of one or more joints causing pain and stiffness.",
      recommendations: [
        "Apply heat or cold therapy",
        "Engage in gentle exercise",
        "Take anti-inflammatory medications",
        "Maintain healthy weight",
        "See a rheumatologist for proper diagnosis"
      ]
    },
    ar: {
      name: "التهاب المفاصل",
      description: "التهاب واحد أو أكثر من المفاصل يسبب الألم والتيبس.",
      recommendations: [
        "ضع العلاج بالحرارة أو البرودة",
        "انخرط في التمارين الخفيفة",
        "تناول الأدوية المضادة للالتهابات",
        "حافظ على وزن صحي",
        "راجع أخصائي الروماتيزم للتشخيص المناسب"
      ]
    }
  },
  "Fibromyalgia": {
    en: {
      name: "Fibromyalgia",
      description: "A disorder characterized by widespread musculoskeletal pain.",
      recommendations: [
        "Practice gentle exercise",
        "Establish sleep routine",
        "Manage stress",
        "Consider physical therapy",
        "Work with healthcare provider for treatment plan"
      ]
    },
    ar: {
      name: "الألم العضلي الليفي",
      description: "اضطراب يتميز بألم عضلي هيكلي واسع النطاق.",
      recommendations: [
        "مارس التمارين الخفيفة",
        "أنشئ روتين النوم",
        "أدر الإجهاد",
        "فكر في العلاج الطبيعي",
        "اعمل مع مقدم الرعاية الصحية لخطة العلاج"
      ]
    }
  },
  "Gastroesophageal Reflux Disease (GERD)": {
    en: {
      name: "Gastroesophageal Reflux Disease (GERD)",
      description: "A digestive disorder where stomach acid flows back into the esophagus.",
      recommendations: [
        "Avoid trigger foods",
        "Eat smaller meals",
        "Don't lie down after eating",
        "Elevate head while sleeping",
        "Consider antacids or medications"
      ]
    },
    ar: {
      name: "مرض الجزر المعدي المريئي",
      description: "اضطراب هضمي يتدفق فيه حمض المعدة إلى المريء.",
      recommendations: [
        "تجنب الأطعمة المحفزة",
        "تناول وجبات أصغر",
        "لا تستلقي بعد الأكل",
        "ارفع رأسك أثناء النوم",
        "فكر في مضادات الحموضة أو الأدوية"
      ]
    }
  },
  "Irritable Bowel Syndrome (IBS)": {
    en: {
      name: "Irritable Bowel Syndrome (IBS)",
      description: "A common disorder affecting the large intestine.",
      recommendations: [
        "Identify and avoid trigger foods",
        "Eat smaller, frequent meals",
        "Stay hydrated",
        "Manage stress",
        "Consider probiotics"
      ]
    },
    ar: {
      name: "متلازمة القولون العصبي",
      description: "اضطراب شائع يؤثر على الأمعاء الغليظة.",
      recommendations: [
        "حدد وتجنب الأطعمة المحفزة",
        "تناول وجبات صغيرة ومتكررة",
        "حافظ على الترطيب",
        "أدر الإجهاد",
        "فكر في البروبيوتيك"
      ]
    }
  },
  "Eczema": {
    en: {
      name: "Eczema",
      description: "A condition that makes skin red and itchy.",
      recommendations: [
        "Moisturize regularly",
        "Avoid irritants",
        "Use gentle soaps",
        "Apply prescribed creams",
        "Identify and avoid triggers"
      ]
    },
    ar: {
      name: "الإكزيما",
      description: "حالة تجعل الجلد أحمر ومثير للحكة.",
      recommendations: [
        "رطب بانتظام",
        "تجنب المهيجات",
        "استخدم الصابون اللطيف",
        "ضع الكريمات الموصوفة",
        "حدد وتجنب المحفزات"
      ]
    }
  },
  "Urticaria (Hives)": {
    en: {
      name: "Urticaria (Hives)",
      description: "Raised, itchy welts on the skin, often from an allergic reaction.",
      recommendations: [
        "Take antihistamines",
        "Apply cool compresses",
        "Avoid triggers",
        "Wear loose clothing",
        "See a doctor if severe or persistent"
      ]
    },
    ar: {
      name: "الشرى (خلايا النحل)",
      description: "نتوءات مرتفعة ومثيرة للحكة على الجلد، غالباً من رد فعل تحسسي.",
      recommendations: [
        "تناول مضادات الهيستامين",
        "ضع كمادات باردة",
        "تجنب المحفزات",
        "ارتدِ ملابس فضفاضة",
        "راجع الطبيب إذا كانت شديدة أو مستمرة"
      ]
    }
  },
  "Tension Headache": {
    en: {
      name: "Tension Headache",
      description: "A common headache characterized by a dull, aching pain.",
      recommendations: [
        "Apply heat or cold packs",
        "Practice relaxation techniques",
        "Improve posture",
        "Take over-the-counter pain relievers",
        "Manage stress"
      ]
    },
    ar: {
      name: "صداع التوتر",
      description: "صداع شائع يتميز بألم ممل ومؤلم.",
      recommendations: [
        "ضع أكياس الحرارة أو البرودة",
        "مارس تقنيات الاسترخاء",
        "حسن الوضعية",
        "تناول مسكنات الألم المتاحة دون وصفة طبية",
        "أدر الإجهاد"
      ]
    }
  },
  "Vertigo": {
    en: {
      name: "Vertigo",
      description: "A sensation of feeling off balance, often described as spinning.",
      recommendations: [
        "Move slowly",
        "Avoid sudden head movements",
        "Stay hydrated",
        "See a doctor for diagnosis",
        "Consider vestibular rehabilitation"
      ]
    },
    ar: {
      name: "الدوار",
      description: "إحساس بعدم التوازن، غالباً ما يُوصف بالدوران.",
      recommendations: [
        "تحرك ببطء",
        "تجنب حركات الرأس المفاجئة",
        "حافظ على الترطيب",
        "راجع الطبيب للتشخيص",
        "فكر في إعادة تأهيل الدهليزي"
      ]
    }
  }
}

export function getConditionTranslation(conditionName: string, language: 'en' | 'ar') {
  const translation = conditionTranslations[conditionName]
  if (translation) {
    return translation[language]
  }
  // Fallback to English if no translation
  return {
    name: conditionName,
    description: "",
    recommendations: []
  }
}

