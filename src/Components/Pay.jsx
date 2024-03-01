import React from "react";
const Pay =({firstName,lastName,email,amount,public_key})=>{
    function generateTxRef(email) {
        let timestamp = new Date().getTime(); // Get current timestamp
        let random = Math.floor(Math.random() * 1000); // Generate random number
        
        let tx_ref = email + "_" + timestamp + "_" + random; // Combine all factors to create a unique tx_ref
    
        return tx_ref;
    }
    
    let txRef = generateTxRef();
return(
    <form method="POST" action="https://api.chapa.co/v1/hosted/pay" >
    <input type="hidden" name="public_key" value={`${public_key}`} />
    <input type="hidden" name="tx_ref" value={`${txRef}`} />
    <input type="hidden" name="amount" value={`${amount}`} />
    <input type="hidden" name="currency" value="ETB" />
    <input type="hidden" name="email" value={`${email}`} />
    <input type="hidden" name="first_name" value={`${firstName}`} />
    <input type="hidden" name="last_name" value={`${lastName}`} />
    <input type="hidden" name="title" value="Let us do this" />
    <input type="hidden" name="description" value="Paying with Confidence with cha" />
    <input type="hidden" name="logo" value="https://chapa.link/asset/images/chapa_swirl.svg" />
    <input type="hidden" name="callback_url" value="https://example.com/callbackurl" />
    <input type="hidden" name="return_url" value="https://example.com/returnurl" />
    <input type="hidden" name="meta[title]" value="test" />
    <button type="submit">Pay Now</button>
</form>
)
}
export default Pay;