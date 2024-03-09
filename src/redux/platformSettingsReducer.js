const initialState = {
  strings: {
    bitcoin_block: {
      bitcoin: "Bitcoin",
      bitcoin_code: "BTC",
      rank1: "Rank #1",
      h24: "(24H)",
    },
    get_started: {
      title: "Get Started with KoinX for FREE",
      desc: "With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports",
      button: "Get Started for FREE",
    },
    trending_coins: "Trending Coins (24h)",
    breadcrumb: {
      cryptocurrencies: "Cryptocurrencies",
    },
    tabs: {
      overview: "Overview",
      fundamentals: "Fundamentals",
      newinsights: "New Insights",
      sentiments: "Sentiments",
      team: "Team",
      technicals: "Technicals",
      tokenomics: "Tokenomics",
    },
    overview: {
      performance: "Performance",
    },
    fundamentals: {
      table: [
        { key: 0, text: "Bitcoin Price", amount: "$16,815.46" },
        { key: 1, text: "Market Cap", amount: "$323,507,290,047" },
        {
          key: 2,
          text: "24h Low / 24h High",
          amount: "$16,382.07 / $16874.12",
        },
        { key: 3, text: "Market Cap Dominance", amount: "38.343%" },
        { key: 4, text: "7d Low / 7d High", amount: "$16,382.07 / $16874.12" },
        { key: 5, text: "Volume / Market Cap", amount: "0.0718" },
        { key: 6, text: "Trading Volume", amount: "$23,249,202,782" },
        {
          key: 7,
          title: "All-Time High",
          date: "Nov 10, 2021 (about 1 year)",
          rate: -75.6,
          limit: 69044.77,
        },
        { key: 8, text: "Market Cap Rank", amount: "#1" },
        {
          key: 9,
          title: "All-Time Low",
          date: "Jul 06, 2013 (over 9 years)",
          rate: 24729.1,
          limit: 67.81,
        },
      ],
    },
    header: {
      crypto_taxes: "Crypto Taxes",
      free_tools: "Free Tools",
      resource_center: "Resource Center",
      get_started: "Get Started",
    },
  },
};

const platformSettingsReducer = (state = initialState, action) => {
  return state;
};

export default platformSettingsReducer;
