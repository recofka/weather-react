import React from "react";

export default ({ daysList }) => {
    if(!daysList) {
        return (<div></div>)
      }
     

    return (
        <div className="five-weather-box">
            <div>
                {daysList.map(list => {
                    return ( console.log(list),
                        <p>5days</p>)
                    }
                    )
                }
            </div>
        </div>);
}
