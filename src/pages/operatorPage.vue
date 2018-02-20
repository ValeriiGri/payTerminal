<template>
	<div>
    	<operator v-bind:operatorExpected="operator"></operator>
    </div>
</template>

<script>

	export default{
		name:'Operator',
		components:{
			operator: ()=> import ('@/components/operator-form.vue'),
		},
		data:function(){
			return {
				operator:null
			}
		},
		//следит за изменением пути и запускает при изменении setOperator 
		watch:{
			'$route':'setOperator'
		},
		methods:{
			setOperator(){
				switch (this.$route.params.id){ 
					case '1':
						this.operator = {	title:'Megafon',
											number:0,
											sum:0
										}
						break;
					case '2':
						this.operator = {	title:'Beeline',
											number:0,
											sum:0
										}	
						break;
					case '3':
						this.operator = {	title:'MTS',
											number:0,
											sum:0
										}	
						break;
				}
			}
		}
	}
</script>