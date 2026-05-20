// ============================================
// FLASHCARDS - Lecția 16: Acars neue Wohnung
// Claudia Toth · A1.2 · 32 carduri
// REGULĂ FERMĂ: NICIODATĂ ghilimele interne — CAPS / paranteze pentru emfază!
// ============================================

const flashcardsData = [
    // === 10 Tipuri locuință + camere + zone ===
    { de: "das Haus", ro: "casa · neutru (das) · Acars Haus e în Oranienburg", audio: "audio/letters/h-haus.wav" },
    { de: "die Wohnung", ro: "apartamentul · feminin (die) · Andreeas Wohnung e în Berlin", audio: "audio/letters/h-wohnung.wav" },
    { de: "die WG", ro: "locuința comună · die Wohngemeinschaft · studenți care împart chiria", audio: "audio/letters/h-wg.wav" },
    { de: "das Wohnzimmer", ro: "livingul / sufrageria · neutru · -zimmer mereu das", audio: "audio/letters/h-wohnzimmer.wav" },
    { de: "die Küche", ro: "bucătăria · feminin (die) · EXCEPȚIE de la -zimmer", audio: "audio/letters/h-kueche.wav" },
    { de: "das Schlafzimmer", ro: "dormitorul · neutru · acolo e patul (das Bett)", audio: "audio/letters/h-schlafzimmer.wav" },
    { de: "das Badezimmer", ro: "baia · neutru · pe scurt: das Bad", audio: "audio/letters/h-badezimmer.wav" },
    { de: "das Kinderzimmer", ro: "camera copilului · neutru · acolo e das Babybett", audio: "audio/letters/h-kinderzimmer.wav" },
    { de: "der Garten", ro: "grădina · masculin (der) · der Grill steht im Garten", audio: "audio/letters/h-garten.wav" },
    { de: "der Balkon", ro: "balconul · masculin (der) · sau die Terrasse (terasa)", audio: "audio/letters/h-balkon.wav" },

    // === 18 Mobilier (cu articol) ===
    { de: "das Bett", ro: "patul · neutru · în Schlafzimmer", audio: "audio/letters/m-bett.wav" },
    { de: "das Sofa", ro: "canapeaua · neutru · în Wohnzimmer", audio: "audio/letters/m-sofa.wav" },
    { de: "der Sessel", ro: "fotoliul · masculin · în Wohnzimmer", audio: "audio/letters/m-sessel.wav" },
    { de: "der Tisch", ro: "masa · masculin · la care se mănâncă", audio: "audio/letters/m-tisch.wav" },
    { de: "der Stuhl", ro: "scaunul · masculin · plural: die Stühle", audio: "audio/letters/m-stuhl.wav" },
    { de: "der Schreibtisch", ro: "biroul / masa de lucru · în Arbeitszimmer", audio: "audio/letters/m-schreibtisch.wav" },
    { de: "der Kleiderschrank", ro: "dulapul de haine · în Schlafzimmer", audio: "audio/letters/m-kleiderschrank.wav" },
    { de: "die Kommode", ro: "comoda · feminin · pentru lucruri mici", audio: "audio/letters/m-kommode.wav" },
    { de: "der Nachttisch", ro: "noptiera · masculin · lângă pat", audio: "audio/letters/m-nachttisch.wav" },
    { de: "das Bücherregal", ro: "biblioteca / raftul de cărți · neutru", audio: "audio/letters/m-buecherregal.wav" },
    { de: "die Lampe", ro: "lampa / veioza · feminin · -e e des feminin", audio: "audio/letters/m-lampe.wav" },
    { de: "der Teppich", ro: "covorul · masculin", audio: "audio/letters/m-teppich.wav" },
    { de: "der Fernseher", ro: "televizorul · masculin · -er des masculin", audio: "audio/letters/m-fernseher.wav" },
    { de: "der Kühlschrank", ro: "frigiderul · masculin · în Küche", audio: "audio/letters/m-kuehlschrank.wav" },
    { de: "der Herd", ro: "aragazul (plita) · masculin · în Küche", audio: "audio/letters/m-herd.wav" },
    { de: "der Backofen", ro: "cuptorul · masculin · pentru Kuchen backen", audio: "audio/letters/m-backofen.wav" },
    { de: "die Spülmaschine", ro: "mașina de spălat vase · feminin · -maschine mereu feminin", audio: "audio/letters/m-spuelmaschine.wav" },
    { de: "die Waschmaschine", ro: "mașina de spălat rufe · feminin", audio: "audio/letters/m-waschmaschine.wav" },

    // === 4 propoziții cu „in + Dativ" ===
    { de: "im Schlafzimmer", ro: "în dormitor · in + dem (neutru) = im (formă contrasă)", audio: "audio/letters/d-im-schlafzimmer.wav" },
    { de: "in der Küche", ro: "în bucătărie · in + der (feminin) NU se contractă", audio: "audio/letters/d-in-der-kueche.wav" },
    { de: "Das Bett ist im Schlafzimmer.", ro: "Patul e în dormitor · Wo? + Dativ neutru → im", audio: "audio/letters/d-bett-im.wav" },
    { de: "Der Kühlschrank ist in der Küche.", ro: "Frigiderul e în bucătărie · Wo? + Dativ feminin → in der", audio: "audio/letters/d-kuehl-in-der.wav" }
];

let currentCardIndex = 0;
let currentAudio = null;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri</strong> grupate pe teme (10 locuință + camere · 18 mobilier · 4 propoziții cu „in + Dativ").<br>
            Click pe card pentru a vedea traducerea. Click pe 🔊 pentru a auzi pronunția germană.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de;
    ro.textContent = c.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(card.audio);
    currentAudio.play().catch(err => {
        console.log('Audio nu poate fi redat:', err);
    });
}

buildFlashcards();
