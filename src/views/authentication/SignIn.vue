<template lang="">
    <v-container>
        <v-row align="center" justfy='center'>
            <v-col cols='12' sm='10'>
                <v-card class='elevation-6 mt-10'>
                    <v-window v-model='step'>
                        <v-window :value='1'>
                            <v-row>
                                <v-col cols='12' sm='8'>
                                    <v-card-text class='mt-12'>
                                        <h4 class='text-center'>Login in to Your Account</h4>
                                        <h6 class='text-center grey--text'>Login in to Your Account so you continue building
                                            <br/>and editing your onboarding flows
                                        </h6>
                                        <v-row align='center' justfy='center'>
                                            <v-col cols='12' sm='10' align='center'>
                                                <v-text-field label="Email" outlined dense cdlor='blue' autocomplete='false' class='mt16'> 
                                                </v-text-field>
                                                <v-text-field label="Password" outlined dense cdlor='blue' autocomplete='false' type='password'>
                                                </v-text-field>
                                            
                                                <v-row>
                                                    <v-col cols="12" sm='5'>
                                                        <v-checkbox label='Remember Me' class='mt-n1' color='blue'></v-checkbox>
                                                    </v-col>
                                                    <v-col cols='12' sm='5'>
                                                        <span class='catption blue--text'>Forget password</span>
                                                    </v-col>
                                                </v-row>
                                                <v-btn color='blue' dark black title>Login</v-btn>
                                                <h5 class='text-center grey--text mt-4 mb-3'>or Login using</h5>
                                                <div class='d-flext justify-space-between align-center mx-10 mb-16'>
                                                    <v-btn depressed outlined color='grey'>
                                                        <v-icon color='red'>mdi-google</v-icon>
                                                    </v-btn>
                                                     <v-btn depressed outlined color='grey'>
                                                        <v-icon color='blue'>mdi-facebook</v-icon>
                                                    </v-btn>
                                                     <v-btn depressed outlined color='grey'>
                                                        <v-icon color='light-blue lighten-3'>mdi-twitter</v-icon>
                                                    </v-btn>                                                        
                                                </div>
                                            </v-col>
                                            
                                        </v-row>
                                    </v-card-text>
                                </v-col>
                                <v-col cols='12' sm='4' class='indigo rounded-bl-circle'>
                                    <div style="text-align:center; padding: 100px 0">
                                        <v-card-text class="white--text">
                                            <h3>계정이 없으신가요?</h3>
                                            <h6>계정을 등록해 주세요.</h6>
                                        </v-card-text>
                                        <v-btn style="text-align:center" @click="signUp">회원등록</v-btn>
                                    </div>
                                </v-col>
                            </v-row> 
                        </v-window> 
                    </v-window>
                </v-card>
                
            </v-col>
            </v-row>
    </v-container>
                    
</template>
<script>
export default {
    data :() =>{
        return{
            
        }

    },
    methods:{
        signUp(){ alert('회원등록')
        }
    }
}
</script>
<style lang="">
    
</style>