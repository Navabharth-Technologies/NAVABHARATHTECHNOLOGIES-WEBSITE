// Translation data
const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About Us",
        nav_services: "Services",
        nav_resources: "Resources",
        nav_contact: "Contact",
        search_placeholder: "Search...",
        contact_name_placeholder: "Name",
        contact_email_placeholder: "Email",
        contact_message_placeholder: "Message",
        about_explore: "Explore",

        // Hero Section
        hero_title: "Smarter Solutions for Better Future",
        hero_subtitle: "Web Development | Mobile Apps | SEO | Digital Marketing",
        hero_description: "Navabharath Technologies is a Mysore based Software Company focused on helping businesses adapt, grow, & stay secure in a digital-first world. We design practical IT solutions that simplify everyday operations, strengthen system architecture, safeguard critical business data, & support consistent, long-term growth through modern & future-ready technologies.",
        hero_cta: "Get Started",

        // About Section
        about_title: "About Us",
        about_description: "Navabharath Technologies is a leading IT solutions provider dedicated to delivering innovative and robust digital products. With a team of expert developers and designers, we transform ideas into reality. Our mission is to empower businesses with scalable, efficient technology and comprehensive end-to-end services.",
        about_feature1: "Innovative Solutions",
        about_feature2: "Digital Marketing",
        about_feature3: "Customer-Centric Approach",
        about_feature4: "Expert Team",

        // Services Section
        services_title: "Our Services",
        services_subtitle: "Comprehensive solutions for your business needs",
        service1_title: "Web Development",
        service1_description: "Custom websites built with modern technologies to ensure performance and scalability.",
        service2_title: "Mobile App Development",
        service2_description: "Native and cross-platform mobile applications designed for seamless user experiences.",
        service3_title: "Cloud Solutions",
        service3_description: "Secure and scalable cloud infrastructure setup and management services.",
        service4_title: "UI/UX Design",
        service4_description: "User-centered design that creates engaging and intuitive digital products.",
        service5_title: "Digital Marketing",
        service5_description: "Implementing intelligent marketing strategies to boost your online presence.",
        service6_title: "IVR Solutions",
        service6_description: "Advanced Interactive Voice Response systems to automate customer interactions and streamline call management with intelligent voice menus.",
        service7_title: "AI Solutions",
        service7_description: "Cutting-edge artificial intelligence and machine learning solutions to automate processes, enhance decision-making, and unlock data-driven insights for your business.",

        // Why Choose Us Section
        why_choose_title: "Why Choose Navabharath Technologies?",
        why_feature1_title: "Future-Ready Solutions",
        why_feature1_desc: "Building lasting digital foundations.",
        why_feature2_title: "High Security Standards",
        why_feature2_desc: "Ensuring safe and protected data.",
        why_feature3_title: "End-to-End Development",
        why_feature3_desc: "From research to deployment and support.",
        why_feature4_title: "Result-Driven Approach",
        why_feature4_desc: "We focus on performance, speed, and usability.",
        why_feature5_title: "Client-Centric Team",
        why_feature5_desc: "Dedicated support and transparent communication.",
        why_feature6_title: "DevOps Services",
        why_feature6_desc: "Secure, scalable, and reliable infrastructure.",


        // Contact Section
        contact_title: "Contact Us",
        contact_subtitle: "Ready to start your project? Get in touch with us today.",
        form_name: "Name",
        form_email: "Email",
        form_message: "Message",
        form_submit: "Send Message",

        // Footer
        footer_tagline: "Smarter Solutions for Better Future",
        footer_links_title: "Company",
        footer_support: "Support",
        footer_terms: "Terms & Conditions",
        footer_privacy: "Privacy",
        footer_about: "About",
        footer_services: "Services",
        footer_contact: "Contact",
        footer_social_title: "Follow Us",
        footer_copyright: "\u00A9 2026 Navabharath Technologies. All rights reserved.",

        // Resources Page
        resources_intro_title: "Knowledge Hub",
        resources_intro_desc: "Discover expert curated resources, step-by-step guides, & industry insights designed to support your digital growth. Our Knowledge Hub covers technology trends, business solutions, best practices, & practical strategies to help organizations improve performance, enhance customer experience, & make informed decisions. Learn from reliable content built to empower modern businesses.",
        resource_card1_title: "Documentation",
        resource_card1_desc: "Comprehensive guides and technical documentation for our services and solutions. Learn how to integrate and maximize the value of our technology.",
        resource_view_btn: "View Documentation",
        resource_card2_title: "Blog & Insights",
        resource_card2_desc: "Stay updated with the latest trends, tips, and insights from our team of experts. Discover industry news and best practices.",
        resource_read_btn: "Read Blog",
        resource_card3_title: "Video Tutorials",
        resource_card3_desc: "Watch step-by-step video tutorials and webinars covering various topics from development to deployment and optimization.",
        resource_watch_btn: "Watch Videos",
        resource_card4_title: "Downloads",
        resource_card4_desc: "Access whitepapers, case studies, and downloadable resources to help you make informed decisions for your business.",
        resource_download_btn: "Get Downloads",
        resource_card5_title: "FAQ",
        resource_card5_desc: "Find answers to frequently asked questions about our services, processes, and technology solutions.",
        resource_faq_btn: "View FAQ",
        resource_card6_title: "Developer Tools",
        resource_card6_desc: "Access APIs, SDKs, and developer tools to integrate our solutions seamlessly into your applications.",
        resource_tools_btn: "Explore Tools",

        // Privacy Policy Page
        privacy_sec1_title: "1. Information We Collect",
        privacy_sec1_strong1: "Directly from Users:",
        privacy_sec1_p1: "Name, email, phone number, company name, and message content submitted via the 'Contact Us' form.",
        privacy_sec1_strong2: "Automatically Collected:",
        privacy_sec1_p2: "IP address, browser type, operating system, pages visited, and time spent on site (via cookies/analytics).",
        privacy_sec2_title: "2. How We Use the Information",
        privacy_sec2_li1: "To respond to inquiries (the primary use of the contact form data).",
        privacy_sec2_li2: "To improve the website and marketing efforts.",
        privacy_sec2_li3: "For internal record-keeping and billing related to services provided.",
        privacy_sec3_title: "3. Data Sharing and Disclosure",
        privacy_sec3_strong1: "Service Providers:",
        privacy_sec3_p1: "We may share data with third-party vendors (e.g., hosting providers, CRM software, Google Analytics) who process data on our behalf.",
        privacy_sec3_strong2: "Legal Compliance:",
        privacy_sec3_p2: "We may disclose information if required by law, court order, or government request.",
        privacy_sec4_title: "4. Data Retention",
        privacy_sec4_p1: "We retain contact inquiries for a specific period (e.g., 2 years) and client data for the duration of the contract plus a standard retention period (e.g., 5 years) for legal and tax purposes.",
        privacy_sec5_title: "5. Cookies and Tracking",
        privacy_sec5_p1: "We use cookies (e.g., functional, analytical) to enhance your experience. You can choose to disable cookies through your individual browser options.",

        // Terms Page
        terms_sec1_title: "1. Acceptance of Terms",
        terms_sec1_p1: "By accessing the website or engaging our services, you agree to these terms and conditions. If you do not agree, please do not use our services.",
        terms_sec2_title: "2. Scope of Services",
        terms_sec2_p1: "We provide Web Development, Mobile App Development, UI/UX Design, and related IT services. Specific project details, including scope, budget, and timeline, will be governed by a separate Statement of Work (SOW) or Service Agreement.",
        terms_sec3_title: "3. Intellectual Property (IP) Ownership",
        terms_sec3_strong1: "Client IP:",
        terms_sec3_p1: "All final deliverables (code, design files, content) are owned by the Client upon final payment.",
        terms_sec3_strong2: "Agency IP:",
        terms_sec3_p2: "Navabharath Technologies retains ownership of any pre-existing tools, proprietary code libraries, or generic software/methodologies used to create the deliverables.",
        terms_sec4_title: "4. Client Responsibilities",
        terms_sec4_p1: "The client must provide timely content, necessary access to systems, and prompt feedback. Project delays caused by the client may result in schedule and cost adjustments.",
        terms_sec5_title: "5. Payment Terms",
        terms_sec5_li1: "Invoicing: Specific deposit requirements (e.g., 50% upfront) and payment milestones will be outlined in the SOW.",
        terms_sec5_li2: "Late Fees: We reserve the right to charge interest on late payments.",
        terms_sec5_li3: "Refunds/Cancellations: Deposits are generally non-refundable unless otherwise specified in the agreement.",

        // Privacy Policy Page - Additional Keys
        privacy_sec6_title: "6. User Rights",
        privacy_sec6_p1: "Depending on your location, you may have rights such as the right to access, correct, or delete your personal data. Please contact us to exercise these rights.",
        privacy_sec7_title: "7. Security",
        privacy_sec7_p1: "We implement general security measures, including secure servers and encryption, to protect your data from unauthorized access, alteration, or disclosure.",
        privacy_sec8_title: "8. International Transfers",
        privacy_sec8_p1: "If you are accessing our services from outside India, please be aware that your information may be transferred to, stored, and processed in India where our servers are located.",
        privacy_sec9_title: "9. Contact Information",
        privacy_sec9_p1: "If you have any questions about this Privacy Policy, please contact us at:",

        // Terms Page - Additional Keys
        terms_sec6_title: "6. Warranties and Maintenance",
        terms_sec6_strong1: "Bug Fix Period:",
        terms_sec6_p1: " We provide a limited warranty period (e.g., 30 or 60 days post-launch) during which we will fix errors in the delivered code free of charge.",
        terms_sec6_strong2: "Exclusions:",
        terms_sec6_p2: " The warranty does not cover issues caused by third-party modifications, client content changes, or software updates outside our control.",
        terms_sec7_title: "7. Limitation of Liability",
        terms_sec7_p1: "Our liability is limited to the amount paid by the client for the specific service. We are not liable for consequential business losses (e.g., loss of revenue) resulting from a bug or service failure.",
        terms_sec8_title: "8. Termination",
        terms_sec8_p1: "Either party may terminate a project or agreement under specific conditions, such as material breach of contract, non-payment, or insolvency, as detailed in the service agreement.",
        terms_sec9_title: "9. Indemnification",
        terms_sec9_p1: "The client agrees to hold Navabharath Technologies harmless from any claims or lawsuits (e.g., copyright infringement) arising from the content or materials the client provided for the project.",
        terms_sec10_title: "10. Governing Law",
        terms_sec10_p1: "These Terms and Conditions are governed by and construed in accordance with the laws of Karnataka, India.",
        terms_sec11_title: "11. Changes to Terms",
        terms_sec11_p1: "We reserve the right to update these terms at any time. The latest revision date will be indicated on this page.",

        // Explore Page
        explore_banner_title: "Explore",
        explore_banner_desc: "Discover our journey, mission, and vision",
        explore_intro_title: "Navabharath Technologies â€” Empowering Growth Through Smart IT Solutions",
        explore_intro_desc: "Navabharath Technologies is a forward-thinking IT solutions company delivering smart, scalable, & results-driven digital services. With a strong focus on innovation & customer-centric design, we help businesses transform, automate, & grow in today's fast-evolving digital world. Backed by an experienced team & modern technologies, we ensure seamless execution, optimized workflows, & high-quality delivery. Our dedication to excellence, transparency, and reliability makes us a trusted partner for businesses of all sizes.",
        explore_what_do_title: "What We Do",
        explore_what_do_1: "Building custom websites, applications, & digital products designed for long-term performance.",
        explore_what_do_2: "Smart strategies & technologies that match your goals and workflow.",
        explore_what_do_3: "Robust, reliable, & optimized digital systems for maximum efficiency.",
        explore_what_do_4: "Solutions crafted with usability, experience, & business impact in mind.",
        explore_mission_title: "Our Mission",
        explore_mission_p1: "Our mission is to empower businesses with advanced digital solutions that accelerate growth & strengthen their competitive edge. We focus on enhancing operational efficiency through smart, automated, & scalable technologies that streamline every workflow. By delivering high-quality digital experiences, we ensure long-term success & sustainable development for our clients. We continuously innovate and adapt to evolving industry needs to deliver modern, future-ready solutions. Through our commitment to excellence, we strive to create meaningful value & help businesses operate smarter, faster, & more efficiently.",
        explore_vision_title: "Our Vision",
        explore_vision_p1: "Our vision is to be a global leader in digital transformation, recognized for our ability to turn complex challenges into simple, effective technological solutions. We aspire to build a future where every business, regardless of size, has access to the tools they need to thrive in a digital-first economy. By fostering a culture of creativity, integrity, and collaboration, we aim to set new standards in the IT industry. We see ourselves as catalysts for change, driving progress and innovation that not only benefits our clients but also contributes to a more connected and efficient world.",
        explore_values_title: "What We Do",
        explore_what_we_do_p1: "We specialize in a wide range of IT services designed to meet the diverse needs of modern enterprises. From custom software development and mobile app creation to cloud computing and data analytics, we offer end-to-end solutions that drive results. Our team of experts works closely with clients to understand their unique challenges and goals, delivering tailored strategies that maximize ROI. Whether you need to modernize legacy systems, build a new digital product from scratch, or optimize your existing infrastructure, we have the expertise and experience to help you succeed.",
        explore_trust_title: "Why Businesses Trust Us",
        explore_trust_1_title: "1. Innovation-Driven Approach",
        explore_trust_1_desc: "We use modern tools and best practices to deliver future-ready solutions.",
        explore_trust_2_title: "2. Customer-Centric Execution",
        explore_trust_2_desc: "Every project is personalized to your business goals & workflows.",
        explore_trust_3_title: "3. Skilled Professionals",
        explore_trust_3_desc: "A team that blends creativity, expertise, & industry knowledge.",
        explore_trust_4_title: "4. Quality & Transparency",
        explore_trust_4_desc: "Clear communication, reliable processes, & timely delivery at every stage.",

        // Blog Page
        blog_banner_title: "Our Blog",
        blog_banner_desc: "Insights, updates, and expert opinions from the world of technology.",
        blog_post1_title: "Chatbots vs Human Support : Whatâ€™s Best for Your Business?",
        blog_post1_excerpt: "Explore how chatbots and human support are reshaping customer serviceâ€”and learn which approach works best for your business..",
        blog_post2_title: "Essential Cloud Security Best Practices",
        blog_post2_excerpt: "As businesses move to the cloud, security is paramount. Learn the top strategies to protect your digital assets and data.",
        blog_post3_title: "Top Web Development Trends for 2026",
        blog_post3_excerpt: "Stay ahead of the curve with our analysis of the emerging trends in web development that will shape the internet next year.",
        read_more: "Read More",

        // Chatbot Blog
        blog_cb_title: "Chatbots vs Human Support : Whatâ€™s Best for Your Business?",
        blog_cb_date: "Dec 15, 2025",
        blog_cb_author: "Tech Team",
        blog_cb_p1: "Customer expectations are rising faster than ever, pushing businesses to rethink how they deliver support. Both chatbots & human agents play powerful roles in shaping overall customer experiences. While automation can handle quick responses, real conversations still rely on emotional intelligence. Choosing the right balance impacts customer satisfaction, response time & operational cost. This article helps you understand where each option shines so you can decide what fits your business best.",
        blog_cb_h2_1: "1. Strengths of Chatbot Support",
        blog_cb_key_adv: "Key Advantages",
        blog_cb_h3_1: "Instant Responses",
        blog_cb_p2: "Chatbots reply within seconds, helping businesses reduce wait times & handle peak hours efficiently.",
        blog_cb_h3_2: "24/7 Availability",
        blog_cb_p3: "Bots remain active day & night, ensuring customers get basic information, troubleshooting steps & updates anytime.",
        blog_cb_h3_3: "Cost-Effective Operations",
        blog_cb_p4: "Companies save on hiring & training costs since chatbots can manage repeated queries with consistent accuracy.",
        blog_cb_h3_4: "Scalability During High Demand",
        blog_cb_p5: "A single bot can talk to thousands of customers at once, making it ideal for fast-growing businesses.",
        blog_cb_h3_5: "Data Collection & Insights",
        blog_cb_p6: "Bots automatically gather customer patterns, helping brands boost personalization & service quality.",
        blog_cb_quote: "\"Imagine a world where your customers never have to wait. It's 2 AM, and a frustrated user needs a quick answerâ€”your chatbot is there instantly, a tireless digital guardian awake while the city sleeps. But when the problem gets tough, thatâ€™s when the human touch steps in. Like a skilled diplomat, your human agent takes over, bringing empathy and deep understanding to complex issues that code simply cannot solve. This powerful duoâ€”the speed of automation and the warmth of humanityâ€”creates a support experience that doesn't just solve problems, but builds lasting trust.\"",
        blog_cb_h2_2: "2. Strengths of Human Support",
        blog_cb_h3_6: "1. Empathy & Emotional Understanding",
        blog_cb_p7: "Human agents offer something chatbots cannotâ€”real emotional connection. They can sense frustration, happiness or confusion through tone & conversation flow. This helps customers feel understood, especially during stressful or sensitive issues. Empathy builds trust, reduces conflict & makes the customer feel valued as a person, not just another ticket.",
        blog_cb_h3_7: "2. Personalized Problem Solving",
        blog_cb_p8: "Humans are naturally creative thinkers. They can analyze a customerâ€™s issue from multiple angles, ask clarifying questions & suggest flexible solutions tailored to individual needs. This is helpful when problems do not follow a standard script. Personalized responses reassure customers that their situation is unique & is being handled by someone who genuinely cares.",
        blog_cb_h3_8: "3. Better for Complicated Issues",
        blog_cb_p9: "Some problems require deeper investigation, multiple verification steps or critical judgment. Human agents excel in these situations because they understand context, exceptions & policies better than automated systems. They can coordinate with other departments, interpret unclear information & offer accurate guidance that bots often miss.",
        blog_cb_h3_9: "4. Relationship Building",
        blog_cb_p10: "Strong customer relationships are built through real conversations. A friendly agent can turn a negative experience into a positive one by listening actively & showing patience. Over time, this human touch boosts brand loyalty & increases the chances of repeat business. Customers are more likely to trust companies that treat them like humans rather than transactions.",
        blog_cb_h3_10: "5. Cultural Understanding & Language Nuance",
        blog_cb_p11: "Human agents naturally understand tone, slang, regional expressions & cultural sensitivities. This ensures smoother communication & avoids misunderstandings that bots often face. Whether itâ€™s adjusting language formality or understanding local behavior patterns, humans can adapt instantlyâ€”making the experience more natural & respectful.",
        blog_cb_conclusion_title: "CONCLUSION",
        blog_cb_conclusion_p: "Both chatbots & human support offer unique strengths, making them valuable in different situations. Chatbots are perfect for quick replies, repeated questions & cost-efficient operations. Human agents shine when conversations require emotional care, critical thinking or deep problem-solving. Instead of choosing one over the other, most businesses succeed by blending automation with human expertise. This balanced approach creates faster, smarter & more human-centered support experiences for every customer.",
        blog_back_btn: "Back to Blog"
    },
    es: {
        nav_home: "Inicio",
        search_placeholder: "Buscar...",
        contact_name_placeholder: "Nombre",
        contact_email_placeholder: "Correo ElectrÃ³nico",
        contact_message_placeholder: "Mensaje",
        about_explore: "Explorar",
        nav_about: "Sobre Nosotros",
        nav_services: "Servicios",
        nav_resources: "Recursos",
        nav_contact: "Contacto",
        hero_title: "Soluciones MÃ¡s Inteligentes para un Mejor Futuro",
        hero_subtitle: "Soluciones de TI | Desarrollo Web | IA | SoluciÃ³n SaaS",
        hero_description: "Empoderamos a las empresas con soluciones tecnolÃ³gicas inteligentes que impulsan la innovaciÃ³n, mejoran la eficiencia y crean valor sostenible para el panorama digital del maÃ±ana.",
        hero_cta: "Comenzar",
        about_title: "Sobre Nosotros",
        about_description: "Navabharath Technologies es un proveedor lÃ­der de soluciones de TI dedicado a ofrecer productos digitales innovadores y robustos. Con un equipo de desarrolladores y diseÃ±adores expertos, transformamos ideas en realidad. Nuestra misiÃ³n es empoderar a las empresas con tecnologÃ­a escalable y eficiente.",
        about_feature1: "Soluciones Innovadoras",
        about_feature2: "Enfoque Centrado en el Cliente",
        about_feature3: "Equipo Experto",
        services_title: "Nuestros Servicios",
        services_subtitle: "Soluciones integrales para las necesidades de su negocio",
        service1_title: "Desarrollo Web",
        service1_description: "Sitios web personalizados construidos con tecnologÃ­as modernas para garantizar rendimiento y escalabilidad.",
        service2_title: "Desarrollo de Aplicaciones MÃ³viles",
        service2_description: "Aplicaciones mÃ³viles nativas y multiplataforma diseÃ±adas para experiencias de usuario fluidas.",
        service3_title: "Soluciones en la Nube",
        service3_description: "ConfiguraciÃ³n y gestiÃ³n de infraestructura en la nube segura y escalable.",
        service4_title: "DiseÃ±o UI/UX",
        service4_description: "DiseÃ±o centrado en el usuario que crea productos digitales atractivos e intuitivos.",
        service5_title: "Marketing Digital",
        service5_description: "ImplementaciÃ³n de estrategias de marketing inteligentes para impulsar su presencia en lÃ­nea.",
        service6_title: "Soluciones IVR",
        service6_description: "Sistemas avanzados de Respuesta de Voz Interactiva para automatizar las interacciones con los clientes y agilizar la gestiÃ³n de llamadas con menÃºs de voz inteligentes.",
        service7_title: "Soluciones de IA",
        service7_description: "Soluciones de inteligencia artificial y aprendizaje automÃ¡tico de vanguardia para automatizar procesos, mejorar la toma de decisiones y desbloquear conocimientos basados en datos para su negocio.",

        // Why Choose Us Section
        why_choose_title: "Â¿Por quÃ© elegir Navabharath Technologies?",
        why_feature1_title: "Soluciones Preparadas para el Futuro",
        why_feature1_desc: "Construyendo cimientos digitales duraderos.",
        why_feature2_title: "Altos EstÃ¡ndares de Seguridad",
        why_feature2_desc: "Garantizando datos seguros y protegidos.",
        why_feature3_title: "Desarrollo de Extremo a Extremo",
        why_feature3_desc: "Desde la investigaciÃ³n hasta el despliegue y soporte.",
        why_feature4_title: "Enfoque Orientado a Resultados",
        why_feature4_desc: "Nos centramos en el rendimiento, la velocidad y la usabilidad.",
        why_feature5_title: "Equipo Centrado en el Cliente",
        why_feature5_desc: "Soporte dedicado y comunicaciÃ³n transparente.",
        why_feature6_title: "Servicios DevOps",
        why_feature6_desc: "Infraestructura segura, escalable y fiable.",

        contact_title: "ContÃ¡ctenos",
        contact_subtitle: "Â¿Listo para comenzar su proyecto? PÃ³ngase en contacto con nosotros hoy.",
        form_name: "Nombre",
        form_email: "Correo ElectrÃ³nico",
        form_message: "Mensaje",
        form_submit: "Enviar Mensaje",
        footer_tagline: "Empoderando Su Futuro Digital",
        footer_links_title: "Empresa",
        footer_support: "Soporte",
        footer_about: "Acerca de",
        footer_services: "Servicios",
        footer_contact: "Contacto",
        footer_social_title: "SÃ­guenos",
        footer_copyright: "\u00A9 2026 Navabharath Technologies. Todos los derechos reservados.",

        // Explore Page
        explore_banner_title: "Explorar",
        explore_banner_desc: "Descubra nuestro viaje, misiÃ³n y visiÃ³n",
        explore_intro_title: "Navabharath Technologies â€” Impulsando el Crecimiento a travÃ©s de Soluciones de TI Inteligentes",
        explore_intro_desc: "Navabharath Technologies es una empresa de soluciones de TI con visiÃ³n de futuro que ofrece servicios digitales inteligentes, escalables y orientados a resultados. Con un fuerte enfoque en la innovaciÃ³n y el diseÃ±o centrado en el cliente, ayudamos a las empresas a transformarse, automatizar y crecer en el mundo digital de rÃ¡pida evoluciÃ³n actual. Respaldados por un equipo experimentado y tecnologÃ­as modernas, garantizamos una ejecuciÃ³n perfecta, flujos de trabajo optimizados y una entrega de alta calidad. Nuestra dedicaciÃ³n a la excelencia, la transparencia y la confiabilidad nos convierte en un socio de confianza para empresas de todos los tamaÃ±os.",
        explore_what_do_title: "Lo Que Hacemos",
        explore_what_do_1: "ConstrucciÃ³n de sitios web personalizados, aplicaciones y productos digitales diseÃ±ados para un rendimiento a largo plazo.",
        explore_what_do_2: "Estrategias y tecnologÃ­as inteligentes que coinciden con sus objetivos y flujo de trabajo.",
        explore_what_do_3: "Sistemas digitales robustos, fiables y optimizados para una mÃ¡xima eficiencia.",
        explore_what_do_4: "Soluciones diseÃ±adas teniendo en cuenta la usabilidad, la experiencia y el impacto empresarial.",
        explore_mission_title: "Nuestra MisiÃ³n",
        explore_mission_p1: "Nuestra misiÃ³n es empoderar a las empresas con soluciones digitales avanzadas que aceleren el crecimiento y fortalezcan su ventaja competitiva. Nos centramos en mejorar la eficiencia operativa a travÃ©s de tecnologÃ­as inteligentes, automatizadas y escalables que agilizan cada flujo de trabajo. Al ofrecer experiencias digitales de alta calidad, garantizamos el Ã©xito a largo plazo y el desarrollo sostenible para nuestros clientes. Innovamos y nos adaptamos continuamente a las necesidades cambiantes de la industria para ofrecer soluciones modernas y preparadas para el futuro. A travÃ©s de nuestro compromiso con la excelencia, nos esforzamos por crear un valor significativo y ayudar a las empresas a operar de manera mÃ¡s inteligente, rÃ¡pida y eficiente.",
        explore_vision_title: "Nuestra VisiÃ³n",
        explore_vision_p1: "Nuestra visiÃ³n es ser un lÃ­der mundial en transformaciÃ³n digital, reconocido por nuestra capacidad para convertir desafÃ­os complejos en soluciones tecnolÃ³gicas simples y efectivas. Aspiramos a construir un futuro donde cada empresa, independientemente de su tamaÃ±o, tenga acceso a las herramientas que necesita para prosperar en una economÃ­a digital primero. Al fomentar una cultura de creatividad, integridad y colaboraciÃ³n, nuestro objetivo es establecer nuevos estÃ¡ndares en la industria de TI. Nos vemos como catalizadores del cambio, impulsando el progreso y la innovaciÃ³n que no solo benefician a nuestros clientes, sino que tambiÃ©n contribuyen a un mundo mÃ¡s conectado y eficiente.",
        explore_values_title: "Lo Que Hacemos",
        explore_what_we_do_p1: "Nos especializamos en una amplia gama de servicios de TI diseÃ±ados para satisfacer las diversas necesidades de las empresas modernas. Desde el desarrollo de software personalizado y la creaciÃ³n de aplicaciones mÃ³viles hasta la computaciÃ³n en la nube y el anÃ¡lisis de datos, ofrecemos soluciones integrales que impulsan resultados. Nuestro equipo de expertos trabaja en estrecha colaboraciÃ³n con los clientes para comprender sus desafÃ­os y objetivos Ãºnicos, ofreciendo estrategias personalizadas que maximizan el ROI. Ya sea que necesite modernizar sistemas heredados, construir un nuevo producto digital desde cero u optimizar su infraestructura existente, tenemos la experiencia y la experiencia para ayudarlo a tener Ã©xito.",
        explore_trust_title: "Por QuÃ© Las Empresas ConfÃ­an En Nosotros",
        explore_trust_1_title: "1. Enfoque Impulsado por la InnovaciÃ³n",
        explore_trust_1_desc: "Utilizamos herramientas modernas y mejores prÃ¡cticas para ofrecer soluciones preparadas para el futuro.",
        explore_trust_2_title: "2. EjecuciÃ³n Centrada en el Cliente",
        explore_trust_2_desc: "Cada proyecto se personaliza para sus objetivos comerciales y flujos de trabajo.",
        explore_trust_3_title: "3. Profesionales Cualificados",
        explore_trust_3_desc: "Un equipo que combina creatividad, experiencia y conocimiento de la industria.",
        explore_trust_4_title: "4. Calidad y Transparencia",
        explore_trust_4_desc: "ComunicaciÃ³n clara, procesos fiables y entrega oportuna en cada etapa.",

        // Blog Page
        blog_banner_title: "Nuestro Blog",
        blog_banner_desc: "Perspectivas, actualizaciones y opiniones de expertos del mundo de la tecnologÃ­a.",
        blog_post1_title: "Chatbots vs Soporte Humano: Â¿QuÃ© es Mejor para Su Negocio?",
        blog_post1_excerpt: "Explore cÃ³mo los chatbots y el soporte humano estÃ¡n remodelando el servicio al cliente y aprenda quÃ© enfoque funciona mejor para su negocio.",
        blog_post2_title: "PrÃ¡cticas Esenciales de Seguridad en la Nube",
        blog_post2_excerpt: "A medida que las empresas se trasladan a la nube, la seguridad es primordial. Aprenda las mejores estrategias para proteger sus activos digitales y datos.",
        blog_post3_title: "Principales Tendencias de Desarrollo Web para 2026",
        blog_post3_excerpt: "MantÃ©ngase a la vanguardia con nuestro anÃ¡lisis de las tendencias emergentes que darÃ¡n forma a Internet el prÃ³ximo aÃ±o.",
        read_more: "Leer MÃ¡s",

        // Resources Page
        resources_intro_title: "Centro de Conocimiento",
        resources_intro_desc: "Descubra recursos seleccionados por expertos, guÃ­as paso a paso y conocimientos de la industria diseÃ±ados para respaldar su crecimiento digital.",
        resource_card1_title: "DocumentaciÃ³n",
        resource_card1_desc: "GuÃ­as completas y documentaciÃ³n tÃ©cnica para nuestros servicios y soluciones.",
        resource_view_btn: "Ver DocumentaciÃ³n",
        resource_card2_title: "Blog y Perspectivas",
        resource_card2_desc: "MantÃ©ngase actualizado con las Ãºltimas tendencias, consejos y conocimientos de nuestro equipo de expertos.",
        resource_read_btn: "Leer Blog",
        resource_card3_title: "Tutoriales en Video",
        resource_card3_desc: "Vea tutoriales en video paso a paso y seminarios web sobre diversos temas.",
        resource_watch_btn: "Ver Videos",
        resource_card4_title: "Descargas",
        resource_card4_desc: "Acceda a documentos tÃ©cnicos, estudios de casos y recursos descargables.",
        resource_download_btn: "Obtener Descargas",
        resource_card5_title: "Preguntas Frecuentes",
        resource_card5_desc: "Encuentre respuestas a las preguntas frecuentes sobre nuestros servicios y soluciones.",
        resource_faq_btn: "Ver FAQ",
        resource_card6_title: "Herramientas para Desarrolladores",
        resource_card6_desc: "Acceda a API, SDK y herramientas para desarrolladores para integrar nuestras soluciones.",
        resource_tools_btn: "Explorar Herramientas",

        // Chatbot Blog
        blog_cb_title: "Chatbots vs Soporte Humano: Â¿QuÃ© es mejor para su negocio?",
        blog_cb_date: "15 de dic, 2025",
        blog_cb_author: "Equipo TÃ©cnico",
        blog_cb_p1: "Las expectativas de los clientes estÃ¡n aumentando mÃ¡s rÃ¡pido que nunca, lo que empuja a las empresas a repensar cÃ³mo brindan soporte. Tanto los chatbots como los agentes humanos juegan un papel poderoso en la configuraciÃ³n de las experiencias generales de los clientes. Si bien la automatizaciÃ³n puede manejar respuestas rÃ¡pidas, las conversaciones reales aÃºn dependen de la inteligencia emocional. Elegir el equilibrio adecuado afecta la satisfacciÃ³n del cliente, el tiempo de respuesta y el costo operativo. Este artÃ­culo le ayuda a comprender dÃ³nde brilla cada opciÃ³n para que pueda decidir quÃ© es lo mejor para su negocio.",
        blog_cb_h2_1: "1. Fortalezas del Soporte de Chatbot",
        blog_cb_key_adv: "Ventajas Clave",
        blog_cb_h3_1: "Respuestas InstantÃ¡neas",
        blog_cb_p2: "Los chatbots responden en segundos, ayudando a las empresas a reducir los tiempos de espera y manejar las horas pico de manera eficiente.",
        blog_cb_h3_2: "Disponibilidad 24/7",
        blog_cb_p3: "Los bots permanecen activos dÃ­a y noche, asegurando que los clientes obtengan informaciÃ³n bÃ¡sica, pasos para solucionar problemas y actualizaciones en cualquier momento.",
        blog_cb_h3_3: "Operaciones Rentables",
        blog_cb_p4: "Las empresas ahorran en costos de contrataciÃ³n y capacitaciÃ³n, ya que los chatbots pueden gestionar consultas repetidas con una precisiÃ³n constante.",
        blog_cb_h3_4: "Escalabilidad durante alta demanda",
        blog_cb_p5: "Un solo bot puede hablar con miles de clientes a la vez, lo que lo hace ideal para empresas de rÃ¡pido crecimiento.",
        blog_cb_h3_5: "RecopilaciÃ³n de datos e informaciÃ³n",
        blog_cb_p6: "Los bots recopilan automÃ¡ticamente patrones de clientes, ayudando a las marcas a impulsar la personalizaciÃ³n y la calidad del servicio.",
        blog_cb_quote: "\"Imagina un mundo donde tus clientes nunca tengan que esperar. Son las 2 AM y un usuario frustrado necesita una respuesta rÃ¡pida: tu chatbot estÃ¡ ahÃ­ al instante, un guardiÃ¡n digital incansable despierto mientras la ciudad duerme. Pero cuando el problema se pone difÃ­cil, es cuando entra el toque humano. Como un diplomÃ¡tico experto, tu agente humano se hace cargo, aportando empatÃ­a y una comprensiÃ³n profunda a problemas complejos que el cÃ³digo simplemente no puede resolver. Este dÃºo poderoso, la velocidad de la automatizaciÃ³n y la calidez de la humanidad, crea una experiencia de soporte que no solo resuelve problemas, sino que construye una confianza duradera.\"",
        blog_cb_h2_2: "2. Fortalezas del Soporte Humano",
        blog_cb_h3_6: "1. EmpatÃ­a y comprensiÃ³n emocional",
        blog_cb_p7: "Los agentes humanos ofrecen algo que los chatbots no pueden: una conexiÃ³n emocional real. Pueden sentir frustraciÃ³n, felicidad o confusiÃ³n a travÃ©s del tono y el flujo de la conversaciÃ³n. Esto ayuda a los clientes a sentirse comprendidos, especialmente durante problemas estresantes o delicados. La empatÃ­a genera confianza, reduce el conflicto y hace que el cliente se sienta valorado como persona, no solo como otro ticket.",
        blog_cb_h3_7: "2. ResoluciÃ³n de problemas personalizada",
        blog_cb_p8: "Los humanos son pensadores creativos por naturaleza. Pueden analizar el problema de un cliente desde mÃºltiples Ã¡ngulos, hacer preguntas aclaratorias y sugerir soluciones flexibles adaptadas a las necesidades individuales. Esto es Ãºtil cuando los problemas no siguen un guiÃ³n estÃ¡ndar. Las respuestas personalizadas aseguran a los clientes que su situaciÃ³n es Ãºnica y estÃ¡ siendo manejada por alguien que realmente se preocupa.",
        blog_cb_h3_8: "3. Mejor para problemas complicados",
        blog_cb_p9: "Algunos problemas requieren una investigaciÃ³n mÃ¡s profunda, mÃºltiples pasos de verificaciÃ³n o juicio crÃ­tico. Los agentes humanos sobresalen en estas situaciones porque entienden el contexto, las excepciones y las polÃ­ticas mejor que los sistemas automatizados. Pueden coordinar con otros departamentos, interpretar informaciÃ³n poco clara y ofrecer una orientaciÃ³n precisa que los bots a menudo pasan por alto.",
        blog_cb_h3_9: "4. ConstrucciÃ³n de relaciones",
        blog_cb_p10: "Las relaciones sÃ³lidas con los clientes se construyen a travÃ©s de conversaciones reales. Un agente amable puede convertir una experiencia negativa en una positiva escuchando activamente y mostrando paciencia. Con el tiempo, este toque humano aumenta la lealtad a la marca y las posibilidades de que se repitan los negocios. Es mÃ¡s probable que los clientes confÃ­en en las empresas que los tratan como humanos en lugar de transacciones.",
        blog_cb_h3_10: "5. ComprensiÃ³n cultural y matices del idioma",
        blog_cb_p11: "Los agentes humanos entienden naturalmente el tono, la jerga, las expresiones regionales y las sensibilidades culturales. Esto asegura una comunicaciÃ³n mÃ¡s fluida y evita malentendidos que los bots a menudo enfrentan. Ya sea ajustando la formalidad del lenguaje o entendiendo los patrones de comportamiento local, los humanos pueden adaptarse instantÃ¡neamente, haciendo que la experiencia sea mÃ¡s natural y respetuosa.",
        blog_cb_conclusion_title: "CONCLUSIÃ“N",
        blog_cb_conclusion_p: "Tanto los chatbots como el soporte humano ofrecen fortalezas Ãºnicas, lo que los hace valiosos en diferentes situaciones. Los chatbots son perfectos para respuestas rÃ¡pidas, preguntas repetidas y operaciones rentables. Los agentes humanos brillan cuando las conversaciones requieren cuidado emocional, pensamiento crÃ­tico o resoluciÃ³n de problemas profundos. En lugar de elegir uno sobre el otro, la mayorÃ­a de las empresas tienen Ã©xito al combinar la automatizaciÃ³n con la experiencia humana. Este enfoque equilibrado crea experiencias de soporte mÃ¡s rÃ¡pidas, inteligentes y centradas en el ser humano para cada cliente.",
        blog_back_btn: "Volver al Blog"
    },
    fr: {
        nav_home: "Accueil",
        search_placeholder: "Rechercher...",
        contact_name_placeholder: "Nom",
        contact_email_placeholder: "Email",
        contact_message_placeholder: "Message",
        about_explore: "Explorer",
        nav_about: "Ã€ Propos",
        nav_services: "Services",
        nav_resources: "Ressources",
        nav_contact: "Contact",
        hero_title: "Des Solutions Plus Intelligentes pour un Meilleur Avenir",
        hero_subtitle: "Solutions informatiques | DÃ©veloppement Web | IA | Solution SaaS",
        hero_description: "Nous donnons aux entreprises les moyens de disposer de solutions technologiques intelligentes qui favorisent l'innovation, amÃ©liorent l'efficacitÃ© et crÃ©ent une valeur durable pour le paysage numÃ©rique de demain.",
        hero_cta: "Commencer",
        about_title: "Ã€ Propos de Nous",
        about_description: "Navabharath Technologies est un fournisseur de solutions informatiques de premier plan dÃ©diÃ© Ã  la fourniture de produits numÃ©riques innovants et robustes. Avec une Ã©quipe de dÃ©veloppeurs et de concepteurs experts, nous transformons les idÃ©es en rÃ©alitÃ©. Notre mission est de donner aux entreprises les moyens de disposer d'une technologie Ã©volutive et efficace.",
        about_feature1: "Solutions Innovantes",
        about_feature2: "Approche CentrÃ©e sur le Client",
        about_feature3: "Ã‰quipe d'Experts",
        services_title: "Nos Services",
        services_subtitle: "Des solutions complÃ¨tes pour les besoins de votre entreprise",
        service1_title: "DÃ©veloppement Web",
        service1_description: "Sites Web personnalisÃ©s construits avec des technologies modernes pour garantir performance et Ã©volutivitÃ©.",
        service2_title: "DÃ©veloppement d'Applications Mobiles",
        service2_description: "Applications mobiles natives et multiplateformes conÃ§ues pour des expÃ©riences utilisateur fluides.",
        service3_title: "Solutions Cloud",
        service3_description: "Configuration et gestion d'infrastructure cloud sÃ©curisÃ©e et Ã©volutive.",
        service4_title: "Conception UI/UX",
        service4_description: "Conception centrÃ©e sur l'utilisateur qui crÃ©e des produits numÃ©riques attrayants et intuitifs.",
        service5_title: "Marketing NumÃ©rique",
        service5_description: "Mise en Å“uvre de stratÃ©gies marketing intelligentes pour booster votre prÃ©sence en ligne.",
        service6_title: "Solutions SVI",
        service6_description: "SystÃ¨mes de RÃ©ponse Vocale Interactive avancÃ©s pour automatiser les interactions clients et rationaliser la gestion des appels avec des menus vocaux intelligents.",
        service7_title: "Solutions IA",
        service7_description: "Solutions d'intelligence artificielle et d'apprentissage automatique de pointe pour automatiser les processus, amÃ©liorer la prise de dÃ©cision et dÃ©bloquer des informations basÃ©es sur les donnÃ©es pour votre entreprise.",

        // Why Choose Us Section
        why_choose_title: "Pourquoi choisir Navabharath Technologies ?",
        why_feature1_title: "Solutions prÃªtes pour l'avenir",
        why_feature1_desc: "Construire des fondations numÃ©riques durables.",
        why_feature2_title: "Normes de sÃ©curitÃ© Ã©levÃ©es",
        why_feature2_desc: "Assurer la sÃ©curitÃ© et la protection des donnÃ©es.",
        why_feature3_title: "DÃ©veloppement de bout en bout",
        why_feature3_desc: "De la recherche au dÃ©ploiement et au support.",
        why_feature4_title: "Approche axÃ©e sur les rÃ©sultats",
        why_feature4_desc: "Nous nous concentrons sur la performance, la vitesse et la convivialitÃ©.",
        why_feature5_title: "Ã‰quipe centrÃ©e sur le client",
        why_feature5_desc: "Support dÃ©diÃ© et communication transparente.",
        why_feature6_title: "Services DevOps",
        why_feature6_desc: "Infrastructure sÃ©curisÃ©e, Ã©volutive et fiable.",

        contact_title: "Contactez-Nous",
        contact_subtitle: "PrÃªt Ã  dÃ©marrer votre projet ? Contactez-nous dÃ¨s aujourd'hui.",
        form_name: "Nom",
        form_email: "Email",
        form_message: "Message",
        form_submit: "Envoyer le Message",
        footer_tagline: "Donner du Pouvoir Ã  Votre Avenir NumÃ©rique",
        footer_links_title: "Entreprise",
        footer_support: "Assistance",
        footer_about: "Ã€ Propos",
        footer_services: "Services",
        footer_contact: "Contact",
        footer_social_title: "Suivez-Nous",
        footer_copyright: "\u00A9 2026 Navabharath Technologies. Tous droits rÃ©servÃ©s.",

        // Explore Page
        explore_banner_title: "Explorer",
        explore_banner_desc: "DÃ©couvrez notre parcours, notre mission et notre vision",
        explore_intro_title: "Navabharath Technologies â€” Favoriser la croissance grÃ¢ce Ã  des solutions informatiques intelligentes",
        explore_intro_desc: "Navabharath Technologies est une sociÃ©tÃ© de solutions informatiques avant-gardiste qui fournit des services numÃ©riques intelligents, Ã©volutifs et axÃ©s sur les rÃ©sultats. Avec un fort accent sur l'innovation et la conception centrÃ©e sur le client, nous aidons les entreprises Ã  se transformer, Ã  s'automatiser et Ã  se dÃ©velopper dans le monde numÃ©rique en Ã©volution rapide d'aujourd'hui. Soutenus par une Ã©quipe expÃ©rimentÃ©e et des technologies modernes, nous assurons une exÃ©cution transparente, des flux de travail optimisÃ©s et une livraison de haute qualitÃ©. Notre dÃ©vouement Ã  l'excellence, Ã  la transparence et Ã  la fiabilitÃ© fait de nous un partenaire de confiance pour les entreprises de toutes tailles.",
        explore_what_do_title: "Ce Que Nous Faisons",
        explore_what_do_1: "CrÃ©ation de sites Web personnalisÃ©s, d'applications et de produits numÃ©riques conÃ§us pour des performances Ã  long terme.",
        explore_what_do_2: "Des stratÃ©gies et des technologies intelligentes qui correspondent Ã  vos objectifs et Ã  votre flux de travail.",
        explore_what_do_3: "Des systÃ¨mes numÃ©riques robustes, fiables et optimisÃ©s pour une efficacitÃ© maximale.",
        explore_what_do_4: "Des solutions conÃ§ues en tenant compte de la convivialitÃ©, de l'expÃ©rience et de l'impact commercial.",
        explore_mission_title: "Notre Mission",
        explore_mission_p1: "Notre mission est de donner aux entreprises les moyens de disposer de solutions numÃ©riques avancÃ©es qui accÃ©lÃ¨rent la croissance et renforcent leur avantage concurrentiel. Nous nous concentrons sur l'amÃ©lioration de l'efficacitÃ© opÃ©rationnelle grÃ¢ce Ã  des technologies intelligentes, automatisÃ©es et Ã©volutives qui rationalisent chaque flux de travail. En offrant des expÃ©riences numÃ©riques de haute qualitÃ©, nous assurons le succÃ¨s Ã  long terme et le dÃ©veloppement durable de nos clients. Nous innovons et nous adaptons continuellement aux besoins changeants de l'industrie pour fournir des solutions modernes et prÃªtes pour l'avenir. GrÃ¢ce Ã  notre engagement envers l'excellence, nous nous efforÃ§ons de crÃ©er une valeur significative et d'aider les entreprises Ã  fonctionner plus intelligemment, plus rapidement et plus efficacement.",
        explore_vision_title: "Notre Vision",
        explore_vision_p1: "Notre vision est d'Ãªtre un leader mondial de la transformation numÃ©rique, reconnu pour notre capacitÃ© Ã  transformer des dÃ©fis complexes en solutions technologiques simples et efficaces. Nous aspirons Ã  bÃ¢tir un avenir oÃ¹ chaque entreprise, quelle que soit sa taille, a accÃ¨s aux outils dont elle a besoin pour prospÃ©rer dans une Ã©conomie numÃ©rique. En favorisant une culture de crÃ©ativitÃ©, d'intÃ©gritÃ© et de collaboration, nous visons Ã  Ã©tablir de nouvelles normes dans l'industrie informatique. Nous nous considÃ©rons comme des catalyseurs de changement, favorisant le progrÃ¨s et l'innovation qui profitent non seulement Ã  nos clients, mais contribuent Ã©galement Ã  un monde plus connectÃ© et plus efficace.",
        explore_values_title: "Ce Que Nous Faisons",
        explore_what_we_do_p1: "Nous nous spÃ©cialisons dans une large gamme de services informatiques conÃ§us pour rÃ©pondre aux divers besoins des entreprises modernes. Du dÃ©veloppement de logiciels personnalisÃ©s et de la crÃ©ation d'applications mobiles au cloud computing et Ã  l'analyse de donnÃ©es, nous proposons des solutions de bout en bout qui gÃ©nÃ¨rent des rÃ©sultats. Notre Ã©quipe d'experts travaille en Ã©troite collaboration avec les clients pour comprendre leurs dÃ©fis et objectifs uniques, en proposant des stratÃ©gies sur mesure qui maximisent le retour sur investissement. Que vous ayez besoin de moderniser des systÃ¨mes existants, de crÃ©er un nouveau produit numÃ©rique Ã  partir de zÃ©ro ou d'optimiser votre infrastructure existante, nous avons l'expertise et l'expÃ©rience pour vous aider Ã  rÃ©ussir.",
        explore_trust_title: "Pourquoi Les Entreprises Nous Font Confiance",
        explore_trust_1_title: "1. Approche AxÃ©e sur l'Innovation",
        explore_trust_1_desc: "Nous utilisons des outils modernes et les meilleures pratiques pour fournir des solutions prÃªtes pour l'avenir.",
        explore_trust_2_title: "2. ExÃ©cution CentrÃ©e sur le Client",
        explore_trust_2_desc: "Chaque projet est personnalisÃ© en fonction de vos objectifs commerciaux et de vos flux de travail.",
        explore_trust_3_title: "3. Professionnels QualifiÃ©s",
        explore_trust_3_desc: "Une Ã©quipe qui allie crÃ©ativitÃ©, expertise et connaissance de l'industrie.",
        explore_trust_4_title: "4. QualitÃ© et Transparence",
        explore_trust_4_desc: "Une communication claire, des processus fiables et une livraison rapide Ã  chaque Ã©tape.",

        // Blog Page
        blog_banner_title: "Notre Blog",
        blog_banner_desc: "AperÃ§us, mises Ã  jour et avis d'experts du monde de la technologie.",
        blog_post1_title: "Chatbots vs Support Humain : Qu'est-ce qui est Mieux pour Votre Entreprise ?",
        blog_post1_excerpt: "DÃ©couvrez comment les chatbots et le support humain remodÃ¨lent le service client et apprenez quelle approche fonctionne le mieux pour votre entreprise.",
        blog_post2_title: "Meilleures Pratiques Essentielles de SÃ©curitÃ© Cloud",
        blog_post2_excerpt: "Alors que les entreprises passent au cloud, la sÃ©curitÃ© est primordiale. Apprenez les meilleures stratÃ©gies pour protÃ©ger vos actifs numÃ©riques et vos donnÃ©es.",
        blog_post3_title: "Principales Tendances de DÃ©veloppement Web pour 2026",
        blog_post3_excerpt: "Gardez une longueur d'avance avec notre analyse des tendances Ã©mergentes qui faÃ§onneront Internet l'annÃ©e prochaine.",
        read_more: "Lire Plus",

        // Resources Page
        resources_intro_title: "Centre de Connaissances",
        resources_intro_desc: "DÃ©couvrez des ressources sÃ©lectionnÃ©es par des experts, des guides Ã©tape par Ã©tape et des informations sur l'industrie.",
        resource_card1_title: "Documentation",
        resource_card1_desc: "Guides complets et documentation technique pour nos services et solutions.",
        resource_view_btn: "Voir la Documentation",
        resource_card2_title: "Blog & IdÃ©es",
        resource_card2_desc: "Restez Ã  jour avec les derniÃ¨res tendances, conseils et idÃ©es de notre Ã©quipe d'experts.",
        resource_read_btn: "Lire le Blog",
        resource_card3_title: "Tutoriels VidÃ©o",
        resource_card3_desc: "Regardez des tutoriels vidÃ©o Ã©tape par Ã©tape et des webinaires sur divers sujets.",
        resource_watch_btn: "Regarder des VidÃ©os",
        resource_card4_title: "TÃ©lÃ©chargements",
        resource_card4_desc: "AccÃ©dez Ã  des livres blancs, des Ã©tudes de cas et des ressources tÃ©lÃ©chargeables.",
        resource_download_btn: "Obtenir des TÃ©lÃ©chargements",
        resource_card5_title: "FAQ",
        resource_card5_desc: "Trouvez des rÃ©ponses aux questions frÃ©quemment posÃ©es sur nos services.",
        resource_faq_btn: "Voir la FAQ",
        resource_card6_title: "Outils pour DÃ©veloppeurs",
        resource_card6_desc: "AccÃ©dez aux API, SDK et outils de dÃ©veloppement pour intÃ©grer nos solutions.",
        resource_tools_btn: "Explorer les Outils",

        // Chatbot Blog
        blog_cb_title: "Chatbots vs Support Humain : Quel est le meilleur pour votre entreprise ?",
        blog_cb_date: "15 dÃ©c. 2025",
        blog_cb_author: "Ã‰quipe Technique",
        blog_cb_p1: "Customer expectations are rising faster than ever, pushing businesses to rethink how they deliver support. Both chatbots & human agents play powerful roles in shaping overall customer experiences. While automation can handle quick responses, real conversations still rely on emotional intelligence. Choosing the right balance impacts customer satisfaction, response time & operational cost. This article helps you understand where each option shines so you can decide what fits your business best.",
        blog_cb_h2_1: "1. Forces du Support Chatbot",
        blog_cb_key_adv: "Avantages ClÃ©s",
        blog_cb_h3_1: "RÃ©ponses InstantanÃ©es",
        blog_cb_p2: "Chatbots reply within seconds, helping businesses reduce wait times & handle peak hours efficiently.",
        blog_cb_h3_2: "DisponibilitÃ© 24/7",
        blog_cb_p3: "Bots remain active day & night, ensuring customers get basic information, troubleshooting steps & updates anytime.",
        blog_cb_h3_3: "OpÃ©rations Rentables",
        blog_cb_p4: "Companies save on hiring & training costs since chatbots can manage repeated queries with consistent accuracy.",
        blog_cb_h3_4: "Ã‰volutivitÃ© en cas de forte demande",
        blog_cb_p5: "A single bot can talk to thousands of customers at once, making it ideal for fast-growing businesses.",
        blog_cb_h3_5: "Collecte de donnÃ©es et informations",
        blog_cb_p6: "Bots automatically gather customer patterns, helping brands boost personalization & service quality.",
        blog_cb_quote: "\"Imagine a world where your customers never have to wait. It's 2 AM, and a frustrated user needs a quick answerâ€”your chatbot is there instantly, a tireless digital guardian awake while the city sleeps. But when the problem gets tough, thatâ€™s when the human touch steps in. Like a skilled diplomat, your human agent takes over, bringing empathy and deep understanding to complex issues that code simply cannot solve. This powerful duoâ€”the speed of automation and the warmth of humanityâ€”creates a support experience that doesn't just solve problems, but builds lasting trust.\"",
        blog_cb_h2_2: "2. Forces du Support Humain",
        blog_cb_h3_6: "1. Empathie et comprÃ©hension Ã©motionnelle",
        blog_cb_p7: "Human agents offer something chatbots cannotâ€”real emotional connection. They can sense frustration, happiness or confusion through tone & conversation flow. This helps customers feel understood, especially during stressful or sensitive issues. Empathy builds trust, reduces conflict & makes the customer feel valued as a person, not just another ticket.",
        blog_cb_h3_7: "2. RÃ©solution de problÃ¨mes personnalisÃ©e",
        blog_cb_p8: "Humans are naturally creative thinkers. They can analyze a customerâ€™s issue from multiple angles, ask clarifying questions & suggest flexible solutions tailored to individual needs. This is helpful when problems do not follow a standard script. Personalized responses reassure customers that their situation is unique & is being handled by someone who genuinely cares.",
        blog_cb_h3_8: "3. Mieux pour les problÃ¨mes complexes",
        blog_cb_p9: "Some problems require deeper investigation, multiple verification steps or critical judgment. Human agents excel in these situations because they understand context, exceptions & policies better than automated systems. They can coordinate with other departments, interpret unclear information & offer accurate guidance that bots often miss.",
        blog_cb_h3_9: "4. Ã‰tablissement de relations",
        blog_cb_p10: "Strong customer relationships are built through real conversations. A friendly agent can turn a negative experience into a positive one by listening actively & showing patience. Over time, this human touch boosts brand loyalty & increases the chances of repeat business. Customers are more likely to trust companies that treat them like humans rather than transactions.",
        blog_cb_h3_10: "5. ComprÃ©hension culturelle et nuance linguistique",
        blog_cb_p11: "Human agents naturally understand tone, slang, regional expressions & cultural sensitivities. This ensures smoother communication & avoids misunderstandings that bots often face. Whether itâ€™s adjusting language formality or understanding local behavior patterns, humans can adapt instantlyâ€”making the experience more natural & respectful.",
        blog_cb_conclusion_title: "CONCLUSION",
        blog_cb_conclusion_p: "Both chatbots & human support offer unique strengths, making them valuable in different situations. Chatbots are perfect for quick replies, repeated questions & cost-efficient operations. Human agents shine when conversations require emotional care, critical thinking or deep problem-solving. Instead of choosing one over the other, most businesses succeed by blending automation with human expertise. This balanced approach creates faster, smarter & more human-centered support experiences for every customer.",
        blog_back_btn: "Retour au Blog"
    },
    de: {
        nav_home: "Startseite",
        search_placeholder: "Suchen...",
        contact_name_placeholder: "Name",
        contact_email_placeholder: "E-Mail",
        contact_message_placeholder: "Nachricht",
        about_explore: "Erkunden",
        nav_about: "Ãœber Uns",
        nav_services: "Dienstleistungen",
        nav_resources: "Ressourcen",
        nav_contact: "Kontakt",
        hero_title: "Intelligentere LÃ¶sungen fÃ¼r eine Bessere Zukunft",
        hero_subtitle: "IT-LÃ¶sungen | Webentwicklung | KI | SaaS-LÃ¶sung",
        hero_description: "Wir befÃ¤higen Unternehmen mit intelligenten TechnologielÃ¶sungen, die Innovation vorantreiben, Effizienz steigern und nachhaltigen Wert fÃ¼r die digitale Landschaft von morgen schaffen.",
        hero_cta: "Loslegen",
        about_title: "Ãœber Uns",
        about_description: "Navabharath Technologies ist ein fÃ¼hrender IT-LÃ¶sungsanbieter, der sich der Bereitstellung innovativer und robuster digitaler Produkte widmet. Mit einem Team aus erfahrenen Entwicklern und Designern verwandeln wir Ideen in RealitÃ¤t. Unsere Mission ist es, Unternehmen mit skalierbarer und effizienter Technologie zu befÃ¤higen.",
        about_feature1: "Innovative LÃ¶sungen",
        about_feature2: "Kundenorientierter Ansatz",
        about_feature3: "Expertenteam",
        services_title: "Unsere Dienstleistungen",
        services_subtitle: "Umfassende LÃ¶sungen fÃ¼r Ihre GeschÃ¤ftsanforderungen",
        service1_title: "Webentwicklung",
        service1_description: "MaÃŸgeschneiderte Websites, die mit modernen Technologien erstellt wurden, um Leistung und Skalierbarkeit zu gewÃ¤hrleisten.",
        service2_title: "Mobile App-Entwicklung",
        service2_description: "Native und plattformÃ¼bergreifende mobile Anwendungen, die fÃ¼r nahtlose Benutzererfahrungen entwickelt wurden.",
        service3_title: "Cloud-LÃ¶sungen",
        service3_description: "Sichere und skalierbare Cloud-Infrastruktur-Einrichtung und Verwaltungsdienste.",
        service4_title: "UI/UX-Design",
        service4_description: "Benutzerzentriertes Design, das ansprechende und intuitive digitale Produkte schafft.",
        service5_title: "Digitales Marketing",
        service5_description: "Implementierung intelligenter Marketingstrategien zur Steigerung Ihrer Online-PrÃ¤senz.",
        service6_title: "IVR-LÃ¶sungen",
        service6_description: "Fortschrittliche interaktive Sprachantwortsysteme zur Automatisierung von Kundeninteraktionen und Rationalisierung des Anrufsmanagements mit intelligenten SprachmenÃ¼s.",
        service7_title: "KI-LÃ¶sungen",
        service7_description: "Hochmoderne LÃ¶sungen fÃ¼r kÃ¼nstliche Intelligenz und maschinelles Lernen zur Automatisierung von Prozessen, Verbesserung der Entscheidungsfindung und ErschlieÃŸung datengesteuerter Erkenntnisse fÃ¼r Ihr Unternehmen.",

        // Why Choose Us Section
        why_choose_title: "Warum Navabharath Technologies wÃ¤hlen?",
        why_feature1_title: "ZukunftsfÃ¤hige LÃ¶sungen",
        why_feature1_desc: "Aufbau dauerhafter digitaler Grundlagen.",
        why_feature2_title: "Hohe Sicherheitsstandards",
        why_feature2_desc: "GewÃ¤hrleistung sicherer und geschÃ¼tzter Daten.",
        why_feature3_title: "End-to-End-Entwicklung",
        why_feature3_desc: "Von der Forschung bis zur Bereitstellung und UnterstÃ¼tzung.",
        why_feature4_title: "Ergebnisorientierter Ansatz",
        why_feature4_desc: "Wir konzentrieren uns auf Leistung, Geschwindigkeit und Benutzerfreundlichkeit.",
        why_feature5_title: "Kundenorientiertes Team",
        why_feature5_desc: "Engagierter Support und transparente Kommunikation.",
        why_feature6_title: "DevOps-Dienste",
        why_feature6_desc: "Sichere, skalierbare und zuverlÃ¤ssige Infrastruktur.",

        contact_title: "Kontaktieren Sie Uns",
        contact_subtitle: "Bereit, Ihr Projekt zu starten? Kontaktieren Sie uns noch heute.",
        form_name: "Name",
        form_email: "E-Mail",
        form_message: "Nachricht",
        form_submit: "Nachricht Senden",
        footer_tagline: "StÃ¤rkung Ihrer Digitalen Zukunft",
        footer_links_title: "Unternehmen",
        footer_support: "Support",
        footer_about: "Ãœber",
        footer_services: "Dienstleistungen",
        footer_contact: "Kontakt",
        footer_social_title: "Folgen Sie Uns",
        footer_copyright: "\u00A9 2026 Navabharath Technologies. Alle Rechte vorbehalten.",

        // Explore Page
        explore_banner_title: "Erkunden",
        explore_banner_desc: "Entdecken Sie unsere Reise, Mission und Vision",
        explore_intro_title: "Navabharath Technologies â€” Wachstum durch intelligente IT-LÃ¶sungen fÃ¶rdern",
        explore_intro_desc: "Navabharath Technologies ist ein zukunftsorientiertes IT-LÃ¶sungsunternehmen, das intelligente, skalierbare und ergebnisorientierte digitale Dienste anbietet. Mit einem starken Fokus auf Innovation und kundenorientiertes Design helfen wir Unternehmen, sich in der heutigen schnelllebigen digitalen Welt zu verÃ¤ndern, zu automatisieren und zu wachsen. UnterstÃ¼tzt von einem erfahrenen Team und modernen Technologien gewÃ¤hrleisten wir eine nahtlose AusfÃ¼hrung, optimierte ArbeitsablÃ¤ufe und eine qualitativ hochwertige Lieferung. Unser Engagement fÃ¼r Exzellenz, Transparenz und ZuverlÃ¤ssigkeit macht uns zu einem vertrauenswÃ¼rdigen Partner fÃ¼r Unternehmen jeder GrÃ¶ÃŸe.",
        explore_what_do_title: "Was Wir Tun",
        explore_what_do_1: "Erstellung maÃŸgeschneiderter Websites, Anwendungen und digitaler Produkte, die auf langfristige Leistung ausgelegt sind.",
        explore_what_do_2: "Intelligente Strategien und Technologien, die Ihren Zielen und ArbeitsablÃ¤ufen entsprechen.",
        explore_what_do_3: "Robuste, zuverlÃ¤ssige und optimierte digitale Systeme fÃ¼r maximale Effizienz.",
        explore_what_do_4: "LÃ¶sungen, die im Hinblick auf Benutzerfreundlichkeit, Erfahrung und geschÃ¤ftliche Auswirkungen entwickelt wurden.",
        explore_mission_title: "Unsere Mission",
        explore_mission_p1: "Unsere Mission ist es, Unternehmen mit fortschrittlichen digitalen LÃ¶sungen zu stÃ¤rken, die das Wachstum beschleunigen und ihren Wettbewerbsvorteil stÃ¤rken. Wir konzentrieren uns auf die Verbesserung der betrieblichen Effizienz durch intelligente, automatisierte und skalierbare Technologien, die jeden Arbeitsablauf rationalisieren. Durch die Bereitstellung hochwertiger digitaler Erlebnisse stellen wir den langfristigen Erfolg und die nachhaltige Entwicklung unserer Kunden sicher. Wir innovieren stÃ¤ndig und passen uns den sich entwickelnden Branchenanforderungen an, um moderne, zukunftsfÃ¤hige LÃ¶sungen zu liefern. Durch unser Engagement fÃ¼r Exzellenz streben wir danach, sinnvollen Wert zu schaffen und Unternehmen dabei zu helfen, intelligenter, schneller und effizienter zu arbeiten.",
        explore_vision_title: "Unsere Vision",
        explore_vision_p1: "Unsere Vision ist es, ein weltweit fÃ¼hrender Anbieter von digitaler Transformation zu sein, der fÃ¼r seine FÃ¤higkeit bekannt ist, komplexe Herausforderungen in einfache, effektive technologische LÃ¶sungen umzuwandeln. Wir streben danach, eine Zukunft aufzubauen, in der jedes Unternehmen, unabhÃ¤ngig von seiner GrÃ¶ÃŸe, Zugang zu den Tools hat, die es benÃ¶tigt, um in einer digitalen Wirtschaft erfolgreich zu sein. Durch die FÃ¶rderung einer Kultur der KreativitÃ¤t, IntegritÃ¤t und Zusammenarbeit wollen wir neue Standards in der IT-Branche setzen. Wir sehen uns als Katalysatoren fÃ¼r VerÃ¤nderungen, die Fortschritt und Innovation vorantreiben, die nicht nur unseren Kunden zugutekommen, sondern auch zu einer vernetzteren und effizienteren Welt beitragen.",
        explore_values_title: "Was Wir Tun",
        explore_what_we_do_p1: "Wir sind auf eine breite Palette von IT-Dienstleistungen spezialisiert, die auf die unterschiedlichen BedÃ¼rfnisse moderner Unternehmen zugeschnitten sind. Von der Entwicklung kundenspezifischer Software und der Erstellung mobiler Apps bis hin zu Cloud Computing und Datenanalyse bieten wir End-to-End-LÃ¶sungen, die Ergebnisse liefern. Unser Expertenteam arbeitet eng mit Kunden zusammen, um ihre einzigartigen Herausforderungen und Ziele zu verstehen und maÃŸgeschneiderte Strategien zu liefern, die den ROI maximieren. Egal, ob Sie Legacy-Systeme modernisieren, ein neues digitales Produkt von Grund auf neu erstellen oder Ihre bestehende Infrastruktur optimieren mÃ¼ssen, wir verfÃ¼gen Ã¼ber das Fachwissen und die Erfahrung, um Ihnen zum Erfolg zu verhelfen.",
        explore_trust_title: "Warum Unternehmen uns vertrauen",
        explore_trust_1_title: "1. Innovationsgetriebener Ansatz",
        explore_trust_1_desc: "Wir verwenden moderne Tools und Best Practices, um zukunftsfÃ¤hige LÃ¶sungen zu liefern.",
        explore_trust_2_title: "2. Kundenorientierte AusfÃ¼hrung",
        explore_trust_2_desc: "Jedes Projekt ist auf Ihre GeschÃ¤ftsziele und ArbeitsablÃ¤ufe zugeschnitten.",
        explore_trust_3_title: "3. Qualifizierte Fachleute",
        explore_trust_3_desc: "Ein Team, das KreativitÃ¤t, Fachwissen und Branchenkenntnisse vereint.",
        explore_trust_4_title: "4. QualitÃ¤t und Transparenz",
        explore_trust_4_desc: "Klare Kommunikation, zuverlÃ¤ssige Prozesse und pÃ¼nktliche Lieferung in jeder Phase.",

        // Blog Page
        blog_banner_title: "Unser Blog",
        blog_banner_desc: "Einblicke, Updates und Expertenmeinungen aus der Welt der Technologie.",
        blog_post1_title: "Chatbots vs. Menschlicher Support: Was ist Besser fÃ¼r Ihr Unternehmen?",
        blog_post1_excerpt: "Erfahren Sie, wie Chatbots und menschlicher Support den Kundenservice verÃ¤ndern, und lernen Sie, welcher Ansatz fÃ¼r Ihr Unternehmen am besten funktioniert.",
        blog_post2_title: "Wesentliche Best Practices fÃ¼r Cloud-Sicherheit",
        blog_post2_excerpt: "Da Unternehmen in die Cloud wechseln, ist Sicherheit von grÃ¶ÃŸter Bedeutung. Lernen Sie die besten Strategien zum Schutz Ihrer digitalen Assets.",
        blog_post3_title: "Top Webentwicklungstrends fÃ¼r 2026",
        blog_post3_excerpt: "Bleiben Sie mit unserer Analyse der aufkommenden Trends, die das Internet im nÃ¤chsten Jahr prÃ¤gen werden, immer einen Schritt voraus.",
        read_more: "Mehr Lesen",

        // Resources Page
        resources_intro_title: "Wissenszentrum",
        resources_intro_desc: "Entdecken Sie von Experten kuratierte Ressourcen, Schritt-fÃ¼r-Schritt-Anleitungen und Brancheneinblicke.",
        resource_card1_title: "Dokumentation",
        resource_card1_desc: "Umfassende LeitfÃ¤den und technische Dokumentation fÃ¼r unsere Dienstleistungen und LÃ¶sungen.",
        resource_view_btn: "Dokumentation Anzeigen",
        resource_card2_title: "Blog & Einblicke",
        resource_card2_desc: "Bleiben Sie auf dem Laufenden mit den neuesten Trends, Tipps und Einblicken unseres Expertenteams.",
        resource_read_btn: "Blog Lesen",
        resource_card3_title: "Video-Tutorials",
        resource_card3_desc: "Sehen Sie sich Schritt-fÃ¼r-Schritt-Video-Tutorials und Webinare zu verschiedenen Themen an.",
        resource_watch_btn: "Videos Ansehen",
        resource_card4_title: "Downloads",
        resource_card4_desc: "Greifen Sie auf Whitepapers, Fallstudien und herunterladbare Ressourcen zu.",
        resource_download_btn: "Downloads Erhalten",
        resource_card5_title: "FAQ",
        resource_card5_desc: "Finden Sie Antworten auf hÃ¤ufig gestellte Fragen zu unseren Dienstleistungen.",
        resource_faq_btn: "FAQ Anzeigen",
        resource_card6_title: "Entwicklertools",
        resource_card6_desc: "Zugriff auf APIs, SDKs und Entwicklertools zur Integration unserer LÃ¶sungen.",
        resource_tools_btn: "Tools Erkunden",

        // Chatbot Blog
        blog_cb_title: "Chatbots vs. Menschlicher Support: Was ist das Beste fÃ¼r Ihr Unternehmen?",
        blog_cb_date: "15. Dez. 2025",
        blog_cb_author: "Technik-Team",
        blog_cb_p1: "Customer expectations are rising faster than ever, pushing businesses to rethink how they deliver support. Both chatbots & human agents play powerful roles in shaping overall customer experiences. While automation can handle quick responses, real conversations still rely on emotional intelligence. Choosing the right balance impacts customer satisfaction, response time & operational cost. This article helps you understand where each option shines so you can decide what fits your business best.",
        blog_cb_h2_1: "1. StÃ¤rken des Chatbot-Supports",
        blog_cb_key_adv: "Hauptvorteile",
        blog_cb_h3_1: "Sofortige Antworten",
        blog_cb_p2: "Chatbots reply within seconds, helping businesses reduce wait times & handle peak hours efficiently.",
        blog_cb_h3_2: "24/7 VerfÃ¼gbarkeit",
        blog_cb_p3: "Bots remain active day & night, ensuring customers get basic information, troubleshooting steps & updates anytime.",
        blog_cb_h3_3: "KostengÃ¼nstiger Betrieb",
        blog_cb_p4: "Companies save on hiring & training costs since chatbots can manage repeated queries with consistent accuracy.",
        blog_cb_h3_4: "Skalierbarkeit bei hoher Nachfrage",
        blog_cb_p5: "A single bot can talk to thousands of customers at once, making it ideal for fast-growing businesses.",
        blog_cb_h3_5: "Datenerfassung & Einblicke",
        blog_cb_p6: "Bots automatically gather customer patterns, helping brands boost personalization & service quality.",
        blog_cb_quote: "\"Imagine a world where your customers never have to wait. It's 2 AM, and a frustrated user needs a quick answerâ€”your chatbot is there instantly, a tireless digital guardian awake while the city sleeps. But when the problem gets tough, thatâ€™s when the human touch steps in. Like a skilled diplomat, your human agent takes over, bringing empathy and deep understanding to complex issues that code simply cannot solve. This powerful duoâ€”the speed of automation and the warmth of humanityâ€”creates a support experience that doesn't just solve problems, but builds lasting trust.\"",
        blog_cb_h2_2: "2. StÃ¤rken des menschlichen Supports",
        blog_cb_h3_6: "1. Empathie & Emotionales VerstÃ¤ndnis",
        blog_cb_p7: "Human agents offer something chatbots cannotâ€”real emotional connection. They can sense frustration, happiness or confusion through tone & conversation flow. This helps customers feel understood, especially during stressful or sensitive issues. Empathy builds trust, reduces conflict & makes the customer feel valued as a person, not just another ticket.",
        blog_cb_h3_7: "2. Personalisierte ProblemlÃ¶sung",
        blog_cb_p8: "Humans are naturally creative thinkers. They can analyze a customerâ€™s issue from multiple angles, ask clarifying questions & suggest flexible solutions tailored to individual needs. This is helpful when problems do not follow a standard script. Personalized responses reassure customers that their situation is unique & is being handled by someone who genuinely cares.",
        blog_cb_h3_8: "3. Besser fÃ¼r komplizierte Probleme",
        blog_cb_p9: "Some problems require deeper investigation, multiple verification steps or critical judgment. Human agents excel in these situations because they understand context, exceptions & policies better than automated systems. They can coordinate with other departments, interpret unclear information & offer accurate guidance that bots often miss.",
        blog_cb_h3_9: "4. Beziehungsaufbau",
        blog_cb_p10: "Strong customer relationships are built through real conversations. A friendly agent can turn a negative experience into a positive one by listening actively & showing patience. Over time, this human touch boosts brand loyalty & increases the chances of repeat business. Customers are more likely to trust companies that treat them like humans rather than transactions.",
        blog_cb_h3_10: "5. Kulturelles VerstÃ¤ndnis & Sprachnuancen",
        blog_cb_p11: "Human agents naturally understand tone, slang, regional expressions & cultural sensitivities. This ensures smoother communication & avoids misunderstandings that bots often face. Whether itâ€™s adjusting language formality or understanding local behavior patterns, humans can adapt instantlyâ€”making the experience more natural & respectful.",
        blog_cb_conclusion_title: "FAZIT",
        blog_cb_conclusion_p: "Both chatbots & human support offer unique strengths, making them valuable in different situations. Chatbots are perfect for quick replies, repeated questions & cost-efficient operations. Human agents shine when conversations require emotional care, critical thinking or deep problem-solving. Instead of choosing one over the other, most businesses succeed by blending automation with human expertise. This balanced approach creates faster, smarter & more human-centered support experiences for every customer.",
        blog_back_btn: "ZurÃ¼ck zum Blog"
    },
    it: {
        nav_home: "Home",
        search_placeholder: "Cerca...",
        contact_name_placeholder: "Nome",
        contact_email_placeholder: "Email",
        contact_message_placeholder: "Messaggio",
        about_explore: "Esplora",
        nav_about: "Chi Siamo",
        nav_services: "Servizi",
        nav_resources: "Risorse",
        nav_contact: "Contatti",
        hero_title: "Soluzioni PiÃ¹ Intelligenti per un Futuro Migliore",
        hero_subtitle: "Soluzioni IT | Sviluppo Web | AI | Soluzione SaaS",
        hero_description: "Diamo alle aziende soluzioni tecnologiche intelligenti che guidano l'innovazione, migliorano l'efficienza e creano valore sostenibile per il panorama digitale di domani.",
        hero_cta: "Inizia",
        about_title: "Chi Siamo",
        about_description: "Navabharath Technologies Ã¨ un fornitore leader di soluzioni IT dedicato alla fornitura di prodotti digitali innovativi e robusti. Con un team di sviluppatori e designer esperti, trasformiamo le idee in realtÃ . La nostra missione Ã¨ dare alle aziende una tecnologia scalabile ed efficiente.",
        about_feature1: "Soluzioni Innovative",
        about_feature2: "Approccio Centrato sul Cliente",
        about_feature3: "Team di Esperti",

        // Blog Page
        blog_banner_title: "Il Nostro Blog",
        blog_banner_desc: "Approfondimenti, aggiornamenti e opinioni di esperti dal mondo della tecnologia.",
        blog_post1_title: "Chatbot vs Supporto Umano: Qual Ã¨ il Migliore per la Tua Azienda?",
        blog_post1_excerpt: "Esplora come i chatbot e il supporto umano stanno ridisegnando il servizio clienti e scopri quale approccio funziona meglio per la tua azienda.",
        blog_post2_title: "Best Practice Essenziali per la Sicurezza Cloud",
        blog_post2_excerpt: "Mentre le aziende si spostano sul cloud, la sicurezza Ã¨ fondamentale. Scopri le migliori strategie per proteggere i tuoi asset digitali e dati.",
        blog_post3_title: "Principali Tendenze di Sviluppo Web per il 2026",
        blog_post3_excerpt: "Resta al passo con la nostra analisi delle tendenze emergenti che plasmeranno internet il prossimo anno.",
        read_more: "Leggi Di PiÃ¹",

        // Resources Page
        resources_intro_title: "Knowledge Hub",
        resources_intro_desc: "Scopri risorse curate da esperti, guide passo-passo e approfondimenti del settore.",
        resource_card1_title: "Documentazione",
        resource_card1_desc: "Guide complete e documentazione tecnica per i nostri servizi e soluzioni.",
        resource_view_btn: "Visualizza Documentazione",
        resource_card2_title: "Blog & Approfondimenti",
        resource_card2_desc: "Resta aggiornato sulle ultime tendenze, suggerimenti e approfondimenti.",
        resource_read_btn: "Leggi Blog",
        resource_card3_title: "Video Tutorial",
        resource_card3_desc: "Guarda video tutorial passo-passo e webinar su vari argomenti.",
        resource_watch_btn: "Guarda Video",
        resource_card4_title: "Download",
        resource_card4_desc: "Accedi a whitepaper, case study e risorse scaricabili.",
        resource_download_btn: "Ottieni Download",
        resource_card5_title: "FAQ",
        resource_card5_desc: "Trova risposte alle domande frequenti sui nostri servizi.",
        resource_faq_btn: "Visualizza FAQ",
        resource_card6_title: "Strumenti per Sviluppatori",
        resource_card6_desc: "Accedi ad API, SDK e strumenti per sviluppatori per integrare le nostre soluzioni.",
        resource_tools_btn: "Esplora Strumenti",
        services_title: "I Nostri Servizi",
        services_subtitle: "Soluzioni complete per le esigenze della tua azienda",
        service1_title: "Sviluppo Web",
        service1_description: "Siti web personalizzati costruiti con tecnologie moderne per garantire prestazioni e scalabilitÃ .",
        service2_title: "Sviluppo App Mobile",
        service2_description: "Applicazioni mobili native e multipiattaforma progettate per esperienze utente fluide.",
        service3_title: "Soluzioni Cloud",
        service3_description: "Configurazione e gestione di infrastrutture cloud sicure e scalabili.",
        service4_title: "Design UI/UX",
        service4_description: "Design incentrato sull'utente che crea prodotti digitali coinvolgenti e intuitivi.",
        service5_title: "Marketing Digitale",
        service5_description: "Implementazione di strategie di marketing intelligenti per potenziare la tua presenza online.",
        service6_title: "Soluzioni IVR",
        service6_description: "Sistemi avanzati di Risposta Vocale Interattiva per automatizzare le interazioni con i clienti e ottimizzare la gestione delle chiamate con menu vocali intelligenti.",
        service7_title: "Soluzioni AI",
        service7_description: "Soluzioni di intelligenza artificiale e machine learning all'avanguardia per automatizzare i processi, migliorare il processo decisionale e sbloccare insight basati sui dati per la tua azienda.",

        // Why Choose Us Section
        why_choose_title: "PerchÃ© Scegliere Navabharath Technologies?",
        why_feature1_title: "Soluzioni Pronte per il Futuro",
        why_feature1_desc: "Costruire fondamenta digitali durature.",
        why_feature2_title: "Elevati Standard di Sicurezza",
        why_feature2_desc: "Garantire dati sicuri e protetti.",
        why_feature3_title: "Sviluppo End-to-End",
        why_feature3_desc: "Dalla ricerca allo sviluppo e supporto.",
        why_feature4_title: "Approccio Orientato ai Risultati",
        why_feature4_desc: "Ci concentriamo su prestazioni, velocitÃ  e usabilitÃ .",
        why_feature5_title: "Team Centrato sul Cliente",
        why_feature5_desc: "Supporto dedicato e comunicazione trasparente.",
        why_feature6_title: "Servizi DevOps",
        why_feature6_desc: "Infrastruttura sicura, scalabile e affidabile.",

        contact_title: "Contattaci",
        contact_subtitle: "Pronto per iniziare il tuo progetto? Mettiti in contatto con noi oggi.",
        form_name: "Nome",
        form_email: "Email",
        form_message: "Messaggio",
        form_submit: "Invia Messaggio",
        footer_tagline: "Potenziare il Tuo Futuro Digitale",
        footer_links_title: "Azienda",
        footer_support: "Supporto",
        footer_about: "Chi Siamo",
        footer_services: "Servizi",
        footer_contact: "Contatti",
        footer_social_title: "Seguici",
        footer_copyright: "\u00A9 2026 Navabharath Technologies. Tutti i diritti riservati.",

        // Explore Page
        explore_banner_title: "Esplora",
        explore_banner_desc: "Scopri il nostro viaggio, la nostra missione e la nostra visione",
        explore_intro_title: "Navabharath Technologies â€” Favorire la crescita attraverso soluzioni IT intelligenti",
        explore_intro_desc: "Navabharath Technologies Ã¨ un'azienda di soluzioni IT lungimirante che fornisce servizi digitali intelligenti, scalabili e orientati ai risultati. Con una forte attenzione all'innovazione e al design centrato sul cliente, aiutiamo le aziende a trasformarsi, automatizzare e crescere nel frenetico mondo digitale di oggi. Supportati da un team di esperti e tecnologie moderne, garantiamo un'esecuzione senza interruzioni, flussi di lavoro ottimizzati e consegne di alta qualitÃ . La nostra dedizione all'eccellenza, trasparenza e affidabilitÃ  ci rende un partner fidato per aziende di tutte le dimensioni.",
        explore_what_do_title: "Cosa Facciamo",
        explore_what_do_1: "Creazione di siti Web, applicazioni e prodotti digitali personalizzati progettati per prestazioni a lungo termine.",
        explore_what_do_2: "Strategie e tecnologie intelligenti che corrispondono ai tuoi obiettivi e flussi di lavoro.",
        explore_what_do_3: "Sistemi digitali robusti, affidabili e ottimizzati per la massima efficienza.",
        explore_what_do_4: "Soluzioni realizzate pensando all'usabilitÃ , all'esperienza e all'impatto aziendale.",
        explore_mission_title: "La Nostra Missione",
        explore_mission_p1: "La nostra missione Ã¨ dare potere alle aziende con soluzioni digitali avanzate che accelerano la crescita e rafforzano il loro vantaggio competitivo. Ci concentriamo sul miglioramento dell'efficienza operativa attraverso tecnologie intelligenti, automatizzate e scalabili che semplificano ogni flusso di lavoro. Fornendo esperienze digitali di alta qualitÃ , garantiamo il successo a lungo termine e lo sviluppo sostenibile per i nostri clienti. Innoviamo e ci adattiamo continuamente alle esigenze del settore in evoluzione per fornire soluzioni moderne e pronte per il futuro. Attraverso il nostro impegno per l'eccellenza, ci sforziamo di creare un valore significativo e aiutare le aziende a operare in modo piÃ¹ intelligente, veloce ed efficiente.",
        explore_vision_title: "La Nostra Visione",
        explore_vision_p1: "La nostra visione Ã¨ quella di essere un leader globale nella trasformazione digitale, riconosciuto per la nostra capacitÃ  di trasformare sfide complesse in soluzioni tecnologiche semplici ed efficaci. Aspiriamo a costruire un futuro in cui ogni azienda, indipendentemente dalle dimensioni, abbia accesso agli strumenti di cui ha bisogno per prosperare in un'economia digital-first. Promuovendo una cultura di creativitÃ , integritÃ  e collaborazione, miriamo a stabilire nuovi standard nel settore IT. Ci vediamo come catalizzatori del cambiamento, guidando il progresso e l'innovazione che non solo avvantaggiano i nostri clienti ma contribuiscono anche a un mondo piÃ¹ connesso ed efficiente.",
        explore_values_title: "Cosa Facciamo",
        explore_what_we_do_p1: "Siamo specializzati in una vasta gamma di servizi IT progettati per soddisfare le diverse esigenze delle imprese moderne. Dallo sviluppo di software personalizzato e la creazione di app mobili al cloud computing e all'analisi dei dati, offriamo soluzioni end-to-end che portano risultati. Il nostro team di esperti lavora a stretto contatto con i clienti per comprendere le loro sfide e obiettivi unici, fornendo strategie su misura che massimizzano il ROI. Sia che tu abbia bisogno di modernizzare i sistemi legacy, costruire un nuovo prodotto digitale da zero o ottimizzare la tua infrastruttura esistente, abbiamo l'esperienza e l'esperienza per aiutarti ad avere successo.",
        explore_trust_title: "PerchÃ© Le Aziende Si Fidano Di Noi",
        explore_trust_1_title: "1. Approccio Guidato dall'Innovazione",
        explore_trust_1_desc: "Utilizziamo strumenti moderni e best practice per fornire soluzioni pronte per il futuro.",
        explore_trust_2_title: "2. Esecuzione Centrata sul Cliente",
        explore_trust_2_desc: "Ogni progetto Ã¨ personalizzato per i tuoi obiettivi aziendali e flussi di lavoro.",
        explore_trust_3_title: "3. Professionisti Qualificati",
        explore_trust_3_desc: "Un team che unisce creativitÃ , competenza e conoscenza del settore.",
        explore_trust_4_title: "4. QualitÃ  e Trasparenza",
        explore_trust_4_desc: "Comunicazione chiara, processi affidabili e consegna puntuale in ogni fase.",

        // Chatbot Blog
        blog_cb_title: "Chatbot vs Supporto Umano: Qual Ã¨ il Migliore per la Tua Azienda?",
        blog_cb_date: "15 Dic 2025",
        blog_cb_author: "Team Tecnico",
        blog_cb_p1: "Customer expectations are rising faster than ever, pushing businesses to rethink how they deliver support. Both chatbots & human agents play powerful roles in shaping overall customer experiences. While automation can handle quick responses, real conversations still rely on emotional intelligence. Choosing the right balance impacts customer satisfaction, response time & operational cost. This article helps you understand where each option shines so you can decide what fits your business best.",
        blog_cb_h2_1: "1. Punti di Forza del Supporto Chatbot",
        blog_cb_key_adv: "Vantaggi Chiave",
        blog_cb_h3_1: "Risposte Istantanee",
        blog_cb_p2: "Chatbots reply within seconds, helping businesses reduce wait times & handle peak hours efficiently.",
        blog_cb_h3_2: "DisponibilitÃ  24/7",
        blog_cb_p3: "Bots remain active day & night, ensuring customers get basic information, troubleshooting steps & updates anytime.",
        blog_cb_h3_3: "Operazioni Convenienti",
        blog_cb_p4: "Companies save on hiring & training costs since chatbots can manage repeated queries with consistent accuracy.",
        blog_cb_h3_4: "ScalabilitÃ  durante la forte domanda",
        blog_cb_p5: "A single bot can talk to thousands of customers at once, making it ideal for fast-growing businesses.",
        blog_cb_h3_5: "Raccolta Dati e Approfondimenti",
        blog_cb_p6: "Bots automatically gather customer patterns, helping brands boost personalization & service quality.",
        blog_cb_quote: "\"Imagine a world where your customers never have to wait. It's 2 AM, and a frustrated user needs a quick answerâ€”your chatbot is there instantly, a tireless digital guardian awake while the city sleeps. But when the problem gets tough, thatâ€™s when the human touch steps in. Like a skilled diplomat, your human agent takes over, bringing empathy and deep understanding to complex issues that code simply cannot solve. This powerful duoâ€”the speed of automation and the warmth of humanityâ€”creates a support experience that doesn't just solve problems, but builds lasting trust.\"",
        blog_cb_h2_2: "2. Punti di Forza del Supporto Umano",
        blog_cb_h3_6: "1. Empatia e Comprensione Emotiva",
        blog_cb_p7: "Human agents offer something chatbots cannotâ€”real emotional connection. They can sense frustration, happiness or confusion through tone & conversation flow. This helps customers feel understood, especially during stressful or sensitive issues. Empathy builds trust, reduces conflict & makes the customer feel valued as a person, not just another ticket.",
        blog_cb_h3_7: "2. Risoluzione Problemi Personalizzata",
        blog_cb_p8: "Humans are naturally creative thinkers. They can analyze a customerâ€™s issue from multiple angles, ask clarifying questions & suggest flexible solutions tailored to individual needs. This is helpful when problems do not follow a standard script. Personalized responses reassure customers that their situation is unique & is being handled by someone who genuinely cares.",
        blog_cb_h3_8: "3. Meglio per Problemi Complicati",
        blog_cb_p9: "Some problems require deeper investigation, multiple verification steps or critical judgment. Human agents excel in these situations because they understand context, exceptions & policies better than automated systems. They can coordinate with other departments, interpret unclear information & offer accurate guidance that bots often miss.",
        blog_cb_h3_9: "4. Costruzione di Relazioni",
        blog_cb_p10: "Strong customer relationships are built through real conversations. A friendly agent can turn a negative experience into a positive one by listening actively & showing patience. Over time, this human touch boosts brand loyalty & increases the chances of repeat business. Customers are more likely to trust companies that treat them like humans rather than transactions.",
        blog_cb_h3_10: "5. Comprensione Culturale e Sfumature Linguistiche",
        blog_cb_p11: "Human agents naturally understand tone, slang, regional expressions & cultural sensitivities. This ensures smoother communication & avoids misunderstandings that bots often face. Whether itâ€™s adjusting language formality or understanding local behavior patterns, humans can adapt instantlyâ€”making the experience more natural & respectful.",
        blog_cb_conclusion_title: "CONCLUSIONE",
        blog_cb_conclusion_p: "Both chatbots & human support offer unique strengths, making them valuable in different situations. Chatbots are perfect for quick replies, repeated questions & cost-efficient operations. Human agents shine when conversations require emotional care, critical thinking or deep problem-solving. Instead of choosing one over the other, most businesses succeed by blending automation with human expertise. This balanced approach creates faster, smarter & more human-centered support experiences for every customer.",
        blog_back_btn: "Torna al Blog"
    },
    pt: {
        nav_home: "InÃ­cio",
        search_placeholder: "Buscar...",
        contact_name_placeholder: "Nome",
        contact_email_placeholder: "E-mail",
        contact_message_placeholder: "Mensagem",
        about_explore: "Explorar",
        nav_about: "Sobre NÃ³s",
        nav_services: "ServiÃ§os",
        nav_resources: "Recursos",
        nav_contact: "Contato",
        hero_title: "SoluÃ§Ãµes Mais Inteligentes para um Futuro Melhor",
        hero_subtitle: "SoluÃ§Ãµes de TI | Desenvolvimento Web | IA | SoluÃ§Ã£o SaaS",
        hero_description: "Capacitamos empresas com soluÃ§Ãµes tecnolÃ³gicas inteligentes que impulsionam a inovaÃ§Ã£o, aumentam a eficiÃªncia e criam valor sustentÃ¡vel para o cenÃ¡rio digital de amanhÃ£.",
        hero_cta: "ComeÃ§ar",
        about_title: "Sobre NÃ³s",
        about_description: "Navabharath Technologies Ã© um fornecedor lÃ­der de soluÃ§Ãµes de TI dedicado a fornecer produtos digitais inovadores e robustos. Com uma equipe de desenvolvedores e designers especializados, transformamos ideias em realidade. Nossa missÃ£o Ã© capacitar empresas com tecnologia escalÃ¡vel e eficiente.",
        about_feature1: "SoluÃ§Ãµes Inovadoras",
        about_feature2: "Abordagem Centrada no Cliente",
        about_feature3: "Equipe Especializada",
        services_title: "Nossos ServiÃ§os",
        services_subtitle: "SoluÃ§Ãµes abrangentes para as necessidades do seu negÃ³cio",
        service1_title: "Desenvolvimento Web",
        service1_description: "Sites personalizados construÃ­dos com tecnologias modernas para garantir desempenho e escalabilidade.",
        service2_title: "Desenvolvimento de Aplicativos MÃ³veis",
        service2_description: "Aplicativos mÃ³veis nativos e multiplataforma projetados para experiÃªncias de usuÃ¡rio perfeitas.",
        service3_title: "SoluÃ§Ãµes em Nuvem",
        service3_description: "ConfiguraÃ§Ã£o e gerenciamento de infraestrutura em nuvem segura e escalÃ¡vel.",
        service4_title: "Design UI/UX",
        service4_description: "Design centrado no usuÃ¡rio que cria produtos digitais envolventes e intuitivos.",
        service5_title: "Marketing Digital",
        service5_description: "ImplementaÃ§Ã£o de estratÃ©gias de marketing inteligentes para impulsionar sua presenÃ§a online.",
        service6_title: "SoluÃ§Ãµes IVR",
        service6_description: "Sistemas avanÃ§ados de Resposta de Voz Interativa para automatizar interaÃ§Ãµes com clientes e otimizar o gerenciamento de chamadas com menus de voz inteligentes.",
        service7_title: "SoluÃ§Ãµes de IA",
        service7_description: "SoluÃ§Ãµes de inteligÃªncia artificial e aprendizado de mÃ¡quina de ponta para automatizar processos, aprimorar a tomada de decisÃµes e desbloquear insights baseados em dados para o seu negÃ³cio.",

        // Why Choose Us Section
        why_choose_title: "Por que escolher a Navabharath Technologies?",
        why_feature1_title: "SoluÃ§Ãµes Prontas para o Futuro",
        why_feature1_desc: "Construindo bases digitais duradouras.",
        why_feature2_title: "Altos PadrÃµes de SeguranÃ§a",
        why_feature2_desc: "Garantindo dados seguros e protegidos.",
        why_feature3_title: "Desenvolvimento de Ponta a Ponta",
        why_feature3_desc: "Da pesquisa Ã  implantaÃ§Ã£o e suporte.",
        why_feature4_title: "Abordagem Orientada a Resultados",
        why_feature4_desc: "Focamos em desempenho, velocidade e usabilidade.",
        why_feature5_title: "Equipe Centrada no Cliente",
        why_feature5_desc: "Suporte dedicado e comunicaÃ§Ã£o transparente.",
        why_feature6_title: "ServiÃ§os DevOps",
        why_feature6_desc: "Infraestrutura segura, escalÃ¡vel e confiÃ¡vel.",

        contact_title: "Entre em Contato",
        contact_subtitle: "Pronto para iniciar seu projeto? Entre em contato conosco hoje.",
        form_name: "Nome",
        form_email: "E-mail",
        form_message: "Mensagem",
        form_submit: "Enviar Mensagem",
        footer_tagline: "Capacitando Seu Futuro Digital",
        footer_links_title: "Empresa",
        footer_support: "Suporte",
        footer_about: "Sobre",
        footer_services: "ServiÃ§os",
        footer_contact: "Contato",
        footer_social_title: "Siga-nos",
        footer_copyright: "\u00A9 2026 Navabharath Technologies. Todos os direitos reservados.",

        // Explore Page
        explore_banner_title: "Explorar",
        explore_banner_desc: "Descubra nossa jornada, missÃ£o e visÃ£o",
        explore_intro_title: "Navabharath Technologies â€” Impulsionando o crescimento atravÃ©s de soluÃ§Ãµes de TI inteligentes",
        explore_intro_desc: "A Navabharath Technologies Ã© uma empresa de soluÃ§Ãµes de TI com visÃ£o de futuro que fornece serviÃ§os digitais inteligentes, escalÃ¡veis e orientados a resultados. Com um forte foco em inovaÃ§Ã£o e design centrado no cliente, ajudamos as empresas a transformar, automatizar e crescer no mundo digital em rÃ¡pida evoluÃ§Ã£o de hoje. Apoiados por uma equipe experiente e tecnologias modernas, garantimos execuÃ§Ã£o perfeita, fluxos de trabalho otimizados e entrega de alta qualidade. Nossa dedicaÃ§Ã£o Ã  excelÃªncia, transparÃªncia e confiabilidade nos torna um parceiro de confianÃ§a para empresas de todos os tamanhos.",
        explore_what_do_title: "O Que Fazemos",
        explore_what_do_1: "ConstruÃ§Ã£o de sites personalizados, aplicativos e produtos digitais projetados para desempenho de longo prazo.",
        explore_what_do_2: "EstratÃ©gias e tecnologias inteligentes que correspondem aos seus objetivos e fluxo de trabalho.",
        explore_what_do_3: "Sistemas digitais robustos, confiÃ¡veis e otimizados para mÃ¡xima eficiÃªncia.",
        explore_what_do_4: "SoluÃ§Ãµes criadas com usabilidade, experiÃªncia e impacto nos negÃ³cios em mente.",
        explore_mission_title: "Nossa MissÃ£o",
        explore_mission_p1: "Nossa missÃ£o Ã© capacitar empresas com soluÃ§Ãµes digitais avanÃ§adas que aceleram o crescimento e fortalecem sua vantagem competitiva. NÃ³s nos concentramos em melhorar a eficiÃªncia operacional por meio de tecnologias inteligentes, automatizadas e escalÃ¡veis que agilizam cada fluxo de trabalho. Ao oferecer experiÃªncias digitais de alta qualidade, garantimos sucesso a longo prazo e desenvolvimento sustentÃ¡vel para nossos clientes. Inovamos e nos adaptamos continuamente Ã s necessidades em evoluÃ§Ã£o da indÃºstria para fornecer soluÃ§Ãµes modernas e prontas para o futuro. AtravÃ©s do nosso compromisso com a excelÃªncia, nos esforÃ§amos para criar valor significativo e ajudar as empresas a operar de forma mais inteligente, rÃ¡pida e eficiente.",
        explore_vision_title: "Nossa VisÃ£o",
        explore_vision_p1: "Nossa visÃ£o Ã© ser um lÃ­der global em transformaÃ§Ã£o digital, reconhecido por nossa capacidade de transformar desafios complexos em soluÃ§Ãµes tecnolÃ³gicas simples e eficazes. Aspiramos construir um futuro onde cada empresa, independentemente do tamanho, tenha acesso Ã s ferramentas de que precisa para prosperar em uma economia digital em primeiro lugar. Ao promover uma cultura de criatividade, integridade e colaboraÃ§Ã£o, pretendemos estabelecer novos padrÃµes na indÃºstria de TI. Vemos a nÃ³s mesmos como catalisadores de mudanÃ§a, impulsionando o progresso e a inovaÃ§Ã£o que nÃ£o apenas beneficiam nossos clientes, mas tambÃ©m contribuem para um mundo mais conectado e eficiente.",
        explore_values_title: "O Que Fazemos",
        explore_what_we_do_p1: "Somos especializados em uma ampla gama de serviÃ§os de TI projetados para atender Ã s diversas necessidades das empresas modernas. Desde o desenvolvimento de software personalizado e a criaÃ§Ã£o de aplicativos mÃ³veis atÃ© computaÃ§Ã£o em nuvem e anÃ¡lise de dados, oferecemos soluÃ§Ãµes de ponta a ponta que geram resultados. Nossa equipe de especialistas trabalha em estreita colaboraÃ§Ã£o com os clientes para entender seus desafios e objetivos Ãºnicos, fornecendo estratÃ©gias personalizadas que maximizam o ROI. Se vocÃª precisa modernizar sistemas legados, construir um novo produto digital do zero ou otimizar sua infraestrutura existente, temos a experiÃªncia e a experiÃªncia para ajudÃ¡-lo a ter sucesso.",
        explore_trust_title: "Por Que As Empresas Confiam Em NÃ³s",
        explore_trust_1_title: "1. Abordagem Impulsionada pela InovaÃ§Ã£o",
        explore_trust_1_desc: "Utilizamos ferramentas modernas e melhores prÃ¡ticas para fornecer soluÃ§Ãµes prontas para o futuro.",
        explore_trust_2_title: "2. ExecuÃ§Ã£o Centrada no Cliente",
        explore_trust_2_desc: "Cada projeto Ã© personalizado para seus objetivos de negÃ³cios e fluxos de trabalho.",
        explore_trust_3_title: "3. Profissionais Qualificados",
        explore_trust_3_desc: "Uma equipe que combina criatividade, experiÃªncia e conhecimento do setor.",
        explore_trust_4_title: "4. Qualidade e TransparÃªncia",
        explore_trust_4_desc: "ComunicaÃ§Ã£o clara, processos confiÃ¡veis e entrega pontual em cada estÃ¡gio.",

        // Blog Page
        blog_banner_title: "Nosso Blog",
        blog_banner_desc: "Insights, atualizaÃ§Ãµes e opiniÃµes de especialistas do mundo da tecnologia.",
        blog_post1_title: "Chatbots vs Suporte Humano: O Que Ã© Melhor Para Seu NegÃ³cio?",
        blog_post1_excerpt: "Explore como chatbots e suporte humano estÃ£o reformulando o atendimento ao cliente e saiba qual abordagem funciona melhor para o seu negÃ³cio.",
        blog_post2_title: "Melhores PrÃ¡ticas Essenciais de SeguranÃ§a na Nuvem",
        blog_post2_excerpt: "Conforme as empresas migram para a nuvem, a seguranÃ§a Ã© fundamental. Aprenda as principais estratÃ©gias para proteger seus ativos digitais e dados.",
        blog_post3_title: "Principais TendÃªncias de Desenvolvimento Web para 2026",
        blog_post3_excerpt: "Fique Ã  frente da curva com nossa anÃ¡lise das tendÃªncias emergentes que moldarÃ£o a internet no prÃ³ximo ano.",
        read_more: "Leia Mais",

        // Resources Page
        resources_intro_title: "Centro de Conhecimento",
        resources_intro_desc: "Descubra recursos selecionados por especialistas, guias passo a passo e insights do setor.",
        resource_card1_title: "DocumentaÃ§Ã£o",
        resource_card1_desc: "Guias abrangentes e documentaÃ§Ã£o tÃ©cnica para nossos serviÃ§os e soluÃ§Ãµes.",
        resource_view_btn: "Ver DocumentaÃ§Ã£o",
        resource_card2_title: "Blog & Insights",
        resource_card2_desc: "Mantenha-se atualizado com as Ãºltimas tendÃªncias, dicas e insights.",
        resource_read_btn: "Ler Blog",
        resource_card3_title: "Tutoriais em VÃ­deo",
        resource_card3_desc: "Assista a tutoriais em vÃ­deo passo a passo e webinars sobre vÃ¡rios tÃ³picos.",
        resource_watch_btn: "Assistir VÃ­deos",
        resource_card4_title: "Downloads",
        resource_card4_desc: "Acesse whitepapers, estudos de caso e recursos para download.",
        resource_download_btn: "Obter Downloads",
        resource_card5_title: "FAQ",
        resource_card5_desc: "Encontre respostas para perguntas frequentes sobre nossos serviÃ§os.",
        resource_faq_btn: "Ver FAQ",
        resource_card6_title: "Ferramentas para Desenvolvedores",
        resource_card6_desc: "Acesse APIs, SDKs e ferramentas de desenvolvedor para integrar nossas soluÃ§Ãµes.",
        resource_tools_btn: "Explorar Ferramentas",

        // Chatbot Blog
        blog_cb_title: "Chatbots vs Suporte Humano: O Que Ã© Melhor Para Seu NegÃ³cio?",
        blog_cb_date: "15 Dez, 2025",
        blog_cb_author: "Equipe TÃ©cnica",
        blog_cb_p1: "Customer expectations are rising faster than ever, pushing businesses to rethink how they deliver support. Both chatbots & human agents play powerful roles in shaping overall customer experiences. While automation can handle quick responses, real conversations still rely on emotional intelligence. Choosing the right balance impacts customer satisfaction, response time & operational cost. This article helps you understand where each option shines so you can decide what fits your business best.",
        blog_cb_h2_1: "1. Pontos Fortes do Suporte Chatbot",
        blog_cb_key_adv: "Principais Vantagens",
        blog_cb_h3_1: "Respostas InstantÃ¢neas",
        blog_cb_p2: "Chatbots reply within seconds, helping businesses reduce wait times & handle peak hours efficiently.",
        blog_cb_h3_2: "Disponibilidade 24/7",
        blog_cb_p3: "Bots remain active day & night, ensuring customers get basic information, troubleshooting steps & updates anytime.",
        blog_cb_h3_3: "OperaÃ§Ãµes EconÃ´micas",
        blog_cb_p4: "Companies save on hiring & training costs since chatbots can manage repeated queries with consistent accuracy.",
        blog_cb_h3_4: "Escalabilidade durante alta demanda",
        blog_cb_p5: "A single bot can talk to thousands of customers at once, making it ideal for fast-growing businesses.",
        blog_cb_h3_5: "Coleta de Dados e Insights",
        blog_cb_p6: "Bots automatically gather customer patterns, helping brands boost personalization & service quality.",
        blog_cb_quote: "\"Imagine a world where your customers never have to wait. It's 2 AM, and a frustrated user needs a quick answerâ€”your chatbot is there instantly, a tireless digital guardian awake while the city sleeps. But when the problem gets tough, thatâ€™s when the human touch steps in. Like a skilled diplomat, your human agent takes over, bringing empathy and deep understanding to complex issues that code simply cannot solve. This powerful duoâ€”the speed of automation and the warmth of humanityâ€”creates a support experience that doesn't just solve problems, but builds lasting trust.\"",
        blog_cb_h2_2: "2. Pontos Fortes do Suporte Humano",
        blog_cb_h3_6: "1. Empatia e CompreensÃ£o Emocional",
        blog_cb_p7: "Human agents offer something chatbots cannotâ€”real emotional connection. They can sense frustration, happiness or confusion through tone & conversation flow. This helps customers feel understood, especialmente during stressful or sensitive issues. Empathy builds trust, reduces conflict & makes the customer feel valued as a person, not just another ticket.",
        blog_cb_h3_7: "2. ResoluÃ§Ã£o de Problemas Personalizada",
        blog_cb_p8: "Humans are naturally creative thinkers. They can analyze a customerâ€™s issue from multiple angles, ask clarifying questions & suggest flexible solutions tailored to individual needs. This is helpful when problems do not follow a standard script. Personalized responses reassure customers that their situation is unique & is being handled by someone who genuinely cares.",
        blog_cb_h3_8: "3. Melhor para QuestÃµes Complicadas",
        blog_cb_p9: "Some problems require deeper investigation, multiple verification steps or critical judgment. Human agents excel in these situations because they understand context, exceptions & policies better than automated systems. They can coordinate with other departments, interpret unclear information & offer accurate guidance that bots often miss.",
        blog_cb_h3_9: "4. ConstruÃ§Ã£o de Relacionamento",
        blog_cb_p10: "Strong customer relationships are built through real conversations. A friendly agent can turn a negative experience into a positive one by listening actively & showing patience. Over time, this human touch boosts brand loyalty & increases the chances of repeat business. Customers are more likely to trust companies that treat them like humans rather than transactions.",
        blog_cb_h3_10: "5. CompreensÃ£o Cultural e Nuances de Idioma",
        blog_cb_p11: "Human agents naturally understand tone, slang, regional expressions & cultural sensitivities. This ensures smoother communication & avoids misunderstandings that bots often face. Whether itâ€™s adjusting language formality or understanding local behavior patterns, humans can adapt instantlyâ€”making the experience more natural & respectful.",
        blog_cb_conclusion_title: "CONCLUSÃƒO",
        blog_cb_conclusion_p: "Both chatbots & human support offer unique strengths, making them valuable in different situations. Chatbots are perfect for quick replies, repeated questions & cost-efficient operations. Human agents shine when conversations require emotional care, critical thinking or deep problem-solving. Instead of choosing one over the other, most businesses succeed by blending automation with human expertise. This balanced approach creates faster, smarter & more human-centered support experiences for every customer.",
        blog_back_btn: "Voltar para o Blog"
    },
    ar: {
        nav_home: "Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©",
        search_placeholder: "Ø¨Ø­Ø«...",
        contact_name_placeholder: "Ø§Ù„Ø§Ø³Ù…",
        contact_email_placeholder: "Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ",
        contact_message_placeholder: "Ø§Ù„Ø±Ø³Ø§Ù„Ø©",
        about_explore: "Ø§Ø³ØªÙƒØ´Ø§Ù",
        nav_about: "Ù…Ù† Ù†Ø­Ù†",
        nav_services: "Ø§Ù„Ø®Ø¯Ù…Ø§Øª",
        nav_resources: "Ø§Ù„Ù…ÙˆØ§Ø±Ø¯",
        nav_contact: "Ø§ØªØµÙ„ Ø¨Ù†Ø§",
        hero_title: "Ø­Ù„ÙˆÙ„ Ø£Ø°ÙƒÙ‰ Ù„Ù…Ø³ØªÙ‚Ø¨Ù„ Ø£ÙØ¶Ù„",
        hero_subtitle: "Ø­Ù„ÙˆÙ„ ØªÙƒÙ†ÙˆÙ„ÙˆØ¬ÙŠØ§ Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª | ØªØ·ÙˆÙŠØ± Ø§Ù„ÙˆÙŠØ¨ | Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ | Ø­Ù„ SaaS",
        hero_description: "Ù†Ù…ÙƒÙ‘Ù† Ø§Ù„Ø´Ø±ÙƒØ§Øª Ø¨Ø­Ù„ÙˆÙ„ ØªÙ‚Ù†ÙŠØ© Ø°ÙƒÙŠØ© ØªØ¯ÙØ¹ Ø§Ù„Ø§Ø¨ØªÙƒØ§Ø± ÙˆØªØ¹Ø²Ø² Ø§Ù„ÙƒÙØ§Ø¡Ø© ÙˆØªØ®Ù„Ù‚ Ù‚ÙŠÙ…Ø© Ù…Ø³ØªØ¯Ø§Ù…Ø© Ù„Ù„Ù…Ø´Ù‡Ø¯ Ø§Ù„Ø±Ù‚Ù…ÙŠ Ù„Ù„ØºØ¯.",
        hero_cta: "Ø§Ø¨Ø¯Ø£ Ø§Ù„Ø¢Ù†",
        about_title: "Ù…Ù† Ù†Ø­Ù†",
        about_description: "Navabharath Technologies Ù‡ÙŠ Ù…Ø²ÙˆØ¯ Ø±Ø§Ø¦Ø¯ Ù„Ø­Ù„ÙˆÙ„ ØªÙƒÙ†ÙˆÙ„ÙˆØ¬ÙŠØ§ Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ù…ÙƒØ±Ø³ Ù„ØªÙ‚Ø¯ÙŠÙ… Ù…Ù†ØªØ¬Ø§Øª Ø±Ù‚Ù…ÙŠØ© Ù…Ø¨ØªÙƒØ±Ø© ÙˆÙ‚ÙˆÙŠØ©. Ù…Ø¹ ÙØ±ÙŠÙ‚ Ù…Ù† Ø§Ù„Ù…Ø·ÙˆØ±ÙŠÙ† ÙˆØ§Ù„Ù…ØµÙ…Ù…ÙŠÙ† Ø§Ù„Ø®Ø¨Ø±Ø§Ø¡ØŒ Ù†Ø­ÙˆÙ„ Ø§Ù„Ø£ÙÙƒØ§Ø± Ø¥Ù„Ù‰ ÙˆØ§Ù‚Ø¹. Ù…Ù‡Ù…ØªÙ†Ø§ Ù‡ÙŠ ØªÙ…ÙƒÙŠÙ† Ø§Ù„Ø´Ø±ÙƒØ§Øª Ø¨ØªÙƒÙ†ÙˆÙ„ÙˆØ¬ÙŠØ§ Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„ØªØ·ÙˆÙŠØ± ÙˆÙØ¹Ø§Ù„Ø©.",
        about_feature1: "Ø­Ù„ÙˆÙ„ Ù…Ø¨ØªÙƒØ±Ø©",
        about_feature2: "Ù†Ù‡Ø¬ ÙŠØ±ÙƒØ² Ø¹Ù„Ù‰ Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡",
        about_feature3: "ÙØ±ÙŠÙ‚ Ø®Ø¨Ø±Ø§Ø¡",
        services_title: "Ø®Ø¯Ù…Ø§ØªÙ†Ø§",
        services_subtitle: "Ø­Ù„ÙˆÙ„ Ø´Ø§Ù…Ù„Ø© Ù„Ø§Ø­ØªÙŠØ§Ø¬Ø§Øª Ø¹Ù…Ù„Ùƒ",
        service1_title: "ØªØ·ÙˆÙŠØ± Ø§Ù„ÙˆÙŠØ¨",
        service1_description: "Ù…ÙˆØ§Ù‚Ø¹ ÙˆÙŠØ¨ Ù…Ø®ØµØµØ© Ù…Ø¨Ù†ÙŠØ© Ø¨ØªÙ‚Ù†ÙŠØ§Øª Ø­Ø¯ÙŠØ«Ø© Ù„Ø¶Ù…Ø§Ù† Ø§Ù„Ø£Ø¯Ø§Ø¡ ÙˆÙ‚Ø§Ø¨Ù„ÙŠØ© Ø§Ù„ØªÙˆØ³Ø¹.",
        service2_title: "ØªØ·ÙˆÙŠØ± ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„Ø¬ÙˆØ§Ù„",
        service2_description: "ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø¬ÙˆØ§Ù„ Ø£ØµÙ„ÙŠØ© ÙˆÙ…ØªØ¹Ø¯Ø¯Ø© Ø§Ù„Ù…Ù†ØµØ§Øª Ù…ØµÙ…Ù…Ø© Ù„ØªØ¬Ø§Ø±Ø¨ Ù…Ø³ØªØ®Ø¯Ù… Ø³Ù„Ø³Ø©.",
        service3_title: "Ø­Ù„ÙˆÙ„ Ø§Ù„Ø³Ø­Ø§Ø¨Ø©",
        service3_description: "Ø¥Ø¹Ø¯Ø§Ø¯ ÙˆØ¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø¨Ù†ÙŠØ© Ø§Ù„ØªØ­ØªÙŠØ© Ø§Ù„Ø³Ø­Ø§Ø¨ÙŠØ© Ø§Ù„Ø¢Ù…Ù†Ø© ÙˆØ§Ù„Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„ØªØ·ÙˆÙŠØ±.",
        service4_title: "ØªØµÙ…ÙŠÙ… ÙˆØ§Ø¬Ù‡Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…/ØªØ¬Ø±Ø¨Ø© Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…",
        service4_description: "ØªØµÙ…ÙŠÙ… ÙŠØ±ÙƒØ² Ø¹Ù„Ù‰ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… ÙŠØ®Ù„Ù‚ Ù…Ù†ØªØ¬Ø§Øª Ø±Ù‚Ù…ÙŠØ© Ø¬Ø°Ø§Ø¨Ø© ÙˆØ¨Ø¯ÙŠÙ‡ÙŠØ©.",
        service5_title: "Ø§Ù„ØªØ³ÙˆÙŠÙ‚ Ø§Ù„Ø±Ù‚Ù…ÙŠ",
        service5_description: "ØªÙ†ÙÙŠØ° Ø§Ø³ØªØ±Ø§ØªÙŠØ¬ÙŠØ§Øª ØªØ³ÙˆÙŠÙ‚ Ø°ÙƒÙŠØ© Ù„ØªØ¹Ø²ÙŠØ² ØªÙˆØ§Ø¬Ø¯Ùƒ Ø¹Ø¨Ø± Ø§Ù„Ø¥Ù†ØªØ±Ù†Øª.",
        service6_title: "Ø­Ù„ÙˆÙ„ Ø§Ù„Ø§Ø³ØªØ¬Ø§Ø¨Ø© Ø§Ù„ØµÙˆØªÙŠØ© Ø§Ù„ØªÙØ§Ø¹Ù„ÙŠØ© (IVR)",
        service6_description: "Ø£Ù†Ø¸Ù…Ø© Ù…ØªÙ‚Ø¯Ù…Ø© Ù„Ù„Ø§Ø³ØªØ¬Ø§Ø¨Ø© Ø§Ù„ØµÙˆØªÙŠØ© Ø§Ù„ØªÙØ§Ø¹Ù„ÙŠØ© Ù„Ø£ØªÙ…ØªØ© ØªÙØ§Ø¹Ù„Ø§Øª Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡ ÙˆØªØ¨Ø³ÙŠØ· Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ù…ÙƒØ§Ù„Ù…Ø§Øª Ø¨Ù‚ÙˆØ§Ø¦Ù… ØµÙˆØªÙŠØ© Ø°ÙƒÙŠØ©.",
        service7_title: "Ø­Ù„ÙˆÙ„ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ",
        service7_description: "Ø­Ù„ÙˆÙ„ Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ ÙˆØ§Ù„ØªØ¹Ù„Ù… Ø§Ù„Ø¢Ù„ÙŠ Ø§Ù„Ù…ØªØ·ÙˆØ±Ø© Ù„Ø£ØªÙ…ØªØ© Ø§Ù„Ø¹Ù…Ù„ÙŠØ§Øª ÙˆØªØ­Ø³ÙŠÙ† Ø§ØªØ®Ø§Ø° Ø§Ù„Ù‚Ø±Ø§Ø±Ø§Øª ÙˆÙØªØ­ Ø±Ø¤Ù‰ Ù‚Ø§Ø¦Ù…Ø© Ø¹Ù„Ù‰ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª Ù„Ø¹Ù…Ù„Ùƒ.",

        // Why Choose Us Section
        why_choose_title: "Ù„Ù…Ø§Ø°Ø§ ØªØ®ØªØ§Ø± Navabharath TechnologiesØŸ",
        why_feature1_title: "Ø­Ù„ÙˆÙ„ Ø¬Ø§Ù‡Ø²Ø© Ù„Ù„Ù…Ø³ØªÙ‚Ø¨Ù„",
        why_feature1_desc: "Ø¨Ù†Ø§Ø¡ Ø£Ø³Ø³ Ø±Ù‚Ù…ÙŠØ© Ø¯Ø§Ø¦Ù…Ø©.",
        why_feature2_title: "Ù…Ø¹Ø§ÙŠÙŠØ± Ø£Ù…Ø§Ù† Ø¹Ø§Ù„ÙŠØ©",
        why_feature2_desc: "Ø¶Ù…Ø§Ù† Ø¨ÙŠØ§Ù†Ø§Øª Ø¢Ù…Ù†Ø© ÙˆÙ…Ø­Ù…ÙŠØ©.",
        why_feature3_title: "ØªØ·ÙˆÙŠØ± Ø´Ø§Ù…Ù„",
        why_feature3_desc: "Ù…Ù† Ø§Ù„Ø¨Ø­Ø« Ø¥Ù„Ù‰ Ø§Ù„Ù†Ø´Ø± ÙˆØ§Ù„Ø¯Ø¹Ù….",
        why_feature4_title: "Ù†Ù‡Ø¬ Ù…ÙˆØ¬Ù‡ Ù†Ø­Ùˆ Ø§Ù„Ù†ØªØ§Ø¦Ø¬",
        why_feature4_desc: "Ù†Ø±ÙƒØ² Ø¹Ù„Ù‰ Ø§Ù„Ø£Ø¯Ø§Ø¡ ÙˆØ§Ù„Ø³Ø±Ø¹Ø© ÙˆØ³Ù‡ÙˆÙ„Ø© Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù….",
        why_feature5_title: "ÙØ±ÙŠÙ‚ ÙŠØ±ÙƒØ² Ø¹Ù„Ù‰ Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡",
        why_feature5_desc: "Ø¯Ø¹Ù… Ù…Ø®ØµØµ ÙˆØªÙˆØ§ØµÙ„ Ø´ÙØ§Ù.",
        why_feature6_title: "Ø®Ø¯Ù…Ø§Øª DevOps",
        why_feature6_desc: "Ø¨Ù†ÙŠØ© ØªØ­ØªÙŠØ© Ø¢Ù…Ù†Ø© ÙˆÙ‚Ø§Ø¨Ù„Ø© Ù„Ù„ØªØ·ÙˆÙŠØ± ÙˆÙ…ÙˆØ«ÙˆÙ‚Ø©.",

        contact_title: "Ø§ØªØµÙ„ Ø¨Ù†Ø§",
        contact_subtitle: "Ù‡Ù„ Ø£Ù†Øª Ù…Ø³ØªØ¹Ø¯ Ù„Ø¨Ø¯Ø¡ Ù…Ø´Ø±ÙˆØ¹ÙƒØŸ ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§ Ø§Ù„ÙŠÙˆÙ….",
        form_name: "Ø§Ù„Ø§Ø³Ù…",
        form_email: "Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ",
        form_message: "Ø§Ù„Ø±Ø³Ø§Ù„Ø©",
        form_submit: "Ø¥Ø±Ø³Ø§Ù„ Ø§Ù„Ø±Ø³Ø§Ù„Ø©",
        footer_tagline: "ØªÙ…ÙƒÙŠÙ† Ù…Ø³ØªÙ‚Ø¨Ù„Ùƒ Ø§Ù„Ø±Ù‚Ù…ÙŠ",
        footer_links_title: "Ø§Ù„Ø´Ø±ÙƒØ©",
        footer_support: "Ø§Ù„Ø¯Ø¹Ù…",
        footer_about: "Ù…Ù† Ù†Ø­Ù†",
        footer_services: "Ø§Ù„Ø®Ø¯Ù…Ø§Øª",
        footer_contact: "Ø§ØªØµÙ„ Ø¨Ù†Ø§",
        footer_social_title: "ØªØ§Ø¨Ø¹Ù†Ø§",
        footer_copyright: "Â© 2025 Navabharath Technologies. Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø­Ù‚ÙˆÙ‚ Ù…Ø­ÙÙˆØ¸Ø©.",

        // Explore Page
        explore_banner_title: "Ø§Ø³ØªÙƒØ´Ù",
        explore_banner_desc: "Ø§ÙƒØªØ´Ù Ø±Ø­Ù„ØªÙ†Ø§ ÙˆÙ…Ù‡Ù…ØªÙ†Ø§ ÙˆØ±Ø¤ÙŠØªÙ†Ø§",
        explore_intro_title: "Navabharath Technologies â€” Ø¯ÙØ¹ Ø§Ù„Ù†Ù…Ùˆ Ù…Ù† Ø®Ù„Ø§Ù„ Ø­Ù„ÙˆÙ„ ØªÙƒÙ†ÙˆÙ„ÙˆØ¬ÙŠØ§ Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„Ø°ÙƒÙŠØ©",
        explore_intro_desc: "Navabharath Technologies Ù‡ÙŠ Ø´Ø±ÙƒØ© Ø­Ù„ÙˆÙ„ ØªÙƒÙ†ÙˆÙ„ÙˆØ¬ÙŠØ§ Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø°Ø§Øª ØªÙÙƒÙŠØ± Ù…Ø³ØªÙ‚Ø¨Ù„ÙŠ ØªÙ‚Ø¯Ù… Ø®Ø¯Ù…Ø§Øª Ø±Ù‚Ù…ÙŠØ© Ø°ÙƒÙŠØ© ÙˆÙ‚Ø§Ø¨Ù„Ø© Ù„Ù„ØªØ·ÙˆÙŠØ± ÙˆÙ…ÙˆØ¬Ù‡Ø© Ù†Ø­Ùˆ Ø§Ù„Ù†ØªØ§Ø¦Ø¬. Ù…Ø¹ ØªØ±ÙƒÙŠØ² Ù‚ÙˆÙŠ Ø¹Ù„Ù‰ Ø§Ù„Ø§Ø¨ØªÙƒØ§Ø± ÙˆØ§Ù„ØªØµÙ…ÙŠÙ… Ø§Ù„Ø°ÙŠ ÙŠØ±ÙƒØ² Ø¹Ù„Ù‰ Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡ØŒ Ù†Ø³Ø§Ø¹Ø¯ Ø§Ù„Ø´Ø±ÙƒØ§Øª Ø¹Ù„Ù‰ Ø§Ù„ØªØ­ÙˆÙ„ ÙˆØ§Ù„Ø£ØªÙ…ØªØ© ÙˆØ§Ù„Ù†Ù…Ùˆ ÙÙŠ Ø§Ù„Ø¹Ø§Ù„Ù… Ø§Ù„Ø±Ù‚Ù…ÙŠ Ø³Ø±ÙŠØ¹ Ø§Ù„ØªØ·ÙˆØ± Ø§Ù„ÙŠÙˆÙ…. Ø¨Ø¯Ø¹Ù… Ù…Ù† ÙØ±ÙŠÙ‚ Ù…Ù† Ø°ÙˆÙŠ Ø§Ù„Ø®Ø¨Ø±Ø© ÙˆØ§Ù„ØªÙ‚Ù†ÙŠØ§Øª Ø§Ù„Ø­Ø¯ÙŠØ«Ø©ØŒ Ù†Ø¶Ù…Ù† Ø§Ù„ØªÙ†ÙÙŠØ° Ø§Ù„Ø³Ù„Ø³ ÙˆØ³ÙŠØ± Ø§Ù„Ø¹Ù…Ù„ Ø§Ù„Ù…Ø·ÙˆØ± ÙˆØªØ³Ù„ÙŠÙ… Ø¹Ø§Ù„ÙŠ Ø§Ù„Ø¬ÙˆØ¯Ø©. ØªÙØ§Ù†ÙŠÙ†Ø§ ÙÙŠ Ø§Ù„ØªÙ…ÙŠØ² ÙˆØ§Ù„Ø´ÙØ§ÙÙŠØ© ÙˆØ§Ù„Ù…ÙˆØ«ÙˆÙ‚ÙŠØ© ÙŠØ¬Ø¹Ù„Ù†Ø§ Ø´Ø±ÙŠÙƒÙ‹Ø§ Ù…ÙˆØ«ÙˆÙ‚Ù‹Ø§ Ù„Ù„Ø´Ø±ÙƒØ§Øª Ù…Ù† Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø£Ø­Ø¬Ø§Ù….",
        explore_what_do_title: "Ù…Ø§Ø°Ø§ Ù†ÙØ¹Ù„",
        explore_what_do_1: "Ø¨Ù†Ø§Ø¡ Ù…ÙˆØ§Ù‚Ø¹ ÙˆÙŠØ¨ ÙˆØªØ·Ø¨ÙŠÙ‚Ø§Øª ÙˆÙ…Ù†ØªØ¬Ø§Øª Ø±Ù‚Ù…ÙŠØ© Ù…Ø®ØµØµØ© Ù…ØµÙ…Ù…Ø© Ù„Ù„Ø£Ø¯Ø§Ø¡ Ø·ÙˆÙŠÙ„ Ø§Ù„Ù…Ø¯Ù‰.",
        explore_what_do_2: "Ø§Ø³ØªØ±Ø§ØªÙŠØ¬ÙŠØ§Øª ÙˆØªÙ‚Ù†ÙŠØ§Øª Ø°ÙƒÙŠØ© ØªØªÙ†Ø§Ø³Ø¨ Ù…Ø¹ Ø£Ù‡Ø¯Ø§ÙÙƒ ÙˆØ³ÙŠØ± Ø¹Ù…Ù„Ùƒ.",
        explore_what_do_3: "Ø£Ù†Ø¸Ù…Ø© Ø±Ù‚Ù…ÙŠØ© Ù‚ÙˆÙŠØ© ÙˆÙ…ÙˆØ«ÙˆÙ‚Ø© ÙˆÙ…Ø­Ø³Ù†Ø© Ù„ØªØ­Ù‚ÙŠÙ‚ Ø£Ù‚ØµÙ‰ Ù‚Ø¯Ø± Ù…Ù† Ø§Ù„ÙƒÙØ§Ø¡Ø©.",
        explore_what_do_4: "Ø­Ù„ÙˆÙ„ Ù…ØµÙ…Ù…Ø© Ù…Ø¹ Ù…Ø±Ø§Ø¹Ø§Ø© Ø³Ù‡ÙˆÙ„Ø© Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… ÙˆØ§Ù„Ø®Ø¨Ø±Ø© ÙˆØªØ£Ø«ÙŠØ± Ø§Ù„Ø£Ø¹Ù…Ø§Ù„.",
        explore_mission_title: "Ù…Ù‡Ù…ØªÙ†Ø§",
        explore_mission_p1: "Ù…Ù‡Ù…ØªÙ†Ø§ Ù‡ÙŠ ØªÙ…ÙƒÙŠÙ† Ø§Ù„Ø´Ø±ÙƒØ§Øª Ø¨Ø­Ù„ÙˆÙ„ Ø±Ù‚Ù…ÙŠØ© Ù…ØªÙ‚Ø¯Ù…Ø© ØªØ³Ø±Ø¹ Ø§Ù„Ù†Ù…Ùˆ ÙˆØªØ¹Ø²Ø² Ù…ÙŠØ²ØªÙ‡Ø§ Ø§Ù„ØªÙ†Ø§ÙØ³ÙŠØ©. Ù†Ø±ÙƒØ² Ø¹Ù„Ù‰ ØªØ­Ø³ÙŠÙ† Ø§Ù„ÙƒÙØ§Ø¡Ø© Ø§Ù„ØªØ´ØºÙŠÙ„ÙŠØ© Ù…Ù† Ø®Ù„Ø§Ù„ ØªÙ‚Ù†ÙŠØ§Øª Ø°ÙƒÙŠØ© ÙˆØ¢Ù„ÙŠØ© ÙˆÙ‚Ø§Ø¨Ù„Ø© Ù„Ù„ØªØ·ÙˆÙŠØ± ØªØ¹Ù…Ù„ Ø¹Ù„Ù‰ ØªØ¨Ø³ÙŠØ· ÙƒÙ„ Ø³ÙŠØ± Ø¹Ù…Ù„. Ù…Ù† Ø®Ù„Ø§Ù„ ØªÙ‚Ø¯ÙŠÙ… ØªØ¬Ø§Ø±Ø¨ Ø±Ù‚Ù…ÙŠØ© Ø¹Ø§Ù„ÙŠØ© Ø§Ù„Ø¬ÙˆØ¯Ø©ØŒ Ù†Ø¶Ù…Ù† Ø§Ù„Ù†Ø¬Ø§Ø­ Ø·ÙˆÙŠÙ„ Ø§Ù„Ù…Ø¯Ù‰ ÙˆØ§Ù„ØªÙ†Ù…ÙŠØ© Ø§Ù„Ù…Ø³ØªØ¯Ø§Ù…Ø© Ù„Ø¹Ù…Ù„Ø§Ø¦Ù†Ø§. Ù†Ø¨ØªÙƒØ± Ø¨Ø§Ø³ØªÙ…Ø±Ø§Ø± ÙˆÙ†ØªÙƒÙŠÙ Ù…Ø¹ Ø§Ø­ØªÙŠØ§Ø¬Ø§Øª Ø§Ù„ØµÙ†Ø§Ø¹Ø© Ø§Ù„Ù…ØªØ·ÙˆØ±Ø© Ù„ØªÙ‚Ø¯ÙŠÙ… Ø­Ù„ÙˆÙ„ Ø­Ø¯ÙŠØ«Ø© ÙˆØ¬Ø§Ù‡Ø²Ø© Ù„Ù„Ù…Ø³ØªÙ‚Ø¨Ù„. Ù…Ù† Ø®Ù„Ø§Ù„ Ø§Ù„ØªØ²Ø§Ù…Ù†Ø§ Ø¨Ø§Ù„ØªÙ…ÙŠØ²ØŒ Ù†Ø³Ø¹Ù‰ Ø¬Ø§Ù‡Ø¯ÙŠÙ† Ù„Ø®Ù„Ù‚ Ù‚ÙŠÙ…Ø© Ø°Ø§Øª Ù…Ø¹Ù†Ù‰ ÙˆÙ…Ø³Ø§Ø¹Ø¯Ø© Ø§Ù„Ø´Ø±ÙƒØ§Øª Ø¹Ù„Ù‰ Ø§Ù„Ø¹Ù…Ù„ Ø¨Ø°ÙƒØ§Ø¡ ÙˆØ³Ø±Ø¹Ø© ÙˆÙƒÙØ§Ø¡Ø© Ø£ÙƒØ¨Ø±.",
        explore_vision_title: "Ø±Ø¤ÙŠØªÙ†Ø§",
        explore_vision_p1: "Ø±Ø¤ÙŠØªÙ†Ø§ Ù‡ÙŠ Ø£Ù† Ù†ÙƒÙˆÙ† Ø±Ø§Ø¦Ø¯Ù‹Ø§ Ø¹Ø§Ù„Ù…ÙŠÙ‹Ø§ ÙÙŠ Ø§Ù„ØªØ­ÙˆÙ„ Ø§Ù„Ø±Ù‚Ù…ÙŠØŒ Ù…Ø¹ØªØ±ÙÙ‹Ø§ Ø¨Ù‚Ø¯Ø±ØªÙ†Ø§ Ø¹Ù„Ù‰ ØªØ­ÙˆÙŠÙ„ Ø§Ù„ØªØ­Ø¯ÙŠØ§Øª Ø§Ù„Ù…Ø¹Ù‚Ø¯Ø© Ø¥Ù„Ù‰ Ø­Ù„ÙˆÙ„ ØªÙƒÙ†ÙˆÙ„ÙˆØ¬ÙŠØ© Ø¨Ø³ÙŠØ·Ø© ÙˆÙØ¹Ø§Ù„Ø©. Ù†Ø·Ù…Ø­ Ù„Ø¨Ù†Ø§Ø¡ Ù…Ø³ØªÙ‚Ø¨Ù„ Ø­ÙŠØ« ØªØªÙ…ØªØ¹ ÙƒÙ„ Ø´Ø±ÙƒØ©ØŒ Ø¨ØºØ¶ Ø§Ù„Ù†Ø¸Ø± Ø¹Ù† Ø­Ø¬Ù…Ù‡Ø§ØŒ Ø¨Ø§Ù„ÙˆØµÙˆÙ„ Ø¥Ù„Ù‰ Ø§Ù„Ø£Ø¯ÙˆØ§Øª Ø§Ù„ØªÙŠ ØªØ­ØªØ§Ø¬Ù‡Ø§ Ù„ØªØ²Ø¯Ù‡Ø± ÙÙŠ Ø§Ù‚ØªØµØ§Ø¯ Ø±Ù‚Ù…ÙŠ Ø£ÙˆÙ„Ø§Ù‹. Ù…Ù† Ø®Ù„Ø§Ù„ ØªØ¹Ø²ÙŠØ² Ø«Ù‚Ø§ÙØ© Ø§Ù„Ø¥Ø¨Ø¯Ø§Ø¹ ÙˆØ§Ù„Ù†Ø²Ø§Ù‡Ø© ÙˆØ§Ù„ØªØ¹Ø§ÙˆÙ†ØŒ Ù†Ù‡Ø¯Ù Ø¥Ù„Ù‰ ÙˆØ¶Ø¹ Ù…Ø¹Ø§ÙŠÙŠØ± Ø¬Ø¯ÙŠØ¯Ø© ÙÙŠ ØµÙ†Ø§Ø¹Ø© ØªÙƒÙ†ÙˆÙ„ÙˆØ¬ÙŠØ§ Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª. Ù†Ø±Ù‰ Ø£Ù†ÙØ³Ù†Ø§ ÙƒÙ…Ø­ÙØ²ÙŠÙ† Ù„Ù„ØªØºÙŠÙŠØ±ØŒ ÙˆØ¯ÙØ¹ Ø§Ù„ØªÙ‚Ø¯Ù… ÙˆØ§Ù„Ø§Ø¨ØªÙƒØ§Ø± Ø§Ù„Ø°ÙŠ Ù„Ø§ ÙŠÙÙŠØ¯ Ø¹Ù…Ù„Ø§Ø¡Ù†Ø§ ÙØ­Ø³Ø¨ØŒ Ø¨Ù„ ÙŠØ³Ø§Ù‡Ù… Ø£ÙŠØ¶Ù‹Ø§ ÙÙŠ Ø¹Ø§Ù„Ù… Ø£ÙƒØ«Ø± Ø§ØªØµØ§Ù„Ø§Ù‹ ÙˆÙƒÙØ§Ø¡Ø©.",
        explore_values_title: "Ù…Ø§Ø°Ø§ Ù†ÙØ¹Ù„",
        explore_what_we_do_p1: "Ù†Ø­Ù† Ù…ØªØ®ØµØµÙˆÙ† ÙÙŠ Ù…Ø¬Ù…ÙˆØ¹Ø© ÙˆØ§Ø³Ø¹Ø© Ù…Ù† Ø®Ø¯Ù…Ø§Øª ØªÙƒÙ†ÙˆÙ„ÙˆØ¬ÙŠØ§ Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„Ù…ØµÙ…Ù…Ø© Ù„ØªÙ„Ø¨ÙŠØ© Ø§Ù„Ø§Ø­ØªÙŠØ§Ø¬Ø§Øª Ø§Ù„Ù…ØªÙ†ÙˆØ¹Ø© Ù„Ù„Ø´Ø±ÙƒØ§Øª Ø§Ù„Ø­Ø¯ÙŠØ«Ø©. Ù…Ù† ØªØ·ÙˆÙŠØ± Ø§Ù„Ø¨Ø±Ø§Ù…Ø¬ Ø§Ù„Ù…Ø®ØµØµØ© ÙˆØ¥Ù†Ø´Ø§Ø¡ ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ø§Ù„Ø£Ø¬Ù‡Ø²Ø© Ø§Ù„Ù…Ø­Ù…ÙˆÙ„Ø© Ø¥Ù„Ù‰ Ø§Ù„Ø­ÙˆØ³Ø¨Ø© Ø§Ù„Ø³Ø­Ø§Ø¨ÙŠØ© ÙˆØªØ­Ù„ÙŠÙ„Ø§Øª Ø§Ù„Ø¨ÙŠØ§Ù†Ø§ØªØŒ Ù†Ù‚Ø¯Ù… Ø­Ù„ÙˆÙ„Ù‹Ø§ Ø´Ø§Ù…Ù„Ø© ØªØ­Ù‚Ù‚ Ø§Ù„Ù†ØªØ§Ø¦Ø¬. ÙŠØ¹Ù…Ù„ ÙØ±ÙŠÙ‚ Ø®Ø¨Ø±Ø§Ø¦Ù†Ø§ Ø¨Ø´ÙƒÙ„ ÙˆØ«ÙŠÙ‚ Ù…Ø¹ Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡ Ù„ÙÙ‡Ù… ØªØ­Ø¯ÙŠØ§ØªÙ‡Ù… ÙˆØ£Ù‡Ø¯Ø§ÙÙ‡Ù… Ø§Ù„ÙØ±ÙŠØ¯Ø©ØŒ ÙˆØªÙ‚Ø¯ÙŠÙ… Ø§Ø³ØªØ±Ø§ØªÙŠØ¬ÙŠØ§Øª Ù…Ø®ØµØµØ© ØªØ²ÙŠØ¯ Ù…Ù† Ø¹Ø§Ø¦Ø¯ Ø§Ù„Ø§Ø³ØªØ«Ù…Ø§Ø±. Ø³ÙˆØ§Ø¡ ÙƒÙ†Øª Ø¨Ø­Ø§Ø¬Ø© Ø¥Ù„Ù‰ ØªØ­Ø¯ÙŠØ« Ø§Ù„Ø£Ù†Ø¸Ù…Ø© Ø§Ù„Ù‚Ø¯ÙŠÙ…Ø©ØŒ Ø£Ùˆ Ø¨Ù†Ø§Ø¡ Ù…Ù†ØªØ¬ Ø±Ù‚Ù…ÙŠ Ø¬Ø¯ÙŠØ¯ Ù…Ù† Ø§Ù„ØµÙØ±ØŒ Ø£Ùˆ ØªØ­Ø³ÙŠÙ† Ø¨Ù†ÙŠØªÙƒ Ø§Ù„ØªØ­ØªÙŠØ© Ø§Ù„Ø­Ø§Ù„ÙŠØ©ØŒ ÙÙ„Ø¯ÙŠÙ†Ø§ Ø§Ù„Ø®Ø¨Ø±Ø© ÙˆØ§Ù„ØªØ¬Ø±Ø¨Ø© Ù„Ù…Ø³Ø§Ø¹Ø¯ØªÙƒ Ø¹Ù„Ù‰ Ø§Ù„Ù†Ø¬Ø§Ø­.",
        explore_trust_title: "Ù„Ù…Ø§Ø°Ø§ ØªØ«Ù‚ Ø§Ù„Ø´Ø±ÙƒØ§Øª Ø¨Ù†Ø§",
        explore_trust_1_title: "1. Ù†Ù‡Ø¬ Ù‚Ø§Ø¦Ù… Ø¹Ù„Ù‰ Ø§Ù„Ø§Ø¨ØªÙƒØ§Ø±",
        explore_trust_1_desc: "Ù†Ø³ØªØ®Ø¯Ù… Ø£Ø¯ÙˆØ§Øª Ø­Ø¯ÙŠØ«Ø© ÙˆØ£ÙØ¶Ù„ Ø§Ù„Ù…Ù…Ø§Ø±Ø³Ø§Øª Ù„ØªÙ‚Ø¯ÙŠÙ… Ø­Ù„ÙˆÙ„ Ø¬Ø§Ù‡Ø²Ø© Ù„Ù„Ù…Ø³ØªÙ‚Ø¨Ù„.",
        explore_trust_2_title: "2. ØªÙ†ÙÙŠØ° ÙŠØ±ÙƒØ² Ø¹Ù„Ù‰ Ø§Ù„Ø¹Ù…ÙŠÙ„",
        explore_trust_2_desc: "ÙŠØªÙ… ØªØ®ØµÙŠØµ ÙƒÙ„ Ù…Ø´Ø±ÙˆØ¹ Ù„Ø£Ù‡Ø¯Ø§Ù Ø¹Ù…Ù„Ùƒ ÙˆØ³ÙŠØ± Ø¹Ù…Ù„Ùƒ.",
        explore_trust_3_title: "3. Ù…Ø­ØªØ±ÙÙˆÙ† Ù…Ù‡Ø±Ø©",
        explore_trust_3_desc: "ÙØ±ÙŠÙ‚ ÙŠØ¬Ù…Ø¹ Ø¨ÙŠÙ† Ø§Ù„Ø¥Ø¨Ø¯Ø§Ø¹ ÙˆØ§Ù„Ø®Ø¨Ø±Ø© ÙˆÙ…Ø¹Ø±ÙØ© Ø§Ù„ØµÙ†Ø§Ø¹Ø©.",
        explore_trust_4_title: "4. Ø§Ù„Ø¬ÙˆØ¯Ø© ÙˆØ§Ù„Ø´ÙØ§ÙÙŠØ©",
        explore_trust_4_desc: "ØªÙˆØ§ØµÙ„ ÙˆØ§Ø¶Ø­ ÙˆØ¹Ù…Ù„ÙŠØ§Øª Ù…ÙˆØ«ÙˆÙ‚Ø© ÙˆØªØ³Ù„ÙŠÙ… ÙÙŠ Ø§Ù„ÙˆÙ‚Øª Ø§Ù„Ù…Ù†Ø§Ø³Ø¨ ÙÙŠ ÙƒÙ„ Ù…Ø±Ø­Ù„Ø©.",

        // Blog Page
        blog_banner_title: "Ù…Ø¯ÙˆÙ†ØªÙ†Ø§",
        blog_banner_desc: "Ø±Ø¤Ù‰ ÙˆØªØ­Ø¯ÙŠØ«Ø§Øª ÙˆØ¢Ø±Ø§Ø¡ Ø§Ù„Ø®Ø¨Ø±Ø§Ø¡ Ù…Ù† Ø¹Ø§Ù„Ù… Ø§Ù„ØªÙƒÙ†ÙˆÙ„ÙˆØ¬ÙŠØ§.",
        blog_post1_title: "Ø±ÙˆØ¨ÙˆØªØ§Øª Ø§Ù„Ø¯Ø±Ø¯Ø´Ø© Ù…Ù‚Ø§Ø¨Ù„ Ø§Ù„Ø¯Ø¹Ù… Ø§Ù„Ø¨Ø´Ø±ÙŠ: Ù…Ø§ Ù‡Ùˆ Ø§Ù„Ø£ÙØ¶Ù„ Ù„Ø¹Ù…Ù„ÙƒØŸ",
        blog_post1_excerpt: "Ø§Ø³ØªÙƒØ´Ù ÙƒÙŠÙ ØªØ¹ÙŠØ¯ Ø±ÙˆØ¨ÙˆØªØ§Øª Ø§Ù„Ø¯Ø±Ø¯Ø´Ø© ÙˆØ§Ù„Ø¯Ø¹Ù… Ø§Ù„Ø¨Ø´Ø±ÙŠ ØªØ´ÙƒÙŠÙ„ Ø®Ø¯Ù…Ø© Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡ØŒ ÙˆØªØ¹Ø±Ù Ø¹Ù„Ù‰ Ø§Ù„Ù†Ù‡Ø¬ Ø§Ù„Ø£ÙØ¶Ù„ Ù„Ø¹Ù…Ù„Ùƒ.",
        blog_post2_title: "Ø£ÙØ¶Ù„ Ù…Ù…Ø§Ø±Ø³Ø§Øª Ø£Ù…Ø§Ù† Ø§Ù„Ø³Ø­Ø§Ø¨Ø© Ø§Ù„Ø£Ø³Ø§Ø³ÙŠØ©",
        blog_post2_excerpt: "Ø¨ÙŠÙ†Ù…Ø§ ØªÙ†ØªÙ‚Ù„ Ø§Ù„Ø´Ø±ÙƒØ§Øª Ø¥Ù„Ù‰ Ø§Ù„Ø³Ø­Ø§Ø¨Ø©ØŒ ÙØ¥Ù† Ø§Ù„Ø£Ù…Ø§Ù† Ø£Ù…Ø± Ø¨Ø§Ù„Øº Ø§Ù„Ø£Ù‡Ù…ÙŠØ©. ØªØ¹Ø±Ù Ø¹Ù„Ù‰ Ø£Ù‡Ù… Ø§Ù„Ø§Ø³ØªØ±Ø§ØªÙŠØ¬ÙŠØ§Øª Ù„Ø­Ù…Ø§ÙŠØ© Ø£ØµÙˆÙ„Ùƒ Ø§Ù„Ø±Ù‚Ù…ÙŠØ© ÙˆØ¨ÙŠØ§Ù†Ø§ØªÙƒ.",
        blog_post3_title: "Ø£Ù‡Ù… Ø§ØªØ¬Ø§Ù‡Ø§Øª ØªØ·ÙˆÙŠØ± Ø§Ù„ÙˆÙŠØ¨ Ù„Ø¹Ø§Ù… 2026",
        blog_post3_excerpt: "Ø§Ø¨Ù‚ ÙÙŠ Ø§Ù„Ø·Ù„ÙŠØ¹Ø© Ù…Ù† Ø®Ù„Ø§Ù„ ØªØ­Ù„ÙŠÙ„Ù†Ø§ Ù„Ù„Ø§ØªØ¬Ø§Ù‡Ø§Øª Ø§Ù„Ù†Ø§Ø´Ø¦Ø© ÙÙŠ ØªØ·ÙˆÙŠØ± Ø§Ù„ÙˆÙŠØ¨ Ø§Ù„ØªÙŠ Ø³ØªØ´ÙƒÙ„ Ø§Ù„Ø¥Ù†ØªØ±Ù†Øª ÙÙŠ Ø§Ù„Ø¹Ø§Ù… Ø§Ù„Ù…Ù‚Ø¨Ù„.",
        read_more: "Ø§Ù‚Ø±Ø£ Ø§Ù„Ù…Ø²ÙŠØ¯",

        // Resources Page
        resources_intro_title: "Ù…Ø±ÙƒØ² Ø§Ù„Ù…Ø¹Ø±ÙØ©",
        resources_intro_desc: "Ø§ÙƒØªØ´Ù Ø§Ù„Ù…ÙˆØ§Ø±Ø¯ Ø§Ù„ØªÙŠ Ø§Ø®ØªØ§Ø±Ù‡Ø§ Ø§Ù„Ø®Ø¨Ø±Ø§Ø¡ØŒ ÙˆØ§Ù„Ø£Ø¯Ù„Ø© Ø®Ø·ÙˆØ© Ø¨Ø®Ø·ÙˆØ©ØŒ ÙˆØ±Ø¤Ù‰ Ø§Ù„ØµÙ†Ø§Ø¹Ø©.",
        resource_card1_title: "Ø§Ù„ÙˆØ«Ø§Ø¦Ù‚",
        resource_card1_desc: "Ø£Ø¯Ù„Ø© Ø´Ø§Ù…Ù„Ø© ÙˆÙˆØ«Ø§Ø¦Ù‚ ÙÙ†ÙŠØ© Ù„Ø®Ø¯Ù…Ø§ØªÙ†Ø§ ÙˆØ­Ù„ÙˆÙ„Ù†Ø§.",
        resource_view_btn: "Ø¹Ø±Ø¶ Ø§Ù„ÙˆØ«Ø§Ø¦Ù‚",
        resource_card2_title: "Ø§Ù„Ù…Ø¯ÙˆÙ†Ø© ÙˆØ§Ù„Ø±Ø¤Ù‰",
        resource_card2_desc: "Ø§Ø¨Ù‚ Ø¹Ù„Ù‰ Ø§Ø·Ù„Ø§Ø¹ Ø¯Ø§Ø¦Ù… Ø¨Ø£Ø­Ø¯Ø« Ø§Ù„Ø§ØªØ¬Ø§Ù‡Ø§Øª ÙˆØ§Ù„Ù†ØµØ§Ø¦Ø­ ÙˆØ§Ù„Ø±Ø¤Ù‰ Ù…Ù† ÙØ±ÙŠÙ‚ Ø§Ù„Ø®Ø¨Ø±Ø§Ø¡ Ù„Ø¯ÙŠÙ†Ø§.",
        resource_read_btn: "Ø§Ù‚Ø±Ø£ Ø§Ù„Ù…Ø¯ÙˆÙ†Ø©",
        resource_card3_title: "Ø¯Ø±ÙˆØ³ Ø§Ù„ÙÙŠØ¯ÙŠÙˆ",
        resource_card3_desc: "Ø´Ø§Ù‡Ø¯ Ù…Ù‚Ø§Ø·Ø¹ ÙÙŠØ¯ÙŠÙˆ ØªØ¹Ù„ÙŠÙ…ÙŠØ© ÙˆÙ†Ø¯ÙˆØ§Øª Ø¹Ø¨Ø± Ø§Ù„Ø¥Ù†ØªØ±Ù†Øª Ø®Ø·ÙˆØ© Ø¨Ø®Ø·ÙˆØ© Ø­ÙˆÙ„ Ù…ÙˆØ§Ø¶ÙŠØ¹ Ù…Ø®ØªÙ„ÙØ©.",
        resource_watch_btn: "Ø´Ø§Ù‡Ø¯ Ù…Ù‚Ø§Ø·Ø¹ Ø§Ù„ÙÙŠØ¯ÙŠÙˆ",
        resource_card4_title: "Ø§Ù„ØªÙ†Ø²ÙŠÙ„Ø§Øª",
        resource_card4_desc: "Ø§Ù„ÙˆØµÙˆÙ„ Ø¥Ù„Ù‰ Ø§Ù„Ø£ÙˆØ±Ø§Ù‚ Ø§Ù„Ø¨ÙŠØ¶Ø§Ø¡ ÙˆØ¯Ø±Ø§Ø³Ø§Øª Ø§Ù„Ø­Ø§Ù„Ø© ÙˆØ§Ù„Ù…ÙˆØ§Ø±Ø¯ Ø§Ù„Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„ØªÙ†Ø²ÙŠÙ„.",
        resource_download_btn: "Ø§Ø­ØµÙ„ Ø¹Ù„Ù‰ Ø§Ù„ØªÙ†Ø²ÙŠÙ„Ø§Øª",
        resource_card5_title: "Ø§Ù„Ø£Ø³Ø¦Ù„Ø© Ø§Ù„Ø´Ø§Ø¦Ø¹Ø©",
        resource_card5_desc: "Ø§Ø¹Ø«Ø± Ø¹Ù„Ù‰ Ø¥Ø¬Ø§Ø¨Ø§Øª Ù„Ù„Ø£Ø³Ø¦Ù„Ø© Ø§Ù„Ø´Ø§Ø¦Ø¹Ø© Ø­ÙˆÙ„ Ø®Ø¯Ù…Ø§ØªÙ†Ø§ ÙˆØ­Ù„ÙˆÙ„Ù†Ø§.",
        resource_faq_btn: "Ø¹Ø±Ø¶ Ø§Ù„Ø£Ø³Ø¦Ù„Ø© Ø§Ù„Ø´Ø§Ø¦Ø¹Ø©",
        resource_card6_title: "Ø£Ø¯ÙˆØ§Øª Ø§Ù„Ù…Ø·ÙˆØ±ÙŠÙ†",
        resource_card6_desc: "Ù‚Ù… Ø¨Ø§Ù„ÙˆØµÙˆÙ„ Ø¥Ù„Ù‰ ÙˆØ§Ø¬Ù‡Ø§Øª Ø¨Ø±Ù…Ø¬Ø© Ø§Ù„ØªØ·Ø¨ÙŠÙ‚Ø§Øª Ùˆ SDK ÙˆØ£Ø¯ÙˆØ§Øª Ø§Ù„Ù…Ø·ÙˆØ±ÙŠÙ† Ù„ØªÙƒØ§Ù…Ù„ Ø­Ù„ÙˆÙ„Ù†Ø§.",
        resource_tools_btn: "Ø§Ø³ØªÙƒØ´Ø§Ù Ø§Ù„Ø£Ø¯ÙˆØ§Øª",

        // Chatbot Blog
        blog_cb_title: "Ø±ÙˆØ¨ÙˆØªØ§Øª Ø§Ù„Ø¯Ø±Ø¯Ø´Ø© Ù…Ù‚Ø§Ø¨Ù„ Ø§Ù„Ø¯Ø¹Ù… Ø§Ù„Ø¨Ø´Ø±ÙŠ: Ù…Ø§ Ù‡Ùˆ Ø§Ù„Ø£ÙØ¶Ù„ Ù„Ø¹Ù…Ù„ÙƒØŸ",
        blog_cb_date: "15 Ø¯ÙŠØ³Ù…Ø¨Ø± 2025",
        blog_cb_author: "Ø§Ù„ÙØ±ÙŠÙ‚ Ø§Ù„ØªÙ‚Ù†ÙŠ",
        blog_cb_p1: "Customer expectations are rising faster than ever, pushing businesses to rethink how they deliver support. Both chatbots & human agents play powerful roles in shaping overall customer experiences. While automation can handle quick responses, real conversations still rely on emotional intelligence. Choosing the right balance impacts customer satisfaction, response time & operational cost. This article helps you understand where each option shines so you can decide what fits your business best.",
        blog_cb_h2_1: "1. Ù†Ù‚Ø§Ø· Ù‚ÙˆØ© Ø¯Ø¹Ù… Ø±ÙˆØ¨ÙˆØªØ§Øª Ø§Ù„Ø¯Ø±Ø¯Ø´Ø©",
        blog_cb_key_adv: "Ø§Ù„Ù…Ø²Ø§ÙŠØ§ Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©",
        blog_cb_h3_1: "Ø±Ø¯ÙˆØ¯ ÙÙˆØ±ÙŠØ©",
        blog_cb_p2: "Chatbots reply within seconds, helping businesses reduce wait times & handle peak hours efficiently.",
        blog_cb_h3_2: "ØªÙˆÙØ± 24/7",
        blog_cb_p3: "Bots remain active day & night, ensuring customers get basic information, troubleshooting steps & updates anytime.",
        blog_cb_h3_3: "Ø¹Ù…Ù„ÙŠØ§Øª ÙØ¹Ø§Ù„Ø© Ù…Ù† Ø­ÙŠØ« Ø§Ù„ØªÙƒÙ„ÙØ©",
        blog_cb_p4: "Companies save on hiring & training costs since chatbots can manage repeated queries with consistent accuracy.",
        blog_cb_h3_4: "Ù‚Ø§Ø¨Ù„ÙŠØ© Ø§Ù„ØªÙˆØ³Ø¹ Ø®Ù„Ø§Ù„ Ø§Ù„Ø·Ù„Ø¨ Ø§Ù„Ù…Ø±ØªÙØ¹",
        blog_cb_p5: "A single bot can talk to thousands of customers at once, making it ideal for fast-growing businesses.",
        blog_cb_h3_5: "Ø¬Ù…Ø¹ Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª ÙˆØ§Ù„Ø±Ø¤Ù‰",
        blog_cb_p6: "Bots automatically gather customer patterns, helping brands boost personalization & service quality.",
        blog_cb_quote: "\"Imagine a world where your customers never have to wait. It's 2 AM, and a frustrated user needs a quick answerâ€”your chatbot is there instantly, a tireless digital guardian awake while the city sleeps. But when the problem gets tough, thatâ€™s when the human touch steps in. Like a skilled diplomat, your human agent takes over, bringing empathy and deep understanding to complex issues that code simply cannot solve. This powerful duoâ€”the speed of automation and the warmth of humanityâ€”creates a support experience that doesn't just solve problems, but builds lasting trust.\"",
        blog_cb_h2_2: "2. Ù†Ù‚Ø§Ø· Ù‚ÙˆØ© Ø§Ù„Ø¯Ø¹Ù… Ø§Ù„Ø¨Ø´Ø±ÙŠ",
        blog_cb_h3_6: "1. Ø§Ù„ØªØ¹Ø§Ø·Ù ÙˆØ§Ù„ÙÙ‡Ù… Ø§Ù„Ø¹Ø§Ø·ÙÙŠ",
        blog_cb_p7: "Human agents offer something chatbots cannotâ€”real emotional connection. They can sense frustration, happiness or confusion through tone & conversation flow. This helps customers feel understood, especially during stressful or sensitive issues. Empathy builds trust, reduces conflict & makes the customer feel valued as a person, not just another ticket.",
        blog_cb_h3_7: "2. Ø­Ù„ Ø§Ù„Ù…Ø´ÙƒÙ„Ø§Øª Ø§Ù„Ø´Ø®ØµÙŠ",
        blog_cb_p8: "Humans are naturally creative thinkers. They can analyze a customerâ€™s issue from multiple angles, ask clarifying questions & suggest flexible solutions tailored to individual needs. This is helpful when problems do not follow a standard script. Personalized responses reassure customers that their situation is unique & is being handled by someone who genuinely cares.",
        blog_cb_h3_8: "3. Ø£ÙØ¶Ù„ Ù„Ù„Ù…Ø´ÙƒÙ„Ø§Øª Ø§Ù„Ù…Ø¹Ù‚Ø¯Ø©",
        blog_cb_p9: "Some problems require deeper investigation, multiple verification steps or critical judgment. Human agents excel in these situations because they understand context, exceptions & policies better than automated systems. They can coordinate with other departments, interpret unclear information & offer accurate guidance that bots often miss.",
        blog_cb_h3_9: "4. Ø¨Ù†Ø§Ø¡ Ø§Ù„Ø¹Ù„Ø§Ù‚Ø§Øª",
        blog_cb_p10: "Strong customer relationships are built through real conversations. A friendly agent can turn a negative experience into a positive one by listening actively & showing patience. Over time, this human touch boosts brand loyalty & increases the chances of repeat business. Customers are more likely to trust companies that treat them like humans rather than transactions.",
        blog_cb_h3_10: "5. Ø§Ù„ÙÙ‡Ù… Ø§Ù„Ø«Ù‚Ø§ÙÙŠ ÙˆØ§Ù„ÙØ±ÙˆÙ‚ Ø§Ù„Ø¯Ù‚ÙŠÙ‚Ø© ÙÙŠ Ø§Ù„Ù„ØºØ©",
        blog_cb_p11: "Human agents naturally understand tone, slang, regional expressions & cultural sensitivities. This ensures smoother communication & avoids misunderstandings that bots often face. Whether itâ€™s adjusting language formality or understanding local behavior patterns, humans can adapt instantlyâ€”making the experience more natural & respectful.",
        blog_cb_conclusion_title: "Ø§Ù„Ø®Ø§ØªÙ…Ø©",
        blog_cb_conclusion_p: "Both chatbots & human support offer unique strengths, making them valuable in different situations. Chatbots are perfect for quick replies, repeated questions & cost-efficient operations. Human agents shine when conversations require emotional care, critical thinking or deep problem-solving. Instead of choosing one over the other, most businesses succeed by blending automation with human expertise. This balanced approach creates faster, smarter & more human-centered support experiences for every customer.",
        blog_back_btn: "Ø§Ù„Ø¹ÙˆØ¯Ø© Ø¥Ù„Ù‰ Ø§Ù„Ù…Ø¯ÙˆÙ†Ø©"
    },
    kn: {
        nav_home: "à²®à³à²–à²ªà³à²Ÿ",
        search_placeholder: "à²¹à³à²¡à³à²•à²¿...",
        contact_name_placeholder: "à²¹à³†à²¸à²°à³",
        contact_email_placeholder: "à²‡à²®à³‡à²²à³",
        contact_message_placeholder: "à²¸à²‚à²¦à³‡à²¶",
        about_explore: "à²…à²¨à³à²µà³‡à²·à²¿à²¸à²¿",
        nav_about: "à²¨à²®à³à²® à²¬à²—à³à²—à³†",
        nav_services: "à²¸à³‡à²µà³†à²—à²³à³",
        nav_resources: "à²¸à²‚à²ªà²¨à³à²®à³‚à²²à²—à²³à³",
        nav_contact: "à²¸à²‚à²ªà²°à³à²•à²¿à²¸à²¿",
        hero_title: "à²‰à²¤à³à²¤à²® à²­à²µà²¿à²·à³à²¯à²•à³à²•à²¾à²—à²¿ à²¸à³à²®à²¾à²°à³à²Ÿà³ à²ªà²°à²¿à²¹à²¾à²°à²—à²³à³",
        hero_subtitle: "à²à²Ÿà²¿ à²ªà²°à²¿à²¹à²¾à²°à²—à²³à³ | à²µà³†à²¬à³ à²…à²­à²¿à²µà³ƒà²¦à³à²§à²¿ | à²Žà² | à²¸à²¾à²¸à³ à²ªà²°à²¿à²¹à²¾à²°",
        hero_description: "à²¡à²¿à²œà²¿à²Ÿà²²à³ à²Ÿà³à²°à²¾à²¨à³à²¸à³â€Œà²«à²¾à²°à³à²®à³‡à²·à²¨à³ à²¸à³‡à²µà³†à²—à²³à³, à²Žà²‚à²¡à³-à²Ÿà³-à²Žà²‚à²¡à³ à²à²Ÿà²¿ à²¬à³†à²‚à²¬à²², à²®à²¤à³à²¤à³ à²¸à³à²°à²•à³à²·à²¿à²¤ à²¡à³‡à²Ÿà²¾ à²†à²§à³à²¨à³€à²•à²°à²£ à²ªà²°à²¿à²¹à²¾à²°à²—à²³ à²µà²¿à²¶à³à²µà²¾à²¸à²¾à²°à³à²¹ à²ªà³‚à²°à³ˆà²•à³†à²¦à²¾à²°à²°à²¾à²¦ à²…à²¸à³†à²‚à²Ÿà³ à²¬à²¿à²¸à²¿à²¨à³†à²¸à³ à²¸à³Šà²²à³à²¯à³‚à²·à²¨à³à²¸à³â€Œà²¨à³Šà²‚à²¦à²¿à²—à³† à²¨à²¿à²®à³à²® à²µà³à²¯à²µà²¹à²¾à²°à²µà²¨à³à²¨à³ à²ªà²°à²¿à²µà²°à³à²¤à²¿à²¸à²¿. à²•à²¾à²°à³à²¯à²¾à²šà²°à²£à³†à²¯ à²¦à²•à³à²·à²¤à³†à²¯à²¨à³à²¨à³ à²¸à³à²§à²¾à²°à²¿à²¸à²²à³, à²à²Ÿà²¿ à²®à³‚à²²à²¸à³Œà²•à²°à³à²¯à²µà²¨à³à²¨à³ à²¬à²²à²ªà²¡à²¿à²¸à²²à³, à²¡à³‡à²Ÿà²¾ à²¸à³à²°à²•à³à²·à²¤à³†à²¯à²¨à³à²¨à³ à²¹à³†à²šà³à²šà²¿à²¸à²²à³ à²®à²¤à³à²¤à³ à²µà²¿à²¶à³à²µà²¾à²¸à²¾à²°à³à²¹, à²­à²µà²¿à²·à³à²¯à²¦-à²¸à²¿à²¦à³à²§ à²¤à²‚à²¤à³à²°à²œà³à²žà²¾à²¨ à²ªà²°à²¿à²¹à²¾à²°à²—à²³à³Šà²‚à²¦à²¿à²—à³† à²µà³‡à²—à²µà²¾à²—à²¿ à²¬à³†à²³à³†à²¯à²²à³ à²¨à²¾à²µà³ à²µà³à²¯à²µà²¹à²¾à²°à²—à²³à²¿à²—à³† à²¸à²¹à²¾à²¯ à²®à²¾à²¡à³à²¤à³à²¤à³‡à²µà³†.",
        hero_cta: "à²ªà³à²°à²¾à²°à²‚à²­à²¿à²¸à²¿",
        about_title: "à²¨à²®à³à²® à²¬à²—à³à²—à³†",
        about_description: "à²¨à²µà²­à²¾à²°à²¤à³ à²Ÿà³†à²•à³à²¨à²¾à²²à²œà³€à²¸à³ à²’à²‚à²¦à³ à²ªà³à²°à²®à³à²– à²à²Ÿà²¿ à²ªà²°à²¿à²¹à²¾à²° à²’à²¦à²—à²¿à²¸à³à²µ à²¸à²‚à²¸à³à²¥à³†à²¯à²¾à²—à²¿à²¦à³à²¦à³, à²¨à²µà³€à²¨ à²®à²¤à³à²¤à³ à²¦à³ƒà²¢à²µà²¾à²¦ à²¡à²¿à²œà²¿à²Ÿà²²à³ à²‰à²¤à³à²ªà²¨à³à²¨à²—à²³à²¨à³à²¨à³ à²¤à²²à³à²ªà²¿à²¸à²²à³ à²®à³€à²¸à²²à²¾à²—à²¿à²°à³à²¤à³à²¤à²¦à³†. à²ªà²°à²¿à²£à²¤ à²¡à³†à²µà²²à²ªà²°à³â€Œà²—à²³à³ à²®à²¤à³à²¤à³ à²µà²¿à²¨à³à²¯à²¾à²¸à²•à²° à²¤à²‚à²¡à²¦à³Šà²‚à²¦à²¿à²—à³†, à²¨à²¾à²µà³ à²†à²²à³‹à²šà²¨à³†à²—à²³à²¨à³à²¨à³ à²µà²¾à²¸à³à²¤à²µà²•à³à²•à³† à²ªà²°à²¿à²µà²°à³à²¤à²¿à²¸à³à²¤à³à²¤à³‡à²µà³†. à²µà³à²¯à²µà²¹à²¾à²°à²—à²³à²¨à³à²¨à³ à²¸à³à²•à³‡à²²à²¬à²²à³ à²®à²¤à³à²¤à³ à²ªà²°à²¿à²£à²¾à²®à²•à²¾à²°à²¿ à²¤à²‚à²¤à³à²°à²œà³à²žà²¾à²¨à²¦à³Šà²‚à²¦à²¿à²—à³† à²¸à²¶à²•à³à²¤à²—à³Šà²³à²¿à²¸à³à²µà³à²¦à³ à²¨à²®à³à²® à²§à³à²¯à³‡à²¯à²µà²¾à²—à²¿à²¦à³†.",
        about_feature1: "à²¨à²µà³€à²¨ à²ªà²°à²¿à²¹à²¾à²°à²—à²³à³",
        about_feature2: "à²¡à²¿à²œà²¿à²Ÿà²²à³ à²®à²¾à²°à³à²•à³†à²Ÿà²¿à²‚à²—à³",
        about_feature3: "à²—à³à²°à²¾à²¹à²• à²¸à³à²¨à³‡à²¹à²¿ à²µà²¿à²§à²¾à²¨",
        about_feature4: "à²¤à²œà³à²žà²° à²¤à²‚à²¡",
        services_title: "à²¨à²®à³à²® à²¸à³‡à²µà³†à²—à²³à³",
        services_subtitle: "à²¨à²¿à²®à³à²® à²µà³à²¯à²µà²¹à²¾à²°à²¦ à²…à²—à²¤à³à²¯à²—à²³à²¿à²—à²¾à²—à²¿ à²¸à²®à²—à³à²° à²ªà²°à²¿à²¹à²¾à²°à²—à²³à³",
        service1_title: "à²µà³†à²¬à³ à²…à²­à²¿à²µà³ƒà²¦à³à²§à²¿",
        service1_description: "à²•à²¾à²°à³à²¯à²•à³à²·à²®à²¤à³† à²®à²¤à³à²¤à³ à²¸à³à²•à³‡à²²à³†à²¬à²¿à²²à²¿à²Ÿà²¿à²¯à²¨à³à²¨à³ à²–à²šà²¿à²¤à²ªà²¡à²¿à²¸à²¿à²•à³Šà²³à³à²³à²²à³ à²†à²§à³à²¨à²¿à²• à²¤à²‚à²¤à³à²°à²œà³à²žà²¾à²¨à²—à²³à³Šà²‚à²¦à²¿à²—à³† à²¨à²¿à²°à³à²®à²¿à²¸à²²à²¾à²¦ à²•à²¸à³à²Ÿà²®à³ à²µà³†à²¬à³â€Œà²¸à³ˆà²Ÿà³â€Œà²—à²³à³.",
        service2_title: "à²®à³Šà²¬à³ˆà²²à³ à²…à²ªà³à²²à²¿à²•à³‡à²¶à²¨à³ à²…à²­à²¿à²µà³ƒà²¦à³à²§à²¿",
        service2_description: "à²¤à²¡à³†à²°à²¹à²¿à²¤ à²¬à²³à²•à³†à²¦à²¾à²° à²…à²¨à³à²­à²µà²—à²³à²¿à²—à²¾à²—à²¿ à²µà²¿à²¨à³à²¯à²¾à²¸à²—à³Šà²³à²¿à²¸à²²à²¾à²¦ à²¸à³à²¥à²³à³€à²¯ à²®à²¤à³à²¤à³ à²…à²¡à³à²¡-à²ªà³à²²à²¾à²Ÿà³â€Œà²«à²¾à²°à³à²®à³ à²®à³Šà²¬à³ˆà²²à³ à²…à²ªà³à²²à²¿à²•à³‡à²¶à²¨à³â€Œà²—à²³à³.",
        service3_title: "à²•à³à²²à³Œà²¡à³ à²ªà²°à²¿à²¹à²¾à²°à²—à²³à³",
        service3_description: "à²¸à³à²°à²•à³à²·à²¿à²¤ à²®à²¤à³à²¤à³ à²¸à³à²•à³‡à²²à²¬à²²à³ à²•à³à²²à³Œà²¡à³ à²®à³‚à²²à²¸à³Œà²•à²°à³à²¯ à²¸à³†à²Ÿà²ªà³ à²®à²¤à³à²¤à³ à²¨à²¿à²°à³à²µà²¹à²£à²¾ à²¸à³‡à²µà³†à²—à²³à³.",
        service4_title: "UI/UX à²µà²¿à²¨à³à²¯à²¾à²¸",
        service4_description: "à²†à²•à²°à³à²·à²• à²®à²¤à³à²¤à³ à²…à²°à³à²¥à²—à²°à³à²­à²¿à²¤ à²¡à²¿à²œà²¿à²Ÿà²²à³ à²‰à²¤à³à²ªà²¨à³à²¨à²—à²³à²¨à³à²¨à³ à²°à²šà²¿à²¸à³à²µ à²¬à²³à²•à³†à²¦à²¾à²° à²•à³‡à²‚à²¦à³à²°à²¿à²¤ à²µà²¿à²¨à³à²¯à²¾à²¸.",
        service5_title: "à²¡à²¿à²œà²¿à²Ÿà²²à³ à²®à²¾à²°à³à²•à³†à²Ÿà²¿à²‚à²—à³",
        service5_description: "à²¨à²¿à²®à³à²® à²†à²¨à³â€Œà²²à³ˆà²¨à³ à²‰à²ªà²¸à³à²¥à²¿à²¤à²¿à²¯à²¨à³à²¨à³ à²¹à³†à²šà³à²šà²¿à²¸à²²à³ à²¬à³à²¦à³à²§à²¿à²µà²‚à²¤ à²®à²¾à²°à³à²•à³†à²Ÿà²¿à²‚à²—à³ à²¤à²‚à²¤à³à²°à²—à²³à²¨à³à²¨à³ à²…à²³à²µà²¡à²¿à²¸à³à²µà³à²¦à³.",
        service6_title: "à²à²µà²¿à²†à²°à³ à²ªà²°à²¿à²¹à²¾à²°à²—à²³à³",
        service6_description: "à²—à³à²°à²¾à²¹à²•à²° à²¸à²‚à²µà²¹à²¨à²—à²³à²¨à³à²¨à³ à²¸à³à²µà²¯à²‚à²šà²¾à²²à²¿à²¤à²—à³Šà²³à²¿à²¸à²²à³ à²®à²¤à³à²¤à³ à²¬à³à²¦à³à²§à²¿à²µà²‚à²¤ à²§à³à²µà²¨à²¿ à²®à³†à²¨à³à²—à²³à³Šà²‚à²¦à²¿à²—à³† à²•à²°à³† à²¨à²¿à²°à³à²µà²¹à²£à³†à²¯à²¨à³à²¨à³ à²¸à³à²—à²®à²—à³Šà²³à²¿à²¸à²²à³ à²¸à³à²§à²¾à²°à²¿à²¤ à²‡à²‚à²Ÿà²°à³à²¯à²¾à²•à³à²Ÿà²¿à²µà³ à²µà²¾à²¯à³à²¸à³ à²°à³†à²¸à³à²ªà²¾à²¨à³à²¸à³ à²¸à²¿à²¸à³à²Ÿà²®à³â€Œà²—à²³à³.",
        service7_title: "à²Žà² à²ªà²°à²¿à²¹à²¾à²°à²—à²³à³",
        service7_description: "à²ªà³à²°à²•à³à²°à²¿à²¯à³†à²—à²³à²¨à³à²¨à³ à²¸à³à²µà²¯à²‚à²šà²¾à²²à²¿à²¤à²—à³Šà²³à²¿à²¸à²²à³, à²¨à²¿à²°à³à²§à²¾à²° à²¤à³†à²—à³†à²¦à³à²•à³Šà²³à³à²³à³à²µà²¿à²•à³†à²¯à²¨à³à²¨à³ à²¹à³†à²šà³à²šà²¿à²¸à²²à³ à²®à²¤à³à²¤à³ à²¨à²¿à²®à³à²® à²µà³à²¯à²µà²¹à²¾à²°à²•à³à²•à²¾à²—à²¿ à²¡à³‡à²Ÿà²¾-à²šà²¾à²²à²¿à²¤ à²’à²³à²¨à³‹à²Ÿà²—à²³à²¨à³à²¨à³ à²…à²¨à³à²²à²¾à²•à³ à²®à²¾à²¡à²²à³ à²…à²¤à³à²¯à²¾à²§à³à²¨à²¿à²• à²•à³ƒà²¤à²• à²¬à³à²¦à³à²§à²¿à²®à²¤à³à²¤à³† à²®à²¤à³à²¤à³ à²¯à²‚à²¤à³à²° à²•à²²à²¿à²•à³† à²ªà²°à²¿à²¹à²¾à²°à²—à²³à³.",

        // Why Choose Us Section
        why_choose_title: "à²¨à²µà²­à²¾à²°à²¤à³ à²Ÿà³†à²•à³à²¨à²¾à²²à²œà³€à²¸à³ à²…à²¨à³à²¨à³ à²à²•à³† à²†à²°à²¿à²¸à²¿?",
        why_feature1_title: "à²­à²µà²¿à²·à³à²¯à²¦-à²¸à²¿à²¦à³à²§ à²ªà²°à²¿à²¹à²¾à²°à²—à²³à³",
        why_feature1_desc: "à²¶à²¾à²¶à³à²µà²¤ à²¡à²¿à²œà²¿à²Ÿà²²à³ à²…à²¡à²¿à²ªà²¾à²¯à²—à²³à²¨à³à²¨à³ à²¨à²¿à²°à³à²®à²¿à²¸à³à²µà³à²¦à³.",
        why_feature2_title: "à²‰à²¨à³à²¨à²¤ à²­à²¦à³à²°à²¤à²¾ à²®à²¾à²¨à²¦à²‚à²¡à²—à²³à³",
        why_feature2_desc: "à²¸à³à²°à²•à³à²·à²¿à²¤ à²®à²¤à³à²¤à³ à²¸à²‚à²°à²•à³à²·à²¿à²¤ à²¡à³‡à²Ÿà²¾à²µà²¨à³à²¨à³ à²–à²šà²¿à²¤à²ªà²¡à²¿à²¸à²¿à²•à³Šà²³à³à²³à³à²µà³à²¦à³.",
        why_feature3_title: "à²Žà²‚à²¡à³-à²Ÿà³-à²Žà²‚à²¡à³ à²…à²­à²¿à²µà³ƒà²¦à³à²§à²¿",
        why_feature3_desc: "à²¸à²‚à²¶à³‹à²§à²¨à³†à²¯à²¿à²‚à²¦ à²¨à²¿à²¯à³‹à²œà²¨à³† à²®à²¤à³à²¤à³ à²¬à³†à²‚à²¬à²²à²¦à²µà²°à³†à²—à³†.",
        why_feature4_title: "à²«à²²à²¿à²¤à²¾à²‚à²¶-à²†à²§à²¾à²°à²¿à²¤ à²µà²¿à²§à²¾à²¨",
        why_feature4_desc: "à²¨à²¾à²µà³ à²•à²¾à²°à³à²¯à²•à³à²·à²®à²¤à³†, à²µà³‡à²— à²®à²¤à³à²¤à³ à²‰à²ªà²¯à³à²•à³à²¤à²¤à³†à²¯ à²®à³‡à²²à³† à²•à³‡à²‚à²¦à³à²°à³€à²•à²°à²¿à²¸à³à²¤à³à²¤à³‡à²µà³†.",
        why_feature5_title: "à²—à³à²°à²¾à²¹à²•-à²•à³‡à²‚à²¦à³à²°à²¿à²¤ à²¤à²‚à²¡",
        why_feature5_desc: "à²¸à²®à²°à³à²ªà²¿à²¤ à²¬à³†à²‚à²¬à²² à²®à²¤à³à²¤à³ à²ªà²¾à²°à²¦à²°à³à²¶à²• à²¸à²‚à²µà²¹à²¨.",
        why_feature6_title: "à²¡à³†à²µà³Šà²¬à³à²¸à³ à²¸à³‡à²µà³†à²—à²³à³",
        why_feature6_desc: "à²¸à³à²°à²•à³à²·à²¿à²¤, à²¸à³à²•à³‡à²²à²¬à²²à³ à²®à²¤à³à²¤à³ à²µà²¿à²¶à³à²µà²¾à²¸à²¾à²°à³à²¹ à²®à³‚à²²à²¸à³Œà²•à²°à³à²¯.",
        contact_title: "à²¨à²®à³à²®à²¨à³à²¨à³ à²¸à²‚à²ªà²°à³à²•à²¿à²¸à²¿",
        contact_subtitle: "à²¨à²¿à²®à³à²® à²¯à³‹à²œà²¨à³†à²¯à²¨à³à²¨à³ à²ªà³à²°à²¾à²°à²‚à²­à²¿à²¸à²²à³ à²¸à²¿à²¦à³à²§à²°à²¿à²¦à³à²¦à³€à²°à²¾? à²‡à²‚à²¦à³‡ à²¨à²®à³à²®à²¨à³à²¨à³ à²¸à²‚à²ªà²°à³à²•à²¿à²¸à²¿.",
        form_name: "à²¹à³†à²¸à²°à³",
        form_email: "à²‡à²®à³‡à²²à³",
        form_message: "à²¸à²‚à²¦à³‡à²¶",
        form_submit: "à²¸à²‚à²¦à³‡à²¶ à²•à²³à³à²¹à²¿à²¸à²¿",
        footer_tagline: "à²¨à²¿à²®à³à²® à²¡à²¿à²œà²¿à²Ÿà²²à³ à²­à²µà²¿à²·à³à²¯à²µà²¨à³à²¨à³ à²¸à²¶à²•à³à²¤à²—à³Šà²³à²¿à²¸à³à²µà³à²¦à³",
        footer_links_title: "à²•à²‚à²ªà²¨à²¿",
        footer_support: "à²¬à³†à²‚à²¬à²²",
        footer_about: "à²¨à²®à³à²® à²¬à²—à³à²—à³†",
        footer_services: "à²¸à³‡à²µà³†à²—à²³à³",
        footer_contact: "à²¸à²‚à²ªà²°à³à²•à²¿à²¸à²¿",
        footer_social_title: "à²¨à²®à³à²®à²¨à³à²¨à³ à²¹à²¿à²‚à²¬à²¾à²²à²¿à²¸à²¿",
        footer_copyright: "Â© 2025 à²¨à²µà²­à²¾à²°à²¤à³ à²Ÿà³†à²•à³à²¨à²¾à²²à²œà³€à²¸à³. à²Žà²²à³à²²à²¾ à²¹à²•à³à²•à³à²—à²³à²¨à³à²¨à³ à²•à²¾à²¯à³à²¦à²¿à²°à²¿à²¸à²²à²¾à²—à²¿à²¦à³†.",

        // Blog Page
        blog_banner_title: "à²¨à²®à³à²® à²¬à³à²²à²¾à²—à³",
        blog_banner_desc: "à²¤à²‚à²¤à³à²°à²œà³à²žà²¾à²¨ à²ªà³à²°à²ªà²‚à²šà²¦ à²’à²³à²¨à³‹à²Ÿà²—à²³à³, à²¨à²µà³€à²•à²°à²£à²—à²³à³ à²®à²¤à³à²¤à³ à²¤à²œà³à²žà²° à²…à²­à²¿à²ªà³à²°à²¾à²¯à²—à²³à³.",
        blog_post1_title: "à²šà²¾à²Ÿà³â€Œà²¬à²¾à²Ÿà³â€Œà²—à²³à³ à²µà²°à³à²¸à²¸à³ à²®à²¾à²¨à²µ à²¬à³†à²‚à²¬à²²: à²¨à²¿à²®à³à²® à²µà³à²¯à²¾à²ªà²¾à²°à²•à³à²•à³† à²¯à²¾à²µà³à²¦à³ à²‰à²¤à³à²¤à²®?",
        blog_post1_excerpt: "à²šà²¾à²Ÿà³â€Œà²¬à²¾à²Ÿà³â€Œà²—à²³à³ à²®à²¤à³à²¤à³ à²®à²¾à²¨à²µ à²¬à³†à²‚à²¬à²²à²µà³ à²—à³à²°à²¾à²¹à²• à²¸à³‡à²µà³†à²¯à²¨à³à²¨à³ à²¹à³‡à²—à³† à²®à²°à³à²°à³‚à²ªà²¿à²¸à³à²¤à³à²¤à²¿à²¦à³† à²Žà²‚à²¬à³à²¦à²¨à³à²¨à³ à²…à²¨à³à²µà³‡à²·à²¿à²¸à²¿ - à²®à²¤à³à²¤à³ à²¨à²¿à²®à³à²® à²µà³à²¯à²¾à²ªà²¾à²°à²•à³à²•à³† à²¯à²¾à²µ à²µà²¿à²§à²¾à²¨à²µà³ à²‰à²¤à³à²¤à²®à²µà²¾à²—à²¿ à²•à²¾à²°à³à²¯à²¨à²¿à²°à³à²µà²¹à²¿à²¸à³à²¤à³à²¤à²¦à³† à²Žà²‚à²¬à³à²¦à²¨à³à²¨à³ à²¤à²¿à²³à²¿à²¯à²¿à²°à²¿.",
        blog_post2_title: "à²…à²—à²¤à³à²¯ à²•à³à²²à³Œà²¡à³ à²­à²¦à³à²°à²¤à²¾ à²…à²¤à³à²¯à³à²¤à³à²¤à²® à²…à²­à³à²¯à²¾à²¸à²—à²³à³",
        blog_post2_excerpt: "à²µà³à²¯à²¾à²ªà²¾à²°à²—à²³à³ à²•à³à²²à³Œà²¡à³â€Œà²—à³† à²šà²²à²¿à²¸à³à²¤à³à²¤à²¿à²¦à³à²¦à²‚à²¤à³†, à²­à²¦à³à²°à²¤à³† à²…à²¤à³à²¯à²‚à²¤ à²®à³à²–à³à²¯à²µà²¾à²—à²¿à²¦à³†. à²¨à²¿à²®à³à²® à²¡à²¿à²œà²¿à²Ÿà²²à³ à²¸à³à²µà²¤à³à²¤à³à²—à²³à³ à²®à²¤à³à²¤à³ à²¡à³‡à²Ÿà²¾à²µà²¨à³à²¨à³ à²°à²•à³à²·à²¿à²¸à²²à³ à²‰à²¨à³à²¨à²¤ à²¤à²‚à²¤à³à²°à²—à²³à²¨à³à²¨à³ à²¤à²¿à²³à²¿à²¯à²¿à²°à²¿.",
        blog_post3_title: "2026 à²° à²ªà³à²°à²®à³à²– à²µà³†à²¬à³ à²…à²­à²¿à²µà³ƒà²¦à³à²§à²¿ à²Ÿà³à²°à³†à²‚à²¡à³â€Œà²—à²³à³",
        blog_post3_excerpt: "à²®à³à²‚à²¦à²¿à²¨ à²µà²°à³à²· à²‡à²‚à²Ÿà²°à³à²¨à³†à²Ÿà³ à²…à²¨à³à²¨à³ à²°à³‚à²ªà²¿à²¸à³à²µ à²‰à²¦à²¯à³‹à²¨à³à²®à³à²– à²µà³†à²¬à³ à²…à²­à²¿à²µà³ƒà²¦à³à²§à²¿ à²Ÿà³à²°à³†à²‚à²¡à³â€Œà²—à²³ à²¨à²®à³à²® à²µà²¿à²¶à³à²²à³‡à²·à²£à³†à²¯à³Šà²‚à²¦à²¿à²—à³† à²¯à²¾à²µà²¾à²—à²²à³‚ à²®à³à²‚à²¦à²¿à²°à²¿.",
        read_more: "à²‡à²¨à³à²¨à²·à³à²Ÿà³ à²“à²¦à²¿",
        footer_links_title: "à²•à²‚à²ªà²¨à²¿",
        footer_support: "à²¬à³†à²‚à²¬à²²",
        footer_terms: "à²¨à²¿à²¯à²®à²—à²³à³ à²®à²¤à³à²¤à³ à²·à²°à²¤à³à²¤à³à²—à²³à³",
        footer_privacy: "à²—à³Œà²ªà³à²¯à²¤à³†",
        footer_about: "à²¨à²®à³à²® à²¬à²—à³à²—à³†",

        // Resources Page
        resources_intro_title: "à²œà³à²žà²¾à²¨ à²•à³‡à²‚à²¦à³à²°",
        resources_intro_desc: "à²¡à²¿à²œà²¿à²Ÿà²²à³ à²œà²—à²¤à³à²¤à²¿à²¨à²²à³à²²à²¿ à²®à³à²‚à²¦à³† à²¸à²¾à²—à²²à³ à²¨à²®à³à²® à²¸à²‚à²ªà²¨à³à²®à³‚à²²à²—à²³à³, à²®à²¾à²°à³à²—à²¦à²°à³à²¶à²¿à²—à²³à³ à²®à²¤à³à²¤à³ à²’à²³à²¨à³‹à²Ÿà²—à²³ à²¸à²‚à²—à³à²°à²¹à²µà²¨à³à²¨à³ à²…à²¨à³à²µà³‡à²·à²¿à²¸à²¿. à²¤à²¾à²‚à²¤à³à²°à²¿à²• à²¦à²¾à²–à²²à²¾à²¤à²¿à²¯à²¿à²‚à²¦ à²‰à²¦à³à²¯à²®à²¦ à²…à²¤à³à²¯à³à²¤à³à²¤à²® à²…à²­à³à²¯à²¾à²¸à²—à²³à²µà²°à³†à²—à³†, à²¨à²¿à²®à³à²® à²µà³à²¯à²¾à²ªà²¾à²° à²ªà³à²°à²¯à²¾à²£à²µà²¨à³à²¨à³ à²¬à³†à²‚à²¬à²²à²¿à²¸à²²à³ à²¨à²¾à²µà³ à²…à²®à³‚à²²à³à²¯à²µà²¾à²¦ à²µà²¿à²·à²¯à²µà²¨à³à²¨à³ à²¸à²‚à²—à³à²°à²¹à²¿à²¸à²¿à²¦à³à²¦à³‡à²µà³†.",
        resource_card1_title: "à²¦à²¾à²–à²²à²¾à²¤à²¿",
        resource_card1_desc: "à²¨à²®à³à²® à²¸à³‡à²µà³†à²—à²³à³ à²®à²¤à³à²¤à³ à²ªà²°à²¿à²¹à²¾à²°à²—à²³à²¿à²—à²¾à²—à²¿ à²¸à²®à²—à³à²° à²®à²¾à²°à³à²—à²¦à²°à³à²¶à²¿à²—à²³à³ à²®à²¤à³à²¤à³ à²¤à²¾à²‚à²¤à³à²°à²¿à²• à²¦à²¾à²–à²²à²¾à²¤à²¿. à²¨à²®à³à²® à²¤à²‚à²¤à³à²°à²œà³à²žà²¾à²¨à²¦ à²®à³Œà²²à³à²¯à²µà²¨à³à²¨à³ à²¹à³‡à²—à³† à²¸à²‚à²¯à³‹à²œà²¿à²¸à³à²µà³à²¦à³ à²®à²¤à³à²¤à³ à²¹à³†à²šà³à²šà²¿à²¸à³à²µà³à²¦à³ à²Žà²‚à²¬à³à²¦à²¨à³à²¨à³ à²¤à²¿à²³à²¿à²¯à²¿à²°à²¿.",
        resource_view_btn: "à²¦à²¾à²–à²²à²¾à²¤à²¿à²¯à²¨à³à²¨à³ à²µà³€à²•à³à²·à²¿à²¸à²¿",
        resource_card2_title: "à²¬à³à²²à²¾à²—à³ à²®à²¤à³à²¤à³ à²’à²³à²¨à³‹à²Ÿà²—à²³à³",
        resource_card2_desc: "à²¨à²®à³à²® à²¤à²œà³à²žà²° à²¤à²‚à²¡à²¦à²¿à²‚à²¦ à²‡à²¤à³à²¤à³€à²šà²¿à²¨ à²ªà³à²°à²µà³ƒà²¤à³à²¤à²¿à²—à²³à³, à²¸à²²à²¹à³†à²—à²³à³ à²®à²¤à³à²¤à³ à²’à²³à²¨à³‹à²Ÿà²—à²³à³Šà²‚à²¦à²¿à²—à³† à²¨à²µà³€à²•à³ƒà²¤à²µà²¾à²—à²¿à²°à²¿. à²‰à²¦à³à²¯à²®à²¦ à²¸à³à²¦à³à²¦à²¿à²—à²³à³ à²®à²¤à³à²¤à³ à²…à²¤à³à²¯à³à²¤à³à²¤à²® à²…à²­à³à²¯à²¾à²¸à²—à²³à²¨à³à²¨à³ à²…à²¨à³à²µà³‡à²·à²¿à²¸à²¿.",
        resource_read_btn: "à²¬à³à²²à²¾à²—à³ à²“à²¦à²¿",
        resource_card3_title: "à²µà³€à²¡à²¿à²¯à³Š à²Ÿà³à²¯à³à²Ÿà³‹à²°à²¿à²¯à²²à³à²¸à³",
        resource_card3_desc: "à²…à²­à²¿à²µà³ƒà²¦à³à²§à²¿à²¯à²¿à²‚à²¦ à²¨à²¿à²¯à³‹à²œà²¨à³† à²®à²¤à³à²¤à³ à²†à²ªà³à²Ÿà²¿à²®à³ˆà²¸à³‡à²¶à²¨à³â€Œà²µà²°à³†à²—à³† à²µà²¿à²µà²¿à²§ à²µà²¿à²·à²¯à²—à²³à²¨à³à²¨à³ à²’à²³à²—à³Šà²‚à²¡ à²¹à²‚à²¤-à²¹à²‚à²¤à²¦ à²µà³€à²¡à²¿à²¯à³Š à²Ÿà³à²¯à³à²Ÿà³‹à²°à²¿à²¯à²²à³â€Œà²—à²³à³ à²®à²¤à³à²¤à³ à²µà³†à²¬à³â€Œà²¨à²¾à²°à³â€Œà²—à²³à²¨à³à²¨à³ à²µà³€à²•à³à²·à²¿à²¸à²¿.",
        resource_watch_btn: "à²µà³€à²¡à²¿à²¯à³Šà²—à²³à²¨à³à²¨à³ à²µà³€à²•à³à²·à²¿à²¸à²¿",
        resource_card4_title: "à²¡à³Œà²¨à³â€Œà²²à³‹à²¡à³â€Œà²—à²³à³",
        resource_card4_desc: "à²¨à²¿à²®à³à²® à²µà³à²¯à²¾à²ªà²¾à²°à²•à³à²•à²¾à²—à²¿ à²¤à²¿à²³à³à²µà²³à²¿à²•à³†à²¯à³à²³à³à²³ à²¨à²¿à²°à³à²§à²¾à²°à²—à²³à²¨à³à²¨à³ à²¤à³†à²—à³†à²¦à³à²•à³Šà²³à³à²³à²²à³ à²¸à²¹à²¾à²¯ à²®à²¾à²¡à²²à³ à²¶à³à²µà³‡à²¤à²ªà²¤à³à²°à²—à²³à³, à²•à³‡à²¸à³ à²¸à³à²Ÿà²¡à³€à²¸à³ à²®à²¤à³à²¤à³ à²¡à³Œà²¨à³â€Œà²²à³‹à²¡à³ à²®à²¾à²¡à²¬à²¹à³à²¦à²¾à²¦ à²¸à²‚à²ªà²¨à³à²®à³‚à²²à²—à²³à²¨à³à²¨à³ à²ªà³à²°à²µà³‡à²¶à²¿à²¸à²¿.",
        resource_download_btn: "à²¡à³Œà²¨à³â€Œà²²à³‹à²¡à³â€Œà²—à²³à²¨à³à²¨à³ à²ªà²¡à³†à²¯à²¿à²°à²¿",
        resource_card5_title: "FAQ",
        resource_card5_desc: "à²¨à²®à³à²® à²¸à³‡à²µà³†à²—à²³à³, à²ªà³à²°à²•à³à²°à²¿à²¯à³†à²—à²³à³ à²®à²¤à³à²¤à³ à²¤à²‚à²¤à³à²°à²œà³à²žà²¾à²¨ à²ªà²°à²¿à²¹à²¾à²°à²—à²³ à²¬à²—à³à²—à³† à²†à²—à²¾à²—à³à²—à³† à²•à³‡à²³à²²à²¾à²—à³à²µ à²ªà³à²°à²¶à³à²¨à³†à²—à²³à²¿à²—à³† à²‰à²¤à³à²¤à²°à²—à²³à²¨à³à²¨à³ à²¹à³à²¡à³à²•à²¿.",
        resource_faq_btn: "FAQ à²µà³€à²•à³à²·à²¿à²¸à²¿",
        resource_card6_title: "à²¡à³†à²µà²²à²ªà²°à³ à²ªà²°à²¿à²•à²°à²—à²³à³",
        resource_card6_desc: "à²¨à²®à³à²® à²ªà²°à²¿à²¹à²¾à²°à²—à²³à²¨à³à²¨à³ à²¨à²¿à²®à³à²® à²…à²ªà³à²²à²¿à²•à³‡à²¶à²¨à³â€Œà²—à²³à²¿à²—à³† à²®à²¨à²¬à²‚à²¦à²‚à²¤à³† à²¸à²‚à²¯à³‹à²œà²¿à²¸à²²à³ APIà²—à²³à³, SDKà²—à²³à³ à²®à²¤à³à²¤à³ à²¡à³†à²µà²²à²ªà²°à³ à²ªà²°à²¿à²•à²°à²—à²³à²¨à³à²¨à³ à²ªà³à²°à²µà³‡à²¶à²¿à²¸à²¿.",
        resource_tools_btn: "à²ªà²°à²¿à²•à²°à²—à²³à²¨à³à²¨à³ à²…à²¨à³à²µà³‡à²·à²¿à²¸à²¿",

        // Privacy Policy Page
        privacy_sec1_title: "1. à²¨à²¾à²µà³ à²¸à²‚à²—à³à²°à²¹à²¿à²¸à³à²µ à²®à²¾à²¹à²¿à²¤à²¿",
        privacy_sec1_strong1: "à²¬à²³à²•à³†à²¦à²¾à²°à²°à²¿à²‚à²¦ à²¨à³‡à²°à²µà²¾à²—à²¿:",
        privacy_sec1_p1: "à²¹à³†à²¸à²°à³, à²‡à²®à³‡à²²à³, à²«à³‹à²¨à³ à²¸à²‚à²–à³à²¯à³†, à²•à²‚à²ªà²¨à²¿à²¯ à²¹à³†à²¸à²°à³ à²®à²¤à³à²¤à³ 'à²¨à²®à³à²®à²¨à³à²¨à³ à²¸à²‚à²ªà²°à³à²•à²¿à²¸à²¿' à²«à²¾à²°à³à²®à³ à²®à³‚à²²à²• à²¸à²²à³à²²à²¿à²¸à²¿à²¦ à²¸à²‚à²¦à³‡à²¶ à²µà²¿à²·à²¯.",
        privacy_sec1_strong2: "à²¸à³à²µà²¯à²‚à²šà²¾à²²à²¿à²¤à²µà²¾à²—à²¿ à²¸à²‚à²—à³à²°à²¹à²¿à²¸à²²à²¾à²—à²¿à²¦à³†:",
        privacy_sec1_p2: "IP à²µà²¿à²³à²¾à²¸, à²¬à³à²°à³Œà²¸à²°à³ à²ªà³à²°à²•à²¾à²°, à²†à²ªà²°à³‡à²Ÿà²¿à²‚à²—à³ à²¸à²¿à²¸à³à²Ÿà²®à³, à²­à³‡à²Ÿà²¿ à²¨à³€à²¡à²¿à²¦ à²ªà³à²Ÿà²—à²³à³ à²®à²¤à³à²¤à³ à²¸à³ˆà²Ÿà³â€Œà²¨à²²à³à²²à²¿ à²•à²³à³†à²¦ à²¸à²®à²¯ (à²•à³à²•à³€à²—à²³à³/à²…à²¨à²¾à²²à²¿à²Ÿà²¿à²•à³à²¸à³ à²®à³‚à²²à²•).",
        privacy_sec2_title: "2. à²¨à²¾à²µà³ à²®à²¾à²¹à²¿à²¤à²¿à²¯à²¨à³à²¨à³ à²¹à³‡à²—à³† à²¬à²³à²¸à³à²¤à³à²¤à³‡à²µà³†",
        privacy_sec2_li1: "à²µà²¿à²šà²¾à²°à²£à³†à²—à²³à²¿à²—à³† à²ªà³à²°à²¤à²¿à²•à³à²°à²¿à²¯à²¿à²¸à²²à³ (à²¸à²‚à²ªà²°à³à²• à²«à²¾à²°à³à²®à³ à²¡à³‡à²Ÿà²¾à²¦ à²ªà³à²°à²¾à²¥à²®à²¿à²• à²¬à²³à²•à³†).",
        privacy_sec2_li2: "à²µà³†à²¬à³â€Œà²¸à³ˆà²Ÿà³ à²®à²¤à³à²¤à³ à²®à²¾à²°à³à²•à³†à²Ÿà²¿à²‚à²—à³ à²ªà³à²°à²¯à²¤à³à²¨à²—à²³à²¨à³à²¨à³ à²¸à³à²§à²¾à²°à²¿à²¸à²²à³.",
        privacy_sec2_li3: "à²’à²¦à²—à²¿à²¸à²¿à²¦ à²¸à³‡à²µà³†à²—à²³à²¿à²—à³† à²¸à²‚à²¬à²‚à²§à²¿à²¸à²¿à²¦ à²†à²‚à²¤à²°à²¿à²• à²¦à²¾à²–à²²à³† à²®à²¤à³à²¤à³ à²¬à²¿à²²à³à²²à²¿à²‚à²—à³â€Œà²—à²¾à²—à²¿.",
        privacy_sec3_title: "3. à²¡à³‡à²Ÿà²¾ à²¹à²‚à²šà²¿à²•à³† à²®à²¤à³à²¤à³ à²¬à²¹à²¿à²°à²‚à²—à²ªà²¡à²¿à²¸à³à²µà²¿à²•à³†",
        privacy_sec3_strong1: "à²¸à³‡à²µà³† à²ªà³‚à²°à³ˆà²•à³†à²¦à²¾à²°à²°à³:",
        privacy_sec3_p1: "à²¨à²®à³à²® à²ªà²°à²µà²¾à²—à²¿ à²¡à³‡à²Ÿà²¾à²µà²¨à³à²¨à³ à²ªà³à²°à²•à³à²°à²¿à²¯à³†à²—à³Šà²³à²¿à²¸à³à²µ à²®à³‚à²°à²¨à³‡ à²µà³à²¯à²•à³à²¤à²¿à²¯ à²®à²¾à²°à²¾à²Ÿà²—à²¾à²°à²°à³Šà²‚à²¦à²¿à²—à³† (à²‰à²¦à²¾., à²¹à³‹à²¸à³à²Ÿà²¿à²‚à²—à³ à²ªà³‚à²°à³ˆà²•à³†à²¦à²¾à²°à²°à³, CRM à²¸à²¾à²«à³à²Ÿà³â€Œà²µà³‡à²°à³, Google Analytics) à²¨à²¾à²µà³ à²¡à³‡à²Ÿà²¾à²µà²¨à³à²¨à³ à²¹à²‚à²šà²¿à²•à³Šà²³à³à²³à²¬à²¹à³à²¦à³.",
        privacy_sec3_strong2: "à²•à²¾à²¨à³‚à²¨à³ à²…à²¨à³à²¸à²°à²£à³†:",
        privacy_sec3_p2: "à²•à²¾à²¨à³‚à²¨à³, à²¨à³à²¯à²¾à²¯à²¾à²²à²¯à²¦ à²†à²¦à³‡à²¶ à²…à²¥à²µà²¾ à²¸à²°à³à²•à²¾à²°à²¿ à²µà²¿à²¨à²‚à²¤à²¿à²¯ à²®à³‚à²²à²• à²…à²—à²¤à³à²¯à²µà²¿à²¦à³à²¦à²°à³† à²¨à²¾à²µà³ à²®à²¾à²¹à²¿à²¤à²¿à²¯à²¨à³à²¨à³ à²¬à²¹à²¿à²°à²‚à²—à²ªà²¡à²¿à²¸à²¬à²¹à³à²¦à³.",
        privacy_sec4_title: "4. à²¡à³‡à²Ÿà²¾ à²§à²¾à²°à²£",
        privacy_sec4_p1: "à²¨à²¾à²µà³ à²¸à²‚à²ªà²°à³à²• à²µà²¿à²šà²¾à²°à²£à³†à²—à²³à²¨à³à²¨à³ à²¨à²¿à²°à³à²¦à²¿à²·à³à²Ÿ à²…à²µà²§à²¿à²—à³† (à²‰à²¦à²¾., 2 à²µà²°à³à²·à²—à²³à³) à²®à²¤à³à²¤à³ à²•à²¾à²¨à³‚à²¨à³ à²®à²¤à³à²¤à³ à²¤à³†à²°à²¿à²—à³† à²‰à²¦à³à²¦à³‡à²¶à²—à²³à²¿à²—à²¾à²—à²¿ à²’à²ªà³à²ªà²‚à²¦à²¦ à²…à²µà²§à²¿ à²®à²¤à³à²¤à³ à²ªà³à²°à²®à²¾à²£à²¿à²¤ à²§à²¾à²°à²£ à²…à²µà²§à²¿à²—à³† (à²‰à²¦à²¾., 5 à²µà²°à³à²·à²—à²³à³) à²•à³à²²à³ˆà²‚à²Ÿà³ à²¡à³‡à²Ÿà²¾à²µà²¨à³à²¨à³ à²‰à²³à²¿à²¸à²¿à²•à³Šà²³à³à²³à³à²¤à³à²¤à³‡à²µà³†.",
        privacy_sec5_title: "5. à²•à³à²•à³€à²—à²³à³ à²®à²¤à³à²¤à³ à²Ÿà³à²°à³à²¯à²¾à²•à²¿à²‚à²—à³",
        privacy_sec5_p1: "à²¨à²¿à²®à³à²® à²…à²¨à³à²­à²µà²µà²¨à³à²¨à³ à²¹à³†à²šà³à²šà²¿à²¸à²²à³ à²¨à²¾à²µà³ à²•à³à²•à³€à²—à²³à²¨à³à²¨à³ (à²‰à²¦à²¾., à²•à³à²°à²¿à²¯à²¾à²¤à³à²®à²•, à²µà²¿à²¶à³à²²à³‡à²·à²£à²¾à²¤à³à²®à²•) à²¬à²³à²¸à³à²¤à³à²¤à³‡à²µà³†. à²¨à²¿à²®à³à²® à²µà³ˆà²¯à²•à³à²¤à²¿à²• à²¬à³à²°à³Œà²¸à²°à³ à²†à²¯à³à²•à³†à²—à²³ à²®à³‚à²²à²• à²•à³à²•à³€à²—à²³à²¨à³à²¨à³ à²¨à²¿à²·à³à²•à³à²°à²¿à²¯à²—à³Šà²³à²¿à²¸à²²à³ à²¨à³€à²µà³ à²†à²¯à³à²•à³† à²®à²¾à²¡à²¬à²¹à³à²¦à³.",

        // Terms Page
        terms_sec1_title: "1. à²¨à²¿à²¯à²®à²—à²³ à²…à²‚à²—à³€à²•à²¾à²°",
        terms_sec1_p1: "à²µà³†à²¬à³â€Œà²¸à³ˆà²Ÿà³ à²ªà³à²°à²µà³‡à²¶à²¿à²¸à³à²µ à²®à³‚à²²à²• à²…à²¥à²µà²¾ à²¨à²®à³à²® à²¸à³‡à²µà³†à²—à²³à²²à³à²²à²¿ à²¤à³Šà²¡à²—à²¿à²¸à²¿à²•à³Šà²³à³à²³à³à²µ à²®à³‚à²²à²•, à²¨à³€à²µà³ à²ˆ à²¨à²¿à²¯à²®à²—à²³à³ à²®à²¤à³à²¤à³ à²·à²°à²¤à³à²¤à³à²—à²³à²¿à²—à³† à²’à²ªà³à²ªà³à²¤à³à²¤à³€à²°à²¿. à²¨à³€à²µà³ à²’à²ªà³à²ªà²¦à²¿à²¦à³à²¦à²°à³†, à²¦à²¯à²µà²¿à²Ÿà³à²Ÿà³ à²¨à²®à³à²® à²¸à³‡à²µà³†à²—à²³à²¨à³à²¨à³ à²¬à²³à²¸à²¬à³‡à²¡à²¿.",
        terms_sec2_title: "2. à²¸à³‡à²µà³†à²—à²³ à²µà³à²¯à²¾à²ªà³à²¤à²¿",
        terms_sec2_p1: "à²¨à²¾à²µà³ à²µà³†à²¬à³ à²…à²­à²¿à²µà³ƒà²¦à³à²§à²¿, à²®à³Šà²¬à³ˆà²²à³ à²…à²ªà³à²²à²¿à²•à³‡à²¶à²¨à³ à²…à²­à²¿à²µà³ƒà²¦à³à²§à²¿, UI/UX à²µà²¿à²¨à³à²¯à²¾à²¸ à²®à²¤à³à²¤à³ à²¸à²‚à²¬à²‚à²§à²¿à²¤ à²à²Ÿà²¿ à²¸à³‡à²µà³†à²—à²³à²¨à³à²¨à³ à²’à²¦à²—à²¿à²¸à³à²¤à³à²¤à³‡à²µà³†. à²µà³à²¯à²¾à²ªà³à²¤à²¿, à²¬à²œà³†à²Ÿà³ à²®à²¤à³à²¤à³ à²¸à²®à²¯à²¾à²µà²§à²¿ à²¸à³‡à²°à²¿à²¦à²‚à²¤à³† à²¨à²¿à²°à³à²¦à²¿à²·à³à²Ÿ à²¯à³‹à²œà²¨à³†à²¯ à²µà²¿à²µà²°à²—à²³à²¨à³à²¨à³ à²ªà³à²°à²¤à³à²¯à³‡à²• à²•à³†à²²à²¸à²¦ à²¹à³‡à²³à²¿à²•à³† (SOW) à²…à²¥à²µà²¾ à²¸à³‡à²µà²¾ à²’à²ªà³à²ªà²‚à²¦à²¦ à²®à³‚à²²à²• à²¨à²¿à²°à³à²µà²¹à²¿à²¸à²²à²¾à²—à³à²¤à³à²¤à²¦à³†.",
        terms_sec3_title: "3. à²¬à³Œà²¦à³à²§à²¿à²• à²†à²¸à³à²¤à²¿ (IP) à²®à²¾à²²à³€à²•à²¤à³à²µ",
        terms_sec3_strong1: "à²•à³à²²à³ˆà²‚à²Ÿà³ IP:",
        terms_sec3_p1: "à²Žà²²à³à²²à²¾ à²…à²‚à²¤à²¿à²® à²µà²¿à²¤à²°à²£à²¾ à²µà²¸à³à²¤à³à²—à²³à³ (à²•à³‹à²¡à³, à²µà²¿à²¨à³à²¯à²¾à²¸ à²«à³ˆà²²à³â€Œà²—à²³à³, à²µà²¿à²·à²¯) à²…à²‚à²¤à²¿à²® à²ªà²¾à²µà²¤à²¿à²¯ à²¨à²‚à²¤à²° à²•à³à²²à³ˆà²‚à²Ÿà³ à²’à²¡à³†à²¤à²¨à²¦à²²à³à²²à²¿à²°à³à²¤à³à²¤à²µà³†.",
        terms_sec3_strong2: "à²à²œà³†à²¨à³à²¸à²¿ IP:",
        terms_sec3_p2: "à²µà²¿à²¤à²°à²£à²¾ à²µà²¸à³à²¤à³à²—à²³à²¨à³à²¨à³ à²°à²šà²¿à²¸à²²à³ à²¬à²³à²¸à³à²µ à²¯à²¾à²µà³à²¦à³‡ à²ªà³‚à²°à³à²µ à²…à²¸à³à²¤à²¿à²¤à³à²µà²¦à²²à³à²²à²¿à²°à³à²µ à²‰à²ªà²•à²°à²£à²—à²³à³, à²¸à³à²µà²¾à²®à³à²¯à²¦ à²•à³‹à²¡à³ à²²à³ˆà²¬à³à²°à²°à²¿à²—à²³à³ à²…à²¥à²µà²¾ à²¸à²¾à²®à²¾à²¨à³à²¯ à²¸à²¾à²«à³à²Ÿà³â€Œà²µà³‡à²°à³/à²µà²¿à²§à²¾à²¨à²—à²³ à²®à²¾à²²à³€à²•à²¤à³à²µà²µà²¨à³à²¨à³ à²¨à²µà²­à²¾à²°à²¤à³ à²Ÿà³†à²•à³à²¨à²¾à²²à²œà³€à²¸à³ à²‰à²³à²¿à²¸à²¿à²•à³Šà²³à³à²³à³à²¤à³à²¤à²¦à³†.",
        terms_sec4_title: "4. à²•à³à²²à³ˆà²‚à²Ÿà³ à²œà²µà²¾à²¬à³à²¦à²¾à²°à²¿à²—à²³à³",
        terms_sec4_p1: "à²•à³à²²à³ˆà²‚à²Ÿà³ à²¸à²•à²¾à²²à²¿à²• à²µà²¿à²·à²¯, à²¸à²¿à²¸à³à²Ÿà²®à³â€Œà²—à²³à²¿à²—à³† à²…à²—à²¤à³à²¯ à²ªà³à²°à²µà³‡à²¶ à²®à²¤à³à²¤à³ à²¤à³à²µà²°à²¿à²¤ à²ªà³à²°à²¤à²¿à²•à³à²°à²¿à²¯à³†à²¯à²¨à³à²¨à³ à²’à²¦à²—à²¿à²¸à²¬à³‡à²•à³. à²•à³à²²à³ˆà²‚à²Ÿà³â€Œà²¨à²¿à²‚à²¦ à²‰à²‚à²Ÿà²¾à²—à³à²µ à²¯à³‹à²œà²¨à³†à²¯ à²µà²¿à²³à²‚à²¬à²—à²³à³ à²µà³‡à²³à²¾à²ªà²Ÿà³à²Ÿà²¿ à²®à²¤à³à²¤à³ à²µà³†à²šà³à²š à²¹à³Šà²‚à²¦à²¾à²£à²¿à²•à³†à²—à²³à²¿à²—à³† à²•à²¾à²°à²£à²µà²¾à²—à²¬à²¹à³à²¦à³.",
        terms_sec5_title: "5. à²ªà²¾à²µà²¤à²¿ à²¨à²¿à²¯à²®à²—à²³à³",
        terms_sec5_li1: "à²‡à²¨à³â€Œà²µà²¾à²¯à³à²¸à²¿à²‚à²—à³: à²¨à²¿à²°à³à²¦à²¿à²·à³à²Ÿ à² à³‡à²µà²£à²¿ à²…à²µà²¶à³à²¯à²•à²¤à³†à²—à²³à³ (à²‰à²¦à²¾., 50% à²®à³à²‚à²—à²¡) à²®à²¤à³à²¤à³ à²ªà²¾à²µà²¤à²¿ à²®à³ˆà²²à²¿à²—à²²à³à²²à³à²—à²³à²¨à³à²¨à³ SOW à²¨à²²à³à²²à²¿ à²µà²¿à²µà²°à²¿à²¸à²²à²¾à²—à³à²¤à³à²¤à²¦à³†.",
        terms_sec5_li2: "à²µà²¿à²³à²‚à²¬ à²¶à³à²²à³à²•à²—à²³à³: à²¤à²¡à²µà²¾à²¦ à²ªà²¾à²µà²¤à²¿à²—à²³ à²®à³‡à²²à³† à²¬à²¡à³à²¡à²¿ à²µà²¿à²§à²¿à²¸à³à²µ à²¹à²•à³à²•à²¨à³à²¨à³ à²¨à²¾à²µà³ à²•à²¾à²¯à³à²¦à²¿à²°à²¿à²¸à²¿à²¦à³à²¦à³‡à²µà³†.",
        terms_sec5_li3: "à²®à²°à³à²ªà²¾à²µà²¤à²¿/à²°à²¦à³à²¦à²¤à²¿: à²’à²ªà³à²ªà²‚à²¦à²¦à²²à³à²²à²¿ à²¨à²¿à²°à³à²¦à²¿à²·à³à²Ÿà²ªà²¡à²¿à²¸à²¦à²¿à²¦à³à²¦à²°à³† à² à³‡à²µà²£à²¿à²—à²³à³ à²¸à²¾à²®à²¾à²¨à³à²¯à²µà²¾à²—à²¿ à²®à²°à³à²ªà²¾à²µà²¤à²¿à²¸à²²à²¾à²—à³à²µà³à²¦à²¿à²²à³à²².",

        // Privacy Policy Page - Additional Keys (Kannada)
        privacy_sec6_title: "6. à²¬à²³à²•à³†à²¦à²¾à²° à²¹à²•à³à²•à³à²—à²³à³",
        privacy_sec6_p1: "à²¨à²¿à²®à³à²® à²¸à³à²¥à²³à²µà²¨à³à²¨à³ à²…à²µà²²à²‚à²¬à²¿à²¸à²¿, à²¨à²¿à²®à³à²® à²µà³ˆà²¯à²•à³à²¤à²¿à²• à²¡à³‡à²Ÿà²¾à²µà²¨à³à²¨à³ à²ªà³à²°à²µà³‡à²¶à²¿à²¸à³à²µ, à²¸à²°à²¿à²ªà²¡à²¿à²¸à³à²µ à²…à²¥à²µà²¾ à²…à²³à²¿à²¸à³à²µ à²¹à²•à³à²•à²¿à²¨à²‚à²¤à²¹ à²¹à²•à³à²•à³à²—à²³à²¨à³à²¨à³ à²¨à³€à²µà³ à²¹à³Šà²‚à²¦à²¿à²°à²¬à²¹à³à²¦à³. à²ˆ à²¹à²•à³à²•à³à²—à²³à²¨à³à²¨à³ à²šà²²à²¾à²¯à²¿à²¸à²²à³ à²¦à²¯à²µà²¿à²Ÿà³à²Ÿà³ à²¨à²®à³à²®à²¨à³à²¨à³ à²¸à²‚à²ªà²°à³à²•à²¿à²¸à²¿.",
        privacy_sec7_title: "7. à²­à²¦à³à²°à²¤à³†",
        privacy_sec7_p1: "à²…à²¨à²§à²¿à²•à³ƒà²¤ à²ªà³à²°à²µà³‡à²¶, à²¬à²¦à²²à²¾à²µà²£à³† à²…à²¥à²µà²¾ à²¬à²¹à²¿à²°à²‚à²—à²ªà²¡à²¿à²¸à³à²µà²¿à²•à³†à²¯à²¿à²‚à²¦ à²¨à²¿à²®à³à²® à²¡à³‡à²Ÿà²¾à²µà²¨à³à²¨à³ à²°à²•à³à²·à²¿à²¸à²²à³ à²¸à³à²°à²•à³à²·à²¿à²¤ à²¸à²°à³à²µà²°à³â€Œà²—à²³à³ à²®à²¤à³à²¤à³ à²Žà²¨à³â€Œà²•à³à²°à²¿à²ªà³à²¶à²¨à³ à²¸à³‡à²°à²¿à²¦à²‚à²¤à³† à²¸à²¾à²®à²¾à²¨à³à²¯ à²­à²¦à³à²°à²¤à²¾ à²•à³à²°à²®à²—à²³à²¨à³à²¨à³ à²¨à²¾à²µà³ à²œà²¾à²°à²¿à²—à³Šà²³à²¿à²¸à³à²¤à³à²¤à³‡à²µà³†.",
        privacy_sec8_title: "8. à²…à²‚à²¤à²°à²°à²¾à²·à³à²Ÿà³à²°à³€à²¯ à²µà²°à³à²—à²¾à²µà²£à³†à²—à²³à³",
        privacy_sec8_p1: "à²¨à³€à²µà³ à²­à²¾à²°à²¤à²¦ à²¹à³Šà²°à²—à²¿à²¨à²¿à²‚à²¦ à²¨à²®à³à²® à²¸à³‡à²µà³†à²—à²³à²¨à³à²¨à³ à²ªà³à²°à²µà³‡à²¶à²¿à²¸à³à²¤à³à²¤à²¿à²¦à³à²¦à²°à³†, à²¨à²¿à²®à³à²® à²®à²¾à²¹à²¿à²¤à²¿à²¯à²¨à³à²¨à³ à²¨à²®à³à²® à²¸à²°à³à²µà²°à³â€Œà²—à²³à³ à²‡à²°à³à²µ à²­à²¾à²°à²¤à²¦à²²à³à²²à²¿ à²µà²°à³à²—à²¾à²¯à²¿à²¸à²¬à²¹à³à²¦à³, à²¸à²‚à²—à³à²°à²¹à²¿à²¸à²¬à²¹à³à²¦à³ à²®à²¤à³à²¤à³ à²¸à²‚à²¸à³à²•à²°à²¿à²¸à²¬à²¹à³à²¦à³ à²Žà²‚à²¬à³à²¦à²¨à³à²¨à³ à²¦à²¯à²µà²¿à²Ÿà³à²Ÿà³ à²¤à²¿à²³à²¿à²¦à²¿à²°à²²à²¿.",
        privacy_sec9_title: "9. à²¸à²‚à²ªà²°à³à²• à²®à²¾à²¹à²¿à²¤à²¿",
        privacy_sec9_p1: "à²ˆ à²—à³Œà²ªà³à²¯à²¤à³† à²¨à³€à²¤à²¿à²¯ à²¬à²—à³à²—à³† à²¨à³€à²µà³ à²¯à²¾à²µà³à²¦à³‡ à²ªà³à²°à²¶à³à²¨à³†à²—à²³à²¨à³à²¨à³ à²¹à³Šà²‚à²¦à²¿à²¦à³à²¦à²°à³†, à²¦à²¯à²µà²¿à²Ÿà³à²Ÿà³ à²¨à²®à³à²®à²¨à³à²¨à³ à²¸à²‚à²ªà²°à³à²•à²¿à²¸à²¿:",

        // Terms Page - Additional Keys (Kannada)
        terms_sec6_title: "6. à²–à²¾à²¤à²°à²¿à²—à²³à³ à²®à²¤à³à²¤à³ à²¨à²¿à²°à³à²µà²¹à²£à³†",
        terms_sec6_strong1: "à²¦à³‹à²· à²ªà²°à²¿à²¹à²¾à²° à²…à²µà²§à²¿:",
        terms_sec6_p1: " à²¨à²¾à²µà³ à²¸à³€à²®à²¿à²¤ à²–à²¾à²¤à²°à²¿ à²…à²µà²§à²¿à²¯à²¨à³à²¨à³ (à²‰à²¦à²¾., à²ªà³à²°à²¾à²°à²‚à²­à²¦ à²¨à²‚à²¤à²° 30 à²…à²¥à²µà²¾ 60 à²¦à²¿à²¨à²—à²³à³) à²’à²¦à²—à²¿à²¸à³à²¤à³à²¤à³‡à²µà³†, à²ˆ à²¸à²®à²¯à²¦à²²à³à²²à²¿ à²¨à²¾à²µà³ à²µà²¿à²¤à²°à²¿à²¸à²¿à²¦ à²•à³‹à²¡à³â€Œà²¨à²²à³à²²à²¿à²¨ à²¦à³‹à²·à²—à²³à²¨à³à²¨à³ à²‰à²šà²¿à²¤à²µà²¾à²—à²¿ à²¸à²°à²¿à²ªà²¡à²¿à²¸à³à²¤à³à²¤à³‡à²µà³†.",
        terms_sec6_strong2: "à²¹à³Šà²°à²—à²¿à²¡à³à²µà²¿à²•à³†à²—à²³à³:",
        terms_sec6_p2: " à²®à³‚à²°à²¨à³‡ à²µà³à²¯à²•à³à²¤à²¿à²¯ à²®à²¾à²°à³à²ªà²¾à²¡à³à²—à²³à³, à²•à³à²²à³ˆà²‚à²Ÿà³ à²µà²¿à²·à²¯ à²¬à²¦à²²à²¾à²µà²£à³†à²—à²³à³ à²…à²¥à²µà²¾ à²¨à²®à³à²® à²¨à²¿à²¯à²‚à²¤à³à²°à²£à²¦ à²¹à³Šà²°à²—à²¿à²¨ à²¸à²¾à²«à³à²Ÿà³â€Œà²µà³‡à²°à³ à²¨à²µà³€à²•à²°à²£à²—à²³à²¿à²‚à²¦ à²‰à²‚à²Ÿà²¾à²—à³à²µ à²¸à²®à²¸à³à²¯à³†à²—à²³à²¨à³à²¨à³ à²–à²¾à²¤à²°à²¿ à²’à²³à²—à³Šà²‚à²¡à²¿à²°à³à²µà³à²¦à²¿à²²à³à²².",
        terms_sec7_title: "7. à²¹à³Šà²£à³†à²—à²¾à²°à²¿à²•à³†à²¯ à²®à²¿à²¤à²¿",
        terms_sec7_p1: "à²¨à²®à³à²® à²¹à³Šà²£à³†à²—à²¾à²°à²¿à²•à³† à²¨à²¿à²°à³à²¦à²¿à²·à³à²Ÿ à²¸à³‡à²µà³†à²—à²¾à²—à²¿ à²•à³à²²à³ˆà²‚à²Ÿà³ à²ªà²¾à²µà²¤à²¿à²¸à²¿à²¦ à²®à³Šà²¤à³à²¤à²•à³à²•à³† à²¸à³€à²®à²¿à²¤à²µà²¾à²—à²¿à²¦à³†. à²¦à³‹à²· à²…à²¥à²µà²¾ à²¸à³‡à²µà²¾ à²µà³ˆà²«à²²à³à²¯à²¦à²¿à²‚à²¦ à²‰à²‚à²Ÿà²¾à²—à³à²µ à²ªà²°à²¿à²£à²¾à²®à²•à²¾à²°à²¿ à²µà³à²¯à²¾à²ªà²¾à²° à²¨à²·à³à²Ÿà²—à²³à²¿à²—à³† (à²‰à²¦à²¾., à²†à²¦à²¾à²¯ à²¨à²·à³à²Ÿ) à²¨à²¾à²µà³ à²œà²µà²¾à²¬à³à²¦à²¾à²°à²°à²²à³à²².",
        terms_sec8_title: "8. à²®à³à²•à³à²¤à²¾à²¯",
        terms_sec8_p1: "à²¸à³‡à²µà²¾ à²’à²ªà³à²ªà²‚à²¦à²¦à²²à³à²²à²¿ à²µà²¿à²µà²°à²¿à²¸à²¿à²¦à²‚à²¤à³†, à²’à²ªà³à²ªà²‚à²¦à²¦ à²µà²¸à³à²¤à³ à²‰à²²à³à²²à²‚à²˜à²¨à³†, à²ªà²¾à²µà²¤à²¿ à²®à²¾à²¡à²¦à²¿à²°à³à²µà²¿à²•à³† à²…à²¥à²µà²¾ à²¦à²¿à²µà²¾à²³à²¿à²¤à²¨à²¦à²‚à²¤à²¹ à²¨à²¿à²°à³à²¦à²¿à²·à³à²Ÿ à²ªà²°à²¿à²¸à³à²¥à²¿à²¤à²¿à²—à²³à²²à³à²²à²¿ à²¯à²¾à²µà³à²¦à³‡ à²ªà²•à³à²·à²µà³ à²¯à³‹à²œà²¨à³† à²…à²¥à²µà²¾ à²’à²ªà³à²ªà²‚à²¦à²µà²¨à³à²¨à³ à²°à²¦à³à²¦à³à²—à³Šà²³à²¿à²¸à²¬à²¹à³à²¦à³.",
        terms_sec9_title: "9. à²¨à²·à³à²Ÿ à²ªà²°à²¿à²¹à²¾à²°",
        terms_sec9_p1: "à²¯à³‹à²œà²¨à³†à²—à²¾à²—à²¿ à²•à³à²²à³ˆà²‚à²Ÿà³ à²’à²¦à²—à²¿à²¸à²¿à²¦ à²µà²¿à²·à²¯ à²…à²¥à²µà²¾ à²µà²¸à³à²¤à³à²—à²³à²¿à²‚à²¦ à²‰à²‚à²Ÿà²¾à²—à³à²µ à²¯à²¾à²µà³à²¦à³‡ à²¹à²•à³à²•à³à²—à²³à³ à²…à²¥à²µà²¾ à²®à³Šà²•à²¦à³à²¦à²®à³†à²—à²³à²¿à²‚à²¦ (à²‰à²¦à²¾., à²¹à²•à³à²•à³à²¸à³à²µà²¾à²®à³à²¯ à²‰à²²à³à²²à²‚à²˜à²¨à³†) à²¨à²µà²­à²¾à²°à²¤à³ à²Ÿà³†à²•à³à²¨à²¾à²²à²œà³€à²¸à³ à²…à²¨à³à²¨à³ à²¹à²¾à²¨à²¿à²¯à²¾à²—à²¦à²‚à²¤à³† à²¨à³‹à²¡à²¿à²•à³Šà²³à³à²³à²²à³ à²•à³à²²à³ˆà²‚à²Ÿà³ à²’à²ªà³à²ªà³à²¤à³à²¤à²¾à²°à³†.",
        terms_sec10_title: "10. à²†à²¡à²³à²¿à²¤ à²•à²¾à²¨à³‚à²¨à³",
        terms_sec10_p1: "à²ˆ à²¨à²¿à²¯à²®à²—à²³à³ à²®à²¤à³à²¤à³ à²·à²°à²¤à³à²¤à³à²—à²³à²¨à³à²¨à³ à²•à²°à³à²¨à²¾à²Ÿà²•, à²­à²¾à²°à²¤à²¦ à²•à²¾à²¨à³‚à²¨à³à²—à²³à²¿à²—à³† à²…à²¨à³à²—à³à²£à²µà²¾à²—à²¿ à²®à²¤à³à²¤à³ à²¨à²¿à²°à³à²£à²¯à²¿à²¸à²²à²¾à²—à³à²¤à³à²¤à²¦à³†.",
        terms_sec11_title: "11. à²¨à²¿à²¯à²®à²—à²³à²¿à²—à³† à²¬à²¦à²²à²¾à²µà²£à³†à²—à²³à³",
        terms_sec11_p1: "à²¯à²¾à²µà³à²¦à³‡ à²¸à²®à²¯à²¦à²²à³à²²à²¿ à²ˆ à²¨à²¿à²¯à²®à²—à²³à²¨à³à²¨à³ à²¨à²µà³€à²•à²°à²¿à²¸à³à²µ à²¹à²•à³à²•à²¨à³à²¨à³ à²¨à²¾à²µà³ à²•à²¾à²¯à³à²¦à²¿à²°à²¿à²¸à²¿à²¦à³à²¦à³‡à²µà³†. à²‡à²¤à³à²¤à³€à²šà²¿à²¨ à²ªà²°à²¿à²·à³à²•à²°à²£à³† à²¦à²¿à²¨à²¾à²‚à²•à²µà²¨à³à²¨à³ à²ˆ à²ªà³à²Ÿà²¦à²²à³à²²à²¿ à²¸à³‚à²šà²¿à²¸à²²à²¾à²—à³à²¤à³à²¤à²¦à³†.",

        // Explore Page
        explore_banner_title: "à²…à²¨à³à²µà³‡à²·à²¿à²¸à²¿",
        explore_banner_desc: "à²¨à²®à³à²® à²ªà³à²°à²¯à²¾à²£, à²§à³à²¯à³‡à²¯ à²®à²¤à³à²¤à³ à²¦à³ƒà²·à³à²Ÿà²¿à²•à³‹à²¨à²µà²¨à³à²¨à³ à²…à²¨à³à²µà³‡à²·à²¿à²¸à²¿",
        explore_intro_title: "à²¨à²µà²­à²¾à²°à²¤à³ à²Ÿà³†à²•à³à²¨à²¾à²²à²œà³€à²¸à³ â€” à²¸à³à²®à²¾à²°à³à²Ÿà³ à²à²Ÿà²¿ à²ªà²°à²¿à²¹à²¾à²°à²—à²³ à²®à³‚à²²à²• à²¬à³†à²³à²µà²£à²¿à²—à³†à²¯à²¨à³à²¨à³ à²¸à²¶à²•à³à²¤à²—à³Šà²³à²¿à²¸à³à²µà³à²¦à³",
        explore_intro_desc: "à²¨à²µà²­à²¾à²°à²¤à³ à²Ÿà³†à²•à³à²¨à²¾à²²à²œà³€à²¸à³ à²’à²‚à²¦à³ à²®à³à²‚à²¦à²¾à²²à³‹à²šà²¨à³†à²¯ à²à²Ÿà²¿ à²ªà²°à²¿à²¹à²¾à²° à²•à²‚à²ªà²¨à²¿à²¯à²¾à²—à²¿à²¦à³à²¦à³, à²¸à³à²®à²¾à²°à³à²Ÿà³, à²¸à³à²•à³‡à²²à²¬à²²à³ à²®à²¤à³à²¤à³ à²«à²²à²¿à²¤à²¾à²‚à²¶-à²†à²§à²¾à²°à²¿à²¤ à²¡à²¿à²œà²¿à²Ÿà²²à³ à²¸à³‡à²µà³†à²—à²³à²¨à³à²¨à³ à²¨à³€à²¡à³à²¤à³à²¤à²¦à³†. à²¨à²¾à²µà³€à²¨à³à²¯à²¤à³† à²®à²¤à³à²¤à³ à²—à³à²°à²¾à²¹à²• à²¸à²°à²³ à²µà²¿à²¨à³à²¯à²¾à²¸à²¦ à²®à³‡à²²à³† à²¬à²²à²µà²¾à²¦ à²—à²®à²¨à²µà²¨à³à²¨à³ à²•à³‡à²‚à²¦à³à²°à³€à²•à²°à²¿à²¸à²¿, à²‡à²‚à²¦à²¿à²¨ à²µà³‡à²—à²µà²¾à²—à²¿ à²¬à³†à²³à³†à²¯à³à²¤à³à²¤à²¿à²°à³à²µ à²¡à²¿à²œà²¿à²Ÿà²²à³ à²œà²—à²¤à³à²¤à²¿à²¨à²²à³à²²à²¿ à²µà³à²¯à²µà²¹à²¾à²°à²—à²³à²¨à³à²¨à³ à²ªà²°à²¿à²µà²°à³à²¤à²¿à²¸à²²à³, à²¸à³à²µà²¯à²‚à²šà²¾à²²à²¿à²¤à²—à³Šà²³à²¿à²¸à²²à³ à²®à²¤à³à²¤à³ à²¬à³†à²³à³†à²¯à²²à³ à²¨à²¾à²µà³ à²¸à²¹à²¾à²¯ à²®à²¾à²¡à³à²¤à³à²¤à³‡à²µà³†. à²…à²¨à³à²­à²µà²¿ à²¤à²‚à²¡ à²®à²¤à³à²¤à³ à²†à²§à³à²¨à²¿à²• à²¤à²‚à²¤à³à²°à²œà³à²žà²¾à²¨à²—à²³ à²¬à³†à²‚à²¬à²²à²¦à³Šà²‚à²¦à²¿à²—à³†, à²¨à²¾à²µà³ à²¤à²¡à³†à²°à²¹à²¿à²¤ à²®à²°à²£à²¦à²‚à²¡à²¨à³†, à²†à²ªà³à²Ÿà²¿à²®à³ˆà²¸à³ à²®à²¾à²¡à²¿à²¦ à²•à³†à²²à²¸à²¦ à²¹à²°à²¿à²µà³à²—à²³à³ à²®à²¤à³à²¤à³ à²‰à²¤à³à²¤à²® à²—à³à²£à²®à²Ÿà³à²Ÿà²¦ à²µà²¿à²¤à²°à²£à³†à²¯à²¨à³à²¨à³ à²–à²šà²¿à²¤à²ªà²¡à²¿à²¸à³à²¤à³à²¤à³‡à²µà³†. à²¶à³à²°à³‡à²·à³à² à²¤à³†, à²ªà²¾à²°à²¦à²°à³à²¶à²•à²¤à³† à²®à²¤à³à²¤à³ à²µà²¿à²¶à³à²µà²¾à²¸à²¾à²°à³à²¹à²¤à³†à²—à³† à²¨à²®à³à²® à²¬à²¦à³à²§à²¤à³†à²¯à³ à²Žà²²à³à²²à²¾ à²—à²¾à²¤à³à²°à²¦ à²µà³à²¯à²µà²¹à²¾à²°à²—à²³à²¿à²—à³† à²¨à²®à³à²®à²¨à³à²¨à³ à²µà²¿à²¶à³à²µà²¾à²¸à²¾à²°à³à²¹ à²ªà²¾à²²à³à²¦à²¾à²°à²°à²¨à³à²¨à²¾à²—à²¿ à²®à²¾à²¡à³à²¤à³à²¤à²¦à³†.",
        explore_what_do_title: "à²¨à²¾à²µà³ à²à²¨à³ à²®à²¾à²¡à³à²¤à³à²¤à³‡à²µà³†",
        explore_what_do_1: "à²¦à³€à²°à³à²˜à²•à²¾à²²à³€à²¨ à²•à²¾à²°à³à²¯à²•à³à²·à²®à²¤à³†à²—à²¾à²—à²¿ à²µà²¿à²¨à³à²¯à²¾à²¸à²—à³Šà²³à²¿à²¸à²²à²¾à²¦ à²•à²¸à³à²Ÿà²®à³ à²µà³†à²¬à³â€Œà²¸à³ˆà²Ÿà³â€Œà²—à²³à³, à²…à²ªà³à²²à²¿à²•à³‡à²¶à²¨à³â€Œà²—à²³à³ à²®à²¤à³à²¤à³ à²¡à²¿à²œà²¿à²Ÿà²²à³ à²‰à²¤à³à²ªà²¨à³à²¨à²—à²³à²¨à³à²¨à³ à²¨à²¿à²°à³à²®à²¿à²¸à³à²µà³à²¦à³.",
        explore_what_do_2: "à²¨à²¿à²®à³à²® à²—à³à²°à²¿à²—à²³à³ à²®à²¤à³à²¤à³ à²•à³†à²²à²¸à²¦ à²¹à²°à²¿à²µà²¿à²—à³† à²¹à³Šà²‚à²¦à²¿à²•à³†à²¯à²¾à²—à³à²µ à²¸à³à²®à²¾à²°à³à²Ÿà³ à²¤à²‚à²¤à³à²°à²—à²³à³ à²®à²¤à³à²¤à³ à²¤à²‚à²¤à³à²°à²œà³à²žà²¾à²¨à²—à²³à³.",
        explore_what_do_3: "à²—à²°à²¿à²·à³à²  à²¦à²•à³à²·à²¤à³†à²—à²¾à²—à²¿ à²¦à³ƒà²¢à²µà²¾à²¦, à²µà²¿à²¶à³à²µà²¾à²¸à²¾à²°à³à²¹ à²®à²¤à³à²¤à³ à²†à²ªà³à²Ÿà²¿à²®à³ˆà²¸à³ à²®à²¾à²¡à²¿à²¦ à²¡à²¿à²œà²¿à²Ÿà²²à³ à²µà³à²¯à²µà²¸à³à²¥à³†à²—à²³à³.",
        explore_what_do_4: "à²¬à²³à²•à³†, à²…à²¨à³à²­à²µ à²®à²¤à³à²¤à³ à²µà³à²¯à²¾à²ªà²¾à²° à²ªà³à²°à²­à²¾à²µà²µà²¨à³à²¨à³ à²—à²®à²¨à²¦à²²à³à²²à²¿à²Ÿà³à²Ÿà³à²•à³Šà²‚à²¡à³ à²°à²šà²¿à²¸à²²à²¾à²¦ à²ªà²°à²¿à²¹à²¾à²°à²—à²³à³.",
        explore_mission_title: "à²¨à²®à³à²® à²®à²¿à²·à²¨à³",
        explore_mission_p1: "à²¨à²®à³à²® à²®à²¿à²·à²¨à³ à²¸à³à²§à²¾à²°à²¿à²¤ à²¡à²¿à²œà²¿à²Ÿà²²à³ à²ªà²°à²¿à²¹à²¾à²°à²—à²³à³Šà²‚à²¦à²¿à²—à³† à²µà³à²¯à²µà²¹à²¾à²°à²—à²³à²¨à³à²¨à³ à²¸à²¶à²•à³à²¤à²—à³Šà²³à²¿à²¸à³à²µà³à²¦à³, à²…à²¦à³ à²¬à³†à²³à²µà²£à²¿à²—à³†à²¯à²¨à³à²¨à³ à²µà³‡à²—à²—à³Šà²³à²¿à²¸à³à²¤à³à²¤à²¦à³† à²®à²¤à³à²¤à³ à²…à²µà²° à²¸à³à²ªà²°à³à²§à²¾à²¤à³à²®à²• à²…à²‚à²šà²¨à³à²¨à³ à²¬à²²à²ªà²¡à²¿à²¸à³à²¤à³à²¤à²¦à³†. à²¸à³à²®à²¾à²°à³à²Ÿà³, à²¸à³à²µà²¯à²‚à²šà²¾à²²à²¿à²¤ à²®à²¤à³à²¤à³ à²¸à³à²•à³‡à²²à²¬à²²à³ à²¤à²‚à²¤à³à²°à²œà³à²žà²¾à²¨à²—à²³ à²®à³‚à²²à²• à²•à²¾à²°à³à²¯à²¾à²šà²°à²£à³†à²¯ à²¦à²•à³à²·à²¤à³†à²¯à²¨à³à²¨à³ à²¹à³†à²šà³à²šà²¿à²¸à³à²µà³à²¦à²° à²®à³‡à²²à³† à²¨à²¾à²µà³ à²—à²®à²¨à²¹à²°à²¿à²¸à³à²¤à³à²¤à³‡à²µà³†, à²…à²¦à³ à²ªà³à²°à²¤à²¿ à²•à³†à²²à²¸à²¦ à²¹à²°à²¿à²µà²¨à³à²¨à³ à²¸à³à²—à²®à²—à³Šà²³à²¿à²¸à³à²¤à³à²¤à²¦à³†. à²‰à²¨à³à²¨à²¤ à²®à²Ÿà³à²Ÿà²¦ à²¡à²¿à²œà²¿à²Ÿà²²à³ à²…à²¨à³à²­à²µà²—à²³à²¨à³à²¨à³ à²¨à³€à²¡à³à²µ à²®à³‚à²²à²•, à²¨à²®à³à²® à²—à³à²°à²¾à²¹à²•à²°à²¿à²—à³† à²¦à³€à²°à³à²˜à²•à²¾à²²à³€à²¨ à²¯à²¶à²¸à³à²¸à³ à²®à²¤à³à²¤à³ à²¸à³à²¸à³à²¥à²¿à²° à²…à²­à²¿à²µà³ƒà²¦à³à²§à²¿à²¯à²¨à³à²¨à³ à²¨à²¾à²µà³ à²–à²šà²¿à²¤à²ªà²¡à²¿à²¸à³à²¤à³à²¤à³‡à²µà³†. à²†à²§à³à²¨à²¿à²•, à²­à²µà²¿à²·à³à²¯à²¦-à²¸à²¿à²¦à³à²§ à²ªà²°à²¿à²¹à²¾à²°à²—à²³à²¨à³à²¨à³ à²¨à³€à²¡à²²à³ à²¨à²¾à²µà³ à²¨à²¿à²°à²‚à²¤à²°à²µà²¾à²—à²¿ à²†à²µà²¿à²·à³à²•à²°à²¿à²¸à³à²¤à³à²¤à³‡à²µà³† à²®à²¤à³à²¤à³ à²…à²­à²¿à²µà³ƒà²¦à³à²§à²¿ à²¹à³Šà²‚à²¦à³à²¤à³à²¤à²¿à²°à³à²µ à²‰à²¦à³à²¯à²®à²¦ à²…à²—à²¤à³à²¯à²—à²³à²¿à²—à³† à²¹à³Šà²‚à²¦à²¿à²•à³Šà²³à³à²³à³à²¤à³à²¤à³‡à²µà³†. à²¶à³à²°à³‡à²·à³à² à²¤à³†à²—à³† à²¨à²®à³à²® à²¬à²¦à³à²§à²¤à³†à²¯ à²®à³‚à²²à²•, à²¨à²¾à²µà³ à²…à²°à³à²¥à²ªà³‚à²°à³à²£ à²®à³Œà²²à³à²¯à²µà²¨à³à²¨à³ à²¸à³ƒà²·à³à²Ÿà²¿à²¸à²²à³ à²®à²¤à³à²¤à³ à²µà³à²¯à²µà²¹à²¾à²°à²—à²³à³ à²šà³à²°à³à²•à²¾à²—à²¿, à²µà³‡à²—à²µà²¾à²—à²¿ à²®à²¤à³à²¤à³ à²¹à³†à²šà³à²šà³ à²ªà²°à²¿à²£à²¾à²®à²•à²¾à²°à²¿à²¯à²¾à²—à²¿ à²•à²¾à²°à³à²¯à²¨à²¿à²°à³à²µà²¹à²¿à²¸à²²à³ à²¸à²¹à²¾à²¯ à²®à²¾à²¡à²²à³ à²¶à³à²°à²®à²¿à²¸à³à²¤à³à²¤à³‡à²µà³†.",
        explore_vision_title: "à²¨à²®à³à²® à²¦à³ƒà²·à³à²Ÿà²¿à²•à³‹à²¨",
        explore_vision_p1: "à²¨à²®à³à²® à²¦à³ƒà²·à³à²Ÿà²¿à²•à³‹à²¨à²µà³ à²¡à²¿à²œà²¿à²Ÿà²²à³ à²Ÿà³à²°à²¾à²¨à³à²¸à³â€Œà²«à²¾à²°à³à²®à³‡à²·à²¨à³â€Œà²¨à²²à³à²²à²¿ à²œà²¾à²—à²¤à²¿à²• à²¨à²¾à²¯à²•à²°à²¾à²—à³à²µà³à²¦à³, à²¸à²‚à²•à³€à²°à³à²£ à²¸à²µà²¾à²²à³à²—à²³à²¨à³à²¨à³ à²¸à²°à²³, à²ªà²°à²¿à²£à²¾à²®à²•à²¾à²°à²¿ à²¤à²¾à²‚à²¤à³à²°à²¿à²• à²ªà²°à²¿à²¹à²¾à²°à²—à²³à²¾à²—à²¿ à²ªà²°à²¿à²µà²°à³à²¤à²¿à²¸à³à²µ à²¨à²®à³à²® à²¸à²¾à²®à²°à³à²¥à³à²¯à²•à³à²•à²¾à²—à²¿ à²—à³à²°à³à²¤à²¿à²¸à²²à³à²ªà²Ÿà³à²Ÿà²¿à²¦à³†. à²ªà³à²°à²¤à²¿à²¯à³Šà²‚à²¦à³ à²µà³à²¯à²µà²¹à²¾à²°à²µà³, à²—à²¾à²¤à³à²°à²µà²¨à³à²¨à³ à²²à³†à²•à³à²•à²¿à²¸à²¦à³†, à²¡à²¿à²œà²¿à²Ÿà²²à³-à²®à³Šà²¦à²² à²†à²°à³à²¥à²¿à²•à²¤à³†à²¯à²²à³à²²à²¿ à²…à²­à²¿à²µà³ƒà²¦à³à²§à²¿ à²¹à³Šà²‚à²¦à²²à³ à²…à²—à²¤à³à²¯à²µà²¿à²°à³à²µ à²¸à²¾à²§à²¨à²—à²³à²¿à²—à³† à²ªà³à²°à²µà³‡à²¶à²µà²¨à³à²¨à³ à²¹à³Šà²‚à²¦à²¿à²°à³à²µ à²­à²µà²¿à²·à³à²¯à²µà²¨à³à²¨à³ à²¨à²¿à²°à³à²®à²¿à²¸à²²à³ à²¨à²¾à²µà³ à²¬à²¯à²¸à³à²¤à³à²¤à³‡à²µà³†. à²¸à³ƒà²œà²¨à²¶à³€à²²à²¤à³†, à²¸à²®à²—à³à²°à²¤à³† à²®à²¤à³à²¤à³ à²¸à²¹à²¯à³‹à²—à²¦ à²¸à²‚à²¸à³à²•à³ƒà²¤à²¿à²¯à²¨à³à²¨à³ à²¬à³†à²³à³†à²¸à³à²µ à²®à³‚à²²à²•, à²à²Ÿà²¿ à²‰à²¦à³à²¯à²®à²¦à²²à³à²²à²¿ à²¹à³Šà²¸ à²®à²¾à²¨à²¦à²‚à²¡à²—à²³à²¨à³à²¨à³ à²¸à³à²¥à²¾à²ªà²¿à²¸à²²à³ à²¨à²¾à²µà³ à²—à³à²°à²¿ à²¹à³Šà²‚à²¦à²¿à²¦à³à²¦à³‡à²µà³†. à²¨à²®à³à²® à²—à³à²°à²¾à²¹à²•à²°à²¿à²—à³† à²®à²¾à²¤à³à²°à²µà²²à³à²²à²¦à³† à²¹à³†à²šà³à²šà³ à²¸à²‚à²ªà²°à³à²•à²¿à²¤ à²®à²¤à³à²¤à³ à²ªà²°à²¿à²£à²¾à²®à²•à²¾à²°à²¿ à²œà²—à²¤à³à²¤à²¿à²—à³† à²•à³Šà²¡à³à²—à³† à²¨à³€à²¡à³à²µ à²ªà³à²°à²—à²¤à²¿ à²®à²¤à³à²¤à³ à²†à²µà²¿à²·à³à²•à²¾à²°à²µà²¨à³à²¨à³ à²¨à²¡à³†à²¸à³à²µ à²¬à²¦à²²à²¾à²µà²£à³†à²¯ à²µà³‡à²—à²µà²°à³à²§à²•à²—à²³à²¾à²—à²¿ à²¨à²¾à²µà³ à²¨à²®à³à²®à²¨à³à²¨à³ à²¨à³‹à²¡à³à²¤à³à²¤à³‡à²µà³†.",
        explore_values_title: "à²¨à²¾à²µà³ à²à²¨à³ à²®à²¾à²¡à³à²¤à³à²¤à³‡à²µà³†",
        explore_what_we_do_p1: "à²†à²§à³à²¨à²¿à²• à²‰à²¦à³à²¯à²®à²—à²³ à²µà³ˆà²µà²¿à²§à³à²¯à²®à²¯ à²…à²—à²¤à³à²¯à²—à²³à²¨à³à²¨à³ à²ªà³‚à²°à³ˆà²¸à²²à³ à²µà²¿à²¨à³à²¯à²¾à²¸à²—à³Šà²³à²¿à²¸à²²à²¾à²¦ à²µà³à²¯à²¾à²ªà²• à²¶à³à²°à³‡à²£à²¿à²¯ à²à²Ÿà²¿ à²¸à³‡à²µà³†à²—à²³à²²à³à²²à²¿ à²¨à²¾à²µà³ à²ªà²°à²¿à²£à²¤à²¿ à²¹à³Šà²‚à²¦à²¿à²¦à³à²¦à³‡à²µà³†. à²•à²¸à³à²Ÿà²®à³ à²¸à²¾à²«à³à²Ÿà³â€Œà²µà³‡à²°à³ à²…à²­à²¿à²µà³ƒà²¦à³à²§à²¿ à²®à²¤à³à²¤à³ à²®à³Šà²¬à³ˆà²²à³ à²…à²ªà³à²²à²¿à²•à³‡à²¶à²¨à³ à²°à²šà²¨à³†à²¯à²¿à²‚à²¦ à²•à³à²²à³Œà²¡à³ à²•à²‚à²ªà³à²¯à³‚à²Ÿà²¿à²‚à²—à³ à²®à²¤à³à²¤à³ à²¡à³‡à²Ÿà²¾ à²…à²¨à²¾à²²à²¿à²Ÿà²¿à²•à³à²¸à³ à²µà²°à³†à²—à³†, à²«à²²à²¿à²¤à²¾à²‚à²¶à²—à²³à²¨à³à²¨à³ à²¨à³€à²¡à³à²µ à²Žà²‚à²¡à³-à²Ÿà³-à²Žà²‚à²¡à³ à²ªà²°à²¿à²¹à²¾à²°à²—à²³à²¨à³à²¨à³ à²¨à²¾à²µà³ à²¨à³€à²¡à³à²¤à³à²¤à³‡à²µà³†. à²¨à²®à³à²® à²¤à²œà³à²žà²° à²¤à²‚à²¡à²µà³ à²—à³à²°à²¾à²¹à²•à²°à³Šà²‚à²¦à²¿à²—à³† à²¨à²¿à²•à²Ÿà²µà²¾à²—à²¿ à²•à³†à²²à²¸ à²®à²¾à²¡à³à²¤à³à²¤à²¦à³†, à²…à²µà²° à²…à²¨à²¨à³à²¯ à²¸à²µà²¾à²²à³à²—à²³à³ à²®à²¤à³à²¤à³ à²—à³à²°à²¿à²—à²³à²¨à³à²¨à³ à²…à²°à³à²¥à²®à²¾à²¡à²¿à²•à³Šà²³à³à²³à³à²¤à³à²¤à²¦à³†, ROI à²…à²¨à³à²¨à³ à²—à²°à²¿à²·à³à² à²—à³Šà²³à²¿à²¸à³à²µ à²…à²¨à³à²—à³à²£à²µà²¾à²¦ à²¤à²‚à²¤à³à²°à²—à²³à²¨à³à²¨à³ à²¨à³€à²¡à³à²¤à³à²¤à²¦à³†. à²¨à³€à²µà³ à²¹à²³à³†à²¯ à²¸à²¿à²¸à³à²Ÿà²®à³â€Œà²—à²³à²¨à³à²¨à³ à²†à²§à³à²¨à³€à²•à²°à²¿à²¸à²¬à³‡à²•à³‡, à²®à³Šà²¦à²²à²¿à²¨à²¿à²‚à²¦ à²¹à³Šà²¸ à²¡à²¿à²œà²¿à²Ÿà²²à³ à²‰à²¤à³à²ªà²¨à³à²¨à²µà²¨à³à²¨à³ à²¨à²¿à²°à³à²®à²¿à²¸à²¬à³‡à²•à³‡ à²…à²¥à²µà²¾ à²¨à²¿à²®à³à²® à²…à²¸à³à²¤à²¿à²¤à³à²µà²¦à²²à³à²²à²¿à²°à³à²µ à²®à³‚à²²à²¸à³Œà²•à²°à³à²¯à²µà²¨à³à²¨à³ à²†à²ªà³à²Ÿà²¿à²®à³ˆà²¸à³ à²®à²¾à²¡à²¬à³‡à²•à³‡, à²¨à²¿à²®à²—à³† à²¯à²¶à²¸à³à²µà²¿à²¯à²¾à²—à²²à³ à²¸à²¹à²¾à²¯ à²®à²¾à²¡à³à²µ à²ªà²°à²¿à²£à²¤à²¿ à²®à²¤à³à²¤à³ à²…à²¨à³à²­à²µà²µà²¨à³à²¨à³ à²¨à²¾à²µà³ à²¹à³Šà²‚à²¦à²¿à²¦à³à²¦à³‡à²µà³†.",
        explore_trust_title: "à²µà³à²¯à²µà²¹à²¾à²°à²—à²³à³ à²¨à²®à³à²®à²¨à³à²¨à³ à²à²•à³† à²¨à²‚à²¬à³à²¤à³à²¤à²µà³†",
        explore_trust_1_title: "1. à²¨à²µà³€à²¨-à²šà²¾à²²à²¿à²¤ à²µà²¿à²§à²¾à²¨",
        explore_trust_1_desc: "à²­à²µà²¿à²·à³à²¯à²¦-à²¸à²¿à²¦à³à²§ à²ªà²°à²¿à²¹à²¾à²°à²—à²³à²¨à³à²¨à³ à²¨à³€à²¡à²²à³ à²¨à²¾à²µà³ à²†à²§à³à²¨à²¿à²• à²‰à²ªà²•à²°à²£à²—à²³à³ à²®à²¤à³à²¤à³ à²…à²¤à³à²¯à³à²¤à³à²¤à²® à²…à²­à³à²¯à²¾à²¸à²—à²³à²¨à³à²¨à³ à²¬à²³à²¸à³à²¤à³à²¤à³‡à²µà³†.",
        explore_trust_2_title: "2. à²—à³à²°à²¾à²¹à²•-à²•à³‡à²‚à²¦à³à²°à²¿à²¤ à²®à²°à²£à²¦à²‚à²¡à²¨à³†",
        explore_trust_2_desc: "à²ªà³à²°à²¤à²¿à²¯à³Šà²‚à²¦à³ à²¯à³‹à²œà²¨à³†à²¯à³ à²¨à²¿à²®à³à²® à²µà³à²¯à²¾à²ªà²¾à²° à²—à³à²°à²¿à²—à²³à³ à²®à²¤à³à²¤à³ à²•à³†à²²à²¸à²¦ à²¹à²°à²¿à²µà³à²—à²³à²¿à²—à³† à²µà³ˆà²¯à²•à³à²¤à³€à²•à²°à²¿à²¸à²²à²¾à²—à²¿à²¦à³†.",
        explore_trust_3_title: "3. à²ªà²°à²¿à²£à²¤ à²µà³ƒà²¤à³à²¤à²¿à²ªà²°à²°à³",
        explore_trust_3_desc: "à²¸à³ƒà²œà²¨à²¶à³€à²²à²¤à³†, à²ªà²°à²¿à²£à²¤à²¿ à²®à²¤à³à²¤à³ à²‰à²¦à³à²¯à²®à²¦ à²œà³à²žà²¾à²¨à²µà²¨à³à²¨à³ à²¸à²‚à²¯à³‹à²œà²¿à²¸à³à²µ à²¤à²‚à²¡.",
        explore_trust_4_title: "4. à²—à³à²£à²®à²Ÿà³à²Ÿ à²®à²¤à³à²¤à³ à²ªà²¾à²°à²¦à²°à³à²¶à²•à²¤à³†",
        explore_trust_4_desc: "à²ªà³à²°à²¤à²¿ à²¹à²‚à²¤à²¦à²²à³à²²à³‚ à²¸à³à²ªà²·à³à²Ÿ à²¸à²‚à²µà²¹à²¨, à²µà²¿à²¶à³à²µà²¾à²¸à²¾à²°à³à²¹ à²ªà³à²°à²•à³à²°à²¿à²¯à³†à²—à²³à³ à²®à²¤à³à²¤à³ à²¸à²•à²¾à²²à²¿à²• à²µà²¿à²¤à²°à²£à³†.",

        // Chatbot Blog
        blog_cb_title: "à²šà²¾à²Ÿà³â€Œà²¬à²¾à²Ÿà³â€Œà²—à²³à³ à²µà²°à³à²¸à²¸à³ à²®à²¾à²¨à²µ à²¬à³†à²‚à²¬à²²: à²¨à²¿à²®à³à²® à²µà³à²¯à²¾à²ªà²¾à²°à²•à³à²•à³† à²¯à²¾à²µà³à²¦à³ à²‰à²¤à³à²¤à²®?",
        blog_cb_date: "à²¡à²¿à²¸à³†à²‚à²¬à²°à³ 15, 2025",
        blog_cb_author: "à²¤à²¾à²‚à²¤à³à²°à²¿à²• à²¤à²‚à²¡",
        blog_cb_p1: "Customer expectations are rising faster than ever, pushing businesses to rethink how they deliver support. Both chatbots & human agents play powerful roles in shaping overall customer experiences. While automation can handle quick responses, real conversations still rely on emotional intelligence. Choosing the right balance impacts customer satisfaction, response time & operational cost. This article helps you understand where each option shines so you can decide what fits your business best.",
        blog_cb_h2_1: "1. à²šà²¾à²Ÿà³â€Œà²¬à²¾à²Ÿà³ à²¬à³†à²‚à²¬à²²à²¦ à²¸à²¾à²®à²°à³à²¥à³à²¯à²—à²³à³",
        blog_cb_key_adv: "à²ªà³à²°à²®à³à²– à²…à²¨à³à²•à³‚à²²à²—à²³à³",
        blog_cb_h3_1: "à²¤à²•à³à²·à²£à²¦ à²ªà³à²°à²¤à²¿à²•à³à²°à²¿à²¯à³†à²—à²³à³",
        blog_cb_p2: "Chatbots reply within seconds, helping businesses reduce wait times & handle peak hours efficiently.",
        blog_cb_h3_2: "24/7 à²²à²­à³à²¯à²¤à³†",
        blog_cb_p3: "Bots remain active day & night, ensuring customers get basic information, troubleshooting steps & updates anytime.",
        blog_cb_h3_3: "à²µà³†à²šà³à²š-à²ªà²°à²¿à²£à²¾à²®à²•à²¾à²°à²¿ à²•à²¾à²°à³à²¯à²¾à²šà²°à²£à³†à²—à²³à³",
        blog_cb_p4: "Companies save on hiring & training costs since chatbots can manage repeated queries with consistent accuracy.",
        blog_cb_h3_4: "à²¹à³†à²šà³à²šà²¿à²¨ à²¬à³‡à²¡à²¿à²•à³†à²¯ à²¸à²®à²¯à²¦à²²à³à²²à²¿ à²¸à³à²•à³‡à²²à³†à²¬à²¿à²²à²¿à²Ÿà²¿",
        blog_cb_p5: "A single bot can talk to thousands of customers at once, making it ideal for fast-growing businesses.",
        blog_cb_h3_5: "à²¡à³‡à²Ÿà²¾ à²¸à²‚à²—à³à²°à²¹à²£à³† à²®à²¤à³à²¤à³ à²’à²³à²¨à³‹à²Ÿà²—à²³à³",
        blog_cb_p6: "Bots automatically gather customer patterns, helping brands boost personalization & service quality.",
        blog_cb_quote: "\"Imagine a world where your customers never have to wait. It's 2 AM, and a frustrated user needs a quick answerâ€”your chatbot is there instantly, a tireless digital guardian awake while the city sleeps. But when the problem gets tough, thatâ€™s when the human touch steps in. Like a skilled diplomat, your human agent takes over, bringing empathy and deep understanding to complex issues that code simply cannot solve. This powerful duoâ€”the speed of automation and the warmth of humanityâ€”creates a support experience that doesn't just solve problems, but builds lasting trust.\"",
        blog_cb_h2_2: "2. à²®à²¾à²¨à²µ à²¬à³†à²‚à²¬à²²à²¦ à²¸à²¾à²®à²°à³à²¥à³à²¯à²—à²³à³",
        blog_cb_h3_6: "1. à²¸à²¹à²¾à²¨à³à²­à³‚à²¤à²¿ à²®à²¤à³à²¤à³ à²­à²¾à²µà²¨à²¾à²¤à³à²®à²• à²¤à²¿à²³à³à²µà²³à²¿à²•à³†",
        blog_cb_p7: "Human agents offer something chatbots cannotâ€”real emotional connection. They can sense frustration, happiness or confusion through tone & conversation flow. This helps customers feel understood, especially during stressful or sensitive issues. Empathy builds trust, reduces conflict & makes the customer feel valued as a person, not just another ticket.",
        blog_cb_h3_7: "2. à²µà³ˆà²¯à²•à³à²¤à²¿à²•à²—à³Šà²³à²¿à²¸à²¿à²¦ à²¸à²®à²¸à³à²¯à³† à²ªà²°à²¿à²¹à²¾à²°",
        blog_cb_p8: "Humans are naturally creative thinkers. They can analyze a customerâ€™s issue from multiple angles, ask clarifying questions & suggest flexible solutions tailored to individual needs. This is helpful when problems do not follow a standard script. Personalized responses reassure customers that their situation is unique & is being handled by someone who genuinely cares.",
        blog_cb_h3_8: "3. à²¸à²‚à²•à³€à²°à³à²£ à²¸à²®à²¸à³à²¯à³†à²—à²³à²¿à²—à³† à²‰à²¤à³à²¤à²®",
        blog_cb_p9: "Some problems require deeper investigation, multiple verification steps or critical judgment. Human agents excel in these situations because they understand context, exceptions & policies better than automated systems. They can coordinate with other departments, interpret unclear information & offer accurate guidance that bots often miss.",
        blog_cb_h3_9: "4. à²¸à²‚à²¬à²‚à²§ à²¨à²¿à²°à³à²®à²¾à²£",
        blog_cb_p10: "Strong customer relationships are built through real conversations. A friendly agent can turn a negative experience into a positive one by listening actively & showing patience. Over time, this human touch boosts brand loyalty & increases the chances of repeat business. Customers are more likely to trust companies that treat them like humans rather than transactions.",
        blog_cb_h3_10: "5. à²¸à²¾à²‚à²¸à³à²•à³ƒà²¤à²¿à²• à²¤à²¿à²³à³à²µà²³à²¿à²•à³† à²®à²¤à³à²¤à³ à²­à²¾à²·à²¾ à²¸à³‚à²•à³à²·à³à²®à²¤à³†",
        blog_cb_p11: "Human agents naturally understand tone, slang, regional expressions & cultural sensitivities. This ensures smoother communication & avoids misunderstandings that bots often face. Whether itâ€™s adjusting language formality or understanding local behavior patterns, humans can adapt instantlyâ€”making the experience more natural & respectful.",
        blog_cb_conclusion_title: "à²¤à³€à²°à³à²®à²¾à²¨",
        blog_cb_conclusion_p: "Both chatbots & human support offer unique strengths, making them valuable in different situations. Chatbots are perfect for quick replies, repeated questions & cost-efficient operations. Human agents shine when conversations require emotional care, critical thinking or deep problem-solving. Instead of choosing one over the other, most businesses succeed by blending automation with human expertise. This balanced approach creates faster, smarter & more human-centered support experiences for every customer.",
        blog_back_btn: "à²¬à³à²²à²¾à²—à³â€Œà²—à³† à²¹à²¿à²‚à²¤à²¿à²°à³à²—à²¿",
    }
};

// Language codes mapping
const langCodes = {
    en: 'EN',
    es: 'ES',
    fr: 'FR',
    de: 'DE',
    it: 'IT',
    pt: 'PT',
    ar: 'AR',
    kn: 'KN'
};

document.addEventListener('DOMContentLoaded', () => {
    console.log('Navabharath Technologies website loaded');

    // Language Dropdown Functionality
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    const currentLangSpan = document.getElementById('currentLang');

    // Accessibility attributes for language dropdown
    if (langBtn) {
        langBtn.setAttribute('aria-haspopup', 'true');
        langBtn.setAttribute('aria-expanded', 'false');
    }
    if (langDropdown) {
        langDropdown.setAttribute('role', 'menu');
    }

    // Load saved language or default to English
    let currentLang = localStorage.getItem('selectedLanguage') || 'en';
    updateLanguage(currentLang);

    // Toggle dropdown (with ARIA)
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = langDropdown.classList.toggle('active');
        langBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
            langDropdown.classList.remove('active');
            if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // Language selection
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedLang = option.getAttribute('data-lang');
            updateLanguage(selectedLang);
            localStorage.setItem('selectedLanguage', selectedLang);
            langDropdown.classList.remove('active');
        });
    });

    // Update language function
    function updateLanguage(lang) {
        currentLang = lang;
        currentLangSpan.textContent = langCodes[lang];

        // Update active state in dropdown
        langOptions.forEach(option => {
            if (option.getAttribute('data-lang') === lang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });

        // Translate all elements with data-translate attribute
        // Translate all elements with data-translate attribute
        const elementsToTranslate = document.querySelectorAll('[data-translate]');
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.setAttribute('placeholder', translations[lang][key]);
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Handle RTL for Arabic
        if (lang === 'ar') {
            document.body.setAttribute('dir', 'rtl');
        } else {
            document.body.setAttribute('dir', 'ltr');
        }
    }

    // Custom Notification Function
    function showNotification(message, type = 'success') {
        const notification = document.getElementById('customNotification');
        notification.textContent = message;
        notification.className = `custom-notification ${type} show`;

        // Auto-hide after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 5000);
    }

    // Form submission handler
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const submitBtn = form.querySelector('button[type="submit"]');

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            // Basic Validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }

            // Email Validation Regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Disable button and show loading state
            const originalBtnText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            try {
                console.log('Sending email...');

                const response = await fetch('https://company-website-backend-91ia.onrender.com/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, message })
                });

                console.log('Response received:', response.status, response.ok);

                let data;
                try {
                    data = await response.json();
                    console.log('Response data:', data);
                } catch (jsonError) {
                    console.error('JSON parse error:', jsonError);
                    throw new Error('Invalid server response');
                }

                if (response.ok) {
                    // Success!
                    console.log('Email sent successfully!');
                    showNotification(' Your message has been sent successfully. We will be in touch soon!', 'success');
                    form.reset();
                } else {
                    // Server returned an error
                    console.error('Server error:', data);
                    throw new Error(data.message || 'Server error occurred');
                }
            } catch (error) {
                console.error('Fetch error:', error);
                showNotification(' Message failed to send. Please try again later or contact us directly.', 'error');
            } finally {
                // Always restore button state
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
                console.log('Form submission complete');
            }
        });
    }

    // Search Functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const voiceSearchBtn = document.getElementById('voiceSearchBtn');

    // Search function with page navigation
    // Search function with page navigation
    function performSearch(query) {
        const searchTerm = query.toLowerCase().trim();

        // If no search term, do nothing
        if (!searchTerm) {
            return;
        }

        // Define known pages and their corresponding paths/sections
        const pageMapping = {
            'home': 'index.html#home',
            'about': 'index.html#about',
            'about us': 'index.html#about',
            'services': 'index.html#services',
            'service': 'index.html#services',
            'contact': 'index.html#contact',
            'contact us': 'index.html#contact',
            'resources': 'resources.html',
            'resource': 'resources.html',
            'knowledge': 'resources.html',
            'blog': 'blog.html',
            'blogs': 'blog.html',
            'news': 'blog.html',
            'explore': 'explore.html',
            'privacy': 'privacy.html',
            'terms': 'terms.html',
            'policy': 'privacy.html'
        };

        // Check if search term matches any known page
        let targetPath = null;

        // Exact match check first
        if (pageMapping[searchTerm]) {
            targetPath = pageMapping[searchTerm];
        } else {
            // Partial match check
            for (const [key, path] of Object.entries(pageMapping)) {
                if (searchTerm.includes(key)) {
                    targetPath = path;
                    break;
                }
            }
        }

        if (targetPath) {
            const currentPath = window.location.pathname;
            const isHomePage = currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '/';

            // Check if target is an internal section on the current page
            if (targetPath.startsWith('index.html#') && isHomePage) {
                const sectionId = targetPath.split('#')[1];
                const targetSection = document.getElementById(sectionId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // Update URL hash
                    if (window.history.pushState) {
                        window.history.pushState(null, null, '#' + sectionId);
                    } else {
                        window.location.hash = '#' + sectionId;
                    }
                }
            } else {
                // Navigate to the target page
                window.location.href = targetPath;
            }
        } else {
            // If no match found, show available options
            alert('Page not found. Try searching for: Home, About, Services, Resources, Blog, or Contact.');
        }

        // Clear search input after search
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = '';
        }
    }

    // Search button click
    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            // Mobile handling: Simple toggle logic
            const isMobile = window.innerWidth <= 768; // Cover tablets too just in case

            if (isMobile) {
                e.preventDefault();
                if (searchInput.classList.contains('show-mobile')) {
                    if (searchInput.value.trim() !== '') {
                        performSearch(searchInput.value);
                        searchInput.classList.remove('show-mobile');
                    } else {
                        // Close if empty and clicked again
                        searchInput.classList.remove('show-mobile');
                    }
                } else {
                    searchInput.classList.add('show-mobile');
                    searchInput.focus();
                }
            } else {
                performSearch(searchInput.value);
            }
        });
    }

    // Search on Enter key
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch(searchInput.value);
            }
        });
    }

    // Voice Search Functionality
    if (voiceSearchBtn) {
        // Check if browser supports speech recognition
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.lang = currentLang === 'en' ? 'en-US' :
                currentLang === 'es' ? 'es-ES' :
                    currentLang === 'fr' ? 'fr-FR' :
                        currentLang === 'de' ? 'de-DE' :
                            currentLang === 'it' ? 'it-IT' :
                                currentLang === 'pt' ? 'pt-PT' :
                                    currentLang === 'ar' ? 'ar-SA' : 'en-US';
            recognition.continuous = false;
            recognition.interimResults = false;

            voiceSearchBtn.addEventListener('click', () => {
                voiceSearchBtn.classList.add('listening');
                recognition.start();
            });

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                searchInput.value = transcript;
                performSearch(transcript);
                voiceSearchBtn.classList.remove('listening');
            };

            recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                voiceSearchBtn.classList.remove('listening');
                if (event.error === 'no-speech') {
                    alert('No speech detected. Please try again.');
                } else if (event.error === 'not-allowed') {
                    alert('Microphone access denied. Please enable microphone permissions.');
                }
            };

            recognition.onend = () => {
                voiceSearchBtn.classList.remove('listening');
            };
        } else {
            // Hide voice search button if not supported
            voiceSearchBtn.style.display = 'none';
            console.warn('Speech recognition not supported in this browser');
        }
    }


    // Hero Carousel Functionality
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    if (carouselSlides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 4000; // 4 seconds

        function nextSlide() {
            carouselSlides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % carouselSlides.length;
            carouselSlides[currentSlide].classList.add('active');
        }

        setInterval(nextSlide, slideInterval);
    }

    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-menu nav a');

    if (hamburger && navMenu) {
        // Accessibility attributes for mobile menu
        hamburger.setAttribute('aria-controls', 'navMenu');
        hamburger.setAttribute('aria-expanded', 'false');
        navMenu.setAttribute('aria-hidden', 'true');
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');

            // Toggle icon between bars and times (close)
            const icon = hamburger.querySelector('i');
            const isOpen = navMenu.classList.contains('active');
            if (isOpen) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                hamburger.setAttribute('aria-expanded', 'true');
                navMenu.setAttribute('aria-hidden', 'false');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                hamburger.setAttribute('aria-expanded', 'false');
                navMenu.setAttribute('aria-hidden', 'true');
            }
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target) && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                hamburger.setAttribute('aria-expanded', 'false');
                navMenu.setAttribute('aria-hidden', 'true');
            }
        });

        // Keyboard: close menus on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // close nav menu
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    const icon = hamburger.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                    hamburger.setAttribute('aria-expanded', 'false');
                    navMenu.setAttribute('aria-hidden', 'true');
                }

                // close language dropdown
                if (langDropdown.classList.contains('active')) {
                    langDropdown.classList.remove('active');
                    if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
                }
            }

            // Pointer / Focus zoom for hero images with class `movable-image`.
            // - pointerenter / pointerleave for mouse & stylus
            // - pointerdown / pointerup for touch interactions
            // - focus / blur for keyboard accessibility
            const movableImages = document.querySelectorAll('.movable-image');
            function addZoomHandlers(img) {
                if (!img) return;

                // Make focusable for keyboard users if not already
                if (!img.hasAttribute('tabindex')) {
                    img.setAttribute('tabindex', '0');
                }

                const zoomIn = () => img.classList.add('is-zoomed');
                const zoomOut = () => img.classList.remove('is-zoomed');

                img.addEventListener('pointerenter', zoomIn);
                img.addEventListener('pointerleave', zoomOut);
                img.addEventListener('pointerdown', zoomIn);
                img.addEventListener('pointerup', zoomOut);
                img.addEventListener('pointercancel', zoomOut);

                img.addEventListener('focus', zoomIn);
                img.addEventListener('blur', zoomOut);
            }

            movableImages.forEach(addZoomHandlers);
        });

        // Scroll Animation Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active-animation');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const animatedHeaders = document.querySelectorAll('.about-content h2, .section-header h2, .contact-info h2');
        animatedHeaders.forEach(header => {
            observer.observe(header);
        });
    }





    // 3D Service Carousel Logic (Linear Infinite Scroll)
    const carouselScene = document.querySelector('.services-scene');
    const carousel = document.getElementById('servicesCarousel');

    if (carouselScene && carousel) {
        const cells = carousel.querySelectorAll('.service-card');
        const cellCount = cells.length;
        const cellWidth = 340; // Card width (280) + gap (60)
        const totalWidth = cellCount * cellWidth;

        let currentScroll = 0;
        let scrollSpeed = 1.5; // Decreased speed (half of previous 3, closer to original)
        let animationId;
        let isPaused = false;

        // Hover State
        // Hover State
        let hoveredCell = null;
        cells.forEach(cell => {
            // Initialize tilt properties
            cell.tiltX = 0;
            cell.tiltY = 0;

            cell.addEventListener('mouseenter', () => hoveredCell = cell);
            cell.addEventListener('mouseleave', () => {
                hoveredCell = null;
                // Reset tilt on leave
                cell.tiltX = 0;
                cell.tiltY = 0;
            });
            cell.addEventListener('mousemove', (e) => {
                const rect = cell.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                // Tilt calculation (Max 15 degrees)
                cell.tiltX = ((y - centerY) / centerY) * -15;
                cell.tiltY = ((x - centerX) / centerX) * 15;
            });
        });

        function animateCarousel() {
            if (!isPaused) {
                currentScroll -= scrollSpeed;
            }

            // Normalize scroll
            if (Math.abs(currentScroll) >= totalWidth) {
                currentScroll %= totalWidth;
            }

            cells.forEach((cell, i) => {
                const initialPos = i * cellWidth;
                let pos = (initialPos + currentScroll) % totalWidth;

                // Wrap logic to keep items in [-totalWidth/2, totalWidth/2]
                if (pos < -totalWidth / 2) pos += totalWidth;
                if (pos > totalWidth / 2) pos -= totalWidth;
                // Extra check for edge cases
                if (pos < -totalWidth / 2) pos += totalWidth;

                const dist = pos;
                const absDist = Math.abs(dist);

                const isHovered = (cell === hoveredCell);

                let scale = 1;
                let translateX = dist;
                let translateZ = 0;
                let opacity = 1;
                let blur = 0;
                let zIndex = 1;

                if (isHovered) {
                    scale = 1.05; // Reverted to previous state
                    translateX = dist;
                    translateZ = 120;
                    opacity = 1;
                    blur = 0;
                    zIndex = 1000;
                    cell.style.cursor = 'pointer';
                } else {
                    if (absDist < cellWidth / 2) {
                        // Center
                        scale = 1.0;
                        translateX = dist;
                        translateZ = 0;
                        opacity = 1;
                        blur = 0;
                        zIndex = 100;
                    } else {
                        // Sides
                        const dir = dist > 0 ? 1 : -1;
                        // Adjusted offset for wider cards
                        const offset = (cellWidth * 0.55) + ((absDist - cellWidth / 2) * 0.45);

                        translateX = dir * offset;
                        translateZ = -absDist * 0.6;

                        const distRatio = absDist / cellWidth;

                        // Fading
                        opacity = 1 - Math.max(0, (distRatio - 1.2) * 0.5);
                        if (opacity < 0) opacity = 0;

                        // Reduced Blur: Removed completely as requested
                        blur = 0;
                        zIndex = 100 - Math.floor(absDist);
                        // Reverted side scaling
                        scale = 0.85 - (Math.min(1, distRatio) * 0.15);
                    }
                }

                // Ensure integer pixels for sharper rendering
                const tx = Math.round(translateX);
                const tz = Math.round(translateZ);

                // Get tilt values if hovered, else 0
                const rx = isHovered ? (cell.tiltX || 0) : 0;
                const ry = isHovered ? (cell.tiltY || 0) : 0;

                cell.style.filter = `blur(${blur}px)`;
                cell.style.opacity = opacity;
                cell.style.zIndex = zIndex;
                cell.style.transform = `translateX(${tx}px) translateZ(${tz}px) scale(${scale}) rotateX(${rx}deg) rotateY(${ry}deg)`;

                if (blur === 0 && !isHovered) {
                    cell.classList.add('active-card');
                    cell.classList.remove('blur-card');
                } else if (isHovered) {
                    cell.classList.add('active-card');
                    cell.classList.remove('blur-card');
                } else {
                    cell.classList.remove('active-card');
                    cell.classList.add('blur-card');
                }
            });

            animationId = requestAnimationFrame(animateCarousel);
        }

        animateCarousel();

        // Pause interactions
        // Mouse Wheel Scroll
        carouselScene.addEventListener('wheel', (e) => {
            e.preventDefault();

            // Prioritize horizontal scroll if dominant (for trackpads)
            let delta = e.deltaY;
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                delta = e.deltaX;
            }

            // Normalize scroll speed for more uniform movement
            // Reduced multiplier to prevent jumpiness
            currentScroll -= delta * 1.0;
        }, { passive: false });

        // Touch Swipe Event Listeners
        let touchStartX = 0;
        let touchStartY = 0;

        carouselScene.addEventListener('touchstart', (e) => {
            isPaused = true;
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }, { passive: true });

        carouselScene.addEventListener('touchmove', (e) => {
            if (!isPaused) return;
            const touchCurrentX = e.touches[0].clientX;
            const touchCurrentY = e.touches[0].clientY;
            const diffX = touchStartX - touchCurrentX;
            const diffY = touchStartY - touchCurrentY;

            // Check if horizontal swipe dominant
            if (Math.abs(diffX) > Math.abs(diffY)) {
                if (e.cancelable) e.preventDefault(); // Prevent page scroll
                currentScroll -= diffX * 2.5; // Fast swipe speed
                touchStartX = touchCurrentX;
            }
        }, { passive: false });

        carouselScene.addEventListener('touchend', () => {
            isPaused = false;
        });

        carouselScene.addEventListener('mouseenter', () => isPaused = true);
        carouselScene.addEventListener('mouseleave', () => isPaused = false);
    }

    // 3D Tilt Animation for Resource Cards
    const cards = document.querySelectorAll('.resource-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10; // Max rotation deg
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });

    // Smart Sticky Header Logic
    let lastScrollY = window.pageYOffset;
    const header = document.querySelector('header');
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScrollY = window.pageYOffset;

                // Always show if at top
                if (currentScrollY <= 0) {
                    header.classList.remove('header-hidden');
                    lastScrollY = currentScrollY;
                    ticking = false;
                    return;
                }

                // Hide on scroll down, Show on scroll up for ALL pages
                if (currentScrollY > lastScrollY && !header.classList.contains('header-hidden')) {
                    header.classList.add('header-hidden');
                } else if (currentScrollY < lastScrollY && header.classList.contains('header-hidden')) {
                    header.classList.remove('header-hidden');
                }

                lastScrollY = currentScrollY;
                ticking = false;
            });
            ticking = true;
        }
    });
});

// Unique 3D Holographic Card Animation for Blog Page
const blogCards = document.querySelectorAll('.blog-card');

// Add glare element to each card
blogCards.forEach(card => {
    const glare = document.createElement('div');
    glare.classList.add('card-glare');
    card.appendChild(glare);

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation based on cursor position
        // Max rotation 10deg
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        // Apply transform to card
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`;

        // Dynamic Glare Effect
        // Calculate angle for gradient based on mouse position
        const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) - 90;
        const glareEl = card.querySelector('.card-glare');
        if (glareEl) {
            // Move opacity center with mouse
            glareEl.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 80%)`;
            glareEl.style.opacity = '0.6';
            // Also can translate it slightly
        }
    });

    // Reset on leave
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        const glareEl = card.querySelector('.card-glare');
        if (glareEl) {
            glareEl.style.opacity = '0';
        }
    });

    // Spotlight Effect for Client Card
    const clientCard = document.querySelector('.client-card');
    if (clientCard) {
        clientCard.addEventListener('mousemove', (e) => {
            const rect = clientCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Update custom properties for spotlight
            clientCard.style.background = `
                radial-gradient(
                    circle at ${x}px ${y}px,
                    rgba(255, 255, 255, 0.95) 0%,
                    rgba(255, 255, 255, 0.7) 50%,
                    rgba(255, 255, 255, 0.5) 100%
                )
            `;

            // Subtle 3D Tilt
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;

            clientCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        clientCard.addEventListener('mouseleave', () => {
            // Reset background and transform
            clientCard.style.background = 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.6))';
            clientCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    }
});

// ===================================
// URL CLEANER SYSTEM (Backend & Frontend Sync)
// ===================================
// This script automatically removes .html extensions from:
// 1. The browser address bar (visual only, no reload)
// 2. Internal navigation links (so clicks lead to clean URLs)
// It only runs on live servers (http/https) to preserve local file browsing.
document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on a live server (not local file system)
    if (window.location.protocol !== 'file:') {

        // 1. Clean the Address Bar
        const currentPath = window.location.pathname;
        if (currentPath.endsWith('.html')) {
            let newPath = currentPath.slice(0, -5);
            // Handle 'index.html' specifically to root /
            if (newPath.endsWith('/index')) {
                newPath = newPath.slice(0, -6); // remove '/index'
                if (newPath === '') newPath = '/';
            }
            // Update history without reloading
            window.history.replaceState(null, '', newPath + window.location.search + window.location.hash);
        }

        // 2. Clean Internal Links
        document.querySelectorAll('a[href]').forEach(link => {
            const href = link.getAttribute('href');

            // Skip external links, anchors, or already clean links
            if (!href || href.startsWith('http') || href.startsWith('//') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

            // Handle .html links
            if (href.includes('.html')) {
                let newHref = href;

                // Special handling for index.html
                if (newHref === 'index.html') {
                    newHref = '/';
                } else if (newHref.startsWith('index.html#')) {
                    newHref = '/' + newHref.substring(10); // e.g. index.html#home -> /#home
                } else {
                    newHref = newHref.replace('.html', '');
                }

                link.setAttribute('href', newHref);
            }
        });
    }
});


