import React from 'react';
import historyseoul from "../assets/history/history-seoul.jpg";

function HistorySeoul() {
  return (
        <section className="container-history">

            <h2 className="title">首爾</h2>
            
                <div className="card">
                    <img src={historyseoul} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">首爾歷史</h5>
                        <p className="card-text">首爾的歷史悠久，可追溯至朝鮮三國時期，當時的百濟將慰禮城（今首爾一帶）定為首都，開啟了首爾作為首都或重要城市的地位。 經歷了高句麗、百濟、新羅的爭奪，統一新羅時期定名為漢陽。 高麗王朝時期曾被定為南京，最終在1394年，李成桂建立朝鮮王朝後，將漢陽正式定為首都，並改名為漢城，開啟了朝鮮王朝500年的歷史。</p>

                        <p className="card-text">日據時期，首爾被改名為京城府，並被納入京畿道。戰後，首爾進行了大規模的重建和發展，成為了韓國的政治、經濟和文化中心。</p>
                    </div>
                </div>       
        </section>
  )
}

export default HistorySeoul