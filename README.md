# DraftHer – Jej kariera. Jej wybór.

Portal krótkich doświadczeń zawodowych z mentorką u boku – job shadowingu i mini-zadań dla uczennic, studentek i młodych kobiet. Projekt koncepcyjny na **HackYeah**, zadanie **ImpactHer: Technology for Real Change**.

**Demo:** https://drafther.vercel.app

## Problem i hipoteza

W Unii Europejskiej mniej niż 1 na 5 specjalistów IT to kobieta (Eurostat). Młode kobiety napotykają trzy bariery: brak pierwszej szansy, brak kontaktów i za mało wzorców.

**Hipoteza:** małe, dostępne doświadczenia i kontakt z mentorką mogą ułatwić świadomy wybór ścieżki. Nie jest jeszcze potwierdzona badaniami – sprawdzi ją pilotaż.

## Funkcje

- **Mapa ofert** z filtrami branż, „Przełam schemat” (tech, moto, logistyka) i potrzeb: format (job shadowing / mini-zadanie), bez doświadczenia, dostępne miejsce, elastyczne godziny.
- **Zapis na wizytę** ze zgodą rodzica lub opiekuna, opcją „Przyjdę z koleżanką” i polem na indywidualne potrzeby.
- **Profil uczennicy:** questy wykonywane podczas wizyty, XP, poziomy, odznaki.
- **Panel mentorki:** podgląd postępu questów na żywo, potwierdzenie obecności, zasługi i rekomendacje do CV – od razu widoczne w profilu uczennicy.
- **Panel firmy:** dodawanie oferty z obowiązkowym Kodeksem Bezpiecznej Wizyty.
- **Informator dla szkół** z broszurą do zapisania jako PDF.

## Uruchomienie

Bez instalacji i budowania – wystarczy otworzyć `index.html` w przeglądarce (Chrome, Edge). Mapa i fonty wymagają internetu. Postęp zapisuje się w localStorage przeglądarki.

Wdrożenie na Vercel: `vercel deploy --prod` (statyczne pliki, bez kroku budowania).

## Struktura

| Plik | Rola |
| --- | --- |
| `index.html` | strona główna: problem, mentorki, bezpieczeństwo, FAQ |
| `mapa.html` | aplikacja uczennicy: mapa, szczegóły, zapis, profil, questy |
| `pracodawca.html` | panel mentorki: obecność, zasługi, rekomendacje |
| `company-panel.html` | formularz dodania oferty (symulowany) |
| `szkola.html` | informator dla szkół |
| `dane.js` | oferty, mentorki, questy, zasługi, funkcje stanu |
| `img/` | logo organizacji, zdjęcia mentorek |
| `docs/` | dokumentacja portalu (PDF) |

Pełny opis architektury, modelu danych i systemu grywalizacji: [`docs/DraftHer - dokumentacja portalu.pdf`](docs/DraftHer%20-%20dokumentacja%20portalu.pdf).

## Status i ograniczenia

To prototyp front-endowy bez serwera i kont. Oferty, terminy, mentorki i praktykantki są przykładowe; wymienione firmy nie są partnerami projektu. Zdjęcia mentorek są koncepcyjne i nie przedstawiają rzeczywistych osób.

## Wykorzystane zasoby

- [Leaflet 1.9.4](https://leafletjs.com) – mapa
- Esri World Light Gray Canvas – kafelki mapy; dane © [OpenStreetMap](https://www.openstreetmap.org/copyright)
- [Phosphor Icons](https://phosphoricons.com) – ikony
- Inter (Google Fonts) – font
- Eurostat – statystyka o kobietach w IT
- Narzędzia AI – pomoc przy kodzie, treściach i grafikach koncepcyjnych
