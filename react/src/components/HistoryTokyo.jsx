import React from 'react';
import historytokyo from "../assets/history/history-tokyo.jpg";

function HistoryTokyo() {
  return (
        <section className="container-history">

                <div className="card">
                    <img src={historytokyo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">東京歷史</h5>
                        <p className="card-text">東京，原名江戶，是日本的首都，也是一個擁有豐富歷史的城市。 江戶時代，德川家康在此建立了江戶幕府，使江戶成為政治中心。 明治維新後，江戶改名為東京，並正式成為日本首都，取代了京都的地位。 東京在政治、經濟、文化和交通等方面都扮演著舉足輕重的角色，並持續發展至今。</p>

                        <p className="card-text">二戰後，東京經歷了快速的發展，成為全球重要的金融、商業和文化中心。東京的交通系統十分發達，尤其是地鐵系統，是世界上最繁忙的城市軌道交通之一。今日的東京，不僅是日本的首都，也是世界級的大都市，在政治、經濟、文化、科技等各方面都扮演著舉足輕重的角色。 </p>
                    </div>
                </div>       
        </section>
  )
}

export default HistoryTokyo