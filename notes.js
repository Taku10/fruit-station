//1. Create a file in Api folder called stripe.js
//2. Create params varaible and copy and paste params;
//3. Add theses following params in params object;
                // submit_type: 'pay',
                // mode: 'payment',
                // payment_method_types:['card'],
                // billing_address_collection: 'auto',
                // shipping_option:[
                //     {shipping_rate:'shr_1LtBVyBH9x0HU15TyT5wpJgO'},
                //     {shipping_rate:'shr_1LtBXdBH9x0HU15TLoYwk3xT'},
                // ],

import getStripe from "./lib/getStripe"

//4. Create file in lib called getStripe.js and import to Cart
                // import {loadStripe} from '@stripe/stripe-js';

                // let stripePromise;

                // const getStripe =()=>{
                //     if(!stripePromise){
                //         stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
                //     }

                //     return stripePromise
                // }

                // export default getStripe;
                
//5. Declare function called handleCheckout;
        const handleCheckout = async()=>{
            const stripe = await getStripe();
            
            const response = await fetch('/api/stripe'); //make api request
        }