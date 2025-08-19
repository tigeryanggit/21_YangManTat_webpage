import React from 'react'
import tokyo1 from '../assets/sight/Tokyo/tokyo_ss_1.png';
import tokyo2 from '../assets/sight/Tokyo/tokyo_ss_2.png';
import tokyo3 from '../assets/sight/Tokyo/tokyo_ss_3.png';


function SightTokyo() {
  return (
        <section class="container-sight">


                <h2 class="title">新手必到精選景點 - 東京</h2>        

                <div class="card sight">
                    <img src={tokyo1} class="card-img-top" alt="..."/>
                    <div class="card-body card-body-sight">
                        <h2>淺草寺</h2>
                        <p class="card-text">東京最古老的寺廟，入口的「雷門」大燈籠是必拍地標。參拜後可逛「仲見世通」商店街，買人形燒、和風小物。從地鐵淺草站步行即達，周邊有和服租借體驗。</p>
                    </div>
                </div>

                <div class="card sight">
                    <img src={tokyo2} class="card-img-top" alt="..."/>
                    <div class="card-body card-body-sight">
                        <h2>晴空塔</h2>
                        <p class="card-text">世界第二高塔，634公尺高，360度俯瞰東京全景。晴空塔商場「Solamachi」還有寶可夢專賣店、傳統工藝品店。地鐵線押上站直達，建議提前購票避開排隊。</p>
                    </div>
                </div>

                <div class="card sight">
                    <img src={tokyo3} class="card-img-top" alt="..."/>
                    <div class="card-body card-body-sight">
                        <h2>明治神宮</h2>
                        <p class="card-text">隱藏在澀谷區的森林神社，感受都市中的寧靜。幸運的話能看到傳統日式婚禮，入口的巨型鳥居很壯觀。從原宿站步行5分鐘即到，免費參拜，適合清晨或午後散步。</p>
                    </div>
                </div>
        </section>
  )
}

export default SightTokyo