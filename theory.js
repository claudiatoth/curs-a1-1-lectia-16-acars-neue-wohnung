// ============================================
// TEORIE - Lecția 16: Acars neue Wohnung
// Claudia Toth · A1.2 — Annettes Deutschkurs · Lecția 16
// Sursă DF: 88 (Lokale Präp — folosim DOAR „in" la A1), 109 (Zimmer), 110 (Möbel), WS81 (Aufräumen)
// SCOP REDUS aprobat: Wohnen vocab + „in + Dativ" pentru locație
// (9 Wechselpräp + Wo/Wohin → vezi A2 Positionsverben Teil 1)
// ============================================

const theoryHTML = `
    <!-- 0: Intro + diacritice + povestea -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🏠 1. Astăzi: Acar îți arată noua locuință din Oranienburg</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="andreea-note" style="margin-bottom: 14px;">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune (înainte să începem):</div>
                    <div class="text" style="font-style: normal;">„Nu ai tastatură germană? <strong>Niciun stres!</strong> La toate exercițiile poți scrie:
                        <ul style="margin: 6px 0 4px 18px; padding: 0;">
                            <li><code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ss</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ß</code></li>
                            <li><code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ae</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ä</code> &nbsp;|&nbsp; <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">oe</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ö</code> &nbsp;|&nbsp; <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ue</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ü</code></li>
                        </ul>
                        Sistemul acceptă <strong>ambele forme</strong> automat."</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>Acar și familia lui se mută în Oranienburg</h4>
                <p>Îți amintești de Acar din Lecția 10? E maistru (Vorarbeiter) pe șantier. Acum, după ce și-a strâns bani, a cumpărat o casă mare lângă <strong>Lehnitzsee</strong>, în Oranienburg. Familia lui se mută săptămâna asta și Acar îți face turul.</p>
                <p>Învățăm tot ce trebuie să descrii o locuință în germană:</p>
                <ul style="margin-left: 18px; margin-top: 6px;">
                    <li>tipurile de <strong>locuință</strong> (Haus, Wohnung, WG) + <strong>camerele</strong> (Wohnzimmer, Küche...)</li>
                    <li><strong>mobilierul</strong> (Sofa, Bett, Tisch... ~25 obiecte cu articolul corect)</li>
                    <li>cum spui <strong>unde se află ceva</strong>: <em>„Das Bett ist <strong>im</strong> Schlafzimmer"</em> — prepoziția <strong>„in" + Dativ</strong></li>
                </ul>
            </div>

            <div class="dialog-box">
                <div class="dialog-line">
                    <img src="images/acar.png" alt="Acar" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Acar</div>
                        <div class="dialog-text">Willkommen in unserem neuen Haus! Es ist groß und hat einen Garten.
                            <span class="translation">Bun venit în noua noastră casă! E mare și are o grădină.</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/andreea.png" alt="Andreea" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Andreea</div>
                        <div class="dialog-text">Wow! Wie viele Zimmer hat das Haus?
                            <span class="translation">Wow! Câte camere are casa?</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/acar.png" alt="Acar" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Acar</div>
                        <div class="dialog-text">Im Erdgeschoss gibt es ein Wohnzimmer, eine Küche und ein Arbeitszimmer. Im Obergeschoss sind das Schlafzimmer, das Badezimmer und das Kinderzimmer.
                            <span class="translation">La parter sunt un living, o bucătărie și un birou. La etaj sunt dormitorul, baia și camera copilului.</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/andreea.png" alt="Andreea" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Andreea</div>
                        <div class="dialog-text">Schön! Und wo ist die Küche genau?
                            <span class="translation">Frumos! Și unde e bucătăria mai exact?</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/acar.png" alt="Acar" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Acar</div>
                        <div class="dialog-text">Die Küche ist im Erdgeschoss, neben dem Wohnzimmer.
                            <span class="translation">Bucătăria e la parter, lângă living.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>🎯 Ce vei putea face la finalul lecției</h4>
                <ul style="margin-left: 18px;">
                    <li>Să numești <strong>tipurile de locuință</strong> și <strong>camerele</strong> cu articolul corect</li>
                    <li>Să recunoști și să folosești <strong>vocabularul de mobilier</strong> (~25 obiecte)</li>
                    <li>Să spui <strong>unde se află ceva</strong> cu <strong>„in" + Dativ</strong>: <em>im Wohnzimmer, in der Küche</em></li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 1: Wohnen — locuințe și camere -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🏘️ 2. Tipuri de locuință + camere</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-wohnen.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <p style="margin: 6px 0 4px;"><strong>Tipuri de locuință:</strong></p>
            <table class="grammar-table">
                <tr><th>Germană</th><th>Traducere RO</th></tr>
                <tr><td>das Haus</td><td>casa (Acar: casă mare în Oranienburg)</td></tr>
                <tr><td>die Wohnung</td><td>apartamentul (Andreea: apartament de studentă în Berlin)</td></tr>
                <tr><td>die WG (Wohngemeinschaft)</td><td>locuința comună (studenți care împart chiria)</td></tr>
            </table>

            <p style="margin: 14px 0 4px;"><strong>Camerele unei locuințe:</strong></p>
            <table class="grammar-table">
                <tr><th>Germană</th><th>Traducere RO</th></tr>
                <tr><td>das Wohnzimmer</td><td>livingul / sufrageria</td></tr>
                <tr><td>die Küche</td><td>bucătăria</td></tr>
                <tr><td>das Schlafzimmer</td><td>dormitorul</td></tr>
                <tr><td>das Badezimmer (das Bad)</td><td>baia</td></tr>
                <tr><td>das Kinderzimmer</td><td>camera copilului</td></tr>
                <tr><td>das Arbeitszimmer</td><td>biroul / camera de lucru</td></tr>
                <tr><td>das Gästezimmer</td><td>camera de oaspeți</td></tr>
                <tr><td>das Gäste-WC</td><td>toaleta pentru oaspeți</td></tr>
            </table>

            <p style="margin: 14px 0 4px;"><strong>Zone exterioare + etaje:</strong></p>
            <table class="grammar-table">
                <tr><th>Germană</th><th>Traducere RO</th></tr>
                <tr><td>der Garten</td><td>grădina</td></tr>
                <tr><td>der Balkon</td><td>balconul</td></tr>
                <tr><td>die Terrasse / die Dachterrasse</td><td>terasa / terasa pe acoperiș</td></tr>
                <tr><td>das Erdgeschoss (EG)</td><td>parterul</td></tr>
                <tr><td>das Obergeschoss (OG)</td><td>etajul</td></tr>
            </table>

            <div class="theory-box" style="background:#ecfdf5; margin-top:14px;">
                <h4>🏠 Casa lui Acar (Oranienburg) — schiță</h4>
                <p><strong>EG (parter):</strong> Wohnzimmer · Küche · Gäste-WC · Gästezimmer · Arbeitszimmer · Garten</p>
                <p><strong>OG (etaj):</strong> Schlafzimmer · Badezimmer · Kinderzimmer · Dachterrasse</p>
            </div>
        </div>
    </div>

    <!-- 2: Möbel — mobilierul -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🛋️ 3. Mobilierul (Möbel) — grupat pe cameră</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-moebel.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <p style="margin: 6px 0 4px;"><strong>Schlafzimmer (dormitor):</strong></p>
            <table class="grammar-table">
                <tr><th>Germană</th><th>Traducere RO</th></tr>
                <tr><td>das Bett</td><td>patul</td></tr>
                <tr><td>der Nachttisch</td><td>noptiera</td></tr>
                <tr><td>der Kleiderschrank</td><td>dulapul de haine</td></tr>
                <tr><td>die Kommode</td><td>comoda</td></tr>
                <tr><td>die Lampe</td><td>lampa / veioza</td></tr>
                <tr><td>der Teppich</td><td>covorul</td></tr>
            </table>

            <p style="margin: 14px 0 4px;"><strong>Wohnzimmer (living):</strong></p>
            <table class="grammar-table">
                <tr><th>Germană</th><th>Traducere RO</th></tr>
                <tr><td>das Sofa</td><td>canapeaua</td></tr>
                <tr><td>der Sessel</td><td>fotoliul</td></tr>
                <tr><td>der Fernseher</td><td>televizorul</td></tr>
                <tr><td>der Tisch</td><td>masa</td></tr>
                <tr><td>das Bücherregal</td><td>biblioteca (raft de cărți)</td></tr>
            </table>

            <p style="margin: 14px 0 4px;"><strong>Küche (bucătărie):</strong></p>
            <table class="grammar-table">
                <tr><th>Germană</th><th>Traducere RO</th></tr>
                <tr><td>der Herd</td><td>aragazul (plita)</td></tr>
                <tr><td>der Backofen</td><td>cuptorul</td></tr>
                <tr><td>der Kühlschrank</td><td>frigiderul</td></tr>
                <tr><td>die Spülmaschine</td><td>mașina de spălat vase</td></tr>
                <tr><td>der Stuhl</td><td>scaunul</td></tr>
            </table>

            <p style="margin: 14px 0 4px;"><strong>Badezimmer (baie):</strong></p>
            <table class="grammar-table">
                <tr><th>Germană</th><th>Traducere RO</th></tr>
                <tr><td>die Badewanne</td><td>cada de baie</td></tr>
                <tr><td>die Dusche</td><td>dușul</td></tr>
                <tr><td>die Toilette</td><td>toaleta</td></tr>
                <tr><td>das Waschbecken</td><td>chiuveta</td></tr>
                <tr><td>die Waschmaschine</td><td>mașina de spălat rufe</td></tr>
            </table>

            <p style="margin: 14px 0 4px;"><strong>Arbeits-/Kinderzimmer + Balkon:</strong></p>
            <table class="grammar-table">
                <tr><th>Germană</th><th>Traducere RO</th></tr>
                <tr><td>der Schreibtisch</td><td>biroul (masa de lucru)</td></tr>
                <tr><td>das Babybett</td><td>pătuțul de bebeluș</td></tr>
                <tr><td>der Wickeltisch</td><td>masa de înfășat</td></tr>
                <tr><td>der Grill</td><td>grătarul</td></tr>
                <tr><td>die Sonnenliege</td><td>șezlongul</td></tr>
            </table>
        </div>
    </div>

    <!-- 3: „in" + Dativ pentru locație -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>📍 4. „in" + Dativ — unde se află ceva?</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-in-dativ.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>📚 Wo? (Unde?) cere Dativ</h4>
                <p>Când întrebi <strong>Wo? (Unde?)</strong>, răspunsul folosește <strong>Dativ</strong>. Prepoziția cea mai folosită pentru „înăuntru" e <strong>in</strong> — pe care ai văzut-o deja la Lecția 14.</p>
                <p>Regula articolelor la Dativ (recap din L14): <strong>der → dem, die → der, das → dem, plural die → den + -n</strong> la substantiv.</p>
            </div>

            <p style="margin: 10px 0 4px;"><strong>Forme contrase</strong> (extrem de frecvente — învață-le ca atare):</p>
            <table class="grammar-table">
                <tr><th>in + articol</th><th>Forma contrasă</th><th>Exemplu</th><th>Traducere RO</th></tr>
                <tr><td>in + dem (mask)</td><td><strong>im</strong></td><td>im Wohnzimmer</td><td>în living</td></tr>
                <tr><td>in + dem (neutr)</td><td><strong>im</strong></td><td>im Schlafzimmer</td><td>în dormitor</td></tr>
                <tr><td>in + der (fem)</td><td><strong>in der</strong> (nu se contractă)</td><td>in der Küche</td><td>în bucătărie</td></tr>
                <tr><td>in + den (plural)</td><td><strong>in den</strong> (nu se contractă) + -n</td><td>in den Zimmern</td><td>în camere</td></tr>
            </table>

            <p style="margin: 14px 0 4px;"><strong>Exemple — turul casei lui Acar:</strong></p>
            <table class="grammar-table">
                <tr><th>Germană</th><th>Traducere RO</th></tr>
                <tr><td>Das Bett ist <strong>im</strong> Schlafzimmer.</td><td>Patul e în dormitor.</td></tr>
                <tr><td>Der Kühlschrank ist <strong>in der</strong> Küche.</td><td>Frigiderul e în bucătărie.</td></tr>
                <tr><td>Das Sofa ist <strong>im</strong> Wohnzimmer.</td><td>Canapeaua e în living.</td></tr>
                <tr><td>Die Dusche ist <strong>im</strong> Badezimmer.</td><td>Dușul e în baie.</td></tr>
                <tr><td>Der Grill ist <strong>auf der</strong> Terrasse.</td><td>Grătarul e pe terasă. (auf + Dativ — vezi A2)</td></tr>
            </table>

            <div class="theory-box" style="background:#fff7ed; border-left:4px solid #ea580c; margin-top:14px;">
                <h4>🔗 Vrei mai mult? Vezi A2 Positionsverben</h4>
                <p>Aici am tratat doar <strong>„in" + Dativ pentru locație</strong> (Wo?). Germana are <strong>9 Wechselpräpositionen</strong> (in, an, auf, vor, hinter, über, unter, neben, zwischen) care pot răspunde la <strong>Wo? (Dativ)</strong> SAU <strong>Wohin? (Akkusativ)</strong>. Plus prepozițiile fixe (durch, gegen, um, aus, von, nach, gegenüber).</p>
                <p>Pentru tratamentul complet, vezi cursurile A2:</p>
                <ul style="margin-left:18px; margin-top:6px;">
                    <li><a href="https://claudiatoth.github.io/curs-a2-positionsverben-teil-1/" target="_blank" style="color:#065f46;"><strong>A2 Positionsverben Teil 1</strong></a> — 9 Wechselpräpositionen + Wo/Wohin + verbele de poziție (liegen/legen, stehen/stellen)</li>
                    <li><a href="https://claudiatoth.github.io/curs-a2-positionsverben-teil-2/" target="_blank" style="color:#065f46;"><strong>A2 Positionsverben Teil 2</strong></a> — 7 prepoziții fixe Dativ + 6 fixe Akkusativ + forme contrase (zum/zur/beim/vom)</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 4: Sinteză -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>💚 5. Sinteză — turul casei lui Acar + Aufräumen</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-sinteza.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🏠 Turul complet al casei (Acar îți povestește)</h4>
                <p>„Mein Haus ist in Oranienburg, am Lehnitzsee. <strong>Im Erdgeschoss</strong> gibt es das Wohnzimmer mit einem Sofa, einem Sessel und einem Fernseher. <strong>In der Küche</strong> sind der Herd, der Backofen, der Kühlschrank und die Spülmaschine. <strong>Im Obergeschoss</strong> sind das Schlafzimmer mit Bett und Kleiderschrank, das Badezimmer mit Dusche und Badewanne, und das Kinderzimmer mit Babybett. <strong>Auf der Dachterrasse</strong> stehen der Grill und die Sonnenliege."</p>
            </div>

            <div class="theory-box" style="background:#fef3c7; margin-top:14px;">
                <h4>🧹 Verb nou: aufräumen (a face curat / a strânge)</h4>
                <p>Verb <strong>separabil</strong>, regulat: <em>Ich räume mein Zimmer auf.</em> (Îmi fac curat în cameră.) Prefixul <strong>auf</strong> merge la final, ca la toate verbele separabile din Lecția 9. Vezi conjugarea completă în secțiunea 🔁 <strong>Verbe</strong>.</p>
            </div>

            <div class="theory-box" style="background:#ecfdf5; margin-top:14px;">
                <h4>🔗 Vrei mai mult vocabular Wohnen?</h4>
                <p>Pentru aprofundare pe vocabular și exerciții suplimentare:</p>
                <ul style="margin-left:18px; margin-top:6px;">
                    <li><a href="https://claudiatoth.github.io/das-haus-umzug/" target="_blank" style="color:#065f46;"><strong>das-haus-umzug</strong></a> — casa înainte/după mutare (mobilier extins)</li>
                    <li><a href="https://claudiatoth.github.io/claudia-zimmer/" target="_blank" style="color:#065f46;"><strong>claudia-zimmer</strong></a> — camera Claudiei (vocabular cameră)</li>
                    <li><a href="https://claudiatoth.github.io/in-der-kueche/" target="_blank" style="color:#065f46;"><strong>in-der-kueche</strong></a> — în bucătărie (vocabular bucătărie)</li>
                </ul>
            </div>
        </div>
    </div>
`;

document.getElementById('theory-container').innerHTML = theoryHTML;

function toggleSubSection(index) {
    const content = document.getElementById('sub-section-' + index);
    const arrow = document.querySelectorAll('.sub-arrow')[index];
    if (content) content.classList.toggle('active');
    if (arrow) arrow.classList.toggle('rotated');
}

function toggleAudio(event, audioId) {
    event.stopPropagation();
    const audio = document.getElementById(audioId);
    const btn = document.getElementById('btn-' + audioId);
    if (!audio || !btn) return;
    if (audio.paused) {
        document.querySelectorAll('audio').forEach(a => { if (a !== audio) { a.pause(); a.currentTime = 0; } });
        document.querySelectorAll('.audio-btn').forEach(b => b.textContent = '▶');
        audio.play();
        btn.textContent = '⏸';
        audio.onended = () => { btn.textContent = '▶'; };
    } else {
        audio.pause();
        btn.textContent = '▶';
    }
}
