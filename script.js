// Игровые переменные
let gameState = {
    smileys: 100,
    dollars: 0,
    smileysPerClick: 1,
    passiveIncome: 0,
    currentSmiley: '😀',
    ownedEmotions: ['😀'],
    inventory: {},
    emotionLevels: {},
    totalClicks: 0,
    duplicateShards: 0,
    masteryShards: 0,
    currentLeague: 'bronze',
    upgrades: {
        'click-power': { level: 0, cost: 100, effect: 1, name: 'Усилитель клика', description: '+1 смайлик за клик' },
        'auto-clicker': { level: 0, cost: 500, effect: 1, name: 'Автокликер', description: '+1 смайлик в секунду' },
        'double-click': { level: 0, cost: 1000000000000, effect: 2, name: 'Двойной клик', description: 'Удваивает силу клика' },
        'mega-click': { level: 0, cost: 10000, effect: 5, name: 'Мега клик', description: '+5 смайликов за клик' },
        'dollar-boost': { level: 0, cost: 500, effect: 0.1, name: 'Долларовый буст', description: '+0.1$ за клик', currency: 'dollars' }
    },
    cases: {
        'heart': { name: 'Сердечный кейс', cost: 5000, emotions: ['😘', '🥰', '😍'] },
        'lim1': { name: 'Лимитированый кейс (до 01.11.2025)', cost: 100, emotions: [':*', ':]', ':[', '>:)', '>:(', ':3', '>:3'] },
        'cool': { name: 'Крутой кейс', cost: 1000, emotions: ['😛', '😝', '😜', '🤪', '🥵', '🥶', '🤯'] },
        'hand': { name: 'Ручной кейс', cost: 750, emotions: ['🤫', '🤔', '🤭', '🥱', '🤗'] },
        'angry': { name: 'Злой кейс', cost: 80000, emotions: ['😠', '😡', '🤬', '😈', '👿'] },
        'animal': { name: 'Кейс с животными', cost: 1000, emotions: ['😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾'], currency: 'dollars' },
        'mixed': { name: 'Кейс с разными эмоциями', cost: 1500, emotions: ['😪', '🤧', '🤒', '🤕', '😷', '🤥', '😇', '🤠', '🤑', '🤓', '😎', '🥸', '🤡', '👻', '💀', '☠️'] },
        'premium': { name: 'Премиум кейс', cost: 10, emotions: ['💎', '👑', '⭐'], currency: 'dollars' }
    },
    shop: {
        '😃': { cost: 100, name: 'Улыбка', description: 'Базовая улыбка' },
        ':)': { cost: 1, name: 'Лимит1', description: 'Лимит1' },
        ':(': { cost: 1, name: 'лимит2', description: 'лимит2' },
        '😄': { cost: 200, name: 'Широкая улыбка', description: 'Еще шире улыбка' },
        '😁': { cost: 300, name: 'Радость', description: 'Радостная эмоция' },
        '😆': { cost: 400, name: 'Смех', description: 'Смеющаяся эмоция' },
        '😅': { cost: 500, name: 'Облегчение', description: 'Улыбка с облегчением' },
        '😂': { cost: 1000, name: 'Слезы радости', description: 'Смех до слез' },
        '🤣': { cost: 2000, name: 'Катание от смеха', description: 'Катаюсь по полу от смеха' },
        '😭': { cost: 1500, name: 'Громкий плач', description: 'Громко плачу' },
        '😗': { cost: 2500, name: 'Поцелуй', description: 'Воздушный поцелуй' },
        '😙': { cost: 3500, name: 'Радостный поцелуй', description: 'Радостный воздушный поцелуй' },
        '😚': { cost: 4500, name: 'Закрытые глаза поцелуй', description: 'Поцелуй с закрытыми глазами' },
        '🤩': { cost: 5000, name: 'Звездные глаза', description: 'Глаза-звезды' },
        '🙂': { cost: 3000, name: 'Легкая улыбка', description: 'Слегка улыбающееся лицо' },
        '🥲': { cost: 1800, name: 'Улыбка со слезой', description: 'Улыбка со слезой радости' },
        '😊': { cost: 2500, name: 'Сияющая улыбка', description: 'Сияющая улыбка' },
        '☺️': { cost: 5000, name: 'Счастливое лицо', description: 'Счастливое лицо' },
        '😌': { cost: 4000, name: 'Облегчение', description: 'Лицо с облегчением' },
        '😏': { cost: 5000, name: 'Ухмылка', description: 'Ухмыляющееся лицо' },
        '🤤': { cost: 7000, name: 'Слюни', description: 'Пускает слюни' },
        '😔': { cost: 5000, name: 'Расстроенный', description: 'Расстроенное лицо' },
        '🥴': { cost: 12000, name: 'Пьяный', description: 'Пьяное лицо' },
        '😬': { cost: 1250, name: 'Гримаса', description: 'Гримасничающее лицо' },
        '😑': { cost: 3000, name: 'Безразличие', description: 'Безразличное лицо' },
        '😐': { cost: 250, name: 'Нейтральное', description: 'Нейтральное лицо' },
        '🙄': { cost: 500, name: 'Закатывание глаз', description: 'Закатывает глаза' },
        '😒': { cost: 1000, name: 'Недовольство', description: 'Недовольное лицо' },
        '🤨': { cost: 1075, name: 'Поднятая бровь', description: 'Лицо с поднятой бровью' },
        '🧐': { cost: 14000, name: 'Монокль', description: 'Лицо с моноклем' },
        '☹️': { cost: 4000, name: 'Нахмуренный', description: 'Нахмуренное лицо' },
        '🙁': { cost: 4999, name: 'Легкое расстройство', description: 'Слегка расстроенное лицо' },
        '😕': { cost: 5000, name: 'Замешательство', description: 'Смущенное лицо' },
        '😳': { cost: 10000, name: 'Покраснение', description: 'Покрасневшее лицо' },
        '🫂': { cost: 50, name: 'Объятия', description: 'Особая эмоция', currency: 'duplicateShards' },
        '💫': { cost: 500, name: 'Премиум эмоция', description: 'Эксклюзив', currency: 'dollars' }
    },
    templeShop: {
        'master-click': { cost: 10, name: 'Мастерский клик', description: '+10 смайликов за клик', type: 'upgrade', effect: 10 },
        'master-star': { cost: 25, name: 'Звезда мастера', description: 'Эксклюзивная эмоция', type: 'emotion', emotion: '🌟' }
    }
};

// Система лиг
const leagues = {
    'bronze': { name: 'Бронза', clicks: 0, icon: '🥉' },
    'silver': { name: 'Серебро', clicks: 5000, icon: '🥈' },
    'gold': { name: 'Золото', clicks: 15000, icon: '🥇' },
    'ruby': { name: 'Рубин', clicks: 30000, icon: '🔴' },
    'sapphire': { name: 'Сапфир', clicks: 50000, icon: '🔵' },
    'amethyst': { name: 'Аметист', clicks: 75000, icon: '🟣' },
    'emerald': { name: 'Изумруд', clicks: 100000, icon: '💚' },
    'diamond': { name: 'Алмаз', clicks: 1500000, icon: '💎' },
    'platinum': { name: 'Платина', clicks: 20000000, icon: '👑' },
    'obsidian': { name: 'Обсидиан', clicks: 300000000, icon: '⚫' }
};

// Переменные для анти-автокликера
let lastClickTime = 0;
let clickCount = 0;
let cheatDetectionActive = false;
let clickTimes = [];
let cheatBlockTime = 0;

// Система реплик
let replicas = [
    "Привет!",
    "Меня зовут BoccNK и я создатель этой игры.",
    "Ты в курсе что тут есть античит?",
    "Эй, где мой рюкзак?!",
    "О, вот он!",
    "Слушай, а ты кто?",
    "Эту игру делал не я один!",
    "Мне помогал кое-кто...",
    "Знаешь кто?",
    "Нет?",
    "Это..",
    "DeepSeek!",
    "Кликай быстрее!",
    "Собери все эмоции!",
    "Их 93",
    "Одну я удалил >:)",
    "То есть можно получить всего 92",
    "А хочешь эмоцию?",
    "Ну играй, а я подумаю.",
    "Балансируй между смайликами и долларами!",
    "Пассивный доход - ключ к успеху!",
    "Прокачивай лиги для получения осколков мастерства!",
    "Уровни эмоций дают бонусы!",
    "Кстати, какой у тебя уровень на алмазике?",
    "Не забывай про улучшения!",
    "Без них кликер не кликер",
    "Иди покупай доллары пока не взлетели!",
    "Я серьёзно",
    "Что тебе, 100 смайликов жалко?",
    "А какая у тебя лига?",
    "Хочешь +1млрд на клик?",
    "Не получишь!",
    "Лол!",
    "А ты знал что дышать через нос с высунутым языком невозможно",
    "Ну что?",
    "Да ладно, чел, мы оба знаем что можно",
    "Ахахахахахаххаха",
    "Знаешь что...",
    "Если ты реально попробовал то ты был похож на собаку",
    "Не обижайся что я разговариваю с тобой в мужском роде если ты девочка, ок?",
    "Ладно, иди покупай удлучшения!",
    ":)",
    "Купи кейс!",
    "Сейчасже!",
    "Горохострел в сторке!",
    "Я пошутил.",
    "...",
    "....",
    ".....",
    "......",
    ".......",
    "Ой.",
    "Ну что тут у тебя?",
    "Ого ты накопил!",
    "По моему ты читеришь",
    "Хотя нет, тут есть античит >:)",
    "Знаешь что...",
    "Открывай кейсы для редких эмоций!",
    "Бегом!",
    "Хэллоуин скоро...",
    "Ой тоесть тыквенный спас!",
    "Грядет обновление: Хэллоуиский ивент 1/2!",
    "Оно скоро....",
    "Я постараюсь сделать его как можно быстрее",
    "Хочу есть",
    "Хочу пить",
    "Дай еды!",
    "Горохострел это самое дорогое растение!",
    "Ты играл в Горохострел кликер?",
    "Загляни в инфо, там ссылка",
    "Зомбисаркомин!",
    "Я не вижуу причиин думать то что ты одиин...",
    "Ой.",
    "Осколки мастера — хорошая вещь!",
    "Знаешь как получить осколки дубликата?",
    "Открывай кейсы!",
    "Starfoxy...............",
    "Грустно...",
    "Ну ладно, не будем об этом!",
    "Знаешь что?",
    "😉 Держи",
    "Ок, мне лень делать больше реплик",
    "Ну всё, за все реплики пойдут заново"
];
let currentReplicaIndex = 0;

// DOM элементы
const smileysElement = document.getElementById('smileys');
const dollarsElement = document.getElementById('dollars');
const smileysPerClickElement = document.getElementById('smileys-per-click');
const passiveIncomeElement = document.getElementById('passive-income');
const duplicateShardsElement = document.getElementById('duplicate-shards');
const masteryShardsElement = document.getElementById('mastery-shards');
const mainSmileyElement = document.getElementById('main-smiley');
const upgradesGrid = document.getElementById('upgrades-grid');
const casesGrid = document.getElementById('cases-grid');
const shopGrid = document.getElementById('shop-grid');
const inventoryGrid = document.getElementById('inventory-grid');
const exchangeAmountInput = document.getElementById('exchange-amount');
const exchangeBtn = document.getElementById('exchange-btn');
const exchangeResult = document.getElementById('exchange-result');
const notification = document.getElementById('notification');
const antiCheatWarning = document.getElementById('anti-cheat-warning');
const cheatTimer = document.getElementById('cheat-timer');
const replicaElement = document.getElementById('replica');
const currentLeagueElement = document.getElementById('current-league');
const clicksToNextElement = document.getElementById('clicks-to-next');
const leagueNameElement = document.getElementById('league-name');
const leagueProgressElement = document.getElementById('league-progress');
const leagueProgressTextElement = document.getElementById('league-progress-text');
const templeMasteryShardsElement = document.getElementById('temple-mastery-shards');

// Инициализация игры
function initGame() {
    loadGame();
    updateUI();
    setupEventListeners();
    renderUpgrades();
    renderCases();
    renderShop();
    updateInventory();
    updateLeagues();
    startPassiveIncome();
    startAntiCheatSystem();
    startReplicaSystem();
    checkCheatBlock();
}

// Загрузка сохраненной игры
function loadGame() {
    const savedGame = localStorage.getItem('smileyClicker');
    if (savedGame) {
        const loadedState = JSON.parse(savedGame);
        
        // Сохраняем структуру улучшений
        Object.keys(gameState.upgrades).forEach(key => {
            if (loadedState.upgrades && loadedState.upgrades[key]) {
                gameState.upgrades[key].level = loadedState.upgrades[key].level || 0;
                gameState.upgrades[key].cost = loadedState.upgrades[key].cost || gameState.upgrades[key].cost;
            }
        });
        
        // Загружаем остальные данные
        gameState.smileys = loadedState.smileys || 100;
        gameState.dollars = loadedState.dollars || 0;
        gameState.smileysPerClick = loadedState.smileysPerClick || 1;
        gameState.passiveIncome = loadedState.passiveIncome || 0;
        gameState.currentSmiley = loadedState.currentSmiley || '😀';
        gameState.ownedEmotions = loadedState.ownedEmotions || ['😀'];
        gameState.inventory = loadedState.inventory || {};
        gameState.emotionLevels = loadedState.emotionLevels || {};
        gameState.totalClicks = loadedState.totalClicks || 0;
        gameState.duplicateShards = loadedState.duplicateShards || 0;
        gameState.masteryShards = loadedState.masteryShards || 0;
        gameState.currentLeague = loadedState.currentLeague || 'bronze';
        
        // Загружаем время блокировки
        cheatBlockTime = loadedState.cheatBlockTime || 0;
    }
    
    // Инициализируем уровни эмоций
    gameState.ownedEmotions.forEach(emotion => {
        if (!gameState.emotionLevels[emotion]) {
            gameState.emotionLevels[emotion] = 1;
        }
    });
}

// Сохранение игры
function saveGame() {
    const saveData = {
        ...gameState,
        cheatBlockTime: cheatBlockTime
    };
    localStorage.setItem('smileyClicker', JSON.stringify(saveData));
}

// Настройка обработчиков событий
function setupEventListeners() {
    // Клик по смайлику
    mainSmileyElement.addEventListener('click', handleSmileyClick);
    
    // Переключение вкладок
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            switchTab(tabId);
        });
    });
    
    // Обмен смайликов на доллары
    exchangeBtn.addEventListener('click', handleExchange);
    
    // Покупка в храме мастера
    document.querySelectorAll('.temple-buy-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const itemId = e.target.getAttribute('data-item');
            buyTempleItem(itemId);
        });
    });
    
    // Автосохранение каждые 10 секунд
    setInterval(saveGame, 10000);
}

// Обработка клика по смайлику
function handleSmileyClick() {
    // Проверка на блокировку от античита
    if (cheatBlockTime > Date.now()) {
        showNotification('Игра заблокирована за использование автокликера!', 'error');
        return;
    }
    
    // Проверка на автокликер
    if (cheatDetectionActive) {
        showNotification('Слишком много кликов! Подождите немного.', 'error');
        return;
    }
    
    const currentTime = Date.now();
    const timeDiff = currentTime - lastClickTime;
    
    // Добавляем время клика в историю
    clickTimes.push(currentTime);
    
    // Ограничиваем историю последними 10 кликами
    if (clickTimes.length > 10) {
        clickTimes.shift();
    }
    
    // Проверяем паттерн автокликера (одинаковые интервалы)
    if (clickTimes.length >= 5) {
        const intervals = [];
        for (let i = 1; i < clickTimes.length; i++) {
            intervals.push(clickTimes[i] - clickTimes[i-1]);
        }
        
        // Проверяем, все ли интервалы примерно одинаковы (разница менее 10мс)
        const firstInterval = intervals[0];
        const allSimilar = intervals.every(interval => Math.abs(interval - firstInterval) < 10);
        
        if (allSimilar) {
            activateCheatBlock();
            return;
        }
    }
    
    // Если клики происходят слишком быстро, активируем защиту
    if (timeDiff < 70) {
        clickCount++;
        if (clickCount > 5) {
            activateCheatDetection();
            return;
        }
    } else {
        clickCount = 0;
    }
    
    lastClickTime = currentTime;
    
    // Увеличиваем счетчик кликов
    gameState.totalClicks++;
    
    // Добавляем смайлики
    gameState.smileys += gameState.smileysPerClick;
    
    // Добавляем доллары если есть улучшение
    if (gameState.upgrades['dollar-boost'].level > 0) {
        gameState.dollars += gameState.upgrades['dollar-boost'].effect * gameState.upgrades['dollar-boost'].level;
    }
    
    // Повышаем уровень текущей эмоции
    increaseEmotionLevel(gameState.currentSmiley);
    
    // Проверяем переход на новую лигу
    checkLeagueUpgrade();
    
    updateUI();
    updateAllBuyButtons();
}

// Увеличение уровня эмоции
function increaseEmotionLevel(emotion) {
    if (!gameState.emotionLevels[emotion]) {
        gameState.emotionLevels[emotion] = 1;
    }
    
    // Увеличиваем уровень с шансом 10%
    if (Math.random() < 0.1) {
        gameState.emotionLevels[emotion]++;
        
        // Проверяем достижение 100 уровня
        if (gameState.emotionLevels[emotion] === 100) {
            gameState.masteryShards++;
            showNotification(`Поздравляем! Эмоция ${emotion} достигла 100 уровня! Получен осколок мастерства.`, 'success');
        }
        
        // Обновляем инвентарь если открыт
        if (document.getElementById('inventory-tab').classList.contains('active')) {
            updateInventory();
        }
    }
}

// Проверка перехода на новую лигу
function checkLeagueUpgrade() {
    const leagueKeys = Object.keys(leagues);
    const currentIndex = leagueKeys.indexOf(gameState.currentLeague);
    
    // Если это не последняя лига
    if (currentIndex < leagueKeys.length - 1) {
        const nextLeague = leagueKeys[currentIndex + 1];
        const nextLeagueReq = leagues[nextLeague].clicks;
        
        // Проверяем, достигли ли мы требований для следующей лиги
        if (gameState.totalClicks >= nextLeagueReq) {
            gameState.currentLeague = nextLeague;
            gameState.masteryShards += 10;
            showNotification(`Поздравляем! Вы достигли лиги ${leagues[nextLeague].name}! Получено 10 осколков мастерства.`, 'success');
            updateLeagues();
        }
    }
}

// Обновление информации о лигах
function updateLeagues() {
    const currentLeagueData = leagues[gameState.currentLeague];
    currentLeagueElement.textContent = currentLeagueData.name;
    leagueNameElement.textContent = currentLeagueData.name;
    
    // Определяем следующую лигу и прогресс
    const leagueKeys = Object.keys(leagues);
    const currentIndex = leagueKeys.indexOf(gameState.currentLeague);
    
    if (currentIndex < leagueKeys.length - 1) {
        const nextLeague = leagueKeys[currentIndex + 1];
        const nextLeagueReq = leagues[nextLeague].clicks;
        const currentLeagueReq = leagues[gameState.currentLeague].clicks;
        
        const progress = ((gameState.totalClicks - currentLeagueReq) / (nextLeagueReq - currentLeagueReq)) * 100;
        leagueProgressElement.style.width = `${Math.min(progress, 100)}%`;
        
        const clicksLeft = nextLeagueReq - gameState.totalClicks;
        clicksToNextElement.textContent = clicksLeft > 0 ? clicksLeft : 0;
        leagueProgressTextElement.textContent = `${gameState.totalClicks - currentLeagueReq}/${nextLeagueReq - currentLeagueReq} кликов`;
    } else {
        // Максимальная лига достигнута
        leagueProgressElement.style.width = '100%';
        clicksToNextElement.textContent = '0';
        leagueProgressTextElement.textContent = 'Максимальная лига достигнута!';
    }
    
    // Обновляем список лиг
    document.querySelectorAll('.league-item').forEach(item => {
        const leagueId = item.getAttribute('data-league');
        const leagueReq = leagues[leagueId].clicks;
        
        item.classList.remove('active', 'unlocked');
        
        if (leagueId === gameState.currentLeague) {
            item.classList.add('active');
        } else if (gameState.totalClicks >= leagueReq) {
            item.classList.add('unlocked');
        }
    });
}

// Активация блокировки за читы
function activateCheatBlock() {
    cheatBlockTime = Date.now() + 5 * 60 * 1000; // 5 минут
    antiCheatWarning.style.display = 'block';
    updateCheatTimer();
    saveGame();
    
    const timerInterval = setInterval(() => {
        if (cheatBlockTime <= Date.now()) {
            clearInterval(timerInterval);
            antiCheatWarning.style.display = 'none';
            cheatBlockTime = 0;
            saveGame();
        } else {
            updateCheatTimer();
        }
    }, 1000);
}

// Обновление таймера блокировки
function updateCheatTimer() {
    const timeLeft = Math.max(0, cheatBlockTime - Date.now());
    const minutes = Math.floor(timeLeft / 60000);
    const seconds = Math.floor((timeLeft % 60000) / 1000);
    cheatTimer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Проверка блокировки при загрузке
function checkCheatBlock() {
    if (cheatBlockTime > Date.now()) {
        antiCheatWarning.style.display = 'block';
        updateCheatTimer();
        
        const timerInterval = setInterval(() => {
            if (cheatBlockTime <= Date.now()) {
                clearInterval(timerInterval);
                antiCheatWarning.style.display = 'none';
                cheatBlockTime = 0;
                saveGame();
            } else {
                updateCheatTimer();
            }
        }, 1000);
    }
}

// Активация защиты от автокликера
function activateCheatDetection() {
    cheatDetectionActive = true;
    showNotification('Обнаружена подозрительная активность!', 'error');
    
    setTimeout(() => {
        cheatDetectionActive = false;
        clickCount = 0;
    }, 5000);
}

// Запуск системы анти-чита
function startAntiCheatSystem() {
    // Сброс счетчика кликов каждую секунду
    setInterval(() => {
        if (clickCount > 0) {
            clickCount = Math.max(0, clickCount - 2);
        }
    }, 1000);
}

// Система реплик
function startReplicaSystem() {
    updateReplica();
    setInterval(updateReplica, 10000); // Смена реплик каждые 10 секунд
}

// Обновление реплики
function updateReplica() {
    const replica = replicas[currentReplicaIndex];
    replicaElement.textContent = replica;
    
    // Проверяем специальные реплики
    if (replica.includes('😉') && !gameState.ownedEmotions.includes('😉')) {
        gameState.ownedEmotions.push('😉');
        if (!gameState.inventory['😉']) {
            gameState.inventory['😉'] = 0;
        }
        gameState.inventory['😉'] += 1;
        updateInventory();
        showNotification('Вы получили подмигивающий смайлик!', 'success');
    }
    
    currentReplicaIndex = (currentReplicaIndex + 1) % replicas.length;
}

// Переключение вкладок
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    document.getElementById(`${tabId}-tab`).classList.add('active');
    
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`.tab[data-tab="${tabId}"]`).classList.add('active');
    
    // Обновляем информацию в храме мастера
    if (tabId === 'master-temple') {
        templeMasteryShardsElement.textContent = gameState.masteryShards;
    }
    
    updateAllBuyButtons();
}

// Обмен смайликов на доллары
function handleExchange() {
    const amount = parseInt(exchangeAmountInput.value);
    if (isNaN(amount) || amount < 100) {
        showNotification('Минимальная сумма для обмена - 100 смайликов!', 'error');
        return;
    }
    
    if (amount > gameState.smileys) {
        showNotification('Недостаточно смайликов для обмена!', 'error');
        return;
    }
    
    const dollars = Math.floor(amount / 100);
    gameState.smileys -= dollars * 100;
    gameState.dollars += dollars;
    
    updateUI();
    exchangeResult.textContent = `Обменяно ${dollars * 100} смайликов на $${dollars}`;
    exchangeAmountInput.value = '';
    showNotification(`Успешно обменяно на $${dollars}!`, 'success');
    updateAllBuyButtons();
}

// Пассивный доход
function startPassiveIncome() {
    setInterval(() => {
        if (gameState.passiveIncome > 0) {
            gameState.smileys += gameState.passiveIncome;
            updateUI();
            updateAllBuyButtons();
        }
    }, 1000);
}

// Покупка улучшения
function buyUpgrade(upgradeId) {
    const upgrade = gameState.upgrades[upgradeId];
    const currency = upgrade.currency || 'smileys';
    
    if (gameState[currency] >= upgrade.cost) {
        gameState[currency] -= upgrade.cost;
        upgrade.level += 1;
        
        // Повышение цены на 15%
        upgrade.cost = Math.floor(upgrade.cost * 1.20);
        
        // Применение эффекта улучшения
        if (upgradeId === 'click-power') {
            gameState.smileysPerClick += upgrade.effect;
        } else if (upgradeId === 'auto-clicker') {
            gameState.passiveIncome += upgrade.effect;
        } else if (upgradeId === 'double-click') {
            gameState.smileysPerClick *= upgrade.effect;
        } else if (upgradeId === 'mega-click') {
            gameState.smileysPerClick += upgrade.effect;
        }
        // Долларовый буст обрабатывается в handleSmileyClick
        
        updateUI();
        renderUpgrades();
        updateAllBuyButtons();
        showNotification(`Улучшение "${upgrade.name}" куплено!`, 'success');
    } else {
        showNotification('Недостаточно средств!', 'error');
    }
}

// Покупка эмоции из магазина
function buyEmotion(emotion) {
    const emotionData = gameState.shop[emotion];
    const currency = emotionData.currency || 'smileys';
    
    if (gameState[currency] >= emotionData.cost) {
        gameState[currency] -= emotionData.cost;
        
        if (!gameState.ownedEmotions.includes(emotion)) {
            gameState.ownedEmotions.push(emotion);
        }
        
        if (!gameState.inventory[emotion]) {
            gameState.inventory[emotion] = 0;
            gameState.emotionLevels[emotion] = 1;
        }
        gameState.inventory[emotion] += 1;
        
        updateUI();
        renderShop();
        updateInventory();
        updateAllBuyButtons();
        showNotification(`Эмоция "${emotionData.name}" куплена!`, 'success');
    } else {
        showNotification('Недостаточно средств!', 'error');
    }
}

// Покупка кейса
function buyCase(caseId) {
    const caseData = gameState.cases[caseId];
    const currency = caseData.currency || 'smileys';
    
    if (gameState[currency] >= caseData.cost) {
        gameState[currency] -= caseData.cost;
        
        let randomIndex = Math.floor(Math.random() * caseData.emotions.length);
        let emotion = caseData.emotions[randomIndex];
        
        if (caseId === 'cool' && Math.random() < 0.001) {
            emotion = '🤯';
        }
        
        // Проверяем, есть ли уже эта эмоция
        const isDuplicate = gameState.ownedEmotions.includes(emotion);
        
        if (!isDuplicate) {
            gameState.ownedEmotions.push(emotion);
        } else {
            // Даем осколок дубликата за повторную эмоцию
            gameState.duplicateShards += 1;
            showNotification('Получен осколок дубликата за повторную эмоцию!', 'info');
        }
        
        if (!gameState.inventory[emotion]) {
            gameState.inventory[emotion] = 0;
            gameState.emotionLevels[emotion] = 1;
        }
        gameState.inventory[emotion] += 1;
        
        updateUI();
        updateInventory();
        updateAllBuyButtons();
        showNotification(`Вы получили: ${emotion} из кейса "${caseData.name}"!`, 'success');
    } else {
        showNotification('Недостаточно средств!', 'error');
    }
}

// Покупка в храме мастера
function buyTempleItem(itemId) {
    const item = gameState.templeShop[itemId];
    
    if (gameState.masteryShards >= item.cost) {
        gameState.masteryShards -= item.cost;
        
        if (item.type === 'upgrade') {
            // Применяем улучшение
            gameState.smileysPerClick += item.effect;
            showNotification(`Улучшение "${item.name}" куплено!`, 'success');
        } else if (item.type === 'emotion') {
            // Добавляем эмоцию
            if (!gameState.ownedEmotions.includes(item.emotion)) {
                gameState.ownedEmotions.push(item.emotion);
            }
            
            if (!gameState.inventory[item.emotion]) {
                gameState.inventory[item.emotion] = 0;
                gameState.emotionLevels[item.emotion] = 1;
            }
            gameState.inventory[item.emotion] += 1;
            
            showNotification(`Эмоция "${item.name}" куплена!`, 'success');
            updateInventory();
        }
        
        updateUI();
        templeMasteryShardsElement.textContent = gameState.masteryShards;
        showNotification(`Предмет "${item.name}" куплен!`, 'success');
    } else {
        showNotification('Недостаточно осколков мастерства!', 'error');
    }
}

// Смена текущего смайлика
function setCurrentSmiley(emotion) {
    gameState.currentSmiley = emotion;
    mainSmileyElement.textContent = emotion;
    showNotification(`Смайлик изменен на: ${emotion}`, 'info');
}

// Отрисовка улучшений
function renderUpgrades() {
    upgradesGrid.innerHTML = '';
    
    for (const [id, upgrade] of Object.entries(gameState.upgrades)) {
        const upgradeElement = document.createElement('div');
        upgradeElement.className = 'upgrade';
        
        const currency = upgrade.currency === 'dollars' ? '$' : '';
        
        upgradeElement.innerHTML = `
            <div class="upgrade-icon">🔧</div>
            <div class="upgrade-name">${upgrade.name} Ур. ${upgrade.level}</div>
            <div class="upgrade-desc">${upgrade.description}</div>
            <div class="upgrade-cost">${currency}${upgrade.cost} ${upgrade.currency === 'dollars' ? 'долларов' : 'смайликов'}</div>
            <button class="buy-btn" ${gameState[upgrade.currency || 'smileys'] < upgrade.cost ? 'disabled' : ''}>
                Купить
            </button>
        `;
        
        upgradeElement.querySelector('.buy-btn').addEventListener('click', () => buyUpgrade(id));
        upgradesGrid.appendChild(upgradeElement);
    }
}

// Отрисовка кейсов
function renderCases() {
    casesGrid.innerHTML = '';
    
    for (const [id, caseData] of Object.entries(gameState.cases)) {
        const caseElement = document.createElement('div');
        caseElement.className = 'case-item';
        
        const currency = caseData.currency === 'dollars' ? '$' : '';
        
        caseElement.innerHTML = `
            <div class="case-icon">🎁</div>
            <div class="case-name">${caseData.name}</div>
            <div class="case-desc">Содержит случайную эмоцию</div>
            <div class="case-cost">${currency}${caseData.cost} ${caseData.currency === 'dollars' ? 'долларов' : 'смайликов'}</div>
            <button class="buy-btn" ${gameState[caseData.currency || 'smileys'] < caseData.cost ? 'disabled' : ''}>
                Купить
            </button>
        `;
        
        caseElement.querySelector('.buy-btn').addEventListener('click', () => buyCase(id));
        casesGrid.appendChild(caseElement);
    }
}

// Отрисовка магазина
function renderShop() {
    shopGrid.innerHTML = '';
    
    for (const [emotion, data] of Object.entries(gameState.shop)) {
        const emotionElement = document.createElement('div');
        emotionElement.className = 'emotion';
        
        const isOwned = gameState.ownedEmotions.includes(emotion);
        const currency = data.currency === 'dollars' ? '$' : data.currency === 'duplicateShards' ? '' : '';
        const currencyText = data.currency === 'dollars' ? 'долларов' : data.currency === 'duplicateShards' ? 'осколков дубликата' : 'смайликов';
        
        emotionElement.innerHTML = `
            <div class="emotion-icon">${emotion}</div>
            <div class="emotion-name">${data.name}</div>
            <div class="emotion-desc">${data.description}</div>
            <div class="emotion-cost">${currency}${data.cost} ${currencyText}</div>
            <button class="buy-btn" ${gameState[data.currency || 'smileys'] < data.cost ? 'disabled' : ''}>
                ${isOwned ? 'Получить еще' : 'Купить'}
            </button>
            ${isOwned ? `<button class="buy-btn" style="margin-top: 5px; background: rgba(33, 150, 243, 0.7);">Использовать</button>` : ''}
        `;
        
        emotionElement.querySelectorAll('.buy-btn')[0].addEventListener('click', () => buyEmotion(emotion));
        
        if (isOwned) {
            emotionElement.querySelectorAll('.buy-btn')[1].addEventListener('click', () => setCurrentSmiley(emotion));
        }
        
        shopGrid.appendChild(emotionElement);
    }
}

// Обновление инвентаря
function updateInventory() {
    inventoryGrid.innerHTML = '';
    
    for (const [emotion, count] of Object.entries(gameState.inventory)) {
        if (count > 0) {
            const inventoryItem = document.createElement('div');
            inventoryItem.className = 'inventory-item';
            
            const level = gameState.emotionLevels[emotion] || 1;
            
            inventoryItem.innerHTML = `
                <div class="inventory-icon">${emotion}</div>
                <div>${gameState.shop[emotion]?.name || emotion}</div>
                <div class="emotion-level">Ур. ${level}</div>
                <div class="inventory-count">x${count}</div>
                <button class="buy-btn" style="background: rgba(33, 150, 243, 0.7);">Использовать</button>
            `;
            
            inventoryItem.querySelector('.buy-btn').addEventListener('click', () => setCurrentSmiley(emotion));
            inventoryGrid.appendChild(inventoryItem);
        }
    }
    
    if (inventoryGrid.children.length === 0) {
        inventoryGrid.innerHTML = '<p>Ваш инвентарь пуст</p>';
    }
}

// Обновление интерфейса
function updateUI() {
    smileysElement.textContent = gameState.smileys.toLocaleString();
    dollarsElement.textContent = gameState.dollars.toLocaleString();
    smileysPerClickElement.textContent = gameState.smileysPerClick;
    passiveIncomeElement.textContent = gameState.passiveIncome;
    duplicateShardsElement.textContent = gameState.duplicateShards;
    masteryShardsElement.textContent = gameState.masteryShards;
    mainSmileyElement.textContent = gameState.currentSmiley;
    
    // Обновляем информацию о лигах
    updateLeagues();
}

// Обновление состояния всех кнопок покупки
function updateAllBuyButtons() {
    document.querySelectorAll('.upgrade .buy-btn').forEach(btn => {
        const upgradeElement = btn.closest('.upgrade');
        if (upgradeElement) {
            const costElement = upgradeElement.querySelector('.upgrade-cost');
            if (costElement) {
                const costText = costElement.textContent;
                const cost = parseInt(costText.replace(/\D/g, ''));
                const currency = costText.includes('$') ? 'dollars' : 'smileys';
                btn.disabled = gameState[currency] < cost;
            }
        }
    });
    
    document.querySelectorAll('.case-item .buy-btn').forEach(btn => {
        const caseElement = btn.closest('.case-item');
        if (caseElement) {
            const costElement = caseElement.querySelector('.case-cost');
            if (costElement) {
                const costText = costElement.textContent;
                const cost = parseInt(costText.replace(/\D/g, ''));
                const currency = costText.includes('$') ? 'dollars' : 'smileys';
                btn.disabled = gameState[currency] < cost;
            }
        }
    });
    
    document.querySelectorAll('.emotion .buy-btn').forEach(btn => {
        const emotionElement = btn.closest('.emotion');
        if (emotionElement) {
            const costElement = emotionElement.querySelector('.emotion-cost');
            if (costElement) {
                const costText = costElement.textContent;
                const cost = parseInt(costText.replace(/\D/g, ''));
                let currency = 'smileys';
                if (costText.includes('$')) currency = 'dollars';
                if (costText.includes('осколков')) currency = 'duplicateShards';
                btn.disabled = gameState[currency] < cost;
            }
        }
    });
}

// Показ уведомлений
function showNotification(message, type = 'info') {
    notification.textContent = message;
    notification.className = 'notification';
    
    if (type === 'success') {
        notification.style.background = 'rgba(76, 175, 80, 0.9)';
    } else if (type === 'error') {
        notification.style.background = 'rgba(244, 67, 54, 0.9)';
    } else if (type === 'info') {
        notification.style.background = 'rgba(33, 150, 243, 0.9)';
    }
    
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Запуск игры при загрузке страницы
window.addEventListener('load', initGame);
