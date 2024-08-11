import React, { useEffect, useRef } from 'react';

import { FaBoltLightning } from "react-icons/fa6";
import { LuConstruction } from "react-icons/lu";
import { IoIosWater } from "react-icons/io";
import { FaWind } from "react-icons/fa";
import { GrVmMaintenance } from "react-icons/gr";
import { FaBuilding } from "react-icons/fa";

import './CompanyIntro.css'; // Import your CSS file

import DiyarahLogo from '/Images/Icons/QuemaLogo.png'

import Building1  from '/Images/Buildingds/mainBackground.jpg'
import Building2  from '/Images/Buildingds/values.png'
import Electricity from '/Images/Buildingds/1.png'
import RealEstate from '/Images/Buildingds/2.png'
const CompanyIntro = () => {
  const professionalIntroRef = useRef(null);

  useEffect(() => {
    const handleAnimation = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    };

    const introObserver = new IntersectionObserver(handleAnimation, {
      threshold: 0.5,
    });

    if (professionalIntroRef.current) {
      introObserver.observe(professionalIntroRef.current);
    }

    return () => {
      if (professionalIntroRef.current) {
        introObserver.unobserve(professionalIntroRef.current);
      }
    };
  }, []);

  return (
    <div className="professional-intro-container">
      <div className='overlay-image'></div>
        <h1>من نحن؟</h1>
      <div className="professional-intro-section">
        <div id='alogoDiv'>
            <img src={DiyarahLogo} alt="Logo" className="alogo" loading="lazy" />
        </div>
        <p id='heroP'>
          شركة رائدة في مجال المقاولات و التوريدات العامة و التشطيبات و العقارات.
          نضم تحت مظلتنا كل القطاعات الرئيسية الخاصة بالتوريدات الكهربائية و التكييف و السباكة و الصيانة و التشغيل و إدارة الأملاك تحت مظلة كيان واحد (القمة اللامعة).
        </p>
      </div>
      {/* Section 1 */}
      <div className="professional-intro-section">
        <div className="professional-intro-text">
          <h2>رؤيتنا و هدفنا</h2>
          <ul>
              <li>
                نعمل على تلبية تطلعات العملاء و شركاء نجاحنا من خلال إستشارات بغض النظر عن إتمام عمليات الشراء من غيرها.
              </li>
              <li>
                  نسعى لخدمة قاعدة عملاء ضخمة تتنوع بين الشركات الصناعية و التجارية و كذلك العملاء من الأفراد من خلال درايتنا العميقة لمختلف التوجهات السوقية.
              </li>
              <li>
                  نقوم بتوريد  أفضل الخامات بأسعار متميزة لأننا لا نسعى إلى الربح المادي فقط و لكن نسعى لنسمو فوق ذلك و نسعى لانشاء شراكات و علاقات لنصبح المورد الأول الخاص بك في شتى المجالات.
              </li>
              <li>
                  ندرك جيدا أهمية عامل الوقت و نسعى للإنتهاء من مهمتنا قبل الموعد المحدد.
              </li>
          </ul>
        </div>
        <img
          src= {Building1}
          alt="Professional Image 1"
          className="animated-image"
          id='Building1'
          loading="lazy"
        />
      </div>

      {/* Section 2 */}
      <div className="professional-intro-section reverse">
        <img
          src={Building2}
          alt="Professional Image 2"
          className="animated-image"
          id='Building2'
          loading="lazy"
        />
        <div className="professional-intro-text">
          <h2>قيمنا</h2>
          <p>
              تقدم الشركة كل خدماتها و منتجاتها بمنهجية تضمن تحقيق <strong>الأمانة</strong> و <strong>الكفاءة</strong> و <strong>الثقة</strong> و <strong>الملائمة</strong> و <strong>الإستدامة</strong>.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="professional-intro-section">
        <div className="professional-intro-text">
        <h2>خدماتنا</h2>
        <ol>
            <li>
                <p><LuConstruction /> <strong>المقاولات</strong>.</p>
            </li><br />
            <li>
                <p><FaBoltLightning /> <strong>قطاع الانارة و الكهرباء</strong>.</p>
            </li><br />
            <li>
                <p><IoIosWater /> <strong>قطاع السباكة</strong>.</p>
            </li><br />
            <li>
                <p><FaWind /> <strong>قطاع التكييف</strong>.</p>
            </li><br />
            <li>
                <p><GrVmMaintenance /> <strong>الصيانة و التشغيل و إدارة الأملاك</strong>.</p>
            </li> <br />
            <li>
                <p><FaBuilding /> <strong>التسويق العقاري</strong>.</p>
            </li><br />
        </ol>
        </div>
        <img
          src={Electricity}
          alt="Professional Image 3"
          className="animated-image"
          id='Electricity'
          loading="lazy"
        />
        <img
          src={RealEstate}
          alt="Professional Image 3"
          className="animated-image"
          id='RealEstate'
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default CompanyIntro;
