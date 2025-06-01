

<script>
import MenuTopRightTitle from './reusable/MenuTopRightTitle.vue';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import feather from 'feather-icons';
import quote22 from '@/assets/photos/quotes/quote22.png'
import quote31 from '@/assets/photos/quotes/quote31.png'
import quote11 from '@/assets/photos/quotes/quote11.png'

import p1 from '@/assets/photos/will/1.jpg'
import p2 from '@/assets/photos/will/2.jpg'
import p3 from '@/assets/photos/will/3.jpg'
import p4 from '@/assets/photos/will/4.jpg'
import p5 from '@/assets/photos/will/5.jpg'
import p6 from '@/assets/photos/will/6.jpg'
import p7 from '@/assets/photos/will/7.jpg'
import p8 from '@/assets/photos/will/8.jpg'

import edcbdc from '@/assets/photos/work/edc-bdc.jpeg'
import hackinghealth from '@/assets/photos/work/hacking-health.jpeg'

import techinguoguelph from '@/assets/photos/work/teaching-uoguelph.png'
import { useElementVisibility } from '@vueuse/core'
import { useTemplateRef } from 'vue'
    const target = useTemplateRef<HTMLDivElement>('target')

// src/assets/photos/work/youtube-vcity.jpg
//       src/assets/photos/work/thirdplace-university-uog.png
//       src/assets/photos/work/edc-bdc.jpeg
//       src/assets/photos/work/hacking-health.jpeg
//       src/assets/photos/work/teaching-uoguelph.png

const targetIsVisible = useElementVisibility(target)

export default{
    components: {
        MenuTopRightTitle,
        VueperSlides,
        VueperSlide
    
    },





	updated() {
		feather.replace();
	},



  mounted () {
    window.addEventListener('scroll', this.runOnScroll);

this.transition = targetIsVisible

console.log(this.transition)
    this.transformSlide()
    feather.replace();

  },  

  methods:{
runOnScroll() {
      console.log('scroll!');

          window.removeEventListener('scroll', this.runOnScroll);


          this.transition = true

    },

    
    updateSlides(isLeft){

      let maxSlide = this.slides.length - 1
      if(isLeft){
        if(this.currSlideIndex <= 0){
         this.currSlideIndex = maxSlide
        }
        else{
          this.currSlideIndex -= 1
        }
      
      }
      else{

        if(this.currSlideIndex >= maxSlide){
         this.currSlideIndex = 0
        }
        else{
          this.currSlideIndex += 1
        }
      }
      
      const slides = document.querySelectorAll('.slide')
      slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100* (indx - this.currSlideIndex )}%)`;
      });

      
    },


  logEvents (eventName, params) {
    this.events += `<strong>${eventName}</strong>, ${JSON.stringify(params)}<br>`
    console.log(this.events)
    console.log(eventName)
    if(params.currentSlide.image == quote22){
      this.slideRatio = "0.21"
    }

  else  if(params.currentSlide.image == quote31){
      this.slideRatio = "0.21"
    }
    else{

      this.slideRatio = "0.33"

    }


    
    
    //src/assets/photos/quotes/quote11.pn
    //    console.log(params.currentSlide.image)
      //  if(params.currentSlide.image == )

  },


    transformSlide(){
      const slides = document.querySelectorAll('.slide')
      slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;

  
  });


}
  },
  
data: () => ({

  transition: false,
  
  currSlideIndex : 0,
  slides: [

  {
      title: 's',
      href:"ss",
      content: 'insert content',
      image:  p1

    },
   {
      title: 's',
      href:"ss",
      content: 'insert content',
      image:  p2

    },
   {
      title: 's',
      href:"ss",
      content: 'insert content',
      image:  p3

    },
   {
      title: 's',
      href:"ss",
      content: 'des',
      image:  p4

    },
   {
      title: 's',
      href:"ss",
      content: 'des',
      image:  p5

    },
   {
      title: 's',
      href:"ss",
      content: 'des',
      image:  p6

    },
   {
      title: 's',
      href:"ss",
      content: 'des',
      image:  p7

    },
   {
      title: 's',
      href:"ss",
      content: 'des',
      image:  p8

    },
   
 
   
  
  ],

    
  events: "",

slideRatio: "0.21",
slidesVueper: [

{

// You can also provide a URL for the image.
image: quote11
},

{

// You can also provide a URL for the image.
image: quote31
},

{
// You can also provide a URL for the image.
image: quote22
},



],

})


}
</script>


<template>

    <div class="flex flex-col sm:min-h-screen "  >
 

      <MenuTopRightTitle title="My Photos"  /> 

      <div class="flex sm:flex-col mt-0 flex-col justify-center items-center  " ref="target">


    <div class="slider  min-w-full sm:min-h-screen   h-96">

    
  
      <div class="slide sm:min-w-full  sm:min-h-screen h-96" v-for="slide,i in slides" :key="i">


        <img
          :src=slide.image
          alt=""
          class="object-contain"
        />

      </div>

    

     
    </div> 




    <div class="flex flex-col items-center justify-between sm:w-1/2 w-full">

      <div class="md:hidden flex sm:justify-center  sm:w-12/12 sm:p-5 sm:mt-5 mb-5">
     <!-- Control buttons -->
     <button @click="updateSlides(true)" class="btn btn-prev mr-20" >
      
      <i
						data-feather="arrow-left"
						class="duration-100"
					></i>
      
    </button>
     
     <button  
     @click="updateSlides(false)"
     class="btn btn-next"> 	<i
						data-feather="arrow-right"
						class="duration-100 "
					></i> </button>


   
    </div>


                                              <Transition name="slide-fade" v-if="transition"     appear >

   <div> 

      <p class="font-general-semibold text-ternary-light dark:text-ternary-light sm:text-4xl md:text-2xl text-xl  sm:mx-8 mx-0 mt-8">
         {{ slides[currSlideIndex].title }}

         
      
</p>

      





<br>


<span info.href  class="font-general-regular bg-center justify-center text-ternary-light text-center sm:text-3xl md:text-xl text-lg  leading-loose dark:text-ternary-light mx-8 my-auto "  >
                            <p target="_blank" > {{ slides[currSlideIndex].content }}</p>
                        </span>

  
   </div>

               </Transition>

 

      
      
</div>
  

    
    
 

   


    
    </div>

    
    <div class="hidden md:flex md:justify-around md:w-12/12 md:p-5 md:pl-5 h-full ">

<p class="font-general-regular  bg-center  text-ternary-light text-start text-2xl md:text-lg  leading-loose dark:text-ternary-light mx-8 mt-auto">
         {{ currSlideIndex + 1}} / {{ slides.length  }} </p>


       
     <!-- Control buttons -->
    <div> 
     <button @click="updateSlides(true)" class="btn btn-prev mr-20 mb-10" >
      
      <i
						data-feather="arrow-left"
						class="duration-100"
					></i>
      
    </button>
     
     <button  
     @click="updateSlides(false)"
     class="btn btn-next"> 	<i
						data-feather="arrow-right"
						class="duration-100 "
					></i> </button>


   
    </div>
    
   </div>



<!-- Hide only on small screens -->



<!-- show only on small screens -->


  </div>
     <!-- V City (Explain ), Hacking Health,  Slide Bar (DSC), Hacking Agrifarm, Def Hacks (Def Hacks)  -->      <!-- Italic Text of what's been done -->

   
</template>



<style scoped>



.slide-fade-enter-active {
  transition: all 2s ease-out ;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}

@media (min-width: 640px) {
    .sm\:min-h-screen {
        min-height: 70vh;
    }
}


.sliderHeight {
  
  max-width: 800px;
  overflow: hidden;
  min-height: 80vh;
}

.slider {
  max-width: 800px;
  position: relative;
  overflow: hidden;
}

.slide {
  width: 100%;
  max-width: 800px;
  position: absolute;
  transition: all 0.5s;
}


.slide img {
  width: 100%;
  height: 100%;
  background-size: contain;
}


.btn {
  
  position: relative;
  width: 40px;
  height: 40px;
  padding: 8px;
  border: none;
  border-radius: 50%;
  z-index: 10px;
  cursor: pointer;
  background-color: #fff;
  font-size: 18px;
}

.btn:active {
  transform: scale(1.1);
}

.btn-prev {
  top: 45%;
}

.btn-next {
  top: 45%;
}

</style>


<style> 


.vueperslides__fractions {
    position: absolute;
    top: 0.8em;
    left: 90%;
    z-index: 2;
    padding: 0.2em 1em;
    border: 1px solid rgba(255,255,255,.5);
    border-radius: 2em;
    background: rgb(0, 0, 0);
    color: #eeee;
}
.vueperslides__progress {
  background: rgb(0, 0, 0);
  color: rgb(255, 255, 255)
  
}

.vueperslides__bullet .default {
  background-color: rgb(255, 255, 255);
  border: none;
  box-shadow: none;
  transition: 0.3s;

}


.vueperslides__bullet--active .default {
   --tw-bg-opacity: 1;
    background-color: rgb(199 210 254 / var(--tw-bg-opacity))}


</style>



