// InfoComponent.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Styles/InfoComponent.css';

import image1 from '/Images/Buildingds/NargesBuildings.webp';
import image2 from '/Images/Buildingds/Damaam.webp';
import image3 from '/Images/Buildingds/Safa.webp';
import image4 from '/Images/Buildingds/TheViewProject.webp';

const InfoComponent = () => {
  return (
    <div id='sections'>
      <div className='overlay-image'></div>
      <div id='SectionsBody'>
        <div className="infoPart">
          <h1>القطاعات الرئيسية لشركة القمة اللامعة</h1>
          <div className="infoContent inforeverse" id="constructions">
            <div className="infoText">
              <h3>قطاع المقاولات:</h3>
              <p>
                تتنوع أنشطة المقاولات لدينا لتغطي عدد كبير من الصناعات الإنشائية كإنشاء
                الكباري و الطرق و مشروعات المياة و الصرف الصحي و محطات الكهرباء و ترميم
                الأثار و إنشاء القرى السياحية و المباني العامة و الأعمال الكهروميكانيكية و
                الإستشارات الهندسية و غيرها و كل هذا على درجة عالية من الخبرة و الإ تقان.
              </p>
            </div>
            <div className="infoImage">
              <img src={image1} alt="قطاع المقاولات" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="infoPart">
          <div className="infoContent" id="electric">
            <div className="infoText">
              <h3>قطاع الانارة و الكهرباء:</h3>
              <p>
                نقدم حلول الإضاءة الموفرة للطاقة و التطبيقات الجديدة التي توفرها الاضاءة - و نقدم أحدث الحلول المتكاملة لأنظمة الإضاءة الداخلية و الخارجية و جميع مستلزمات التشطيب وفقاً لاحدث المواصفات العالمية و بأسعار تنافسية بأطول فترة ضمان متاحة.  
                <ul id='electricItems'>
                  <li> - لوحات التوزيع و المفاتيح الكهربائية</li>
                  <li> - مستلزمات التأسيس و التشطيب للشقق</li>
                  <li> - أسلاك و كابلات</li>
                  <li> - لوحات التوزيع و قواطع التيار</li>
                  <li> - بند الرفايع (مشترك-دوايو شواحن)</li>
                  <li> - منتجات حماية ووقاية</li>
                  <li> - كشافات الإضاءة الخارجية للملاعب</li>
                  <li> - أنظمة إضاءة خراطيم الليد و التراكات</li>
                  <li> - أنظمة الإضاءة الخارجية و إنارة الحدائق</li>
                  <li> - لمبات الإضاءة العامة و الإضاءة الموجهة</li>
                  <li> - وحدات إنارة الأماكن المفتوحة</li>
                  <li> - وحدات إنارة الأماكن المغلقة</li>
                  <li> - إكسسوارات أدوات كهربائية</li>
                  <li> - تراك لايت ليد</li>
                  <li> - الليد ماجنتيك</li>
                  <li> - شاسية اسبوت</li>
                  <li> - الليد بروفايل</li>
                  <li> - اسبوتات و كشافات</li>
                  <li> - أنظمة إضاءة البروفايل</li>
                  <li> - كشافات طاقة شمسية</li>
                </ul>
              </p>
            </div>
            <div className="infoImage">
              <img src={image2} alt="قطاع الانارة و الكهرباء" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="infoPart">
          <div className="infoContent inforeverse" id="plumping">
            <div className="infoText">
              <h3>قطاع السباكة:</h3>
              <p>
                نقوم بأعمال التوريدات المتعلقة بأعمال السباكة و الصرف الصحي و اللاند سكيب و
                مستلزمات حمامات السباحة أياً كان نوع المنشأة سكنية - إدارية - مصنع.  
                <ul>
                  <li>- إحتياجات تأسيس السباكة.</li>
                  <li>- مستلزمات الحدائق و اللاند سكيب.</li>
                  <li>- مستلزمات حمام السباحة.</li>
                  <li>- إحتياجات التشطيب.</li>
                  <li>- مواسير الضغط.</li>
                  <li>- مستلزمات شبكات الري.</li>
                </ul>
              </p>
            </div>
            <div className="infoImage">
              <img src={image3} alt="قطاع السباكة" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="infoPart">
          <div className="infoContent" id="conditioning">
            <div className="infoText">
              <h3>قطاع التكييف:</h3>
              <p>
                نقدم خدمات توريد و تركيب و صيانة أنظمة التكييف و التهوية في كافة أنحاء
                المملكة العربية السعودية. من خلال الفريق التقني الإحترافي لدى الشركة - لضمان
                تقديم أفضل خدمة في مجال التكييف و التكييف المركزي و التبريد. بداية من
                التوريد و التركيب و التوريدات العامة مروراً بأعمال الصيانة الشاملة للأنظمة بمختلف
                أنواعها.
              </p>
              <p>
                نقدم خدمات تأسيس المواسير و تركيب التكييفات كوننا مورد معتمد - كما نمتلك
                أفضل خبراء و فنيين صيانة التكييفات الكونسيلد و المركزي و صيانة التكييفات و
                تركيب الصاج للتكيفات المركزية.
              </p>
            </div>
            <div className="infoImage">
              <img src={image4} alt="قطاع التكييف" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="infoPart">
          <div className="infoContent inforeverse" id="maintainance">
            <div className="infoText">
              <h3>الصيانة و التشغيل و ادارة الأملاك:</h3>
              <p>
                الصيانة هي عملية الحفظ على العقارات في حالة جيدة و صالحة للسكن أو الإيجار .
                تتمثل إدارة الأملاك العقارية في تولي مسؤولية إدارة الأملاك العقارية و تشغيلها
                و تلعب الصيانة دوراً أساسيا في إدارة الأملاك العقارية - حيث تساعد على ضمان أن
                تظل العقارات في حالة جيدة صالحة للإستخدام.
                <br />
                نقوم بذلك من خلال:
                <ul>
                  <li>- إنشاء خطة صيانة تشمل جميع العناصر التي تحتاج إلى صيانة و جدولتها</li>
                  <li>- فحص العقارات بانتظام لتحديد أي مشكلات محتملة.</li>
                  <li>- تصحيح المشكلات بسرعة لمنع تفاقمها.</li>
                </ul>
                الصيانة المناسبة واستخدام أفضل برنامج عقاري لإدارة طلبات الصيانة، يمكن
                لمديري الأملاك العقارية الحفاظ على قيمة العقارات وضمان سلامتها
                وملاءمتها للاستخدام.
              </p>
            </div>
            <div className="infoImage">
              <img src={image3} alt="الصيانة و التشغيل و ادارة الأملاك" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="infoPart">
          <div className="infoContent" id="realestate">
            <div className="infoText">
              <h3>التسويق العقاري:</h3>
              <p>
                لدينا فريق من نخبة متميزة من المتخصصين في تأجير و بيع و شراء العقارات يهدف
                إلى توفير أكثر عائد لمنفعة العقار تقديم خدمات متخصصة في إدارة الأملاك
                تخفيض المصاريف و تعظيم الأصول.
              </p>
            </div>
            <div className="infoImage">
              <img src={image4} alt="التسويق العقاري" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoPart = ({ title, description, imgSrc, partId, fromLeft }) => {
  return (
    <div className="infoPart">
      <div className={`infoContent ${fromLeft ? 'inforeverse' : ''}`} id={partId}>
        <div className="infoText">
          <h3>{title}</h3>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
        <div className="infoImage">
          <img src={imgSrc} alt={title} loading="lazy" />
        </div>
      </div>
    </div>
  );
};

InfoPart.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  partId: PropTypes.string.isRequired,
  fromLeft: PropTypes.bool,
};

export default InfoComponent;