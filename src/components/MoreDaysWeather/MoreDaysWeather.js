import React from "react";

export default ({ daysList }) => {
    if(!daysList) {
        return (<div>nada</div>)
      }
     

    return (
        <div className="five-weather-box">
            <div className="days-weather-block">
                {daysList.map(list => { console.log(list)
                    return ( 
                        <div className="days-weather">
                        <p>5days</p>
                        </div>)
                    }
                    )
                }
            </div>
        </div>);
}
