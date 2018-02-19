<template>
	<div>
    	<megafon :operatorExpected="operator"/>
    </div>
</template>

<script>

	export default{
		name:'Megafon',
		components:{
			megafon: ()=> import ('@/components/megafon.vue')
		},
		data:function(){
			return {
				operator:null
			}
		},
		methods:{
			setOperator(){
				console.log(this.$route.params.id);
				switch (this.$route.params.id){ 
					case '1':
						this.operator = 'Megafon';
						break;
					case '2':
						this.operator = 'Beeline';	
						break;
					case '3':
						this.operator = 'MTS';	
						break;
				}
			}
		},
		beforeUpdate:function(){
			this.setOperator()
		}
	}
</script>