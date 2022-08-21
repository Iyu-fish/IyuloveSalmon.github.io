new TypeIt("#yffwyp", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("YFF && WYP")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("这一年，谢谢我的乖乖 ")
    .pause(3000)
    .go();

new TypeIt('#talkToWRY', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();