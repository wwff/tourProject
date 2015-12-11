var data = {
    isAdmin: true,
    list:[{
        "picSrc":"images/bg_two.jpg",
        "font1":"尽在九寨",
        "font2Span1":"是一种什么样的感受",
        "font2Span2":"同时看到天和地",
        "font3P1":"2-3h的客栈服务即可换来",
        "font3P2":"·3天2夜的自由行 ·免费提供食宿",
        "font3P3":"无任何额外开销，尽情领略九寨风情"
    },
        {
            "picSrc":"images/bg_three.jpg",
            "font1":"梦之西湖",
            "font2Span1":"还能记起白娘子吗",
            "font2Span2":"她曾经和许仙在这里生活",
            "font3P1":"2-3h的客栈服务即可换来",
            "font3P2":"·3天2夜的自由行 ·免费提供食宿",
            "font3P3":"无任何额外开销，轻松领略西湖十景"
        }
    ]};
var html = template('test', data);
document.getElementById('content').innerHTML += html;