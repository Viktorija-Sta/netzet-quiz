# Praktinė Užduotis 

---

## 🌐 Gyvai pasiekiama

Projektą galite peržiūrėti čia:
**[https://netzet-quiz-nrn71og21-viktorija-stas-projects.vercel.app/]** 

---

## 🚀 Paleidimas

1.  **Klonuokite šią repozitoriją**

    ```bash
    git clone [https://github.com/Viktorija-Sta/netzet-quiz.git](https://github.com/Viktorija-Sta/netzet-quiz.git)
    cd netzet-quiz
    ```

2.  **Įdiekite priklausomybes:**

    ```bash
    npm install
    ```

3.  **Paleiskite aplikaciją:**

    ```bash
    npm run dev
    ```

4.  Aplikacija bus pasiekiama adresu: **http://localhost:3000**

---

## 🔧 Naudotos Technologijos

* **React 18** + **TypeScript**  
* **Next.js** (su App Router)  
* **Tailwind CSS**   
* **React Context API** (Globaliai būsenai valdyti)  
* **`next/font`** (`Figtree` šrifto optimizavimui)  
* **SVGR** (`@svgr/webpack`) (SVG piktogramų importavimui kaip React komponentų, kad būtų galima dinamiškai keisti jų spalvą)  

---

## 📝 Pastabos

Projektas sukurtas siekiant užtikrinti švarų kodą, "pixel-perfect" dizaino atitikimą ir funkcionalumą.

* **Komponentai** (`QuizIcon`, `CountdownTimer`) yra iškelti geresniam pakartotiniam naudojimui.
* **Duomenys** (`quizData.ts`) yra atskirti nuo logikos, leidžiant lengvai keisti klausimus, atstumus ir spalvas.
* **Tailwind CSS** konfigūracija papildyta `safelist`, kad būtų galima saugiai naudoti dinamines klases (`bg-${item.color}`).

---
