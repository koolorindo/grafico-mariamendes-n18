const grafico = document.getElementById("meuGrafico").getContext("2d");
const meuGrafico = new Chart(grafico, {
    type: "pie",
    data: {
      labels: [
        "Instagram",
        "WhatsApp",
        "Facebook",
        "WeChat",
        "TikTok",
        "DouYin",
        "Twitter",
        "Telegram",
        "FB Messenger",
        "LINE"
      ],
      datasets: [{
        data: [
          16.5,
          16.1,
          12.8,
          12.8,
          7.4,
          6.6,
          3.2,
          2.4,
          2.3,
          1.7
        ],
        backgroundColor: [
            "#ADD8E6", 
            "#9370DB",
            "#F08080", 
            "#FF7F50", 
            "#808000", 
            "#20B2AA", 
            "#4682B4", 
            "#A0522D", 
            "#DA70D6", 
            "#F0E68C",
                
        ],
      }
    ]
    }
  }
);