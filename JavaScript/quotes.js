const quotes = [
    { quote: 'JavaScript. 하다보면 실력이 늘 것이다.', author: '-김도영-' },
    { quote: '하루에 3시간을 걸으면, 7년 후에 지구를 한 바퀴 돌 수 있다.', author: '-사무엘 존슨-' },
    { quote: '신은 용기있는 자를 결코 버리지 않는다.', author: '-켄러-' },
    { quote: '피할수 없으면 즐겨라', author: '-로버트 엘리엇-' },
    { quote: '먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에', author: '-엘사 맥스웰-' },
    { quote: '너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다 ', author: '-랄프 왈도 에머슨-' },
    { quote: '오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.', author: '-앙드레 말로-' },
    { quote: '좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다', author: '-단테-' },
    { quote: '1퍼센트의 가능성, 그것이 나의 길이다.', author: '-나폴레옹-' },
    { quote: '그대의 하루 하루를 그대의 마지막 날이라고 생각하라', author: '-호라티우스-' },
];
const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
