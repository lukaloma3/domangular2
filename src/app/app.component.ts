import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

// პროდუქტების მასივი
products =[
{ 
name : 'კარტოფილი',
price : 2,
weight :[1, 3, 5] ,
activeweight : [false, false, false],
discount :25 ,
gift : true,
img : ['https://www.mshoblebi.ge/images/stories/samzareulo/kartofili.jpg', 'https://mkurnali.ge/media/_thumb/images/new_images/kartofili.webp', 'http://server6.intermedia.ge/article_images/small/201611/2016110910000467247.jpg',],
imgactive : 'https://www.mshoblebi.ge/images/stories/samzareulo/kartofili.jpg',
fp : 0,
disfp : '0',
},
{ 
name : 'ხახვი',
price : 1.5 ,
weight :[1, 3, 5] ,
activeweight : [false, false, false],
discount : 15,
gift : false,
img : ['https://mkurnali.ge/media/images/new_images/onionpng605.jpg', 'https://reitingi.ambebi.ge/pictures/image3/1a230ffd1025d797499a9a55b6b4e241.jpg', 'https://for.ge/uploads/images/1544018799_51911.png',],
imgactive : 'https://mkurnali.ge/media/images/new_images/onionpng605.jpg',
fp : 0,
disfp: '0',
},
{ 
name : 'სტაფილო',
price : 2.5,
weight :[1, 3, 5] ,
activeweight : [false, false, false],
discount : 20,
gift :false ,
img : ['http://old.tbiliselebi.ge/uploads/posts/2019-04/1555594192_stafilo.jpg', 'https://momitane.ge/45435-large_default/%E1%83%A1%E1%83%A2%E1%83%90%E1%83%A4%E1%83%98%E1%83%9A%E1%83%9D.jpg', 'https://a.mooreshaven.com/qa-parenting/carrot-puree-recipe-for-babies-how-to-make-it-1.webp',],
imgactive : 'http://old.tbiliselebi.ge/uploads/posts/2019-04/1555594192_stafilo.jpg',
fp : 0,
disfp : '0',
},
]
//პროდუქტების მასივის დასასრული

// მთავარი ფოტო
imgsrc(k1:any, k2:any ){
this.products[k2].imgactive=k1
};


// ფასი და ფასი ფასდაკლებით
pw(kw:any, kp:any, kd:any, k:any, k2:any){
console.log()
//ფასი
this.products[k].fp = kw*kp
//ფასი ფასდაკლებით
this.products[k].disfp = (this.products[k].fp*(100- kd)/100).toFixed(1)
//წონის არჩევანი
this.products[k].activeweight = this.products[k].activeweight.map(x=>{
return x = false

})
this.products[k].activeweight[k2] = !this.products[k].activeweight[k2]


}
show = false

aside(){
this.show = !this.show

}












}













