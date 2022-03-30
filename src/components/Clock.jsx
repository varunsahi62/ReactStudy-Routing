import React, {useState} from "react";

export default function Clock(){

    // time
    let now = new Date().toLocaleTimeString();

    let [time, setTime] = useState(now);

    function getTime(){

        const timeNow = new Date().toLocaleTimeString();
        setTime(timeNow);
    
    }

    setInterval(getTime, 1000)

    // name
    let [name, setName] = useState();
    let [myName, setMyName] = useState();

    function getName(event){
        setName(event.target.value);
    }

    function handleSubmit(event){
        setMyName(name);

        event.preventDefault();
    }

    // mouse down
    const [isMouseDown, setMouseDown] = useState(false);

    function handleMouseDown(){
        setMouseDown(true);
    }

    function handleMouseUp(){
        setMouseDown(false);
    }

    return(
        <div className="clock-style">
            <h1 className="clock-heading-style"> Hello {myName}, it's {time}</h1>
            <form action="/" onSubmit={handleSubmit}>
                <input onChange={getName} type="text" placeholder="your name"/>
                <button 
                    type="submit"
                    style={{backgroundColor: isMouseDown? "rgba(0, 0, 0, 0.3)" : "transparent"}}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onKeyDown={handleMouseDown}
                    onKeyUp={handleMouseUp}
                >Set Name
                </button>
            </form>
        </div>
    );



}
