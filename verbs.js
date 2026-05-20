// ============================================
// VERB-KONJUGATION - Lecția 16 A1.2: Acars neue Wohnung
// Claudia Toth · instrument de referință (Präsens / Präteritum / Perfekt)
// Lecție de vocabular Wohnen — UN SINGUR verb nou (aufräumen) + recapuri din L1/L14
// REGULĂ: NU backticks, NU ghilimele interne care rup template literal!
// ============================================

const verbsData = [
    {
        inf: 'aufräumen', ro: 'a face curat / a strânge', typ: 'slab / regulat', aux: 'haben', part: 'aufgeräumt',
        praes: [['ich','räume auf','fac curat'],['du','räumst auf','faci curat'],['er/sie/es','räumt auf','face curat'],['wir','räumen auf','facem curat'],['ihr','räumt auf','faceți curat'],['sie/Sie','räumen auf','fac curat']],
        praet: [['ich','räumte auf','făceam curat'],['du','räumtest auf','făceai curat'],['er/sie/es','räumte auf','făcea curat'],['wir','räumten auf','făceam curat'],['ihr','räumtet auf','făceați curat'],['sie/Sie','räumten auf','făceau curat']],
        perf: [['ich','habe aufgeräumt','am făcut curat'],['du','hast aufgeräumt','ai făcut curat'],['er/sie/es','hat aufgeräumt','a făcut curat'],['wir','haben aufgeräumt','am făcut curat'],['ihr','habt aufgeräumt','ați făcut curat'],['sie/Sie','haben aufgeräumt','au făcut curat']],
        note: 'Verb SEPARABIL: prefixul auf- merge la final (Ich räume mein Zimmer auf). Verb REGULAT — Partizip cu -t (aufgeräumt). La imperativ: Räum auf! / Räumt auf! / Räumen Sie auf!'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#6b7280;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> er <strong>' + v.perf[2][1] + '</strong> · <em style="color:#6b7280;">' + v.perf[2][2] + '</em><br>' +
        '<small style="color:#6b7280;">Conjugi auxiliarul ca de obicei (' + (v.aux === 'sein' ? 'ich bin, du bist, er ist...' : 'ich habe, du hast, er hat...') + ') + <strong>' + v.part + '</strong>.</small></p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 Lecție de vocabular Wohnen — 1 verb nou (aufräumen) + recapuri din lecții anterioare.</strong><br>' +
        'Click pe verb ca să-i vezi conjugarea. Instrument de <strong>referință</strong>.' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„L16 e mai mult vocabular Wohnen decât gramatică verbală. Singurul verb nou e <strong>aufräumen</strong> (separabil, ca cele din L9). Restul sunt verbe pe care le știi deja — îți pun referințe rapide mai jos. 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : (v.typ.indexOf('aux') === 0 ? '#7c3aed' : '#047857');
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#fef3c7;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            '</div></div>';
    });

    html += '<div class="theory-box" style="background:#fff7ed; border-left:4px solid #ea580c; margin-top:14px;">' +
        '<p style="margin:0 0 6px;">📎 <strong>Deja conjugat la Lecția 1:</strong> ' +
        '<strong>wohnen</strong> — a locui (slab/regulat): ich wohne · er wohnt · Prät. wohnte · Perfekt er hat gewohnt. ' +
        '<em>Acar wohnt jetzt in Oranienburg.</em></p>' +
        '<p style="margin:0;">📎 <strong>Deja conjugat la Lecția 14:</strong> ' +
        '<strong>gefallen</strong> — a plăcea (+ Dativ, tare/neregulat): gefällt · Prät. gefiel · Perfekt er hat gefallen. ' +
        '<em>Die neue Wohnung gefällt Acar.</em></p></div>';

    html += '<div class="theory-box" style="background:#ecfdf5; border-left:4px solid #047857; margin-top:8px;">' +
        '<p style="margin:0;">🔗 <strong>Verbe de poziție (stellen / stehen / liegen / legen / setzen / sitzen) + cele 9 Wechselpräpositionen</strong> — tratament complet la <a href="https://claudiatoth.github.io/curs-a2-positionsverben-teil-1/" target="_blank" style="color:#065f46;"><strong>A2 Positionsverben Teil 1</strong></a>. ' +
        'La A1 e suficient să recunoști <em>Das Sofa steht im Wohnzimmer</em> · <em>Die Lampe hängt an der Decke</em>.</p></div>';

    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
