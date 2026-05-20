// ============================================
// EXERCIȚII - Lecția 16: Acars neue Wohnung
// Claudia Toth · A1.2 · 5 exerciții (toate text inputs)
// Sursă DF: 109 (Zimmer), 110 (Möbel), 88-89 (Lokale Präp — DOAR „in" la A1)
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a')
        .replace(/î/g, 'i')
        .replace(/[șş]/g, 's')
        .replace(/[țţ]/g, 't')
        .replace(/\s*\/\s*/g, '/')
        .replace(/\s*,\s*/g, ',')
        .replace(/\s+/g, ' ')
        .replace(/[.!?;:]/g, '');
}

// ============================================
// EX 1: Camere — articol corect (der/die/das)
// ============================================
const ex1Data = [
    { id: 'a', sentence: '____ Wohnzimmer', translation: 'livingul', correct: 'das', accept: ['das'] },
    { id: 'b', sentence: '____ Küche', translation: 'bucătăria', correct: 'die', accept: ['die'] },
    { id: 'c', sentence: '____ Schlafzimmer', translation: 'dormitorul', correct: 'das', accept: ['das'] },
    { id: 'd', sentence: '____ Badezimmer', translation: 'baia', correct: 'das', accept: ['das'] },
    { id: 'e', sentence: '____ Garten', translation: 'grădina', correct: 'der', accept: ['der'] },
    { id: 'f', sentence: '____ Kinderzimmer', translation: 'camera copilului', correct: 'das', accept: ['das'] },
    { id: 'g', sentence: '____ Balkon', translation: 'balconul', correct: 'der', accept: ['der'] },
    { id: 'h', sentence: '____ Arbeitszimmer', translation: 'biroul / camera de lucru', correct: 'das', accept: ['das'] }
];

function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🏘️ Camere — completează articolul hotărât (der/die/das).</strong><br>
            Cele mai multe camere sunt <strong>das</strong> (terminația -zimmer e mereu neutră). Bucătăria face excepție: <strong>die</strong> Küche.
        </div>
    `;
    ex1Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex1-${item.id}" placeholder="articol...">
                </div>
                <div class="feedback" id="ex1-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    const total = ex1Data.length;
    ex1Data.forEach(item => {
        const input = document.getElementById(`ex1-${item.id}`);
        const fb = document.getElementById(`ex1-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 2: Möbel — articol corect
// ============================================
const ex2Data = [
    { id: 'a', sentence: '____ Sofa', translation: 'canapeaua', correct: 'das', accept: ['das'] },
    { id: 'b', sentence: '____ Bett', translation: 'patul', correct: 'das', accept: ['das'] },
    { id: 'c', sentence: '____ Kühlschrank', translation: 'frigiderul', correct: 'der', accept: ['der'] },
    { id: 'd', sentence: '____ Lampe', translation: 'lampa', correct: 'die', accept: ['die'] },
    { id: 'e', sentence: '____ Tisch', translation: 'masa', correct: 'der', accept: ['der'] },
    { id: 'f', sentence: '____ Badewanne', translation: 'cada de baie', correct: 'die', accept: ['die'] },
    { id: 'g', sentence: '____ Sessel', translation: 'fotoliul', correct: 'der', accept: ['der'] },
    { id: 'h', sentence: '____ Spülmaschine', translation: 'mașina de spălat vase', correct: 'die', accept: ['die'] }
];

function buildEx2() {
    const container = document.getElementById('ex2-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🛋️ Mobilier — completează articolul hotărât (der/die/das).</strong><br>
            <em>💡 Pattern util: -e mai des feminin (die Lampe, die Dusche), -er mai des masculin (der Sessel, der Fernseher), -chen/-zimmer mereu neutru.</em>
        </div>
    `;
    ex2Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex2-${item.id}" placeholder="articol...">
                </div>
                <div class="feedback" id="ex2-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    const total = ex2Data.length;
    ex2Data.forEach(item => {
        const input = document.getElementById(`ex2-${item.id}`);
        const fb = document.getElementById(`ex2-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 3: Wo ist ...? — „in + Dativ" (im / in der)
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'Das Bett ist ____ Schlafzimmer.', translation: 'Patul e în dormitor.', correct: 'im', accept: ['im'] },
    { id: 'b', sentence: 'Der Kühlschrank ist ____ Küche.', translation: 'Frigiderul e în bucătărie.', correct: 'in der', accept: ['in der'] },
    { id: 'c', sentence: 'Das Sofa ist ____ Wohnzimmer.', translation: 'Canapeaua e în living.', correct: 'im', accept: ['im'] },
    { id: 'd', sentence: 'Die Toilette ist ____ Bad.', translation: 'Toaleta e în baie.', correct: 'im', accept: ['im'] },
    { id: 'e', sentence: 'Acars Familie wohnt ____ Haus in Oranienburg.', translation: 'Familia lui Acar locuiește într-o casă în Oranienburg.', correct: 'im', accept: ['im'] },
    { id: 'f', sentence: 'Andreea wohnt ____ Wohnung in Berlin.', translation: 'Andreea locuiește într-un apartament în Berlin.', correct: 'in der', accept: ['in der'] },
    { id: 'g', sentence: 'Carolina wohnt ____ WG mit Freunden.', translation: 'Carolina locuiește într-o WG cu prieteni.', correct: 'in der', accept: ['in der'] },
    { id: 'h', sentence: 'Der Grill ist ____ Garten.', translation: 'Grătarul e în grădină.', correct: 'im', accept: ['im'] }
];

function buildEx3() {
    const container = document.getElementById('ex3-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📍 Wo ist ...? Completează cu „im" sau „in der".</strong><br>
            masculin/neutru → <strong>im</strong> (in + dem) · feminin → <strong>in der</strong> (in + der, NU se contractă).
        </div>
    `;
    ex3Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex3-${item.id}" placeholder="im / in der">
                </div>
                <div class="feedback" id="ex3-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    const total = ex3Data.length;
    ex3Data.forEach(item => {
        const input = document.getElementById(`ex3-${item.id}`);
        const fb = document.getElementById(`ex3-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 4: Lückentext — In einem/einer ____ kann man X
// ============================================
const ex4Data = [
    { id: 'a', sentence: 'In einem ____ kann man schlafen.', translation: 'Într-un pat se poate dormi.', correct: 'Bett', accept: ['bett'] },
    { id: 'b', sentence: 'Mit einer ____ kann man Geschirr spülen.', translation: 'Cu o mașină de spălat vase se spală vasele.', correct: 'Spülmaschine', accept: ['spülmaschine', 'spuelmaschine'] },
    { id: 'c', sentence: 'In einem ____ kann man Kleidung aufhängen.', translation: 'Într-un dulap se atârnă haine.', correct: 'Kleiderschrank', accept: ['kleiderschrank'] },
    { id: 'd', sentence: 'In einem ____ kann man bequem sitzen.', translation: 'Într-un fotoliu se stă comod.', correct: 'Sessel', accept: ['sessel'] },
    { id: 'e', sentence: 'Auf einem ____ kann man Essen kochen.', translation: 'Pe un aragaz se gătește.', correct: 'Herd', accept: ['herd'] },
    { id: 'f', sentence: 'Mit einer ____ kann man Wäsche waschen.', translation: 'Cu o mașină de spălat se spală rufele.', correct: 'Waschmaschine', accept: ['waschmaschine'] },
    { id: 'g', sentence: 'Auf einer ____ kann man die Sonne genießen.', translation: 'Pe un șezlong se stă la soare.', correct: 'Sonnenliege', accept: ['sonnenliege'] },
    { id: 'h', sentence: 'In einer ____ kann man duschen.', translation: 'Într-un duș se poate face duș.', correct: 'Dusche', accept: ['dusche'] }
];

function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🛏️ Identifică obiectul după funcția lui.</strong><br>
            Citește propoziția și completează cu mobilierul potrivit (fără articol). Sufix util: -maschine = feminin (die).
        </div>
    `;
    ex4Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex4-${item.id}" placeholder="obiect...">
                </div>
                <div class="feedback" id="ex4-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    const total = ex4Data.length;
    ex4Data.forEach(item => {
        const input = document.getElementById(`ex4-${item.id}`);
        const fb = document.getElementById(`ex4-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EX 5: Turul casei Acar (Lückentext mix)
// ============================================
const ex5Data = [
    { id: 'a', sentence: 'Acar: ____ Erdgeschoss gibt es ein Wohnzimmer. (in + Dat. neutr)', translation: 'La parter este un living.', correct: 'Im', accept: ['im'] },
    { id: 'b', sentence: 'Acar: Die Küche ist neben dem Wohnzimmer, auch ____ Erdgeschoss. (in + Dat. neutr)', translation: 'Bucătăria e lângă living, tot la parter.', correct: 'im', accept: ['im'] },
    { id: 'c', sentence: 'Andreea: Wie viele ____ hat das Haus? (plural de Zimmer)', translation: 'Câte camere are casa?', correct: 'Zimmer', accept: ['zimmer'] },
    { id: 'd', sentence: 'Acar: ____ Obergeschoss sind das Schlafzimmer und das Badezimmer. (in + Dat. neutr)', translation: 'La etaj sunt dormitorul și baia.', correct: 'Im', accept: ['im'] },
    { id: 'e', sentence: 'Acar: ____ Küche stehen der Herd und der Kühlschrank. (in + Dat. fem)', translation: 'În bucătărie sunt aragazul și frigiderul.', correct: 'In der', accept: ['in der'] },
    { id: 'f', sentence: 'Acar: ____ Kinderzimmer ist das Babybett. (in + Dat. neutr)', translation: 'În camera copilului e pătuțul.', correct: 'Im', accept: ['im'] },
    { id: 'g', sentence: 'Acar: Mihai, ____ bitte dein Zimmer auf! (aufräumen — imperativ du)', translation: 'Mihai, fă te rog curat în camera ta!', correct: 'Räum', accept: ['räum', 'raeum', 'räume', 'raeume'] },
    { id: 'h', sentence: 'Andreea: Wir ____ jeden Samstag unsere Wohnung auf. (aufräumen — wir)', translation: 'Facem curat în apartament în fiecare sâmbătă.', correct: 'räumen', accept: ['räumen', 'raeumen'] }
];

function buildEx5() {
    const container = document.getElementById('ex5-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>🏠 Acar îți face turul casei. Completează (in + Dat. + aufräumen).</strong><br>
            Citește indicația din paranteză. La aufräumen prefixul <strong>auf</strong> e deja la final — scrie doar partea care lipsește.
        </div>
    `;
    ex5Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <small class="translation-hint">💬 ${item.translation}</small>
                    <input type="text" id="ex5-${item.id}" placeholder="completează...">
                </div>
                <div class="feedback" id="ex5-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    const total = ex5Data.length;
    ex5Data.forEach(item => {
        const input = document.getElementById(`ex5-${item.id}`);
        const fb = document.getElementById(`ex5-f${item.id}`);
        const userAnswer = normalizeAnswer(input.value);
        const isCorrect = item.accept.some(a => normalizeAnswer(a) === userAnswer);
        if (isCorrect) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// Build all exercises on load
buildEx1();
buildEx2();
buildEx3();
buildEx4();
buildEx5();
