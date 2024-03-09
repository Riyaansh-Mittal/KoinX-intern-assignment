import React, { useState, useEffect } from "react";
import axios from "axios";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import styled from "styled-components";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaBitcoin } from "react-icons/fa6";
import { IoTriangleSharp } from "react-icons/io5";
import TradingViewWidget from "../components/TradingView_Graph/TradingViewWidget";
import Tabs from "../components/tabs/Tabs";
import { useSelector } from "react-redux";
import StyleBox from "../components/StyleBox";
import Sentiments from "../components/tabs/Sentiments";

const Home = () => {
  const [bitcoinData, setBitcoinData] = useState(null);
  const strings = useSelector((state) => state.platformSettings.strings);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price",
          {
            params: {
              ids: "bitcoin",
              vs_currencies: "inr,usd",
              include_24hr_change: true,
            },
          }
        );

        setBitcoinData(response.data.bitcoin);
      } catch (error) {
        console.error("Error fetching Bitcoin price:", error);
      }
    };

    fetchData();
  }, []);
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const trendingResponse = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );

        setTrendingCoins(trendingResponse.data.coins.slice(0, 3));
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <Root className="mx-10 my-1">
      <Breadcrumb path="/Cryptocurrencies/Bitcoin" />
      <div className="container space-x-4">
        <div className="space-y-9">
          <StyleBox>
            <div className="flex flex-row items-center space-x-5">
              <div className="flex flex-row items-center space-x-2">
                <FaBitcoin size={30} color="#ef9115" />{" "}
                <h2 className="font-medium text-2xl">
                  {strings.bitcoin_block.bitcoin}
                </h2>
                <h2
                  style={{
                    color: "#7c7a7a",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  {strings.bitcoin_block.bitcoin_code}
                </h2>
              </div>
              <div className="rounded-lg bg-slate-500 p-2 text-white">
                {strings.bitcoin_block.rank1}
              </div>
            </div>
            <div className="pt-7 pb-1 flex flex-row space-x-6 items-center">
              <h2 className="font-bold text-2xl">
                ${bitcoinData && bitcoinData.usd.toLocaleString()}
              </h2>
              <div className="flex flex-row items-center space-x-3">
                <div className="rate flex flex-row items-center text-green-600 rounded-sm space-x-1.5 px-2">
                  {" "}
                  <IoTriangleSharp size={9} />
                  <span className="text-sm">
                    {bitcoinData && bitcoinData.usd_24h_change.toFixed(2)}%
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  {strings.bitcoin_block.h24}
                </span>
              </div>
            </div>
            <h5 className="flex flex-row items-center text-sm font-medium">
              ₹{bitcoinData && bitcoinData.inr.toLocaleString()}
            </h5>
            <TradingViewWidget />
          </StyleBox>
          <Tabs />
          <Sentiments />
        </div>

        <div className="space-y-4">
          <div className="blue-block">
            <h2 className="title font-mono m-2">{strings.get_started.title}</h2>
            <p className="mx-4 my-2">{strings.get_started.desc}</p>
            <div className="flex flex-wrap space-y-3 justify-center my-3">
              <img
                src="./Images/Screenshot_8.png"
                alt=""
                style={{ height: "120px", width: "140px" }}
              />{" "}
              <button className="flex flex-row items-center justify-center space-x-2 bg-white text-black rounded-md p-2 font-medium px-6">
                <span>{strings.get_started.button}</span> <FaArrowRightLong />
              </button>
            </div>
          </div>
          <StyleBox>
            <div className="space-y-5">
              <h2 className="trending-coins font-bold font-sans">
                {strings.trending_coins}
              </h2>
              {trendingCoins &&
                trendingCoins.map((coin) => (
                  <div
                    className="flex flex-row items-center justify-between"
                    key={coin.item.id}
                  >
                    <div className="flex flex-row items-center space-x-2">
                      <img
                        src={coin.item.large}
                        alt={coin.item.name}
                        style={{
                          height: "30px",
                          width: "30px",
                          cursor: "pointer",
                        }}
                      />
                      <h2 className="font-medium">
                        {coin.item.name}({coin.item.symbol})
                      </h2>
                    </div>

                    <div className="rate flex flex-row items-center text-green-600 rounded-sm space-x-1.5 px-2">
                      {" "}
                      <IoTriangleSharp size={9} />
                      <span className="text-sm">
                        {coin.item.data.price_change_percentage_24h.aed.toFixed(
                          2
                        )}
                        %
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </StyleBox>
        </div>
      </div>
    </Root>
  );
};

export default Home;

const Root = styled.div`
  .container {
    display: grid;
    grid-template-columns: 68% 32%;
  }

  .blue-block {
    background-color: #0655f1;
    color: #fff;
    padding: 25px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    height: 420px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .blue-block h2 {
    font-size: 22px;
    text-align: center;
    font-weight: 600;
    font-family: sans-serif;
    width: 80%;
  }
  .blue-block p {
    font-size: 12px;
    text-align: center;
  }
  .rate {
    background-color: #dff5ee;
    height: 20px;
  }
  .tv-widget-chart--with-border {
    border: none !important;
  }
  .trending-coins {
    font-size: 22px;
  }
`;
