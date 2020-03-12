<template>
    <div class="modal fade bannerformmodal" tabindex="-1" role="dialog" aria-labelledby="bannerformmodal" aria-hidden="true" id="bannerformmodal">
<div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-content">
                <div class="modal-header">
                <img src="../../assets/images/About/dowell.png" alt="Dowell Windows and Doors">
                <h3 class="modal-title" id="myModalLabel">Enquiry Form</h3>
                </div>
                <div class="modal-body">
                    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 states">
            <div class="card border-0 ">
                <h6 class="text-center">Please select your state</h6>
                <div class="grey card-header p-2 border-0 rounded-0 ">
                    <ul class="nav nav-pills ">
                      <!--  <li class="nav-text nav-item"><a class="nav-link black rounded-0 active" href="#all" data-toggle="tab">ALL</a></li> -->
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
                         <!-- <ALL/>-->
                    </div>
                </div>
            </div>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <form id="requestacallform" class="fform" name="requestacallform" >
                    <div class="form-group">
                                    <div class="input-group"> 
                                    <input id="first_name" type="text" class="form-control" placeholder="Name" name="first_name"/>
                                    </div>
                              </div>
                                <div class="form-group">
                                    <div class="input-group">                               

                                    <input id="email1" type="text" class="form-control" placeholder="Email" name="email1" onchange="validateEmailAdd();"/>
                                    </div>
                              </div>
                              <div class="form-group">
                                    <div class="input-group">                               

                                    <input id="company_name_c" type="text" class="form-control" placeholder="Company Name" name="company_name_c"/>
                                    </div>
                              </div>
                                <div class="form-group">
                                    <div class="input-group">                               

                                    <input id="phone_mobile" type="text" class="form-control" placeholder="Mobile" name="phone_mobile"/>
                                    </div>
                              </div>
                      <!--      <div class="form-group">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-building-o"></i></span>
                                        <select class="form-control selectpicker" name="monthly_rental">
                                            <option>Select</option>
                                            <option>10-50</option>
                                            <option>50-100</option>
                                            <option>100-200</option>
                                            <option>200-500</option>
                                            <option>500+</option>
                                        </select>
                                    </div>
                            </div>  -->
                                <div class="control-group">
                                    <div class="controls">                     
                                               <textarea name="comments" class="form-control" placeholder="Message" maxlength="50" ></textarea>
                                    </div>
                                </div>

                            </form>
            </div></div>
                  </div>
            <vue-recaptcha class="captch" @verify="markRecaptchaAsVerified"
            sitekey="6LeAn-AUAAAAALGWQ76zWJs6L459veVQCARfvl5v"></vue-recaptcha>
              <div class="modal-footer">
                  <div><strong>{{ loginForm.pleaseTickRecaptchaMessage }}</strong></div>
                <button type="button" class="btn btn-blue" @click.prevent="checkIfRecaptchaVerified">Submit</button>
                 <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              </div>          
        </div>
        </div>
      </div>
    </div>
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
export default {
    components: { ALL,VIC, TAS,  WA,  NSW, ACT, QLD, SA ,VueRecaptcha},
     data(){ return {loginForm: {
      recaptchaVerified: false,
      pleaseTickRecaptchaMessage: ''
    }  }},
      methods: {
    markRecaptchaAsVerified(response) {
      this.loginForm.pleaseTickRecaptchaMessage = '';
      this.loginForm.recaptchaVerified = true;
      console.log('markRecaptchaAsVerified--res,lgfm',response,this.loginForm)
    },
    checkIfRecaptchaVerified() {
      if (!this.loginForm.recaptchaVerified) {
        this.loginForm.pleaseTickRecaptchaMessage = 'Please tick recaptcha.';
        console.log('checkIfRecaptchaVerified-not verified, lgnform',this.loginForm)
        return true; // prevent form from submitting
      }
      console.log('checkIfRecaptchaVerified, lgnform-verified',this.loginForm)
      alert('form would be posted!');
    }
  }
}
</script>
<style scoped>
.states{
    height:40vh;
    overflow-y:scroll;
}
.fform{
    padding:1rem 5rem .5rem;
    
}
img{
display:inline-block;
padding-top:12px;
padding-left:12px;}
.modal-title{
 

}
.selectsate{margin:0 auto;
text-align:center
}
.captch{
    margin:0 auto;
    padding-bottom:1rem
}
</style>