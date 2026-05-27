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
                <p>Acar e maistru (Vorarbeiter) pe șantier. Acum, după ce și-a strâns bani, a cumpărat o casă mare lângă <strong>Lehnitzsee</strong>, în Oranienburg. Familia lui se mută săptămâna asta și Acar îți face turul.</p>
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
                <tr><th>Germană (Sg · Pl)</th><th>Traducere RO (Sg · Pl)</th></tr>
                <tr><td>das Haus · die Häuser</td><td>casa · casele (Acar: casă mare în Oranienburg)</td></tr>
                <tr><td>die Wohnung · die Wohnungen</td><td>apartamentul · apartamentele (Andreea: apartament de studentă în Berlin)</td></tr>
                <tr><td>die WG · die WGs (Wohngemeinschaft)</td><td>locuința comună · locuințele comune (studenți care împart chiria)</td></tr>
            </table>

            <p style="margin: 14px 0 4px;"><strong>Camerele unei locuințe:</strong></p>
            <table class="grammar-table">
                <tr><th>Germană (Sg · Pl)</th><th>Traducere RO (Sg · Pl)</th></tr>
                <tr><td>das Wohnzimmer · die Wohnzimmer</td><td>livingul · livingurile (pl identic în DE)</td></tr>
                <tr><td>die Küche · die Küchen</td><td>bucătăria · bucătăriile</td></tr>
                <tr><td>das Schlafzimmer · die Schlafzimmer</td><td>dormitorul · dormitoarele (pl identic)</td></tr>
                <tr><td>das Badezimmer · die Badezimmer (das Bad · die Bäder)</td><td>baia · băile</td></tr>
                <tr><td>das Kinderzimmer · die Kinderzimmer</td><td>camera copilului · camerele copiilor (pl identic)</td></tr>
                <tr><td>das Arbeitszimmer · die Arbeitszimmer</td><td>biroul · birourile / camera de lucru · camerele de lucru</td></tr>
                <tr><td>das Gästezimmer · die Gästezimmer</td><td>camera de oaspeți · camerele de oaspeți</td></tr>
                <tr><td>das Gäste-WC · die Gäste-WCs</td><td>toaleta pentru oaspeți · toaletele pentru oaspeți</td></tr>
            </table>

            <p style="margin: 14px 0 4px;"><strong>Zone exterioare + etaje:</strong></p>
            <table class="grammar-table">
                <tr><th>Germană (Sg · Pl)</th><th>Traducere RO (Sg · Pl)</th></tr>
                <tr><td>der Garten · die Gärten</td><td>grădina · grădinile</td></tr>
                <tr><td>der Balkon · die Balkone</td><td>balconul · balcoanele</td></tr>
                <tr><td>die Terrasse · die Terrassen (die Dachterrasse · die Dachterrassen)</td><td>terasa · terasele / terasa pe acoperiș · terasele pe acoperiș</td></tr>
                <tr><td>das Erdgeschoss · die Erdgeschosse (EG)</td><td>parterul · parterele</td></tr>
                <tr><td>das Obergeschoss · die Obergeschosse (OG)</td><td>etajul · etajele</td></tr>
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
                <tr><th>Germană (Sg · Pl)</th><th>Traducere RO (Sg · Pl)</th></tr>
                <tr><td>das Bett · die Betten</td><td>patul · paturile</td></tr>
                <tr><td>der Nachttisch · die Nachttische</td><td>noptiera · noptierele</td></tr>
                <tr><td>der Kleiderschrank · die Kleiderschränke</td><td>dulapul de haine · dulapurile de haine</td></tr>
                <tr><td>die Kommode · die Kommoden</td><td>comoda · comodele</td></tr>
                <tr><td>die Lampe · die Lampen</td><td>lampa · lămpile / veioza · veiozele</td></tr>
                <tr><td>der Teppich · die Teppiche</td><td>covorul · covoarele</td></tr>
            </table>

            <p style="margin: 14px 0 4px;"><strong>Wohnzimmer (living):</strong></p>
            <table class="grammar-table">
                <tr><th>Germană (Sg · Pl)</th><th>Traducere RO (Sg · Pl)</th></tr>
                <tr><td>das Sofa · die Sofas</td><td>canapeaua · canapelele</td></tr>
                <tr><td>der Sessel · die Sessel</td><td>fotoliul · fotoliile (pl identic)</td></tr>
                <tr><td>der Fernseher · die Fernseher</td><td>televizorul · televizoarele (pl identic)</td></tr>
                <tr><td>der Tisch · die Tische</td><td>masa · mesele</td></tr>
                <tr><td>das Bücherregal · die Bücherregale</td><td>biblioteca · bibliotecile (raft de cărți)</td></tr>
            </table>

            <p style="margin: 14px 0 4px;"><strong>Küche (bucătărie):</strong></p>
            <table class="grammar-table">
                <tr><th>Germană (Sg · Pl)</th><th>Traducere RO (Sg · Pl)</th></tr>
                <tr><td>der Herd · die Herde</td><td>aragazul · aragazurile (plita · plitele)</td></tr>
                <tr><td>der Backofen · die Backöfen</td><td>cuptorul · cuptoarele</td></tr>
                <tr><td>der Kühlschrank · die Kühlschränke</td><td>frigiderul · frigiderele</td></tr>
                <tr><td>die Spülmaschine · die Spülmaschinen</td><td>mașina de spălat vase · mașinile de spălat vase</td></tr>
                <tr><td>der Stuhl · die Stühle</td><td>scaunul · scaunele</td></tr>
            </table>

            <p style="margin: 14px 0 4px;"><strong>Badezimmer (baie):</strong></p>
            <table class="grammar-table">
                <tr><th>Germană (Sg · Pl)</th><th>Traducere RO (Sg · Pl)</th></tr>
                <tr><td>die Badewanne · die Badewannen</td><td>cada de baie · căzile de baie</td></tr>
                <tr><td>die Dusche · die Duschen</td><td>dușul · dușurile</td></tr>
                <tr><td>die Toilette · die Toiletten</td><td>toaleta · toaletele</td></tr>
                <tr><td>das Waschbecken · die Waschbecken</td><td>chiuveta · chiuvetele (pl identic)</td></tr>
                <tr><td>die Waschmaschine · die Waschmaschinen</td><td>mașina de spălat rufe · mașinile de spălat rufe</td></tr>
            </table>

            <p style="margin: 14px 0 4px;"><strong>Arbeits-/Kinderzimmer + Balkon:</strong></p>
            <table class="grammar-table">
                <tr><th>Germană (Sg · Pl)</th><th>Traducere RO (Sg · Pl)</th></tr>
                <tr><td>der Schreibtisch · die Schreibtische</td><td>biroul · birourile (masa de lucru)</td></tr>
                <tr><td>das Babybett · die Babybetten</td><td>pătuțul de bebeluș · pătuțurile de bebeluș</td></tr>
                <tr><td>der Wickeltisch · die Wickeltische</td><td>masa de înfășat · mesele de înfășat</td></tr>
                <tr><td>der Grill · die Grills</td><td>grătarul · grătarele</td></tr>
                <tr><td>die Sonnenliege · die Sonnenliegen</td><td>șezlongul · șezlongurile</td></tr>
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
                <p>Regula articolelor la Dativ: <strong>der → dem, die → der, das → dem, plural die → den + -n</strong> la substantiv.</p>
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
                <tr><td>Der Grill ist <strong>auf der</strong> Terrasse.</td><td>Grătarul e pe terasă.</td></tr>
            </table>
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
                <p>Verb <strong>separabil</strong>, regulat: <em>Ich räume mein Zimmer auf.</em> (Îmi fac curat în cameră.) Prefixul <strong>auf</strong> merge la final. Vezi conjugarea completă în secțiunea 🔁 <strong>Verbe</strong>.</p>
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
