import React from 'react';
import Navbar from './Navbar';
import HistoryLondon from './HistoryLondon';
import WeatherLondon from './WeatherLondon'; 
import SightLondon from './SightLondon';
import Footer from './Footer';
import { Nav } from 'react-bootstrap';



function PageLondon() {
  return (
        

    <div className="london">

        {/* <Navbar /> */}
        <HistoryLondon />
        <WeatherLondon />
        <SightLondon />
        <Footer />


        {/* <section className="container-weather">
                    <div className="weather">
                        <h2>東京天氣</h2>
                        <br/>
                            <p>春季（3月至5月）： 氣溫適中，是賞櫻的好時節。 3月氣溫逐漸回升，但早晚仍有涼意，建議穿著薄外套或針織衫。 4月櫻花盛開，氣溫更為舒適，可以穿著輕便的春裝，但仍需留意日夜溫差。 5月氣溫約在15-23°C，適合賞花和戶外活動。</p>
                            <br/>
                            <p>夏季（6月至8月）： 炎熱潮濕，尤其7月和8月，氣溫常常超過30°C，濕度也高。 6月是梅雨季節，降雨頻繁，建議攜帶雨具和防曬用品。 夏季適合參加各種節慶活動，如煙火大會，但要注意防暑降溫。</p>
                            <br/>
                            <p>秋季（9月至11月）： 涼爽舒適，是賞楓的絕佳時機。 9月初仍有夏末餘溫，但10月和11月氣溫逐漸下降，早晚溫差大。 建議穿著多層次穿搭，如薄針織衫、襯衫、輕薄外套等。 11月開始，夜晚會比較寒冷，需要做好保暖措施。 </p> 
                            <br/>
                            <p>冬季（12月至2月）： 乾燥寒冷，但降雪較少。 12月和1月氣溫較低，需要穿著厚外套、毛帽、手套等保暖衣物。 冬季也是泡溫泉和滑雪的好時節。</p>
                    </div>

        </section> */}

        {/* <section className="container-sight">


                <h2 className="title">新手必到精選景點 - 東京</h2>        

                <div className="card sight">
                    <img src={tokyo1} className="card-img-top" alt="..."/>
                    <div className="card-body card-body-sight">
                        <h2>淺草寺</h2>
                        <p className="card-text">東京最古老的寺廟，入口的「雷門」大燈籠是必拍地標。參拜後可逛「仲見世通」商店街，買人形燒、和風小物。從地鐵淺草站步行即達，周邊有和服租借體驗。</p>
                    </div>
                </div>

                <div className="card sight">
                    <img src={tokyo2} className="card-img-top" alt="..."/>
                    <div className="card-body card-body-sight">
                        <h2>晴空塔</h2>
                        <p className="card-text">世界第二高塔，634公尺高，360度俯瞰東京全景。晴空塔商場「Solamachi」還有寶可夢專賣店、傳統工藝品店。地鐵線押上站直達，建議提前購票避開排隊。</p>
                    </div>
                </div>

                <div className="card sight">
                    <img src={tokyo3} className="card-img-top" alt="..."/>
                    <div className="card-body card-body-sight">
                        <h2>明治神宮</h2>
                        <p className="card-text">隱藏在澀谷區的森林神社，感受都市中的寧靜。幸運的話能看到傳統日式婚禮，入口的巨型鳥居很壯觀。從原宿站步行5分鐘即到，免費參拜，適合清晨或午後散步。</p>
                    </div>
                </div>
        </section> */}

        <section className="gallery">

            {/* <Carousel>
            <Carousel.Item>
                <ExampleCarouselImage text="First slide" />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage text="Second slide" />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage text="Third slide" />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>  */}
        </section>    



    </div>       

  )
}

export default PageLondon