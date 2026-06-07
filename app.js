// app.js
const dict = {
  es: {
    'skip':'SALTAR AL CONTENIDO',
    'nav.about':'SOBRE MÍ','nav.showreel':'VIDEOBOOK','nav.portfolio':'GALERÍA','nav.resume':'CURRÍCULUM','nav.contact':'CONTACTO',
    'hero.title':'ACTOR','hero.subtitle':'Expresando historias con verdad y presencia','hero.cta':'VER VIDEOBOOK',
    'quote.text':'La vida imita al arte mucha más de lo que el arte imita a la vida','quote.author':'OSCAR WILDE',
    'about.title':'SOBRE MÍ',
    'about.text':'Desde pequeño siempre me ha gustado imitar a los personajes que veía en la pantalla, desde los dibujos animados hasta Murdock del Equipo A. Sin darme cuenta, lo que más me divertía era jugar con la emoción, así que decidí apuntarme a clases de teatro y desde entonces no he dejado de formarme haciendo lo que más me gusta: interpretar. Ahora, entre mi rincón industrial favorito (Avilés) y Madrid, me muevo para un día poder cumplir mi sueño: vivir de esta profesión.',
    'reel.title':'VIDEOBOOK','gallery.title':'GALERÍA',
    'cv.title':'CURRÍCULUM',
    'cv.label.email':'Email:','cv.label.tel':'Tel:','cv.label.residence':'Residencia:',
    'cv.section.screen':'TELEVISIÓN / AUDIOVISUAL','cv.section.theatre':'TEATRO','cv.section.training':'FORMACIÓN','cv.section.languages':'IDIOMAS','cv.section.skills':'HABILIDADES',
    'cv.screen.p2.title':'El actor','cv.screen.p2.role':'Miguel','cv.screen.p2.info':'Director: Mike Denz — Independiente',
    'cv.screen.p3.title':'Anna (Cortometraje)','cv.screen.p3.role':'Secundario','cv.screen.p3.info':'Director: Pablo García — CISLAN',
    'cv.theatre.p1.title':'El desván','cv.theatre.p1.role':'Reparto principal','cv.theatre.p1.info':'Directores: Patricia Caso, Mario Villar — Teatro Joven Avilés',
    'cv.theatre.p2.title':'Glengarry Glen Ross','cv.theatre.p2.role':'Secundario','cv.theatre.p2.info':'Directora: Cristina Puertas — Factoría Cultural',
    'cv.theatre.p3.title':'Homenaje Van Gogh','cv.theatre.p3.role':'Secundario','cv.theatre.p3.info':'Directora: Cristina Puertas — Factoría Cultural',
    'cv.theatre.p4.title':'El enfermo imaginario','cv.theatre.p4.role':'Argán','cv.theatre.p4.info':'Directora: Cristina Puertas — Factoría Cultural',
    'cv.train.studio.title':'Interpretación Actors Studio','cv.train.studio.info':'Javier Molina',
    'cv.train.chejov.title':'Técnica Chèjov','cv.train.chejov.info':'Lidia Otón',
    'cv.train.p1.title':'Improvisación e interpretación ante la cámara','cv.train.p1.info':'Natalia Cooper',
    'cv.train.p2.title':'Taller teatral “Espacio Creativo”','cv.train.p2.info':'Mario Villar y Patricia Caso',
    'cv.train.p4.title':'Acting Program online','cv.train.p4.info':'Eliana Ghen',
    'cv.train.p5.title':'Clase intensiva de técnica ante la cámara','cv.train.p5.info':'Eliana Ghen y Bernard Hiller',
    'cv.train.p6.title':'Formación actoral','cv.train.p6.info':'Cristina Puertas — La Habitación Blanca / Cuéntame un Cuadro',
    'cv.lang.es':'Español','cv.lang.es.level':'Nativo','cv.lang.en':'Inglés','cv.lang.en.level':'Fluido C1','cv.lang.fr':'Francés','cv.lang.fr.level':'Básico A2',
    'cv.skill.p1.title':'Danza moderna y urbana','cv.skill.p1.info':'Profesor en centros escolares 2024',
    'cv.skill.p2.title':'Ballet clásico y danza contemporánea','cv.skill.p2.info':'Nivel intermedio',
    'cv.skill.p3.title':'Carné de conducir','cv.skill.p3.info':'B',
    'cv.skill.p5.title':'Nociones básicas de equitación',
    'cv.skill.p4.title':'Nociones básicas de escalada',
    'cv.download':'DESCARGAR CV EN PDF','cv.view':'VER ONLINE',
    'contact.title':'CONTACTO',
    'footer.rights':'TODOS LOS DERECHOS RESERVADOS',
    'cta':'BOOK ME',
    'reel.coming':'PRÓXIMAMENTE',
  },
  en: {
    'skip':'SKIP TO CONTENT',
    'nav.about':'ABOUT ME','nav.showreel':'SHOWREEL','nav.portfolio':'PORTFOLIO','nav.resume':'RESUME','nav.contact':'CONTACT',
    'hero.title':'ACTOR','hero.subtitle':'Expressing stories with truth and presence','hero.cta':'VIEW SHOWREEL',
    'quote.text':'Life imitates art far more than art imitates life','quote.author':'OSCAR WILDE',
    'about.title':'ABOUT ME',
    'about.text':'Since I was a child, I loved imitating the characters I saw on screen, from cartoons to Murdock of The A-Team. What I enjoyed most was playing with emotion, so I started taking acting classes. Since then, I have never stopped training and doing what I love most: performing. Now, between my favourite industrial corner (Avilés) and Madrid, I keep moving to one day live from this craft.',
    'reel.title':'SHOWREEL','gallery.title':'PORTFOLIO',
    'cv.title':'RESUME',
    'cv.label.email':'Email:','cv.label.tel':'Phone:','cv.label.residence':'Based in:',
    'cv.section.screen':'FILM / TELEVISION','cv.section.theatre':'THEATRE','cv.section.training':'TRAINING','cv.section.languages':'LANGUAGES','cv.section.skills':'SKILLS',
    'cv.screen.p2.title':'The Actor','cv.screen.p2.role':'Miguel','cv.screen.p2.info':'Director: Mike Denz — Independent',
    'cv.screen.p3.title':'Anna (Short film)','cv.screen.p3.role':'Supporting','cv.screen.p3.info':'Director: Pablo García — CISLAN',
    'cv.theatre.p1.title':'The Attic','cv.theatre.p1.role':'Ensemble / Lead','cv.theatre.p1.info':'Directors: Patricia Caso, Mario Villar — Teatro Joven Avilés',
    'cv.theatre.p2.title':'Glengarry Glen Ross','cv.theatre.p2.role':'Supporting','cv.theatre.p2.info':'Director: Cristina Puertas — Factoría Cultural',
    'cv.theatre.p3.title':'Van Gogh Tribute','cv.theatre.p3.role':'Supporting','cv.theatre.p3.info':'Director: Cristina Puertas — Factoría Cultural',
    'cv.theatre.p4.title':'The Imaginary Invalid','cv.theatre.p4.role':'Argan','cv.theatre.p4.info':'Director: Cristina Puertas — Factoría Cultural',
    'cv.train.studio.title':'Actors Studio Method','cv.train.studio.info':'Javier Molina',
    'cv.train.chejov.title':'Chekhov Technique','cv.train.chejov.info':'Lidia Oton',
    'cv.train.p1.title':'Improvisation & On-Camera Acting','cv.train.p1.info':'Natalia Cooper',
    'cv.train.p2.title':'“Creative Space” Theatre Workshop','cv.train.p2.info':'Mario Villar & Patricia Caso',
    'cv.train.p4.title':'Online Acting Program','cv.train.p4.info':'Eliana Ghen',
    'cv.train.p5.title':'Intensive On-Camera Technique','cv.train.p5.info':'Eliana Ghen & Bernard Hiller',
    'cv.train.p6.title':'Acting Training','cv.train.p6.info':'Cristina Puertas — La Habitación Blanca / Cuéntame un Cuadro',
    'cv.lang.es':'Spanish','cv.lang.es.level':'Native','cv.lang.en':'English','cv.lang.en.level':'Fluent C1','cv.lang.fr':'French','cv.lang.fr.level':'Basic A2',
    'cv.skill.p1.title':'Modern & Urban Dance','cv.skill.p1.info':'School instructor (2024)',
    'cv.skill.p2.title':'Classical Ballet & Contemporary','cv.skill.p2.info':'Intermediate level',
    'cv.skill.p3.title':'Driver’s license','cv.skill.p3.info':'B',
    'cv.skill.p5.title':'Basic equestrian skills',
    'cv.skill.p4.title':'Basic climbing skills',
    'cv.download':'DOWNLOAD RESUME PDF','cv.view':'VIEW ONLINE',
    'contact.title':'CONTACT',
    'footer.rights':'ALL RIGHTS RESERVED',
    'cta':'BOOK ME',
    'reel.coming':'COMING SOON',
  }
};

const setLang = l => {
  document.documentElement.setAttribute('lang', l);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (dict[l] && dict[l][k] !== undefined) {
      el.textContent = dict[l][k];
    }
  });
  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.textContent = l === 'es' ? 'EN' : 'ES';
  }
  localStorage.setItem('lang', l);
};

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'es';
  setLang(saved);
  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const c = document.documentElement.getAttribute('lang');
      setLang(c === 'es' ? 'en' : 'es');
    });
  }
});