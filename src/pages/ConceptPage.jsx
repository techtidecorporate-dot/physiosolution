import React from 'react';

const ConceptPage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[716px] flex items-center px-8 max-w-7xl mx-auto mb-20 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full">
          <div className="md:col-span-7 z-10">
            <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-widest uppercase mb-6">The Methodology</span>
            <h1 className="text-5xl md:text-7xl font-bold text-primary tracking-tighter leading-tight mb-8">
              CONCEPT – Physiotherapy where your life takes place.
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
              Precision in movement, integrated within your natural environment. We transcend clinical boundaries to meet you where healing truly happens.
            </p>
          </div>
          <div className="md:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                alt="Professional physiotherapist assisting a patient in a bright, modern living room setting"
                className="w-full h-full object-cover"
                data-alt="Professional physiotherapist in green scrubs guiding an elderly patient through light balance exercises in a bright, sunlit modern apartment"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3-kg4Gg9e9M6FQ8YqycYSz0krG8ZkKsYQnpkO9afPTbedIYptHcFKU_9CCcTttYIRba0QiOtL3B70x4I-_tV_k3her6TTJCVxNNAT3I6CP7X338X2ZTHP2djECwbvwn2rIGfdPAMJqWbMAkq83u9mzaA7ig3UWjodClrNP8iBVjTLGDzbDg_67lkprZBLluvLNEZ8zxV0XJcYWGiAqG8AiQGyVf5MrMlrCCavR3jBpKKLAGZGj-PIH5X_VX_VlA2JXBjUuxg3ekPl"
              />
            </div>
            {/* Decorative Abstract Circle */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border-[40px] border-primary-fixed/20 rounded-full -z-10"></div>
          </div>
        </div>
      </section>

      {/* Core Philosophy Section - Bento Grid Layout */}
      <section className="px-8 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
          {/* Main Content Card */}
          <div className="md:col-span-2 md:row-span-2 bg-tertiary-container rounded-[2.5rem] p-12 flex flex-col justify-between text-on-tertiary-container relative overflow-hidden group">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-4xl mb-8" data-icon="home_health">home_health</span>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Your home is more than just a space.</h2>
              <p className="text-lg opacity-90 leading-relaxed mb-8">
                It is your life, your memories, your familiar and known environment. Real life happens where you live – in your city, on the street, in the shopping center, or during a walk in the park.
              </p>
              <p className="text-lg opacity-90 leading-relaxed">
                Health affects not only the body, but also the mind and soul. For us, physiotherapy as a home visit therefore means more than just exercises in the living room or stairwell.
              </p>
            </div>
            {/* Ambient Pattern */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none transition-transform duration-700 group-hover:scale-110">
              <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,86.2,-0.5C85.3,14.6,80.1,29.3,71.7,42C63.3,54.7,51.8,65.5,38.3,72.4C24.8,79.3,9.3,82.4,-6.2,81.4C-21.7,80.4,-37.2,75.3,-50.2,66.1C-63.2,56.9,-73.7,43.6,-79.8,28.7C-85.9,13.8,-87.6,-2.7,-84.1,-18C-80.6,-33.3,-71.9,-47.4,-59.5,-56C-47.1,-64.6,-31,-67.7,-16,-72.6C-1,-77.5,15.7,-84.2,31.3,-83.6C46.9,-83,61.4,-75.1,44.7,-76.4Z" fill="currentColor" transform="translate(100 100)"></path>
              </svg>
            </div>
          </div>
          {/* Integration Card */}
          <div className="md:col-span-2 bg-surface-container rounded-[2.5rem] p-10 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight">Everyday Integration</h3>
            <p className="text-on-surface-variant leading-relaxed">
              To return to a normal, self-determined life, we consciously integrate everyday situations into therapy. This creates safety, routine, and confidence – in daily life and in the social environment.
            </p>
          </div>
          {/* Recovery Context Card */}
          <div className="md:col-span-1 bg-surface-container-lowest rounded-[2.5rem] p-8 shadow-sm border border-outline-variant/10 group hover:shadow-xl transition-all duration-500">
            <span className="material-symbols-outlined text-secondary text-3xl mb-4" data-icon="stairs">stairs</span>
            <h4 className="font-bold text-lg mb-2">Practical Path</h4>
            <p className="text-sm text-on-surface-variant">Regaining confidence in your own four walls and beyond.</p>
          </div>
          {/* Challenge Card */}
          <div className="md:col-span-1 bg-primary text-white rounded-[2.5rem] p-8 flex flex-col justify-between">
            <p className="text-sm font-medium opacity-80 uppercase tracking-widest">The Focus</p>
            <p className="text-xl font-bold leading-tight">Beyond classic rehabilitation exercises.</p>
          </div>
        </div>
      </section>

      {/* Full Width Imagery & Text Section */}
      <section className="tonal-volume-low py-32 px-8 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <img
                alt="Therapist helping a patient walk in an outdoor park setting"
                className="rounded-[2.5rem] shadow-2xl w-full object-cover aspect-video"
                data-alt="Physiotherapist supporting a patient during a guided walk in a lush green Swiss park with trees and mountains in the distance"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtiOOL_09blqSq877mEBNEGf7SY6z5KUzfbWJ-IgEaS0jhzeOTHbrE73KYaNWHiwMfh2ocGaYsidSSNVS09HcYh18cpKOeXHxH-qaYr4iAVgAR8YRrbTKEMyGJSBfdxUxHbrzaT8RAetyMs52jC1U1vc9Vh3bkv7IpAkb3QD6IuhmvuyAjcxGIE3fXgNR_89WTjG_2oViMk1obTEhs4RyU4MZOOnviCm28W_pU9ZkYEsvi8U2hnQ9s3XsUEk7r4YzkW2_KZLaihUtk"
              />
              <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-lg max-w-[200px]">
                <p className="text-xs font-bold text-secondary uppercase tracking-tighter mb-1">Reality Check</p>
                <p className="text-sm text-on-surface-variant font-medium">Reintegration into society is often challenging.</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tighter mb-8 leading-tight">
              Step by step and at your own pace.
            </h2>
            <div className="space-y-6 text-on-surface-variant text-lg">
              <p>
                Especially after accidents, falls, or serious illnesses, the path back into society takes more than classic exercises. It requires practical experience in everyday life.
              </p>
              <p className="font-semibold text-primary">
                We support you in regaining confidence, trusting yourself to participate in life again, and reintegrating into your social environment.
              </p>
            </div>
            <div className="mt-10 flex gap-4">
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
                </span>
                <span className="text-sm font-bold">Safety</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
                </span>
                <span className="text-sm font-bold">Routine</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
                </span>
                <span className="text-sm font-bold">Confidence</span>
              </div>
            </div>
          </div>
        </div>
        {/* Background Decoration */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary-fixed/5 pointer-events-none"></div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-32 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-primary tracking-tighter mb-8">Ready to reclaim your path?</h2>
        <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed">
          Let's start your journey toward movement and independence in the environment you love most.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a className="bg-vitality-gradient text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-primary/20 hover:scale-[1.02] transition-all" href="#">Book a Consultation</a>
          <a className="bg-surface-container-low text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-surface-container transition-all" href="#">Explore Services</a>
        </div>
      </section>
    </div>
  );
};

export default ConceptPage;
