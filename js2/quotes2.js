const quotes = [
    {
        quote : "삶이 있는 한 희망은 있다",
        author: "키케로",
    },
    {
        quote : "행복의 문이 하나 닫히면 다른 문이 열린다 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다",
        author: "헬렌켈러",
    },
    {
        quote : "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다",
        author: "단테",
    },
    {
        quote : "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다",
        author: "L.론허바드",
    },
    {
        quote : "문제는 목적지에 얼마나 빨리 가느내가 아니라 그 목적지가 어디냐는 것이다",
        author: "메이벨 뉴컴버",
    },
    {
        quote : "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다",
        author: "톰 모나건",
    },
    {
        quote : "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라",
        author: "제임스 딘",
    },
    {
        quote : "문제점을 찾지 말고 해결책을 찾으라",
        author: "헨리포드",
    },
    {
        quote : " 이미끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라",
        author: "탈무드",
    },
    {
        quote : "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다",
        author: "이소룡",
    },
];

const quote =document.querySelector("#quotes span:first-child");
const author =document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText =todaysQuote.author;