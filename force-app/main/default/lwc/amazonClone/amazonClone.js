import { LightningElement } from 'lwc';
import login from '@salesforce/apex/LoginUser.login'

export default class AmazonClone extends LightningElement {

    email;
    password;
    isError=false;
    errorMessage='';

    handleUsername(event){
        this.email = event.target.value;
    }
    handlePasswordChange(event){
        this.password = event.target.value;
    }
    handleLogin(){
        console.log("Inside login");
        console.log("Email Value : ",this.email);
        console.log("Password Value : ",this.password);

        if(this.email!=null && this.password!=null){
            login({userName:this.email, password:this.password})
            .then((result)=>{
                this.isError = false;
                console.log('Result is : ',result);
            })
            .catch((error)=>{
                console.log('Error is : ',error);
                this.isError=true;
                this.errorMessage=error.body.message;
            })
        }
    }

}