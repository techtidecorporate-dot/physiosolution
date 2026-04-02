import React from 'react';

const AboutPage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section: Editorial Profile */}
      <section className="max-w-7xl mx-auto px-8 py-20 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/30 text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-8">
            Personal Profile
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-primary tracking-tighter leading-none mb-10">
            Peter <br />Ulshöfer
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed max-w-2xl mb-12">
            A physiotherapist with 25 years of professional experience, dedicated to home-based care in the Zürcher Unterland and Bülach region.
          </p>
          <div className="flex gap-4">
            <div className="flex items-center gap-3 bg-surface-container-low px-6 py-4 rounded-xl">
              <span className="material-symbols-outlined text-primary" data-icon="verified_user">verified_user</span>
              <span className="text-sm font-bold text-on-surface">25+ Years Experience</span>
            </div>
            <div className="flex items-center gap-3 bg-surface-container-low px-6 py-4 rounded-xl">
              <span className="material-symbols-outlined text-primary" data-icon="home_health">home_health</span>
              <span className="text-sm font-bold text-on-surface">Home-Based Care</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
            <img 
              alt="Peter Ulshöfer" 
              className="w-full h-full object-cover" 
              data-alt="Professional headshot of a mature physiotherapist with a kind expression, wearing a clean white clinical polo, soft natural lighting, high-end Swiss aesthetic" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOUsOoxUAiS8fxi4jRoawpNJ72qeSqdaNRPVPA_Pc_dOTgr8DQh5BaYq8hRaa8eJaNBrYEUP6DeIKuyR9S60S5Anbz3_k9D_xLe73g2B1RMyPjvT0CG_hj5ZVbzxv9usFinP7294X8lOScWAt7gUDzHLAaiQtcwUehcUGpREMr5br6GiKLX-ypZWD-AktTd5gFRu_tC4ITwK7AkjoJl34Lk1vvv167Fb0mi1N91Ab7gJyzlmN2FVtf5mPzzd0ooGWsiqVwcW5qe36-" 
            />
          </div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full bg-tertiary-container/10 blur-3xl -z-10"></div>
          <div className="absolute -top-8 -right-8 w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-10"></div>
        </div>
      </section>

      {/* Biography Bento Grid */}
      <section className="bg-surface-container py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Bio Text */}
            <div className="md:col-span-2 bg-surface-container-lowest p-12 rounded-[2rem] shadow-sm flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-primary tracking-tight mb-8">My Approach</h2>
                <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
                  My work is characterized by a calm, structured, and practical approach – especially when dealing with complex conditions and sensitive life situations. For many years, I have supported people in the Zürcher Unterland through home-based physiotherapy, ensuring care is delivered in the comfort of their own environment.
                </p>
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  Precision in movement is not just a slogan; it is the foundation of my clinical practice, honed over a quarter-century of dedicated professional service.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-4 border-t border-outline-variant/20 pt-8">
                <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary" data-icon="location_on">location_on</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-outline uppercase tracking-widest">Primary Service Area</p>
                  <p className="text-on-surface font-semibold">Bülach &amp; Zürcher Unterland</p>
                </div>
              </div>
            </div>
            {/* Side Stats/Info */}
            <div className="flex flex-col gap-8">
              <div className="bg-primary-container p-10 rounded-[2rem] text-on-primary-container flex-1">
                <span className="material-symbols-outlined text-4xl mb-4" data-icon="clinical_notes">clinical_notes</span>
                <h3 className="text-xl font-bold mb-4">Precision First</h3>
                <p className="text-sm opacity-90 leading-relaxed">Structured methodology tailored to the specific anatomical and physiological needs of each patient.</p>
              </div>
              <div className="bg-secondary-container p-10 rounded-[2rem] text-on-secondary-container flex-1">
                <span className="material-symbols-outlined text-4xl mb-4" data-icon="psychology">psychology</span>
                <h3 className="text-xl font-bold mb-4">Sensitive Care</h3>
                <p className="text-sm opacity-90 leading-relaxed">Navigating complex life situations with professionalism and empathy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Focus (Editorial Grid) */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl font-black text-primary tracking-tight mb-6">Specialized Expertise</h2>
            <p className="text-on-surface-variant text-lg">My clinical focus areas allow for comprehensive support across a wide range of therapeutic needs.</p>
          </div>
          <div className="h-px bg-outline-variant/30 flex-1 hidden md:block mx-12 mb-6"></div>
          <div className="text-right">
            <span className="text-8xl font-thin text-surface-container-highest">08</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {/* Focus Items */}
          {[
            { icon: 'neurology', title: 'Neurology' },
            { icon: 'settings_accessibility', title: 'Dizziness Therapy' },
            { icon: 'air', title: 'Respiratory Therapy' },
            { icon: 'elderly', title: 'Geriatrics' },
            { icon: 'water_drop', title: 'Lymphology' },
            { icon: 'medical_services', title: 'Oncology' },
            { icon: 'healing', title: 'Chronic Wounds' },
            { icon: 'front_loader', title: 'High Care Needs' },
          ].map((item, idx) => (
            <div key={idx} className="group bg-surface-container-low hover:bg-white p-8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <span className="material-symbols-outlined text-primary mb-6 text-3xl" data-icon={item.icon}>{item.icon}</span>
              <h4 className="font-bold text-on-surface">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="bg-tertiary-container rounded-[3rem] p-12 md:p-24 overflow-hidden relative">
          {/* Abstract Pattern Decorative */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-fixed opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-fixed opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">Ready to Begin Your Recovery at Home?</h2>
            <p className="text-on-tertiary-container text-lg mb-12">Experience professional, structured physiotherapy in your own environment. Contact me today for a consultation in the Bülach area.</p>
            <a className="inline-flex items-center gap-4 bg-primary px-10 py-5 rounded-2xl text-white font-bold text-lg hover:scale-105 transition-transform" href="#">
              Schedule a Visit
              <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
