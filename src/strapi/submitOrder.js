import axios from "axios";
import url from "./URL";

async function submitOrder({ name, total, items, stripeTokenId, userToken }) {
// code goes here
const response = await axios
.post(
    `${url}/orders`,
{
    name, 
    total,
    items,
    stripeTokenId
},
{
    headers: {
        Authorization: `Bearer ${userToken}`  
        }
    }
)
    .catch(error => console.log(error));
    return response;
}

export default submitOrder;