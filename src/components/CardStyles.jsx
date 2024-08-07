import React from 'react';
import './Styles/CardStyles.css';

import { useNavigate } from 'react-router-dom';

import { FaBoltLightning } from "react-icons/fa6";
import { LuConstruction } from "react-icons/lu";
import { IoIosWater } from "react-icons/io";
import { FaWind } from "react-icons/fa";
import { GrVmMaintenance } from "react-icons/gr";
import { FaBuilding } from "react-icons/fa";

const CardComponent = () => {
    const navigate = useNavigate();

    const cardData = [
        { 
            id: 1, 
            title: 'المقاولات', 
            content: 'تشمل أنشطة مقاولاتنا الكباري، الطرق، المياه، الصرف الصحي، محطات الكهرباء، ترميم الآثار، القرى السياحية، المباني العامة، الأعمال الكهروميكانيكية، والاستشارات الهندسية، بخبرة وجودة عالية.',
            icon: <LuConstruction />,
            link: '#constructions'
        },
        { 
            id: 2, 
            title: 'قطاع الانارة و الكهرباء', 
            content: 'نقدم حلول إضاءة موفرة للطاقة وأنظمة إضاءة داخلية وخارجية متكاملة، بجودة عالية وبأسعار تنافسية، مع أطول فترة ضمان متاحة.',
            icon: <FaBoltLightning />,
            link: '#electric'
        },
        { 
            id: 3, 
            title: 'قطاع السباكة', 
            content: 'نقوم بتوريد مستلزمات السباكة، الصرف الصحي، اللاندسكيب، وحمامات السباحة لجميع أنواع المنشآت: سكنية، إدارية، ومصانع.',
            icon: <IoIosWater />,
            link: '#plumping'
        },
        { 
            id: 4, 
            title: 'قطاع التكييف', 
            content: 'نقدم خدمات توريد، تركيب، وصيانة أنظمة التكييف والتهوية في السعودية، بما في ذلك التكييف المركزي وتأسيس المواسير، عبر فريق تقني محترف مع خبراء في الصيانة.',
            icon: <FaWind />,
            link: '#conditioning'
        },
        { 
            id: 5, 
            title: 'الصيانة و التشغيل و ادارة الأملاك', 
            content: 'الصيانة تحافظ على العقارات في حالة جيدة وصالحة للسكن أو الإيجار. إدارة الأملاك العقارية تشمل مسؤولية تشغيلها، حيث تساهم الصيانة في ضمان بقاء العقارات في حالة صالحة للاستخدام.',
            icon: <GrVmMaintenance />,
            link: '#maintainance'
        },
        { 
            id: 6, 
            title: 'التسويق العقاري', 
            content: 'فريقنا المتخصص في تأجير وبيع وشراء العقارات يهدف إلى تحقيق أعلى عائد من خلال إدارة فعالة للأملاك وتخفيض المصاريف.',
            icon: <FaBuilding />,
            link: '#realestate'
        },
    ];

    const handleClick = (link) => {
        window.open(`/sections${link}`, '_blank');
    };

    return (
        <div className="card-grid">
        {cardData.map(({ id, title, content, icon, link }) => (
            <div className="card" key={id} onClick={() => handleClick(link)}>
                <h2 className="card-title">{title}</h2>
                <h3>{icon}</h3>
                <p className="card-content">{content}</p>
            </div>
        ))}
        </div>
    );
};

export default CardComponent;