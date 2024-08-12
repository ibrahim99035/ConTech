import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { Helmet, HelmetProvider } from 'react-helmet-async';

import Header from './components/Header';
import SliderSection from './components/SliderSection';
import AboutUsSection from './components/HeroSection';
import ChatWithUsSection from './components/ChatWithUsSection';
import GoogleMapSection from './components/GoogleMapSection';
import Footer from './components/Footer';
import GoToTopButton from './components/GoToTopButton';
import CardComponent from './components/CardStyles'
import InfoComponent from './components/InfoComponent';
import PrivacyPolicy from './Routes/Privacy_policy/PrivacyPolicy';
import TermsAndConditions from './Routes/Terms_and_Conditions/TermsAndConditions';
import IntellectualPropertyRights from './Routes/IntellectualPropertyRights/IntellectualPropertyRights';
import About from './Routes/About/CompanyIntro';
import NotFound from './components/NotFound';
import Admin from './config/admin';
import News from './Routes/news/PostsDisplay'

const App = () => {
  return (
    <HelmetProvider>
      <div>  
        <BrowserRouter>
          <Routes>
            <Route 
              path='/' 
              element= {
                <>
                  <Helmet>
                    <title>القمة اللامعة - الرئيسية</title>
                  </Helmet>
                  <Header /> 
                  <SliderSection />
                  <AboutUsSection />
                  <CardComponent />
                  <Footer />
                  <GoToTopButton />
                </>
            } />

            <Route path='/sections' element= {
              <>
                <Helmet>
                  <title>القمة اللامعة - الأقسام</title>
                </Helmet>
                <Header />
                <InfoComponent /> 
                <Footer />
                <GoToTopButton />
              </>
            } />

            <Route path='/news' element= {
              <>
                <Helmet>
                  <title>القمة اللامعة - الأخبار</title>
                </Helmet>
                <Header />
                <News />
                <Footer />
                <GoToTopButton />
              </>
            } />
            
            <Route path='/about-us' element= {
              <>
                <Helmet>
                  <title>القمة اللامعة - من نحن؟</title>
                </Helmet>
                <Header />
                <About />
                <Footer />
                <GoToTopButton />
              </>
            } />

            <Route path='/terms-and-conditions' element= {
              <>
                <Helmet>
                  <title>القمة اللامعة - الشروك و الأحكام</title>
                </Helmet>
                <Header />
                <TermsAndConditions />
                <Footer />
                <GoToTopButton />
              </>
            } />

            <Route path='/intellectual-property' element= {
              <>
                <Helmet>
                  <title>القمة اللامعة - حقوق الملكية الفكرية</title>
                </Helmet>
                <Header />
                <IntellectualPropertyRights />
                <Footer />
                <GoToTopButton />
              </>
            } />

            <Route path='/privacy-policy' element= {
              <>
                <Helmet>
                  <title>القمة اللامعة - سياسة الخصوصية</title>
                </Helmet>
                <Header />
                <PrivacyPolicy />
                <Footer />
                <GoToTopButton />
              </>
            } />

            <Route path='/shiny-admin-panel' element= {
              <>
                <Admin /> 
                <GoToTopButton />
              </>
            } />

            <Route path='/contact-us' element= {
              <>
                <Helmet>
                  <title>القمة اللامعة - تواصل معنا</title>
                </Helmet>
                <Header />
                <ChatWithUsSection /> 
                <Footer />
                <GoToTopButton />
              </>
            } />
            <Route path='*' element = {<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;