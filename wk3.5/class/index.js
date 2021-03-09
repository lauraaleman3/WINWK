// //.......WEEK 3 DAY 5 REVIEW...

// 'use strict';
// function inventoryList(){
//     let items = [
//         {name: 'Scarve'},
//         {name: 'Sock'},
//         {name: 'Shoe'},
//     ];
    
//     };
//     const add = (name) => {
//         const names = items.filter(item => item.name === name)
//         if (names.length === 0) {
//          return items.push({name: 'Shirt'}, {name: 'Trousers'})
//         };
//       };
    
//       const remove = (name) => {
//         items = items.filter(item => item.name !== name)
//         return items.pop({name: 'Shirt'})
//       };
    
//       const getList = () => {
//           console.log(items)
//           return items
          
//       };
        
        
    
// function main(){

// };


// // Hajar attempt


function inventoryList() {


    let inventoty={
         items:[],
         add:function(item) {
          if(this.items.length<10 && item.length!=0){// The size of the collection will not exceed 10 and the item added not empty
             if(this.items.find(value=> value===item))
             console.log("This item is already there")
           else
             this.items.push(item)
            }
          },
    
          remove:function(item) {
            if(item.length!=0)
              for(let i=0;i<this.items.length;i++)
                { 
                 if(this.items[i]===item)
                 {    this.items.splice(i,1);
                 break;
                 }
                 }    
                  },
                  getList:function() {
                    if(this.items.length==0)
                        console.log("No Items")
                     else   
                      console.log(this.items.join(","))
                    
                  }
    
    }
    return inventoty;
    }


    var  myList=inventoryList();
myList.add("Shirt");
myList.add("Trouser");
myList.getList();
myList.remove("Shirt");
myList.getList();
myList.add("Shirt");
myList.remove("Trouser");
myList.getList();

      
    