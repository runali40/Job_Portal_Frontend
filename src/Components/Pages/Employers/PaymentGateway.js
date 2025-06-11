import React, { useState, useEffect } from 'react'
import { VerifyPayment } from '../../../Api/EmployerApi/PaymentGatewayApi'
import { useNavigate, useLocation } from 'react-router-dom'

const PaymentGateway = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const amount = location.state?.amount || 0;
    console.log(amount)
    // useEffect(() => {
    //     VerifyPaymentData()
    // }, [])

    const VerifyPaymentData = async () => {
        const data = await VerifyPayment(navigate);
        console.log(data)
    }
    return (
        <>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
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
            </div>
        </>
    )
}

export default PaymentGateway