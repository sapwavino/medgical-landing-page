export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      pt: {
        hero1: 'Registos clínicos em',
        hero2: 'piloto automático',
        herotext: 'Registos de consulta instantâneos e em formatos específicos para cada especialidade',
        consultation: 'Consulta',
        legal: {
            title: 'Aviso legal',
            subtitle: 'Informação legal da Medgical',
            contact: 'Contacte-nos',
            backtohomepage: 'Regressar à homepage'
        },
        contactform: {
            thankyou: 'Obrigado pelo seu interesse!',
            success_message: 'Os seus dados foram enviados com sucesso. A nossa equipa irá entrar em contacto consigo brevemente.',
            close: 'Fechar',
            contactus: 'Contacte-nos',
            hospital_license: 'Licença Hospitais e Clínicas',
            try:'Experimente a nossa plataforma',
            try_message: 'Seja um dos primeiros a experimentar a nossa plataforma gratuitamente e receba um desconto de 50% vitalício.',
            contact_message: 'Deixe o seu contacto para a nossa equipa de vendas o assitir.',
            name: 'Nome',
            invalid_name: 'Por favor insira o seu nome',
            invalid_email: 'Por favor insira um endereço de email válido',
            email: 'Endereço de email',
            phone: 'Número de telefone',
            organization: 'Nome da organização',
            role: 'Cargo',
            subscribe_newsletter: 'Subscrever newsletter Medgical.',
            send_data: 'Enviar dados',
            footer: '*Campos obrigatórios. Ao continuar está a aceitar os nossos',
            footer2: 'e',
            usage_terms: 'Termos de Serviço',
            privacy_policy: 'Política de Privacidade',
            cancel: 'Cancelar'
        },
        navbar: {
            features: 'Funcionalidades',
            about: 'Sobre nós',
            pricing: 'Planos e Preço',
            login: 'Entrar',
            contactus: 'Contacte-nos',
            try: 'Experimente grátis',
            app: 'Aplicação'
        },
        notes: {
            patient: 'Paciente',
            doctor: 'Médico',
            date: 'Data',
            time: 'Hora',
            previousdiagnosis: 'Antecendentes',
            previousdiagnosis_value: 'Dislipidémia',
            age: 'Idade',
            age_value: '73 anos',
            motive: 'Motivo da consulta',
            motive_value: 'Dor torácica',
            symptoms: 'Sinais/Subjectivo',
            symptoms_value: 'Dor torácica opressiva, que agrava com os esforços, com início há 3 meses.',
            exams: 'Exames complementares',
            exams_value: 'Ecocardiograma 2/1/2024: Boa função sistólica biventricular. Sem patologia valvular significativa.',
            restart: 'Recomeçar',
            medication: 'Medicação habitual',
            medication_value: 'Atorvastatina 20mg, 1 comprimido ao Jantar',
            generating_notes: 'A gerar notas...',
            transcript: 'doctor Bom dia Sr. João. O que o traz à consulta? pacient Tenho andado com uma dor no peito e decidi marcar esta consulta. doctor Então e como é essa dor? Quando começou? pacient Começou há 3 meses. É como se fosse um aperto, principalmente quando faço esforços... também trouxe estes exames para ver.'
        },
        features: {
            feature1_title: 'Notas de consulta automáticas',
            feature1_text: 'O nosso sistema de IA ouve a entrevista médica e gera os registos clínicos adaptados à sua especialidade, hospital ou clínica',
            feature1_hospitalconsultation: 'Consulta Hospitalar',
            feature1_mgf: 'Consulta de Medicina Geral e Familiar (SOAP)',
            feature1_icpc: 'Codificação ICPC 2 automática',
            feature1_pacing: 'Consulta de pacing',
            feature1_oncology: 'Consulta de oncologia',
            feature1_radiology: 'Consulta de radiologia',
            feature1_contactforcustomization: 'Contacte-nos para personalização',
            feature2_ai: 'IA',
            feature2_title: 'Inteligência Artificial',
            feature2_text: 'Utilizamos os mais avançados modelos de Inteligência Artificial para gerar notas clínicas e relatórios de qualidade',
            feature3_copy: 'Copiar',
            feature3_download: 'Descarregar',
            feature3_title: 'Fácil de usar',
            feature3_text: 'Use facilmente com qualquer software clínico ou de gestão hospitalar',
            feature4_title: 'Relatórios e notas standardizados',
            feature4_text: 'Transforma notas desorganizadas ou bullet points em notas e relatórios estruturados e legíveis. Diminui problemas de comunicação entre colegas e erros médicos',
            feature4_point1: 'Exame objectivo normal',
            feature4_point2: 'PA 120/80mmHg',
            feature4_point3: 'FC 70bpm',
            feature4_summary1: 'COC, mucosas coradas e hidratadas.',
            feature4_summary2: 'Auscultação cardíaca: S1 e S2 rítmicos e regulares, sem sopros ou extra-sons',
            feature5_notes1: 'Notas de alta',
            feature5_notes2: 'Cartas de referenciação',
            feature5_notes3: 'Relatórios clínicos',
            feature5_title: 'Extensa biblioteca de templates',
            feature5_text: 'Mais de 16 templates de relatórios disponíveis e a crescer todas as semanas. Notas de alta, Cartas de referenciação, Relatórios clínicos, entre outros.',
            feature6_title: 'Relatórios criados por voz',
            feature6_text: 'Facilmente dite a informação para criar o relatório selecionado',
            feature7_title: 'Segurança e compliance',
            feature7_text: 'Encriptação dos dados em trânsito assegura a confidencialidade dos mesmos. GDRP e HIPAA compliant',
            feature8_title: 'Privacidade',
            feature8_text: 'A informação identificável do doente é automaticamente anonimizada através do nosso algoritmo antes do processamento por IA',
            feature8_transcription: 'TRANSCRIÇÃO',
            feature8_transcription1: 'Obrigado Sr.',
            feature8_transcription2: 'Pode-me dar o seu número de telemóvel para enviar a receita digital? ',
            feature8_transcription3: 'Sim. É o',
            feature9_title: 'Dados clínicos não guardados',
            feature9_text: 'Os dados são processados e eliminados após a geração do relatório',
        },
        feedback: {
            title: 'Resultados que falam por si',
            description: 'Clínicas de vários tamanhos confiam em nós',
            description2: 'para gerar os seus documentos',
            feedback1: 'O Médico de Família confronta-se diariamente com um excesso de burocracia que desvia a sua atenção do doente, muitas vez com prejuízo da relação médico-doente. Com a Medgical haverá uma melhoria de eficiência destes processos, devolvendo ao médico tempo e foco, essenciais para a prestação dos melhores cuidados a quem deles precisa.',
            feedback1_name: 'Dra. Maria João Nobre',
            feedback1_role: 'Médica especialista de Medicina Geral e Familiar. Membro do Grupo de Estudos de Saúde Digital da Associação Portuguesa de Medicina Geral e Familliar (APMGF), empreendedora',
            feedback2: 'As tarefas burocráticas ocupam uma parte muito significativa do tempo dos médicos. Um software como o Medgical irá certamente libertar os médicos de grande parte das tarefas administrativas, redirecionando esse tempo para o que é mais importante: o cuidado ao doente.',
            feedback2_name: 'Dr. Vítor Baltazar Martins',
            feedback2_role: 'Médico  Cardiologista - Especialista em arritmologia e pacing cardíaco',
            feedback2_role2: 'Director do Serviço de Cardiologia do Hospital de Santarėm.',
            feedback2_role3: 'Presidente da Associação Cardiológica do Ribatejo.',
            feedback3: 'A medgical revolucionou a minha prática clínica. Como pedopsiquiatra, poder estar a a consulta toda a olhar nos olhos do utente, em vez do PC, não tem preço. É incrível e paradoxal como é uma tecnologia que vem humanizar os cuidados.',
            feedback3_name: 'Dr. David Moreira',
            feedback3_role: 'Médico Especialista em Psiquiatria da Infância e Adolescência',
        },
        footer: {
            company: 'Empresa',
            about: 'Sobre nós',
            legal: 'Legal',
            terms: 'Termos de utilização',
            privacy: 'Privacidade',
            security: 'Compliance & Segurança',
            careers: 'Carreiras',
            sponsored: 'Com o apoio'
        },
        faq: {
            title: 'Perguntas frequentes',
            q1: 'Como funciona a Medgical?',
            a1: 'A Medgical é uma plataforma de Inteligência Artificial que gera relatórios clínicos e notas de consulta a partir do áudio de entrevistas médicas, do ditado do médico ou de bullet points de uma consulta ou relatório.',
            q2: 'Quais as especialidades disponíveis?',
            a2: 'Atualmente disponibilizamos templates para Medicina Geral e Familiar, Cardiologia, Pediatria. Estamos a trabalhar para adicionar mais especialidades no futuro."',
            q3: 'Como posso experimentar a Medgical?',
            a3: 'Pode experimentar a Medgical gratuitamente durante 15 dias. Basta preencher o formulário de contacto e entraremos em contacto consigo.',
            q4: 'A Medgical é segura?',
            a4: 'Sim. A Medgical é GDPR e HIPAA compliant. Os dados são encriptados em trânsito e anonimizados, e todos os dados clínicos são eliminados após a geração do relatório.',
            q5: 'Como posso integrar a Medgical com o meu software de gestão clínica?',
            a5: 'A Medgical é uma plataforma independente que pode ser integrada com qualquer software de gestão clínica ou hospitalar através do browser. A qualquer momento pode copiar ou descarregar as suas notas e relatórios e inseri-las noutro software.',
            q6: 'Quanto tempo leva para implementar a Medgical na minha prática?',
            a6: 'A implementação da Medgical é rápida e eficiente. Após preencher o nosso formulário de contacto, a nossa equipa entrará em contacto para um breve processo de configuração que normalmente leva apenas alguns dias, dependendo das especificações do seu sistema.',
            q7: 'A Medgical pode ser personalizada para atender às necessidades específicas da minha clínica?',
            a7: 'Absolutamente! Entendemos que cada prática médica é única. Oferecemos serviços de personalização para garantir que a nossa solução se adapte perfeitamente às suas necessidades específicas, seja ajustando os templates existentes ou criando novos.',
            q8: 'Que tipo de suporte técnico a Medgical oferece?',
            a8: 'Oferecemos suporte técnico abrangente via telefone, e-mail e chat ao vivo. Nossa equipa está disponível para ajudar a resolver quaisquer questões técnicas ou operacionais que possa ter, garantindo que a Medgical funcione sem problemas na sua prática.',
            q9: 'A Medgical é compatível com dispositivos móveis?',
            a9: 'Sim. A Medgical é uma plataforma baseada na web que é compatível com todos os dispositivos móveis, permitindo que os médicos acessem e utilizem a plataforma em qualquer lugar, a qualquer momento, sem a necessidade de instalar qualquer software adicional.',
            q10: 'Existem limitações de volume de dados ou número de usuários para a Medgical?',
            a10: 'A Medgical é projetada para escalar e suportar práticas de qualquer tamanho, desde consultórios individuais até grandes hospitais, sem limites no volume de dados ou número de usuários. Isso garante que a nossa plataforma possa crescer e adaptar-se conforme as suas necessidades evoluem.',
            q11: 'Como a Medgical lida com múltiplas línguas e dialetos?',
            a11: 'Nossa IA é treinada para reconhecer e processar múltiplas línguas e dialetos, permitindo que a Medgical seja utilizada em diversas regiões geográficas, facilitando a implementação em práticas multilingues.',
        },
        data: 'DADOS',
        stats: {
            timeusedindocumentation: 'de trabalho burocrático diário',
            patientsatisfaction: 'satisfação de doentes e médicos',
            lesserrors: 'qualidade dos documentos gerados',
            timetodocumentation: 'tempo gasto a validar os documentos gerados*',
            footnote: '*80% das respostas a questionário de satisfação da Medgical indicam que os médicos gastam menos de 1 minuto a validar os documentos gerados com o nosso software'
        },
        reportanim: {
            title: 'CONSULTA DE PACING',
            transcription: 'Bateria com longevidade de 6 anos, limiar auricular 0,75 e limiar ventricular 1, mantém-se estável, onda P 0,7 e onda R 10, impedância auricular de 390 e ventricular de 380 ...'
        },
        pricing: {
            title: 'Quão valioso é o seu tempo?',
            description: 'Escolha o plano que melhor se adapta às suas necessidades.',
            hour: 'hora',
            limited_offer: 'Oferta limitada',
            limited_description: 'Adira agora e tenha um desconto de 50% vitalício.',
            medical_license: 'Licença médica',
            medical_license_description: 'O plano base para médicos independentes.',
            medical_license_point1: 'Notas clínicas de 6 especialidades médicas e hospitalares',
            medical_license_point2: '16 templates de relatórios médicos',
            medical_license_point3: 'Codificação ICPC2 e CID-10',
            medical_license_point4: 'Suporte por email',
            contactus: 'Contacte-nos',
            hospital_license: 'Licença Hospitais e Clínicas',
            hospital_license_price: 'Preço sob consulta',
            hospital_license_description1: 'O plano adaptado às necessidades',
            hospital_license_description2: 'da sua clínica ou hospital.',
            hospital_license_point1: 'Todas as funcionalidades do plano base',
            hospital_license_point2: 'Notas clínicas personalizadas à sua prática médica',
            hospital_license_point3: 'Relatórios clínicos personalizados',
            hospital_license_point4: 'Horas de transcrição áudio adaptados à dimensão da sua clínica ou hospital',
            hospital_license_point5: 'Equipa de suporte dedicada por e-mail e telefone',
            hospital_license_point6: 'Descontos de quantidade e de compromisso',
        },
        about: {
            letter: 'A',
            text: 'Medgical tem como missão revolucionar a prática médica, resolvendo um desafio crítico nos prestadores de cuidados de saúde em todo o mundo - o excesso de carga burocrática. A nossa equipa trabalha lado a lado com médicos de todas as áreas e com especialistas em inteligência artificial, trazendo assim uma combinação única entre tecnologia e humanização nos cuidados de saúde. Ao reduzir o peso das tarefas administrativas, estamos a construir um futuro onde os médicos podem focar-se no essencial: prestar um atendimento de excelência aos doentes!',
            team_title: 'A nossa equipa',
            team_description: 'A Medgical tem uma equipa multidisciplinar que junta médicos, engenheiros e especialistas em inteligência artificial para revolucionar a prática médica.',
            team_member1: {
                role: 'Médico Cardiologista',
                role2: 'CEO e Fundador',
            },
            team_member2: {
                role: 'Data Scientist, PhD',
                role2: 'CTO e Fundador',
            },
            team_member3: {
                role: 'Senior Software Engineer, Cloud Infrastructure,',
                role2: 'Co-Fundador',
            },
            team_member4: {
                role: 'Senior Software Engineer',
                role2: 'Co-Founder',
            },
            team_member5: {
                role: 'Software Engineer',
                role2: 'Cibersegurança, Co-Fundador',
            },
            team_member6: {
                role: 'Médica Psiquiatra da Infância e Adolescência, Co-Fundadora',
            },
        },    
      },
      en: {
        hero1: 'Clinical records',
        hero2: 'on autopilot',
        herotext: 'Immediate consultation notes, reports and specialty-specific templates.',
        consultation: 'Consultation',
        data: 'DATA',
        legal: {
            title: 'Legal Notice',
            subtitle: 'Medgical Legal Information',
            contact: 'Contact us',
             backtohomepage: 'Go back to homepage'
        },
        contactform: {
            thankyou: 'Thank you for your interest!',
            success_message: 'Your data has been successfully sent. Our team will contact you shortly.',
            close: 'Close',
            contactus: 'Contact us',
            hospital_license: 'Hospital and Clinic License',
            try: 'Try our platform',
            try_message: 'Be one of the first to try our platform for free and receive a 50% lifetime discount.',
            contact_message: 'Leave your contact for our sales team to assist you.',
            name: 'Name',
            invalid_name: 'Please enter your name',
            invalid_email: 'Please enter a valid email address',
            email: 'Email address',
            phone: 'Phone number',
            organization: 'Organization name',
            role: 'Role',
            subscribe_newsletter: 'Subscribe to Medgical newsletter.',
            send_data: 'Send data',
            footer: '*Required fields. By continuing you are accepting our',
            footer2: 'and',
            usage_terms: 'Terms of Service',
            privacy_policy: 'Privacy Policy',
            cancel: 'Cancel'
        },
        navbar: {
            features: 'Features',
            about: 'About us',
            pricing: 'Pricing',
            login: 'Login',
            contactus: 'Contact us',
            try: 'Try for free',
            app: 'App'
        },
        notes: {
            patient: 'Patient',
            doctor: 'Doctor',
            date: 'Date',
            time: 'Time',
            previousdiagnosis: 'Previous diagnosis',
            previousdiagnosis_value: 'Hypertension',
            age: 'Age',
            age_value: '73 years',
            motive: 'Consultation motivation',
            motive_value: 'Chest pain',
            symptoms: 'Symptoms/Subjective',
            symptoms_value: 'Chest pain inducing, worsening with effort, starting 3 months ago.',
            exams: 'Complementary exams',
            exams_value: 'Ecg 2/1/2024: Good systolic function of the left ventricle. No significant cardiac valve disease.',
            restart: 'Restart',
            medication: 'Regular medication',
            medication_value: 'Atorvastatine 20mg, 1 tablet at dinner',
            generating_notes: 'Generating notes...',
            transcript: 'doctor Good morning Mr. John. What brings you to the consultation? pacient I have been having chest pain and decided to schedule this consultation. doctor So how is that pain? When did it start? pacient It started 3 months ago. It is like a tightness, especially when I make efforts... I also brought these exams to show you.'
        },
        features: {
            feature1_title: 'Automated consultation notes',
            feature1_text: 'Our AI or voice recognition system generates clinical records tailored to your specialty, hospital, or clinic',
            feature1_hospitalconsultation: 'Hospital consultation',
            feature1_mgf: 'General and Family Medicine (SOAP) consultation',
            feature1_icpc: 'ICPC 2 code automatically generated',
            feature1_pacing: 'Pacing consultation',
            feature1_oncology: 'Oncology consultation',
            feature1_radiology: 'Radiology consultation',
            feature1_contactforcustomization: 'Contact us for customization',
            feature2_ai: 'AI',
            feature2_title: 'Artificial Intelligence',
            feature2_text: 'We use advanced AI models to generate clinical notes and quality reports',
            feature3_copy: 'Copy',
            feature3_download: 'Download',
            feature3_title: 'Easy to use',
            feature3_text: 'Use easily with any clinical or hospital management software',
            feature4_title: 'Standardized reports',
            feature4_text: 'Transform unstructured notes or bullet points into structured and readable reports. Reduce communication errors between colleagues and medical errors',
            feature4_point1: 'Normal physical exam',
            feature4_point2: 'Pa 120/80mmHg',
            feature4_point3: 'Fc 70bpm',
            feature4_summary1: 'Conscious and orientated.',
            feature4_summary2: 'Cardiac auscultation: S1 and S2 rhythmic and regular, no murmurs or extra sounds',
            feature5_notes1: 'High quality notes',
            feature5_notes2: 'Referral letters',
            feature5_notes3: 'Clinical reports',
            feature5_title: 'Wide library of templates',
            feature5_text: 'More than 16 templates available and growing weekly. High quality notes, referral letters, clinical reports, etc.',
            feature6_title: 'Voice-generated reports',
            feature6_text: 'Instantly create the selected report by typing or speaking',
            feature7_title: 'Security and compliance',
            feature7_text: 'Data encryption ensures data privacy. GDPR and HIPAA compliant',
            feature8_title: 'Privacy and anonymization',
            feature8_text: 'Patient information is automatically anonymized through our AI before processing by AI',
            feature8_transcription: 'TRANSLATION',
            feature8_transcription1: 'Dear Mr.',
            feature8_transcription2: 'Could you please give me your mobile number to send the digital prescription? ',
            feature8_transcription3: 'Yes. It is the',
            feature9_title: 'Unsaved data',
            feature9_text: 'Data is processed and deleted after generating the report'
        },
        feedback: {
            title: 'Results that speak for themselves',
            description: 'Hospitals and clinics from diferent sizes trust us',
            description2: 'to help them generate their documents',
            feedback1: 'The Medical Family Doctor frequently faces daily issues with administrative processes that distract him from his patient, often with loss of time to treat his illness. With Medgical, this issue will be significantly improved, returning medical time and attention to the most important matters: patient care.',
            feedback1_name: 'Dr. Maria João Nobre',
            feedback1_role: 'Specialist in General Medicine and Family Medicine. Member of the Portuguese Association for General and Family Medicine (APMGF), founder',
            feedback2: "The administrative burdens of tasks are significant, especially for doctors. An app like Medgical will undoubtedly make the doctors' jobs easier, redirecting their time to what is most important: patient care and treatment.",
            feedback2_name: 'Dr. Vítor Baltazar Martins',
            feedback2_role: 'Cardiologist - Specialist in cardiac arrhythmias and pacing cardiology',
            feedback2_role2: 'Director of the Cardiology Service at Santarém Hospital',
            feedback2_role3: 'President of the Portuguese Cardiology Association (APAC)',
            feedback3: 'Medgical has revolutionized my clinical practice. As a child psychiatrist, being able to look the patient in the eye during the entire consultation, instead of at the PC, is priceless. It is incredible and paradoxical how it is a technology that humanizes care.',
            feedback3_name: 'Dr. David Moreira',
            feedback3_role: 'Child and Adolescent Psychiatrist',
        },
        about: {
            letter: 'M',
            text: 'edgical aims to revolutionize medical practice by solving a critical challenge for healthcare providers worldwide - the burden of bureaucracy. Our team works side by side with doctors from all areas and with artificial intelligence experts, bringing a unique combination of technology and humanization in healthcare. By reducing the weight of administrative tasks, we are building a future where doctors can focus on the essential: providing excellent care to patients!',
            team_title: 'Our team',
            team_description: 'Medgical has a multidisciplinary team that brings together doctors, engineers, and artificial intelligence experts to revolutionize medical practice.',
            team_member1: {
                role: 'Cardiologist',
                role2: 'CEO and Founder',
            },
            team_member2: {
                role: 'Data Scientist, PhD',
                role2: 'CTO and Founder',
            },
            team_member3: {
                role: 'Senior Software Engineer,',
                role2: 'Cloud Infrastructure, Co-Founder',
            },
            team_member4: {
                role: 'Senior Software Engineer',
                role2: 'Co-Founder',
            },
            team_member5: {
                role: 'Software Engineer',
                role2: 'Cybersecurity, Co-Founder',
            },
            team_member6: {
                role: 'Child and Adolescent Psychiatrist, Co-Founder',
            },
        },    
        footer: {
            company: 'Company',
            about: 'About us',
            legal: 'Legal',
            terms: 'Terms of use',
            privacy: 'Privacy',
            security: 'Compliance & Security',
            careers: 'Careers',
            sponsored: 'Supported by'
        },
        faq: {
            title: 'FAQ',
            q1: 'How does Medgical work?',
            a1: 'Medgical is an AI platform that generates clinical reports and consultation notes from the audio of medical interviews, doctor dictation, or bullet points of a consultation or report.',
            q2: 'What are the different types of consultations Medgical can handle?',
            a2: 'Medgical can handle consultations from any specialty, including General and Family Medicine (SOAP), Internal Medicine (ICPC), Pacing, Oncology, Radiology, and many more.',
            q3: 'How can I try Medgical?',
            a3: 'You can try Medgical for 15 days for free. Fill the contact form on our website or send us an e-mail to request a trial.',
            q4: 'Is Medgical secure?',
            a4: 'Medgical is built to be secure. We use encryption to protect your data, and we follow all the latest GDPR and HIPAA regulations.',
            q5: 'How can I integrate Medgical with my clinical management software?',
            a5: 'Medgical is a standalone platform that can be integrated with any clinical or hospital management software through the browser. You can copy or download your notes and reports at any time and insert them into another software.',
            q6: 'How long does it take to integrate Medgical in my practice?',
            a6: 'Medgical implementation is fast and efficient. After filling the contact form, our team will contact you for a brief configuration process that usually takes only a hours.',
            q7: 'Can Medgical be customized to meet the specific needs of my clinic?',
            a7: 'Definitely! We understand that every medical practice is unique. We offer customization services to ensure that our solution fits perfectly to your specific needs, whether by adjusting existing templates or creating new ones.',
            q8: 'What kind of technical support does Medgical offer?',
            a8: 'We offer comprehensive technical support via phone, email, and live chat. Our team is available to help resolve any technical or operational issues you may have, ensuring that Medgical runs smoothly in your practice.',
            q9: 'Is Medgical compatible with mobile devices?',
            a9: 'Yes. Medgical is a web-based platform that is compatible with all mobile devices, allowing doctors to access and use the platform anywhere, anytime, without the need to install any additional software.',
            q10: 'Are there any limitations on data volume or number of users for Medgical?',
            a10: 'Medgical is designed to scale and support practices of any size, from individual practices to large hospitals, with no limits on data volume or number of users. This ensures that our platform can grow and adapt as your needs evolve.',
            q11: 'How does Medgical handle multiple languages and dialects?',
            a11: 'Our AI is trained to recognize and process multiple languages and dialects, allowing Medgical to be used in various geographic regions, facilitating implementation in multilingual practices.'
        },
        stats: {
            timeusedindocumentation: 'of daily bureaucratic work',
            patientsatisfaction: 'patient and doctor satisfaction rating',
            lesserrors: 'quality rating of generated documents',
            timetodocumentation: 'time spent verifying the generated documents*',
            footnote: '*80% of Medgical satisfaction survey responses indicate that doctors spend less than 1 minute documenting the consultation with our software'
        },
        reportanim: {
            title: 'PACING CONSULTATION',
            transcription: 'Battery with a 6-year longevity, atrial threshold 0.75 and ventricular threshold 1, remains stable, P wave 0.7 and R wave 10, atrial impedance of 390 and ventricular of 380 ...'
        },
        pricing: {
            title: 'How valuable is your time?',
            description: 'Choose the plan that best suits your needs.',
            hour: 'hour',
            limited_offer: 'Limited offer',
            limited_description: 'Join now and get a 50% lifetime discount.',
            medical_license: 'Medical License',
            medical_license_description: 'The base plan for independent doctors.',
            medical_license_point1: 'Clinical notes for 6 medical and hospital specialties',
            medical_license_point2: '16 medical report templates',
            medical_license_point3: 'ICPC2 and ICD-10 coding',
            medical_license_point4: 'Email support',
            contactus: 'Contact us',
            hospital_license: 'Hospital and Clinic License',
            hospital_license_price: 'Price on request',
            hospital_license_description1: 'The plan tailored to the needs',
            hospital_license_description2: 'of your clinic or hospital.',
            hospital_license_point1: 'All features of the base plan',
            hospital_license_point2: 'Clinical notes customized to your medical practice',
            hospital_license_point3: 'Custom clinical reports',
            hospital_license_point4: 'Audio transcription hours adapted to the size of your clinic or hospital',
            hospital_license_point5: 'Dedicated support team by email and phone',
            hospital_license_point6: 'Quantity and commitment discounts',
        }

      }
    }
  }))