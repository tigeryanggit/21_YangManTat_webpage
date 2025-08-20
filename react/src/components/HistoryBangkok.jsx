import React from 'react';
import historybangkok from "../assets/history/history-bangkok.jpg";

function HistoryBangkok() {
  return (
        <section className="container-history">

            <h2 className="title">曼谷</h2>

                <div className="card">
                    <img src={historybangkok} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">曼谷歷史</h5>
                        <p className="card-text">曼谷的歷史可以追溯到15世紀的阿瑜陀耶王國時期，最初是昭拍耶河口的小型貿易集鎮，之後成為吞武里王國和拉達那哥欣王國的都城。曼谷於19世紀後期成為暹羅近代化的中心，開始進行都市發展。而曼谷也在整個20世紀成為泰國政治鬥爭的中心，見證泰國大大小小的政變、示威和革命。1972年，曼谷被納入特別行政區，並在1960年代至1980年代迅速發展，對泰國的政治、經濟、教育、媒體和現代社會產生了重大影響。</p>

                        <p className="card-text">近年，由於曼谷的快速增長缺乏城市規劃，導致曼谷城市景觀雜亂無章，基礎設施不足。儘管高速公路網絡廣泛，但道路脈絡不足和大量私家車使用導致長期嚴重的交通擁堵，從而在1990年代造成嚴重的空氣污染。為了解決這個問題，該市已經轉向發展公共交通，營運了8條城市鐵路綫並建設其他公共交通路綫。由於氣候變遷，這座城市也面臨着海平面上升等長期環境威脅。</p>
                    </div>
                </div>       
        </section>
  )
}

export default HistoryBangkok