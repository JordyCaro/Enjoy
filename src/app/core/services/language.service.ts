import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

export type Language = 'es' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private langKey = 'enjoyApp-language';
  private languageSubject = new BehaviorSubject<Language>('es');
  private isBrowser: boolean;
  
  public currentLanguage$ = this.languageSubject.asObservable();

  // Diccionarios de traducción simplificados
  private translations: Record<string, Record<string, string>> = {
    es: {
      // Navegación
      'home': 'Inicio',
      'resources': 'Recursos',
      'community': 'Comunidad',
      'chat': 'Hablar ahora',
      'therapists': 'Terapeutas',
      'profile': 'Mi perfil',
      'progress': 'Mi progreso',
      'login': 'Iniciar sesión',
      'signUp': 'Registrarse',
      'anonymousMode': 'Modo anónimo',
      'myWellbeing': 'mi bienestar',
      
      // Inicio
      'heroTitle': 'No tienes que atravesar esto solo',
      'heroSubtitle': 'Un espacio seguro para hablar, conectar y sentirte mejor, un paso a la vez.',
      'talkNow': 'Hablar ahora',
      'noRegistrationNeeded': 'No necesitas registrarte para empezar a hablar',
      
      // Comunidad
      'forumTitle': 'Foro de Apoyo Mutuo',
      'forumDescription': 'Conecta con personas que comprenden lo que estás viviendo. Aquí encontrarás un espacio seguro para compartir experiencias y recibir apoyo de quienes han pasado por situaciones similares.',
      'thematicGroups': 'Grupos temáticos',
      'recentPosts': 'Publicaciones recientes',
      'liveEvents': 'Eventos en vivo',
      
      // Botones generales
      'seeAll': 'Ver todos',
      'joinNow': 'Unirme ahora',
      'exploreResources': 'Explorar recursos',
      'createAccount': 'Crear cuenta gratis',
      'startWithoutRegistration': 'Empezar sin registro',
      'post': 'Publicar',
      'joinGroup': 'Unirme al grupo',
      'loadMore': 'Cargar más',
      'signIn': 'Iniciar sesión',
      
      // Apoyo
      'supportLines': 'Líneas de apoyo gratuito',
      'suicidePrevention': 'Prevención del suicidio',
      'childProtection': 'Protección infantil',
      'genderViolence': 'Violencia de género',
      'emotionalSupportChat': 'Chat de apoyo emocional',
      'professionalTherapists': 'Terapeutas profesionales',
      'findTherapist': 'Encuentra tu terapeuta ideal',
      
      // Sección de testimonios
      'whatOurUsersSay': 'Lo que nuestros usuarios dicen',
      'userSince': 'Usuario desde hace',
      
      // Footer
      'madeWithLove': 'Con 💜 para tu bienestar',
      'privacyPolicy': 'Privacidad',
      'termsOfService': 'Términos',
      'safeSpace': 'Un espacio seguro para acompañarte en tu camino hacia el bienestar emocional.',
      'changeTheme': 'Cambiar tema',
      'changeLanguage': 'ES / EN',
      'needToTalk': '¿Necesitas hablar?',
      'chatAvailable': 'Nuestro chat está disponible 24/7 para escucharte sin juicios.',
      'talkNowBtn': 'Hablar ahora',
      'anonymousModeBtn': 'Modo anónimo',
      'joinCommunityLink': 'Unirte a la comunidad',
      
      // Perfil y progreso
      'personalInfo': 'Información personal',
      'myActivities': 'Mis actividades',
      'myGoals': 'Mis objetivos',
      'wellbeingScore': 'Puntuación de bienestar',
      'streak': 'Racha',
      'days': 'días',
      'completedActivities': 'Actividades completadas',
      'sessions': 'Sesiones',
      'recentActivity': 'Actividad reciente',
      'upcomingEvents': 'Próximos eventos',
      'setNewGoal': 'Establecer nuevo objetivo',
      'insights': 'Perspectivas',
      
      // Otros
      'howCanWeHelpYou': 'Cómo podemos ayudarte',
      'differentWaysOfSupport': 'Diferentes formas de recibir apoyo',
      'ourAssistant': 'Nuestro asistente personal está disponible 24/7, listo para escucharte sin juicios y brindarte orientación personalizada.',
      'findVerifiedTherapists': 'Conecta con profesionales verificados que te pueden ayudar en tu camino hacia el bienestar emocional',
      'startYourWellbeingJourney': 'Comienza tu camino hacia el bienestar hoy',
      'registerToSaveProgress': 'Registrarte te permite guardar tu progreso y recibir recomendaciones personalizadas para tu bienestar.',
      
      // Sección de terapeutas
      'searchTherapist': 'Buscar terapeuta',
      'allSpecialties': 'Todas las especialidades',
      'online': 'En línea',
      'inPerson': 'Presencial',
      'session': 'sesión',
      'noTherapistsFound': 'No se encontraron terapeutas que coincidan con tu búsqueda',
      'clearFilters': 'Limpiar filtros',
      'schedule': 'Agendar',
      'emotionalSupportOptions': 'Tienes opciones de apoyo emocional',
      'otherSupportOptions': 'No olvides que también puedes hablar con nuestro asistente o unirte a la comunidad',
      'talkToAssistant': 'Hablar con asistente',
      'availableAlways': 'Disponible 24/7, sin costo',
      'joinCommunity': 'Unirte a la comunidad',
      'connectWithPeers': 'Conecta con personas como tú'
    },
    en: {
      // Navigation
      'home': 'Home',
      'resources': 'Resources',
      'community': 'Community',
      'chat': 'Talk now',
      'therapists': 'Therapists',
      'profile': 'My profile',
      'progress': 'My progress',
      'login': 'Login',
      'signUp': 'Sign up',
      'anonymousMode': 'Anonymous mode',
      'myWellbeing': 'my wellbeing',
      
      // Home
      'heroTitle': "You don't have to go through this alone",
      'heroSubtitle': 'A safe space to talk, connect and feel better, one step at a time.',
      'talkNow': 'Talk now',
      'noRegistrationNeeded': 'No registration needed to start talking',
      
      // Community
      'forumTitle': 'Mutual Support Forum',
      'forumDescription': 'Connect with people who understand what you\'re going through. Here you\'ll find a safe space to share experiences and receive support from those who have gone through similar situations.',
      'thematicGroups': 'Thematic groups',
      'recentPosts': 'Recent posts',
      'liveEvents': 'Live events',
      
      // General buttons
      'seeAll': 'View all',
      'joinNow': 'Join now',
      'exploreResources': 'Explore resources',
      'createAccount': 'Create free account',
      'startWithoutRegistration': 'Start without registration',
      'post': 'Post',
      'joinGroup': 'Join group',
      'loadMore': 'Load more',
      'signIn': 'Sign in',
      
      // Support
      'supportLines': 'Free support lines',
      'suicidePrevention': 'Suicide prevention',
      'childProtection': 'Child protection',
      'genderViolence': 'Gender violence',
      'emotionalSupportChat': 'Emotional support chat',
      'professionalTherapists': 'Professional therapists',
      'findTherapist': 'Find your ideal therapist',
      
      // Testimonials section
      'whatOurUsersSay': 'What our users say',
      'userSince': 'User since',
      
      // Footer
      'madeWithLove': 'With 💜 for your wellbeing',
      'privacyPolicy': 'Privacy',
      'termsOfService': 'Terms',
      'safeSpace': 'A safe space to accompany you on your journey towards emotional wellbeing.',
      'changeTheme': 'Change theme',
      'changeLanguage': 'EN / ES',
      'needToTalk': 'Need to talk?',
      'chatAvailable': 'Our chat is available 24/7 to listen without judgment.',
      'talkNowBtn': 'Talk now',
      'anonymousModeBtn': 'Anonymous mode',
      'joinCommunityLink': 'Join the community',
      
      // Profile and progress
      'personalInfo': 'Personal information',
      'myActivities': 'My activities',
      'myGoals': 'My goals',
      'wellbeingScore': 'Wellbeing score',
      'streak': 'Streak',
      'days': 'days',
      'completedActivities': 'Completed activities',
      'sessions': 'Sessions',
      'recentActivity': 'Recent activity',
      'upcomingEvents': 'Upcoming events',
      'setNewGoal': 'Set new goal',
      'insights': 'Insights',
      
      // Others
      'howCanWeHelpYou': 'How can we help you',
      'differentWaysOfSupport': 'Different ways to receive support',
      'ourAssistant': 'Our personal assistant is available 24/7, ready to listen without judgment and provide personalized guidance.',
      'findVerifiedTherapists': 'Connect with verified professionals who can help you on your path to emotional well-being',
      'startYourWellbeingJourney': 'Start your wellbeing journey today',
      'registerToSaveProgress': 'Registering allows you to save your progress and receive personalized recommendations for your wellbeing.',
      
      // Therapists section
      'searchTherapist': 'Search therapist',
      'allSpecialties': 'All specialties',
      'online': 'Online',
      'inPerson': 'In person',
      'session': 'session',
      'noTherapistsFound': 'No therapists were found matching your search',
      'clearFilters': 'Clear filters',
      'schedule': 'Schedule',
      'emotionalSupportOptions': 'You have emotional support options',
      'otherSupportOptions': 'Remember you can also talk to our assistant or join the community',
      'talkToAssistant': 'Talk to assistant',
      'availableAlways': 'Available 24/7, no cost',
      'joinCommunity': 'Join the community',
      'connectWithPeers': 'Connect with people like you'
    }
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    
    if (this.isBrowser) {
      const language = this.getCurrentLanguage();
      this.setLanguage(language, false);
    }
  }

  private getCurrentLanguage(): Language {
    if (!this.isBrowser) return 'es';
    
    const savedLanguage = localStorage.getItem(this.langKey) as Language | null;
    if (savedLanguage) {
      return savedLanguage;
    }
    
    // Detectar idioma del navegador
    try {
      const browserLang = navigator.language.split('-')[0];
      return (browserLang === 'es') ? 'es' : 'en';
    } catch (e) {
      return 'es'; // Valor por defecto si hay un error
    }
  }

  public setLanguage(language: Language, saveToStorage = true): void {
    this.languageSubject.next(language);
    
    if (this.isBrowser && saveToStorage) {
      localStorage.setItem(this.langKey, language);
      document.documentElement.lang = language;
    }
  }

  public toggleLanguage(): void {
    const currentLanguage = this.languageSubject.value;
    const newLanguage = currentLanguage === 'es' ? 'en' : 'es';
    this.setLanguage(newLanguage);
  }

  public translate(key: string): string {
    const currentLang = this.languageSubject.value;
    return this.translations[currentLang][key] || key;
  }
} 