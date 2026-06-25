<template>
  <section id="about" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <h2 v-reveal class="text-4xl font-bold text-center mb-12 text-gray-800">About Me</h2>
      
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div v-reveal>
          <p class="text-lg text-gray-600 leading-relaxed mb-6">
            Innovative Software Engineer with over 6 years of experience in architecting and deploying 
            high-performance web applications using PHP (Laravel) and Vue.js/Nuxt.js.
          </p>
          <p class="text-lg text-gray-600 leading-relaxed">
            Proven track record in optimizing backend performance and managing production-scale cloud 
            infrastructure on AWS. Committed to delivering clean, maintainable code following SOLID principles.
          </p>
        </div>
        
        <div v-reveal.delay-1 class="bg-gray-50 p-8 rounded-2xl">
          <h3 class="text-2xl font-semibold mb-6">Education & Certifications</h3>
          <ul class="space-y-4">
            <li class="flex gap-4">
              <span class="text-blue-600 font-bold">•</span>
              <div>
                <div class="font-medium">BSc (Eng) Undergraduate in Computer Engineering</div>
                <div class="text-sm text-gray-500">University of Peradeniya, Sri Lanka (2015 – 2019)</div>
              </div>
            </li>
            <li class="flex gap-4">
              <span class="text-blue-600 font-bold">•</span>
              <div>
                <div class="font-medium">Full Stack Web Development Certification</div>
                <div class="text-sm text-gray-500">University of Moratuwa with DP Education (2022)</div>
              </div>
            </li>
            <li class="flex gap-4">
              <span class="text-blue-600 font-bold">•</span>
              <div>
                <div class="font-medium">Flutter Mobile Development Certification</div>
                <div class="text-sm text-gray-500">Franklin Training (2022)</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>