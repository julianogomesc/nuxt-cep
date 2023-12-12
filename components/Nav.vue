<template>
    <div>
        <b-navbar toggleable="lg" type="dark" class="py-0">
            <b-navbar-brand href="" class="py-0">
                <b-img id="logo" class="py-3" fluid src="@/assets/images/logo-mello-e-ribeiro.png"></b-img>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <!-- <b-navbar-nav class="ml-auto">
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav> -->
            
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto ">
                <b-nav-item href="#sobre">Quem Somos</b-nav-item>
                <b-nav-item href="#oquefazemos">O que Fazemos</b-nav-item>
                <b-nav-item href="#contato">Contato</b-nav-item>

                <!-- <b-nav-item :href="localePath('/')">{{ $t("menu-home") }}</b-nav-item>
                <b-nav-item :href="localePath('/empresa')">{{ $t("menu-empresa") }}</b-nav-item>
                <b-nav-item :href="localePath('/produtos')">{{ $t("menu-produtos") }}</b-nav-item>
                <b-nav-item :href="localePath('/noticias')">{{ $t("menu-noticias") }}</b-nav-item>
                <b-nav-item :href="localePath('/contato')">{{ $t("menu-contato") }}</b-nav-item> -->

            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default{
    data(){
        return{
            langActive: 'pt'
        }
    },
    watch:{
        active:{
        handler(val, oldVal){
            if(this.active.cruzeiros == false && this.active.pacotes == false && this.active.hoteis == false && this.active.passeios == false){
            this.menuActive = false
            }
        },
        deep: true
        },
        menuActive(newV, oldV){
        if(newV == false){
            this.active.cruzeiros = false 
            this.active.pacotes = false 
            this.active.hoteis = false
            this.active.passeios = false
        }
      }
    },
    created(){
      this.flagActive()
    },
    computed: {
      availableLocales () {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      },
    },
    methods:{
      flagActive(){
        this.langActive = this.$auth.$storage.getCookies().i18n_redirected
      },
      switchFlag(value){
        if(value == '' || value == 'pt'){
          return '@/assets/images/icon-flagbr.png'
        }
        else if(value == 'es'){
          return '@/assets/images/icon-flages.png'
        }
        else if(value == 'en'){
          return '@/assets/images/icon-flagen.png'
        }
      },
        clickMenu(item){
      if(item == 1){ // Cruzeiros
        this.active.cruzeiros = !this.active.cruzeiros
        this.active.pacotes = false
        this.active.hoteis = false
        this.active.passeios = false
        if(this.menuActive == false){
          this.menuActive = true
        }
      } else if (item == 2){ // Pacotes
        this.active.pacotes = !this.active.pacotes
        this.active.cruzeiros = false
        this.active.hoteis = false
        this.active.passeios = false
        if(this.menuActive == false){
          this.menuActive = true
        }
      } else if (item == 3){ // Hoteis
        this.active.hoteis = !this.active.hoteis
        this.active.cruzeiros = false
        this.active.passeios = false
        this.active.pacotes = false
        if(this.menuActive == false){
          this.menuActive = true
        }
      } else if (item == 4){ // Passeios
        this.active.passeios = !this.active.passeios
        this.active.cruzeiros = false
        this.active.hoteis = false
        this.active.pacotes = false
        if(this.menuActive == false){
          this.menuActive = true
        }
      }


      // this.menuActive = item
      // this.menuActive = !this.menuActive
      // if(item == 1){ //Cruzeiros
      //   this.active.cruzeiros = !this.active.cruzeiros
      // } else if(item == 2){ //Pacotes
      //   this.active.pacotes = !this.active.pacotes
      // }
      // alert('menu cruzeiros' + item)
    },
    }
}
</script>