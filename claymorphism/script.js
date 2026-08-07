document.addEventListener('DOMContentLoaded', () => {
    // 1. Habit Action Buttons (Squash animation & status toggle)
    const habitContainer = document.getElementById('habits-container');
    
    if (habitContainer) {
        habitContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.habit-action-btn');
            if (!btn) return;

            // Trigger squash animation
            btn.classList.add('is-pressed');
            setTimeout(() => btn.classList.remove('is-pressed'), 180);

            const card = btn.closest('.habit-card');
            const action = btn.dataset.action;

            if (action === 'toggle') {
                const isCompleted = btn.classList.toggle('btn-mint');
                if (isCompleted) {
                    btn.classList.remove('btn-violet', 'btn-periwinkle');
                    btn.textContent = '✓ Completed Today!';
                    // Activate all tracker pills in card
                    const pills = card.querySelectorAll('.tracker-pill');
                    pills.forEach(p => p.classList.add('active'));
                } else {
                    btn.classList.add('btn-violet');
                    btn.textContent = 'Mark today done';
                }
            } else if (action === 'water') {
                const progressFill = card.querySelector('.clay-progress-fill');
                const badge = card.querySelector('.float-badge');
                let currentPct = parseInt(progressFill.style.width) || 83;
                currentPct = Math.min(100, currentPct + 8);
                progressFill.style.width = `${currentPct}%`;
                
                const liters = (currentPct * 0.03).toFixed(1);
                if (badge) badge.textContent = `${liters}L / 3.0L`;
                
                if (currentPct >= 100) {
                    btn.textContent = '🎉 Goal Reached!';
                    btn.classList.replace('btn-sky', 'btn-mint');
                }
            }
        });
    }

    // 2. Clay Pomodoro Focus Timer Logic
    const timerDisplay = document.getElementById('timer-display');
    const timerStatus = document.getElementById('timer-status');
    const startBtn = document.getElementById('timer-start-btn');
    const resetBtn = document.getElementById('timer-reset-btn');
    const presetPills = document.querySelectorAll('.preset-pill');

    let timerInterval = null;
    let secondsLeft = 1500; // 25 minutes default
    let isRunning = false;

    function formatTime(secs) {
        const m = Math.floor(secs / 60).toString().padStart(2, '0');
        const s = (secs % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    }

    function updateTimerUI() {
        if (timerDisplay) timerDisplay.textContent = formatTime(secondsLeft);
    }

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            startBtn.classList.add('is-pressed');
            setTimeout(() => startBtn.classList.remove('is-pressed'), 180);

            if (isRunning) {
                clearInterval(timerInterval);
                isRunning = false;
                startBtn.textContent = 'Start';
                if (timerStatus) timerStatus.textContent = 'Paused';
            } else {
                isRunning = true;
                startBtn.textContent = 'Pause';
                if (timerStatus) timerStatus.textContent = 'Focusing... 🔥';
                timerInterval = setInterval(() => {
                    secondsLeft--;
                    updateTimerUI();
                    if (secondsLeft <= 0) {
                        clearInterval(timerInterval);
                        isRunning = false;
                        startBtn.textContent = 'Start';
                        if (timerStatus) timerStatus.textContent = '🎉 Session Done!';
                        alert('🔔 Focus session complete! Take a break.');
                    }
                }, 1000);
            }
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            resetBtn.classList.add('is-pressed');
            setTimeout(() => resetBtn.classList.remove('is-pressed'), 180);
            clearInterval(timerInterval);
            isRunning = false;
            secondsLeft = 1500;
            if (startBtn) startBtn.textContent = 'Start';
            if (timerStatus) timerStatus.textContent = 'Deep Work';
            updateTimerUI();
        });
    }

    presetPills.forEach(pill => {
        pill.addEventListener('click', () => {
            presetPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            clearInterval(timerInterval);
            isRunning = false;
            if (startBtn) startBtn.textContent = 'Start';
            secondsLeft = parseInt(pill.dataset.time);
            updateTimerUI();
        });
    });

    // 3. Task Item Checkboxes
    const taskContainer = document.getElementById('task-list-container');
    if (taskContainer) {
        taskContainer.addEventListener('change', (e) => {
            if (e.target.tagName === 'INPUT') {
                const text = e.target.closest('.task-item').querySelector('.task-text');
                if (text) {
                    text.classList.toggle('done', e.target.checked);
                }
            }
        });
    }

    // 4. Modal Dialog (Add Habit)
    const addHabitBtn = document.getElementById('add-habit-btn');
    const modalBackdrop = document.getElementById('add-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const newHabitForm = document.getElementById('new-habit-form');

    if (addHabitBtn && modalBackdrop) {
        addHabitBtn.addEventListener('click', () => {
            modalBackdrop.style.display = 'flex';
        });
    }

    if (modalCloseBtn && modalBackdrop) {
        modalCloseBtn.addEventListener('click', () => {
            modalBackdrop.style.display = 'none';
        });
    }

    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) modalBackdrop.style.display = 'none';
        });
    }

    if (newHabitForm) {
        newHabitForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('habit-name-input').value;
            const icon = document.getElementById('habit-icon-input').value || '🌟';
            const colorClass = document.querySelector('input[name="theme-color"]:checked').value;

            // Create new clay habit card
            const newCard = document.createElement('div');
            newCard.className = 'clay-card habit-card';
            newCard.innerHTML = `
                <div class="clay-badge float-badge">1st day</div>
                <div class="habit-header">
                    <div class="clay-icon-box icon-purple">${icon}</div>
                    <div class="habit-info">
                        <h3 class="habit-name">${name}</h3>
                        <p class="habit-streak">1 day streak</p>
                    </div>
                </div>
                <div class="streak-tracker-pills">
                    <span class="clay-pill tracker-pill pill-pink active"></span>
                    <span class="clay-pill tracker-pill pill-empty"></span>
                    <span class="clay-pill tracker-pill pill-empty"></span>
                    <span class="clay-pill tracker-pill pill-empty"></span>
                    <span class="clay-pill tracker-pill pill-empty"></span>
                </div>
                <button class="clay-btn ${colorClass} habit-action-btn" data-action="toggle">
                    Mark today done
                </button>
            `;
            if (habitContainer) habitContainer.appendChild(newCard);
            modalBackdrop.style.display = 'none';
            newHabitForm.reset();
        });
    }
});
