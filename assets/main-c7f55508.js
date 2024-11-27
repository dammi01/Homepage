(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();function m(){return m=Object.assign?Object.assign.bind():function(o){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n])}return o},m.apply(this,arguments)}var b={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(o){},onComplete:function(o){},preStringTyped:function(o,t){},onStringTyped:function(o,t){},onLastStringBackspaced:function(o){},onTypingPaused:function(o,t){},onTypingResumed:function(o,t){},onReset:function(o){},onStop:function(o,t){},onStart:function(o,t){},onDestroy:function(o){}},v=new(function(){function o(){}var t=o.prototype;return t.load=function(e,n,i){if(e.el=typeof i=="string"?document.querySelector(i):i,e.options=m({},b,n),e.isInput=e.el.tagName.toLowerCase()==="input",e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map(function(l){return l.trim()}),e.stringsElement=typeof e.options.stringsElement=="string"?document.querySelector(e.options.stringsElement):e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var a=Array.prototype.slice.apply(e.stringsElement.children),s=a.length;if(s)for(var r=0;r<s;r+=1)e.strings.push(a[r].innerHTML.trim())}for(var c in e.strPos=0,e.currentElContent=this.getCurrentElContent(e),e.currentElContent&&e.currentElContent.length>0&&(e.strPos=e.currentElContent.length-1,e.strings.unshift(e.currentElContent)),e.sequence=[],e.strings)e.sequence[c]=c;e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.autoInsertCss=e.options.autoInsertCss,e.autoInsertCss&&(this.appendCursorAnimationCss(e),this.appendFadeOutAnimationCss(e))},t.getCurrentElContent=function(e){return e.attr?e.el.getAttribute(e.attr):e.isInput?e.el.value:e.contentType==="html"?e.el.innerHTML:e.el.textContent},t.appendCursorAnimationCss=function(e){var n="data-typed-js-cursor-css";if(e.showCursor&&!document.querySelector("["+n+"]")){var i=document.createElement("style");i.setAttribute(n,"true"),i.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(i)}},t.appendFadeOutAnimationCss=function(e){var n="data-typed-fadeout-js-css";if(e.fadeOut&&!document.querySelector("["+n+"]")){var i=document.createElement("style");i.setAttribute(n,"true"),i.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(i)}},o}()),g=new(function(){function o(){}var t=o.prototype;return t.typeHtmlChars=function(e,n,i){if(i.contentType!=="html")return n;var a=e.substring(n).charAt(0);if(a==="<"||a==="&"){var s;for(s=a==="<"?">":";";e.substring(n+1).charAt(0)!==s&&!(1+ ++n>e.length););n++}return n},t.backSpaceHtmlChars=function(e,n,i){if(i.contentType!=="html")return n;var a=e.substring(n).charAt(0);if(a===">"||a===";"){var s;for(s=a===">"?"<":"&";e.substring(n-1).charAt(0)!==s&&!(--n<0););n--}return n},o}()),k=function(){function o(e,n){v.load(this,n,e),this.begin()}var t=o.prototype;return t.toggle=function(){this.pause.status?this.start():this.stop()},t.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},t.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},t.destroy=function(){this.reset(!1),this.options.onDestroy(this)},t.reset=function(e){e===void 0&&(e=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,e&&(this.insertCursor(),this.options.onReset(this),this.begin())},t.begin=function(){var e=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){e.strPos===0?e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos):e.backspace(e.strings[e.sequence[e.arrayPos]],e.strPos)},this.startDelay)},t.typewrite=function(e,n){var i=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var a=this.humanizer(this.typeSpeed),s=1;this.pause.status!==!0?this.timeout=setTimeout(function(){n=g.typeHtmlChars(e,n,i);var r=0,c=e.substring(n);if(c.charAt(0)==="^"&&/^\^\d+/.test(c)){var l=1;l+=(c=/\d+/.exec(c)[0]).length,r=parseInt(c),i.temporaryPause=!0,i.options.onTypingPaused(i.arrayPos,i),e=e.substring(0,n)+e.substring(n+l),i.toggleBlinking(!0)}if(c.charAt(0)==="`"){for(;e.substring(n+s).charAt(0)!=="`"&&(s++,!(n+s>e.length)););var p=e.substring(0,n),f=e.substring(p.length+1,n+s),y=e.substring(n+s+1);e=p+f+y,s--}i.timeout=setTimeout(function(){i.toggleBlinking(!1),n>=e.length?i.doneTyping(e,n):i.keepTyping(e,n,s),i.temporaryPause&&(i.temporaryPause=!1,i.options.onTypingResumed(i.arrayPos,i))},r)},a):this.setPauseStatus(e,n,!0)},t.keepTyping=function(e,n,i){n===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var a=e.substring(0,n+=i);this.replaceText(a),this.typewrite(e,n)},t.doneTyping=function(e,n){var i=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){i.backspace(e,n)},this.backDelay))},t.backspace=function(e,n){var i=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var a=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){n=g.backSpaceHtmlChars(e,n,i);var s=e.substring(0,n);if(i.replaceText(s),i.smartBackspace){var r=i.strings[i.arrayPos+1];i.stopNum=r&&s===r.substring(0,n)?n:0}n>i.stopNum?(n--,i.backspace(e,n)):n<=i.stopNum&&(i.arrayPos++,i.arrayPos===i.strings.length?(i.arrayPos=0,i.options.onLastStringBackspaced(),i.shuffleStringsIfNeeded(),i.begin()):i.typewrite(i.strings[i.sequence[i.arrayPos]],n))},a)}else this.setPauseStatus(e,n,!1)},t.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},t.setPauseStatus=function(e,n,i){this.pause.typewrite=i,this.pause.curString=e,this.pause.curStrPos=n},t.toggleBlinking=function(e){this.cursor&&(this.pause.status||this.cursorBlinking!==e&&(this.cursorBlinking=e,e?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},t.humanizer=function(e){return Math.round(Math.random()*e/2)+e},t.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},t.initFadeOut=function(){var e=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){e.arrayPos++,e.replaceText(""),e.strings.length>e.arrayPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],0):(e.typewrite(e.strings[0],0),e.arrayPos=0)},this.fadeOutDelay)},t.replaceText=function(e){this.attr?this.el.setAttribute(this.attr,e):this.isInput?this.el.value=e:this.contentType==="html"?this.el.innerHTML=e:this.el.textContent=e},t.bindFocusEvents=function(){var e=this;this.isInput&&(this.el.addEventListener("focus",function(n){e.stop()}),this.el.addEventListener("blur",function(n){e.el.value&&e.el.value.length!==0||e.start()}))},t.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},o}();const S={languageMenu:"Language",english:"English",german:"German",portuguese:"Portuguese",navHome:"Home",navAbout:"About",navHighlights:"Highlights",navSkills:"Skills",navPortfolio:"Portfolio",navContact:"Contact",name:"Michael Dambock",title:"System Analyst, Backend Developer, Solution Provider",underConstruction:"Under construction!",description:`Experienced Developer with over 20 years in IT, now focused on applying expertise to Data Science,
    Data Alchemy and AI-driven development. Seeking to leverage strong background in programming,
    project management, data analysis, and large-scale system development to create innovative solutions.
    
    Committed to technological advancement through the integration of traditional software engineering,
    innovation and modern AI methodologies.`,download:"Download CV",contact:"Contact Me",aboutHeading:"About Me",aboutDescription:`I am a passionate enthusiast of IT and technology in general. 
    My professional journey is as diverse as my eclectic taste in music, which ranges 
    from ABBA's pop to ZZ Top's rock. In my spare time, you can find me immersed in a good book, 
    be it technical, historic, filosofic, dramatic, biblical, or fantasy fiction, reflecting my love 
    for reading and continuous learning.
    
    As a cinephile, I appreciate the art of visual storytelling as much as the thrill of a 
    Formula 1 race. Above all, I am a nature lover, finding peace and inspiration whether at 
    the beach, by the sea, or amidst the greenery of the woods.`,highlightsHeading:"Professional Highlights and Goals",highlightsDescription:`A professional with over four decades of experience in technology and administration sectors, my career
is marked by significant projects and complex systems. I started in IT, developing solutions such as
annual balance sheets in Lotus 1-2-3, budget control systems in dBase III / Clipper'87 and project
management, implementation and coordination with CA-SuperProject.

My expertise encompasses the creation of a complete telemarketing system in CA-QbyX, implementation
and programming of electronic time register / clocks using Visual Basic, C, and SQL, as well as programming,
adaptation, and implementation of customer service systems (CRM) using BMC AR-System and SQL databases.
After a period in administration, where, among others, I optimized and digitalized management processes, I am
returning to the IT field with a new purpose: to apply my accumulated knowledge now in Data Engineering, Data
Analysis, Data Alchemy and AI-driven development, thus contributing to create innovative solutions.

My competencies include:
• Design, programming, and implementation of solutions
• Analysis and implementation of large-scale projects
• IT support, Telemarketing and portfolio development

I am seeking new challenges that allow me to utilize my skills in problem-solving, analytical thinking,
and attention to detail. I am enthusiastic about contributing my vast experience, collaborating with
the growth of a dynamic and future-oriented team.`,skillsHeading:"Skills",programming:"Programming",databases:"Databases",toolsTech:"Tools & Technologies",dataScience:"Data Science",professional:"Professional Skills",portfolioHeading:"Portfolio",portfolioItems:{crm:{title:"CRM's Implemented",description:"Implementation and customization of Customer Relationship Management systems, improving business processes and customer service efficiency."},projectManagement:{title:"Project Management",description:"Successfully managed and delivered complex IT projects, ensuring timely completion and optimal resource utilization."},telemarketing:{title:"Telemarketing System",description:"Development of comprehensive telemarketing solutions, enhancing customer outreach and sales performance tracking."},webDesign:{title:"Website Design",description:"Modern, responsive website development with focus on user experience and performance."},dashboards:{title:"Dashboards",description:"Interactive business intelligence dashboards created with PowerBI, providing real-time insights and data visualization for informed decision-making."}},contactHeading:"Contact",contactForm:{name:"Your Name",email:"Your Email",subject:"Subject",message:"Your Message",send:"Send Message"},contactHeading:"Contact"},C={languageMenu:"Sprache",english:"Englisch",german:"Deutsch",portuguese:"Portugiesisch",navHome:"Start",navAbout:"Über mich",navHighlights:"Highlights",navSkills:"Fähigkeiten",navPortfolio:"Portfolio",navContact:"Kontakt",name:"Michael Dambock",title:"Systemanalytiker, Backend-Entwickler, Lösungsanbieter",underConstruction:"Seite im Aufbau!",description:`Erfahrener Entwickler mit über 20 Jahren IT-Erfahrung, jetzt fokussiert auf die Anwendung von
    Expertise in Data Science, Data Alchemy und KI-gestützter Entwicklung. Strebt danach, fundierte
    Kenntnisse in Programmierung, Projektmanagement, Datenanalyse und Entwicklung großer Systeme
    zu nutzen, um innovative Lösungen zu schaffen.
    
    Engagiert für technologischen Fortschritt durch die Integration von traditioneller
    Softwareentwicklung, Innovation und modernen KI-Methodologien.`,download:"Lebenslauf herunterladen",contact:"Kontaktieren Sie mich",aboutHeading:"Über Mich",aboutDescription:`Ich bin ein leidenschaftlicher Enthusiast für IT und Technologie im Allgemeinen.
    Mein beruflicher Werdegang ist so vielfältig wie mein eklektischer Musikgeschmack, der von
    ABBAs Pop bis zu ZZ Tops Rock reicht. In meiner Freizeit findet man mich in ein gutes Buch vertieft,
    sei es technisch, historisch, philosophisch, dramatisch, biblisch oder Fantasy-Fiction, was meine
    Liebe zum Lesen und kontinuierlichen Lernen widerspiegelt.
    
    Als Cinephiler schätze ich die Kunst des visuellen Geschichtenerzählens genauso wie den Nervenkitzel
    eines Formel-1-Rennens. Vor allem aber bin ich ein Naturliebhaber, der Frieden und Inspiration findet.`,highlightsHeading:"Berufliche Highlights und Ziele",highlightsDescription:`Als Fachmann mit über vier Jahrzehnten Erfahrung in den Bereichen Technologie und Verwaltung ist meine Karriere
von bedeutenden Projekten und komplexen Systemen geprägt. Ich begann in der IT mit der Entwicklung von Lösungen wie
Jahresabschlüssen in Lotus 1-2-3, Budgetkontrollsystemen in dBase III / Clipper'87 und Projektmanagement,
Implementierung und Koordination mit CA-SuperProject.

Meine Expertise umfasst die Erstellung eines kompletten Telemarketing-Systems in CA-QbyX, Implementierung
und Programmierung elektronischer Zeiterfassungssysteme mit Visual Basic, C und SQL sowie Programmierung,
Anpassung und Implementierung von Kundenservicesystemen (CRM) unter Verwendung von BMC AR-System und SQL-Datenbanken.
Nach einer Zeit in der Verwaltung, in der ich unter anderem Managementprozesse optimiert und digitalisiert habe,
kehre ich mit einem neuen Ziel in die IT zurück: Mein gesammeltes Wissen nun in Data Engineering, Data
Analysis, Data Alchemy und KI-gesteuerte Entwicklung einzubringen und so zur Schaffung innovativer Lösungen beizutragen.

Meine Kompetenzen umfassen:
• Design, Programmierung und Implementierung von Lösungen
• Analyse und Implementierung von Großprojekten
• IT-Support, Telemarketing und Portfolioentwicklung

Ich suche neue Herausforderungen, die es mir ermöglichen, meine Fähigkeiten in der Problemlösung, im analytischen Denken
und in der Detailgenauigkeit einzusetzen. Ich freue mich darauf, meine umfangreiche Erfahrung einzubringen und zum
Wachstum eines dynamischen und zukunftsorientierten Teams beizutragen.`,skillsHeading:"Fähigkeiten",programming:"Programmierung",databases:"Datenbanken",toolsTech:"Tools & Technologien",dataScience:"Data Science",professional:"Berufliche Fähigkeiten",portfolioHeading:"Portfolio",portfolioItems:{crm:{title:"Implementierte CRM-Systeme",description:"Implementierung und Anpassung von Customer Relationship Management-Systemen zur Verbesserung von Geschäftsprozessen und Kundenservice-Effizienz."},projectManagement:{title:"Projektmanagement",description:"Erfolgreiche Verwaltung und Umsetzung komplexer IT-Projekte mit termingerechter Fertigstellung und optimaler Ressourcennutzung."},telemarketing:{title:"Telemarketing-System",description:"Entwicklung umfassender Telemarketing-Lösungen zur Verbesserung der Kundenansprache und Vertriebsleistungsverfolgung."},webDesign:{title:"Website-Design",description:"Moderne, responsive Webentwicklung mit Fokus auf Benutzererfahrung und Leistung."},dashboards:{title:"Dashboards",description:"Interaktive Business Intelligence-Dashboards erstellt mit PowerBI, die Echtzeit-Einblicke und Datenvisualisierung für fundierte Entscheidungen bieten."}},contactHeading:"Kontakt",contactForm:{name:"Ihr Name",email:"Ihre E-Mail",subject:"Betreff",message:"Ihre Nachricht",send:"Nachricht senden"},download:"Lebenslauf herunterladen",contact:"Kontaktieren Sie mich"},I={languageMenu:"Idioma",english:"Inglês",german:"Alemão",portuguese:"Português",navHome:"Início",navAbout:"Sobre",navHighlights:"Destaques",navSkills:"Habilidades",navPortfolio:"Portfólio",navContact:"Contato",name:"Michael Dambock",title:"Analista de Sistemas, Desenvolvedor Backend, Provedor de Soluções",description:`Desenvolvedor experiente com mais de 20 anos em TI, agora focado na aplicação de expertise
    em Ciência de Dados, Alquimia de Dados e desenvolvimento orientado por IA. Buscando aproveitar
    forte experiência em programação, gerenciamento de projetos, análise de dados e desenvolvimento
    de sistemas em larga escala para criar soluções inovadoras.
    
    Comprometido com o avanço tecnológico através da integração de engenharia de software tradicional,
    inovação e metodologias modernas de IA.`,download:"Baixar Currículo",contact:"Contate-me",aboutHeading:"Sobre Mim",aboutDescription:`Sou um entusiasta apaixonado por TI e tecnologia em geral.
    Minha jornada profissional é tão diversa quanto meu gosto eclético por música, que vai do
    pop do ABBA ao rock do ZZ Top. No meu tempo livre, você me encontra imerso em um bom livro,
    seja técnico, histórico, filosófico, dramático, bíblico ou ficção fantástica, refletindo meu
    amor pela leitura e aprendizado contínuo.
    
    Como cinéfilo, aprecio a arte da narrativa visual tanto quanto a emoção de uma corrida de
    Fórmula 1. Acima de tudo, sou um amante da natureza, encontrando paz e inspiração.`,highlightsHeading:"Destaques Profissionais e Objetivos",highlightsDescription:`Profissional com mais de quatro décadas de experiência nos setores de tecnologia e administração, minha carreira
é marcada por projetos significativos e sistemas complexos. Comecei na TI, desenvolvendo soluções como
balanços anuais em Lotus 1-2-3, sistemas de controle orçamentário em dBase III / Clipper'87 e gerenciamento,
implementação e coordenação de projetos com CA-SuperProject.

Minha expertise abrange a criação de um sistema completo de telemarketing em CA-QbyX, implementação
e programação de registros/relógios de ponto eletrônicos usando Visual Basic, C e SQL, bem como programação,
adaptação e implementação de sistemas de atendimento ao cliente (CRM) utilizando BMC AR-System e bancos de dados SQL.
Após um período na administração, onde, entre outros, otimizei e digitalizei processos de gestão, estou
retornando à área de TI com um novo propósito: aplicar meu conhecimento acumulado agora em Engenharia de Dados,
Análise de Dados, Alquimia de Dados e desenvolvimento orientado por IA, contribuindo assim para criar soluções inovadoras.

Minhas competências incluem:
• Design, programação e implementação de soluções
• Análise e implementação de projetos de grande escala
• Suporte de TI, Telemarketing e desenvolvimento de portfólio

Busco novos desafios que me permitam utilizar minhas habilidades em resolução de problemas, pensamento analítico
e atenção aos detalhes. Estou entusiasmado em contribuir com minha vasta experiência, colaborando com
o crescimento de uma equipe dinâmica e orientada ao futuro.`,skillsHeading:"Habilidades",programming:"Programação",databases:"Bancos de Dados",toolsTech:"Ferramentas e Tecnologias",dataScience:"Ciência de Dados",professional:"Habilidades Profissionais",portfolioHeading:"Portfólio",portfolioItems:{crm:{title:"CRMs Implementados",description:"Implementação e personalização de sistemas de Gestão de Relacionamento com o Cliente, melhorando processos de negócios e eficiência do atendimento ao cliente."},projectManagement:{title:"Gestão de Projetos",description:"Gerenciamento e entrega bem-sucedida de projetos complexos de TI, garantindo conclusão no prazo e utilização otimizada de recursos."},telemarketing:{title:"Sistema de Telemarketing",description:"Desenvolvimento de soluções abrangentes de telemarketing, aprimorando o alcance ao cliente e o acompanhamento do desempenho de vendas."},webDesign:{title:"Design de Sites",description:"Desenvolvimento de websites modernos e responsivos com foco na experiência do usuário e desempenho."},dashboards:{title:"Dashboards",description:"Painéis interativos de business intelligence criados com PowerBI, fornecendo insights em tempo real e visualização de dados para tomada de decisões informada."}},underConstruction:"Em construção!",contactHeading:"Contato",contactForm:{name:"Seu Nome",email:"Seu E-mail",subject:"Assunto",message:"Sua Mensagem",send:"Enviar Mensagem"}},w={languageMenu:"Idioma",english:"Inglés",german:"Alemán",portuguese:"Portugués",spanish:"Español",navHome:"Inicio",navAbout:"Sobre mí",navHighlights:"Destacados",navSkills:"Habilidades",navPortfolio:"Portafolio",navContact:"Contacto",name:"Michael Dambock",title:"Analista de Sistemas, Desarrollador Backend, Proveedor de Soluciones",underConstruction:"¡En construcción!",description:`Desarrollador experimentado con más de 20 años en TI, ahora enfocado en la aplicación de
    experiencia en Ciencia de Datos, Alquimia de Datos y desarrollo impulsado por IA. Buscando aprovechar
    una sólida experiencia en programación, gestión de proyectos, análisis de datos y desarrollo
    de sistemas a gran escala para crear soluciones innovadoras.
    
    Comprometido con el avance tecnológico a través de la integración de ingeniería de software tradicional,
    innovación y metodologías modernas de IA.`,download:"Descargar CV",contact:"Contáctame",aboutHeading:"Sobre Mí",aboutDescription:`Soy un entusiasta apasionado de la TI y la tecnología en general.
    Mi trayectoria profesional es tan diversa como mi gusto ecléctico por la música, que va desde
    el pop de ABBA hasta el rock de ZZ Top. En mi tiempo libre, me encontrarás inmerso en un buen libro,
    ya sea técnico, histórico, filosófico, dramático, bíblico o ficción fantástica, reflejando mi
    amor por la lectura y el aprendizaje continuo.
    
    Como cinéfilo, aprecio el arte de la narrativa visual tanto como la emoción de una carrera de
    Fórmula 1. Sobre todo, soy un amante de la naturaleza, encontrando paz e inspiración.`,highlightsHeading:"Logros Profesionales y Objetivos",highlightsDescription:`Profesional con más de cuatro décadas de experiencia en los sectores de tecnología y administración, mi carrera
está marcada por proyectos significativos y sistemas complejos. Comencé en TI, desarrollando soluciones como
balances anuales en Lotus 1-2-3, sistemas de control presupuestario en dBase III / Clipper'87 y gestión,
implementación y coordinación de proyectos con CA-SuperProject.

Mi experiencia abarca la creación de un sistema completo de telemarketing en CA-QbyX, implementación
y programación de registros/relojes de tiempo electrónicos usando Visual Basic, C y SQL, así como programación,
adaptación e implementación de sistemas de atención al cliente (CRM) utilizando BMC AR-System y bases de datos SQL.
Después de un período en administración, donde, entre otros, optimicé y digitalicé procesos de gestión, estoy
volviendo al campo de TI con un nuevo propósito: aplicar mi conocimiento acumulado ahora en Ingeniería de Datos,
Análisis de Datos, Alquimia de Datos y desarrollo impulsado por IA, contribuyendo así a crear soluciones innovadoras.

Mis competencias incluyen:
• Diseño, programación e implementación de soluciones
• Análisis e implementación de proyectos a gran escala
• Soporte de TI, Telemarketing y desarrollo de portafolio

Busco nuevos desafíos que me permitan utilizar mis habilidades en resolución de problemas, pensamiento analítico
y atención al detalle. Estoy entusiasmado por aportar mi vasta experiencia, colaborando con
el crecimiento de un equipo dinámico y orientado al futuro.`,skillsHeading:"Habilidades",programming:"Programación",databases:"Bases de Datos",toolsTech:"Herramientas y Tecnologías",dataScience:"Ciencia de Datos",professional:"Habilidades Profesionales",portfolioHeading:"Portafolio",portfolioItems:{crm:{title:"CRM Implementados",description:"Implementación y personalización de sistemas de Gestión de Relaciones con Clientes, mejorando los procesos comerciales y la eficiencia del servicio al cliente."},projectManagement:{title:"Gestión de Proyectos",description:"Gestión y entrega exitosa de proyectos de TI complejos, asegurando la finalización oportuna y la utilización óptima de recursos."},telemarketing:{title:"Sistema de Telemarketing",description:"Desarrollo de soluciones integrales de telemarketing, mejorando el alcance al cliente y el seguimiento del rendimiento de ventas."},webDesign:{title:"Diseño Web",description:"Desarrollo de sitios web modernos y responsivos con enfoque en la experiencia del usuario y el rendimiento."},dashboards:{title:"Dashboards",description:"Tableros interactivos de inteligencia empresarial creados con PowerBI, proporcionando información en tiempo real y visualización de datos para la toma de decisiones informada."}},contactHeading:"Contacto",contactForm:{name:"Su Nombre",email:"Su Correo Electrónico",subject:"Asunto",message:"Su Mensaje",send:"Enviar Mensaje"},navContact:"Contacto"},D={en:S,de:C,pt:I,es:w};class T{constructor(){this.currentLang="en",this.translations=D}setLanguage(t){this.translations[t]&&(this.currentLang=t,this.updateDOM(),localStorage.setItem("preferredLanguage",t),document.querySelectorAll(".language-dropdown button").forEach(e=>{e.classList.toggle("active",e.dataset.lang===t)}))}t(t){const e=t.split(".");let n=this.translations[this.currentLang];for(const i of e){if(n===void 0)return console.log(`Translation missing for key: ${t} in language: ${this.currentLang}`),t;n=n[i]}return n||t}updateDOM(){console.log("Updating translations for language:",this.currentLang),document.querySelectorAll("[data-translate]").forEach(t=>{const e=t.getAttribute("data-translate"),n=this.t(e);if(console.log(`Translating key: ${e} to: ${n}`),n&&n!==e){const i=t.tagName.toLowerCase();i==="input"||i==="textarea"?t.placeholder=n:t.textContent=n}}),document.title=`${this.t("name")} - ${this.t("title")}`,window.dispatchEvent(new CustomEvent("languageChanged",{detail:{language:this.currentLang}}))}init(){console.log("Initializing i18n");const t=localStorage.getItem("preferredLanguage");if(t&&this.translations[t])this.currentLang=t;else{const e=navigator.language.split("-")[0];this.translations[e]&&(this.currentLang=e)}console.log("Current language:",this.currentLang),this.updateDOM(),document.querySelectorAll(".language-dropdown button").forEach(e=>{e.classList.toggle("active",e.dataset.lang===this.currentLang)})}}const u=new T,P={programming:[{name:"Python",icon:"bxl-python"},{name:"JavaScript",icon:"bxl-javascript"},{name:"Java",icon:"bxl-java"},{name:"PHP",icon:"bxl-php"},{name:"C++",icon:"bx-code-alt"}],databases:[{name:"MySQL",icon:"bx-data"},{name:"PostgreSQL",icon:"bx-data"},{name:"MongoDB",icon:"bx-data"},{name:"Oracle",icon:"bx-data"}],tools:[{name:"Git",icon:"bxl-git"},{name:"Docker",icon:"bxl-docker"},{name:"AWS",icon:"bxl-aws"},{name:"Linux",icon:"bxl-tux"},{name:"VS Code",icon:"bx-code-block"}]},A=[];function h(){const o={strings:[u.t("title")],typeSpeed:50,backSpeed:30,backDelay:5e3,loop:!0};new k(".typed-text",o)}function E(){const o=document.querySelector(".header"),t=50;window.addEventListener("scroll",()=>{window.scrollY>t?o.classList.add("scrolled"):o.classList.remove("scrolled")})}function L(){const o=document.querySelector(".menu-toggle"),t=document.querySelector(".navbar");o.addEventListener("click",()=>{t.classList.toggle("active")}),document.addEventListener("click",e=>{e.target.closest(".header-right")||t.classList.remove("active")})}function M(){const o=document.querySelector(".language-selector"),t=o.querySelector(".language-button"),e=o.querySelector(".language-dropdown");t.addEventListener("click",()=>{e.classList.toggle("show")}),e.querySelectorAll("button").forEach(n=>{n.addEventListener("click",()=>{const i=n.getAttribute("data-lang");u.setLanguage(i),e.classList.remove("show");const a=t.querySelector("span");a.textContent=u.t("languageMenu")})}),document.addEventListener("click",n=>{o.contains(n.target)||e.classList.remove("show")})}function x(){const o={programming:document.querySelector(".skills-category:nth-child(1) .skills-list"),databases:document.querySelector(".skills-category:nth-child(2) .skills-list"),tools:document.querySelector(".skills-category:nth-child(3) .skills-list")};Object.entries(P).forEach(([t,e])=>{const n=o[t];n&&e.forEach(i=>{const a=document.createElement("div");a.className="skill-item fade-in",a.innerHTML=`
        <i class='bx ${i.icon}'></i>
        <span>${i.name}</span>
      `,n.appendChild(a)})})}function B(){const o=document.querySelector(".portfolio-grid");A.forEach(t=>{const e=document.createElement("article");e.className="portfolio-item fade-in",e.innerHTML=`
      <img src="${t.image}" alt="${t.title}" loading="lazy">
      <div class="portfolio-item-content">
        <h3>${t.title}</h3>
        <p>${t.description}</p>
        <div class="portfolio-item-tags">
          ${t.tags.map(n=>`<span class="tag">${n}</span>`).join("")}
        </div>
        <a href="${t.link}" class="btn btn-primary" target="_blank">View Project</a>
      </div>
    `,o.appendChild(e)})}function z(){const o=document.getElementById("contact-form");o&&(o.innerHTML=`
    <div class="form-row">
      <div class="form-group">
        <input type="text" id="name" name="name" required placeholder="Your Name">
      </div>
      <div class="form-group">
        <input type="email" id="email" name="email" required placeholder="Your Email">
      </div>
    </div>
    <div class="form-group">
      <input type="text" id="subject" name="subject" required placeholder="Subject">
    </div>
    <div class="form-group">
      <textarea id="message" name="message" rows="5" required placeholder="Your Message"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Send Message</button>
  `,o.addEventListener("submit",async t=>{t.preventDefault(),console.log("Form submitted")}))}function j(){const o=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&(e.target.classList.add("fade-in"),o.unobserve(e.target))})},{threshold:.1});document.querySelectorAll("section").forEach(t=>{o.observe(t)})}function H(){const o=document.getElementById("current-year");o&&(o.textContent=new Date().getFullYear())}function q(){const o=document.getElementById("theme-toggle");o.querySelector("i");const t=localStorage.getItem("theme"),e=window.matchMedia("(prefers-color-scheme: dark)").matches;t?(document.documentElement.setAttribute("data-theme",t),d(t==="dark")):e&&(document.documentElement.setAttribute("data-theme","dark"),d(!0)),o.addEventListener("click",()=>{const i=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",i),localStorage.setItem("theme",i),d(i==="dark")})}function d(o){const t=document.getElementById("theme-toggle").querySelector("i");t.className=o?"bx bx-moon":"bx bx-sun"}document.addEventListener("DOMContentLoaded",()=>{u.init(),q(),h(),E(),L(),M(),x(),B(),z(),j(),H(),window.addEventListener("languageChanged",()=>{h()})});
//# sourceMappingURL=main-c7f55508.js.map
