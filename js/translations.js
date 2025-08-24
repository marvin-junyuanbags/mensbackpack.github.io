// Multi-language translations for MensBackpack.co.uk
const translations = {
    en: {
        // Navigation
        home: 'Home',
        products: 'Products',
        about: 'About Us',
        contact: 'Contact',
        blog: 'Blog',
        getQuote: 'Get Quote',
        
        // Common elements
        learnMore: 'Learn More',
        viewDetails: 'View Details',
        contactUs: 'Contact Us',
        readMore: 'Read More',
        
        // Hero section
        heroTitle: 'Premium Men\'s Backpacks for Global B2B Markets',
        heroSubtitle: 'Leading manufacturer of high-quality men\'s backpacks with 15+ years of experience serving businesses worldwide.',
        
        // Footer
        quickLinks: 'Quick Links',
        followUs: 'Follow Us',
        allRightsReserved: 'All rights reserved.',
        
        // Product categories
        categories_title: "Men's Backpack Categories",
        categories_subtitle: "Specialized designs for every aspect of a man's life",
        businessProfessional: 'Business & Professional',
        travelAdventure: 'Travel & Adventure',
        sportsOutdoor: 'Sports & Outdoor',
        techGaming: 'Tech & Gaming',
        business_professional_title: "Business & Professional",
        business_professional_desc: "Sleek designs for executives, consultants, and professionals who demand style and functionality.",
        business_feature_laptop: "Laptop compartments up to 17\"",
        business_feature_organizers: "Document organizers",
        business_feature_leather: "Premium leather accents",
        business_feature_tsa: "TSA-friendly designs",
        explore_business_line: "Explore Business Line →",
        travel_adventure_title: "Travel & Adventure",
        travel_adventure_desc: "Rugged and spacious designs for travelers, adventurers, and digital nomads.",
        travel_feature_capacity: "40-65L capacity options",
        travel_feature_weather: "Weather-resistant materials",
        travel_feature_compartments: "Multiple compartments",
        travel_feature_ergonomics: "Comfort-focused ergonomics",
        explore_travel_line: "Explore Travel Line →",
        sports_fitness_title: "Sports & Fitness",
        sports_fitness_desc: "Performance-oriented designs for athletes, gym enthusiasts, and active lifestyles.",
        sports_feature_shoe: "Ventilated shoe compartments",
        sports_feature_hydration: "Hydration system compatibility",
        sports_feature_access: "Quick-access pockets",
        sports_feature_moisture: "Moisture-wicking materials",
        explore_sports_line: "Explore Sports Line →",
        tech_gaming_title: "Tech & Gaming",
        tech_gaming_desc: "Innovative designs for tech professionals, gamers, and digital creators.",
        tech_feature_device: "Multiple device compartments",
        tech_feature_cable: "Cable management systems",
        tech_feature_usb: "USB charging ports",
        tech_feature_theft: "Anti-theft features",
        explore_tech_line: "Explore Tech Line →",
        manufacturing_title: "Our Manufacturing Excellence",
        manufacturing_subtitle: "From concept to delivery, we ensure quality at every step",
        process_design_title: "Design Consultation",
        process_design_desc: "Our design team works with you to understand your target market, brand requirements, and functional specifications for the perfect men's backpack.",
        process_prototype_title: "Prototyping",
        process_prototype_desc: "We create detailed prototypes and samples, allowing you to test functionality, aesthetics, and quality before mass production begins.",
        process_material_title: "Material Selection",
        process_material_desc: "Choose from premium materials including ballistic nylon, genuine leather, waterproof fabrics, and eco-friendly alternatives.",
        process_production_title: "Production",
        process_production_desc: "State-of-the-art manufacturing facility with skilled craftsmen ensuring consistent quality and timely delivery of your orders.",
        process_quality_title: "Quality Control",
        process_quality_desc: "Rigorous testing and inspection processes ensure every backpack meets our high standards and your specifications.",
        process_shipping_title: "Global Shipping",
        process_shipping_desc: "Efficient logistics and packaging ensure your products arrive safely and on time, anywhere in the world.",
        
        // Testimonials
        testimonials_title: "What Our B2B Partners Say",
        testimonials_subtitle: "Trusted by leading brands and retailers worldwide",
        testimonial_1_content: "\"MensBackpack.co.uk has been our go-to manufacturer for premium men's backpacks. Their attention to detail and understanding of masculine design aesthetics is unmatched.\"",
        testimonial_1_name: "James Mitchell",
        testimonial_1_title: "CEO, Urban Gear Ltd",
        testimonial_2_content: "\"The quality and durability of their men's backpacks have exceeded our expectations. Our customers love the professional designs and functionality.\"",
        testimonial_2_name: "Sarah Thompson",
        testimonial_2_title: "Procurement Manager, Executive Accessories",
        testimonial_3_content: "\"From initial design to final delivery, their B2B service is exceptional. They understand the men's market and deliver products that sell.\"",
        testimonial_3_name: "David Chen",
        testimonial_3_title: "Brand Director, Adventure Gear Co",
        
        // CTA Section
        cta_title: "Ready to Launch Your Men's Backpack Line?",
        cta_subtitle: "Partner with us to create premium backpacks that resonate with modern men",
        cta_quote_btn: "Get Custom Quote",
        cta_consultation_btn: "Schedule Consultation",
        
        // Footer
        footer_description: "Leading B2B manufacturer of premium men's backpacks for the modern gentleman.",
        
        // Products Page
        products_page_title: "Premium Men's Backpack Collection",
        products_page_subtitle: "Professional-grade backpacks designed for the modern man. Custom manufacturing available for bulk orders.",
        product_categories_title: "Product Categories",
        product_categories_subtitle: "Discover our comprehensive range of men's backpacks, each designed with precision and built for durability.",
        
        // Business Backpacks
        business_backpacks_title: "Business & Professional Backpacks",
        business_backpacks_desc: "Sophisticated designs perfect for corporate environments, featuring laptop compartments and organizational pockets.",
        business_feature_1: "15-17 inch laptop compartments",
        business_feature_2: "Professional appearance",
        business_feature_3: "Multiple organizational pockets",
        business_feature_4: "Water-resistant materials",
        business_feature_5: "TSA-friendly designs",
        
        // Travel Backpacks
        travel_backpacks_title: "Travel & Adventure Backpacks",
        travel_backpacks_desc: "Durable and spacious designs for travelers and adventurers, with enhanced comfort and security features.",
        travel_feature_1: "Large capacity (30-50L)",
        travel_feature_2: "Anti-theft features",
        travel_feature_3: "Comfortable padding",
        travel_feature_4: "Weather-resistant",
        travel_feature_5: "Multiple access points",
        
        // Tech Backpacks
        tech_backpacks_title: "Tech & Gaming Backpacks",
        tech_backpacks_desc: "Specialized backpacks for tech enthusiasts and gamers, featuring advanced protection and cable management.",
        tech_feature_1: "Gaming laptop protection",
        tech_feature_2: "Cable management system",
        tech_feature_3: "LED-compatible designs",
        tech_feature_4: "Shock-resistant padding",
        tech_feature_5: "Ventilation systems",
        
        // Outdoor Backpacks
        outdoor_backpacks_title: "Outdoor & Sports Backpacks",
        outdoor_backpacks_desc: "Rugged backpacks built for outdoor activities, sports, and extreme conditions with superior durability.",
        outdoor_feature_1: "Weather-proof materials",
        outdoor_feature_2: "Reinforced construction",
        outdoor_feature_3: "Hydration compatible",
        outdoor_feature_4: "Reflective elements",
        outdoor_feature_5: "Modular attachments",
        
        // Common Labels
        moq_label: "MOQ",
        lead_time_label: "Lead Time",
        view_details: "View Details →",
        
        // Casual & Lifestyle Backpacks
        casual_backpacks_title: "Casual & Lifestyle Backpacks",
        casual_backpacks_desc: "Versatile everyday backpacks that blend style with functionality for modern urban lifestyles.",
        casual_feature_1: "Trendy designs",
        casual_feature_2: "Lightweight materials",
        casual_feature_3: "Everyday functionality",
        casual_feature_4: "Multiple color options",
        casual_feature_5: "Affordable pricing",
        
        // Luxury & Premium Backpacks
        luxury_backpacks_title: "Luxury & Premium Backpacks",
        luxury_backpacks_desc: "High-end backpacks crafted with premium materials and exceptional attention to detail for discerning customers.",
        luxury_feature_1: "Premium leather/materials",
        luxury_feature_2: "Handcrafted details",
        luxury_feature_3: "Limited edition designs",
        luxury_feature_4: "Lifetime warranty",
        luxury_feature_5: "Exclusive customization",
        
        // Customization Options
        customization_title: "Customization Options",
        customization_subtitle: "Transform our designs to match your brand identity with our comprehensive customization services.",
        logo_branding_title: "Logo & Branding",
        logo_branding_desc: "Add your company logo, brand colors, and custom labels to create a unique brand identity.",
        color_variations_title: "Color Variations",
        color_variations_desc: "Choose from our extensive color palette or specify custom Pantone colors for your products.",
        size_modifications_title: "Size Modifications",
        size_modifications_desc: "Adjust dimensions, compartment sizes, and capacity to meet your specific requirements.",
        material_selection_title: "Material Selection",
        material_selection_desc: "Choose from premium fabrics, leather, eco-friendly materials, and specialized technical textiles.",
        hardware_options_title: "Hardware Options",
        hardware_options_desc: "Select from various zipper types, buckles, straps, and metal finishes to enhance functionality.",
        special_features_title: "Special Features",
        special_features_desc: "Add USB charging ports, RFID blocking, anti-theft locks, and other advanced features.",
        
        // Products CTA Section
        cta_title: "Ready to Create Your Custom Backpack Line?",
        cta_subtitle: "Contact our expert team to discuss your requirements and get a detailed quote for your custom backpack manufacturing project.",
        cta_quote_button: "Request Custom Quote",
        cta_contact_button: "Contact Our Team",
        
        // Additional translations
        heroTitle: 'Premium Men\'s Backpack Manufacturing',
        heroSubtitle: 'Your trusted B2B partner for custom men\'s backpacks. From business professionals to outdoor enthusiasts, we craft quality backpacks that define modern masculinity.',
        getCustomQuote: 'Get Custom Quote',
        viewProducts: 'View Products',
        services: 'Services',
        customManufacturing: 'Custom Manufacturing',
        brandDevelopment: 'Brand Development',
        designConsultation: 'Design Consultation',
        qualityAssurance: 'Quality Assurance',
        globalDistribution: 'Global Distribution',
        company: 'Company',
        certifications: 'Certifications',
        sustainability: 'Sustainability',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        quote: 'Get Quote',
        businessBackpacks: 'Business Backpacks',
        
        // About page
        aboutPageTitle: 'About MensBackpack.co.uk',
        aboutPageSubtitle: 'Your trusted partner in premium men\'s backpack manufacturing with over 15 years of industry expertise.',
        companyOverview: 'Company Overview',
        companyOverviewDesc: 'Established as a leading manufacturer of premium men\'s backpacks, we combine traditional craftsmanship with modern innovation to deliver exceptional products.',
        whoWeAre: 'Who We Are',
        whoWeAreDesc1: 'MensBackpack.co.uk is a specialized manufacturer dedicated to creating high-quality men\'s backpacks for the global B2B market. With our state-of-the-art manufacturing facility and experienced design team, we have successfully served over 500 international clients across 40+ countries.',
        whoWeAreDesc2: 'Our commitment to excellence extends beyond manufacturing – we provide comprehensive solutions from initial design concepts to final product delivery, ensuring every backpack meets the highest standards of quality, durability, and style.',
        yearsExperience: 'Years Experience',
        globalClients: 'Global Clients',
        countriesServed: 'Countries Served',
        backpacksProduced: 'Backpacks Produced',
        
        // Contact page
        contactPageTitle: 'Contact Us',
        contactPageSubtitle: 'Get in touch with our expert team for custom men\'s backpack manufacturing solutions.',
        sendMessage: 'Send Us a Message',
        sendMessageDesc: 'Ready to start your custom backpack project? Fill out the form below and our team will get back to you within 24 hours with detailed information and next steps.',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        phone: 'Phone',
        company: 'Company',
        message: 'Message',
        sendButton: 'Send Message',
        
        // Blog page
        blogPageTitle: 'Industry Insights & Manufacturing Blog',
        blogPageSubtitle: 'Expert knowledge on men\'s backpack manufacturing, industry trends, and B2B solutions.',
        blog: 'Blog',
        businessArticles: 'Business & Industry Articles',
        
        travelBackpacks: 'Travel Backpacks'
        sportsBackpacks: 'Sports Backpacks',
        techBackpacks: 'Tech Backpacks',
        outdoorBackpacks: 'Outdoor Backpacks',
        businessBackpackTitle: 'Business & Professional Backpacks',
        businessBackpackDesc: 'Premium backpacks designed for the modern professional, combining style, functionality, and durability for the corporate environment.'
    },
    
    es: {
        // Navigation
        home: 'Inicio',
        products: 'Productos',
        about: 'Acerca de',
        contact: 'Contacto',
        blog: 'Blog',
        getQuote: 'Cotizar',
        
        // Common elements
        learnMore: 'Saber Más',
        viewDetails: 'Ver Detalles',
        contactUs: 'Contáctanos',
        readMore: 'Leer Más',
        
        // Hero section
        heroTitle: 'Mochilas Premium para Hombres en Mercados B2B Globales',
        heroSubtitle: 'Fabricante líder de mochilas de alta calidad para hombres con más de 15 años de experiencia sirviendo empresas en todo el mundo.',
        
        // Footer
        quickLinks: 'Enlaces Rápidos',
        followUs: 'Síguenos',
        allRightsReserved: 'Todos los derechos reservados.',
        
        // Product categories
        categories_title: "Categorías de Mochilas para Hombres",
        categories_subtitle: "Diseños especializados para cada aspecto de la vida de un hombre",
        businessProfessional: 'Negocios y Profesional',
        travelAdventure: 'Viaje y Aventura',
        sportsOutdoor: 'Deportes y Exterior',
        techGaming: 'Tecnología y Gaming',
        business_professional_title: "Negocios y Profesional",
        business_professional_desc: "Diseños elegantes para ejecutivos, consultores y profesionales que exigen estilo y funcionalidad.",
        business_feature_laptop: "Compartimentos para portátiles hasta 17\"",
        business_feature_organizers: "Organizadores de documentos",
        business_feature_leather: "Acentos de cuero premium",
        business_feature_tsa: "Diseños compatibles con TSA",
        explore_business_line: "Explorar Línea de Negocios →",
        travel_adventure_title: "Viaje y Aventura",
        travel_adventure_desc: "Diseños resistentes y espaciosos para viajeros, aventureros y nómadas digitales.",
        travel_feature_capacity: "Opciones de capacidad 40-65L",
        travel_feature_weather: "Materiales resistentes al clima",
        travel_feature_compartments: "Múltiples compartimentos",
        travel_feature_ergonomics: "Ergonomía enfocada en comodidad",
        explore_travel_line: "Explorar Línea de Viaje →",
        sports_fitness_title: "Deportes y Fitness",
        sports_fitness_desc: "Diseños orientados al rendimiento para atletas, entusiastas del gimnasio y estilos de vida activos.",
        sports_feature_shoe: "Compartimentos ventilados para zapatos",
        sports_feature_hydration: "Compatibilidad con sistema de hidratación",
        sports_feature_access: "Bolsillos de acceso rápido",
        sports_feature_moisture: "Materiales que absorben la humedad",
        explore_sports_line: "Explorar Línea Deportiva →",
        tech_gaming_title: "Tecnología y Gaming",
        tech_gaming_desc: "Diseños innovadores para profesionales de tecnología, gamers y creadores digitales.",
        tech_feature_device: "Compartimentos para múltiples dispositivos",
        tech_feature_cable: "Sistemas de gestión de cables",
        tech_feature_usb: "Puertos de carga USB",
        tech_feature_theft: "Características antirrobo",
        explore_tech_line: "Explorar Línea Tech →",
        manufacturing_title: "Excelencia en Fabricación",
        manufacturing_subtitle: "Del concepto a la entrega, aseguramos calidad en cada paso",
        process_design_title: "Consulta de Diseño",
        process_design_desc: "Nuestro equipo de diseño trabaja contigo para entender tu mercado objetivo, requisitos de marca y especificaciones funcionales para la mochila masculina perfecta.",
        process_prototype_title: "Prototipado",
        process_prototype_desc: "Creamos prototipos detallados y muestras, permitiéndote probar funcionalidad, estética y calidad antes de que comience la producción en masa.",
        process_material_title: "Selección de Materiales",
        process_material_desc: "Elige entre materiales premium incluyendo nylon balístico, cuero genuino, telas impermeables y alternativas ecológicas.",
        process_production_title: "Producción",
        process_production_desc: "Instalación de fabricación de última generación con artesanos especializados asegurando calidad consistente y entrega oportuna de tus pedidos.",
        process_quality_title: "Control de Calidad",
        process_quality_desc: "Procesos rigurosos de prueba e inspección aseguran que cada mochila cumpla con nuestros altos estándares y tus especificaciones.",
        process_shipping_title: "Envío Global",
        process_shipping_desc: "Logística eficiente y empaque aseguran que tus productos lleguen de manera segura y a tiempo, en cualquier parte del mundo.",
        
        // Testimonials
        testimonials_title: "Lo Que Dicen Nuestros Socios B2B",
        testimonials_subtitle: "Confiado por marcas líderes y minoristas en todo el mundo",
        testimonial_1_content: "\"MensBackpack.co.uk ha sido nuestro fabricante de referencia para mochilas masculinas premium. Su atención al detalle y comprensión de la estética de diseño masculino es inigualable.\"",
        testimonial_1_name: "James Mitchell",
        testimonial_1_title: "CEO, Urban Gear Ltd",
        testimonial_2_content: "\"La calidad y durabilidad de sus mochilas masculinas han superado nuestras expectativas. A nuestros clientes les encantan los diseños profesionales y la funcionalidad.\"",
        testimonial_2_name: "Sarah Thompson",
        testimonial_2_title: "Gerente de Adquisiciones, Executive Accessories",
        testimonial_3_content: "\"Desde el diseño inicial hasta la entrega final, su servicio B2B es excepcional. Entienden el mercado masculino y entregan productos que se venden.\"",
        testimonial_3_name: "David Chen",
        testimonial_3_title: "Director de Marca, Adventure Gear Co",
        
        // CTA Section
        cta_title: "¿Listo para Lanzar Tu Línea de Mochilas Masculinas?",
        cta_subtitle: "Asóciate con nosotros para crear mochilas premium que resuenen con los hombres modernos",
        cta_quote_btn: "Obtener Cotización Personalizada",
        cta_consultation_btn: "Programar Consulta",
        
        // Footer
        footer_description: "Fabricante B2B líder de mochilas masculinas premium para el caballero moderno.",
        
        // Products Page
        products_page_title: "Colección Premium de Mochilas Masculinas",
        products_page_subtitle: "Mochilas de grado profesional diseñadas para el hombre moderno. Fabricación personalizada disponible para pedidos al por mayor.",
        product_categories_title: "Categorías de Productos",
        product_categories_subtitle: "Descubre nuestra gama completa de mochilas masculinas, cada una diseñada con precisión y construida para la durabilidad.",
        
        // Business Backpacks
        business_backpacks_title: "Mochilas de Negocios y Profesionales",
        business_backpacks_desc: "Diseños sofisticados perfectos para entornos corporativos, con compartimentos para laptop y bolsillos organizacionales.",
        business_feature_1: "Compartimentos para laptop de 15-17 pulgadas",
        business_feature_2: "Apariencia profesional",
        business_feature_3: "Múltiples bolsillos organizacionales",
        business_feature_4: "Materiales resistentes al agua",
        business_feature_5: "Diseños compatibles con TSA",
        
        // Travel Backpacks
        travel_backpacks_title: "Mochilas de Viaje y Aventura",
        travel_backpacks_desc: "Diseños duraderos y espaciosos para viajeros y aventureros, con características mejoradas de comodidad y seguridad.",
        travel_feature_1: "Gran capacidad (30-50L)",
        travel_feature_2: "Características antirrobo",
        travel_feature_3: "Acolchado cómodo",
        travel_feature_4: "Resistente al clima",
        travel_feature_5: "Múltiples puntos de acceso",
        
        // Tech Backpacks
        tech_backpacks_title: "Mochilas Tech y Gaming",
        tech_backpacks_desc: "Mochilas especializadas para entusiastas de la tecnología y gamers, con protección avanzada y gestión de cables.",
        tech_feature_1: "Protección para laptop gaming",
        tech_feature_2: "Sistema de gestión de cables",
        tech_feature_3: "Diseños compatibles con LED",
        tech_feature_4: "Acolchado resistente a golpes",
        tech_feature_5: "Sistemas de ventilación",
        
        // Outdoor Backpacks
        outdoor_backpacks_title: "Mochilas Outdoor y Deportivas",
        outdoor_backpacks_desc: "Mochilas resistentes construidas para actividades al aire libre, deportes y condiciones extremas con durabilidad superior.",
        outdoor_feature_1: "Materiales a prueba de clima",
        outdoor_feature_2: "Construcción reforzada",
        outdoor_feature_3: "Compatible con hidratación",
        outdoor_feature_4: "Elementos reflectantes",
        outdoor_feature_5: "Accesorios modulares",
        
        // Common Labels
        moq_label: "MOQ",
        lead_time_label: "Tiempo de Entrega",
        view_details: "Ver Detalles →",
        
        // Casual & Lifestyle Backpacks
        casual_backpacks_title: "Mochilas Casuales y de Estilo de Vida",
        casual_backpacks_desc: "Mochilas versátiles para el día a día que combinan estilo con funcionalidad para estilos de vida urbanos modernos.",
        casual_feature_1: "Diseños de moda",
        casual_feature_2: "Materiales ligeros",
        casual_feature_3: "Funcionalidad diaria",
        casual_feature_4: "Múltiples opciones de color",
        casual_feature_5: "Precios asequibles",
        
        // Luxury & Premium Backpacks
        luxury_backpacks_title: "Mochilas de Lujo y Premium",
        luxury_backpacks_desc: "Mochilas de alta gama elaboradas con materiales premium y atención excepcional al detalle para clientes exigentes.",
        luxury_feature_1: "Materiales/cuero premium",
        luxury_feature_2: "Detalles hechos a mano",
        luxury_feature_3: "Diseños de edición limitada",
        luxury_feature_4: "Garantía de por vida",
        luxury_feature_5: "Personalización exclusiva",
        
        // Customization Options
        customization_title: "Opciones de Personalización",
        customization_subtitle: "Transforma nuestros diseños para que coincidan con la identidad de tu marca con nuestros servicios integrales de personalización.",
        logo_branding_title: "Logo y Marca",
        logo_branding_desc: "Agrega el logo de tu empresa, colores de marca y etiquetas personalizadas para crear una identidad de marca única.",
        color_variations_title: "Variaciones de Color",
        color_variations_desc: "Elige de nuestra extensa paleta de colores o especifica colores Pantone personalizados para tus productos.",
        size_modifications_title: "Modificaciones de Tamaño",
        size_modifications_desc: "Ajusta dimensiones, tamaños de compartimentos y capacidad para cumplir con tus requisitos específicos.",
        material_selection_title: "Selección de Materiales",
        material_selection_desc: "Elige entre telas premium, cuero, materiales ecológicos y textiles técnicos especializados.",
        hardware_options_title: "Opciones de Herrajes",
        hardware_options_desc: "Selecciona entre varios tipos de cremalleras, hebillas, correas y acabados metálicos para mejorar la funcionalidad.",
        special_features_title: "Características Especiales",
        special_features_desc: "Agrega puertos de carga USB, bloqueo RFID, cerraduras antirrobo y otras características avanzadas.",
        
        // Products CTA Section
        cta_title: "¿Listo para Crear Tu Línea Personalizada de Mochilas?",
        cta_subtitle: "Contacta a nuestro equipo experto para discutir tus requisitos y obtener una cotización detallada para tu proyecto de fabricación de mochilas personalizadas.",
        cta_quote_button: "Solicitar Cotización Personalizada",
        cta_contact_button: "Contactar Nuestro Equipo",
        
        // Additional translations
        heroTitle: 'Fabricación de Mochilas Premium para Hombres',
        heroSubtitle: 'Su socio B2B de confianza para mochilas personalizadas para hombres. Desde profesionales de negocios hasta entusiastas del aire libre, creamos mochilas de calidad que definen la masculinidad moderna.',
        getCustomQuote: 'Obtener Cotización Personalizada',
        viewProducts: 'Ver Productos',
        services: 'Servicios',
        customManufacturing: 'Fabricación Personalizada',
        brandDevelopment: 'Desarrollo de Marca',
        designConsultation: 'Consultoría de Diseño',
        qualityAssurance: 'Garantía de Calidad',
        globalDistribution: 'Distribución Global',
        company: 'Empresa',
        certifications: 'Certificaciones',
        sustainability: 'Sostenibilidad',
        privacy: 'Política de Privacidad',
        terms: 'Términos de Servicio',
        quote: 'Cotizar',
        businessBackpacks: 'Mochilas de Negocios',
        
        // About page
        aboutPageTitle: 'Acerca de MensBackpack.co.uk',
        aboutPageSubtitle: 'Su socio de confianza en la fabricación de mochilas premium para hombres con más de 15 años de experiencia en la industria.',
        companyOverview: 'Resumen de la Empresa',
        companyOverviewDesc: 'Establecidos como fabricante líder de mochilas premium para hombres, combinamos la artesanía tradicional con la innovación moderna para entregar productos excepcionales.',
        whoWeAre: 'Quiénes Somos',
        whoWeAreDesc1: 'MensBackpack.co.uk es un fabricante especializado dedicado a crear mochilas de alta calidad para hombres para el mercado B2B global. Con nuestra instalación de fabricación de última generación y equipo de diseño experimentado, hemos servido exitosamente a más de 500 clientes internacionales en más de 40 países.',
        whoWeAreDesc2: 'Nuestro compromiso con la excelencia se extiende más allá de la fabricación: proporcionamos soluciones integrales desde conceptos de diseño inicial hasta la entrega del producto final, asegurando que cada mochila cumpla con los más altos estándares de calidad, durabilidad y estilo.',
        yearsExperience: 'Años de Experiencia',
        globalClients: 'Clientes Globales',
        countriesServed: 'Países Atendidos',
        backpacksProduced: 'Mochilas Producidas',
        
        // Contact page
        contactPageTitle: 'Contáctanos',
        contactPageSubtitle: 'Ponte en contacto con nuestro equipo experto para soluciones de fabricación de mochilas personalizadas para hombres.',
        sendMessage: 'Envíanos un Mensaje',
        sendMessageDesc: '¿Listo para comenzar tu proyecto de mochila personalizada? Completa el formulario a continuación y nuestro equipo te responderá en 24 horas con información detallada y próximos pasos.',
        firstName: 'Nombre',
        lastName: 'Apellido',
        email: 'Correo Electrónico',
        phone: 'Teléfono',
        company: 'Empresa',
        message: 'Mensaje',
        sendButton: 'Enviar Mensaje',
        
        // Blog page
        blogPageTitle: 'Perspectivas de la Industria y Blog de Fabricación',
        blogPageSubtitle: 'Conocimiento experto sobre fabricación de mochilas para hombres, tendencias de la industria y soluciones B2B.',
        blog: 'Blog',
        businessArticles: 'Artículos de Negocios e Industria',
        
        travelBackpacks: 'Mochilas de Viaje'
        sportsBackpacks: 'Mochilas Deportivas',
        techBackpacks: 'Mochilas Tecnológicas',
        outdoorBackpacks: 'Mochilas de Exterior',
        businessBackpackTitle: 'Mochilas de Negocios y Profesionales',
        businessBackpackDesc: 'Mochilas premium diseñadas para el profesional moderno, combinando estilo, funcionalidad y durabilidad para el entorno corporativo.'
    },
    
    fr: {
        // Navigation
        home: 'Accueil',
        products: 'Produits',
        about: 'À Propos',
        contact: 'Contact',
        blog: 'Blog',
        getQuote: 'Devis',
        
        // Common elements
        learnMore: 'En Savoir Plus',
        viewDetails: 'Voir Détails',
        contactUs: 'Nous Contacter',
        readMore: 'Lire Plus',
        
        // Hero section
        heroTitle: 'Sacs à Dos Premium pour Hommes sur les Marchés B2B Mondiaux',
        heroSubtitle: 'Fabricant leader de sacs à dos de haute qualité pour hommes avec plus de 15 ans d\'expérience au service des entreprises du monde entier.',
        
        // Footer
        quickLinks: 'Liens Rapides',
        followUs: 'Suivez-nous',
        allRightsReserved: 'Tous droits réservés.',
        
        // Product categories
        categories_title: "Catégories de Sacs à Dos pour Hommes",
        categories_subtitle: "Designs spécialisés pour chaque aspect de la vie d'un homme",
        businessProfessional: 'Affaires et Professionnel',
        travelAdventure: 'Voyage et Aventure',
        sportsOutdoor: 'Sports et Extérieur',
        techGaming: 'Tech et Gaming',
        business_professional_title: "Affaires et Professionnel",
        business_professional_desc: "Designs élégants pour les cadres, consultants et professionnels qui exigent style et fonctionnalité.",
        business_feature_laptop: "Compartiments pour ordinateurs portables jusqu'à 17\"",
        business_feature_organizers: "Organisateurs de documents",
        business_feature_leather: "Accents en cuir premium",
        business_feature_tsa: "Designs compatibles TSA",
        explore_business_line: "Explorer la Gamme Business →",
        travel_adventure_title: "Voyage et Aventure",
        travel_adventure_desc: "Designs robustes et spacieux pour voyageurs, aventuriers et nomades numériques.",
        travel_feature_capacity: "Options de capacité 40-65L",
        travel_feature_weather: "Matériaux résistants aux intempéries",
        travel_feature_compartments: "Compartiments multiples",
        travel_feature_ergonomics: "Ergonomie axée sur le confort",
        explore_travel_line: "Explorer la Gamme Voyage →",
        sports_fitness_title: "Sports et Fitness",
        sports_fitness_desc: "Designs orientés performance pour athlètes, passionnés de gym et modes de vie actifs.",
        sports_feature_shoe: "Compartiments chaussures ventilés",
        sports_feature_hydration: "Compatibilité système d'hydratation",
        sports_feature_access: "Poches d'accès rapide",
        sports_feature_moisture: "Matériaux évacuant l'humidité",
        explore_sports_line: "Explorer la Gamme Sports →",
        tech_gaming_title: "Tech et Gaming",
        tech_gaming_desc: "Designs innovants pour professionnels tech, gamers et créateurs numériques.",
        tech_feature_device: "Compartiments multi-appareils",
        tech_feature_cable: "Systèmes de gestion des câbles",
        tech_feature_usb: "Ports de charge USB",
        tech_feature_theft: "Fonctionnalités anti-vol",
        explore_tech_line: "Explorer la Gamme Tech →",
        manufacturing_title: "Excellence en Fabrication",
        manufacturing_subtitle: "Du concept à la livraison, nous assurons la qualité à chaque étape",
        process_design_title: "Consultation de Design",
        process_design_desc: "Notre équipe de design travaille avec vous pour comprendre votre marché cible, les exigences de marque et les spécifications fonctionnelles pour le sac à dos masculin parfait.",
        process_prototype_title: "Prototypage",
        process_prototype_desc: "Nous créons des prototypes détaillés et des échantillons, vous permettant de tester la fonctionnalité, l'esthétique et la qualité avant le début de la production de masse.",
        process_material_title: "Sélection de Matériaux",
        process_material_desc: "Choisissez parmi des matériaux premium incluant le nylon balistique, le cuir véritable, les tissus imperméables et les alternatives écologiques.",
        process_production_title: "Production",
        process_production_desc: "Installation de fabrication de pointe avec des artisans qualifiés assurant une qualité constante et une livraison ponctuelle de vos commandes.",
        process_quality_title: "Contrôle Qualité",
        process_quality_desc: "Des processus rigoureux de test et d'inspection assurent que chaque sac à dos répond à nos hauts standards et à vos spécifications.",
        process_shipping_title: "Expédition Mondiale",
        process_shipping_desc: "Une logistique efficace et un emballage assurent que vos produits arrivent en sécurité et à temps, partout dans le monde.",
        
        // Testimonials
        testimonials_title: "Ce Que Disent Nos Partenaires B2B",
        testimonials_subtitle: "Fait confiance par les marques leaders et détaillants dans le monde entier",
        testimonial_1_content: "\"MensBackpack.co.uk a été notre fabricant de référence pour les sacs à dos masculins premium. Leur attention aux détails et compréhension de l'esthétique de design masculin est inégalée.\"",
        testimonial_1_name: "James Mitchell",
        testimonial_1_title: "PDG, Urban Gear Ltd",
        testimonial_2_content: "\"La qualité et durabilité de leurs sacs à dos masculins ont dépassé nos attentes. Nos clients adorent les designs professionnels et la fonctionnalité.\"",
        testimonial_2_name: "Sarah Thompson",
        testimonial_2_title: "Responsable des Achats, Executive Accessories",
        testimonial_3_content: "\"Du design initial à la livraison finale, leur service B2B est exceptionnel. Ils comprennent le marché masculin et livrent des produits qui se vendent.\"",
        testimonial_3_name: "David Chen",
        testimonial_3_title: "Directeur de Marque, Adventure Gear Co",
        
        // CTA Section
        cta_title: "Prêt à Lancer Votre Gamme de Sacs à Dos Masculins?",
        cta_subtitle: "Partenaire avec nous pour créer des sacs à dos premium qui résonnent avec les hommes modernes",
        cta_quote_btn: "Obtenir un Devis Personnalisé",
        cta_consultation_btn: "Programmer une Consultation",
        
        // Footer
        footer_description: "Fabricant B2B leader de sacs à dos masculins premium pour le gentleman moderne.",
        
        // Products Page
        products_page_title: "Collection Premium de Sacs à Dos Masculins",
        products_page_subtitle: "Sacs à dos de qualité professionnelle conçus pour l'homme moderne. Fabrication personnalisée disponible pour les commandes en gros.",
        product_categories_title: "Catégories de Produits",
        product_categories_subtitle: "Découvrez notre gamme complète de sacs à dos masculins, chacun conçu avec précision et construit pour la durabilité.",
        
        // Business Backpacks
        business_backpacks_title: "Sacs à Dos Business & Professionnels",
        business_backpacks_desc: "Designs sophistiqués parfaits pour les environnements corporatifs, avec compartiments pour ordinateur portable et poches d'organisation.",
        business_feature_1: "Compartiments pour ordinateur portable 15-17 pouces",
        business_feature_2: "Apparence professionnelle",
        business_feature_3: "Multiples poches d'organisation",
        business_feature_4: "Matériaux résistants à l'eau",
        business_feature_5: "Designs compatibles TSA",
        
        // Travel Backpacks
        travel_backpacks_title: "Sacs à Dos Voyage & Aventure",
        travel_backpacks_desc: "Designs durables et spacieux pour voyageurs et aventuriers, avec caractéristiques améliorées de confort et sécurité.",
        travel_feature_1: "Grande capacité (30-50L)",
        travel_feature_2: "Caractéristiques anti-vol",
        travel_feature_3: "Rembourrage confortable",
        travel_feature_4: "Résistant aux intempéries",
        travel_feature_5: "Multiples points d'accès",
        
        // Tech Backpacks
        tech_backpacks_title: "Sacs à Dos Tech & Gaming",
        tech_backpacks_desc: "Sacs à dos spécialisés pour passionnés de technologie et gamers, avec protection avancée et gestion des câbles.",
        tech_feature_1: "Protection pour ordinateur portable gaming",
        tech_feature_2: "Système de gestion des câbles",
        tech_feature_3: "Designs compatibles LED",
        tech_feature_4: "Rembourrage résistant aux chocs",
        tech_feature_5: "Systèmes de ventilation",
        
        // Outdoor Backpacks
        outdoor_backpacks_title: "Sacs à Dos Outdoor & Sports",
        outdoor_backpacks_desc: "Sacs à dos robustes construits pour activités de plein air, sports et conditions extrêmes avec durabilité supérieure.",
        outdoor_feature_1: "Matériaux imperméables",
        outdoor_feature_2: "Construction renforcée",
        outdoor_feature_3: "Compatible hydratation",
        outdoor_feature_4: "Éléments réfléchissants",
        outdoor_feature_5: "Accessoires modulaires",
        
        // Common Labels
        moq_label: "MOQ",
        lead_time_label: "Délai de Livraison",
        view_details: "Voir Détails →",
        
        // Casual & Lifestyle Backpacks
        casual_backpacks_title: "Sacs à Dos Casual & Lifestyle",
        casual_backpacks_desc: "Designs polyvalents pour l'usage quotidien, parfaits pour les étudiants, les navetteurs et les activités de loisirs.",
        casual_feature_1: "Designs légers et confortables",
        casual_feature_2: "Compartiments organisés",
        casual_feature_3: "Matériaux durables",
        casual_feature_4: "Styles polyvalents",
        casual_feature_5: "Prix abordables",
        
        // Luxury & Premium Backpacks
        luxury_backpacks_title: "Sacs à Dos Luxe & Premium",
        luxury_backpacks_desc: "Sacs à dos haut de gamme fabriqués avec des matériaux premium et un artisanat exceptionnel pour les clients exigeants.",
        luxury_feature_1: "Cuir véritable premium",
        luxury_feature_2: "Finitions artisanales",
        luxury_feature_3: "Éditions limitées",
        luxury_feature_4: "Garantie à vie",
        luxury_feature_5: "Emballage de luxe",
        
        // Customization Options
        customization_title: "Options de Personnalisation",
        customization_subtitle: "Adaptez vos sacs à dos selon vos spécifications exactes avec nos services de personnalisation complets.",
        logo_branding_title: "Logo & Image de Marque",
        logo_branding_desc: "Broderie personnalisée, impression et options de marquage pour votre marque.",
        color_variations_title: "Variations de Couleur",
        color_variations_desc: "Large gamme d'options de couleurs et de finitions pour correspondre à votre identité de marque.",
        size_modifications_title: "Modifications de Taille",
        size_modifications_desc: "Dimensions personnalisées et configurations de compartiments selon vos besoins.",
        material_selection_title: "Sélection de Matériaux",
        material_selection_desc: "Choisissez parmi des matériaux premium incluant cuir, nylon et options écologiques.",
        hardware_options_title: "Options de Quincaillerie",
        hardware_options_desc: "Fermetures éclair, boucles et accessoires de qualité premium dans diverses finitions.",
        special_features_title: "Caractéristiques Spéciales",
        special_features_desc: "Fonctionnalités avancées comme ports USB, protection RFID et compartiments cachés.",
        
        // CTA Section
        cta_products_title: "Prêt à Commander Vos Sacs à Dos Personnalisés?",
        cta_products_subtitle: "Contactez notre équipe pour discuter de vos besoins et recevoir un devis détaillé.",
        cta_contact_btn: "Nous Contacter"
        
        // Additional translations
        heroTitle: 'Fabrication de Sacs à Dos Premium pour Hommes',
        heroSubtitle: 'Votre partenaire B2B de confiance pour les sacs à dos personnalisés pour hommes. Des professionnels aux passionnés d\'extérieur, nous créons des sacs à dos de qualité qui définissent la masculinité moderne.',
        getCustomQuote: 'Obtenir un Devis Personnalisé',
        viewProducts: 'Voir les Produits',
        services: 'Services',
        customManufacturing: 'Fabrication Personnalisée',
        brandDevelopment: 'Développement de Marque',
        designConsultation: 'Consultation de Design',
        qualityAssurance: 'Assurance Qualité',
        globalDistribution: 'Distribution Mondiale',
        company: 'Entreprise',
        certifications: 'Certifications',
        sustainability: 'Durabilité',
        privacy: 'Politique de Confidentialité',
        terms: 'Conditions de Service',
        quote: 'Devis',
        businessBackpacks: 'Sacs à Dos d\'Affaires',
        
        // About page
        aboutPageTitle: 'À Propos de MensBackpack.co.uk',
        aboutPageSubtitle: 'Votre partenaire de confiance dans la fabrication de sacs à dos premium pour hommes avec plus de 15 ans d\'expertise industrielle.',
        companyOverview: 'Aperçu de l\'Entreprise',
        companyOverviewDesc: 'Établis comme fabricant leader de sacs à dos premium pour hommes, nous combinons l\'artisanat traditionnel avec l\'innovation moderne pour livrer des produits exceptionnels.',
        whoWeAre: 'Qui Nous Sommes',
        whoWeAreDesc1: 'MensBackpack.co.uk est un fabricant spécialisé dédié à la création de sacs à dos de haute qualité pour hommes pour le marché B2B mondial. Avec notre installation de fabrication de pointe et notre équipe de design expérimentée, nous avons servi avec succès plus de 500 clients internationaux dans plus de 40 pays.',
        whoWeAreDesc2: 'Notre engagement envers l\'excellence s\'étend au-delà de la fabrication – nous fournissons des solutions complètes depuis les concepts de design initiaux jusqu\'à la livraison du produit final, garantissant que chaque sac à dos répond aux plus hauts standards de qualité, durabilité et style.',
        yearsExperience: 'Années d\'Expérience',
        globalClients: 'Clients Mondiaux',
        countriesServed: 'Pays Servis',
        backpacksProduced: 'Sacs à Dos Produits',
        
        // Contact page
        contactPageTitle: 'Nous Contacter',
        contactPageSubtitle: 'Contactez notre équipe d\'experts pour des solutions de fabrication de sacs à dos personnalisés pour hommes.',
        sendMessage: 'Envoyez-nous un Message',
        sendMessageDesc: 'Prêt à commencer votre projet de sac à dos personnalisé? Remplissez le formulaire ci-dessous et notre équipe vous répondra dans les 24 heures avec des informations détaillées et les prochaines étapes.',
        firstName: 'Prénom',
        lastName: 'Nom de Famille',
        email: 'Email',
        phone: 'Téléphone',
        company: 'Entreprise',
        message: 'Message',
        sendButton: 'Envoyer le Message',
        
        // Blog page
        blogPageTitle: 'Perspectives de l\'Industrie et Blog de Fabrication',
        blogPageSubtitle: 'Connaissances d\'experts sur la fabrication de sacs à dos pour hommes, les tendances de l\'industrie et les solutions B2B.',
        blog: 'Blog',
        businessArticles: 'Articles Business et Industrie',
        
        travelBackpacks: 'Sacs à Dos de Voyage'
        sportsBackpacks: 'Sacs à Dos de Sport'
        techBackpacks: 'Sacs à Dos Tech',
        outdoorBackpacks: 'Sacs à Dos d\'Extérieur',
        businessBackpackTitle: 'Sacs à Dos d\'Affaires et Professionnels',
        businessBackpackDesc: 'Sacs à dos premium conçus pour le professionnel moderne, alliant style, fonctionnalité et durabilité pour l\'environnement d\'entreprise.'
    },
    
    de: {
        // Navigation
        home: 'Startseite',
        products: 'Produkte',
        about: 'Über Uns',
        contact: 'Kontakt',
        blog: 'Blog',
        getQuote: 'Angebot',
        
        // Common elements
        learnMore: 'Mehr Erfahren',
        viewDetails: 'Details Anzeigen',
        contactUs: 'Kontaktieren Sie Uns',
        readMore: 'Weiterlesen',
        
        // Hero section
        heroTitle: 'Premium Herren-Rucksäcke für Globale B2B-Märkte',
        heroSubtitle: 'Führender Hersteller hochwertiger Herren-Rucksäcke mit über 15 Jahren Erfahrung im Service für Unternehmen weltweit.',
        
        // Footer
        quickLinks: 'Schnelle Links',
        followUs: 'Folgen Sie Uns',
        allRightsReserved: 'Alle Rechte vorbehalten.',
        
        // Product categories
        categories_title: "Herren-Rucksack Kategorien",
        categories_subtitle: "Spezialisierte Designs für jeden Aspekt des Männerlebens",
        businessProfessional: 'Business & Professionell',
        travelAdventure: 'Reise & Abenteuer',
        sportsOutdoor: 'Sport & Outdoor',
        techGaming: 'Tech & Gaming',
        business_professional_title: "Business & Professionell",
        business_professional_desc: "Elegante Designs für Führungskräfte, Berater und Profis, die Stil und Funktionalität verlangen.",
        business_feature_laptop: "Laptop-Fächer bis zu 17\"",
        business_feature_organizers: "Dokumenten-Organizer",
        business_feature_leather: "Premium-Leder-Akzente",
        business_feature_tsa: "TSA-freundliche Designs",
        explore_business_line: "Business-Linie Erkunden →",
        travel_adventure_title: "Reise & Abenteuer",
        travel_adventure_desc: "Robuste und geräumige Designs für Reisende, Abenteurer und digitale Nomaden.",
        travel_feature_capacity: "40-65L Kapazitätsoptionen",
        travel_feature_weather: "Wetterbeständige Materialien",
        travel_feature_compartments: "Mehrere Fächer",
        travel_feature_ergonomics: "Komfort-fokussierte Ergonomie",
        explore_travel_line: "Reise-Linie Erkunden →",
        sports_fitness_title: "Sport & Fitness",
        sports_fitness_desc: "Leistungsorientierte Designs für Athleten, Fitness-Enthusiasten und aktive Lebensstile.",
        sports_feature_shoe: "Belüftete Schuhfächer",
        sports_feature_hydration: "Hydrationssystem-Kompatibilität",
        sports_feature_access: "Schnellzugriff-Taschen",
        sports_feature_moisture: "Feuchtigkeitsableitende Materialien",
        explore_sports_line: "Sport-Linie Erkunden →",
        tech_gaming_title: "Tech & Gaming",
        tech_gaming_desc: "Innovative Designs für Tech-Profis, Gamer und digitale Kreative.",
        tech_feature_device: "Mehrere Gerätefächer",
        tech_feature_cable: "Kabelmanagement-Systeme",
        tech_feature_usb: "USB-Ladeanschlüsse",
        tech_feature_theft: "Diebstahlschutz-Features",
        explore_tech_line: "Tech-Linie Erkunden →",
        manufacturing_title: "Unsere Fertigungsexzellenz",
        manufacturing_subtitle: "Vom Konzept bis zur Lieferung gewährleisten wir Qualität bei jedem Schritt",
        process_design_title: "Design-Beratung",
        process_design_desc: "Unser Design-Team arbeitet mit Ihnen zusammen, um Ihren Zielmarkt, Markenanforderungen und funktionale Spezifikationen für den perfekten Herrenrucksack zu verstehen.",
        process_prototype_title: "Prototyping",
        process_prototype_desc: "Wir erstellen detaillierte Prototypen und Muster, die es Ihnen ermöglichen, Funktionalität, Ästhetik und Qualität vor Beginn der Massenproduktion zu testen.",
        process_material_title: "Materialauswahl",
        process_material_desc: "Wählen Sie aus Premium-Materialien einschließlich ballistischem Nylon, echtem Leder, wasserdichten Stoffen und umweltfreundlichen Alternativen.",
        process_production_title: "Produktion",
        process_production_desc: "Hochmoderne Fertigungsanlage mit qualifizierten Handwerkern, die gleichbleibende Qualität und pünktliche Lieferung Ihrer Bestellungen gewährleisten.",
        process_quality_title: "Qualitätskontrolle",
        process_quality_desc: "Strenge Test- und Inspektionsprozesse stellen sicher, dass jeder Rucksack unseren hohen Standards und Ihren Spezifikationen entspricht.",
        process_shipping_title: "Globaler Versand",
        process_shipping_desc: "Effiziente Logistik und Verpackung stellen sicher, dass Ihre Produkte sicher und pünktlich überall auf der Welt ankommen.",
        
        // Testimonials
        testimonials_title: "Was Unsere B2B-Partner Sagen",
        testimonials_subtitle: "Vertraut von führenden Marken und Einzelhändlern weltweit",
        testimonial_1_content: "\"MensBackpack.co.uk war unser bevorzugter Hersteller für Premium-Herrenrucksäcke. Ihre Liebe zum Detail und ihr Verständnis für maskuline Designästhetik ist unübertroffen.\"",
        testimonial_1_name: "James Mitchell",
        testimonial_1_title: "CEO, Urban Gear Ltd",
        testimonial_2_content: "\"Die Qualität und Haltbarkeit ihrer Herrenrucksäcke haben unsere Erwartungen übertroffen. Unsere Kunden lieben die professionellen Designs und die Funktionalität.\"",
        testimonial_2_name: "Sarah Thompson",
        testimonial_2_title: "Beschaffungsmanagerin, Executive Accessories",
        testimonial_3_content: "\"Vom ersten Design bis zur finalen Lieferung ist ihr B2B-Service außergewöhnlich. Sie verstehen den Herrenmarkt und liefern Produkte, die sich verkaufen.\"",
        testimonial_3_name: "David Chen",
        testimonial_3_title: "Markendirektor, Adventure Gear Co",
        
        // CTA Section
        cta_title: "Bereit, Ihre Herrenrucksack-Linie zu Starten?",
        cta_subtitle: "Partnern Sie mit uns, um Premium-Rucksäcke zu schaffen, die bei modernen Männern Anklang finden",
        cta_quote_btn: "Individuelles Angebot Erhalten",
        cta_consultation_btn: "Beratung Vereinbaren",
        
        // Footer
        footer_description: "Führender B2B-Hersteller von Premium-Herrenrucksäcken für den modernen Gentleman.",
        
        // Products Page
        products_page_title: "Premium Herrenrucksack Kollektion",
        products_page_subtitle: "Professionelle Rucksäcke für den modernen Mann. Individuelle Fertigung für Großbestellungen verfügbar.",
        product_categories_title: "Produktkategorien",
        product_categories_subtitle: "Entdecken Sie unser umfassendes Sortiment an Herrenrucksäcken, jeder mit Präzision entworfen und für Langlebigkeit gebaut.",
        
        // Business Backpacks
        business_backpacks_title: "Business & Professionelle Rucksäcke",
        business_backpacks_desc: "Elegante Designs perfekt für Unternehmensumgebungen, mit Laptop-Fächern und Organisationstaschen.",
        business_feature_1: "15-17 Zoll Laptop-Fächer",
        business_feature_2: "Professionelles Erscheinungsbild",
        business_feature_3: "Mehrere Organisationstaschen",
        business_feature_4: "Wasserabweisende Materialien",
        business_feature_5: "TSA-freundliche Designs",
        
        // Travel Backpacks
        travel_backpacks_title: "Reise & Abenteuer Rucksäcke",
        travel_backpacks_desc: "Langlebige und geräumige Designs für Reisende und Abenteurer, mit verbessertem Komfort und Sicherheitsmerkmalen.",
        travel_feature_1: "Große Kapazität (30-50L)",
        travel_feature_2: "Diebstahlschutz-Funktionen",
        travel_feature_3: "Komfortable Polsterung",
        travel_feature_4: "Wetterbeständig",
        travel_feature_5: "Mehrere Zugangspunkte",
        
        // Tech Backpacks
        tech_backpacks_title: "Tech & Gaming Rucksäcke",
        tech_backpacks_desc: "Spezialisierte Rucksäcke für Tech-Enthusiasten und Gamer, mit fortschrittlichem Schutz und Kabelmanagement.",
        tech_feature_1: "Gaming-Laptop-Schutz",
        tech_feature_2: "Kabelmanagement-System",
        tech_feature_3: "LED-kompatible Designs",
        tech_feature_4: "Stoßfeste Polsterung",
        tech_feature_5: "Belüftungssysteme",
        
        // Outdoor Backpacks
        outdoor_backpacks_title: "Outdoor & Sport Rucksäcke",
        outdoor_backpacks_desc: "Robuste Rucksäcke für Outdoor-Aktivitäten, Sport und extreme Bedingungen mit überlegener Haltbarkeit.",
        outdoor_feature_1: "Wetterfeste Materialien",
        outdoor_feature_2: "Verstärkte Konstruktion",
        outdoor_feature_3: "Hydratationskompatibel",
        outdoor_feature_4: "Reflektierende Elemente",
        outdoor_feature_5: "Modulare Befestigungen",
        
        // Common Labels
        moq_label: "MOQ",
        lead_time_label: "Lieferzeit",
        view_details: "Details Anzeigen →",
        
        // Casual & Lifestyle Backpacks
        casual_backpacks_title: "Casual & Lifestyle Rucksäcke",
        casual_backpacks_desc: "Vielseitige Designs für den täglichen Gebrauch, perfekt für Studenten, Pendler und Freizeitaktivitäten.",
        casual_feature_1: "Leichte und bequeme Designs",
        casual_feature_2: "Organisierte Fächer",
        casual_feature_3: "Langlebige Materialien",
        casual_feature_4: "Vielseitige Stile",
        casual_feature_5: "Erschwingliche Preise",
        
        // Luxury & Premium Backpacks
        luxury_backpacks_title: "Luxus & Premium Rucksäcke",
        luxury_backpacks_desc: "Hochwertige Rucksäcke aus Premium-Materialien und außergewöhnlicher Handwerkskunst für anspruchsvolle Kunden.",
        luxury_feature_1: "Premium echtes Leder",
        luxury_feature_2: "Handwerkliche Verarbeitung",
        luxury_feature_3: "Limitierte Auflagen",
        luxury_feature_4: "Lebenslange Garantie",
        luxury_feature_5: "Luxus-Verpackung",
        
        // Customization Options
        customization_title: "Anpassungsoptionen",
        customization_subtitle: "Passen Sie Ihre Rucksäcke nach Ihren genauen Spezifikationen mit unseren umfassenden Anpassungsservices an.",
        logo_branding_title: "Logo & Branding",
        logo_branding_desc: "Individuelle Stickerei, Druck und Markierungsoptionen für Ihre Marke.",
        color_variations_title: "Farbvariationen",
        color_variations_desc: "Breite Palette von Farb- und Oberflächenoptionen passend zu Ihrer Markenidentität.",
        size_modifications_title: "Größenmodifikationen",
        size_modifications_desc: "Individuelle Abmessungen und Fachkonfigurationen nach Ihren Anforderungen.",
        material_selection_title: "Materialauswahl",
        material_selection_desc: "Wählen Sie aus Premium-Materialien einschließlich Leder, Nylon und umweltfreundlichen Optionen.",
        hardware_options_title: "Hardware-Optionen",
        hardware_options_desc: "Premium-Qualität Reißverschlüsse, Schnallen und Zubehör in verschiedenen Ausführungen.",
        special_features_title: "Besondere Merkmale",
        special_features_desc: "Erweiterte Funktionen wie USB-Anschlüsse, RFID-Schutz und versteckte Fächer.",
        
        // CTA Section
        cta_products_title: "Bereit, Ihre Individuellen Rucksäcke zu Bestellen?",
        cta_products_subtitle: "Kontaktieren Sie unser Team, um Ihre Anforderungen zu besprechen und ein detailliertes Angebot zu erhalten.",
        cta_contact_btn: "Kontaktieren Sie Uns",
        
        // Additional translations
        heroTitle: 'Premium Herren-Rucksack Herstellung',
        heroSubtitle: 'Ihr vertrauenswürdiger B2B-Partner für maßgeschneiderte Herren-Rucksäcke. Von Geschäftsleuten bis zu Outdoor-Enthusiasten fertigen wir hochwertige Rucksäcke, die moderne Männlichkeit definieren.',
        getCustomQuote: 'Individuelles Angebot Erhalten',
        viewProducts: 'Produkte Anzeigen',
        services: 'Dienstleistungen',
        customManufacturing: 'Maßgeschneiderte Fertigung',
        brandDevelopment: 'Markenentwicklung',
        designConsultation: 'Design-Beratung',
        qualityAssurance: 'Qualitätssicherung',
        globalDistribution: 'Globaler Vertrieb',
        company: 'Unternehmen',
        certifications: 'Zertifizierungen',
        sustainability: 'Nachhaltigkeit',
        privacy: 'Datenschutzrichtlinie',
        terms: 'Nutzungsbedingungen',
        quote: 'Angebot',
        businessBackpacks: 'Business-Rucksäcke',
        
        // About page
        aboutPageTitle: 'Über MensBackpack.co.uk',
        aboutPageSubtitle: 'Ihr vertrauenswürdiger Partner in der Premium-Herren-Rucksack-Herstellung mit über 15 Jahren Branchenerfahrung.',
        companyOverview: 'Unternehmensübersicht',
        companyOverviewDesc: 'Als führender Hersteller von Premium-Herren-Rucksäcken verbinden wir traditionelle Handwerkskunst mit moderner Innovation, um außergewöhnliche Produkte zu liefern.',
        whoWeAre: 'Wer Wir Sind',
        whoWeAreDesc1: 'MensBackpack.co.uk ist ein spezialisierter Hersteller, der sich der Herstellung hochwertiger Herren-Rucksäcke für den globalen B2B-Markt widmet. Mit unserer hochmodernen Produktionsanlage und unserem erfahrenen Designteam haben wir erfolgreich über 500 internationale Kunden in mehr als 40 Ländern bedient.',
        whoWeAreDesc2: 'Unser Engagement für Exzellenz geht über die Herstellung hinaus – wir bieten umfassende Lösungen von ersten Designkonzepten bis zur finalen Produktlieferung und stellen sicher, dass jeder Rucksack den höchsten Standards für Qualität, Haltbarkeit und Stil entspricht.',
        yearsExperience: 'Jahre Erfahrung',
        globalClients: 'Globale Kunden',
        countriesServed: 'Bediente Länder',
        backpacksProduced: 'Produzierte Rucksäcke',
        
        // Contact page
        contactPageTitle: 'Kontaktieren Sie Uns',
        contactPageSubtitle: 'Kontaktieren Sie unser Expertenteam für maßgeschneiderte Herren-Rucksack-Herstellungslösungen.',
        sendMessage: 'Senden Sie uns eine Nachricht',
        sendMessageDesc: 'Bereit, Ihr individuelles Rucksack-Projekt zu starten? Füllen Sie das untenstehende Formular aus und unser Team wird Ihnen innerhalb von 24 Stunden mit detaillierten Informationen und nächsten Schritten antworten.',
        firstName: 'Vorname',
        lastName: 'Nachname',
        email: 'E-Mail',
        phone: 'Telefon',
        company: 'Unternehmen',
        message: 'Nachricht',
        sendButton: 'Nachricht Senden',
        
        // Blog page
        blogPageTitle: 'Brancheneinblicke & Fertigungs-Blog',
        blogPageSubtitle: 'Expertenwissen über Herren-Rucksack-Herstellung, Branchentrends und B2B-Lösungen.',
        blog: 'Blog',
        businessArticles: 'Business & Industrie Artikel',
        
        travelBackpacks: 'Reise-Rucksäcke'
        sportsBackpacks: 'Sport-Rucksäcke',
        techBackpacks: 'Tech-Rucksäcke'
        outdoorBackpacks: 'Outdoor-Rucksäcke',
        businessBackpackTitle: 'Business & Professionelle Rucksäcke',
        businessBackpackDesc: 'Premium-Rucksäcke für den modernen Profi, die Stil, Funktionalität und Langlebigkeit für die Unternehmensumgebung kombinieren.'
    },
    
    zh: {
        // Navigation
        home: '首页',
        products: '产品',
        about: '关于我们',
        contact: '联系我们',
        blog: '博客',
        getQuote: '获取报价',
        
        // Common elements
        learnMore: '了解更多',
        viewDetails: '查看详情',
        contactUs: '联系我们',
        readMore: '阅读更多',
        
        // Hero section
        heroTitle: '面向全球B2B市场的优质男士背包',
        heroSubtitle: '领先的高品质男士背包制造商，拥有15年以上为全球企业服务的经验。',
        
        // Footer
        quickLinks: '快速链接',
        followUs: '关注我们',
        allRightsReserved: '版权所有。',
        
        // Product categories
        categories_title: "男士背包类别",
        categories_subtitle: "为男性生活的每个方面量身定制的专业设计",
        businessProfessional: '商务专业',
        travelAdventure: '旅行冒险',
        sportsOutdoor: '运动户外',
        techGaming: '科技游戏',
        business_professional_title: "商务专业",
        business_professional_desc: "为要求风格和功能性的高管、顾问和专业人士设计的时尚款式。",
        business_feature_laptop: "最大17英寸笔记本电脑隔层",
        business_feature_organizers: "文件整理器",
        business_feature_leather: "优质皮革装饰",
        business_feature_tsa: "TSA友好设计",
        explore_business_line: "探索商务系列 →",
        travel_adventure_title: "旅行冒险",
        travel_adventure_desc: "为旅行者、冒险家和数字游民设计的坚固宽敞款式。",
        travel_feature_capacity: "40-65L容量选择",
        travel_feature_weather: "防天气材料",
        travel_feature_compartments: "多个隔层",
        travel_feature_ergonomics: "注重舒适的人体工程学",
        explore_travel_line: "探索旅行系列 →",
        sports_fitness_title: "运动健身",
        sports_fitness_desc: "为运动员、健身爱好者和活跃生活方式设计的性能导向款式。",
        sports_feature_shoe: "通风鞋仓",
        sports_feature_hydration: "水化系统兼容性",
        sports_feature_access: "快速取用口袋",
        sports_feature_moisture: "吸湿排汗材料",
        explore_sports_line: "探索运动系列 →",
        tech_gaming_title: "科技游戏",
        tech_gaming_desc: "为科技专业人士、游戏玩家和数字创作者设计的创新款式。",
        tech_feature_device: "多设备隔层",
        tech_feature_cable: "线缆管理系统",
        tech_feature_usb: "USB充电端口",
        tech_feature_theft: "防盗功能",
        explore_tech_line: "探索科技系列 →",
        manufacturing_title: "我们的制造卓越",
        manufacturing_subtitle: "从概念到交付，我们确保每一步的质量",
        process_design_title: "设计咨询",
        process_design_desc: "我们的设计团队与您合作，了解您的目标市场、品牌要求和功能规格，打造完美的男士背包。",
        process_prototype_title: "原型制作",
        process_prototype_desc: "我们创建详细的原型和样品，让您在大规模生产开始前测试功能性、美观性和质量。",
        process_material_title: "材料选择",
        process_material_desc: "从优质材料中选择，包括防弹尼龙、真皮、防水面料和环保替代品。",
        process_production_title: "生产",
        process_production_desc: "最先进的制造设施，配备熟练工匠，确保您订单的一致质量和及时交付。",
        process_quality_title: "质量控制",
        process_quality_desc: "严格的测试和检验流程确保每个背包都符合我们的高标准和您的规格要求。",
        process_shipping_title: "全球运输",
        process_shipping_desc: "高效的物流和包装确保您的产品安全准时地到达世界任何地方。",
        
        // Testimonials
        testimonials_title: "我们的B2B合作伙伴怎么说",
        testimonials_subtitle: "受到全球领先品牌和零售商的信赖",
        testimonial_1_content: "\"MensBackpack.co.uk一直是我们高端男士背包的首选制造商。他们对细节的关注和对男性设计美学的理解是无与伦比的。\"",
        testimonial_1_name: "詹姆斯·米切尔",
        testimonial_1_title: "首席执行官，Urban Gear Ltd",
        testimonial_2_content: "\"他们男士背包的质量和耐用性超出了我们的期望。我们的客户喜欢专业的设计和功能性。\"",
        testimonial_2_name: "莎拉·汤普森",
        testimonial_2_title: "采购经理，Executive Accessories",
        testimonial_3_content: "\"从初始设计到最终交付，他们的B2B服务都很出色。他们了解男性市场，并提供畅销的产品。\"",
        testimonial_3_name: "大卫·陈",
        testimonial_3_title: "品牌总监，Adventure Gear Co",
        
        // CTA Section
        cta_title: "准备推出您的男士背包系列了吗？",
        cta_subtitle: "与我们合作，创造与现代男性产生共鸣的高端背包",
        cta_quote_btn: "获取定制报价",
        cta_consultation_btn: "安排咨询",
        
        // Footer
        footer_description: "现代绅士高端男士背包的领先B2B制造商。",
        
        // Products Page
        products_page_title: "高端男士背包系列",
        products_page_subtitle: "为现代男士设计的专业级背包。提供大批量订单的定制制造服务。",
        product_categories_title: "产品分类",
        product_categories_subtitle: "探索我们全面的男士背包系列，每款都经过精心设计，专为耐用性而打造。",
        
        // Business Backpacks
        business_backpacks_title: "商务专业背包",
        business_backpacks_desc: "适合企业环境的精致设计，配备笔记本电脑隔层和整理口袋。",
        business_feature_1: "15-17英寸笔记本电脑隔层",
        business_feature_2: "专业外观",
        business_feature_3: "多个整理口袋",
        business_feature_4: "防水材料",
        business_feature_5: "TSA友好设计",
        
        // Travel Backpacks
        travel_backpacks_title: "旅行冒险背包",
        travel_backpacks_desc: "为旅行者和冒险家设计的耐用宽敞款式，具有增强的舒适性和安全功能。",
        travel_feature_1: "大容量(30-50L)",
        travel_feature_2: "防盗功能",
        travel_feature_3: "舒适填充",
        travel_feature_4: "防天气",
        travel_feature_5: "多个入口点",
        
        // Tech Backpacks
        tech_backpacks_title: "科技游戏背包",
        tech_backpacks_desc: "为科技爱好者和游戏玩家设计的专业背包，具有先进保护和线缆管理功能。",
        tech_feature_1: "游戏笔记本电脑保护",
        tech_feature_2: "线缆管理系统",
        tech_feature_3: "LED兼容设计",
        tech_feature_4: "防震填充",
        tech_feature_5: "通风系统",
        
        // Outdoor Backpacks
        outdoor_backpacks_title: "户外运动背包",
        outdoor_backpacks_desc: "为户外活动、运动和极端条件而打造的坚固背包，具有卓越的耐用性。",
        outdoor_feature_1: "防天气材料",
        outdoor_feature_2: "加固结构",
        outdoor_feature_3: "水化兼容",
        outdoor_feature_4: "反光元素",
        outdoor_feature_5: "模块化附件",
        
        // Common Labels
        moq_label: "起订量",
        lead_time_label: "交货时间",
        view_details: "查看详情 →",
        
        // Casual & Lifestyle Backpacks
        casual_backpacks_title: "休闲生活背包",
        casual_backpacks_desc: "适合日常使用的多功能设计，非常适合学生、通勤者和休闲活动。",
        casual_feature_1: "轻便舒适的设计",
        casual_feature_2: "有序的隔层",
        casual_feature_3: "耐用材料",
        casual_feature_4: "多样化风格",
        casual_feature_5: "实惠价格",
        
        // Luxury & Premium Backpacks
        luxury_backpacks_title: "奢华高端背包",
        luxury_backpacks_desc: "采用优质材料和卓越工艺制作的高端背包，专为挑剔的客户而设计。",
        luxury_feature_1: "优质真皮",
        luxury_feature_2: "手工工艺",
        luxury_feature_3: "限量版",
        luxury_feature_4: "终身保修",
        luxury_feature_5: "奢华包装",
        
        // Customization Options
        customization_title: "定制选项",
        customization_subtitle: "通过我们全面的定制服务，根据您的确切规格定制您的背包。",
        logo_branding_title: "标志和品牌",
        logo_branding_desc: "为您的品牌提供定制刺绣、印刷和标记选项。",
        color_variations_title: "颜色变化",
        color_variations_desc: "广泛的颜色和表面处理选项，以匹配您的品牌标识。",
        size_modifications_title: "尺寸修改",
        size_modifications_desc: "根据您的要求定制尺寸和隔层配置。",
        material_selection_title: "材料选择",
        material_selection_desc: "从包括皮革、尼龙和环保选项在内的优质材料中选择。",
        hardware_options_title: "五金选项",
        hardware_options_desc: "各种表面处理的优质拉链、扣具和配件。",
        special_features_title: "特殊功能",
        special_features_desc: "先进功能，如USB端口、RFID保护和隐藏隔层。",
        
        // CTA Section
        cta_products_title: "准备订购您的定制背包了吗？",
        cta_products_subtitle: "联系我们的团队讨论您的需求并获得详细报价。",
        cta_contact_btn: "联系我们"
        
        // Additional translations
        heroTitle: '优质男士背包制造',
        heroSubtitle: '您值得信赖的B2B定制男士背包合作伙伴。从商务专业人士到户外爱好者，我们制作定义现代男性气质的优质背包。',
        getCustomQuote: '获取定制报价',
        viewProducts: '查看产品',
        services: '服务',
        customManufacturing: '定制制造',
        brandDevelopment: '品牌开发',
        designConsultation: '设计咨询',
        qualityAssurance: '质量保证',
        globalDistribution: '全球分销',
        company: '公司',
        certifications: '认证',
        sustainability: '可持续发展',
        privacy: '隐私政策',
        terms: '服务条款',
        quote: '获取报价',
        businessBackpacks: '商务背包',
        
        // About page
        aboutPageTitle: '关于 MensBackpack.co.uk',
        aboutPageSubtitle: '您值得信赖的优质男士背包制造合作伙伴，拥有超过15年的行业专业经验。',
        companyOverview: '公司概况',
        companyOverviewDesc: '作为优质男士背包的领先制造商，我们将传统工艺与现代创新相结合，提供卓越的产品。',
        whoWeAre: '我们是谁',
        whoWeAreDesc1: 'MensBackpack.co.uk是一家专业制造商，致力于为全球B2B市场创造高品质男士背包。凭借我们最先进的制造设施和经验丰富的设计团队，我们已成功为40多个国家的500多个国际客户提供服务。',
        whoWeAreDesc2: '我们对卓越的承诺超越了制造——我们提供从初始设计概念到最终产品交付的全面解决方案，确保每个背包都符合质量、耐用性和风格的最高标准。',
        yearsExperience: '年经验',
        globalClients: '全球客户',
        countriesServed: '服务国家',
        backpacksProduced: '生产背包',
        
        // Contact page
        contactPageTitle: '联系我们',
        contactPageSubtitle: '联系我们的专家团队，获取定制男士背包制造解决方案。',
        sendMessage: '发送消息',
        sendMessageDesc: '准备开始您的定制背包项目了吗？填写下面的表格，我们的团队将在24小时内回复您详细信息和后续步骤。',
        firstName: '名字',
        lastName: '姓氏',
        email: '邮箱',
        phone: '电话',
        company: '公司',
        message: '消息',
        sendButton: '发送消息',
        
        // Blog page
        blogPageTitle: '行业洞察与制造博客',
        blogPageSubtitle: '关于男士背包制造、行业趋势和B2B解决方案的专业知识。',
        blog: '博客',
        businessArticles: '商业与行业文章',
        
        travelBackpacks: '旅行背包',
        sportsBackpacks: '运动背包',
        techBackpacks: '科技背包',
        outdoorBackpacks: '户外背包',
        businessBackpackTitle: '商务专业背包',
        businessBackpackDesc: '为现代专业人士设计的优质背包，融合了风格、功能性和耐用性，适合企业环境使用。'
    }
};

// Language utility functions
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('selectedLanguage') || 'en';
        this.translations = translations;
    }
    
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('selectedLanguage', lang);
            this.updatePageContent();
        }
    }
    
    translate(key) {
        return this.translations[this.currentLang][key] || this.translations['en'][key] || key;
    }
    
    updatePageContent() {
        // Update elements with data-translate attribute
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.translate(key);
            if (translation) {
                element.textContent = translation;
            }
        });
        
        // Update document language
        document.documentElement.lang = this.currentLang;
    }
    
    init() {
        // Set initial language
        this.updatePageContent();
        
        // Setup language selector
        const selector = document.querySelector('.language-selector');
        if (selector) {
            selector.value = this.currentLang;
            selector.addEventListener('change', (e) => {
                this.setLanguage(e.target.value);
            });
        }
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, LanguageManager };
}