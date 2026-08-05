document.addEventListener('DOMContentLoaded', () => {
    // 1. Core Data
    const RUBRICS = {
        "A1": {
            id: "A1",
            themeClass: "level-a1",
            contentPoints: 18,
            grammarPoints: 12,
            contentWeightPct: 60,
            grammarWeightPct: 40,
            content: [
                { id: 1, name: "Paragraph Formatting", max: 2 },
                { id: 2, name: "Topic Sentence", max: 3 },
                { id: 3, name: "Supporting Sentences (Main Idea Sentence)", max: 3 },
                { id: 4, name: "Supporting Sentences (Explanation)", max: 3 },
                { id: 5, name: "Concluding sentence", max: 3 }
            ],
            grammar: [
                { id: 6, name: "Punctuation & Capitalization", max: 4, colorClass: "bg-purple", textClass: "text-purple" },
                { id: 7, name: "Transition Words", max: 4, colorClass: "bg-pink", textClass: "text-pink" },
                { id: 8, name: "Sentence Fragments", max: 4, colorClass: "bg-orange", textClass: "text-orange" },
                { id: 9, name: "Subject-Verb Agreement", max: 4, colorClass: "bg-cyan", textClass: "text-cyan" },
                { id: 10, name: "Compound Sentence", max: 4, colorClass: "bg-emerald", textClass: "text-emerald" }
            ]
        },
        "A2": {
            id: "A2",
            themeClass: "level-a2",
            contentPoints: 18,
            grammarPoints: 12,
            contentWeightPct: 60,
            grammarWeightPct: 40,
            content: [
                { id: 1, name: "Paragraph Formatting", max: 2 },
                { id: 2, name: "Topic Sentence", max: 3 },
                { id: 3, name: "Supporting Sentences (Main Idea Sentence)", max: 3 },
                { id: 4, name: "Supporting Sentences (Explanation)", max: 3 },
                { id: 5, name: "Concluding sentence", max: 3 }
            ],
            grammar: [
                { id: 6, name: "Punctuation & Capitalization", max: 4, colorClass: "bg-purple", textClass: "text-purple" },
                { id: 7, name: "Transition Words", max: 4, colorClass: "bg-pink", textClass: "text-pink" },
                { id: 8, name: "Sentence Fragments", max: 4, colorClass: "bg-orange", textClass: "text-orange" },
                { id: 9, name: "Subject-Verb Agreement", max: 4, colorClass: "bg-cyan", textClass: "text-cyan" },
                { id: 10, name: "Compound Sentence", max: 4, colorClass: "bg-emerald", textClass: "text-emerald" }
            ]
        },
        "B1": {
            id: "B1",
            themeClass: "level-b1",
            contentPoints: 15,
            grammarPoints: 15,
            contentWeightPct: 50,
            grammarWeightPct: 50,
            content: [
                { id: 1, name: "Paragraph Formatting", max: 2 },
                { id: 2, name: "Topic Sentence", max: 3 },
                { id: 3, name: "Supporting Sentences (Main Idea Sentences)", max: 3 },
                { id: 4, name: "Supporting Sentences (Explanation)", max: 3 },
                { id: 5, name: "Concluding sentences", max: 3 }
            ],
            grammar: [
                { id: 6, name: "Punctuation & Capitalization", max: 4, colorClass: "bg-purple", textClass: "text-purple" },
                { id: 7, name: "Transition Words", max: 4, colorClass: "bg-pink", textClass: "text-pink" },
                { id: 8, name: "Sentence Fragments", max: 4, colorClass: "bg-orange", textClass: "text-orange" },
                { id: 9, name: "Subject-Verb Agreement", max: 4, colorClass: "bg-cyan", textClass: "text-cyan" },
                { id: 10, name: "Compound Sentences", max: 4, colorClass: "bg-emerald", textClass: "text-emerald" }
            ]
        }
    };

    // 2. DOM Elements
    const contentCritList = document.getElementById('content-criteria-list');
    const grammarCritList = document.getElementById('grammar-criteria-list');
    const summaryTbody = document.getElementById('summary-tbody');
    const levelSelect = document.getElementById('level-select');
    const resetBtn = document.getElementById('reset-btn');
    const selectBtn = document.getElementById('select-btn');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    // 3. State Variables
    let currentRubric = null;

    // 4. Helper Functions
    function hexToRgba(hex, alpha) {
        hex = hex.replace('#', '');
        if (hex.length === 3) hex = hex.split('').map(char => char + char).join('');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    function createCritRow(crit, colorClass) {
        const row = document.createElement('div');
        row.className = `crit-row fade-in row-${colorClass}`;
        let scoresHtml = '';
        for(let i=0; i<=crit.max; i++) {
            scoresHtml += `<label class="score-btn"><input type="radio" name="crit${crit.id}" value="${i}"><span>${i}</span></label>`;
        }
        row.innerHTML = `
            <div class="crit-info">
                <div class="crit-num ${colorClass}">${crit.id}</div>
                <span class="crit-name">${crit.name}</span>
            </div>
            <div class="crit-scores">
                ${scoresHtml}
            </div>
        `;
        return row;
    }

    function showToastAlert(message, type = 'warning') {
        let toast = document.getElementById('custom-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'custom-toast';
            toast.className = 'custom-toast';
            document.body.appendChild(toast);
        }
        toast.className = `custom-toast toast-${type} show`;
        toast.textContent = message;

        if (toast.timeoutId) clearTimeout(toast.timeoutId);
        toast.timeoutId = setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    // 5. Core Logic Functions
    function updateActiveLevelTheme() {
        if (!currentRubric) return;
        const root = document.documentElement;
        const levelColors = {
            'A1': '#1D8A7E',
            'A2': '#3874CB',
            'B1': '#7057A4'
        };
        const activeColor = levelColors[currentRubric.id] || '#1D8A7E';

        root.style.setProperty('--primary', activeColor);
        root.style.setProperty('--primary-hover', activeColor); 
        
        const rgbaGlow = hexToRgba(activeColor, 0.4);
        const rgbaTransparant = hexToRgba(activeColor, 0.15);
        root.style.setProperty('--primary-glow', rgbaGlow);
        root.style.setProperty('--primary-transparent', rgbaTransparant);
    }

    function saveScores() {
        if (!currentRubric) return;
        const selections = {};
        const radioInputs = document.querySelectorAll('input[type="radio"]:checked');
        radioInputs.forEach(input => {
            selections[input.name] = input.value;
        });
        localStorage.setItem(`scores_${currentRubric.id}`, JSON.stringify(selections));
    }

    function loadScores() {
        if (!currentRubric) return;
        const saved = localStorage.getItem(`scores_${currentRubric.id}`);
        if (!saved) return;
        const selections = JSON.parse(saved);
        Object.keys(selections).forEach(name => {
            const input = document.querySelector(`input[name="${name}"][value="${selections[name]}"]`);
            if (input) input.checked = true;
        });
    }

    function calculateScores() {
        if (!currentRubric) return;
        let contentSum = 0, grammarSum = 0;
        const contentMaxSum = currentRubric.content.reduce((sum, c) => sum + c.max, 0);
        const grammarMaxSum = currentRubric.grammar.reduce((sum, c) => sum + c.max, 0);

        let maxGlobalSelected = 0;
        const allItems = [...currentRubric.content, ...currentRubric.grammar];
        allItems.forEach(crit => {
            if (document.querySelector(`input[name="crit${crit.id}"]:checked`)) {
                maxGlobalSelected = Math.max(maxGlobalSelected, crit.id);
            }
        });

        const processGroup = (group) => {
            let sum = 0;
            group.forEach(crit => {
                const selected = document.querySelector(`input[name="crit${crit.id}"]:checked`);
                const val = selected ? parseInt(selected.value) : null;
                const outCell = document.getElementById(`score-out-${crit.id}`);
                if (val !== null) {
                    sum += val;
                    outCell.textContent = `${val}/${crit.max}`;
                    outCell.classList.remove('missing-score');
                } else {
                    if (crit.id < maxGlobalSelected) {
                        outCell.textContent = `0/${crit.max}`;
                        outCell.classList.add('missing-score');
                    } else {
                        outCell.textContent = '';
                        outCell.classList.remove('missing-score');
                    }
                }
            });
            return sum;
        };

        contentSum = processGroup(currentRubric.content);
        grammarSum = processGroup(currentRubric.grammar);

        const contentWeighted = contentMaxSum > 0 ? (contentSum / contentMaxSum) * currentRubric.contentPoints : 0;
        const grammarWeighted = grammarMaxSum > 0 ? (grammarSum / grammarMaxSum) * currentRubric.grammarPoints : 0;
        const totalScore = contentWeighted + grammarWeighted;

        document.getElementById('total-content').textContent = contentWeighted.toFixed(2) + `/${currentRubric.contentPoints}`;
        document.getElementById('total-grammar').textContent = grammarWeighted.toFixed(2) + `/${currentRubric.grammarPoints}`;
        document.getElementById('total-score').textContent = totalScore.toFixed(2);
        
        const floatingScore = document.getElementById('top-total-score');
        if (floatingScore) floatingScore.textContent = totalScore.toFixed(2);
    }

    function renderRubric(levelId) {
        currentRubric = RUBRICS[levelId];
        if (!currentRubric) return;

        contentCritList.innerHTML = '';
        currentRubric.content.forEach(crit => contentCritList.appendChild(createCritRow(crit, 'special-green')));

        grammarCritList.innerHTML = '';
        currentRubric.grammar.forEach(crit => grammarCritList.appendChild(createCritRow(crit, crit.colorClass)));

        summaryTbody.innerHTML = '';
        const groups = [
            { items: currentRubric.content, weight: currentRubric.contentWeightPct, label: 'Content' },
            { items: currentRubric.grammar, weight: currentRubric.grammarWeightPct, label: 'Grammar' }
        ];

        groups.forEach(group => {
            group.items.forEach((crit, index) => {
                const tr = document.createElement('tr');
                if (group.label === 'Grammar' && index === 0) tr.className = 'section-divider';
                if (index === 0) {
                    const tdCat = document.createElement('td');
                    tdCat.rowSpan = group.items.length;
                    tdCat.className = 'cat-col';
                    tdCat.innerHTML = `${group.label}<br>(${group.weight}%)`;
                    tr.appendChild(tdCat);
                }
                tr.innerHTML += `
                    <td class="num-col ${crit.textClass || ''}">${crit.id}</td>
                    <td>${crit.name}:</td>
                    <td class="score-val" id="score-out-${crit.id}"></td>
                `;
                summaryTbody.appendChild(tr);
            });
        });

        levelSelect.className = `badge level-select ${currentRubric.themeClass}`;
        document.getElementById('content-weight-badge').textContent = `${currentRubric.contentWeightPct}% Weight (${currentRubric.contentPoints} pts)`;
        document.getElementById('grammar-weight-badge').textContent = `${currentRubric.grammarWeightPct}% Weight (${currentRubric.grammarPoints} pts)`;
        document.getElementById('summary-content-label').textContent = `Content and Paragraph Structure (${currentRubric.contentWeightPct}%)`;
        document.getElementById('summary-grammar-label').textContent = `Grammar for writing (${currentRubric.grammarWeightPct}%)`;

        const radioInputs = document.querySelectorAll('input[type="radio"]');
        radioInputs.forEach(input => input.addEventListener('change', (e) => {
            const row = e.target.closest('.crit-row');
            if (row) row.classList.remove('missing-row-pulse');
            saveScores();
            calculateScores();
        }));

        loadScores();
        calculateScores();
        updateActiveLevelTheme();
    }

    // 6. Interaction Listeners
    themeToggleBtn.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        sunIcon.style.display = newTheme === 'dark' ? 'none' : 'block';
        moonIcon.style.display = newTheme === 'dark' ? 'block' : 'none';
    });

    levelSelect.addEventListener('change', (e) => {
        localStorage.setItem('selectedLevel', e.target.value);
        renderRubric(e.target.value);
    });

    resetBtn.addEventListener('click', () => {
        document.querySelectorAll('.crit-row').forEach(row => row.classList.remove('missing-row-pulse'));
        document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
        if (currentRubric) localStorage.removeItem(`scores_${currentRubric.id}`);
        calculateScores();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    selectBtn.addEventListener('click', () => {
        if (!currentRubric) return;

        const allCriteria = [...currentRubric.content, ...currentRubric.grammar];
        const missingCriteria = [];

        allCriteria.forEach(crit => {
            const selected = document.querySelector(`input[name="crit${crit.id}"]:checked`);
            if (!selected) {
                missingCriteria.push(crit);
            }
        });

        if (missingCriteria.length > 0) {
            const missingNumbers = missingCriteria.map(c => `#${c.id}`).join(', ');

            // Highlight missing rows
            document.querySelectorAll('.crit-row').forEach(row => row.classList.remove('missing-row-pulse'));
            missingCriteria.forEach(crit => {
                const input = document.querySelector(`input[name="crit${crit.id}"]`);
                if (input) {
                    const row = input.closest('.crit-row');
                    if (row) row.classList.add('missing-row-pulse');
                }
            });

            // Scroll to the first missing item
            const firstInput = document.querySelector(`input[name="crit${missingCriteria[0].id}"]`);
            if (firstInput) {
                const firstRow = firstInput.closest('.crit-row');
                if (firstRow) {
                    firstRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }

            showToastAlert(`⚠️ Incomplete Rubric! Missing criteria: ${missingNumbers}. Please complete all scores before copying.`, 'warning');
            return;
        }

        copyFormattedSummaryToClipboard();
        selectBtn.innerHTML = 'COPIED!';
        setTimeout(() => { selectBtn.innerHTML = 'Copy Summary'; }, 2000);
        showToastAlert('✅ Score summary copied to clipboard!', 'success');
    });

    function copyFormattedSummaryToClipboard() {
        if (!currentRubric) return;

        const allContent = currentRubric.content;
        const allGrammar = currentRubric.grammar;

        let contentSum = 0;
        let grammarSum = 0;

        allContent.forEach(crit => {
            const selected = document.querySelector(`input[name="crit${crit.id}"]:checked`);
            if (selected) contentSum += parseInt(selected.value);
        });

        allGrammar.forEach(crit => {
            const selected = document.querySelector(`input[name="crit${crit.id}"]:checked`);
            if (selected) grammarSum += parseInt(selected.value);
        });

        const contentMaxSum = allContent.reduce((sum, c) => sum + c.max, 0);
        const grammarMaxSum = allGrammar.reduce((sum, c) => sum + c.max, 0);

        const contentWeighted = contentMaxSum > 0 ? (contentSum / contentMaxSum) * currentRubric.contentPoints : 0;
        const grammarWeighted = grammarMaxSum > 0 ? (grammarSum / grammarMaxSum) * currentRubric.grammarPoints : 0;
        const totalScore = contentWeighted + grammarWeighted;

        // Compact HTML Table with tight padding for Word/Docs/Notion
        let html = `<div style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #1e293b; max-width: 550px; line-height: 1.3;">`;
        html += `<h4 style="margin: 0 0 6px 0; font-size: 14px; font-weight: bold; color: #0f172a; border-bottom: 2px solid #334155; padding-bottom: 4px;">Score Receipt</h4>`;
        html += `<table style="border-collapse: collapse; width: 100%; font-size: 12px; color: #1e293b;">`;
        html += `<thead>
            <tr style="border-bottom: 2px solid #475569; background-color: #f8fafc;">
                <th style="padding: 5px 8px; text-align: center; font-size: 11px; text-transform: uppercase; color: #475569; width: 10%;">No.</th>
                <th style="padding: 5px 8px; text-align: left; font-size: 11px; text-transform: uppercase; color: #475569;">Criteria</th>
                <th style="padding: 5px 8px; text-align: right; font-size: 11px; text-transform: uppercase; color: #475569; width: 22%;">Score</th>
            </tr>
        </thead><tbody>`;

        // Content Rows
        allContent.forEach((crit, index) => {
            const selected = document.querySelector(`input[name="crit${crit.id}"]:checked`);
            const scoreVal = selected ? `${selected.value}/${crit.max}` : `0/${crit.max}`;
            
            html += `<tr style="border-bottom: 1px solid #e2e8f0;">`;
            html += `<td style="padding: 5px 8px; text-align: center; font-weight: bold; color: #1d8a7e;">${crit.id}</td>`;
            html += `<td style="padding: 5px 8px;">${crit.name}:</td>`;
            html += `<td style="padding: 5px 8px; text-align: right; font-family: monospace; font-weight: bold;">${scoreVal}</td>`;
            html += `</tr>`;
        });

        // Grammar Rows
        allGrammar.forEach((crit, index) => {
            const selected = document.querySelector(`input[name="crit${crit.id}"]:checked`);
            const scoreVal = selected ? `${selected.value}/${crit.max}` : `0/${crit.max}`;
            const rowStyle = index === 0 ? 'border-top: 2px solid #94a3b8; border-bottom: 1px solid #e2e8f0;' : 'border-bottom: 1px solid #e2e8f0;';

            html += `<tr style="${rowStyle}">`;
            html += `<td style="padding: 5px 8px; text-align: center; font-weight: bold; color: #7057a4;">${crit.id}</td>`;
            html += `<td style="padding: 5px 8px;">${crit.name}:</td>`;
            html += `<td style="padding: 5px 8px; text-align: right; font-family: monospace; font-weight: bold;">${scoreVal}</td>`;
            html += `</tr>`;
        });

        html += `</tbody><tfoot>`;
        html += `<tr style="border-top: 2px solid #475569;">
            <td colspan="2" style="padding: 5px 8px; font-weight: bold; text-align: right;">Content & Paragraph Structure (${currentRubric.contentWeightPct}%)</td>
            <td style="padding: 5px 8px; text-align: right; font-weight: bold; color: #3874CB;">${contentWeighted.toFixed(2)}/${currentRubric.contentPoints}</td>
        </tr>`;
        html += `<tr>
            <td colspan="2" style="padding: 5px 8px; font-weight: bold; text-align: right;">Grammar for Writing (${currentRubric.grammarWeightPct}%)</td>
            <td style="padding: 5px 8px; text-align: right; font-weight: bold; color: #3874CB;">${grammarWeighted.toFixed(2)}/${currentRubric.grammarPoints}</td>
        </tr>`;
        html += `<tr style="border-top: 2px solid #0f172a; background-color: #f1f5f9;">
            <td colspan="2" style="padding: 6px 8px; font-size: 13px; font-weight: bold; text-align: right;">Total Score / 30</td>
            <td style="padding: 6px 8px; font-size: 13px; font-weight: bold; text-align: right; color: #3874CB;">${totalScore.toFixed(2)}</td>
        </tr>`;
        html += `</tfoot></table></div>`;

        // Text fallback
        let plainText = `SCORE RECEIPT\n`;
        plainText += `Content (${currentRubric.contentWeightPct}%): ${contentWeighted.toFixed(2)}/${currentRubric.contentPoints}\n`;
        plainText += `Grammar (${currentRubric.grammarWeightPct}%): ${grammarWeighted.toFixed(2)}/${currentRubric.grammarPoints}\n`;
        plainText += `TOTAL SCORE: ${totalScore.toFixed(2)} / 30.00\n\n`;
        allContent.forEach(c => {
            const sel = document.querySelector(`input[name="crit${c.id}"]:checked`);
            plainText += `[${c.id}] ${c.name}: ${sel ? sel.value : 0}/${c.max}\n`;
        });
        allGrammar.forEach(c => {
            const sel = document.querySelector(`input[name="crit${c.id}"]:checked`);
            plainText += `[${c.id}] ${c.name}: ${sel ? sel.value : 0}/${c.max}\n`;
        });

        if (navigator.clipboard && window.ClipboardItem) {
            const blobHtml = new Blob([html], { type: 'text/html' });
            const blobText = new Blob([plainText], { type: 'text/plain' });
            const data = [new ClipboardItem({ 'text/html': blobHtml, 'text/plain': blobText })];
            
            navigator.clipboard.write(data).catch(() => {
                fallbackCopyHtml(html);
            });
        } else {
            fallbackCopyHtml(html);
        }
    }

    function fallbackCopyHtml(htmlContent) {
        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.left = '-9999px';
        container.style.top = '-9999px';
        container.innerHTML = htmlContent;
        document.body.appendChild(container);
        
        const range = document.createRange();
        range.selectNode(container);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        document.body.removeChild(container);
    }

    // 7. Initial Initialization
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', savedTheme);
    sunIcon.style.display = savedTheme === 'dark' ? 'none' : 'block';
    moonIcon.style.display = savedTheme === 'dark' ? 'block' : 'none';
    
    const initialLevel = localStorage.getItem('selectedLevel') || levelSelect.value;
    levelSelect.value = initialLevel;
    renderRubric(initialLevel);

    // Draggable Score Card
    const floatingCard = document.getElementById('draggable-score');
    const dragHandle = document.querySelector('.drag-handle');
    let isDragging = false, offsetX, offsetY;

    if (dragHandle && floatingCard) {
        dragHandle.addEventListener('mousedown', (e) => {
            isDragging = true;
            const rect = floatingCard.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
            floatingCard.classList.add('is-dragging');
        });
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            floatingCard.style.left = `${Math.max(0, Math.min(e.clientX - offsetX, window.innerWidth - floatingCard.offsetWidth))}px`;
            floatingCard.style.top = `${Math.max(0, Math.min(e.clientY - offsetY, window.innerHeight - floatingCard.offsetHeight))}px`;
            floatingCard.style.right = 'auto'; floatingCard.style.bottom = 'auto'; floatingCard.style.transform = 'none';
        });
        document.addEventListener('mouseup', () => {
            isDragging = false;
            floatingCard.classList.remove('is-dragging');
        });
    }
});
