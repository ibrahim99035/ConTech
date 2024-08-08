import React from 'react';
import './Styles/HeroSection.css';

import HeroSectionBuildings from '/Images/Icons/QuemaLogo.png'

const HeroSection = () => { 
  return (
    <div className="about-us-section">
      <div className='overlay-image'></div>
      <div className="custom-header">
        <h2>القمة اللامعة</h2>
        <p className="sub-header">
          شركة رائدة في مجال المقاولات و التوريدات العامة و التشطيبات و العاقارات. نضم تحت مظلتنا كل القطاعات الرئيسية الخاصة بالتوريدات الكهرباءية و التكييف و السباكة و الصيانة و التشغيل و ادارة الأملاك تحت مظلة كيان واحد (القمة اللامعة).
        </p>
      </div>
      <div id='heroImageDiv'>
        <img
            src= {HeroSectionBuildings}
            alt="Buidings Grafity"
            className="hero-image"
            id='HeroBuilding'
            loading="lazy" 
        />
      </div>
      <br />
      <div className="Hprofessional-intro-section">
        <p>
          عمل على تلبية تطلعات العملاء و شركاء نجاحنا من خلال استشارات بغض النظر عن اتمام عمليات الشراء من غيرها.
          نسعى لخدمة قاعدة عملاء ضخمة تتنوع بين الشركات الصناعية و التجارية و كذلك العملاء من الأفراد من خلال درايتنا العميقة لمختلف التوجهات السوقية.
        </p>

        <p>
          نقوم بتوريد أفضل الخامات بأسعار متميزة لأننا لا نسعى الى الربح المادي فقط و لكن نسعى لنسمو فوق ذلك و نسعى لانشاء شراكات و علاقات لنصبح المورد الأول الخاص بك في شتى المجالات.
        </p>

        <p>
          ندرك جيدا أهمية عامل الوقت و نسعى للانتهاء من مهمتنا قبل الموعد المحدد.
        </p>
      </div>
      <div id='SeeMoreDiv'>
        <a href="/about-us" target='_blank' id='SeeMore'>اطلع على المزيد ...</a>
      </div>
    </div>
  );
};

export default HeroSection;