import React from 'react';
import historylondon from "../assets/history/history-london.jpg";

function HistoryLondon() {
  return (
        <section className="container-history">

            <h2 className="title">倫敦</h2>
            
                <div className="card">
                    <img src={historylondon} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">倫敦歷史</h5>
                        <p className="card-text">倫敦的歷史悠久且豐富，可以追溯到羅馬時代。 在西元一世紀，羅馬人建立了一個名為倫蒂尼恩的定居點，並在約190-225年間修建了倫敦城牆。 儘管在羅馬統治結束後，倫敦一度衰落，但後來在盎格魯-撒克遜時期得到重建，並在維京時期也受到影響。</p>

                        <p className="card-text">倫敦是英國首都，也是英國最大城市以及其構成國英格蘭的首府，總人口約8,866,180人。位於泰晤士河流域，於公元50年由羅馬人建立，當名為「倫蒂尼恩」，在此後兩個世紀內為這一地區最重要的定居點之一。倫敦的歷史核心區——倫敦市一直維持其中世紀的界限，面積606.95平方哩（1,572.0平方公里）；自19世紀起，「倫敦」一稱亦用於指稱圍繞這一核心區發展的周圍地帶。這一城區集合自1965年起構成大倫敦行政區，由32個倫敦自治市鎮加上倫敦市組成，由倫敦市長（大倫敦市長）及倫敦議會管轄[注 1]，為英格蘭的大區之一；其中僅有倫敦市、西敏市等2個市鎮擁有法定的城市地位。</p>
                    </div>
                </div>       
        </section>
  )
}

export default HistoryLondon