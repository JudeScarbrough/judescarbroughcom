
function HB(){

    return (<>
    
    
    
        <h1 className="mainText">
            
        I built a handbrake to accompany my PC car racing simulator rig. When you pull the lever
        it locks up your vehicle's wheels in game to initiate a drift. The lever has resistance from
        a compression spring and the lever movement is measured through a linear potentiometer. The
        potentiometer is connected to an Arduino Pro Micro which connects to my pc and acts as  
        a game controller with the code I wrote for it.
                
        </h1>

        <div style={{height: 20}}></div>

        

        <h1 className="subtit">Here is a side view of the inner mechanism where you can see the
            potentiometer in the middle at an angle getting moved as the lever moves. You can also
            see how a spring would be compressed in the middle to resist the lever.
        </h1>

        <div className="trips">
            <img src="side1.png"></img>
            <img src="side2.png"></img>
            <img src="side3.png"></img>
        </div>

        <h1 className="subtit">Below are three more frames from another angle.
        </h1>

        <div className="trips">
            <img src="top1.png"></img>
            <img src="top2.png"></img>
            <img src="top3.png"></img>
        </div>

        <h1 className="subtit">
            Below is what the final working build looks like.
        </h1>
        

        <div className="finalcont">
        <img className="finalhb" src="final.png"></img>
        </div>
        
        </>)

}



export default HB;