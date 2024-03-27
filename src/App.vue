<template>
  <img alt="Vue logo" class="logo box" :class="{ 'jump': isJumping }" src="./assets/AdminLTELogo.png" width="125" height="125" />
  <div>
    <p class="header">Количество нажатий: {{ this.count}}</p>
    <vue-button label="Нажми на меня" @click="addClick"></vue-button>
  </div>
</template>

<script>
import Button from 'primevue/button';

export default {
    data() {
        return {
            count: 0,
            isJumping: false
        };
    },
    components: {
      'vue-button': Button
    },
    methods: {
      addClick(){
        this.count++;

        this.isJumping = true;

        setTimeout(() => {
          this.isJumping = false;
        }, 500); // Установите время анимации здесь
      }
    }
};

</script>

<style scoped>
header{line-height:1.5}.logo{display:block;margin:0 auto 2rem}.box{transition:transform .5s}.jump{transform:translateY(-20px)}@media (min-width: 1024px){header{display:flex;place-items:center;padding-right:calc(var(--section-gap) / 2)}.logo{margin:0 2rem 0 0}header .wrapper{display:flex;place-items:flex-start;flex-wrap:wrap}}
</style>
