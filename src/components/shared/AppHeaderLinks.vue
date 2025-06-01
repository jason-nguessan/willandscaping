<script>
import MenuTopRightTitle from '../home/reusable/MenuTopRightTitle.vue'

export default {
	components: {
        MenuTopRightTitle,
        
        
    
    },

	props: ['showModal', 'isOpen', 'showDash'],
};
</script>

<template>
	<!-- Header links -->
	<div
		:class="isOpen ? 'block' : 'hidden'"
		class="m-0 sm:ml-4 sm:flex p-5 flex-col sm:p-0 justify-center items-start shadow-lg sm:shadow-none"
	>

	
		<router-link
			to="#"
			aria-label="Intro"
			v-scroll-to="'#Intro'"

			>
			<MenuTopRightTitle  :position="showDash == true ? 'end' : 'start' " :title="(showDash == true ? '-' : '') +  ' My Intro'"   :showHr="false"  /> 
			</router-link
		>

		<router-link
			to="#"
			aria-label="Photos"
			v-scroll-to="'#Photos'"

			>
			<MenuTopRightTitle :position="showDash == true ? 'end' : 'start' "  :title="(showDash == true ? '-' : '') +  ' My Photos'"  :showHr="false"  /> 
			</router-link
		>


		<router-link
			to="#"
			aria-label="Reviews And SUMMARY"
			v-scroll-to="'#ReviewsAndSummary'"			>
			<MenuTopRightTitle :position="showDash == true ? 'end' : 'start' " :title="(showDash == true ? '-' : '') +  ' My Reviews and Summary'"   :showHr="false"   /> 
			</router-link
		>

		


	
	
	

	


	

		
	
	</div>
</template>

<style lang="scss" scoped></style>
