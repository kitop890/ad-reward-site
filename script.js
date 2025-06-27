
const translations = {
    en: {
        title: "Welcome to Tomato Ads",
        description: "Watch ads, earn coins. 1.5 coins per video. Limited to 20 per day.",
        conversion: "1000 coins = 1 USDT",
        withdrawal: "Withdraw via: Laos Phone Number, Bitcoin, TRX, LTC",
        support: "Support: thammavongsakitop@gmail.com | Telegram: @tomatosupport"
    },
    th: {
        title: "ยินดีต้อนรับสู่ Tomato Ads",
        description: "ดูโฆษณา รับเหรียญ 1.5 เหรียญต่อวิดีโอ จำกัดวันละ 20 ครั้ง",
        conversion: "1000 เหรียญ = 1 USDT",
        withdrawal: "ถอนเงินผ่าน: เบอร์มือถือประเทศลาว, Bitcoin, TRX, LTC",
        support: "ติดต่อ: thammavongsakitop@gmail.com | Telegram: @tomatosupport"
    },
    ru: {
        title: "Добро пожаловать в Tomato Ads",
        description: "Смотрите рекламу, зарабатывайте монеты. 1.5 монеты за видео. Ограничено 20 в день.",
        conversion: "1000 монет = 1 USDT",
        withdrawal: "Вывод через: номер телефона Лаоса, Bitcoin, TRX, LTC",
        support: "Поддержка: thammavongsakitop@gmail.com | Telegram: @tomatosupport"
    }
};

function setLang(lang) {
    document.getElementById('title').innerText = translations[lang].title;
    document.getElementById('description').innerText = translations[lang].description;
    document.getElementById('conversion').innerText = translations[lang].conversion;
    document.getElementById('withdrawal').innerText = translations[lang].withdrawal;
    document.getElementById('support').innerText = translations[lang].support;
}
