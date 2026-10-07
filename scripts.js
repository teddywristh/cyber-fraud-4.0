/**
 * ONLINE TRAP - Interactive Cyber Fraud Behavioral Simulator
 * Engine xử lý tương tác, phòng chống race-condition & trải nghiệm người dùng
 */

// DOM Elements
const welcomeScreen = document.getElementById("welcome-screen");
const chatScreen = document.getElementById("chat-screen");
const reportScreen = document.getElementById("report-screen");

const surveyButtons = document.querySelectorAll(".survey-btn");
const startButton = document.getElementById("start-btn");
const restartButton = document.getElementById("restart-btn");
const homeButton = document.getElementById("home-btn");
const printButton = document.getElementById("print-btn");

const exitButton = document.getElementById("exit-btn");
const undoButton = document.getElementById("undo-btn");
const exitModal = document.getElementById("exit-modal");
const modalCancelBtn = document.getElementById("modal-cancel-btn");
const modalConfirmBtn = document.getElementById("modal-confirm-btn");

const soundBtnWelcome = document.getElementById("sound-btn-welcome");
const soundBtnChat = document.getElementById("sound-btn-chat");

const chatHistory = document.getElementById("chat-history");
const typingIndicator = document.getElementById("typing-indicator");
const optionsContainer = document.getElementById("options-container");
const chatName = document.getElementById("chat-name");
const phoneClock = document.getElementById("phone-clock");

const stepLabel = document.getElementById("step-label");
const riskMini = document.getElementById("risk-mini");
const progressBar = document.getElementById("progress-bar");

const riskBanner = document.getElementById("risk-banner");
const finalRiskScore = document.getElementById("final-risk-score");
const maxRiskScoreElement = document.getElementById("max-risk-score");
const scoreDescription = document.getElementById("score-description");
const beliefResult = document.getElementById("belief-result");
const behaviorAnalysis = document.getElementById("behavior-analysis");
const researchConclusion = document.getElementById("research-conclusion");

// State Management
const state = {
    belief: "",
    currentStep: 0,
    totalRiskScore: 0,
    userChoices: [],
    sessionId: 0,       // Token bảo vệ phiên nhằm triệt tiêu async race-condition
    soundEnabled: true,
    isProcessing: false
};

// ==========================================================================
// WEB AUDIO API SOUND ENGINE (Tổng hợp âm thanh trực tiếp không cần tải file)
// ==========================================================================
const SoundEngine = {
    ctx: null,
    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) this.ctx = new AudioContext();
        }
        if (this.ctx && this.ctx.state === "suspended") {
            this.ctx.resume();
        }
    },
    playClick() {
        if (!state.soundEnabled) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.05);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.06);
    },
    playMessagePop() {
        if (!state.soundEnabled) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(660, now + 0.1);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.2);
    },
    playSafeChime() {
        if (!state.soundEnabled) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.35);
    },
    playDangerBuzz() {
        if (!state.soundEnabled) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(240, now);
        osc.frequency.setValueAtTime(160, now + 0.12);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.35);
    }
};

// ==========================================================================
// INITIALIZATION
// ==========================================================================
if (typeof maxRiskScore !== "undefined" && maxRiskScoreElement) {
    maxRiskScoreElement.textContent = maxRiskScore;
}

// Cập nhật giờ thực tế trên phone status bar
updatePhoneClock();
setInterval(updatePhoneClock, 30000);

// Gán sự kiện khảo sát ban đầu
surveyButtons.forEach((button) => {
    button.addEventListener("click", () => {
        SoundEngine.playClick();
        surveyButtons.forEach((item) => item.classList.remove("selected"));

        button.classList.add("selected");
        state.belief = button.dataset.answer;
        startButton.disabled = false;
    });
});

// Sound toggles
[soundBtnWelcome, soundBtnChat].forEach((btn) => {
    if (!btn) return;
    btn.addEventListener("click", () => {
        state.soundEnabled = !state.soundEnabled;
        const iconClass = state.soundEnabled ? "fa-volume-high" : "fa-volume-xmark";
        [soundBtnWelcome, soundBtnChat].forEach((b) => {
            if (b) {
                b.innerHTML = `<i class="fa-solid ${iconClass}"></i>`;
                b.classList.toggle("muted", !state.soundEnabled);
            }
        });
        if (state.soundEnabled) SoundEngine.playClick();
    });
});

// Điều hướng màn hình
startButton.addEventListener("click", () => {
    SoundEngine.playClick();
    startExperience();
});

restartButton.addEventListener("click", () => {
    SoundEngine.playClick();
    startExperience();
});

if (homeButton) {
    homeButton.addEventListener("click", () => {
        SoundEngine.playClick();
        exitToHome();
    });
}

printButton.addEventListener("click", () => {
    SoundEngine.playClick();
    window.print();
});

// ==========================================================================
// XỬ LÝ NÚT BACK VÀ IN-APP MODAL XÁC NHẬN (KHÔNG DÙNG WINDOW.CONFIRM)
// ==========================================================================
exitButton.addEventListener("click", () => {
    SoundEngine.playClick();
    openExitModal();
});

modalCancelBtn.addEventListener("click", () => {
    SoundEngine.playClick();
    closeExitModal();
});

modalConfirmBtn.addEventListener("click", () => {
    SoundEngine.playClick();
    closeExitModal();
    exitToHome();
});

// Nút Quay lại bước trước (Undo Step)
if (undoButton) {
    undoButton.addEventListener("click", () => {
        if (state.isProcessing || state.currentStep === 0) return;
        SoundEngine.playClick();
        undoLastStep();
    });
}

function openExitModal() {
    exitModal.classList.remove("hidden");
}

function closeExitModal() {
    exitModal.classList.add("hidden");
}

function showScreen(screen) {
    [welcomeScreen, chatScreen, reportScreen].forEach((item) => {
        item.classList.remove("active");
    });
    screen.classList.add("active");
}

// ==========================================================================
// WORKFLOW & SESSION ENGINE
// ==========================================================================
function startExperience() {
    state.sessionId = Date.now();
    state.currentStep = 0;
    state.totalRiskScore = 0;
    state.userChoices = [];
    state.isProcessing = false;

    chatHistory.innerHTML = "";
    optionsContainer.innerHTML = "";
    typingIndicator.classList.add("hidden");

    showScreen(chatScreen);
    addDateMessage();
    renderScenario();
}

function exitToHome() {
    // Hủy bỏ session hiện tại để ngắt toàn bộ async pending
    state.sessionId = 0;
    state.belief = "";
    state.currentStep = 0;
    state.totalRiskScore = 0;
    state.userChoices = [];
    state.isProcessing = false;

    surveyButtons.forEach((button) => button.classList.remove("selected"));
    startButton.disabled = true;

    chatHistory.innerHTML = "";
    optionsContainer.innerHTML = "";
    typingIndicator.classList.add("hidden");

    showScreen(welcomeScreen);
}

function addDateMessage() {
    const dateElement = document.createElement("div");
    dateElement.className = "chat-date";
    dateElement.textContent = "Hôm nay, " + getCurrentTime();
    chatHistory.appendChild(dateElement);
}

async function renderScenario() {
    const thisSession = state.sessionId;
    if (thisSession !== state.sessionId || state.sessionId === 0) return;

    if (state.currentStep >= scenarios.length) {
        showReport();
        return;
    }

    const scenario = scenarios[state.currentStep];

    updateProgress();
    chatName.textContent = scenario.senderName;
    updateUndoButtonState();

    optionsContainer.innerHTML = "";
    showTyping(true);

    await wait(800);
    if (thisSession !== state.sessionId || state.sessionId === 0) return;

    showTyping(false);
    SoundEngine.playMessagePop();
    addMessage("stranger", scenario.senderMessage);
    renderOptions(scenario);
    state.isProcessing = false;
}

function renderOptions(scenario) {
    optionsContainer.innerHTML = "";

    scenario.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "option-btn";
        button.type = "button";
        button.innerHTML = `
            <span style="font-weight: 700; color: var(--primary);">${String.fromCharCode(65 + index)}.</span>
            <span style="flex: 1;">${option.text.replace(/^[A-C]\.\s*/, '')}</span>
        `;

        button.addEventListener("click", () => {
            if (state.isProcessing) return;
            chooseOption(scenario, option, index);
        });
        optionsContainer.appendChild(button);
    });
}

async function chooseOption(scenario, option, optionIndex) {
    const thisSession = state.sessionId;
    state.isProcessing = true;

    // Vô hiệu hóa nút chọn để chống spam click
    const allButtons = document.querySelectorAll(".option-btn");
    allButtons.forEach((button) => {
        button.disabled = true;
    });

    SoundEngine.playClick();
    addMessage("user", option.text);

    // Ghi nhận điểm và lựa chọn
    state.totalRiskScore += option.riskScore;
    state.userChoices.push({
        scenarioId: scenario.id,
        scenarioMessage: scenario.senderMessage,
        dangerSignal: scenario.dangerSignal,
        psychologicalTactic: scenario.psychologicalTactic,
        optionIndex,
        optionText: option.text,
        riskScore: option.riskScore,
        level: option.level,
        feedback: option.feedback,
        scammerThought: option.scammerThought
    });

    updateProgress();
    updateUndoButtonState();

    await wait(400);
    if (thisSession !== state.sessionId || state.sessionId === 0) return;

    // Âm thanh phản hồi dựa theo độ rủi ro
    if (option.level === "safe") {
        SoundEngine.playSafeChime();
    } else {
        SoundEngine.playDangerBuzz();
    }

    const feedbackText = createImmediateFeedback(option);
    addMessage("system", feedbackText, option.level);

    await wait(1200);
    if (thisSession !== state.sessionId || state.sessionId === 0) return;

    state.currentStep += 1;

    if (state.currentStep < scenarios.length) {
        renderScenario();
    } else {
        showReport();
    }
}

function createImmediateFeedback(option) {
    let header = "";
    if (option.level === "safe") {
        header = `<i class="fa-solid fa-circle-check" style="color: var(--success); margin-right: 6px;"></i> <strong>Phản ứng an toàn:</strong> ${option.feedback}`;
    } else if (option.level === "warning") {
        header = `<i class="fa-solid fa-triangle-exclamation" style="color: var(--warning); margin-right: 6px;"></i> <strong>Cần thận trọng:</strong> ${option.feedback}`;
    } else {
        header = `<i class="fa-solid fa-circle-xmark" style="color: var(--danger); margin-right: 6px;"></i> <strong>Rủi ro cao:</strong> ${option.feedback}`;
    }

    if (option.scammerThought) {
        header += `<div style="margin-top: 8px; padding-top: 6px; border-top: 1px dashed rgba(255,255,255,0.15); font-size: 0.82rem; color: #d8b4fe;">
            <i class="fa-solid fa-mask" style="color: #c084fc;"></i> <em>Kẻ gian toan tính: "${option.scammerThought}"</em>
        </div>`;
    }
    return header;
}

function addMessage(type, text, levelClass = "") {
    const row = document.createElement("div");
    row.className = `message-row ${type}`;

    if (type === "stranger") {
        const avatar = document.createElement("div");
        avatar.className = "avatar avatar-small";
        avatar.textContent = "NA";
        row.appendChild(avatar);
    }

    const messageWrapper = document.createElement("div");
    const bubble = document.createElement("div");
    bubble.className = "message-bubble";

    if (type === "system") {
        if (levelClass === "safe") bubble.classList.add("feedback-safe");
        else if (levelClass === "warning") bubble.classList.add("feedback-warning");
        else bubble.classList.add("feedback-danger");
        bubble.innerHTML = text;
    } else {
        bubble.textContent = text;
    }

    messageWrapper.appendChild(bubble);

    if (type !== "system") {
        const time = document.createElement("div");
        time.className = "message-time";
        time.textContent = getCurrentTime();
        messageWrapper.appendChild(time);
    }

    row.appendChild(messageWrapper);
    chatHistory.appendChild(row);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

function updateProgress() {
    const completedSteps = state.currentStep;
    const totalSteps = scenarios.length;

    stepLabel.innerHTML = `<i class="fa-regular fa-compass"></i> Tình huống ${Math.min(completedSteps + 1, totalSteps)}/${totalSteps}`;
    riskMini.textContent = `Điểm rủi ro: ${state.totalRiskScore}`;
    progressBar.style.width = `${(completedSteps / totalSteps) * 100}%`;

    // Đồng bộ sang bảng Desktop Inspector
    const inspectorRiskScore = document.getElementById("inspector-risk-score");
    if (inspectorRiskScore) {
        inspectorRiskScore.textContent = state.totalRiskScore;
    }
    const inspectorName = document.getElementById("inspector-name");
    if (inspectorName && scenarios[state.currentStep]) {
        inspectorName.textContent = scenarios[state.currentStep].senderName;
    }
}

function updateUndoButtonState() {
    if (!undoButton) return;
    undoButton.disabled = state.currentStep === 0;
    undoButton.style.opacity = state.currentStep === 0 ? "0.35" : "1";
}

function undoLastStep() {
    if (state.currentStep <= 0 || state.userChoices.length === 0) return;

    // Lùi lại 1 bước
    const lastChoice = state.userChoices.pop();
    state.totalRiskScore = Math.max(0, state.totalRiskScore - lastChoice.riskScore);
    state.currentStep -= 1;

    // Xóa bớt tin nhắn gần nhất của bước đó
    const messages = chatHistory.querySelectorAll(".message-row");
    let removeCount = 0;
    for (let i = messages.length - 1; i >= 0 && removeCount < 3; i--) {
        messages[i].remove();
        removeCount++;
    }

    renderScenario();
}

function showTyping(isVisible) {
    typingIndicator.classList.toggle("hidden", !isVisible);
    if (isVisible) {
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }
}

// ==========================================================================
// REPORT GENERATOR
// ==========================================================================
function showReport() {
    progressBar.style.width = "100%";
    generateReport();
    showScreen(reportScreen);
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function generateReport() {
    const riskPercent = (state.totalRiskScore / maxRiskScore) * 100;
    const riskInfo = getRiskLevel(riskPercent);

    finalRiskScore.textContent = state.totalRiskScore;
    beliefResult.textContent = state.belief || "Chưa khảo sát";

    riskBanner.className = `risk-banner ${riskInfo.className}`;
    riskBanner.innerHTML = `
        <h2>${riskInfo.icon} ${riskInfo.title}</h2>
        <p>${riskInfo.description}</p>
    `;

    scoreDescription.textContent = riskInfo.scoreDescription;
    behaviorAnalysis.innerHTML = "";

    const riskyChoices = state.userChoices.filter((choice) => choice.riskScore > 0);
    const safeChoices = state.userChoices.filter((choice) => choice.riskScore === 0);

    // Duyệt qua toàn bộ lựa chọn thực tế của người dùng theo thứ tự từng tình huống
    state.userChoices.forEach((choice) => {
        const type = choice.riskScore === 0 ? "safe" : (choice.riskScore >= 2 ? "danger" : "warning");
        const title = `Tình huống ${choice.scenarioId}: Bạn đã chọn "${getChoiceTitle(choice)}"`;
        const content = choice.riskScore === 0
            ? `${choice.feedback}`
            : `${choice.feedback} Dấu hiệu bị bỏ qua: ${choice.dangerSignal}`;

        appendAnalysisItem(
            type,
            title,
            content,
            choice.psychologicalTactic,
            choice.scammerThought
        );
    });

    researchConclusion.textContent = buildResearchConclusion(riskPercent, riskyChoices.length);
}

function appendAnalysisItem(type, title, content, tactic = "", scammerThought = "") {
    const item = document.createElement("article");
    item.className = `analysis-item ${type}`;

    if (tactic) {
        const tacticBadge = document.createElement("span");
        tacticBadge.className = "psychological-tactic-badge";
        tacticBadge.innerHTML = `<i class="fa-solid fa-brain"></i> Thủ thuật: ${tactic}`;
        item.appendChild(tacticBadge);
    }

    const strong = document.createElement("strong");
    strong.textContent = title;
    item.appendChild(strong);

    const paragraph = document.createElement("p");
    paragraph.textContent = content;
    item.appendChild(paragraph);

    // Tính năng 5: Bóc băng tâm lý kẻ lừa đảo
    if (scammerThought) {
        const thoughtBox = document.createElement("div");
        thoughtBox.className = "scammer-thought-box";
        thoughtBox.innerHTML = `
            <span class="scammer-thought-label">
                <i class="fa-solid fa-mask"></i> Kẻ lừa đảo toan tính gì khi bạn chọn cách này?
            </span>
            <p class="scammer-thought-text">"${scammerThought}"</p>
        `;
        item.appendChild(thoughtBox);
    }

    behaviorAnalysis.appendChild(item);
}

function getChoiceTitle(choice) {
    return choice.optionText.replace(/^[A-C]\.\s*/, "");
}

function getRiskLevel(riskPercent) {
    if (riskPercent <= 25) {
        return {
            className: "risk-low",
            icon: "🟢",
            title: "MỨC ĐỘ CẢNH GIÁC CAO",
            description: "Bạn có phản xạ nhận diện và bẻ gãy các kỹ thuật thao túng tâm lý trực tuyến rất tốt.",
            scoreDescription: "Hành động thực tế nhất quán với nhận thức bảo vệ dữ liệu và bảo mật cá nhân."
        };
    }
    if (riskPercent <= 55) {
        return {
            className: "risk-medium",
            icon: "🟡",
            title: "MỨC ĐỘ RỦI RO TRUNG BÌNH",
            description: "Bạn nhận ra một số dấu hiệu nguy hiểm, nhưng vẫn dễ bị lung lay bởi sự tò mò hoặc áp lực cảm xúc.",
            scoreDescription: "Cần tăng cường phản xạ dừng lại, xác minh danh tính độc lập trước khi đồng ý."
        };
    }
    return {
        className: "risk-high",
        icon: "🔴",
        title: "MỨC ĐỘ DỄ TỔN THƯƠNG CAO",
        description: "Trong tình huống mô phỏng, bạn đã đưa ra nhiều lựa chọn có nguy cơ bị đối tượng xấu khai thác triệt để.",
        scoreDescription: "Cần đặc biệt lưu ý: Không bao giờ cung cấp OTP, không chuyển tiền và không click link lạ."
    };
}

function buildResearchConclusion(riskPercent, riskyCount) {
    const belief = state.belief ? state.belief.toLowerCase() : "không rõ";
    const beliefText = `Ban đầu, bạn cho rằng mình “${belief}” dễ bị lừa trên mạng.`;

    if (riskPercent <= 25) {
        return `${beliefText} Trong trải nghiệm thực tế, hành động của bạn khá nhất quán với kiến thức an toàn: bạn biết dừng lại, không cung cấp dữ liệu nhạy cảm và chọn xác minh độc lập.`;
    }
    if (riskPercent <= 55) {
        return `${beliefText} Tuy nhiên, bạn đã có ${riskyCount} lần phản ứng mang rủi ro tiềm ẩn. Kết quả này phản ánh rõ nét “khoảng cách giữa Biết và Hành động”: dù nhận thức được nguy hiểm, sự tò mò, lòng tốt hoặc áp lực thời gian vẫn khiến hàng rào phòng thủ bị suy giảm.`;
    }
    return `${beliefText} Thực tế bạn đã có tới ${riskyCount} phản ứng rủi ro trong mô phỏng. Điều này chứng minh kiến thức lý thuyết chưa đủ để bảo vệ người dùng khi đối tượng thao túng tâm lý tạo áp lực thời gian và xây dựng niềm tin giả tạo. Cần rèn luyện phản xạ dừng lại và kiểm chứng độc lập.`;
}

function getCurrentTime() {
    return new Date().toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit"
    });
}

function updatePhoneClock() {
    if (phoneClock) {
        const now = new Date();
        phoneClock.textContent = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
    }
}

function wait(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
}