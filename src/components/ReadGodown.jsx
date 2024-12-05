import React, { useEffect, useState } from 'react';
import './ReadGodown.css'; // Assuming you have a CSS file for styles

const ReadGodown = () => {
    const [godownData, setGodownData] = useState(null);
    const [currentDateTime, setCurrentDateTime] = useState('');

    // Fetch data from localStorage on component mount
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('godownData'));
        if (storedData) {
            setGodownData(storedData);
        } else {
            // Default data if localStorage is empty
            const defaultData = {
                godownName: 'G3',
                lotNumber: 2456,
                inwardDate: '12-04-2024',
                ginning: 'Vikasha',
                noOfBales: 50,
            };
            localStorage.setItem('godownData', JSON.stringify(defaultData));
            setGodownData(defaultData);
        }
    }, []);

    // Update current date and time every second
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setCurrentDateTime(now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));
        }, 1000);

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    // Show a loading state while data is being fetched
    if (!godownData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5">

            <div className="card">
                <label htmlFor="" style={{ fontSize: '10px', marginTop: 1, textAlign: 'center', fontWeight: 'bold' }}>Welcome To</label>
                <div className="card-body">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <h2 className="text-primary fw-bold" style={{ fontSize: '18px' }}>
                            SRI JAYAJOTHI AND COMPANY PRIVATE LIMITED
                        </h2>
                        <img src="/images/sjjmlogo.jpg" alt="" style={{ height: '60px', width: '60px' }} />
                    </div>
                    <h3 className="text-center text-primary fw-bold mt-2">GODOWN DETAILS</h3>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th className="text-center bg-primary text-white">LABEL</th>
                                <th className="text-center bg-primary text-white">VALUE</th>
                            </tr>
                        </thead>
                        <tbody className="fw-bold">
                            <tr>
                                <td>GODOWN NAME</td>
                                <td className="text-primary">{godownData.godownName}</td>
                            </tr>
                            <tr>
                                <td>LOT NO</td>
                                <td className="text-primary">{godownData.lotNumber}</td>
                            </tr>
                            <tr>
                                <td>INWARD DATE</td>
                                <td className="text-primary">{godownData.inwardDate}</td>
                            </tr>
                            <tr>
                                <td>GINNING</td>
                                <td className="text-primary">{godownData.ginning}</td>
                            </tr>
                            <tr>
                                <td>NO OF BALE</td>
                                <td className="text-primary">{godownData.noOfBales}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <label htmlFor="" style={{ fontSize: '10px', marginBottom: 3, textAlign: 'center', fontWeight: 'bold' }}>Thank You for Visit !</label>
            </div>
            <div className="text-center mt-3">

                <p className="text-primary" style={{ fontSize: '10px', marginBottom: 3, textAlign: 'center', fontWeight: 'bold' }}>{currentDateTime}</p>
            </div>

        </div>
    );
};

export default ReadGodown;
