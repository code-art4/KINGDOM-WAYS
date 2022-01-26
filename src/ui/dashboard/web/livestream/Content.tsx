import React, { useEffect, useState } from "react";
import LiveStreamItem from "../../../../components/livestream-item";
import { loadLiveStreamWeb } from "../../../../controller/livestream.controller";
import { LiveStreamDTO } from "../../../../dto/LiveStream.dto";
import { getParam } from "../../../../utils";

export default function LiveStreamContent() {
  
  const liveStreamItems: LiveStreamDTO[] = [];
  
  const [item, setItem] = useState(new LiveStreamDTO());
  const [items, setItems] = useState([]);
    
  useEffect(() => {
        const id = getParam("id");
        if (!id) {
          // window.location.href = "/web/";
        }else {}
        loadLiveStreamWeb(setItems, setItem);
    },[]);
    
    return (
        <>
          <div className="livStream">
            <div className="row">
              <div className="column left">
                <h3>Live</h3>
                <video width="100%" height="auto" controls>
                  <source src={item.liveStreamUrl} type="video/mp4" />
                </video>
                {/* main */}
                <div className="lieViews">
                    <div className="text">Live</div>
                    <i className="fas fa-eye"></i>
                    <div className="amount">{item.views}k</div>
                </div>
                <div className="aboutService">
                  <h4>{item.title}</h4>
                  <p>
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="column right">
                <h3>Previous sundays</h3>
                <div className="previousSundays">
                  {
                    items.length > 0 ? items.map((x, index) => {
                      return (
                        <LiveStreamItem 
                            key={index}  
                            datetime={x.dateOfStream} 
                            id={x.id}
                            preacher={x.preacher}
                            title={x.title}
                            videoUrl={x.liveStreamUrl}
                            views={x.views}
                          />
                        );
                      })
                    : undefined
                  }
                </div>
                <div className="share" style={{marginTop: "3rem"}}>
                  <div className="text">Share this on all social media page</div>
                  <button className="button">Share</button>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}
