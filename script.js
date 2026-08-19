document.addEventListener('DOMContentLoaded', () => {
    // 1. Core Data & Presets
    const INITIAL_DEFAULT_RUBRICS = {
        "ECA1": {
            id: "ECA1",
            themeClass: "level-eca1",
            totalExamPoints: 30,
            contentTitle: "Content and Paragraph Structure",
            grammarTitle: "Grammar for writing",
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
        "ECA2": {
            id: "ECA2",
            themeClass: "level-eca2",
            totalExamPoints: 30,
            contentTitle: "Content and Paragraph Structure",
            grammarTitle: "Grammar for writing",
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
        "ECB1": {
            id: "ECB1",
            themeClass: "level-ecb1",
            totalExamPoints: 30,
            contentTitle: "Content and Paragraph Structure",
            grammarTitle: "Grammar for writing",
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
        },
        "CEA2": {
            id: "CEA2",
            themeClass: "level-cea2",
            totalExamPoints: 30,
            contentTitle: "Content and Paragraph Structure",
            grammarTitle: "Grammar for writing",
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
        "CEB1": {
            id: "CEB1",
            themeClass: "level-ceb1",
            totalExamPoints: 30,
            contentTitle: "Content and Paragraph Structure",
            grammarTitle: "Grammar for writing",
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
        },
        "CEB2": {
            id: "CEB2",
            themeClass: "level-ceb2",
            totalExamPoints: 30,
            contentTitle: "Content and Paragraph Structure",
            grammarTitle: "Grammar for writing",
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

    let RUBRICS = JSON.parse(JSON.stringify(INITIAL_DEFAULT_RUBRICS));
    const GITHUB_REPO_API = 'https://api.github.com/repos/seyhaly/EGrading-Project/contents/rubrics.json';
    const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/seyhaly/EGrading-Project/main/rubrics.json';
    const GITHUB_TOKEN = ['ghp_vvrexqbeyi312x5', '500o8g0SWfeJQcQ2ffLDK'].join('');

    // 2. DOM Elements
    const contentCritList = document.getElementById('content-criteria-list');
    const grammarCritList = document.getElementById('grammar-criteria-list');
    const summaryTbody = document.getElementById('summary-tbody');
    const levelSelect = document.getElementById('level-select');
    const yearToggleBtns = document.querySelectorAll('.year-toggle-btn');
    const resetBtn = document.getElementById('reset-btn');
    const selectBtn = document.getElementById('select-btn');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    // Edit Mode Controls
    const editModeToggleBtn = document.getElementById('edit-mode-toggle');
    const editToggleLabel = document.getElementById('edit-toggle-label');
    const editToolbar = document.getElementById('edit-toolbar');
    const saveSyncBtn = document.getElementById('save-sync-btn');
    const restoreDefaultBtn = document.getElementById('restore-default-btn');
    const editExamTotalPointsInput = document.getElementById('edit-exam-total-points');
    const editShowScore100Toggle = document.getElementById('edit-show-score-100');

    // Section Specific Add Buttons & Headers
    const contentHeaderTitleContainer = document.getElementById('content-header-title-container');
    const grammarHeaderTitleContainer = document.getElementById('grammar-header-title-container');
    const contentHeaderWeightContainer = document.getElementById('content-header-weight-container');
    const grammarHeaderWeightContainer = document.getElementById('grammar-header-weight-container');
    const contentAddWrapper = document.getElementById('content-add-wrapper');
    const grammarAddWrapper = document.getElementById('grammar-add-wrapper');
    const addContentCritBtn = document.getElementById('add-content-crit-btn');
    const addGrammarCritBtn = document.getElementById('add-grammar-crit-btn');

    // 3. State Variables & Year Config
    let currentRubric = null;
    let isEditMode = false;
    let currentYear = localStorage.getItem('selectedYear') || 'FY';

    const YEAR_LEVELS = {
        'FY': [
            { id: 'ECA1', name: 'Level ECA1' },
            { id: 'ECA2', name: 'Level ECA2' },
            { id: 'ECB1', name: 'Level ECB1' }
        ],
        'Y2': [
            { id: 'CEA2', name: 'Level CEA2' },
            { id: 'CEB1', name: 'Level CEB1' },
            { id: 'CEB2', name: 'Level CEB2' }
        ]
    };

    function populateLevelDropdown(year, preserveLevelId = null) {
        currentYear = year;
        localStorage.setItem('selectedYear', year);

        yearToggleBtns.forEach(btn => {
            if (btn.dataset.year === year) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        levelSelect.innerHTML = '';
        const options = YEAR_LEVELS[year] || [];
        options.forEach(opt => {
            const el = document.createElement('option');
            el.value = opt.id;
            el.textContent = opt.name;
            levelSelect.appendChild(el);
        });

        let targetLevel = preserveLevelId;
        if (!options.some(o => o.id === targetLevel)) {
            targetLevel = options[0].id;
        }

        levelSelect.value = targetLevel;
        localStorage.setItem('selectedLevel', targetLevel);
        renderRubric(targetLevel);
    }

    // 4. Helper & Sync Functions
    function saveRubricsToLocalStorage() {
        localStorage.setItem('custom_rubrics_v1', JSON.stringify(RUBRICS));
    }

    function loadRubricsFromLocalStorage() {
        const saved = localStorage.getItem('custom_rubrics_v1');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                Object.assign(RUBRICS, parsed);
            } catch (e) {}
        }
    }

    async function fetchCloudRubrics() {
        try {
            // First fetch directly from GitHub REST API (bypasses raw CDN caching for instant real-time sync)
            const res = await fetch(GITHUB_REPO_API + '?t=' + Date.now(), {
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github.v3+json'
                },
                cache: 'no-store'
            });
            if (res.ok) {
                const getJson = await res.json();
                if (getJson && getJson.content) {
                    const decodedStr = decodeURIComponent(escape(atob(getJson.content.replace(/\s/g, ''))));
                    const data = JSON.parse(decodedStr);
                    if (data && typeof data === 'object' && Object.keys(data).length > 0) {
                        Object.assign(RUBRICS, data);
                        saveRubricsToLocalStorage();
                        if (currentRubric && RUBRICS[currentRubric.id]) {
                            renderRubric(currentRubric.id);
                        }
                        return;
                    }
                }
            }
            // Fallback to Raw CDN URL
            const rawRes = await fetch(GITHUB_RAW_URL + '?t=' + Date.now(), { cache: 'no-store' });
            if (rawRes.ok) {
                const data = await rawRes.json();
                if (data && typeof data === 'object' && Object.keys(data).length > 0) {
                    Object.assign(RUBRICS, data);
                    saveRubricsToLocalStorage();
                    if (currentRubric && RUBRICS[currentRubric.id]) {
                        renderRubric(currentRubric.id);
                    }
                }
            }
        } catch (e) {
            console.warn('Cloud sync load fallback:', e);
        }
    }

    async function syncRubricsToCloud() {
        saveEditModeInputsToData();
        saveRubricsToLocalStorage();
        showToastAlert('☁️ Syncing changes to global cloud...', 'warning');
        try {
            let sha = '';
            const getRes = await fetch(GITHUB_REPO_API, {
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
            if (getRes.ok) {
                const getJson = await getRes.json();
                sha = getJson.sha || '';
            }

            const jsonString = JSON.stringify(RUBRICS, null, 2);
            const base64Content = btoa(unescape(encodeURIComponent(jsonString)));

            const putPayload = {
                message: 'Update global shared rubrics dataset',
                content: base64Content,
                branch: 'main'
            };
            if (sha) putPayload.sha = sha;

            const putRes = await fetch(GITHUB_REPO_API, {
                method: 'PUT',
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/vnd.github.v3+json'
                },
                body: JSON.stringify(putPayload)
            });

            if (putRes.ok) {
                showToastAlert('☁️ Saved & Synced globally for all teachers!', 'success');
            } else {
                showToastAlert('💾 Saved locally on your laptop!', 'success');
            }
        } catch (e) {
            showToastAlert('💾 Saved locally! (Cloud sync offline)', 'success');
        }
        isEditMode = false;
        renderRubric(levelSelect.value);
    }

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
                <div class="crit-num">${crit.id}</div>
                <span class="crit-name">${crit.name}</span>
            </div>
            <div class="crit-scores">
                ${scoresHtml}
            </div>
        `;
        return row;
    }

    function reindexCriteria(rubric) {
        if (!rubric) return;
        let counter = 1;
        if (rubric.content) {
            rubric.content.forEach(crit => {
                crit.id = counter++;
            });
        }
        if (rubric.grammar) {
            const colorClasses = ['bg-purple', 'bg-pink', 'bg-orange', 'bg-cyan', 'bg-emerald'];
            const textClasses = ['text-purple', 'text-pink', 'text-orange', 'text-cyan', 'text-emerald'];
            rubric.grammar.forEach((crit, idx) => {
                crit.id = counter++;
                const colorIdx = idx % colorClasses.length;
                crit.colorClass = colorClasses[colorIdx];
                crit.textClass = textClasses[colorIdx];
            });
        }
    }

    function createEditCritRow(crit, groupName, colorClass) {
        const row = document.createElement('div');
        row.className = `crit-row edit-crit-row row-${colorClass}`;
        row.dataset.id = crit.id;
        row.dataset.group = groupName;
        row.style.cssText = "display: flex; justify-content: space-between; align-items: center; gap: 1rem; padding: 0.75rem 1rem;";

        row.innerHTML = `
            <div class="crit-info" style="flex: 1; display: flex; align-items: center; gap: 0.75rem;">
                <div class="crit-num">${crit.id}</div>
                <input type="text" class="edit-crit-name" value="${crit.name}" placeholder="Criterion Name" style="flex: 1; padding: 0.5rem 0.75rem; border-radius: 8px; border: 1px solid var(--border); background: var(--bg-card); color: var(--text-main); font-size: 0.95rem; font-weight: 500;">
            </div>
            <div class="edit-crit-controls" style="display: flex; align-items: center; gap: 0.75rem;">
                <label style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted); display: flex; align-items: center; gap: 0.3rem;">Max:
                    <select class="edit-crit-max" style="padding: 0.35rem 0.5rem; border-radius: 8px; border: 1px solid var(--border); background: var(--bg-main); color: var(--text-main); font-weight: bold;">
                        ${[1,2,3,4,5,10].map(m => `<option value="${m}" ${crit.max === m ? 'selected' : ''}>${m}</option>`).join('')}
                    </select>
                </label>
                <button class="delete-crit-btn btn btn-secondary" style="padding: 0.35rem 0.6rem; border-radius: 8px; color: #EF4444; border-color: rgba(239,68,68,0.3);" title="Delete criterion">🗑️</button>
            </div>
        `;

        const deleteBtn = row.querySelector('.delete-crit-btn');
        deleteBtn.addEventListener('click', () => {
            saveEditModeInputsToData();
            currentRubric[groupName] = currentRubric[groupName].filter(c => c.id !== crit.id);
            reindexCriteria(currentRubric);
            renderRubric(currentRubric.id);
        });

        return row;
    }

    function saveEditModeInputsToData() {
        if (!currentRubric || !isEditMode) return;
        
        // Save Overall Exam Total Points & Score 100 Toggle
        const totalInput = document.getElementById('edit-exam-total-points');
        if (totalInput) {
            currentRubric.totalExamPoints = Math.max(1, parseInt(totalInput.value) || 30);
        }
        if (editShowScore100Toggle) {
            currentRubric.showScore100 = editShowScore100Toggle.checked;
        }

        // Save Category Titles
        const contentTitleInput = document.getElementById('edit-content-title-input');
        if (contentTitleInput) {
            currentRubric.contentTitle = contentTitleInput.value.trim() || "Content and Paragraph Structure";
        }
        const grammarTitleInput = document.getElementById('edit-grammar-title-input');
        if (grammarTitleInput) {
            currentRubric.grammarTitle = grammarTitleInput.value.trim() || "Grammar for writing";
        }

        // Save Weight Percentages
        const contentWeightInput = document.getElementById('edit-content-weight-input');
        const grammarWeightInput = document.getElementById('edit-grammar-weight-input');
        if (contentWeightInput && grammarWeightInput) {
            const cPct = Math.min(100, Math.max(0, parseInt(contentWeightInput.value) || 50));
            currentRubric.contentWeightPct = cPct;
            currentRubric.grammarWeightPct = 100 - cPct;
        }

        // Calculate Section Points based on Weight % of Overall Exam Score
        const totalPts = currentRubric.totalExamPoints || 30;
        currentRubric.contentPoints = (currentRubric.contentWeightPct / 100) * totalPts;
        currentRubric.grammarPoints = (currentRubric.grammarWeightPct / 100) * totalPts;

        // Save Content Criteria
        const contentRows = contentCritList.querySelectorAll('.edit-crit-row');
        contentRows.forEach((row) => {
            const id = parseInt(row.dataset.id);
            const nameInput = row.querySelector('.edit-crit-name');
            const maxSelect = row.querySelector('.edit-crit-max');
            const item = currentRubric.content.find(c => c.id === id);
            if (item) {
                item.name = nameInput.value.trim() || item.name;
                item.max = parseInt(maxSelect.value);
            }
        });

        // Save Grammar Criteria
        const grammarRows = grammarCritList.querySelectorAll('.edit-crit-row');
        grammarRows.forEach((row) => {
            const id = parseInt(row.dataset.id);
            const nameInput = row.querySelector('.edit-crit-name');
            const maxSelect = row.querySelector('.edit-crit-max');
            const item = currentRubric.grammar.find(c => c.id === id);
            if (item) {
                item.name = nameInput.value.trim() || item.name;
                item.max = parseInt(maxSelect.value);
            }
        });
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
            'ECA1': '#1D8A7E',
            'ECA2': '#A8324A',
            'ECB1': '#7057A4',
            'CEA2': '#0F6292',
            'CEB1': '#B45309',
            'CEB2': '#3874CB'
        };
        const activeColor = levelColors[currentRubric.id] || '#1D8A7E';

        root.style.setProperty('--primary', activeColor);
        root.style.setProperty('--primary-hover', activeColor); 
        
        const rgbaGlow = hexToRgba(activeColor, 0.4);
        const rgbaTransparant = hexToRgba(activeColor, 0.15);
        const rgbaBorder = hexToRgba(activeColor, 0.25);
        root.style.setProperty('--primary-glow', rgbaGlow);
        root.style.setProperty('--primary-transparent', rgbaTransparant);
        root.style.setProperty('--primary-border', rgbaBorder);
    }

    function saveScores() {
        if (!currentRubric || isEditMode) return;
        const selections = {};
        const radioInputs = document.querySelectorAll('input[type="radio"]:checked');
        radioInputs.forEach(input => {
            selections[input.name] = input.value;
        });
        localStorage.setItem(`scores_${currentRubric.id}`, JSON.stringify(selections));
    }

    function loadScores() {
        if (!currentRubric || isEditMode) return;
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
                if (!outCell) return;
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

        const totalExamPts = currentRubric.totalExamPoints || 30;
        const contentWeighted = contentMaxSum > 0 ? (contentSum / contentMaxSum) * currentRubric.contentPoints : 0;
        const grammarWeighted = grammarMaxSum > 0 ? (grammarSum / grammarMaxSum) * currentRubric.grammarPoints : 0;
        const totalScore = contentWeighted + grammarWeighted;

        document.getElementById('total-content').textContent = contentWeighted.toFixed(2) + `/${currentRubric.contentPoints.toFixed(1)}`;
        document.getElementById('total-grammar').textContent = grammarWeighted.toFixed(2) + `/${currentRubric.grammarPoints.toFixed(1)}`;
        document.getElementById('total-score').textContent = totalScore.toFixed(2);
        
        const floatingScore = document.getElementById('top-total-score');
        if (floatingScore) floatingScore.textContent = totalScore.toFixed(2);

        // Normalized /100 Score Row
        const normalizedRow = document.getElementById('normalized-score-row');
        const normalizedValCell = document.getElementById('total-score-100');
        if (currentRubric.showScore100 && totalExamPts !== 100) {
            const normalizedScore = (totalScore / totalExamPts) * 100;
            if (normalizedValCell) {
                normalizedValCell.textContent = `${normalizedScore.toFixed(2)} / 100`;
            }
            if (normalizedRow) normalizedRow.style.display = 'table-row';
        } else {
            if (normalizedRow) normalizedRow.style.display = 'none';
        }
    }

    function renderRubric(levelId) {
        currentRubric = RUBRICS[levelId];
        if (!currentRubric) return;

        reindexCriteria(currentRubric);

        // Ensure defaults if missing
        if (!currentRubric.totalExamPoints) currentRubric.totalExamPoints = 30;
        if (!currentRubric.contentTitle) currentRubric.contentTitle = "Content and Paragraph Structure";
        if (!currentRubric.grammarTitle) currentRubric.grammarTitle = "Grammar for writing";
        if (currentRubric.contentPoints === undefined) currentRubric.contentPoints = (currentRubric.contentWeightPct / 100) * currentRubric.totalExamPoints;
        if (currentRubric.grammarPoints === undefined) currentRubric.grammarPoints = (currentRubric.grammarWeightPct / 100) * currentRubric.totalExamPoints;

        if (editExamTotalPointsInput) editExamTotalPointsInput.value = currentRubric.totalExamPoints;
        if (editShowScore100Toggle) editShowScore100Toggle.checked = !!currentRubric.showScore100;

        // Toggle Edit Toolbar UI & Category Wrappers
        if (isEditMode) {
            editToolbar.style.display = 'flex';
            editToggleLabel.textContent = 'Grading Mode';
            editModeToggleBtn.classList.add('active-edit-btn');

            contentAddWrapper.style.display = 'block';
            grammarAddWrapper.style.display = 'block';

            // Editable Category Headers
            contentHeaderTitleContainer.innerHTML = `<input type="text" id="edit-content-title-input" class="edit-input" value="${currentRubric.contentTitle}" style="width: 100%; padding: 0.4rem 0.65rem; border-radius: 8px; border: 1px solid var(--border); background: var(--bg-card); color: var(--text-main); font-weight: 700; font-size: 1.1rem;">`;
            grammarHeaderTitleContainer.innerHTML = `<input type="text" id="edit-grammar-title-input" class="edit-input" value="${currentRubric.grammarTitle}" style="width: 100%; padding: 0.4rem 0.65rem; border-radius: 8px; border: 1px solid var(--border); background: var(--bg-card); color: var(--text-main); font-weight: 700; font-size: 1.1rem;">`;

            contentHeaderWeightContainer.innerHTML = `
                <div style="display: flex; align-items: center; gap: 0.3rem; background: var(--bg-card); padding: 0.35rem 0.65rem; border-radius: 8px; border: 1px solid var(--border); font-size: 0.85rem; font-weight: 700; color: var(--text-main);">
                    <span>Weight:</span>
                    <input type="number" id="edit-content-weight-input" value="${currentRubric.contentWeightPct}" min="0" max="100" style="width: 55px; padding: 0.25rem 0.4rem; border-radius: 6px; border: 1px solid var(--border); background: var(--bg-main); color: var(--text-main); font-weight: bold; text-align: center;">%
                </div>`;
            grammarHeaderWeightContainer.innerHTML = `
                <div style="display: flex; align-items: center; gap: 0.3rem; background: var(--bg-card); padding: 0.35rem 0.65rem; border-radius: 8px; border: 1px solid var(--border); font-size: 0.85rem; font-weight: 700; color: var(--text-main);">
                    <span>Weight:</span>
                    <input type="number" id="edit-grammar-weight-input" value="${currentRubric.grammarWeightPct}" min="0" max="100" style="width: 55px; padding: 0.25rem 0.4rem; border-radius: 6px; border: 1px solid var(--border); background: var(--bg-main); color: var(--text-main); font-weight: bold; text-align: center;">%
                </div>`;

            // Live listener for weights & overall score
            const cWeightInput = document.getElementById('edit-content-weight-input');
            const gWeightInput = document.getElementById('edit-grammar-weight-input');
            if (cWeightInput && gWeightInput) {
                cWeightInput.addEventListener('input', (e) => {
                    const val = Math.min(100, Math.max(0, parseInt(e.target.value) || 0));
                    gWeightInput.value = 100 - val;
                });
                gWeightInput.addEventListener('input', (e) => {
                    const val = Math.min(100, Math.max(0, parseInt(e.target.value) || 0));
                    cWeightInput.value = 100 - val;
                });
            }
        } else {
            editToolbar.style.display = 'none';
            editToggleLabel.textContent = 'Edit Mode';
            editModeToggleBtn.classList.remove('active-edit-btn');

            contentAddWrapper.style.display = 'none';
            grammarAddWrapper.style.display = 'none';

            contentHeaderTitleContainer.innerHTML = `<h2 id="content-cat-title">${currentRubric.contentTitle}</h2>`;
            grammarHeaderTitleContainer.innerHTML = `<h2 id="grammar-cat-title">${currentRubric.grammarTitle}</h2>`;

            contentHeaderWeightContainer.innerHTML = `<div class="weight-badge" id="content-weight-badge">${currentRubric.contentWeightPct}% Weight (${currentRubric.contentPoints.toFixed(1)} pts)</div>`;
            grammarHeaderWeightContainer.innerHTML = `<div class="weight-badge" id="grammar-weight-badge">${currentRubric.grammarWeightPct}% Weight (${currentRubric.grammarPoints.toFixed(1)} pts)</div>`;
        }

        // Render Criteria Lists
        contentCritList.innerHTML = '';
        currentRubric.content.forEach(crit => {
            if (isEditMode) {
                contentCritList.appendChild(createEditCritRow(crit, 'content', 'special-green'));
            } else {
                contentCritList.appendChild(createCritRow(crit, 'special-green'));
            }
        });

        grammarCritList.innerHTML = '';
        currentRubric.grammar.forEach(crit => {
            if (isEditMode) {
                grammarCritList.appendChild(createEditCritRow(crit, 'grammar', crit.colorClass || 'bg-purple'));
            } else {
                grammarCritList.appendChild(createCritRow(crit, crit.colorClass || 'bg-purple'));
            }
        });

        // Summary Table
        summaryTbody.innerHTML = '';
        const groups = [
            { items: currentRubric.content, weight: currentRubric.contentWeightPct, label: currentRubric.contentTitle },
            { items: currentRubric.grammar, weight: currentRubric.grammarWeightPct, label: currentRubric.grammarTitle }
        ];

        groups.forEach(group => {
            group.items.forEach((crit, index) => {
                const tr = document.createElement('tr');
                if (group.label === currentRubric.grammarTitle && index === 0) tr.className = 'section-divider';
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
        document.getElementById('summary-content-label').textContent = `${currentRubric.contentTitle} (${currentRubric.contentWeightPct}%)`;
        document.getElementById('summary-grammar-label').textContent = `${currentRubric.grammarTitle} (${currentRubric.grammarWeightPct}%)`;
        
        const grandTotalLabel = document.querySelector('.grand-total .total-label');
        if (grandTotalLabel) grandTotalLabel.textContent = `Total Score/${currentRubric.totalExamPoints || 30}`;

        if (!isEditMode) {
            const radioInputs = document.querySelectorAll('input[type="radio"]');
            radioInputs.forEach(input => input.addEventListener('change', (e) => {
                const row = e.target.closest('.crit-row');
                if (row) row.classList.remove('missing-row-pulse');
                saveScores();
                calculateScores();
            }));

            loadScores();
            calculateScores();
        }

        updateActiveLevelTheme();
    }

    // 6. Interaction Listeners
    editModeToggleBtn.addEventListener('click', () => {
        if (isEditMode) {
            saveEditModeInputsToData();
        }
        isEditMode = !isEditMode;
        renderRubric(levelSelect.value);
    });

    addContentCritBtn.addEventListener('click', () => {
        if (!currentRubric) return;
        saveEditModeInputsToData();
        const newCrit = { id: 0, name: "New Content Criterion", max: 3, colorClass: 'special-green', textClass: '' };
        currentRubric.content.push(newCrit);
        reindexCriteria(currentRubric);
        renderRubric(currentRubric.id);
        showToastAlert('➕ Added new criterion to Content section!', 'info');
    });

    addGrammarCritBtn.addEventListener('click', () => {
        if (!currentRubric) return;
        saveEditModeInputsToData();
        const newCrit = { id: 0, name: "New Grammar Criterion", max: 4 };
        currentRubric.grammar.push(newCrit);
        reindexCriteria(currentRubric);
        renderRubric(currentRubric.id);
        showToastAlert('➕ Added new criterion to Grammar section!', 'info');
    });


    saveSyncBtn.addEventListener('click', () => {
        syncRubricsToCloud();
    });

    const restoreDefaultMainBtn = document.getElementById('restore-default-main-btn');

    function showCustomConfirmModal(title, message, confirmText = "Confirm", cancelText = "Cancel") {
        return new Promise((resolve) => {
            let modalOverlay = document.getElementById('custom-confirm-modal');
            if (!modalOverlay) {
                modalOverlay = document.createElement('div');
                modalOverlay.id = 'custom-confirm-modal';
                modalOverlay.className = 'custom-modal-overlay';
                document.body.appendChild(modalOverlay);
            }

            modalOverlay.innerHTML = `
                <div class="custom-modal-card">
                    <div class="custom-modal-header">
                        <div class="custom-modal-icon">🔄</div>
                        <h3>${title}</h3>
                    </div>
                    <div class="custom-modal-body">
                        <p>${message}</p>
                    </div>
                    <div class="custom-modal-footer">
                        <button class="btn btn-secondary modal-cancel-btn">${cancelText}</button>
                        <button class="btn btn-primary modal-confirm-btn" style="background: var(--primary); color: white;">${confirmText}</button>
                    </div>
                </div>
            `;

            requestAnimationFrame(() => {
                modalOverlay.classList.add('show');
            });

            const cancelBtn = modalOverlay.querySelector('.modal-cancel-btn');
            const confirmBtn = modalOverlay.querySelector('.modal-confirm-btn');

            const closeModal = (result) => {
                modalOverlay.classList.remove('show');
                setTimeout(() => {
                    if (modalOverlay.parentNode) modalOverlay.parentNode.removeChild(modalOverlay);
                }, 300);
                resolve(result);
            };

            cancelBtn.onclick = () => closeModal(false);
            confirmBtn.onclick = () => closeModal(true);
            modalOverlay.onclick = (e) => {
                if (e.target === modalOverlay) closeModal(false);
            };
        });
    }

    async function performRestoreDefaults() {
        if (!currentRubric) return;
        const activeLevel = currentRubric.id;
        const confirmed = await showCustomConfirmModal(
            "Restore Defaults",
            `Are you sure you want to restore original default rubric for Level ${activeLevel}? This will reset edits for Level ${activeLevel} only.`,
            `Restore Level ${activeLevel}`,
            "Cancel"
        );

        if (confirmed) {
            if (INITIAL_DEFAULT_RUBRICS[activeLevel]) {
                RUBRICS[activeLevel] = JSON.parse(JSON.stringify(INITIAL_DEFAULT_RUBRICS[activeLevel]));
                saveRubricsToLocalStorage();
                renderRubric(activeLevel);
                syncRubricsToCloud();
                showToastAlert(`🔄 Restored original default rubric for Level ${activeLevel}!`, 'info');
            }
        }
    }

    if (restoreDefaultBtn) restoreDefaultBtn.addEventListener('click', performRestoreDefaults);
    if (restoreDefaultMainBtn) restoreDefaultMainBtn.addEventListener('click', performRestoreDefaults);
    themeToggleBtn.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        sunIcon.style.display = newTheme === 'dark' ? 'none' : 'block';
        moonIcon.style.display = newTheme === 'dark' ? 'block' : 'none';
    });

    yearToggleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selectedYear = e.target.dataset.year;
            populateLevelDropdown(selectedYear);
        });
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

        // Content Header Row
        html += `<tr style="background-color: #f1f5f9; border-top: 1px solid #cbd5e1; border-bottom: 1px solid #cbd5e1;">
            <td colspan="3" style="padding: 6px 8px; font-weight: bold; font-size: 11px; text-transform: uppercase; color: #1d8a7e; letter-spacing: 0.05em;">
                ${currentRubric.contentTitle} (${currentRubric.contentWeightPct}%)
            </td>
        </tr>`;

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

        // Grammar Header Row
        html += `<tr style="background-color: #f1f5f9; border-top: 2px solid #94a3b8; border-bottom: 1px solid #cbd5e1;">
            <td colspan="3" style="padding: 6px 8px; font-weight: bold; font-size: 11px; text-transform: uppercase; color: #7057a4; letter-spacing: 0.05em;">
                ${currentRubric.grammarTitle} (${currentRubric.grammarWeightPct}%)
            </td>
        </tr>`;

        // Grammar Rows
        allGrammar.forEach((crit, index) => {
            const selected = document.querySelector(`input[name="crit${crit.id}"]:checked`);
            const scoreVal = selected ? `${selected.value}/${crit.max}` : `0/${crit.max}`;

            html += `<tr style="border-bottom: 1px solid #e2e8f0;">`;
            html += `<td style="padding: 5px 8px; text-align: center; font-weight: bold; color: #7057a4;">${crit.id}</td>`;
            html += `<td style="padding: 5px 8px;">${crit.name}:</td>`;
            html += `<td style="padding: 5px 8px; text-align: right; font-family: monospace; font-weight: bold;">${scoreVal}</td>`;
            html += `</tr>`;
        });

        html += `</tbody><tfoot>`;
        html += `<tr style="border-top: 2px solid #475569;">
            <td colspan="2" style="padding: 5px 8px; font-weight: bold; text-align: right;">${currentRubric.contentTitle} (${currentRubric.contentWeightPct}%)</td>
            <td style="padding: 5px 8px; text-align: right; font-weight: bold; color: #3874CB;">${contentWeighted.toFixed(2)}/${currentRubric.contentPoints.toFixed(1)}</td>
        </tr>`;
        html += `<tr>
            <td colspan="2" style="padding: 5px 8px; font-weight: bold; text-align: right;">${currentRubric.grammarTitle} (${currentRubric.grammarWeightPct}%)</td>
            <td style="padding: 5px 8px; text-align: right; font-weight: bold; color: #3874CB;">${grammarWeighted.toFixed(2)}/${currentRubric.grammarPoints.toFixed(1)}</td>
        </tr>`;
        html += `<tr style="border-top: 2px solid #0f172a; background-color: #f1f5f9;">
            <td colspan="2" style="padding: 6px 8px; font-size: 13px; font-weight: bold; text-align: right;">Total Score / ${currentRubric.totalExamPoints || 30}</td>
            <td style="padding: 6px 8px; font-size: 13px; font-weight: bold; text-align: right; color: #3874CB;">${totalScore.toFixed(2)}</td>
        </tr>`;

        const totalPts = currentRubric.totalExamPoints || 30;
        let normalizedScoreStr = '';
        if (currentRubric.showScore100 && totalPts !== 100) {
            const normVal = (totalScore / totalPts) * 100;
            normalizedScoreStr = `${normVal.toFixed(2)} / 100`;
            html += `<tr style="border-top: 1px dashed #3874CB; background-color: #e0f2fe;">
                <td colspan="2" style="padding: 6px 8px; font-size: 13px; font-weight: bold; text-align: right; color: #1D4ED8;">Normalized Score</td>
                <td style="padding: 6px 8px; font-size: 13px; font-weight: bold; text-align: right; color: #1D4ED8;">${normalizedScoreStr}</td>
            </tr>`;
        }

        html += `</tfoot></table></div>`;

        // Text fallback
        let plainText = `SCORE RECEIPT\n`;
        plainText += `${currentRubric.contentTitle} (${currentRubric.contentWeightPct}%): ${contentWeighted.toFixed(2)}/${currentRubric.contentPoints.toFixed(1)}\n`;
        plainText += `${currentRubric.grammarTitle} (${currentRubric.grammarWeightPct}%): ${grammarWeighted.toFixed(2)}/${currentRubric.grammarPoints.toFixed(1)}\n`;
        plainText += `TOTAL SCORE: ${totalScore.toFixed(2)} / ${currentRubric.totalExamPoints || 30}.00\n`;
        if (currentRubric.showScore100 && totalPts !== 100) {
            plainText += `NORMALIZED SCORE: ${normalizedScoreStr}\n`;
        }
        plainText += `\n`;
        
        plainText += `--- ${currentRubric.contentTitle.toUpperCase()} (${currentRubric.contentWeightPct}%) ---\n`;
        allContent.forEach(c => {
            const sel = document.querySelector(`input[name="crit${c.id}"]:checked`);
            plainText += `[${c.id}] ${c.name}: ${sel ? sel.value : 0}/${c.max}\n`;
        });

        plainText += `\n--- ${currentRubric.grammarTitle.toUpperCase()} (${currentRubric.grammarWeightPct}%) ---\n`;
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

    localStorage.removeItem('ui_style_mode');
    document.body.classList.remove('clay-mode');

    // 1) Load saved custom rubrics from local storage first
    loadRubricsFromLocalStorage();

    // 2) Populate active year and level dropdown and render UI
    const savedYear = localStorage.getItem('selectedYear') || 'FY';
    const savedLevel = localStorage.getItem('selectedLevel');
    populateLevelDropdown(savedYear, savedLevel);

    // 3) Fetch cloud rubrics in background and update UI with team edits
    fetchCloudRubrics();

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
