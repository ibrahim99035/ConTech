import React from 'react'; 
import './Styles/CardStyles.css';

import { useNavigate } from 'react-router-dom';

import { MdSystemSecurityUpdateGood } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
import { TbSettingsAutomation } from "react-icons/tb";
import { GoDeviceCameraVideo } from "react-icons/go";

const CardComponent = () => {
    const navigate = useNavigate();

    const cardData = [
        { 
            id: 1, 
            title: 'Real-Time Device Monitoring', 
            content: 'View real-time data from all connected IoT devices, such as sensors, cameras, thermostats, and more.',
            icon: <GoDeviceCameraVideo />,
            link: '#constructions'
        },
        { 
            id: 2, 
            title: 'Remote Control and Automation', 
            content: 'Control your devices remotely from the app. For example, turn devices on/off, adjust settings, and schedule operations.',
            icon: <TbSettingsAutomation />,
            link: '#electric'
        },
        { 
            id: 3, 
            title: 'Historical Data and Analytics', 
            content: 'Access detailed analytics and reports on device performance, energy usage, and other metrics over time.',
            icon: <FaChartPie />,
            link: '#plumping'
        },
        { 
            id: 4, 
            title: 'Security and Privacy Controls', 
            content: 'Secure access with multi-factor authentication and encrypted communication.',
            icon: <MdSystemSecurityUpdateGood />,
            link: '#plumping'
        },
    ];

    return (
        <div className="card-grid">
        {cardData.map(({ id, title, content, icon, link }) => (
            <div className="card" key={id}>
                <h2 className="card-title">{title}</h2>
                <h3>{icon}</h3>
                <p className="card-content">{content}</p>
            </div>
        ))}
        </div>
    );
};

export default CardComponent;