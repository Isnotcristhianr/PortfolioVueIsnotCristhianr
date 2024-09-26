<script setup lang="ts">
import CertificatesComponent from '../components/CertificatesComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
</script>

<template>
  <div class="max-w-screen-lg mx-auto pl-4 pr-4 pb-5 mt-20 mb-48 sm:mb-0">
    <div class="mockup-code">
      <pre
        data-prefix="$"
      ><code>npm i <label class=" font-bold text-2xl text-primary">{{ $t('certificates') }}</label></code></pre>
      <pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
      <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
    </div>
    <CertificatesComponent
      name="Microsoft Certified AZ-900: Azure AI Fundamentals"
      icon="logos:microsoft-icon"
      link="https://learn.microsoft.com/api/credentials/share/es-es/CristhianRecalde-4665/10D25DF28F252BB7?sharingId=A2098A03866B3733"
    />
    <CertificatesComponent
      name="Development Web II"
      icon="logos:google-icon"
      link="https://drive.google.com/file/d/1Pg0lJnZtYOdj2Rv4q5SZsnA9ieFsBtm2/view?usp=sharing"
    />
    <CertificatesComponent
      name="Diseño Wev con HTML5 y CSS3"
      icon="cbi:movistar-plus"
      link="https://drive.google.com/file/d/1s5PNJ8tnrnGJX66TqLs8ZWoCDnfUwMpD/view?usp=sharing"
    />
    <CertificatesComponent
      name="Administración Windows Server 2016"
      icon="logos:udemy-icon"
      link="https://drive.google.com/file/d/17DjdcP5cJCeFaJCk7IUUrXv-An8SK59B/view?usp=sharing"
    />
    <CertificatesComponent
      name="VueJs 3 - Desde 0"
      icon="logos:udemy-icon"
      link="https://drive.google.com/file/d/1SSqaYjPIGwO9LCkHOwUOZB4r7Yh6OIYE/view?usp=sharing"
    >
    </CertificatesComponent>
    <CertificatesComponent
      name="Canva 2021"
      icon="devicon:canva"
      link="https://drive.google.com/file/d/1XFul-8MKenI9U5yEAXVI1wfU2M9LE0xc/view?usp=sharing"
    />
    <CertificatesComponent
      name="Canva 2022 - Diseño Grafico desde 0"
      icon="devicon:canva"
      link="https://drive.google.com/file/d/15-w-aXigZS3A5ntW90r8cBZ5HCLQullv/view?usp=sharing"
    />
    <CertificatesComponent
      name="Certificación Dominio Inglés B1"
      icon="token:efi"
      link="https://drive.google.com/file/d/1hLRlziymerWufhFDStiAXyZ-5MzAQceo/view?usp=sharing"
    />
    <CertificatesComponent
      name="Finanzas Inclusivas y Gobernanza"
      icon="marketeq:bank"
      link="https://drive.google.com/file/d/1SILN0o1_9j0vGyIGpW9Bw8vMoojG0ZuD/view?usp=sharing"
    />
    <CertificatesComponent
      name="The Complete Google Chrome Extensions Developer Course"
      icon="logos:udemy-icon"
      link="https://drive.google.com/file/d/1xj1ym_F29XURBNyC-dzIFR2cWtL7e1hL/view?usp=sharing"
    />
    <CertificatesComponent
      name="Cisco Security Cibernetics"
      icon="simple-icons:cisco"
      link="https://drive.google.com/file/d/1JIQnpAAYXDI7NSi4Kw5Za_T433vXCSGy/view?usp=sharing"
    />
    <CertificatesComponent
      name="Ciberseguridad en el Teletrabajo"
      icon="logos:google-icon"
      link="https://drive.google.com/file/d/1qjoIofi6Nv-dxJOlE_uhweCsKgdPiRTh/view?usp=sharing"
    />
    <CertificatesComponent
      name="IBM Optimization IBM CPLEX"
      icon="cib:ibm"
      link="https://drive.google.com/file/d/1iyLXRtB-1nmdipUvaerSAaO2HgwE4nvr/view?usp=sharing"
    />
    <CertificatesComponent
      name="Curso Compleo de Computación"
      icon="logos:udemy-icon"
      link="https://drive.google.com/file/d/1nQgOLRjO5TDWXe5qW1mf0f72-UmhBpRj/view?usp=sharing"
    />
    <CertificatesComponent
      name="Hackig Etico de redes WiFi"
      icon="cib:hackerrank"
      link="https://drive.google.com/file/d/1jf8d3kpZQ5z_1XJEH4eMMeuMcoGKUq0V/view?usp=sharing"
    />
    <CertificatesComponent
      name="Pyhon Guide Complete"
      icon="logos:udemy-icon"
      link="https://drive.google.com/file/d/13161HvvjKgpNJjCX_ynbGjgwiX8iD81n/view?usp=sharing"
    />
    <CertificatesComponent
      name="Unesco IA Certificate"
      icon="flag:un-1x1"
      link="https://drive.google.com/file/d/1jyAMjhspcFqi5fYIKF2L9ude47x8SvDc/view?usp=sharing"
    />
    <CertificatesComponent
      name="Curso Completo de Windows 10/11"
      icon="logos:udemy-icon"
      link="https://drive.google.com/file/d/1CqoH3ZpovkhvbrtxoVtkL1UpkUOMJLf2/view?usp=sharing"
    />
  </div>
  <FooterComponent />
</template>
