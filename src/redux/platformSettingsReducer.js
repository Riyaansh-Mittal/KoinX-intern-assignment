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
      sentimentals: "Sentimentals",
      team: "Team",
      technicals: "Technicals",
      tokenomics: "Tokenomics",
    },
    overview: {
      performance: "Performance",
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
