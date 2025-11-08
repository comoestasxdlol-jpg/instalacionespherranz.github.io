/// Configuración de idiomas
const translations = {
    es: {
        // Navegación
        "nav.home": "INICIO",
        "nav.services": "SERVICIOS",
        "nav.gallery": "GALERÍA",
        "nav.contact": "CONTACTO",
        
        // Hero
        "hero.title": "INSTALACIONES ELÉCTRICAS PROFESIONALES",
        "hero.subtitle": "Servicios eléctricos de calidad para hogares, comercios e industrias en Madrid",
        "hero.cta1": "SOLICITAR PRESUPUESTO",
        "hero.cta2": "VER SERVICIOS",
        
        // Servicios
        "services.title": "SERVICIOS ELÉCTRICOS",
        "services.1.title": "INSTALACIONES ELÉCTRICAS",
        "services.1.desc": "Instalaciones completas para viviendas, locales comerciales e industriales. Cumplimiento del REBT.",
        "services.2.title": "MANTENIMIENTO Y REPARACIONES",
        "services.2.desc": "Mantenimiento preventivo y correctivo. Diagnóstico y solución de averías eléctricas.",
        "services.3.title": "AUTOMATIZACIÓN RESIDENCIAL",
        "services.3.desc": "Sistemas domóticos para mayor comodidad y eficiencia energética en el hogar.",
        "services.4.title": "INSTALACIONES INDUSTRIALES",
        "services.4.desc": "Soluciones eléctricas para el sector industrial: cuadros eléctricos y automatización.",
        
        // Galería
        "gallery.title": "GALERÍA DE TRABAJOS",
        
        // Garantías
        "guarantees.title": "COMPROMISO DE CALIDAD",
        "guarantees.1.title": "MATERIALES DE CALIDAD",
        "guarantees.1.desc": "Utilizo solo materiales certificados y de primeras marcas",
        "guarantees.2.title": "CUMPLIMIENTO NORMATIVO",
        "guarantees.2.desc": "Todas las instalaciones cumplen con el REBT y normativas vigentes",
        "guarantees.3.title": "ATENCIÓN PERSONALIZADA",
        "guarantees.3.desc": "Servicio directo y comunicación clara en todo momento",
        "guarantees.4.title": "GARANTÍA EN EL TRABAJO",
        "guarantees.4.desc": "Todos mis trabajos incluyen garantía por escrito",
        
        // Contacto
        "contact.title": "CONTACTO",
        "contact.info.title": "INFORMACIÓN DE CONTACTO",
        "contact.info.phone": "TELÉFONO:",
        "contact.info.email": "EMAIL:",
        "contact.info.hours": "HORARIO:",
        "contact.info.area": "ZONA DE ACTUACIÓN:",
        "contact.form.name": "Nombre",
        "contact.form.email": "Email",
        "contact.form.phone": "Teléfono",
        "contact.form.message": "Mensaje",
        "contact.form.submit": "ENVIAR MENSAJE",
        
        // Footer
        "footer.rights": "TODOS LOS DERECHOS RESERVADOS."
    },
    en: {
        // Navigation
        "nav.home": "HOME",
        "nav.services": "SERVICES",
        "nav.gallery": "GALLERY",
        "nav.contact": "CONTACT",
        
        // Hero
        "hero.title": "PROFESSIONAL ELECTRICAL INSTALLATIONS",
        "hero.subtitle": "Quality electrical services for homes, businesses and industries in Madrid",
        "hero.cta1": "GET QUOTE",
        "hero.cta2": "VIEW SERVICES",
        
        // Services
        "services.title": "ELECTRICAL SERVICES",
        "services.1.title": "ELECTRICAL INSTALLATIONS",
        "services.1.desc": "Complete installations for homes, commercial premises and industries. REBT compliance.",
        "services.2.title": "MAINTENANCE AND REPAIRS",
        "services.2.desc": "Preventive and corrective maintenance. Electrical fault diagnosis and solution.",
        "services.3.title": "HOME AUTOMATION",
        "services.3.desc": "Home automation systems for greater comfort and energy efficiency.",
        "services.4.title": "INDUSTRIAL INSTALLATIONS",
        "services.4.desc": "Electrical solutions for the industrial sector: electrical panels and automation.",
        
        // Gallery
        "gallery.title": "WORK GALLERY",
        
        // Guarantees
        "guarantees.title": "QUALITY COMMITMENT",
        "guarantees.1.title": "QUALITY MATERIALS",
        "guarantees.1.desc": "I only use certified materials from top brands",
        "guarantees.2.title": "REGULATORY COMPLIANCE",
        "guarantees.2.desc": "All installations comply with REBT and current regulations",
        "guarantees.3.title": "PERSONALIZED ATTENTION",
        "guarantees.3.desc": "Direct service and clear communication at all times",
        "guarantees.4.title": "WORK GUARANTEE",
        "guarantees.4.desc": "All my work includes written guarantee",
        
        // Contact
        "contact.title": "CONTACT",
        "contact.info.title": "CONTACT INFORMATION",
        "contact.info.phone": "PHONE:",
        "contact.info.email": "EMAIL:",
        "contact.info.hours": "SCHEDULE:",
        "contact.info.area": "SERVICE AREA:",
        "contact.form.name": "Name",
        "contact.form.email": "Email",
        "contact.form.phone": "Phone",
        "contact.form.message": "Message",
        "contact.form.submit": "SEND MESSAGE",
        
        // Footer
        "footer.rights": "ALL RIGHTS RESERVED."
    }
};

// Estado de la aplicación
let currentLang = 'es';

// Detectar tema automáticamente
function detectTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const logo = document.getElementById('logo');
    
    if (prefersDark) {
        logo.src = 'LOGO MODO OSCURO.png';
    } else {
        logo.src = 'LOGO MODO CLARO.png';
    }
}

// Cambiar idioma
function switchLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    document.getElementById('langSwitch').textContent = currentLang === 'es' ? 'EN' : 'ES';
    updateContent();
}

// Actualizar contenido según idioma
function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            if (element.placeholder) {
                element.placeholder = translations[currentLang][key];
            } else {
                element.textContent = translations[currentLang][key];
            }
        }
    });
}

// Animaciones al hacer scroll mejoradas
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Añadir delay escalonado para elementos múltiples
                if (entry.target.classList.contains('service-card') || 
                    entry.target.classList.contains('guarantee') ||
                    entry.target.classList.contains('photo-item')) {
                    const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.1}s`;
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observar elementos animables
    document.querySelectorAll('.service-card, .guarantee, .photo-item, .contact-info, .contact-form').forEach(el => {
        observer.observe(el);
    });
}

// Menú móvil mejorado
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.textContent = '☰';
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileMenuBtn.textContent = '☰';
        }
    });
}

// Formulario de contacto mejorado
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simular envío del formulario
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = currentLang === 'es' ? 'ENVIANDO...' : 'SENDING...';
        submitBtn.disabled = true;
        
        // Enviar el formulario real
        const formData = new FormData(contactForm);
        
        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert(currentLang === 'es' ? '¡Mensaje enviado! Te contactaremos pronto.' : 'Message sent! We will contact you soon.');
                contactForm.reset();
            } else {
                alert(currentLang === 'es' ? 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.' : 'Error sending message. Please try again.');
            }
        }).catch(error => {
            alert(currentLang === 'es' ? 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.' : 'Error sending message. Please try again.');
        }).finally(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
    });
}

// Efectos de hover mejorados
function initHoverEffects() {
    // Efecto para botones
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    // Detectar y aplicar tema automáticamente
    detectTheme();
    
    // Escuchar cambios en el tema del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', detectTheme);
    
    // Event listeners
    document.getElementById('langSwitch').addEventListener('click', switchLanguage);
    
    // Inicializar funcionalidades
    initAnimations();
    initMobileMenu();
    initContactForm();
    initHoverEffects();
    
    // Actualizar contenido inicial
    updateContent();
    
    // Smooth scroll mejorado para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});