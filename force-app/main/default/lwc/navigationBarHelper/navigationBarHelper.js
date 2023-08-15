import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'

export default class NavigationBarHelper extends NavigationMixin (LightningElement) {

    navigateToBooks(e){
        console.log("Books...");
        this[NavigationMixin.Navigate]({
            "type":"standard__webPage",
            "attributes":{
                "url":"/books"
            }
        })

    }

    navigateToHome(e){
        this[NavigationMixin.Navigate]({
            "type":"standard__webPage",
            "attributes":{
                "url":"/"
            }
        })

    }

}