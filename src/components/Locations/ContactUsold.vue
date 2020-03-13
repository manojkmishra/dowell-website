<template>
<div class="modal fade bannerformmodal" tabindex="-1"  role="dialog" 
aria-labelledby="bannerformmodal" aria-hidden="true" id="bannerformmodal">
<div class="modal-dialog modal-lg">
    <div class="modal-content">
        <div class="modal-header">
            <img src="../../assets/images/About/dowell.png" alt="Dowell Windows and Doors">
            <h3 class="modal-title" id="myModalLabel">Enquiry Form</h3>
        </div>
    <div class="modal-body">
        <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 states">
            <div class="card border-0 ">
               <!-- <h6 class="text-center">Please select your state</h6> -->
                <div class="grey card-header p-2 border-0 rounded-0 ">
                    <ul class="nav nav-pills ">
                        <li class="nav-text nav-item"><a class="nav-link black rounded-0 active" href="#vic" data-toggle="tab">VIC</a></li>
                        <li class="nav-text nav-item"><a class="nav-link black rounded-0" href="#qld" data-toggle="tab">QLD</a></li>
                        <li class="nav-text nav-item"><a class="nav-link black rounded-0" href="#nsw" data-toggle="tab">NSW</a></li>
                        <li class="nav-text nav-item"><a class="nav-link black rounded-0" href="#tas" data-toggle="tab">TAS</a></li>
                        <li class="nav-text nav-item"><a class="nav-link black rounded-0" href="#act" data-toggle="tab">ACT</a></li>
                        <li class="nav-text nav-item"><a class="nav-link black rounded-0" href="#wa" data-toggle="tab">WA</a></li>
                        <li class="nav-text nav-item"><a class="nav-link black rounded-0" href="#sa" data-toggle="tab">SA</a></li>
                    </ul>
                </div>
                <div class="card-body">
                    <div class="tab-content">
                        <TAS/><VIC/><WA/><NSW/><ACT /><QLD /><SA /><TAS />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card border-0">
                <h6 class="card-header text-center"> Please select your state above</h6>
                <div class="card-body">
            <form class="fform">
                <div class="form-group"> 
                    <input  type="text" class="form-control" placeholder="Name"
                    v-model.trim="$v.formData.name.$model"
                    :class="{'is-invalid':$v.formData.name.$error,'is-valid':!$v.formData.name.$invalid}" />
                   <!--  <span>{{$v.formData.name}}</span> -->
                    <div class="valid-feedback">Your name is valid</div>
                    <div class="invalid-feedback">
                        <span v-if="!$v.formData.name.required">Name is required.</span>
                        <span v-if="!$v.formData.name.minLength">Name must have atleast {{$v.formData.name.$params.minLength.min}} letters.</span>
                        <span v-if="!$v.formData.name.maxLength">Name must be less than {{$v.formData.name.$params.maxLength.max}} letters.</span>
                    </div>
                </div>
                <div class="form-group"> 
                    <input  type="email"  class="form-control" placeholder="Email" v-model="formData.email"
                        :status="$v.formData.email.$error ? 'error' : null"
                        @blur="$v.formData.email.$touch()" 
                         :class="{'is-invalid':$v.formData.email.$error,'is-valid':!$v.formData.email.$invalid}"/>
                  <!--  <span>{{$v.formData.email}}</span> -->
                    <div class="valid-feedback">Your email is valid</div>
                    <div class="invalid-feedback">                       
                        <span v-if="!$v.formData.email.required">Email is required.</span>
                        <span v-if="!$v.formData.email.email">Invalid Email.</span>                        
                    </div>
                </div>
               
                <div class="form-group"><input type="text" class="form-control" placeholder="Mobile" 
                 v-model.trim="$v.formData.mobile.$model"
                    :class="{'is-invalid':$v.formData.mobile.$error,'is-valid':!$v.formData.mobile.$invalid}" />
                    <div class="valid-feedback">Your Phone is valid</div>
                    <div class="invalid-feedback">                       
                        <span v-if="!$v.formData.mobile.required">Phone/Mobile no is required.</span>
                        <span v-if="!$v.formData.mobile.numeric">Must be numeric</span>
                        <span v-if="$v.formData.mobile.numeric && !$v.formData.mobile.minLength"> Must have atleast {{$v.formData.mobile.$params.minLength.min}} digits.</span>
                        <span v-if="$v.formData.mobile.numeric && !$v.formData.mobile.maxLength"> Must be less than {{$v.formData.mobile.$params.maxLength.max}} digits.</span>
                        
                      <!--  <span v-if="!$v.formData.mobile.phone">Must be phone</span>      -->                       
                    </div>
                    </div>
               
               
                <div class="form-group"><input  type="text" class="form-control" placeholder="Company Name" v-model="formData.company" /></div>
                <div class="controls"> <textarea name="comments" class="form-control" placeholder="Message (Max Length 100)" maxlength="100" v-model="formData.message" 
                  ></textarea>
                </div>
           </form>
        </div>       
     
      
            <vue-recaptcha class="captch" @verify="markRecaptchaAsVerified"
                    sitekey="6LeAn-AUAAAAALGWQ76zWJs6L459veVQCARfvl5v"></vue-recaptcha>
                     </div>
                    </div>
     </div>
    </div><!--card end-->
            <div class="modal-footer">
                <div><strong>{{ formData.pleaseTickRecaptchaMessage }}</strong></div>
                <button type="button" class="btn btn-sm btn-primary" @click.prevent="checkIfRecaptchaVerified()" >Submit</button>
                <button type="button" class="btn btn-sm btn-danger" data-dismiss="modal">Close</button>
            </div>          
    </div>
</div></div>
</template>
<script>
import VIC from './VIC1'
import TAS from './TAS'
import WA from './WA'
import NSW from './NSW'
import ACT from './ACT'
import QLD from './QLD'
import SA from './SA'
import ALL from './ALL'
import VueRecaptcha from 'vue-recaptcha'
import {required, minLength, maxLength, between, email, numeric} from 'vuelidate/lib/validators'
import axios from "axios";
const $ = require('jquery')
window.$ = $
require('jquery-confirm')

export default {
    components: { ALL,VIC, TAS,  WA,  NSW, ACT, QLD, SA ,VueRecaptcha},
     data(){ return {formData: {
            recaptchaVerified: false,
            pleaseTickRecaptchaMessage: '',
            name:'', company:'', mobile:'', message:''
                    },   }
            },
    validations:{
        formData:{
            name:{required, minLength:minLength(3),maxLength:maxLength(50)},
              //company:{required, minLength:minLength(3),maxLength:maxLength(20)},
            mobile:{required,numeric,minLength:minLength(9),maxLength:maxLength(10)    },
            email:{required,email },
        }
    },
    methods: 
    {   markRecaptchaAsVerified(response) 
                {   this.formData.pleaseTickRecaptchaMessage = '';
                    this.formData.recaptchaVerified = true;
                    console.log('markRecaptchaAsVerified--res,lgfm',response,this.formData)
                },
                async checkIfRecaptchaVerified() 
                {    this.$v.formData.$touch();
               
                    console.log('validation ', this.$v.formData); 
                    if(this.$v.formData.name.$invalid || this.$v.formData.email.$invalid)
                    {
                        console.log('not validated'); 
                        this.formData.pleaseTickRecaptchaMessage = 'Please fill the form.';
                        return;
                    }
                    else{ console.log('validated-check captcha');  
                            if (!this.formData.recaptchaVerified) 
                            {   this.formData.pleaseTickRecaptchaMessage = 'Please tick recaptcha.';
                                console.log('checkIfRecaptchaVerified-not verified, lgnform',this.formData)
                                return true; // prevent form from submitting
                            }
                            console.log('all ok',this.formData)
                           // resp=axios.post('http://127.0.0.1:8000/sendemail1',this.formData); 
                            let resp= await axios.post('https://uat.oms.dowell.com.au/api/sendemail1',this.formData);
                             console.log('signin res=',resp);
                             alert('Message Sent!');
 
                             $('#bannerformmodal').modal('hide');
                             return false;

                        }

                    
                },

        resetFormData() {  this.formData = { recaptchaVerified: false,  pleaseTickRecaptchaMessage: '',  comment: ''  }; }
    },
   

 // }
}
</script>
<style scoped>
.states{
    height:40vh;
    overflow-y:scroll;
}
.fform{
    padding:1rem 2rem .5rem;
    
}
img{
display:inline-block;
padding-top:12px;
padding-left:12px;}
.modal-title{}
.selectsate{margin:0 auto;
text-align:center
}
.captch{ 
    margin:0 auto;
    padding-bottom:1rem;
  
}

input:focus::placeholder {
  color: transparent;
}
textarea:focus::placeholder {
  color: transparent;
}

.btn.btn-danger {
  color: #fff;
  background-color: #df4b4b;

  outline: none;
}
</style>