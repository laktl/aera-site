(() => {
  'use strict';

  const SUPPORTED_LANGS = ['be', 'bg', 'de', 'en', 'ru', 'uk'];
  const FALLBACK_LANG = 'en';
  const LANG_KEY = 'aera-lang';

  const I18N = {
    ru: {
      "nav.skip": "Перейти к содержимому",
      "nav.homeAria": "Aera — на главную",
      "nav.primaryAria": "Основная навигация",
      "nav.library": "Библиотека",
      "nav.gestures": "Жесты",
      "nav.future": "Дальше",
      "nav.themeAria": "Переключить тему",
      "nav.langAria": "Изменить язык",
      "nav.download": "Скачать",
      "nav.backToSite": "На сайт",
      "footer.moreAria": "Дополнительно",
      "footer.support": "Поддержка",
      "footer.privacy": "Конфиденциальность",
      "footer.tagline": "Локальный плеер: без аккаунта, без облака, без лишнего.",
      "index.metaTitle": "Aera — личный музыкальный плеер",
      "index.metaDescription": "Aera — музыкальный плеер, который хранит всё на устройстве. Никаких вкладок, спрятанных настроек и мусора — только ваша музыка.",
      "hero.title": "Личный музыкальный плеер,<br>который хранит всё на устройстве",
      "hero.lead": "Ничего лишнего. Никаких вкладок, спрятанных настроек и мусора — только ваша музыка.",
      "hero.ctaPrimary": "Смотреть, как это работает",
      "hero.imgTrackAlt": "Полноэкранный плеер Aera с обложкой альбома",
      "hero.imgMainAlt": "Главный экран Aera «Your Music» с мини-плеером",
      "library.kicker": "Вся библиотека под рукой",
      "library.heading": "Добавляйте, собирайте, находите",
      "library.lead": "Добавляйте треки, собирайте плейлисты и находите нужное за секунды — без блужданий по меню.",
      "library.demoLabel": "Живой пример: тот же поиск, что в приложении",
      "library.searchPlaceholder": "Поиск",
      "library.searchAria": "Поиск по демо-библиотеке",
      "library.emptyResult": "Ничего не найдено",
      "library.demoHint": "Начните печатать — приложение ищет сразу по трекам, альбомам, плейлистам и исполнителям, без отдельной кнопки поиска.",
      "library.imgAlt": "Экран «Library» с плейлистами Aera",
      "gestures.imgSettingsAlt": "Экран настроек Aera: импорт, экспорт и проверка дубликатов",
      "gestures.imgTrackAlt": "Экран трека с редактированием тегов в Aera",
      "gestures.kicker": "Каждый жест делает очевидное",
      "gestures.heading": "Учиться нечему. Найдётся за секунды",
      "gestures.feature1": "Поиск сразу по трекам, альбомам, плейлистам и исполнителям.",
      "gestures.feature2": "Фильтр по частоте прослушивания.",
      "gestures.feature3": "Свободный импорт и экспорт треков с проверкой на дубликаты.",
      "gestures.feature4": "Удобный редактор тегов: название, исполнитель, альбом и обложка.",
      "future.kicker": "Дальше — только лучше",
      "future.heading": "Aera активно развивается",
      "future.lead": "Новые возможности и улучшения выходят регулярно, а ваши отзывы определяют, что будет дальше.",
      "future.cta": "Скачать Aera",
      "future.note": "Через TestFlight — бета-программа Apple для тестирования приложений",
      "privacy.metaTitle": "Политика конфиденциальности — Aera",
      "privacy.metaDescription": "Политика конфиденциальности Aera: какие данные остаются на устройстве, какие разрешения запрашивает приложение и как с нами связаться.",
      "privacy.eyebrow": "Aera · Обновлено: 30 августа 2026",
      "privacy.h1": "Политика конфиденциальности",
      "privacy.intro": "Aera — личный музыкальный плеер для iPhone, который хранит данные на устройстве. Эта политика объясняет, как Aera обращается с вашей информацией.",
      "privacy.summaryH2": "Кратко",
      "privacy.summaryBody": "Aera не собирает, не передаёт, не продаёт и не передаёт третьим лицам никакие личные данные. Нет аккаунтов, аналитики, рекламы и сторонних трекинг-SDK.",
      "privacy.dataH2": "Данные, которые хранятся на устройстве",
      "privacy.dataIntro": "Всё, что вы создаёте или импортируете в Aera, хранится только на вашем устройстве, в приватном хранилище приложения:",
      "privacy.dataLi1": "импортированные аудиофайлы и их метаданные (название, исполнитель, альбом, жанр);",
      "privacy.dataLi2": "обложки треков, включая фото, которые вы выбираете или делаете для трека;",
      "privacy.dataLi3": "плейлисты, очередь воспроизведения и история прослушивания/поиска;",
      "privacy.dataLi4": "настройки приложения (язык, тема, акцентный цвет).",
      "privacy.dataOutro": "Эти данные никогда не покидают ваше устройство через Aera. Они удаляются, когда вы удаляете соответствующий элемент или само приложение. Резервные копии устройства или iCloud, если вы их включаете, обрабатываются Apple и подпадают под политику конфиденциальности Apple, а не нашу.",
      "privacy.permissionsH2": "Разрешения",
      "privacy.permissionsLi": "<strong>Камера и Фото</strong> — используются исключительно для того, чтобы вы могли установить фото в качестве обложки трека. Выбранные или снятые изображения сохраняются только в вашей локальной библиотеке и никогда не загружаются на сервер. Вы можете отказать в этих разрешениях и по-прежнему пользоваться всеми остальными функциями приложения.",
      "privacy.networkH2": "Использование сети",
      "privacy.networkBody": "У Aera нет бэкенда, и приложение само по себе не делает сетевых запросов. При редактировании трека вы можете нажать кнопку, которая открывает браузер устройства для поиска обложки или текста песни. Это открывает сторонний поисковик в Safari, на который распространяется его собственная политика конфиденциальности; сама Aera ничего ему не отправляет.",
      "privacy.childrenH2": "Дети",
      "privacy.childrenBody": "Aera сознательно не собирает данные ни от кого, включая детей.",
      "privacy.changesH2": "Изменения в этой политике",
      "privacy.changesBody": "Любые обновления будут опубликованы на этой странице с новой датой «Обновлено».",
      "privacy.contactH2": "Контакты",
      "privacy.contactBody": "Вопросы об этой политике: <a href=\"mailto:support.area.dev@gmail.com\">support.area.dev@gmail.com</a>",
      "support.metaTitle": "Поддержка — Aera",
      "support.metaDescription": "Помощь по Aera: как связаться с поддержкой и ответы на частые вопросы.",
      "support.eyebrow": "Aera",
      "support.h1": "Поддержка",
      "support.lead": "Личный музыкальный плеер для iPhone, который хранит всё на устройстве.",
      "support.getHelpH2": "Связаться с нами",
      "support.emailBody": "<strong>Email:</strong> <a href=\"mailto:support.area.dev@gmail.com\">support.area.dev@gmail.com</a>",
      "support.responseTime": "Обычно отвечаем в течение 2–3 рабочих дней",
      "support.faqH2": "Частые вопросы",
      "support.faq1Q": "Как добавить музыку?",
      "support.faq1A": "Откройте любой аудиофайл в приложении «Файлы» и выберите «Поделиться» → Aera, либо используйте импорт внутри приложения. Библиотека остаётся пустой, пока вы не добавите треки.",
      "support.faq2Q": "Где хранятся мои файлы?",
      "support.faq2A": "Только на вашем устройстве — в приватном хранилище Aera и в разделе «На iPhone» → Aera приложения «Файлы». Ничего никуда не загружается.",
      "support.faq3Q": "Как установить свою обложку для трека?",
      "support.faq3A": "Откройте редактирование трека, нажмите на обложку и выберите фото из библиотеки, сделайте новое фото, вставьте изображение или найдите его в интернете.",
      "support.faq4Q": "Работает ли Aera офлайн?",
      "support.faq4A": "Да. У Aera нет аккаунтов и сервера — приложение полностью работает офлайн.",
      "support.faq5Q": "Как удалить трек?",
      "support.faq5A": "Проведите по треку в библиотеке и удалите его. Удаление трека из «Все треки» удаляет сам файл и запись о нём; удаление из другого плейлиста только убирает его из этого плейлиста.",
      "support.privacyH2": "Конфиденциальность",
      "support.privacyBody": "Aera не собирает данные. Полный текст — <a href=\"privacy.html\">Политика конфиденциальности</a>."
    },

    en: {
      "nav.skip": "Skip to content",
      "nav.homeAria": "Aera — home",
      "nav.primaryAria": "Primary",
      "nav.library": "Library",
      "nav.gestures": "Gestures",
      "nav.future": "What's next",
      "nav.themeAria": "Toggle theme",
      "nav.langAria": "Change language",
      "nav.download": "Download",
      "nav.backToSite": "Back to site",
      "footer.moreAria": "More",
      "footer.support": "Support",
      "footer.privacy": "Privacy Policy",
      "footer.tagline": "A local player: no account, no cloud, nothing extra.",
      "index.metaTitle": "Aera — a personal music player",
      "index.metaDescription": "Aera is a music player that keeps everything on your device. No tabs, no hidden settings, no clutter — just your music.",
      "hero.title": "A personal music player<br>that keeps everything on your device",
      "hero.lead": "Nothing extra. No tabs, hidden settings, or clutter — just your music.",
      "hero.ctaPrimary": "See how it works",
      "hero.imgTrackAlt": "Aera's full-screen player with album artwork",
      "hero.imgMainAlt": "Aera's \"Your Music\" home screen with the mini player",
      "library.kicker": "Your whole library, at hand",
      "library.heading": "Add, organize, find",
      "library.lead": "Add tracks, build playlists, and find what you need in seconds — no digging through menus.",
      "library.demoLabel": "Live example: the same search as in the app",
      "library.searchPlaceholder": "Search",
      "library.searchAria": "Search the demo library",
      "library.emptyResult": "Nothing found",
      "library.demoHint": "Start typing — the app searches tracks, albums, playlists, and artists at once, with no separate search button.",
      "library.imgAlt": "Aera's Library screen with playlists",
      "gestures.imgSettingsAlt": "Aera's Settings screen: import, export, and duplicate check",
      "gestures.imgTrackAlt": "Aera's track screen with tag editing",
      "gestures.kicker": "Every gesture does the obvious thing",
      "gestures.heading": "Nothing to learn. Found in seconds",
      "gestures.feature1": "Search tracks, albums, playlists, and artists at once.",
      "gestures.feature2": "Filter by how often you listen.",
      "gestures.feature3": "Free import and export with duplicate checking.",
      "gestures.feature4": "A handy tag editor: title, artist, album, and artwork.",
      "future.kicker": "What's next — only better",
      "future.heading": "Aera keeps getting better",
      "future.lead": "New features and improvements ship regularly, and your feedback shapes what's next.",
      "future.cta": "Download Aera",
      "future.note": "Via TestFlight — Apple's beta-testing program for apps",
      "privacy.metaTitle": "Privacy Policy — Aera",
      "privacy.metaDescription": "Aera privacy policy: what data stays on your device, what permissions the app asks for, and how to contact us.",
      "privacy.eyebrow": "Aera · Last updated: 30 August 2026",
      "privacy.h1": "Privacy Policy",
      "privacy.intro": "Aera is a personal, on-device music player for iPhone. This policy explains how Aera handles your information.",
      "privacy.summaryH2": "Summary",
      "privacy.summaryBody": "Aera does not collect, transmit, sell, or share any personal data. There are no accounts, no analytics, no advertising, and no third-party tracking SDKs.",
      "privacy.dataH2": "Data stored on your device",
      "privacy.dataIntro": "Everything you create or import in Aera is stored only on your device, inside the app's private container:",
      "privacy.dataLi1": "imported audio files and their metadata (title, artist, album, genre);",
      "privacy.dataLi2": "track artwork, including photos you choose or take for a track;",
      "privacy.dataLi3": "playlists, playback queue, and play/search history;",
      "privacy.dataLi4": "app settings (language, theme, accent color).",
      "privacy.dataOutro": "This data never leaves your device through Aera. It is removed when you delete the corresponding item or uninstall the app. Device or iCloud backups, if you enable them, are handled by Apple and covered by Apple's privacy policy, not ours.",
      "privacy.permissionsH2": "Permissions",
      "privacy.permissionsLi": "<strong>Camera and Photo Library</strong> — used solely so you can set a photo as a track's artwork. Selected or captured images are saved only to your local library and are never uploaded. You can decline these permissions and still use every other feature of the app.",
      "privacy.networkH2": "Network use",
      "privacy.networkBody": "Aera has no backend and makes no network requests of its own. When editing a track you may tap a button that opens your device's web browser to search for artwork or lyrics. That opens a third-party search engine in Safari, governed by that provider's own privacy policy; Aera itself sends them nothing.",
      "privacy.childrenH2": "Children",
      "privacy.childrenBody": "Aera does not knowingly collect data from anyone, including children.",
      "privacy.changesH2": "Changes to this policy",
      "privacy.changesBody": "Any updates will be posted on this page with a new \"Last updated\" date.",
      "privacy.contactH2": "Contact",
      "privacy.contactBody": "Questions about this policy: <a href=\"mailto:support.area.dev@gmail.com\">support.area.dev@gmail.com</a>",
      "support.metaTitle": "Support — Aera",
      "support.metaDescription": "Get help with Aera: contact support and find answers to frequently asked questions.",
      "support.eyebrow": "Aera",
      "support.h1": "Support",
      "support.lead": "A personal, on-device music player for iPhone.",
      "support.getHelpH2": "Get help",
      "support.emailBody": "<strong>Email:</strong> <a href=\"mailto:support.area.dev@gmail.com\">support.area.dev@gmail.com</a>",
      "support.responseTime": "Typical response time: 2–3 business days",
      "support.faqH2": "Frequently asked questions",
      "support.faq1Q": "How do I add music?",
      "support.faq1A": "Open any audio file from the Files app and choose Share → Aera, or use Import inside the app. Your library stays empty until you add tracks.",
      "support.faq2Q": "Where are my files stored?",
      "support.faq2A": "On your device only — in Aera's private storage and under On My iPhone → Aera in the Files app. Nothing is uploaded anywhere.",
      "support.faq3Q": "How do I set custom artwork for a track?",
      "support.faq3A": "Edit a track, tap the artwork, then choose a photo from your library, take a new photo, paste an image, or search the web.",
      "support.faq4Q": "Does Aera work offline?",
      "support.faq4A": "Yes. Aera has no accounts and no server — it works entirely offline.",
      "support.faq5Q": "How do I delete a track?",
      "support.faq5A": "Swipe a track in your library and remove it. Removing a track from All Tracks deletes the file and its record; removing it from another playlist only unlists it there.",
      "support.privacyH2": "Privacy",
      "support.privacyBody": "Aera collects no data. See the full <a href=\"privacy.html\">Privacy Policy</a>."
    },

    de: {
      "nav.skip": "Zum Inhalt springen",
      "nav.homeAria": "Aera — Startseite",
      "nav.primaryAria": "Hauptnavigation",
      "nav.library": "Bibliothek",
      "nav.gestures": "Gesten",
      "nav.future": "Was kommt",
      "nav.themeAria": "Design wechseln",
      "nav.langAria": "Sprache ändern",
      "nav.download": "Herunterladen",
      "nav.backToSite": "Zurück zur Seite",
      "footer.moreAria": "Mehr",
      "footer.support": "Support",
      "footer.privacy": "Datenschutz",
      "footer.tagline": "Ein lokaler Player: kein Konto, keine Cloud, nichts Überflüssiges.",
      "index.metaTitle": "Aera — ein persönlicher Musikplayer",
      "index.metaDescription": "Aera ist ein Musikplayer, der alles auf deinem Gerät speichert. Keine Tabs, keine versteckten Einstellungen, kein Ballast — nur deine Musik.",
      "hero.title": "Ein persönlicher Musikplayer,<br>der alles auf deinem Gerät speichert",
      "hero.lead": "Nichts Überflüssiges. Keine Tabs, versteckten Einstellungen oder Ballast — nur deine Musik.",
      "hero.ctaPrimary": "So funktioniert's",
      "hero.imgTrackAlt": "Vollbild-Player von Aera mit Albumcover",
      "hero.imgMainAlt": "Startbildschirm „Your Music“ von Aera mit Mini-Player",
      "library.kicker": "Deine ganze Bibliothek griffbereit",
      "library.heading": "Hinzufügen, ordnen, finden",
      "library.lead": "Tracks hinzufügen, Playlists erstellen und in Sekunden finden, was du suchst — ohne dich durch Menüs zu wühlen.",
      "library.demoLabel": "Live-Beispiel: dieselbe Suche wie in der App",
      "library.searchPlaceholder": "Suche",
      "library.searchAria": "Demo-Bibliothek durchsuchen",
      "library.emptyResult": "Nichts gefunden",
      "library.demoHint": "Einfach lostippen — die App durchsucht Tracks, Alben, Playlists und Interpreten gleichzeitig, ganz ohne eigenen Such-Button.",
      "library.imgAlt": "Bibliotheksbildschirm von Aera mit Playlists",
      "gestures.imgSettingsAlt": "Einstellungsbildschirm von Aera: Import, Export und Duplikatprüfung",
      "gestures.imgTrackAlt": "Trackbildschirm von Aera mit Tag-Editor",
      "gestures.kicker": "Jede Geste tut das Offensichtliche",
      "gestures.heading": "Nichts zu lernen. In Sekunden gefunden",
      "gestures.feature1": "Durchsucht gleichzeitig Tracks, Alben, Playlists und Interpreten.",
      "gestures.feature2": "Filter nach Hörhäufigkeit.",
      "gestures.feature3": "Freier Import und Export mit Duplikatprüfung.",
      "gestures.feature4": "Praktischer Tag-Editor: Titel, Interpret, Album und Cover.",
      "future.kicker": "Was kommt — nur besser",
      "future.heading": "Aera entwickelt sich stetig weiter",
      "future.lead": "Neue Funktionen und Verbesserungen erscheinen regelmäßig, und dein Feedback bestimmt, was als Nächstes kommt.",
      "future.cta": "Aera herunterladen",
      "future.note": "Über TestFlight — Apples Beta-Testprogramm für Apps",
      "privacy.metaTitle": "Datenschutzerklärung — Aera",
      "privacy.metaDescription": "Datenschutzerklärung von Aera: welche Daten auf deinem Gerät bleiben, welche Berechtigungen die App benötigt und wie du uns erreichst.",
      "privacy.eyebrow": "Aera · Zuletzt aktualisiert: 30. August 2026",
      "privacy.h1": "Datenschutzerklärung",
      "privacy.intro": "Aera ist ein persönlicher Musikplayer für iPhone, der Daten nur auf dem Gerät speichert. Diese Erklärung beschreibt, wie Aera mit deinen Informationen umgeht.",
      "privacy.summaryH2": "Zusammenfassung",
      "privacy.summaryBody": "Aera erfasst, überträgt, verkauft oder teilt keine personenbezogenen Daten. Es gibt keine Konten, keine Analyse-Tools, keine Werbung und keine Tracking-SDKs von Drittanbietern.",
      "privacy.dataH2": "Daten, die auf deinem Gerät gespeichert werden",
      "privacy.dataIntro": "Alles, was du in Aera erstellst oder importierst, wird ausschließlich auf deinem Gerät im privaten Speicherbereich der App gespeichert:",
      "privacy.dataLi1": "importierte Audiodateien und ihre Metadaten (Titel, Interpret, Album, Genre);",
      "privacy.dataLi2": "Track-Cover, einschließlich Fotos, die du für einen Track auswählst oder aufnimmst;",
      "privacy.dataLi3": "Playlists, Wiedergabewarteschlange sowie Wiedergabe- und Suchverlauf;",
      "privacy.dataLi4": "App-Einstellungen (Sprache, Design, Akzentfarbe).",
      "privacy.dataOutro": "Diese Daten verlassen dein Gerät über Aera niemals. Sie werden gelöscht, sobald du das entsprechende Element oder die App löschst. Geräte- oder iCloud-Backups, falls du sie aktivierst, werden von Apple verwaltet und unterliegen Apples Datenschutzerklärung, nicht unserer.",
      "privacy.permissionsH2": "Berechtigungen",
      "privacy.permissionsLi": "<strong>Kamera und Fotomediathek</strong> — werden ausschließlich benötigt, damit du ein Foto als Track-Cover festlegen kannst. Ausgewählte oder aufgenommene Bilder werden nur in deiner lokalen Mediathek gespeichert und nie hochgeladen. Du kannst diese Berechtigungen ablehnen und trotzdem alle anderen Funktionen der App nutzen.",
      "privacy.networkH2": "Netzwerknutzung",
      "privacy.networkBody": "Aera hat kein Backend und stellt selbst keine Netzwerkanfragen. Beim Bearbeiten eines Tracks kannst du eine Schaltfläche antippen, die den Browser deines Geräts öffnet, um nach Cover oder Songtext zu suchen. Dabei öffnet sich eine Suchmaschine eines Drittanbieters in Safari, für die dessen eigene Datenschutzerklärung gilt; Aera selbst sendet ihr nichts.",
      "privacy.childrenH2": "Kinder",
      "privacy.childrenBody": "Aera erfasst wissentlich keine Daten von irgendjemandem, auch nicht von Kindern.",
      "privacy.changesH2": "Änderungen dieser Erklärung",
      "privacy.changesBody": "Aktualisierungen werden auf dieser Seite mit einem neuen Datum „Zuletzt aktualisiert“ veröffentlicht.",
      "privacy.contactH2": "Kontakt",
      "privacy.contactBody": "Fragen zu dieser Erklärung: <a href=\"mailto:support.area.dev@gmail.com\">support.area.dev@gmail.com</a>",
      "support.metaTitle": "Support — Aera",
      "support.metaDescription": "Hilfe zu Aera: Support kontaktieren und Antworten auf häufige Fragen finden.",
      "support.eyebrow": "Aera",
      "support.h1": "Support",
      "support.lead": "Ein persönlicher Musikplayer für iPhone, der alles auf dem Gerät speichert.",
      "support.getHelpH2": "Hilfe erhalten",
      "support.emailBody": "<strong>E-Mail:</strong> <a href=\"mailto:support.area.dev@gmail.com\">support.area.dev@gmail.com</a>",
      "support.responseTime": "Antwortzeit meist 2–3 Werktage",
      "support.faqH2": "Häufig gestellte Fragen",
      "support.faq1Q": "Wie füge ich Musik hinzu?",
      "support.faq1A": "Öffne eine beliebige Audiodatei in der Dateien-App und wähle „Teilen“ → Aera, oder nutze den Import innerhalb der App. Die Bibliothek bleibt leer, bis du Tracks hinzufügst.",
      "support.faq2Q": "Wo werden meine Dateien gespeichert?",
      "support.faq2A": "Nur auf deinem Gerät — im privaten Speicher von Aera sowie unter „Auf meinem iPhone“ → Aera in der Dateien-App. Es wird nichts hochgeladen.",
      "support.faq3Q": "Wie lege ich ein eigenes Cover für einen Track fest?",
      "support.faq3A": "Track bearbeiten, auf das Cover tippen und dann ein Foto aus der Mediathek wählen, ein neues Foto aufnehmen, ein Bild einfügen oder im Web suchen.",
      "support.faq4Q": "Funktioniert Aera offline?",
      "support.faq4A": "Ja. Aera hat keine Konten und keinen Server — es funktioniert vollständig offline.",
      "support.faq5Q": "Wie lösche ich einen Track?",
      "support.faq5A": "Wische einen Track in deiner Bibliothek an und entferne ihn. Das Entfernen aus „Alle Titel“ löscht die Datei und ihren Eintrag; das Entfernen aus einer anderen Playlist nimmt ihn nur aus dieser Playlist heraus.",
      "support.privacyH2": "Datenschutz",
      "support.privacyBody": "Aera erfasst keine Daten. Vollständiger Text: <a href=\"privacy.html\">Datenschutzerklärung</a>."
    },

    uk: {
      "nav.skip": "Перейти до вмісту",
      "nav.homeAria": "Aera — на головну",
      "nav.primaryAria": "Основна навігація",
      "nav.library": "Бібліотека",
      "nav.gestures": "Жести",
      "nav.future": "Далі",
      "nav.themeAria": "Перемкнути тему",
      "nav.langAria": "Змінити мову",
      "nav.download": "Завантажити",
      "nav.backToSite": "На сайт",
      "footer.moreAria": "Додатково",
      "footer.support": "Підтримка",
      "footer.privacy": "Конфіденційність",
      "footer.tagline": "Локальний плеєр: без акаунта, без хмари, без зайвого.",
      "index.metaTitle": "Aera — особистий музичний плеєр",
      "index.metaDescription": "Aera — музичний плеєр, який зберігає все на пристрої. Жодних вкладок, прихованих налаштувань і зайвого — лише ваша музика.",
      "hero.title": "Особистий музичний плеєр,<br>який зберігає все на пристрої",
      "hero.lead": "Нічого зайвого. Жодних вкладок, прихованих налаштувань і сміття — лише ваша музика.",
      "hero.ctaPrimary": "Подивитись, як це працює",
      "hero.imgTrackAlt": "Повноекранний плеєр Aera з обкладинкою альбому",
      "hero.imgMainAlt": "Головний екран Aera «Your Music» з міні-плеєром",
      "library.kicker": "Уся бібліотека під рукою",
      "library.heading": "Додавайте, збирайте, знаходьте",
      "library.lead": "Додавайте треки, збирайте плейлисти і знаходьте потрібне за секунди — без блукань по меню.",
      "library.demoLabel": "Живий приклад: той самий пошук, що й у застосунку",
      "library.searchPlaceholder": "Пошук",
      "library.searchAria": "Пошук у демо-бібліотеці",
      "library.emptyResult": "Нічого не знайдено",
      "library.demoHint": "Почніть друкувати — застосунок шукає одразу по треках, альбомах, плейлистах і виконавцях, без окремої кнопки пошуку.",
      "library.imgAlt": "Екран «Library» з плейлистами Aera",
      "gestures.imgSettingsAlt": "Екран налаштувань Aera: імпорт, експорт і перевірка дублікатів",
      "gestures.imgTrackAlt": "Екран треку з редагуванням тегів в Aera",
      "gestures.kicker": "Кожен жест робить очевидне",
      "gestures.heading": "Вчитися нічому. Знайдеться за секунди",
      "gestures.feature1": "Пошук одразу по треках, альбомах, плейлистах і виконавцях.",
      "gestures.feature2": "Фільтр за частотою прослуховування.",
      "gestures.feature3": "Вільний імпорт та експорт треків із перевіркою на дублікати.",
      "gestures.feature4": "Зручний редактор тегів: назва, виконавець, альбом і обкладинка.",
      "future.kicker": "Далі — тільки краще",
      "future.heading": "Aera активно розвивається",
      "future.lead": "Нові можливості та покращення виходять регулярно, а ваші відгуки визначають, що буде далі.",
      "future.cta": "Завантажити Aera",
      "future.note": "Через TestFlight — бета-програму Apple для тестування застосунків",
      "privacy.metaTitle": "Політика конфіденційності — Aera",
      "privacy.metaDescription": "Політика конфіденційності Aera: які дані залишаються на пристрої, які дозволи запитує застосунок і як з нами зв'язатися.",
      "privacy.eyebrow": "Aera · Оновлено: 30 серпня 2026",
      "privacy.h1": "Політика конфіденційності",
      "privacy.intro": "Aera — особистий музичний плеєр для iPhone, який зберігає дані на пристрої. Ця політика пояснює, як Aera поводиться з вашою інформацією.",
      "privacy.summaryH2": "Коротко",
      "privacy.summaryBody": "Aera не збирає, не передає, не продає і не ділиться жодними особистими даними. Немає акаунтів, аналітики, реклами та сторонніх трекінг-SDK.",
      "privacy.dataH2": "Дані, що зберігаються на пристрої",
      "privacy.dataIntro": "Усе, що ви створюєте або імпортуєте в Aera, зберігається лише на вашому пристрої, у приватному сховищі застосунку:",
      "privacy.dataLi1": "імпортовані аудіофайли та їхні метадані (назва, виконавець, альбом, жанр);",
      "privacy.dataLi2": "обкладинки треків, зокрема фото, які ви обираєте чи робите для треку;",
      "privacy.dataLi3": "плейлисти, черга відтворення та історія прослуховування/пошуку;",
      "privacy.dataLi4": "налаштування застосунку (мова, тема, акцентний колір).",
      "privacy.dataOutro": "Ці дані ніколи не залишають ваш пристрій через Aera. Вони видаляються, коли ви видаляєте відповідний елемент або сам застосунок. Резервні копії пристрою чи iCloud, якщо ви їх увімкнули, обробляє Apple, і на них поширюється політика конфіденційності Apple, а не наша.",
      "privacy.permissionsH2": "Дозволи",
      "privacy.permissionsLi": "<strong>Камера та Фото</strong> — використовуються лише для того, щоб ви могли встановити фото як обкладинку треку. Вибрані чи зняті зображення зберігаються тільки у вашій локальній бібліотеці й ніколи не завантажуються. Ви можете відхилити ці дозволи й далі користуватися всіма іншими функціями застосунку.",
      "privacy.networkH2": "Використання мережі",
      "privacy.networkBody": "Aera не має бекенду і сама по собі не робить мережевих запитів. Під час редагування треку ви можете натиснути кнопку, яка відкриває браузер пристрою для пошуку обкладинки чи тексту пісні. Це відкриває сторонній пошуковик у Safari, на який поширюється його власна політика конфіденційності; сама Aera нічого йому не надсилає.",
      "privacy.childrenH2": "Діти",
      "privacy.childrenBody": "Aera свідомо не збирає дані від будь-кого, зокрема від дітей.",
      "privacy.changesH2": "Зміни в цій політиці",
      "privacy.changesBody": "Будь-які оновлення будуть опубліковані на цій сторінці з новою датою «Оновлено».",
      "privacy.contactH2": "Контакти",
      "privacy.contactBody": "Питання щодо цієї політики: <a href=\"mailto:support.area.dev@gmail.com\">support.area.dev@gmail.com</a>",
      "support.metaTitle": "Підтримка — Aera",
      "support.metaDescription": "Допомога з Aera: як зв'язатися з підтримкою та відповіді на часті запитання.",
      "support.eyebrow": "Aera",
      "support.h1": "Підтримка",
      "support.lead": "Особистий музичний плеєр для iPhone, який зберігає все на пристрої.",
      "support.getHelpH2": "Зв'язатися з нами",
      "support.emailBody": "<strong>Email:</strong> <a href=\"mailto:support.area.dev@gmail.com\">support.area.dev@gmail.com</a>",
      "support.responseTime": "Зазвичай відповідаємо протягом 2–3 робочих днів",
      "support.faqH2": "Часті запитання",
      "support.faq1Q": "Як додати музику?",
      "support.faq1A": "Відкрийте будь-який аудіофайл у застосунку «Файли» та оберіть «Поділитися» → Aera, або скористайтеся імпортом усередині застосунку. Бібліотека залишається порожньою, доки ви не додасте треки.",
      "support.faq2Q": "Де зберігаються мої файли?",
      "support.faq2A": "Лише на вашому пристрої — у приватному сховищі Aera та в розділі «На цьому iPhone» → Aera застосунку «Файли». Нічого нікуди не завантажується.",
      "support.faq3Q": "Як встановити власну обкладинку для треку?",
      "support.faq3A": "Відкрийте редагування треку, торкніться обкладинки та оберіть фото з бібліотеки, зробіть нове фото, вставте зображення або знайдіть його в інтернеті.",
      "support.faq4Q": "Чи працює Aera офлайн?",
      "support.faq4A": "Так. У Aera немає акаунтів і сервера — застосунок повністю працює офлайн.",
      "support.faq5Q": "Як видалити трек?",
      "support.faq5A": "Проведіть по треку в бібліотеці та видаліть його. Видалення треку з «Усі треки» видаляє сам файл і запис про нього; видалення з іншого плейлиста лише прибирає його з цього плейлиста.",
      "support.privacyH2": "Конфіденційність",
      "support.privacyBody": "Aera не збирає дані. Повний текст — <a href=\"privacy.html\">Політика конфіденційності</a>."
    },

    be: {
      "nav.skip": "Перайсці да зместу",
      "nav.homeAria": "Aera — на галоўную",
      "nav.primaryAria": "Асноўная навігацыя",
      "nav.library": "Бібліятэка",
      "nav.gestures": "Жэсты",
      "nav.future": "Далей",
      "nav.themeAria": "Пераключыць тэму",
      "nav.langAria": "Змяніць мову",
      "nav.download": "Спампаваць",
      "nav.backToSite": "На сайт",
      "footer.moreAria": "Дадаткова",
      "footer.support": "Падтрымка",
      "footer.privacy": "Канфідэнцыйнасць",
      "footer.tagline": "Лакальны плэер: без акаўнта, без воблака, без лішняга.",
      "index.metaTitle": "Aera — асабісты музычны плэер",
      "index.metaDescription": "Aera — музычны плэер, які захоўвае ўсё на прыладзе. Ніякіх укладак, схаваных налад і смецця — толькі ваша музыка.",
      "hero.title": "Асабісты музычны плэер,<br>які захоўвае ўсё на прыладзе",
      "hero.lead": "Нічога лішняга. Ніякіх укладак, схаваных налад і смецця — толькі ваша музыка.",
      "hero.ctaPrimary": "Паглядзець, як гэта працуе",
      "hero.imgTrackAlt": "Поўнаэкранны плэер Aera з вокладкай альбома",
      "hero.imgMainAlt": "Галоўны экран Aera «Your Music» з міні-плэерам",
      "library.kicker": "Уся бібліятэка пад рукой",
      "library.heading": "Дадавайце, збірайце, знаходзьце",
      "library.lead": "Дадавайце трэкі, збірайце плэйлісты і знаходзьце патрэбнае за секунды — без блукання па меню.",
      "library.demoLabel": "Жывы прыклад: той жа пошук, што і ў праграме",
      "library.searchPlaceholder": "Пошук",
      "library.searchAria": "Пошук па дэма-бібліятэцы",
      "library.emptyResult": "Нічога не знойдзена",
      "library.demoHint": "Пачніце друкаваць — праграма шукае адразу па трэках, альбомах, плэйлістах і выканаўцах, без асобнай кнопкі пошуку.",
      "library.imgAlt": "Экран «Library» з плэйлістамі Aera",
      "gestures.imgSettingsAlt": "Экран налад Aera: імпарт, экспарт і праверка дублікатаў",
      "gestures.imgTrackAlt": "Экран трэка з рэдагаваннем тэгаў у Aera",
      "gestures.kicker": "Кожны жэст робіць відавочнае",
      "gestures.heading": "Вучыцца няма чаму. Знойдзецца за секунды",
      "gestures.feature1": "Пошук адразу па трэках, альбомах, плэйлістах і выканаўцах.",
      "gestures.feature2": "Фільтр па частаце праслухоўвання.",
      "gestures.feature3": "Свабодны імпарт і экспарт трэкаў з праверкай на дублікаты.",
      "gestures.feature4": "Зручны рэдактар тэгаў: назва, выканаўца, альбом і вокладка.",
      "future.kicker": "Далей — толькі лепш",
      "future.heading": "Aera актыўна развіваецца",
      "future.lead": "Новыя магчымасці і паляпшэнні выходзяць рэгулярна, а вашы водгукі вызначаюць, што будзе далей.",
      "future.cta": "Спампаваць Aera",
      "future.note": "Праз TestFlight — бэта-праграму Apple для тэсціравання праграм",
      "privacy.metaTitle": "Палітыка канфідэнцыйнасці — Aera",
      "privacy.metaDescription": "Палітыка канфідэнцыйнасці Aera: якія дадзеныя застаюцца на прыладзе, якія дазволы запытвае праграма і як з намі звязацца.",
      "privacy.eyebrow": "Aera · Абноўлена: 30 жніўня 2026",
      "privacy.h1": "Палітыка канфідэнцыйнасці",
      "privacy.intro": "Aera — асабісты музычны плэер для iPhone, які захоўвае дадзеныя на прыладзе. Гэтая палітыка тлумачыць, як Aera апрацоўвае вашу інфармацыю.",
      "privacy.summaryH2": "Коратка",
      "privacy.summaryBody": "Aera не збірае, не перадае, не прадае і не дзеліцца ніякімі асабістымі дадзенымі. Няма акаўнтаў, аналітыкі, рэкламы і старонніх трэкінг-SDK.",
      "privacy.dataH2": "Дадзеныя, якія захоўваюцца на прыладзе",
      "privacy.dataIntro": "Усё, што вы ствараеце або імпартуеце ў Aera, захоўваецца толькі на вашай прыладзе, у прыватным сховішчы праграмы:",
      "privacy.dataLi1": "імпартаваныя аўдыяфайлы і іх метаданыя (назва, выканаўца, альбом, жанр);",
      "privacy.dataLi2": "вокладкі трэкаў, у тым ліку фота, якія вы выбіраеце або робіце для трэка;",
      "privacy.dataLi3": "плэйлісты, чарга прайгравання і гісторыя праслухоўвання/пошуку;",
      "privacy.dataLi4": "налады праграмы (мова, тэма, акцэнтны колер).",
      "privacy.dataOutro": "Гэтыя дадзеныя ніколі не пакідаюць вашу прыладу праз Aera. Яны выдаляюцца, калі вы выдаляеце адпаведны элемент або саму праграму. Рэзервовыя копіі прылады або iCloud, калі вы іх уключаеце, апрацоўваюцца Apple і падпадаюць пад палітыку канфідэнцыйнасці Apple, а не нашу.",
      "privacy.permissionsH2": "Дазволы",
      "privacy.permissionsLi": "<strong>Камера і Фота</strong> — выкарыстоўваюцца выключна для таго, каб вы маглі ўстанавіць фота ў якасці вокладкі трэка. Выбраныя або зробленыя выявы захоўваюцца толькі ў вашай лакальнай бібліятэцы і ніколі не загружаюцца. Вы можаце адмовіць у гэтых дазволах і па-ранейшаму карыстацца ўсімі астатнімі функцыямі праграмы.",
      "privacy.networkH2": "Выкарыстанне сеткі",
      "privacy.networkBody": "У Aera няма бэкенда, і праграма сама па сабе не робіць сеткавых запытаў. Пры рэдагаванні трэка вы можаце націснуць кнопку, якая адкрывае браўзер прылады для пошуку вокладкі або тэксту песні. Гэта адкрывае старонні пошукавік у Safari, на які пашыраецца яго ўласная палітыка канфідэнцыйнасці; сама Aera нічога яму не адпраўляе.",
      "privacy.childrenH2": "Дзеці",
      "privacy.childrenBody": "Aera свядома не збірае дадзеныя ні ад кога, у тым ліку ад дзяцей.",
      "privacy.changesH2": "Змены ў гэтай палітыцы",
      "privacy.changesBody": "Любыя абнаўленні будуць апублікаваны на гэтай старонцы з новай датай «Абноўлена».",
      "privacy.contactH2": "Кантакты",
      "privacy.contactBody": "Пытанні пра гэтую палітыку: <a href=\"mailto:support.area.dev@gmail.com\">support.area.dev@gmail.com</a>",
      "support.metaTitle": "Падтрымка — Aera",
      "support.metaDescription": "Дапамога па Aera: як звязацца з падтрымкай і адказы на частыя пытанні.",
      "support.eyebrow": "Aera",
      "support.h1": "Падтрымка",
      "support.lead": "Асабісты музычны плэер для iPhone, які захоўвае ўсё на прыладзе.",
      "support.getHelpH2": "Звязацца з намі",
      "support.emailBody": "<strong>Email:</strong> <a href=\"mailto:support.area.dev@gmail.com\">support.area.dev@gmail.com</a>",
      "support.responseTime": "Звычайна адказваем на працягу 2–3 працоўных дзён",
      "support.faqH2": "Частыя пытанні",
      "support.faq1Q": "Як дадаць музыку?",
      "support.faq1A": "Адкрыйце любы аўдыяфайл у праграме «Файлы» і абярыце «Падзяліцца» → Aera, або скарыстайцеся імпартам унутры праграмы. Бібліятэка застаецца пустой, пакуль вы не дадасце трэкі.",
      "support.faq2Q": "Дзе захоўваюцца мае файлы?",
      "support.faq2A": "Толькі на вашай прыладзе — у прыватным сховішчы Aera і ў раздзеле «На гэтым iPhone» → Aera праграмы «Файлы». Нічога нікуды не загружаецца.",
      "support.faq3Q": "Як усталяваць сваю вокладку для трэка?",
      "support.faq3A": "Адкрыйце рэдагаванне трэка, націсніце на вокладку і абярыце фота з бібліятэкі, зрабіце новае фота, устаўце выяву або знайдзіце яе ў інтэрнэце.",
      "support.faq4Q": "Ці працуе Aera афлайн?",
      "support.faq4A": "Так. У Aera няма акаўнтаў і сервера — праграма цалкам працуе афлайн.",
      "support.faq5Q": "Як выдаліць трэк?",
      "support.faq5A": "Правядзіце па трэку ў бібліятэцы і выдаліце яго. Выдаленне трэка з «Усе трэкі» выдаляе сам файл і запіс пра яго; выдаленне з іншага плэйліста толькі прыбірае яго з гэтага плэйліста.",
      "support.privacyH2": "Канфідэнцыйнасць",
      "support.privacyBody": "Aera не збірае дадзеныя. Поўны тэкст — <a href=\"privacy.html\">Палітыка канфідэнцыйнасці</a>."
    },

    bg: {
      "nav.skip": "Към съдържанието",
      "nav.homeAria": "Aera — начало",
      "nav.primaryAria": "Основна навигация",
      "nav.library": "Библиотека",
      "nav.gestures": "Жестове",
      "nav.future": "Напред",
      "nav.themeAria": "Смяна на темата",
      "nav.langAria": "Смяна на езика",
      "nav.download": "Изтегляне",
      "nav.backToSite": "Към сайта",
      "footer.moreAria": "Още",
      "footer.support": "Поддръжка",
      "footer.privacy": "Поверителност",
      "footer.tagline": "Локален плейър: без акаунт, без облак, без излишно.",
      "index.metaTitle": "Aera — личен музикален плейър",
      "index.metaDescription": "Aera е музикален плейър, който съхранява всичко на устройството. Без раздели, без скрити настройки, без излишно — само вашата музика.",
      "hero.title": "Личен музикален плейър,<br>който съхранява всичко на устройството",
      "hero.lead": "Нищо излишно. Без раздели, скрити настройки или бъркотия — само вашата музика.",
      "hero.ctaPrimary": "Вижте как работи",
      "hero.imgTrackAlt": "Пълноекранен плейър на Aera с корица на албум",
      "hero.imgMainAlt": "Начален екран на Aera „Your Music“ с мини плейър",
      "library.kicker": "Цялата ви библиотека под ръка",
      "library.heading": "Добавяйте, организирайте, откривайте",
      "library.lead": "Добавяйте песни, създавайте плейлисти и намирайте нужното за секунди — без ровене в менюта.",
      "library.demoLabel": "Демонстрация на живо: същото търсене, както в приложението",
      "library.searchPlaceholder": "Търсене",
      "library.searchAria": "Търсене в демо библиотеката",
      "library.emptyResult": "Нищо не е намерено",
      "library.demoHint": "Започнете да пишете — приложението търси едновременно в песни, албуми, плейлисти и изпълнители, без отделен бутон за търсене.",
      "library.imgAlt": "Екран „Library“ с плейлисти на Aera",
      "gestures.imgSettingsAlt": "Екран с настройки на Aera: импортиране, експортиране и проверка за дубликати",
      "gestures.imgTrackAlt": "Екран на песен с редактиране на тагове в Aera",
      "gestures.kicker": "Всеки жест прави очевидното",
      "gestures.heading": "Няма какво да учите. Намира се за секунди",
      "gestures.feature1": "Търсене едновременно в песни, албуми, плейлисти и изпълнители.",
      "gestures.feature2": "Филтър по честота на слушане.",
      "gestures.feature3": "Свободен импорт и експорт на песни с проверка за дубликати.",
      "gestures.feature4": "Удобен редактор на тагове: заглавие, изпълнител, албум и обложка.",
      "future.kicker": "Напред — само по-добре",
      "future.heading": "Aera се развива активно",
      "future.lead": "Нови функции и подобрения излизат редовно, а вашите отзиви определят какво следва.",
      "future.cta": "Изтеглете Aera",
      "future.note": "Чрез TestFlight — бета програмата на Apple за тестване на приложения",
      "privacy.metaTitle": "Политика за поверителност — Aera",
      "privacy.metaDescription": "Политика за поверителност на Aera: какви данни остават на устройството, какви разрешения иска приложението и как да се свържете с нас.",
      "privacy.eyebrow": "Aera · Последна актуализация: 30 август 2026 г.",
      "privacy.h1": "Политика за поверителност",
      "privacy.intro": "Aera е личен музикален плейър за iPhone, който съхранява данните на устройството. Тази политика обяснява как Aera обработва вашата информация.",
      "privacy.summaryH2": "Обобщение",
      "privacy.summaryBody": "Aera не събира, не предава, не продава и не споделя никакви лични данни. Няма акаунти, анализи, реклами и SDK за проследяване от трети страни.",
      "privacy.dataH2": "Данни, съхранявани на устройството ви",
      "privacy.dataIntro": "Всичко, което създавате или импортирате в Aera, се съхранява само на вашето устройство, в частния контейнер на приложението:",
      "privacy.dataLi1": "импортирани аудиофайлове и техните метаданни (заглавие, изпълнител, албум, жанр);",
      "privacy.dataLi2": "обложки на песни, включително снимки, които избирате или правите за дадена песен;",
      "privacy.dataLi3": "плейлисти, опашка за възпроизвеждане и история на слушане/търсене;",
      "privacy.dataLi4": "настройки на приложението (език, тема, акцентен цвят).",
      "privacy.dataOutro": "Тези данни никога не напускат устройството ви чрез Aera. Те се изтриват, когато изтриете съответния елемент или самото приложение. Резервните копия на устройството или iCloud, ако ги активирате, се обработват от Apple и се уреждат от политиката за поверителност на Apple, а не от нашата.",
      "privacy.permissionsH2": "Разрешения",
      "privacy.permissionsLi": "<strong>Камера и фото библиотека</strong> — използват се единствено за да зададете снимка като обложка на песен. Избраните или заснетите изображения се съхраняват само във вашата локална библиотека и никога не се качват. Можете да откажете тези разрешения и пак да използвате всички останали функции на приложението.",
      "privacy.networkH2": "Използване на мрежата",
      "privacy.networkBody": "Aera няма бекенд и сама по себе си не прави мрежови заявки. При редактиране на песен можете да натиснете бутон, който отваря браузъра на устройството за търсене на обложка или текст на песента. Това отваря търсачка на трета страна в Safari, за която важи нейната собствена политика за поверителност; самата Aera не ѝ изпраща нищо.",
      "privacy.childrenH2": "Деца",
      "privacy.childrenBody": "Aera съзнателно не събира данни от никого, включително от деца.",
      "privacy.changesH2": "Промени в тази политика",
      "privacy.changesBody": "Всички актуализации ще бъдат публикувани на тази страница с нова дата „Последна актуализация“.",
      "privacy.contactH2": "Контакт",
      "privacy.contactBody": "Въпроси относно тази политика: <a href=\"mailto:support.area.dev@gmail.com\">support.area.dev@gmail.com</a>",
      "support.metaTitle": "Поддръжка — Aera",
      "support.metaDescription": "Получете помощ за Aera: свържете се с поддръжката и намерете отговори на често задавани въпроси.",
      "support.eyebrow": "Aera",
      "support.h1": "Поддръжка",
      "support.lead": "Личен музикален плейър за iPhone, който съхранява всичко на устройството.",
      "support.getHelpH2": "Получаване на помощ",
      "support.emailBody": "<strong>Имейл:</strong> <a href=\"mailto:support.area.dev@gmail.com\">support.area.dev@gmail.com</a>",
      "support.responseTime": "Обичайно време за отговор: 2–3 работни дни",
      "support.faqH2": "Често задавани въпроси",
      "support.faq1Q": "Как да добавя музика?",
      "support.faq1A": "Отворете произволен аудиофайл от приложението Files и изберете Share → Aera, или използвайте импортиране вътре в приложението. Библиотеката остава празна, докато не добавите песни.",
      "support.faq2Q": "Къде се съхраняват файловете ми?",
      "support.faq2A": "Само на вашето устройство — в частното хранилище на Aera и в On My iPhone → Aera в приложението Files. Нищо не се качва никъде.",
      "support.faq3Q": "Как да задам собствена обложка за песен?",
      "support.faq3A": "Редактирайте песен, докоснете обложката и след това изберете снимка от библиотеката си, направете нова снимка, поставете изображение или потърсете в интернет.",
      "support.faq4Q": "Работи ли Aera офлайн?",
      "support.faq4A": "Да. Aera няма акаунти и сървър — работи изцяло офлайн.",
      "support.faq5Q": "Как да изтрия песен?",
      "support.faq5A": "Плъзнете песен в библиотеката си и я премахнете. Премахването на песен от All Tracks изтрива файла и записа за него; премахването от друг плейлист само я маха от него.",
      "support.privacyH2": "Поверителност",
      "support.privacyBody": "Aera не събира данни. Вижте пълния текст на <a href=\"privacy.html\">Политиката за поверителност</a>."
    }
  };

  const ATTR_MAP = {
    'data-i18n-placeholder': 'placeholder',
    'data-i18n-aria-label': 'aria-label',
    'data-i18n-alt': 'alt',
    'data-i18n-content': 'content',
    'data-i18n-title': 'title'
  };

  const getStored = () => {
    try {
      return localStorage.getItem(LANG_KEY);
    } catch (err) {
      return null;
    }
  };

  const setStored = (lang) => {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (err) {
      /* storage unavailable — language still applies for this session */
    }
  };

  const detectLanguage = () => {
    const stored = getStored();
    if (stored && SUPPORTED_LANGS.includes(stored)) return stored;

    const navLangs = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || FALLBACK_LANG];

    for (const raw of navLangs) {
      const code = String(raw).toLowerCase().split('-')[0];
      if (SUPPORTED_LANGS.includes(code)) return code;
    }
    return FALLBACK_LANG;
  };

  const langToggle = document.getElementById('langToggle');
  const langToggleCode = document.getElementById('langToggleCode');
  const langMenu = document.getElementById('langMenu');

  const applyLanguage = (lang) => {
    const dict = I18N[lang] || I18N[FALLBACK_LANG];
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    Object.keys(ATTR_MAP).forEach((dataAttr) => {
      const realAttr = ATTR_MAP[dataAttr];
      document.querySelectorAll(`[${dataAttr}]`).forEach((el) => {
        const key = el.getAttribute(dataAttr);
        if (dict[key] != null) el.setAttribute(realAttr, dict[key]);
      });
    });

    if (langToggleCode) langToggleCode.textContent = lang.toUpperCase();
    if (langMenu) {
      langMenu.querySelectorAll('[data-lang]').forEach((li) => {
        li.setAttribute('aria-selected', li.getAttribute('data-lang') === lang ? 'true' : 'false');
      });
    }
  };

  const setLanguage = (lang, persist) => {
    applyLanguage(lang);
    if (persist) setStored(lang);
  };

  setLanguage(detectLanguage(), false);

  /* ---------- Language switcher menu ---------- */
  if (langToggle && langMenu) {
    const closeMenu = () => {
      langMenu.hidden = true;
      langToggle.setAttribute('aria-expanded', 'false');
    };
    const openMenu = () => {
      langMenu.hidden = false;
      langToggle.setAttribute('aria-expanded', 'true');
    };

    langToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (langMenu.hidden) openMenu(); else closeMenu();
    });

    langMenu.addEventListener('click', (e) => {
      const option = e.target.closest('[data-lang]');
      if (!option) return;
      setLanguage(option.getAttribute('data-lang'), true);
      closeMenu();
      langToggle.focus();
    });

    document.addEventListener('click', (e) => {
      if (!langMenu.hidden && !e.target.closest('.lang-switcher')) closeMenu();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !langMenu.hidden) {
        closeMenu();
        langToggle.focus();
      }
    });
  }
})();
