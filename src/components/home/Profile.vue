<script>

import MenuTopRightTitle from './reusable/MenuTopRightTitle.vue'
import AnimatedCounter from 'vue-animated-counter'
import Best3AchievementsCounter from './reusable/Best3AchievementsCounter.vue'
import TopPartLeft from '../../components/home/reusable/TopPartLeft.vue';

export default {
    components: {
        MenuTopRightTitle,
        Best3AchievementsCounter,
        AnimatedCounter,
                TopPartLeft,

    
    },


    methods: {

  
  
 
  
  },
  mounted(){
        window.addEventListener('scroll', this.runOnScroll);

    window.setInterval(()=>{
      this.changeText()
    }, 5000);

  },
  methods:{
runOnScroll() {
      console.log('scroll2!');

          window.removeEventListener('scroll', this.runOnScroll);


          this.transition = true

    },

    changeText(){
      const first = this.canDo.shift()
      this.canDo = this.canDo.concat(first)
      this.count += 1
    }
    
  },
    data: () => (

  
      
        {

          transition: false,

          leftPoint: {
              
              number: 100,
              name: "Seasons"
            
            
          },
          rightPoint: {
              
              number: 50,
              name: "Projects"
            
            
          },

                    middlePoint: {
              
              number: 5,
              name: "Cities"
            
            
          },
       canDo: [
        {
        name: "Jason",
        quote: "He was the best landscaper, took out the weeds first",
                location: "Toronto, Canada",

        year: "2025"
        },
      
      ],
       
        count : 0,

        
          
         
        
          
     

        })}

     
        
        
      
      
        
    
</script>

<template>

<div>


		<MenuTopRightTitle  class="" title="My Reviews & Summary"  /> 

      <transition v-show="transition" name="slide-fade" mode="out-in" appear class="mt-5 t" >

        <div> 



<div class="lg:inner-spacing flex flex-col justify-around  "> 

<Best3AchievementsCounter :leftPoint="leftPoint" :middlePoint="middlePoint"  :rightPoint="rightPoint"/> 

			<!-- <Transition name="slide-fade" appear :key="2"> 


        
      </Transition> -->

               <br> 

                              <br> 




 <div class=" sm:hidden flex flex-row  rounded-xl justify-around bg-white  lg:w-auto    "> 
          
<div class="flex flex-col justify-center items-center"> 
  
  <!-- <ProfileBox  :list="leftVouchBoxYOE" class="bg-white py-2" topClass="px-5 py-5 rounded-xl  justify-around shadow-lg my-5 mx-5" />  -->



  <div class="lg:h-96 lg:w-80 h-72 w-60 bg-cover shadow-2xl z-40  rounded-xl m-10" style=" background-position-y: 35%;
    border-radius: 0%;" id="avatar1"></div>

</div>
</div>

<div class="flex flex-row justify-center w-full"> 

  <div id="avatarbg" class="hidden sm:flex lg:flex-row flex-col max-w-sm  rounded-xl justify-around bg-white  lg:w-auto    "> 
          
<div class="flex flex-col justify-center items-center"> 
  
  <!-- <ProfileBox  :list="leftVouchBoxYOE" class="bg-white py-2" topClass="px-5 py-5 rounded-xl  justify-around shadow-lg my-5 mx-5" />  -->



  <div class="lg:h-96 lg:w-80 h-72 w-60 bg-cover shadow-2xl z-40  rounded-xl m-10" style=" background-position-y: 35%;
    border-radius: 0%;" id="avatar1"></div>

</div>
</div>

</div>
               <br> 

</div>

  <transition :key="count" name="slide-fade" mode="out-in" appear class="mt-5 t" >


  <div class="flex flex-col  items-center justify-evenly">

    
    <div class="flex flex-row ">

      
    <p  class="text-ternary-light  font-general-normal  sm:text-2xl/10 text-lg/10 mb-4"  >(</p>

<p  class="text-ternary-light  font-general-semibold  sm:text-2xl/10 text-lg/10 mb-4 italic"  > {{canDo[0].year}}</p>
<p  class="text-ternary-light  font-general-normal  sm:text-2xl/10 text-lg/10 mb-4"  >)</p>
    </div>


    
    <div class="flex flex-row  ">

<p  class="text-ternary-light  font-general-semibold  sm:text-2xl/10 text-lg/10 mb-4  "  > {{ canDo[0].name }}  </p>
<p  class="text-ternary-light  font-general-normal  sm:text-2xl/10 text-lg/10 mb-4 mx-5"  > from</p>
<p  class="text-ternary-light  font-general-semibold  sm:text-2xl/10 text-lg/10 mb-4  "  > {{ canDo[0].location }}  </p>
</div>
<p  class="text-ternary-light  font-general-normal  sm:text-xl/10 text-lg/10 mb-4 "  > -</p>
    <div class="flex flex-row ">

<p  class="text-ternary-light  font-general-normal  sm:text-xl/10 text-lg/10 mb-4 mr-0"  >"</p>
  <p  class="text-ternary-light  font-general-semibold  sm:text-xl/10 text-lg/10 mb-4 italic"  >{{ canDo[0].quote }}</p>
<p  class="text-ternary-light  font-general-normal  sm:text-xl/10 text-lg/10 mb-4  "  >"</p>
</div>

  </div>
</transition>
        </div>
</transition>

</div>



</template>


<style scoped>




#avatar1 {
    /* This image is 687 wide by 1024 tall, similar to your aspect ratio */
    /* background-image: url('@/assets/photos/me/portraitredwhite.jpg'); */

      background-size: cover;
}
.slide-fade-enter-active {
  transition: all 0.10s ease-out ;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}

</style>

<style>

</style>