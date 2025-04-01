
function VPN(){

    return (<>
    

        <h1 className="mainText">Degenerate VPN is a simplistic VPN service that
            allows users to access websites only available outside of the United States
            - websites that IP ban the states. This is achieved by first launching an AWS EC2 
            server running proxy software through a lambda function when the user hits start. When the user hits connect,
            the paired chrome extension sets the AWS server as the browser's proxy thus routing 
            all chrome traffic through the proxy server. It is named Degenerate VPN because it makes
            accessing foreign sports gambling, online casino, and crypto websites easily accessible within the U.S.
                
            
        </h1>
        
        
    
    
        <h2 className="checkout">
        Check out the site at <a 
            href="https://DegenerateVPN.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: 'blue', textDecoration: 'underline' }}
        >
            DegenerateVPN.com
        </a>
        </h2>


        <h2 className="subtit">or check out the code</h2>
        <div className="github-button" onClick={() => window.open('https://github.com/JudeScarbrough/VPN', '_blank')}>
            <h1>VPN</h1>
            <img src="github.png"></img>
        </div>
    
    
        </>)

}



export default VPN;