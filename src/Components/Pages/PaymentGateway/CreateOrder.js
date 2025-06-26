import React, { useState } from 'react'
import "../../../assets/css/createOrder.css"
import { CreateOrderApi } from '../../../Api/EmployerApi/PaymentGatewayApi'
import { useLocation, useNavigate } from 'react-router-dom';
import { apiClient } from '../../../ApiClient';
const CreateOrder = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [amount, setAmount] = useState((location.state?.amount || 0).toString());
    // const amount = location.state?.amount || 0;
    console.log(amount, "amount")

    const getWidthFromLength = (str) => {
        const baseWidth = 25;
        const charWidth = 24; // Approximate width per character for this font size
        // Convert to string if it's a number, and ensure we have a valid string
        const stringValue = String(str || '0');
        return Math.max(baseWidth, stringValue.length * charWidth);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        // Optional: Add validation for numbers only
        if (value === '' || /^\d*\.?\d*$/.test(value)) {
            setAmount(value);
        }
    };
    const CreateOrderData = async () => {
        const data = await CreateOrderApi(amount, navigate)
        console.log(data)
        handlePayment()
        // navigate('/paymentGateway', { state: { amount } });
    }
    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handlePayment = async () => {
        const orderId = sessionStorage.getItem("orderid")
        const isLoaded = await loadRazorpayScript();

        if (!isLoaded) {
            alert("Razorpay SDK failed to load. Check your internet.");
            return;
        }

        const options = {
            // key: "rzp_test_gL5huWXM1ghnNM",
            key: "rzp_test_ncMT4AiPgvLhNh",
            amount: 1, // in paise (₹1000)
            currency: "INR",
            name: "DEVENDRA IT INFRASOFT SECURITY PRIVATE LIMITED",
            description: "Plan Purchase",
            order_id: orderId,
            handler: async function (response) {
                console.log(response, "response")
                const verifyPayload = {
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_signature: response.razorpay_signature
                };

                // Call verify API
                try {
                    const url = 'Payments/verify';
                    const verifyRes = await apiClient.post(url, verifyPayload);
                    console.log(verifyRes)
                    alert("Payment successful and verified!");
                } catch (err) {
                    alert("Payment succeeded but verification failed.");
                }
            },
            // prefill: {
            //     name: "Runali Kadam",
            //     email: "runali.devit@gmail.com",
            //     contact: "9075372928"
            // },
            prefill: {
                name: "",
                email: "",
                contact: ""
            },
            theme: { color: "#3399cc" }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <>
            <div id="app-container">
                <div className="bg-svg"></div>
                <div className="CreateOrdercontainer">
                    <div className="card">
                        <div className="merchant--name">D</div>
                        <div className="card--title">Paying</div>
                        <div className="card--merchant-name">DEVENDRA IT INFRASOFT SECURITY PRIVATE LIMITED</div>
                        <div className="card--slug">razorpay.me/@devendraitinfrasoftsecuritypr</div>
                        <div className="card--amount "><span className="currency">₹</span>
                            {/* <input type="number" inputMode="decimal" className="card--dynamic-input" placeholder="0" value={amount} onChange={()=>{}} disabled="" style={{ width: "25px", maxLength: "4" }} /> */}
                            <input
                                type="number"
                                inputMode="decimal"
                                placeholder="0"
                                value={amount}
                                onChange={handleChange}  // Add proper onChange handler
                                disabled
                                style={{
                                    fontWeight: 700,
                                    fontSize: '24px',
                                    color: '#162f56',
                                    border: 'none',
                                    outline: 'none',
                                    backgroundColor: 'transparent',
                                    width: `${getWidthFromLength(amount)}px`,
                                    minWidth: '25px'
                                }} />
                        </div>
                        <textarea placeholder="Add a note" maxLength="100" className='text-center'></textarea>
                        <input className="card--pay-btn" type="button" value={`Pay ₹${amount}`} disabled="" onClick={CreateOrderData} />
                    </div>
                    <div className="PageFooter "
                    ><div className="details-footer-top details-footer-top--center">
                            <img id="rzp-logo" alt="rzp-logo" src="https://cdn.razorpay.com/logo.svg" width="98" height="21" />
                        </div> <div className="details-footer-bottom">Want to accept online payments for your business?
                            <br /> Visit
                            <a href="https://www.razorpay.com" target="_blank" rel="noopener noreferrer">razorpay.com</a>
                            to get started!
                        </div>
                        <img className="fin-logo" height="16px" width="281px"
                            src="https://cdn.razorpay.com/static/assets/pay_methods_branding.png"
                            alt="payment-methods" />
                        <div className="details-footer-links">
                            <div className="report-message">
                                <a href="https://razorpay.com/support/payments/report-merchant/?e=cGxfUWwzSGFZdk1qTjRPcEg=&amp;s=aG9zdGVk" target="_blank" rel="noopener">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3 0.5C2.35404 0.5 1.84435 0.589692 1.46165 0.7108C1.09364 0.827257 0.809027 0.983866 0.646447 1.14645C0.552678 1.24021 0.5 1.36739 0.5 1.5V11C0.5 11.2761 0.723858 11.5 1 11.5C1.27614 11.5 1.5 11.2761 1.5 11V7.76687C1.5669 7.73449 1.65416 7.69875 1.76335 7.6642C2.03899 7.57698 2.44596 7.5 3 7.5C3.64035 7.5 4.18026 7.71062 4.8143 7.96424L4.84216 7.97538C5.44654 8.21721 6.14152 8.4953 6.97874 8.49994C7.33253 8.52617 7.78761 8.42323 8.15649 8.31865C8.55707 8.20509 8.94785 8.06172 9.18958 7.96267C9.37735 7.88572 9.5 7.70292 9.5 7.5V1.5C9.5 1.3078 9.38983 1.13261 9.21659 1.04935C9.04336 0.966088 8.83774 0.989498 8.68765 1.10957C8.53266 1.23356 8.25354 1.33939 7.90194 1.40971C7.56429 1.47724 7.22268 1.5 7 1.5C6.35965 1.5 5.81974 1.28938 5.1857 1.03576L5.15784 1.02462C4.54835 0.780742 3.84672 0.5 3 0.5Z" fill="white" fillOpacity="0.87">
                                        </path>
                                    </svg>
                                    <span>Report Page</span>
                                </a>
                            </div>
                            <a className="business-policy" href="https://merchant.razorpay.com/policy/QdPOO3wDClPWlV" target="_blank">Merchant’s business policies
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 0.5C2.22386 0.5 2 0.723858 2 1C2 1.27614 2.22386 1.5 2.5 1.5H5.79289L0.646447 6.64645C0.451184 6.84171 0.451184 7.15829 0.646447 7.35355C0.841709 7.54882 1.15829 7.54882 1.35355 7.35355L6.5 2.20711V5.5C6.5 5.77614 6.72386 6 7 6C7.27614 6 7.5 5.77614 7.5 5.5V1C7.5 0.723858 7.27614 0.5 7 0.5H2.5Z" fill="#528ff0">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CreateOrder