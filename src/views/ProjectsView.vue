<template>
  <div class="max-w-screen-lg mx-auto pl-4 pr-4 pb-5 mt-20 mb-48 sm:mb-0">
    <div class="mockup-code">
      <pre
        data-prefix="$"
      ><code>npm i <label class=" font-bold text-2xl text-primary">{{ $t('title2') }}</label></code></pre>
      <pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
      <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
    </div>
    <ProyectsDev
      :title="$t('proy.1.title')"
      :description="$t('proy.1.description')"
      :technologies="['Flutter', 'Dart', 'Firebase', 'Playstore']"
      imageUrl="/imgs/proyectos/1.webp"
      altText="swapme"
      githubUrl="https://github.com/Isnotcristhianr/SwapMe---Code-0"
      previewUrl="https://play.google.com/store/apps/details?id=com.company.swapme&hl=es_EC"
      type="app"
    />
    <ProyectsDev
      :title="$t('proy.2.title')"
      :description="$t('proy.2.description')"
      :technologies="['Figma']"
      imageUrl="/imgs/proyectos/2.webp"
      altText="nike"
      githubUrl="https://github.com/Isnotcristhianr/Desgin-Nike-App"
      previewUrl="https://www.figma.com/proto/YvIHYvf3NriJshdOPKzl8J/Sneakers-Shop-App-detail-page-mobile-(Community)?page-id=21%3A0&node-id=21-2&t=wWGhXV7YpHKMx6re-1"
      type="desing"
    />
    <ProyectsDev
      :title="$t('proy.3.title')"
      :description="$t('proy.3.description')"
      :technologies="['AdobeXd']"
      imageUrl="/imgs/proyectos/3.webp"
      altText="chat"
      githubUrl="https://github.com/Isnotcristhianr/Nike-App-AdobeXd"
      previewUrl="#"
      type="app"
    />
    <ProyectsDev
      :title="$t('proy.4.title')"
      :description="$t('proy.4.description')"
      :technologies="['Html', 'Css', 'Js', 'Jquery', 'Bootstrap', 'Php']"
      imageUrl="/imgs/proyectos/4.webp"
      altText="blog"
      githubUrl="https://github.com/Isnotcristhianr/candidatos_2023Imbabura.github.io"
      previewUrl="https://isnotcristhianr.github.io/candidatos_2023Imbabura.github.io/"
      type="web"
    />
    <ProyectsDev
      :title="$t('proy.5.title')"
      :description="$t('proy.5.description')"
      :technologies="['Html', 'Css', 'Js', 'Jquery', 'Bootstrap']"
      imageUrl="/imgs/proyectos/5.webp"
      altText="blog"
      githubUrl="https://github.com/Isnotcristhianr/diigo.github.io"
      previewUrl="https://isnotcristhianr.github.io/diigo.github.io/"
      type="web"
    />
    <ProyectsDev
      :title="$t('proy.6.title')"
      :description="$t('proy.6.description')"
      :technologies="['Html', 'Css', 'Js', 'Jquery', 'Bootstrap']"
      imageUrl="/imgs/proyectos/6.webp"
      altText="spiccy"
      githubUrl="https://github.com/Isnotcristhianr/spicy.github.io"
      previewUrl="https://isnotcristhianr.me/spicy.github.io/"
      type="web"
    />
    <ProyectsDev
      :title="$t('proy.7.title')"
      :description="$t('proy.7.description')"
      :technologies="['Html', 'Css', 'Js']"
      imageUrl="/imgs/proyectos/7.webp"
      altText="blog"
      githubUrl="https://github.com/Isnotcristhianr/WalkyDogs.github.io"
      previewUrl="https://isnotcristhianr.github.io/WalkyDogs.github.io/"
      type="web"
    />
    <ProyectsDev
      :title="$t('proy.8.title')"
      :description="$t('proy.8.description')"
      :technologies="['VueJs', 'Tilwind', 'Vercel']"
      imageUrl="/imgs/proyectos/8.webp"
      altText="blog"
      githubUrl="https://github.com/Isnotcristhianr/01-VueJS/tree/main/07_spa"
      previewUrl="https://giftsearch-l2r4fdbzd-isnotcristhianrs-projects.vercel.app/"
      type="web"
    />
    <ProyectsDev
      :title="$t('proy.9.title')"
      :description="$t('proy.9.description')"
      :technologies="['VueJs', 'Tailwind', 'Vercel']"
      imageUrl="/imgs/proyectos/9.webp"
      altText="blog"
      githubUrl="https://github.com/Isnotcristhianr/01-VueJS/tree/main/05_sass_http"
      previewUrl="https://criptocotizador-7nkd670wo-isnotcristhianrs-projects.vercel.app/"
      type="web"
    />
    <ProyectsDev
      :title="$t('proy.10.title')"
      :description="$t('proy.10.description')"
      :technologies="['VueJs', 'Tailwind', 'Vercel']"
      imageUrl="/imgs/proyectos/10.webp"
      altText="blog"
      githubUrl="https://github.com/Isnotcristhianr/01-VueJS/tree/main/11_pinia_store"
      previewUrl="https://01-vue-js.vercel.app/"
      type="web"
    />
    <ProyectsDev
      :title="$t('proy.11.title')"
      :description="$t('proy.11.description')"
      :technologies="['Laravel', 'Php', 'Blade']"
      imageUrl="/imgs/proyectos/11.webp"
      altText="blog"
      githubUrl="https://github.com/Isnotcristhianr/Laravel-Hotel"
      previewUrl="#"
      type="web"
    />
    <ProyectsDev
      :title="$t('proy.12.title')"
      :description="$t('proy.12.description')"
      :technologies="['Html', 'Css', 'Bootstrap', 'Js']"
      imageUrl="/imgs/proyectos/12.webp"
      altText="blog"
      githubUrl="https://github.com/Isnotcristhianr/CieloVerde"
      previewUrl="https://cieloverdespanishschool.com/"
      type="web"
    />
    <ProyectsDev
      :title="$t('proy.13.title')"
      :description="$t('proy.13.description')"
      :technologies="['NodeJs', 'React', 'Taiilwind', 'MongoDb', 'Vercel']"
      imageUrl="/imgs/proyectos/13.webp"
      altText="blog"
      githubUrl="https://github.com/Isnotcristhianr/sistema-hotel-mongo"
      previewUrl="https://hotel-booking-web-app.vercel.app/login"
      type="web"
    />
    <ProyectsDev
      :title="$t('proy.14.title')"
      :description="$t('proy.14.description')"
      :technologies="['Php', 'Bootstrap', 'HighCharts', 'Coidegniter']"
      imageUrl="/imgs/proyectos/14.webp"
      altText="gifSearch"
      githubUrl="https://github.com/Isnotcristhianr/SistemaGestionDocumental"
      previewUrl="www.pucei.edu.ec:441/DirectorioAplicaciones/"
      type="web"
    />
    <ProyectsDev
      :title="$t('proy.15.title')"
      :description="$t('proy.15.description')"
      :technologies="['Html', 'Css', 'Js', 'Jquery', 'Bootstrap']"
      imageUrl="/imgs/proyectos/15.webp"
      altText="gifSearch"
      githubUrl="https://github.com/Isnotcristhianr/apiPokemon"
      previewUrl="https://isnotcristhianr.github.io/apiPokemon/pokedex.html"
      type="web"
    />
    <ProyectsDev
      :title="$t('proy.16.title')"
      :description="$t('proy.16.description')"
      :technologies="['VueJs', 'Tailwind', 'Daisy', 'Firebase']"
      imageUrl="/imgs/proyectos/16.webp"
      altText="gifSearch"
      githubUrl="https://github.com/Isnotcristhianr/01-VueJS/tree/main/07_spa"
      previewUrl="https://giftsearch-l2r4fdbzd-isnotcristhianrs-projects.vercel.app/"
      type="web"
    />
    <ProyectsDev
      :title="$t('proy.17.title')"
      :description="$t('proy.17.description')"
      :technologies="['Figma']"
      imageUrl="/imgs/proyectos/17.webp"
      altText="gifSearch"
      githubUrl="https://www.figma.com/design/bPHe9EyLnHEnTocHXa614E/GDG-Gye-Webpage?node-id=0-1&t=Im6uIdrBpKE9qypW-1"
      previewUrl="https://www.figma.com/proto/bPHe9EyLnHEnTocHXa614E/GDG-Gye-Webpage?page-id=0%3A1&node-id=10-2&node-type=canvas&viewport=241%2C133%2C0.04&t=Ma9yxLNQZ3SdlkrM-1&scaling=scale-down&content-scaling=fixed"
      type="desing"
    />
    <ProyectsDev
      :title="$t('proy.18.title')"
      :description="$t('proy.18.description')"
      :technologies="['Firebase']"
      imageUrl="/imgs/proyectos/18.webp"
      altText="blog"
      type="database"
    />
    <ProyectsDev
      :title="$t('proy.19.title')"
      :description="$t('proy.19.description')"
      :technologies="['Firebase']"
      imageUrl="/imgs/proyectos/19.webp"
      altText="blog"
      previewUrl="https://blog-vue-49ffd.web.app/app"
      type="database"
    />
    <ProyectsDev
      :title="$t('proy.20.title')"
      :description="$t('proy.20.description')"
      :technologies="['Coidegniter', 'Php', 'Xampp', 'Apache', 'Mysql']"
      imageUrl="/imgs/proyectos/20.webp"
      altText="blog"
      previewUrl="https://www.pucei.edu.ec:9199/creatibot2024/index.php"
      type="web"
    />
    <ProyectsDev
      :title="$t('proy.21.title')"
      :description="$t('proy.21.description')"
      :technologies="['Spark', 'Meta', 'Instagram', 'Facebook']"
      imageUrl="/imgs/proyectos/21.webp"
      altText="blog"
      githubUrl="https://github.com/Isnotcristhianr/Filtro-Vintage-Instagram"
      previewUrl="https://www.instagram.com/ar/466877215086875/"
      type="desing"
    />
    <ProyectsDev
      :title="$t('proy.22.title')"
      :description="$t('proy.22.description')"
      :technologies="['Spark', 'Meta', 'Instagram', 'Facebook']"
      imageUrl="/imgs/proyectos/22.webp"
      altText="blog"
      githubUrl="https://github.com/Isnotcristhianr/Filtro-Indie-Instagram"
      previewUrl="https://www.facebook.com/fbcameraeffects/tryit/164923048603691/"
      type="desing"
    />
    <ProyectsDev
      :title="$t('proy.23.title')"
      :description="$t('proy.23.description')"
      :technologies="['Spark', 'Meta', 'Instagram', 'Facebook']"
      imageUrl="/imgs/proyectos/23.webp"
      altText="blog"
      githubUrl="https://github.com/Isnotcristhianr/Flitro-Glitch-Instagram"
      previewUrl="https://www.instagram.com/ar/365607665600007/"
      type="desing"
    />
    <ProyectsDev
      :title="$t('proy.24.title')"
      :description="$t('proy.24.description')"
      :technologies="['Spark', 'Meta', 'Instagram', 'Facebook']"
      imageUrl="/imgs/proyectos/24.webp"
      altText="blog"
      githubUrl="https://github.com/Isnotcristhianr/Filtro-Astigma-Instagram"
      previewUrl="https://www.instagram.com/ar/587230052172601/"
      type="desing"
    />
    <ProyectsDev
      :title="$t('proy.25.title')"
      :description="$t('proy.25.description')"
      :technologies="['Next', 'Tailwind', 'ShadcnUI', 'Vercel']"
      imageUrl="/imgs/proyectos/25.webp"
      altText="gifSearch"
      githubUrl=""
      previewUrl="https://gifsearch-l2r4fdbzd-isnotcristhianrs-projects.vercel.app/"
      type="web"
    />
  </div>
  <FooterComponent />
</template>

<script setup lang="ts">
//components
import ProyectsDev from '../components/ProyectsDev.vue'
import FooterComponent from '../components/FooterComponent.vue'
</script>
