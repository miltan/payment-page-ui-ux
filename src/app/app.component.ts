import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	cart:any = {}
  	title = 'Your Cart';
  	count:number = 1; 
  	base_price:number = 850;
	
  	constructor(private fb: FormBuilder) {
  		this.cart.products = [
			{
				name: 'The Matress',
				size: 'Queen',
				quantity: 1,
				price: 850,
				image: 'assets/images/matress.jpg'
			},
			{
				name: 'Sleepwell',
				size: 'King',
				quantity: 5,
				price: 100,
				image: 'assets/images/matress.jpg'
			}
		];
		this.cart.subtotal = 0;
		this.cart.shipping = 0;
		this.cart.total = 0;
  	}

    ngOnInit() {
    	this.setSubTotal();
    }

    /*set sub total*/
    setSubTotal(){
    	
	    	this.cart.subtotal = 0;
	    	this.cart.products.forEach((val,index)=>{
	    		this.cart.subtotal += val.price *  val.quantity
	    	});
	    	this.cart.total = this.cart.subtotal + this.cart.shipping
	    
    }


    /**/
	onInputChange(event:any,targetval:any,product:any) {  
		setTimeout(()=>{
			//console.log(event.data == '.' || event.data == '-' || event.data == '+')
			if(event.data == '.' || event.data == '-' || event.data == '+'){
				//console.log(product.quantity)
				product.quantity = 1;
			}
		},100);

		this.setSubTotal();
		//this.subtotal = this.base_price * searchValue;
	}

	/*get checkout price*/
	checkOut() {
		alert('Please check console');
		console.log(this.cart)
	}

	/*delete products*/
	deleteProducts(product:any) {
	  	this.cart.products.splice(this.cart.products.indexOf(product),1);
	  	this.setSubTotal()	
	}

	/*add products*/
	addProduct() {
		this.cart.products.push({name: 'Matress Protector',
					size: 'Normal',
					quantity: 1,
					price: 85,
					image: 'assets/images/matress.jpg'})
		this.setSubTotal()
	}
		

}
