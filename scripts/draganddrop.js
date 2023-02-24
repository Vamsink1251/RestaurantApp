const menuListEle=document.getElementsByClassName("menu-item");
const tableListEle=document.getElementsByClassName("table-details");

for(let menuItem of menuListEle){
    menuItem.addEventListener("dragstart",(e)=>{
        menuItem.classList.add("hold");
        e.dataTransfer.setData("id",e.target.id);
    });
    menuItem.addEventListener("dragend",(e)=>{
        menuItem.classList.remove("hold");
    });
}

for(let table of tableListEle){
    table.addEventListener("dragover",(e)=>{
        e.preventDefault();
    });
    table.addEventListener("drop",(e)=>{
        let itemid=e.dataTransfer.getData("id");
        update_table(itemid,table.id);
        update_web();
    });
}

function update_table(item_id,table_id)
{

    tables[table_id].count+=1;
    tables[table_id].total_price+=price.get(item_id);

    
    if(item_id in tables[table_id].items)
    {
        tables[table_id].items[`${item_id}`]+=1
    }
    else{
        tables[table_id].items[`${item_id}`]=1
    }

    localStorage.setItem("tables", JSON.stringify(tables)); //1
}

function update_web()
{
    for(var i=0;i<tables.length;i++)
  {
    let s1=document.getElementsByClassName('amount')[i];
    s1.textContent=tables[i].total_price;
    
    let s2=document.getElementsByClassName('items')[i];
    s2.textContent=tables[i].count;
  }
}


 
