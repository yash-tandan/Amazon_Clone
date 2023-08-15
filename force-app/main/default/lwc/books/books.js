import { LightningElement, wire } from 'lwc';
import BOOKS from '@salesforce/resourceUrl/books';
import getAllBooks from '@salesforce/apex/Books.getAllBooks';
export default class Books extends LightningElement {
    bookResources=BOOKS+ '/ikigai.jpg';
    bookInfo;
    @wire(getAllBooks)
    books({error,data}){
        if(data){
            console.log("Book Records: ",data);
            this.bookInfo=data;
        }
        else if(error) {
            console.log('error: ',error);
        }
    }

}