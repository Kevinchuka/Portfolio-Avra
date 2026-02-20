# 🛡️ LegalGuard AI - Auditoría Legal Inteligente

LegalGuard AI es una plataforma de vanguardia diseñada para la auditoría y análisis técnico de documentos legales, contratos y términos y condiciones. Utilizando Inteligencia Artificial de última generación (Gemini AI) y una arquitectura enfocada en la privacidad, permite a los profesionales del derecho indexar y consultar grandes volúmenes de información de manera segura y eficiente.

![LegalGuard AI Preview](https://picsum.photos/seed/legalguard/1200/600?blur=2)

## ✨ Características Principales

- **Bóveda Documental Segura**: Gestión local de archivos PDF con indexación inmediata.
- **Terminal de Auditoría IA**: Interfaz de chat avanzada para consultas técnicas sobre el contenido de los documentos.
- **Motor RAG (Retrieval-Augmented Generation)**: La IA responde basándose exclusivamente en el contexto de tus documentos cargados.
- **Procesamiento 100% Local (Client-Side)**: La extracción de texto y el almacenamiento de datos se realizan en el navegador del usuario, garantizando la confidencialidad.
- **Multilingüe**: Soporte completo para interfaces en Español e Inglés.
- **Monitor de Actividad**: Estadísticas en tiempo real sobre documentos indexados, volumen de páginas y auditorías realizadas.

## 🚀 Tecnologías Utilizadas

- **Frontend**: React 19 + TypeScript + Tailwind CSS.
- **IA**: Google Gemini API (`gemini-3-flash-preview`).
- **Procesamiento de PDF**: `pdf.js` para extracción de texto en el cliente.
- **Persistencia**: IndexedDB (vía `storageService`) para almacenamiento local persistente de documentos y sesiones de chat.
- **Diseño**: Estética Dark Mode con efectos de Glassmorphism y animaciones fluidas.

## 🏗️ Arquitectura y Seguridad

LegalGuard AI prioriza la soberanía de los datos:
1. **Extracción**: Los PDFs nunca se envían a un servidor para ser procesados; la extracción ocurre en el hilo principal del navegador.
2. **Contexto**: Solo el texto extraído necesario para la consulta se envía a la API de Gemini bajo estrictas instrucciones de sistema.
3. **Persistencia**: Los documentos y el historial de chat se guardan en la base de datos local del navegador (IndexedDB), no en una base de datos centralizada.

## 🗺️ Roadmap: Autenticación con Clerk

Actualmente, el sistema utiliza un flujo de autenticación simulado ("Audit Token") para demostrar la experiencia de usuario. 

**Próximos pasos:**
- **Integración con Clerk**: Se planea sustituir el login actual por Clerk para ofrecer:
  - Autenticación multifactor (MFA).
  - Gestión de perfiles de analistas.
  - Sincronización opcional de la bóveda entre dispositivos mediante JWT seguros.
  - Roles y permisos granulares para equipos legales.

## 🛠️ Configuración del Desarrollador

### Requisitos Previos
- Node.js instalado.
- Una API Key de Google Gemini (obtenida en [Google AI Studio](https://aistudio.google.com/)).

### Instalación
1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura tu variable de entorno en un archivo `.env`:
   ```env
   GEMINI_API_KEY=tu_api_key_aqui
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## ⚖️ Aviso Legal
Esta herramienta es un asistente de auditoría y no sustituye el consejo legal profesional. El análisis generado por la IA debe ser revisado por un abogado calificado.

---
Desarrollado con ❤️ por **AvraIt**


Link: https://legalguard.vercel.app/