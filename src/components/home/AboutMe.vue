<script> 
import TopPartLeft from '../../components/home/reusable/TopPartLeft.vue';
import AppHeaderLinks from '../shared/AppHeaderLinks.vue';
import ProfileBox from './reusable/ProfileBox.vue'
import MenuTopRightTitle from '../../components/home/reusable/MenuTopRightTitle.vue';

export default{
    components: {
        TopPartLeft,
        AppHeaderLinks,
        ProfileBox,
        MenuTopRightTitle
    },
       
    data(){
     return  {

        canDo: ['Getting your business in front of clients', 'Architecting & Developing a Most Viable Product', 'Scaling your application'],
        count : 0,
     } 
       
    },


    mounted(){
    
    window.setInterval(()=>{
      this.changeText()
    }, 5000);

  },
  methods:{


    changeText(){
      const first = this.canDo.shift()
      this.canDo = this.canDo.concat(first)
      this.count += 1
    }
    
  },

}


</script>

<template> 
       		<MenuTopRightTitle  class="mt-0" title="My Intro"  /> 



    
        <div class="flex flex-col sm:flex-row sm:min-h-screen w-full sm:justify-between sm:items-center sm:-mt-32 " >
            <!-- Text Part  -->
            <div class="flex sm:w-5/12 w-full justify-between">

              <Transition name="slide-fade" appear>
                <div>

       
                <TopPartLeft class="" left="Hi, my name is Hi, my name is  my name is Hi, my name ismy name is Hi, my name ismy name is Hi, my name ismy name is Hi, my name ismy name is Hi, my name ismy name is Hi, my name ismy name is Hi, my name is" middle="Will" right="" /> 
         <br>

    
                <TopPartLeft  left= "" middle="Landscaper" right="" /> 
                <br>

   
                <br>
                

                <!-- <AppHeaderLinks  :isOpen="false" />  -->
              </div>
              </Transition>


      

            </div>
            
            <!-- <div class="sm:w-11/12 relative ">

            <TopPartLeft  class="" :key=count  left="I can help with " :middle="canDo[0]"  overrideClassLeft="font-general ml-2" overrideClassMiddle='text-l/10 font-general-semibold ml-2' right="." overrideClassRight=" font-general mt-1" /> 
            </div> -->
            <div>

            <div >

            </div>


          </div>


              <Transition name="slide-fade" style="transition: all 7s ease-out ;"  appear>

 <div class=" sm:hidden flex flex-row  rounded-xl justify-around bg-white  lg:w-auto    "> 
          
<div class="flex flex-col justify-center items-center "> 
  
  <!-- <ProfileBox  :list="leftVouchBoxYOE" class="bg-white py-2" topClass="px-5 py-5 rounded-xl  justify-around shadow-lg my-5 mx-5" />  -->



  <div class="lg:h-96 lg:w-80 h-72 w-60 bg-cover shadow-2xl z-40  rounded-xl m-10" style=" background-position-y: 35%;
    border-radius: 0%;" id="avatar1"></div>

</div>
</div>

              </Transition>

              <Transition name="slide-fade" style="transition: all 7s ease-out ;"  appear>

  
  <div class="hidden sm:flex lg:flex-row flex-col h-full   mr-52  rounded-xl justify-around bg-white  lg:w-auto   "> 
          
<div class="flex flex-col justify-center items-center"> 
  
  <!-- <ProfileBox  :list="leftVouchBoxYOE" class="bg-white py-2" topClass="px-5 py-5 rounded-xl  justify-around shadow-lg my-5 mx-5" />  -->



  <div class="lg:h-96 lg:w-80 h-72 w-60 bg-cover shadow-2xl z-40  rounded-xl m-10" style=" background-position-y: 35%;
    border-radius: 0%;" id="avatar1"></div>

</div>







        <!-- <div class="justify-end " id="avatar"></div> -->
         
              <!-- <AppHeaderLinks   :isOpen="false"  :showDash="true" />   -->

       </div>
       </Transition>

            </div>
      


              
</template>

<style scoped>




#avatar1 {
    /* This image is 687 wide by 1024 tall, similar to your aspect ratio */
 /*   background-image: url('@/assets/photos/me/portraitredwhite.jpg'); */

      background-size: cover;
}


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


</style>