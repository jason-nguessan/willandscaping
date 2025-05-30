
<script>
import AnimatedCounter from 'vue-animated-counter'

export default {
    name: "Best3AchievementsCounter",
    components: {
        AnimatedCounter
    },
    props: {
        leftPoint:{
            number:Number, 
            name: String,
            duration: Number
        },
        middlePoint: {
            number: Number, 
            name: String, 
            duration: Number
        }, 
        rightPoint: {
            number: Number, 
            name: String,
            duration:Number 
        }

     
        
    },
    mounted() {
    },
    computed: {
        
    }

    

}
</script>
<template>

<div class="flex flex-row justify-around "> 

  
<div class="flex flex-col w-3/12 items-center "> 

        <ClientOnly class="pb-10">
            
      <div class="flex flex-row  "> 
      
            <AnimatedCounter :value=leftPoint.number  :duration="leftPoint.duration || 750" class="  sm:text-5xl/10 text-ternary-light font-general-semibold lg:text-15xl/10 h-2 text-5xl/10" />
 <p 	class="sm:text-5xl/10 text-ternary-light font-general-semibold lg:text-15xl/10 h-2 text-5xl/10  ">
          +
  </p>
  </div>
        </ClientOnly>


            <p 	class="font-general-regular text-ternary-light dark:text-ternary-light sm:mt-2 mt-5 ">
        {{ leftPoint.name }}
  </p>

  
              
              
</div>

<div class="flex flex-col w-3/12 items-center "> 

        <ClientOnly class="pb-10">
            
      <div class="flex flex-row  "> 
      
            <AnimatedCounter :value=middlePoint.number  :duration="middlePoint.duration || 1000" class="  sm:text-5xl/10 text-ternary-light font-general-semibold lg:text-15xl/10 h-2 text-5xl/10" />
 <p 	class="sm:text-5xl/10 text-ternary-light font-general-semibold lg:text-5xl/10 h-2 text-5xl/10  ">
          +
  </p>
  </div>
        </ClientOnly>


            <p 	class="font-general-regular text-ternary-light dark:text-ternary-light sm:mt-2 mt-5">
        {{ middlePoint.name }}
  </p>

  
              
              
</div>

<div class="flex flex-col w-3/12 items-center "> 

        <ClientOnly class="pb-10">
            
      <div class="flex flex-row  "> 
      
            <AnimatedCounter :value=rightPoint.number  :duration="rightPoint.duration || 1000" class="  sm:text-5xl/10 text-ternary-light font-general-semibold lg:text-15xl/10 h-2 text-5xl/10" />
 <p 	class="sm:text-5xl/10 text-ternary-light font-general-semibold lg:text-5xl/10 h-2 text-5xl/10  ">
          +
  </p>
  </div>
        </ClientOnly>


            <p 	class="font-general-regular text-ternary-light dark:text-ternary-light sm:mt-2 mt-5 ">
        {{ rightPoint.name }}
  </p>

  
              
              
</div>
</div>
</template>

<style scoped>

</style>