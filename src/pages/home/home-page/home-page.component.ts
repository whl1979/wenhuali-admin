import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  users:Array<any> = [
    {"randomindex":1,
    "index":10,
    "name":"80中",
      "address":"中山区",
      "avgtotal":605.5,
      "rate":"56%"},
    {"randomindex":1,
    "index":16,
    "name":"育文中学",
      "address":"甘井子",
      "avgtotal":588,
      "rate":"46%"},
    {"randomindex":1,
    "index":1,
    "name":"理工附中",
      "address":"沙河口区",
      "avgtotal":615,
      "rate":"82%"}
  ]
deleteLast(){
  this.users.pop()
}
saveNewUser(){
  this.users.push({
    "randomindex":1,
    "index":99,
    "name":"某中学",
      "address":"某区",
      "avgtotal":555,
      "rate":"30%"
  })
}
  sortByAsccending(salt="index"){
    this.users.sort(function(a,b){
      return a[salt] - b[salt];
    });
    // 参考MDN Array操作的API文档 Array相关方法方法
  }
  sortByDesccending(){
    this.users.sort(function(a,b){
      return b.index - a.index;
    });
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
  }
  sortByRadom(){
    for (let entry of this.users){
      entry.randomindex = Math.random()* this.users.length;
    }
    this.sortByAsccending("randomindex")
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  }
  constructor(meta: Meta, title: Title) {
    title.setTitle('My Home Page');

    meta.addTags([ 
      {
        name: 'author', content: 'eddic'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ])
  }

  ngOnInit() {
  }

}
