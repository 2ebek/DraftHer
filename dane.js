// DraftHer – wspólne dane i stan aplikacji (używane przez mapa.html i pracodawca.html)

const getFallback = (name) => `https://placehold.co/100x100/111111/E5FF00?text=${name.charAt(0)}&font=montserrat`;
// onerror=null zapobiega nieskończonej pętli, gdyby zastępczy obrazek też się nie wczytał
const imgTag = (company, cls = '') => `<img src="${company.icon}" ${cls ? `class="${cls}"` : ''} alt="${company.name}" onerror="this.onerror=null; this.src='${getFallback(company.name)}'">`;

// Polska odmiana: 1 miejsce, 2-4 miejsca, 5+ miejsc (12-14 -> miejsc)
const seatsWord = (n) => {
    if (n === 1) return 'MIEJSCE';
    if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14)) return 'MIEJSCA';
    return 'MIEJSC';
};

// --- 2. Baza Danych ---
const companies = [
    { 
        id: 1, name: "PrimeBit Games", title: "Dzień z Game Devem", category: "tech", city: "Rzeszów", lat: 50.07058, lng: 21.97042, tag: "NOWE", 
        icon: "img/PBlogo.png", availableSeats: 3,
        date: "23 Października 2026", time: "09:00 - 14:00", desc: "Zobacz jak działa produkcja gier komputerowych na żywo.",
        fullDesc: "Zanurz się w świecie kodu! Podczas tego Job Shadowingu zobaczysz, jak wygląda prawdziwy dzień programisty gier komputerowych. Nie potrzebujesz żadnego doświadczenia.",
        schedule: [{ time: "09:00", event: "Poranna kawa i intro" }, { time: "10:30", event: "Pair programming" }, { time: "13:00", event: "Wspólna pizza 🍕" }]
    },
    { 
        id: 2, name: "Asseco Poland", title: "Architektura Systemów Bankowych", category: "tech", city: "Rzeszów", lat: 50.05168, lng: 22.03324, tag: "PRESTIŻ", 
        icon: "img/asseco.png", availableSeats: 5,
        date: "26 Października 2026", time: "08:30 - 15:00", desc: "Poznaj kulisy tworzenia systemów dla największych banków.",
        fullDesc: "Spędź dzień w największej firmie IT w Polsce. Zobaczysz jak zarządza się projektami o skali globalnej.",
        schedule: [{ time: "08:30", event: "Daily Stand-up" }, { time: "11:00", event: "Analiza systemowa" }, { time: "14:00", event: "Sesja Q&A z Architektem" }]
    },
    { 
        id: 3, name: "Spidruk", title: "Logo i identyfikacja wizualna", category: "design", city: "Rzeszów", lat: 50.02284, lng: 21.97448, tag: "HOT", 
        icon: "img/spidruk.png", availableSeats: 1,
        date: "28 Października 2026", time: "10:00 - 15:00", desc: "Tworzenie logotypów na zamówienie",
        fullDesc: "Tworzymy spójne i unikalne elementy wizualne, które pomogą markom wyróżnić się na tle konkurencji.",
        schedule: [{ time: "10:00", event: "Concept Art" }, { time: "12:00", event: "Wydruk" }, { time: "14:30", event: "Testowanie prototypu" }]
    },
    { 
        id: 4, name: "Art Studio", title: "Branding i UX Design", category: "design", city: "Rzeszów", lat: 50.02460, lng: 22.03210, tag: "KREATYWNIE", 
        icon: "img/artstudio.png", availableSeats: 4,
        date: "2 Listopada 2026", time: "09:00 - 14:00", desc: "Projektowanie identyfikacji wizualnej marek.",
        fullDesc: "Zobacz jak powstają logotypy i interfejsy aplikacji mobilnych, z których korzystają tysiące ludzi.",
        schedule: [{ time: "09:00", event: "Burza mózgów" }, { time: "11:00", event: "Praca w Figmie" }, { time: "13:30", event: "Prezentacja dla klienta" }]
    },
    { 
        id: 5, name: "YASUMI Rzeszów", title: "Technologie w Kosmetologii", category: "beauty", city: "Rzeszów", lat: 50.01620, lng: 22.011680, tag: "SPA", 
        icon: "img/yasumi.png", availableSeats: 2,
        date: "5 Listopada 2026", time: "10:00 - 16:00", desc: "Zaawansowane zabiegi pielęgnacyjne twarzy i ciała.",
        fullDesc: "Poznaj japońskie rytuały pielęgnacyjne i zobacz jak obsługuje się nowoczesne urządzenia laserowe.",
        schedule: [{ time: "10:00", event: "Analiza cery" }, { time: "12:30", event: "Pokaz zabiegu Hi-Fu" }, { time: "15:00", event: "Dobór kosmetyków" }]
    },
    { 
        id: 6, name: "Beauty Lab", title: "Zarządzanie Premium SPA", category: "beauty", city: "Rzeszów", lat: 50.02753, lng: 22.03857, tag: "ELEGANCJA", 
        icon: "img/beautylab.png", availableSeats: 3,
        date: "9 Listopada 2026", time: "09:00 - 14:00", desc: "Standardy obsługi klienta w branży Beauty.",
        fullDesc: "Sprawdź jak funkcjonuje jeden z najbardziej rozpoznawalnych instytutów piękna w Polsce.",
        schedule: [{ time: "09:00", event: "Standardy Beauty Lab" }, { time: "11:00", event: "Laboratorium piękna" }, { time: "13:00", event: "Konsultacje" }]
    },
    { 
        id: 7, name: "Restauracja Oranżeria", title: "Fine Dining od podstaw", category: "kuchnia", city: "Rzeszów", lat: 50.042, lng: 21.99793, tag: "PYCHA", 
        icon: "img/oranzeria.png", availableSeats: 2,
        date: "10 Listopada 2026", time: "12:00 - 18:00", desc: "Przygotowanie menu degustacyjnego.",
        fullDesc: "Wejdź do kuchni jednej z najlepszych restauracji w Rzeszowie i zobacz pracę pod presją czasu.",
        schedule: [{ time: "12:00", event: "Mise en place" }, { time: "14:00", event: "Serwis lunchowy" }, { time: "17:00", event: "Plating (wykładanie)" }]
    },
    { 
        id: 8, name: "Browar Rzeszowski", title: "Sztuka Warzenia Piwa", category: "kuchnia", city: "Rzeszów", lat: 50.038, lng: 22.005, tag: "Rzemiosło", 
        icon: "img/browar.png", availableSeats: 6,
        date: "12 Listopada 2026", time: "10:00 - 14:00", desc: "Proces produkcji piwa rzemieślniczego.",
        fullDesc: "Dowiedz się, jak tradycja łączy się z nowoczesną technologią produkcji napojów.",
        schedule: [{ time: "10:00", event: "Warzelnia" }, { time: "11:30", event: "Fermentacja" }, { time: "13:30", event: "Degustacja sensoryczna" }]
    },
    { 
        id: 9, name: "Porsche Centrum Rzeszów", title: "Mechanika Aut Premium", category: "moto", city: "Rzeszów", lat: 50.07248, lng: 22.02093, tag: "SZYBKO", 
        icon: "img/porsche.png", availableSeats: 2,
        date: "16 Listopada 2026", time: "08:00 - 15:00", desc: "Serwis i diagnostyka samochodów sportowych.",
        fullDesc: "Zobacz jak wygląda serwisowanie najnowocześniejszych aut sportowych i elektrycznych (Taycan).",
        schedule: [{ time: "08:00", event: "Przyjęcie do serwisu" }, { time: "10:00", event: "Diagnostyka komputerowa" }, { time: "13:00", event: "Jazda testowa" }]
    },
    { 
        id: 10, name: "Harley-Davidson Rzeszów", title: "Świat Motocykli Custom", category: "moto", city: "Rzeszów", lat: 50.06953, lng: 21.93901, tag: "LEGENDA", 
        icon: "img/harley.png", availableSeats: 4,
        date: "17 Listopada 2026", time: "10:00 - 16:00", desc: "Budowa i serwis legendarnych motocykli.",
        fullDesc: "Poczuj klimat największego salonu Harley-Davidson w tej części Europy.",
        schedule: [{ time: "10:00", event: "Showroom tour" }, { time: "12:00", event: "Personalizacja maszyn" }, { time: "15:00", event: "Detailing" }]
    },
    { 
        id: 11, name: "Omega Pilzno (Centrum Podkarpackie)", title: "Globalny Łańcuch Dostaw",  category: "logistyka", city: "Rzeszów", lat: 50.05286, lng: 22.00092, tag: "TRANSPORT", 
        icon: "img/omega.png", availableSeats: 10,
        date: "20 Listopada 2026", time: "08:00 - 16:00", desc: "Zarządzanie flotą ponad 700 ciężarówek.",
        fullDesc: "Spędź dzień w centrum logistycznym i zobacz jak planuje się trasy po całej Europie.",
        schedule: [{ time: "08:00", event: "Odprawa kierowców" }, { time: "10:00", event: "Planowanie spedycyjne" }, { time: "14:00", event: "Magazyn wysokiego składowania" }]
    },
    { 
        id: 12, name: "InPost Rzeszów", title: "Automatyzacja Paczkomatów", category: "logistyka", city: "Rzeszów", lat: 50.06786, lng: 21.93768, tag: "PACZKA", 
        icon: "img/inpost.png", availableSeats: 5,
        date: "23 Listopada 2026", time: "07:00 - 13:00", desc: "Logistyka ostatniej mili.",
        fullDesc: "Zobacz jak Twoja paczka trafia do paczkomatu w mniej niż 24 godziny.",
        schedule: [{ time: "07:00", event: "Sortownia" }, { time: "09:30", event: "Optymalizacja tras" }, { time: "12:00", event: "Serwis maszyn" }]
    },
    { 
        id: 13, name: "Klinika Rzeszów", title: "Ratownictwo w Praktyce", category: "medycyna", city: "Rzeszów", lat: 50.025, lng: 22.015, tag: "MED", 
        icon: "img/klinika.png", availableSeats: 0,
        date: "25 Listopada 2026", time: "14:00 - 18:00", desc: "Dzień na Szpitalnym Oddziale Ratunkowym.",
        fullDesc: "Wizyta tylko dla osób o mocnych nerwach. Zobacz jak wygląda triaż i praca lekarzy na SOR.",
        schedule: [{ time: "14:00", event: "Szkolenie BHP" }, { time: "15:30", event: "Obserwacja pracy" }]
    },
    { 
        id: 14, name: "Centrum Medyczne MEDYK", title: "Diagnostyka Obrazowa", category: "medycyna", city: "Rzeszów", lat: 50.02674, lng: 21.99092, tag: "ZDROWIE", 
        icon: "img/medyk.png", availableSeats: 2,
        date: "27 Listopada 2026", time: "09:00 - 14:00", desc: "Jak działa Rezonans Magnetyczny i USG?",
        fullDesc: "Poznaj nowoczesne metody wykrywania chorób i zobacz pracę techników medycznych.",
        schedule: [{ time: "09:00", event: "Praca radiologa" }, { time: "11:00", event: "Laboratorium krwi" }, { time: "13:00", event: "Interpretacja wyników" }]
    },
    { id: 15, name: "CD Projekt RED", title: "Tworzenie Światów AAA", category: "tech", city: "Kraków", lat: 50.0646, lng: 19.9449, tag: "PRESTIŻ", icon: "img/cdpr.png", availableSeats: 2, date: "30 Listopada 2026", time: "10:00 - 16:00", desc: "Jak powstawał Wiedźmin?", fullDesc: "Zwiedź słynne studio deweloperskie w Krakowie i zobacz jak artyści tworzą wirtualne miasta.", schedule: [{ time: "10:00", event: "Level Design" }, { time: "13:00", event: "Animacja Mocap" }] },
    { id: 16, name: "Google", title: "Cloud Architecture", category: "tech", city: "Warszawa", lat: 52.2319, lng: 20.9822, tag: "GLOBAL", icon: "img/google.png", availableSeats: 8, date: "10 Grudnia 2026", time: "09:00 - 15:00", desc: "Zarządzanie chmurą.", fullDesc: "Odwiedź warszawskie biuro Google i porozmawiaj z inżynierami chmurowymi.", schedule: [{ time: "09:00", event: "Warsztaty Google Cloud" }] },
    {
        id: 17, name: "Comarch", title: "Oprogramowanie dla Biznesu", category: "tech", city: "Kraków", lat: 50.08021, lng: 19.99299, tag: "LOKALNY GIGANT",
        icon: "img/comarch.png", availableSeats: 4,
        date: "16 Listopada 2026", time: "09:00 - 14:00", desc: "Zobacz, jak powstają systemy ERP i oprogramowanie dla telekomów.",
        fullDesc: "Comarch to jedna z największych polskich firm IT, z centralą właśnie w Krakowie. Zobaczysz, jak programiści, testerzy i analitycy wspólnie budują systemy używane przez firmy na całym świecie.",
        schedule: [{ time: "09:00", event: "Zwiedzanie kampusu Comarch" }, { time: "10:30", event: "Code review z zespołem" }, { time: "13:00", event: "Testy i wdrożenie" }]
    },
    {
        id: 18, name: "Motorola Solutions", title: "Systemy Łączności Ratunkowej", category: "tech", city: "Kraków", lat: 50.02036, lng: 19.89309, tag: "MISJA",
        icon: "img/motorola.png", availableSeats: 3,
        date: "19 Listopada 2026", time: "09:00 - 15:00", desc: "Oprogramowanie, z którego korzystają policja i służby ratunkowe.",
        fullDesc: "Krakowskie centrum Motorola Solutions to jeden z największych ośrodków R&D firmy na świecie. Poznasz inżynierów, którzy tworzą oprogramowanie do radiotelefonów i systemów dyspozytorskich dla służb ratunkowych.",
        schedule: [{ time: "09:00", event: "Jak działa łączność służb?" }, { time: "11:00", event: "Laboratorium radiotelefonów" }, { time: "14:00", event: "Q&A z inżynierami" }]
    },
    {
        id: 19, name: "Akamai Technologies", title: "Cyberbezpieczeństwo i Chmura", category: "tech", city: "Kraków", lat: 50.08920, lng: 19.94629, tag: "SECURITY",
        icon: "img/akamai.png", availableSeats: 5,
        date: "23 Listopada 2026", time: "10:00 - 15:00", desc: "Jak chroni się największe strony internetu przed atakami?",
        fullDesc: "Akamai obsługuje ogromną część ruchu w internecie i chroni strony przed atakami DDoS. W krakowskim biurze zobaczysz, jak inżynierowie monitorują sieć i reagują na zagrożenia w czasie rzeczywistym.",
        schedule: [{ time: "10:00", event: "Jak działa internet od środka" }, { time: "12:00", event: "Centrum monitoringu zagrożeń" }, { time: "14:00", event: "Mini-CTF dla gości" }]
    },
    {
        id: 20, name: "Sabre Polska", title: "Technologie dla Podróży", category: "tech", city: "Kraków", lat: 50.02821, lng: 19.93842, tag: "TRAVEL TECH",
        icon: "img/sabre.png", availableSeats: 2,
        date: "26 Listopada 2026", time: "09:00 - 14:00", desc: "Systemy rezerwacji, z których korzystają linie lotnicze.",
        fullDesc: "Sabre tworzy oprogramowanie, dzięki któremu linie lotnicze i biura podróży sprzedają bilety i planują loty. Zobacz, jak działa system obsługujący miliony rezerwacji dziennie.",
        schedule: [{ time: "09:00", event: "Droga biletu lotniczego" }, { time: "11:00", event: "Praca w zespole Scrum" }, { time: "13:00", event: "Prezentacja projektów" }]
    },
    {
        id: 21, name: "Brainly", title: "Edtech i Aplikacje dla Uczniów", category: "tech", city: "Kraków", lat: 50.04910, lng: 19.96568, tag: "STARTUP",
        icon: "img/brainly.png", availableSeats: 1,
        date: "30 Listopada 2026", time: "10:00 - 15:00", desc: "Kulisy aplikacji, z której korzystają miliony uczniów.",
        fullDesc: "Brainly to krakowski startup, który zbudował jedną z największych platform edukacyjnych na świecie. Zobaczysz, jak product managerowie, designerzy i programiści rozwijają aplikację opartą na AI.",
        schedule: [{ time: "10:00", event: "Startupowe śniadanie" }, { time: "11:30", event: "Warsztat UX z designerami" }, { time: "14:00", event: "Jak AI pomaga w nauce" }]
    },

    // --- MINI-ZADANIA (fikcyjne organizacje demonstracyjne) ---
    // Tworzysz mały materiał edukacyjny pod okiem mentorki i dostajesz feedback.
    {
        id: 22, name: "RoboLab Kraków", title: "Zaprogramuj ramię robota", category: "tech", city: "Kraków", lat: 50.06600, lng: 19.91800, tag: "ROBOTYKA",
        icon: "img/robolab.png", availableSeats: 3,
        date: "21 Października 2026", time: "10:00 - 14:00", desc: "Mini-zadanie: nagraj krótką instrukcję ruchu robota.",
        fullDesc: "W laboratorium robotyki zaprogramujesz prostą sekwencję ruchów ramienia robota, a potem nagrasz 2-minutowe wideo, które wyjaśni ją innym uczennicom. Mentorka oceni Twój materiał i podpowie, co poprawić.",
        schedule: [{ time: "10:00", event: "Jak działa ramię robota" }, { time: "11:00", event: "Programowanie sekwencji ruchów" }, { time: "13:00", event: "Nagranie instrukcji + feedback" }]
    },
    {
        id: 23, name: "Pracownia Miejska Rzeszów", title: "Zaprojektuj przyjazny przystanek", category: "design", city: "Rzeszów", lat: 50.03750, lng: 22.00450, tag: "URBANISTYKA",
        icon: "img/pracownia.png", availableSeats: 4,
        date: "4 Listopada 2026", time: "09:00 - 13:00", desc: "Mini-zadanie: plakat z pomysłem na lepszy przystanek.",
        fullDesc: "Wyjdziesz z urbanistką w teren, sprawdzisz, czego brakuje na prawdziwym przystanku (cień, ławka, oświetlenie, dostępność), a potem przygotujesz plakat z własną propozycją zmian. Na koniec dostaniesz pisemny feedback.",
        schedule: [{ time: "09:00", event: "Spacer badawczy po okolicy" }, { time: "10:30", event: "Szkic projektu" }, { time: "12:00", event: "Plakat i omówienie z mentorką" }]
    },
    {
        id: 24, name: "DataGirls Studio", title: "Twój pierwszy wykres z danych", category: "tech", city: "Rzeszów", lat: 50.02000, lng: 21.98500, tag: "DATA",
        icon: "img/datagirls.png", availableSeats: 5,
        date: "13 Listopada 2026", time: "14:00 - 17:00", desc: "Mini-zadanie: infografika z prawdziwych danych o mieście.",
        fullDesc: "Analityczka danych pokaże Ci, jak z tabeli liczb zrobić czytelną historię. Na otwartych danych o Rzeszowie przygotujesz jedną infografikę, a mentorka oceni, czy jest zrozumiała i rzetelna. Możesz pracować na własnym laptopie lub naszym.",
        schedule: [{ time: "14:00", event: "Skąd brać otwarte dane" }, { time: "15:00", event: "Wykres krok po kroku" }, { time: "16:30", event: "Prezentacja infografiki + feedback" }]
    },
    {
        id: 25, name: "Garaż EV Rzeszów", title: "Jak naładować auto elektryczne?", category: "moto", city: "Rzeszów", lat: 50.06000, lng: 22.04000, tag: "ELEKTROMOBILNOŚĆ",
        icon: "img/garazev.png", availableSeats: 2,
        date: "18 Listopada 2026", time: "08:00 - 12:00", desc: "Mini-zadanie: obrazkowa instrukcja ładowania auta.",
        fullDesc: "W warsztacie samochodów elektrycznych poznasz budowę auta EV i zasady bezpieczeństwa przy wysokim napięciu. Twoim zadaniem będzie przygotowanie prostej obrazkowej instrukcji ładowania dla nowych kierowców.",
        schedule: [{ time: "08:00", event: "BHP przy wysokim napięciu" }, { time: "09:00", event: "Pod maską auta elektrycznego" }, { time: "11:00", event: "Instrukcja ładowania + feedback" }]
    },
    {
        id: 26, name: "LogiHub Kraków", title: "Zaplanuj trasę dostaw", category: "logistyka", city: "Kraków", lat: 50.08300, lng: 20.03000, tag: "PLANOWANIE",
        icon: "img/logihub.png", availableSeats: 3,
        date: "3 Grudnia 2026", time: "09:00 - 13:00", desc: "Mini-zadanie: zoptymalizuj trasę kuriera na mapie.",
        fullDesc: "Planistka transportu pokaże Ci, jak układa się trasy dla kilkudziesięciu kurierów. Dostaniesz listę 10 adresów i ułożysz najkrótszą trasę, a potem porównasz ją z wynikiem programu. Przyda się podstawowa znajomość arkusza kalkulacyjnego.",
        schedule: [{ time: "09:00", event: "Centrum planowania tras" }, { time: "10:30", event: "Twoja trasa w arkuszu" }, { time: "12:00", event: "Porównanie z algorytmem + feedback" }]
    },
    {
        id: 27, name: "Apteka Zdrowie+", title: "Ulotka o bezpiecznych lekach", category: "medycyna", city: "Rzeszów", lat: 50.04500, lng: 21.97000, tag: "FARMACJA",
        icon: "img/apteka.png", availableSeats: 2,
        date: "8 Grudnia 2026", time: "12:00 - 15:00", desc: "Mini-zadanie: ulotka dla nastolatków o stosowaniu leków.",
        fullDesc: "Farmaceutka opowie, jak wygląda praca w aptece i dlaczego dawkowanie ma znaczenie. Przygotujesz krótką ulotkę dla rówieśników o bezpiecznym stosowaniu leków przeciwbólowych, a mentorka sprawdzi jej poprawność merytoryczną.",
        schedule: [{ time: "12:00", event: "Dzień w aptece od zaplecza" }, { time: "13:00", event: "Tworzenie ulotki" }, { time: "14:30", event: "Weryfikacja merytoryczna + feedback" }]
    }
];

// Rola mentorki prowadzącej każdą wizytę (DraftHer: każdą wizytę prowadzi kobieta z branży)
const mentorRoles = {
    1: "Programistka gier", 2: "Architektka systemów", 3: "Graficzka", 4: "Projektantka UX",
    5: "Kosmetolożka", 6: "Menedżerka salonu", 7: "Szefowa kuchni", 8: "Piwowarka",
    9: "Mechatroniczka", 10: "Mechaniczka motocyklowa", 11: "Spedytorka", 12: "Kierowniczka sortowni",
    13: "Ratowniczka medyczna", 14: "Elektroradiolożka", 15: "Level designerka", 16: "Inżynierka chmury",
    17: "Inżynierka oprogramowania", 18: "Inżynierka systemów łączności", 19: "Specjalistka ds. cyberbezpieczeństwa",
    20: "Analityczka danych", 21: "Product managerka",
    22: "Inżynierka robotyki", 23: "Urbanistka", 24: "Analityczka danych", 25: "Inżynierka elektromobilności",
    26: "Planistka transportu", 27: "Farmaceutka"
};
companies.forEach(c => { c.mentor = mentorRoles[c.id] || "Mentorka z branży"; });

// --- FORMAT I DOSTĘPNOŚĆ OFERT (filtry z FAQ: "bez doświadczenia", format, dostępność) ---
// Job shadowing: towarzyszysz osobie przy pracy. Mini-zadanie: tworzysz mały materiał i dostajesz feedback.
const FORMATS = {
    shadowing: { label: 'Job shadowing', icon: '👀' },
    task:      { label: 'Mini-zadanie', icon: '✍️' }
};
const MINI_TASK_IDS = [1, 3, 4, 15, 21, 22, 23, 24, 25, 26, 27];           // oferty w formacie mini-zadania
const EXPERIENCE_REQUIRED_IDS = [2, 13, 16, 19, 26];  // oferty wymagające podstaw – reszta "bez doświadczenia"
const NOT_ACCESSIBLE_IDS = [7, 8, 10, 13, 22, 25];  // miejsca bez pełnej dostępności (kuchnia, warsztat, SOR)
const FLEXIBLE_HOURS_IDS = [3, 4, 15, 16, 19, 21, 23, 24, 27];  // możliwość ustalenia innych godzin

companies.forEach(c => {
    c.format = MINI_TASK_IDS.includes(c.id) ? 'task' : 'shadowing';
    c.noExperience = !EXPERIENCE_REQUIRED_IDS.includes(c.id);
    c.accessible = !NOT_ACCESSIBLE_IDS.includes(c.id);
    c.flexibleHours = FLEXIBLE_HOURS_IDS.includes(c.id);
});

// Krótkie etykiety oferty do listy, popupu i szczegółów
function offerTags(company) {
    const tags = [`${FORMATS[company.format].icon} ${FORMATS[company.format].label}`];
    if (company.noExperience) tags.push('🌱 Bez doświadczenia');
    if (company.accessible) tags.push('♿ Dostępne miejsce');
    if (company.flexibleHours) tags.push('🕒 Elastyczne godziny');
    return tags;
}

// Branże, w których kobiety są wyraźnie niedoreprezentowane – filtr "Przełam schemat" i odznaka
const UNDERREPRESENTED = ['tech', 'moto', 'logistyka'];

// --- 7b. QUESTY ---
// Każda wizyta dostaje 5 zadań: 2 wspólne, 2 zależne od branży i 1 na koniec dnia
const QUEST_XP = 25;          // za każde zadanie z wizyty
const VISIT_BONUS_XP = 50;    // bonus za ukończenie wszystkich zadań z wizyty
const STARTER_XP = 50;        // za każdy krok questa startowego
const XP_PER_LEVEL = 150;
const LEVEL_NAMES = ['Nowicjuszka', 'Obserwatorka', 'Praktykantka', 'Odkrywczyni', 'Insiderka', 'Liderka Branży'];

const commonQuests = [
    { icon: '🎤', text: 'Zapytaj mentorkę, jak wyglądał jej pierwszy dzień w tej pracy' },
    { icon: '💪', text: 'Zapytaj mentorkę, z jakimi stereotypami się spotkała i jak sobie z nimi radzi' }
];
const categoryQuests = {
    tech:      [{ icon: '💻', text: 'Zobacz fragment prawdziwego kodu i dowiedz się, co robi' },
                { icon: '🗂️', text: 'Dowiedz się, jak zespół planuje pracę (np. Scrum, sprinty)' }],
    design:    [{ icon: '✏️', text: 'Prześledź projekt od pierwszego szkicu do finalnej wersji' },
                { icon: '💬', text: 'Zapytaj, jak wygląda praca z uwagami od klienta' }],
    beauty:    [{ icon: '🧴', text: 'Poznaj zasady higieny i bezpieczeństwa w salonie' },
                { icon: '🔍', text: 'Dowiedz się, jak dobiera się zabieg do potrzeb klienta' }],
    kuchnia:   [{ icon: '👨‍🍳', text: 'Poznaj stanowiska w kuchni i kto za co odpowiada' },
                { icon: '🍽️', text: 'Wykonaj jeden element dania pod okiem kucharza' }],
    moto:      [{ icon: '🔧', text: 'Zobacz, jak wygląda komputerowa diagnostyka pojazdu' },
                { icon: '📜', text: 'Dowiedz się, jakie uprawnienia i szkoły są potrzebne w tym zawodzie' }],
    logistyka: [{ icon: '📦', text: 'Prześledź drogę jednej przesyłki od nadania do odbioru' },
                { icon: '🗺️', text: 'Dowiedz się, jak planuje się trasy i dostawy' }],
    medycyna:  [{ icon: '🩺', text: 'Poznaj zasady pracy z pacjentem i ochrony jego danych' },
                { icon: '🎓', text: 'Dowiedz się, jak wygląda ścieżka edukacji do tego zawodu' }]
};
const finalQuest = { icon: '💡', text: 'Poproś mentorkę o jedną radę na start w tej branży' };

// Mini-zadanie kończy się oddaniem materiału – ten quest zastępuje drugi quest branżowy (wciąż 5 zadań)
const miniTaskQuest = { icon: '📝', text: 'Oddaj swój materiał i zapisz najważniejszy feedback od mentorki' };

function getVisitQuests(company) {
    const branchQuests = categoryQuests[company.category] || [];
    if (company.format === 'task') {
        return [...commonQuests, branchQuests[0], miniTaskQuest, finalQuest].filter(Boolean);
    }
    return [...commonQuests, ...branchQuests, finalQuest];
}

// --- ZASŁUGI OD PRACODAWCÓW ---
// Mentorka po wizycie potwierdza obecność, przyznaje do 3 zasług i może napisać rekomendację.
// Wszystko trafia do profilu praktykantki jako XP, odznaki i wpis do CV.
const ATTENDANCE_XP = 50;       // za potwierdzoną obecność
const MERIT_XP = 40;            // za każdą zasługę
const RECOMMENDATION_XP = 30;   // za rekomendację
const MAX_MERITS_PER_VISIT = 3;

const MERITS = [
    { id: 'curious',    icon: '❓', name: 'Najlepsze pytania',  desc: 'Zadawała trafne, dociekliwe pytania' },
    { id: 'initiative', icon: '🚀', name: 'Inicjatywa',         desc: 'Sama zgłaszała się do zadań' },
    { id: 'teamwork',   icon: '🤝', name: 'Współpraca',         desc: 'Świetnie odnalazła się w zespole' },
    { id: 'skills',     icon: '🛠️', name: 'Talent praktyczny',  desc: 'Szybko łapała nowe narzędzia' },
    { id: 'creative',   icon: '💡', name: 'Kreatywność',        desc: 'Wnosiła świeże pomysły' },
    { id: 'quests100',  icon: '🎯', name: 'Questy na 100%',     desc: 'Ukończyła wszystkie questy wizyty', requiresAllQuests: true }
];

// --- STAN APLIKACJI W PRZEGLĄDARCE (localStorage) ---
// Jeden wspólny klucz dla strony praktykantki i panelu pracodawcy.
// Każda strona zapisuje tylko swoje pola, zawsze na świeżo odczytanym stanie,
// więc dwie otwarte karty nie nadpisują sobie nawzajem zmian.
const STORAGE_KEY = 'drafther-state-v1';

function emptyState() {
    return {
        saved: [],              // [{ id, withFriend }] – wizyty, na które zapisała się praktykantka
        quests: {},             // { [companyId]: [true/false, ...] } – odhaczone questy
        profileVisited: false,
        employer: {}            // { [companyId]: { attended, merits: [ids], recommendation } } – od mentorek
    };
}

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? { ...emptyState(), ...JSON.parse(raw) } : emptyState();
    } catch (e) {
        return emptyState();    // np. tryb prywatny lub zablokowany storage – aplikacja działa dalej w pamięci
    }
}

function updateState(changeFn) {
    const state = loadState();
    changeFn(state);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* brak zapisu – trudno */ }
    return state;
}

function getEmployerEntry(state, companyId) {
    return state.employer[companyId] || { attended: false, merits: [], recommendation: '' };
}

// XP przyznane przez mentorkę za jedną wizytę
function employerXP(entry) {
    return (entry.attended ? ATTENDANCE_XP : 0)
        + entry.merits.length * MERIT_XP
        + (entry.recommendation ? RECOMMENDATION_XP : 0);
}

// Tekst wpisany przez użytkownika (np. rekomendacja) wstawiamy do HTML bezpiecznie
function escapeHtml(text) {
    return String(text).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}
