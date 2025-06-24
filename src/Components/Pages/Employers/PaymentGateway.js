import React, { useState, useEffect } from 'react'
import { VerifyPayment } from '../../../Api/EmployerApi/PaymentGatewayApi'
import { useNavigate, useLocation } from 'react-router-dom'
import "../../../assets/css/payment.css"


const PaymentGateway = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const amount = location.state?.amount || 0;
    console.log(amount)
    useEffect(() => {
        VerifyPaymentData()
    }, [])

    const VerifyPaymentData = async () => {
        const data = await VerifyPayment(navigate);
        console.log(data)
    }
    return (
        <>
            {/* <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Payment Gateway</h2>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Cardholder Name</label>
                        <input type="text" placeholder="John Doe" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Card Number</label>
                        <input type="text" placeholder="1234 5678 9012 3456" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <div className="flex gap-4 mb-4">
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Expiry Date</label>
                            <input type="text" placeholder="MM/YY" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">CVV</label>
                            <input type="password" placeholder="123" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </div>

                    <div className="mb-6">
                        <div className="flex justify-between items-center text-gray-700 font-medium">
                            <span>Total Amount</span>
                            <span className="text-lg font-semibold text-green-600">₹999</span>
                        </div>
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold transition duration-200">
                        Pay Now
                    </button>
                </div>
            </div> */}
            <div className="container paymentcontainer">

                <form action="#">

                    <div className="row">

                        <div className="col">
                            <h3 className="title">
                                Billing Address
                            </h3>

                            <div className="inputBox">
                                <label htmlFor="name" className='text-start'>
                                    Full Name:
                                </label>
                                <input type="text" id="name"
                                    placeholder="Enter your full name"
                                    required />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="email" className='text-start'>
                                    Email:
                                </label>
                                <input type="text" id="email"
                                    placeholder="Enter email address"
                                    required />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="address" className='text-start'>
                                    Address:
                                </label>
                                <input type="text" id="address"
                                    placeholder="Enter address"
                                    required />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="city" className='text-start'>
                                    City:
                                </label>
                                <input type="text" id="city"
                                    placeholder="Enter city"
                                    required />
                            </div>

                            <div className="flex">

                                <div className="inputBox">
                                    <label htmlFor="state" className='text-start'>
                                        State:
                                    </label>
                                    <input type="text" id="state"
                                        placeholder="Enter state"
                                        required />
                                </div>

                                <div className="inputBox">
                                    <label htmlFor="zip" className='text-start'>
                                        Zip Code:
                                    </label>
                                    <input type="number" id="zip"
                                        placeholder="123 456"
                                        required />
                                </div>

                            </div>

                        </div>
                        <div className="col">
                            <h3 className="title">Payment</h3>

                            <div className="inputBox">
                                <label htmlFor="name" className='text-start'>
                                    Card Accepted:
                                </label>
                                <img src=
                                    "https://media.geeksforgeeks.org/wp-content/uploads/20240715140014/Online-Payment-Project.webp"
                                    alt="" className='text-start' />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="cardName" className='text-start'>
                                    Name On Card:
                                </label>
                                <input type="text" id="cardName"
                                    placeholder="Enter card name"
                                    required />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="cardNum" className='text-start'>
                                    Credit Card Number:
                                </label>
                                <input type="text" id="cardNum"
                                    placeholder="1111-2222-3333-4444"
                                    maxlength="19" required />
                            </div>

                            <div className="inputBox">
                                <label htmlFor="" className='text-start'>Exp Month:</label>
                                <select name="" id="">
                                    <option value="">Choose month</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                            </div>


                            <div className="flex">
                                <div className="inputBox">
                                    <label htmlFor="" className='text-start'>Exp Year:</label>
                                    <select name="" id="">
                                        <option value="">Choose Year</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2026">2026</option>
                                        <option value="2027">2027</option>
                                    </select>
                                </div>

                                <div className="inputBox">
                                    <label htmlFor="cvv" className='text-start'>CVV</label>
                                    <input type="number" id="cvv"
                                        placeholder="1234" required />
                                </div>
                            </div>

                        </div>

                    </div>

                    <input type="submit" value="Proceed to Checkout"
                        className="submit_btn" />
                </form>

            </div>
        </>
    )
}

export default PaymentGateway