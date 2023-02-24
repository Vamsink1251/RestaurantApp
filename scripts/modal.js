const allTables=document.querySelectorAll(".table-item");
const overlayEle=document.querySelector(".overlay");
const modalEle=document.querySelector(".modal");
const modalContainerEle=document.querySelector(".modal-container");


for(let tableMonitoring of allTables){
    tableMonitoring.addEventListener("click",()=>{
        let tableId=tableMonitoring.children[1].id;
        displayModal(tableId);
    });  
}   
const closeModalEle=document.querySelector(".close-modal");
closeModalEle.addEventListener("click",closeTheModal);
function closeTheModal(){
    {
        modalEle.classList.add("hide");
        overlayEle.classList.add("hide");
    }
}

function displayModal(tableId){
    modalEle.classList.remove("hide");
    overlayEle.classList.remove("hide");
    let currTable=tables[tableId];
    let i=1;
    const head=`  <tr>
                    <th>S.no</th>
                    <th>Item Name</th>
                    <th>Servings</th>
                    <th>Price</th> 
                    <th>Remove</th>         
                </tr>`;
    modalContainerEle.innerHTML=(head);
    for(const[key,value] of Object.entries(currTable.items)){
        let serno=i++;
        let item=key;
        let price1=price.get(item);
        let servings=value;
        
        const html=`<tr class="list">
                        <td>${serno}</td>
                        <td>${item}</td>
                        <td><input class="servings-${tableId}" id="${key}" type="number" value="${servings}" min=0></td>
                        <td>${price1}</td>
                        <td><button style="background-color:red; color:white;" class="dropItem" id="${key}-${tableId}"><i class="fa fa-trash"></i></button></td>              
                    </tr>`;
        modalContainerEle.innerHTML+=(html);
    }  
    const footer=`<tr class="foot">
                    <td colspan="2">Total</td>
                    <td>${currTable.count}</td>
                    <td colspan="2">${currTable.total_price}</td>                                                    
                </tr>`;
     modalContainerEle.innerHTML+=footer;          
     modalContainerEle.innerHTML+= `<button class="bill" > GenerateBill</button>`

    //Modify Servings
    const allServings=document.querySelectorAll(`.servings-${tableId}`);
    for(let serving of allServings){           
        serving.addEventListener("click",()=>modifyServings(tableId,serving));
    }
    //drop the items
     const droppedItems=document.querySelectorAll(".dropItem");
         for(let item of droppedItems){
            item.addEventListener("click",()=>dropTheItem(item));               
    }

    //GEnerate the bill
       const billButton=document.querySelector(".bill"); 
        billButton.addEventListener("click",()=>generateTheBill(currTable));
}

function modifyServings(tableId,serving){               
    let itemId=serving.id
    let prev=tables[tableId].items[itemId];
    let newval=serving.value;
    tables[tableId].items[itemId]=newval;
    tables[tableId].count+=(newval-prev);
    tables[tableId].total_price+=(newval-prev)*price.get(itemId);
   
    localStorage.setItem("tables", JSON.stringify(tables)); //1
    update_web();
    displayModal(tableId);
}
function dropTheItem(item){
    //console.log();
    const [itemId,tableId]=item.id.split("-");
    let reduceItems=tables[tableId].items[itemId];
    tables[tableId].count-=reduceItems;
    tables[tableId].total_price-=(price.get(itemId)*reduceItems);
    delete tables[tableId].items[itemId]; //deleting that particular menu-item for items associated with tableNumber
    //closeTheModal();
    
    localStorage.setItem("tables", JSON.stringify(tables)); //1
    update_web();
    displayModal(tableId);
}

function generateTheBill(currTable){
    const head=`  <tr>
                    <th >Total-Items</th>                 
                    <th >Total-Price</th>                   
                </tr>`;
   // console.log(modalContainerEle.innerHTML)
    modalContainerEle.innerHTML=(head);
   // console.log(modalContainerEle.innerHTML)
    const html=`<tr class="foot">
                    <td >${currTable.count}</td>
                    <td>${currTable.total_price}</td>                                                    
                </tr>`;
    modalContainerEle.innerHTML+=html;

        currTable.items={};
        currTable.count=0;
        currTable.total_price=0;

        localStorage.setItem("tables", JSON.stringify(tables)); //1
        update_web();
}



