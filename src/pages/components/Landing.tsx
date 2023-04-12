import React from 'react'
import localStorage from "localStorage"
import dynamic from 'next/dynamic';
import {FaBitcoin} from "react-icons/fa"
import {SiDogecoin} from "react-icons/si"
import Chart1 from "../../Assets/chart-1.svg"
import Chart2 from "../../Assets/chart-2.svg"
import Image from 'next/image';

const Header = dynamic(() => import('./Header'), {
    loading: () => <p className='text-center'>Loading...</p>,ssr:false,
  });

function Landing() {
   
  return (
    <div>
<Header />
      
<div className=" max-h-max ">
    <div className="flex-1 flex flex-col py-16 px-4 sm:py-20 sm:px-4 justify-center lg:flex-none lg:px-20 xl:px-24">
      <div className="mx-auto w-full  text-white px-10 py-16 rounded-xl ">

      <section className="section w-full" aria-label="hero" data-section>
        <div className="flex gap-20">

          <div className="hero-content md:mt-20">

            <h1 className=" text-4xl font-bold">Secure your cryptocurrency transactions with <br/> Zkryptoscan's advanced web3 wallet</h1>

            <p className="text-lg mt-3  ">
            Powering secure and efficient analysis of cryptocurrency transactions across multi-chain networks
            </p>

            <button className="px-6 rounded-xl  text-black text-lg bg-yellow-400 py-3 mt-5 font-bold">Get started</button>

          </div>

          <figure className="overflow-hidden">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEil7dFhzaiaIDO9YQ2djH7Gbuavo4ZPZg7msWPfUEdc5s6a_57x2eT2rZWxDIOGOvLjklNVFxBzb8uBIjlanAfUqnEdyknQV93hBDdjtvVVdlalWlVeSZf44PaWHjiTzYq1ydaN6z723kN1y1igCN1jL-iGYgD5pxADWn2Ll34X9HteMXvJmZqcjHeX/w444-h293/multichain-removebg-preview.png"  alt="hero banner" className=" w-[1050px] h-[450px] inline-block animate-pulse-once  " />
          </figure>

        </div>
      </section>
     
      </div>
      
    </div>
  
  </div>
  <section className="section market px-10 " aria-label="market update" data-section>
        <div className="container text-white px-20">

        <div className="title-wrapper">
            <h2 className="text-3xl mt-5 font-bold">Market Update</h2>

            <button className="bg-yellow-400 text-black font-bold text-md px-4 rounded-lg py-2">See All Coins</button>
          </div>

          <div className="market-tab">

            <ul className="tab-nav">

              <li>
                <button className="bg-blue-700 px-4 rounded-lg py-2">View All</button>
              </li>

              <li>
                <button className="tab-btn">Metaverse</button>
              </li>

              <li>
                <button className="tab-btn">Entertainment</button>
              </li>

              <li>
                <button className="tab-btn">Energy</button>
              </li>

              <li>
                <button className="tab-btn">NFT</button>
              </li>

              <li>
                <button className="tab-btn">Gaming</button>
              </li>

              <li>
                <button className="tab-btn">Music</button>
              </li>

            </ul>
<hr className='h-2' />
            <table className="market-table">

            <thead className="table-head">

<tr className="table-row table-title">

  <th className="table-heading"></th>

  <th className="table-heading" scope="col">#</th>

  <th className="table-heading" scope="col">Name</th>

  <th className="table-heading" scope="col">Last Price</th>

  <th className="table-heading" scope="col">24h %</th>

  <th className="table-heading" scope="col">Market Cap</th>

  <th className="table-heading" scope="col">Last 7 Days</th>

  <th className="table-heading"></th>

</tr>

</thead>

<tbody className="table-body">

<tr className="table-row">

  <td className="table-data">
    {/* <button className="add-to-fav" aria-label="Add to favourite" data-add-to-fav>
      <ion-icon name="star-outline" aria-hidden="true" className="icon-outline"></ion-icon>
      <ion-icon name="star" aria-hidden="true" className="icon-fill"></ion-icon>
    </button> */}
  </td>

  <th className="table-data rank" scope="row">1</th>

  <td className="table-data">
    <div className="wrapper">
      <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" className='w-5 h-5' />
      <h3>
        <a href="#" className="coin-name">Bitcoin <span className="span">BTC</span></a>
      </h3>
    </div>
  </td>

  <td className="table-data last-price">$29,897.44</td>

  <td className="table-data last-update green">-0.43%</td>

  <td className="table-data market-cap">$578,507,119,320</td>

  <td className="table-data">
  <Image src={Chart2} alt="" />
  </td>

  <td className="table-data">
    <button className="btn btn-outline">View</button>
  </td>

</tr>
<tr className="table-row">

  <td className="table-data">
    {/* <button className="add-to-fav" aria-label="Add to favourite" data-add-to-fav>
      <ion-icon name="star-outline" aria-hidden="true" className="icon-outline"></ion-icon>
      <ion-icon name="star" aria-hidden="true" className="icon-fill"></ion-icon>
    </button> */}
  </td>

  <th className="table-data rank" scope="row">2</th>

  <td className="table-data">
    <div className="wrapper">
      <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/328.png" className="w-5 h-5" />
      <h3>
        <a href="#" className="coin-name">Monera <span className="span">XMR</span></a>
      </h3>
    </div>
  </td>

  <td className="table-data last-price">$160.69</td>

  <td className="table-data last-update green">+0.40%</td>

  <td className="table-data market-cap">$2,934,736,583</td>

  <td className="table-data">
  <Image src={Chart1} alt="" />
  </td>

  <td className="table-data">
    <button className="btn btn-outline">View</button>
  </td>

</tr>
<tr className="table-row">

  <td className="table-data">
    {/* <button className="add-to-fav" aria-label="Add to favourite" data-add-to-fav>
      <ion-icon name="star-outline" aria-hidden="true" className="icon-outline"></ion-icon>
      <ion-icon name="star" aria-hidden="true" className="icon-fill"></ion-icon>
    </button> */}
  </td>

  <th className="table-data rank" scope="row">3</th>

  <td className="table-data">
    <div className="wrapper">
      <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/74.png" className='w-5 h-5' />
      <h3>
        <a href="#" className="coin-name">Dogecoin <span className="span">DOGE</span></a>
      </h3>
    </div>
  </td>

  <td className="table-data last-price">$0.08171</td>

  <td className="table-data last-update green">-3.50%</td>

  <td className="table-data market-cap">$11,349,498,231</td>

  <td className="table-data">
    <Image src={Chart2} alt="" />
  </td>

  <td className="table-data">
    <button className="btn btn-outline">View</button>
  </td>

</tr>
<tr className="table-row">

  <td className="table-data">
    {/* <button className="add-to-fav" aria-label="Add to favourite" data-add-to-fav>
      <ion-icon name="star-outline" aria-hidden="true" className="icon-outline"></ion-icon>
      <ion-icon name="star" aria-hidden="true" className="icon-fill"></ion-icon>
    </button> */}
  </td>

  <th className="table-data rank" scope="row">4</th>

  <td className="table-data">
    <div className="wrapper">
      <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/131.png" className="w-5 h-5" />
      <h3>
        <a href="#" className="coin-name">Dash <span className="span">DASH</span></a>
      </h3>
    </div>
  </td>

  <td className="table-data last-price">$55.21</td>

  <td className="table-data last-update green">-4.71%</td>

  <td className="table-data market-cap">$620,015,677</td>

  <td className="table-data">
  <Image src={Chart2} alt="" />
  </td>

  <td className="table-data">
    <button className="btn btn-outline">View</button>
  </td>

</tr>
<tr className="table-row">

  <td className="table-data">
    {/* <button className="add-to-fav" aria-label="Add to favourite" data-add-to-fav>
      <ion-icon name="star-outline" aria-hidden="true" className="icon-outline"></ion-icon>
      <ion-icon name="star" aria-hidden="true" className="icon-fill"></ion-icon>
    </button> */}
  </td>

  <th className="table-data rank" scope="row">5</th>

  <td className="table-data">
    <div className="wrapper">
      <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png" className="w-5 h-5" alt="" />
      <h3>
        <a href="#" className="coin-name">Tether <span className="span">USDT</span></a>
      </h3>
    </div>
  </td>

  <td className="table-data last-price">$1.00</td>

  <td className="table-data last-update green">+0.01%</td>

  <td className="table-data market-cap">$80,493,776,651</td>

  <td className="table-data">
  <Image src={Chart1} alt="" /> </td>

  <td className="table-data">
    <button className="btn btn-outline">View</button>
  </td>

</tr>
<tr className="table-row">

  <td className="table-data">
    {/* <button className="add-to-fav" aria-label="Add to favourite" data-add-to-fav>
      <ion-icon name="star-outline" aria-hidden="true" className="icon-outline"></ion-icon>
      <ion-icon name="star" aria-hidden="true" className="icon-fill"></ion-icon>
    </button> */}
  </td>

  <th className="table-data rank" scope="row">6</th>

  <td className="table-data">
    <div className="wrapper">
      <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" className="w-5 h-5" />
      <h3>
        <a href="#" className="coin-name">Ethereum <span className="span">Eth</span></a>
      </h3>
    </div>
  </td>

  <td className="table-data last-price">$1,865.25</td>

  <td className="table-data last-update green">-2.85%</td>

  <td className="table-data market-cap">$224,775,916,250</td>

  <td className="table-data">
  <Image src={Chart2} alt="" />
  </td>

  <td className="table-data">
    <button className="btn btn-outline">View</button>
  </td>

</tr>
<tr className="table-row">

  <td className="table-data">
    {/* <button className="add-to-fav" aria-label="Add to favourite" data-add-to-fav>
      <ion-icon name="star-outline" aria-hidden="true" className="icon-outline"></ion-icon>
      <ion-icon name="star" aria-hidden="true" className="icon-fill"></ion-icon>
    </button> */}
  </td>

  <th className="table-data rank" scope="row">7</th>

  <td className="table-data">
    <div className="wrapper">
      <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png" className="w-5 h-5" />
      <h3>
        <a href="#" className="coin-name">Palkadot <span className="span">DOT</span></a>
      </h3>
    </div>
  </td>

  <td className="table-data last-price">$6.28</td>

  <td className="table-data last-update green">-1.67%</td>

  <td className="table-data market-cap">$7,377,818,680
</td>

  <td className="table-data">
  <Image src={Chart2} alt="" />
  </td>

  <td className="table-data">
    <button className="btn btn-outline">View</button>
  </td>

</tr>
</tbody>

            </table>

          </div>

        </div>
      </section>
      <section className="section instruction px-20 py-20 mb-24" aria-label="instruction" data-section>
        <div className="container text-white">

          <h2 className="text-3xl font-bold section-title">How It Work</h2>

          <p className="section-text">
            Stacks is a production-ready library of stackable content blocks built in React Native.
          </p>

          <ul className="instruction-list">

            <li>
              <div className="instruction-card">

                <figure className="card-banner">
                  <img src="https://www.sketchappsources.com/resources/source-image/metamask-fox-logo.png" width="96" height="96" loading="lazy" alt="Step 1"
                    className="img" />
                </figure>

                <p className="card-subtitle">Step 1</p>

                <h3 className="h3 card-title">Connect Wallet</h3>

                <p className="card-text">
                  Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React.
                </p>

              </div>
            </li>

            <li>
              <div className="instruction-card">

                <figure className="card-banner">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS9MOMlLB69qR7qsXu47Q7tvMD10fhb56v7w&usqp=CAU" width="96" height="96" loading="lazy" alt="Step 2"
                    className="img" />
                </figure>

                <p className="card-subtitle">Step 2</p>

                <h3 className="text-md font-bold card-title">Track transaction and addresses</h3>

                <p className="card-text">
                  Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React.
                </p>

              </div>
            </li>

            <li>
              <div className="instruction-card">

                <figure className="card-banner">
                  <img src="https://www.visualcapitalist.com/wp-content/uploads/2021/09/shareable-2-1000x600.jpg" width="96" height="96" loading="lazy" alt="Step 3"
                    className="img"  />
                </figure>

                <p className="card-subtitle">Step 3</p>

                <h3 className="text-md font-bold card-title">Visualize Transaction</h3>

                <p className="card-text">
                  Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React.
                </p>

              </div>
            </li>

            <li>
              <div className="instruction-card">

                <figure className="card-banner">
                  <img src="./assets/images/instruction-4.png" width="96" height="96" loading="lazy" alt="Step 4"
                    className="img" />
                </figure>

                <p className="card-subtitle">Step 4</p>

                <h3 className="text-md font-bold card-title"> Identify patterns</h3>

                <p className="card-text">
                  Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React.
                </p>

              </div>
            </li>

          </ul>

        </div>
      </section>
  <div className="fixed bottom-5 left-1/2 -translate-x-1/2 -z-10">
				<h3 className="text-xl text-white  text-opacity-70 w-full whitespace-nowrap">
					Made with 💙  by ZKryptoScan
				</h3>
			</div>
    </div>
  )
}

export default Landing