<template>
  <div class="container flex gap-10">
    <div class="flex flex-col items-start gap-5 max-w-4xl mx-auto px-5">
      <h2 class="text-3xl font-semibold dark:text-white/90">
        {{ $t("faq.title") }}
      </h2>
      <div class="flex flex-col gap-0 card items-stretch nopadding">
        <MedgicalQuestion :question="$t('faq.q1')" :answer="$t('faq.a1')" />
        <MedgicalQuestion :question="$t('faq.q2')" :answer="$t('faq.a2')" />
        <MedgicalQuestion :question="$t('faq.q3')" :answer="$t('faq.a3')" />
        <MedgicalQuestion :question="$t('faq.q4')" :answer="$t('faq.a4')" />
        <MedgicalQuestion :question="$t('faq.q5')" :answer="$t('faq.a5')" />
        <MedgicalQuestion :question="$t('faq.q6')" :answer="$t('faq.a6')" />
        <MedgicalQuestion :question="$t('faq.q7')" :answer="$t('faq.a7')" />
        <MedgicalQuestion :question="$t('faq.q8')" :answer="$t('faq.a8')" />
        <MedgicalQuestion :question="$t('faq.q9')" :answer="$t('faq.a9')" />
        <MedgicalQuestion :question="$t('faq.q10')" :answer="$t('faq.a10')" />
        <MedgicalQuestion :question="$t('faq.q11')" :answer="$t('faq.a11')" />
        <MedgicalQuestion :question="$t('faq.q12')" :answer="a12" />
      </div>
    </div>
  </div>
</template>

<script setup>
let internationalization = useI18n();
const locale = internationalization.locale;
const a12 =
  locale === "pt"
    ? [
        "Cardiologia",
        "Cardiologia Consulta Subsequente",
        "Cardiooncologia",
        "Cardiooncologia Consulta Subsequente",
        "Cessação Tabágica",
        "Cuidados Paliativos",
        "Ecocardiografia",
        "Junta Médica",
        "MGF Adultos",
        "MGF Crianças 0-2 anos",
        "MGF Crianças 3-9 anos",
        "MGF Crianças 10-18 anos",
        "MGF Saúde Maternal",
        "Notas de Alta",
        "Notas de Alta Insuficiência Cardíaca",
        "Notas de Alta Geral",
        "Ortopedia Consulta Subsequente",
        "Ortopedia Primeira Consulta",
        "Pacemaker",
        "Pedido de Referenciação",
        "Pediatria 0-2 anos",
        "Pediatria 3-9 anos",
        "Pediatria 10-18 anos",
        "Consulta de Pacing",
        "Pedo Psicologia",
        "Pedo Psicologia Consulta Subsequente",
        "Pneumo Sono",
        "Pneumologia Geral",
        "Pneumologia Geral Consulta Subsequente",
        "Radioncologia",
        "Relatório Clínico",
        "Ressonância Magnética",
      ]
    : [
  "Cardiology",
  "Cardiology Follow-up Consultation",
  "Cardioncology",
  "Cardioncology Follow-up Consultation",
  "Smoking Cessation",
  "Palliative Care",
  "Echocardiography",
  "Medical Board",
  "Family Medicine Adults",
  "Family Medicine Children: age 0-2",
  "Family Medicine Children: age 3-9",
  "Family Medicine Children: age 10-18",
  "Family Medicine Maternal Health",
  "Discharge Notes",
  "Discharge Notes for Cardiac Insufficiency",
  "General Discharge Notes",
  "Orthopedics Follow-up Consultation",
  "Orthopedics Initial Consultation",
  "Pacemaker",
  "Referral Request",
  "Pediatrics: age 0-2",
  "Pediatrics: age 3-9",
  "Pediatrics: age 10-18",
  "Pacing",
  "Pediatric Psychology",
  "Pediatric Psychology Follow-up Consultation",
  "Sleep Pneumology",
  "General Pulmonology",
  "General Pulmonology Follow-up Consultation",
  "Radiation Oncology",
  "Clinical Report",
  "Magnetic Resonance"
];
</script>