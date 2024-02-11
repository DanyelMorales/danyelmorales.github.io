(function ($) {

    $.fn.randomGreeting = function (language) {

        if (!language) {
            const greetings = [
                "talofa", "tugjatjeta", "terve", "汝好", "байна", "γειά σας", "malo", "bok", "moikka", "喂", "сайн байна уу",
                "γειά σου", "selamat", "hej", "ola", "爾好", "сайн уу", "नमस्ते", "szervusz", "bongu", "hejsa", "gamardžoba",
                "здравейте", "halla", "selamat siang", "selamat datong", "hutch-e-lul-lul-o", "γειά", "آلو", "alii", "salute",
                "aqui", "hoi", "χαίρετε", "السلام عليكم", "سلام", "今日は", "kwe", "saluton", "χαίρε", "و عليكم السلام",
                "سلام علیکم", "おっす", "ສະບາຍດີ", "sal", "χαίρε και υγίαινε", "مرحبا", "नमस्कार", "안녕하세요", "tungjatjeta",
                "bula uro", "mauri", "ألسّلام عليكم", "namaskāram", "안녕", "aang", "hyvää päivää", "sannu", "وعليكم السّلام",
                "salutamu", "!kao", "مرحبًا", "hei", "nyob zoo", "أهلاً وسهلاً", "ћао", "здраво", "ողջույն", "moi",
                "szervusztok", "أهلاً بيك", "привет", "здорово", "y´'át'ééh", "kaixo", "moro", "sziasztok", "أهلاً", "ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ",
                "cześć", "নমস্কার", "bonjour", "szia", "բարև", "kamusta", "olá", "nomoskar", "namaste", "hai", "բարև ձեզ", "kumusta",
                "živjo", "ćao", "góðan dag", "bon die", "ալլո", "สวัสดีค่ะ", "hola", "merhaba", "hæ", "ciao", "もしもし", "สวัสดีครับ",
                "hallå", "selam", "halo", "buongiorno", "zdravo", "sälü", "வணக்கம்", "здравей", "ciào", "bouônjour", "horas", "экии",
                "สวัสดี", "zdrávej", "salve", "сәлем", "mushi mushi", "ekii", "iyi günler", "zdrávejte", "salvete", "салам", "kanichi wa",
                "привіт", "chào anh", "bog", "ave", "сәлеметсіздер", "shalom", "добрий день", "chào chị", "ahoj", "avete", "안녕하십니까",
                "ellohay", "nozvezh vat", "آداب", "glidis", "nazdar", "grüzi", "labas", "hallo", "mirëdita", "السلام علیکم", "bondjoû",
                "dobrý den", "xin chào", "sveikas", "你好", "parev", "אַ גוטן טאָג", "dav", "shwmae", "sveiki", "您好", "bunã ziua",
                "שלום", "tere", "ەيلو", "tēriņtš", "儂好", "hujambo", "c'kemi", "hey", "لسلام علیکم", "coi", "čao", "здраствуй",
                "ᐊᐃ", "halló", "ฮัลโหล", "bonġu", "høj", "grüß gott", "ᐊᐃᓐᖓᐃ", "bula", "здравствуйте", "bonswa", "salut", "aloha",
                "haai", "hoy", "алло", "sekoh", "halò", "moïen", "sawubona", "kumustá", "ало", "сайн", "გამარჯობა", "नमस्ते", "ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ",
                "namaste"
            ];
            let greeting = greetings[(Math.floor(Math.random() * greetings.length))];
            this.text(`${greeting}`);
            return this;
        }

        let greetinsMap = {
            "hindi": ["नमस्ते", "namaste"],
            "hmong": ["nyob zoo"],
            "hungarian": ["szervusz", "szervusztok", "sziasztok", "szia"],
            "icelandic": ["góðan dag", "hæ", "halló"],
            "indonesian": ["hai", "selamat siang", "halo"],
            "interlingua": ["bon die", "salute"],
            "italian": ["ciào", "salve", "ciao", "buongiorno"],
            "japanese": ["今日は", "おっす", "もしもし", "mushi mushi", "kanichi wa", "こんにちは"],
            "javanese": ["selamat"],
            "jèrriais": ["bouônjour"],
            "kazakh": ["сәлем", "салам", "сәлеметсіздер"],
            "korean": ["안녕하세요", "안녕", "안녕하십니까"],
            "lao": ["ສະບາຍດີ"],
            "latin": ["salve", "salvete", "ave", "avete"],
            "limburgish": ["hallo"],
            "lithuanian": ["labas", "sveikas", "sveiki"],
            "livonian": ["tēriņtš"],
            "lojban": ["coi"],
            "luxembourgish": ["moïen"],
            "macedonian": ["здраво", "ало"],
            "malay": ["selamat datong"],
            "maltese": ["bongu", "bonġu", "bonswa"],
            "mandarin": ["你好", "您好", "喂", "ni hao"],
            "mohawk": ["kwe", "sekoh"],
            "mohican": ["aqui"],
            "mongolian": ["сайн байна уу", "сайн уу"],
            "navajo": ["y´'át'ééh"],
            "norwegian": ["hallo", "hei", "halla"],
            "palauan": ["alii"],
            "persian": ["سلام", "سلام علیکم"],
            "pig latin": ["ellohay"],
            "polish": ["cześć"],
            "portuguese": ["olá"],
            "punjabi": ["ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ"],
            "romanian": ["bunã ziua"],
            "russian": ["здравствуйте", "алло", "здраствуй", "привет", "здорово"],
            "samoan": ["talofa", "malo"],
            "sanskrit": ["नमस्कार", "namaskāram"],
            "serbian": ["здраво", "zdravo", "ćao", "ћао"],
            "shanghainese": ["儂好"],
            "sicilian": ["ciao", "salutamu"],
            "slovenian": ["živjo", "halo", "zdravo"],
            "spanish": ["hola"],
            "swahili": ["hujambo", "jambo"],
            "swedish": ["hallå", "hej"],
            "swiss german": ["hallo", "hoi", "grüzi"]
        }
        let greetings =  Object.keys(greetinsMap);
        let rndnum = (Math.floor(Math.random() * greetings.length));
        let greetingLanguage = greetings[rndnum];
        let greeting = greetinsMap[greetingLanguage];

        if(greeting.length > 1){
            greeting = greeting[rndnum % greeting.length];
        }

        this.text(greeting);
        $(language).text(`(hello in ${greetingLanguage})`);
        return this;
    };

}(jQuery));