
let tblist =document.getElementsByClassName("table-item");
let searchName = document.getElementById("tables");
        function tableSearch() {
            for (let i = 0; i < tblist.length; i++) {
                let itemText = tblist[i].innerText.toUpperCase();
                let searchText = searchName.value.toUpperCase();
                if (itemText.includes(searchText)) {
                    tblist[i].style.display = "initial";
                } else {
                    tblist[i].style.display = "none";
                }
                
            }
        }


let mnlist =document.getElementsByClassName("menu-item");
let search = document.getElementById("menu");
        function menuSearch() {
            for (let i = 0; i < mnlist.length; i++) {
                let itemText1 = mnlist[i].innerText.toUpperCase();
                let searchText1 = search.value.toUpperCase();
                if (itemText1.includes(searchText1) ) {
                    mnlist[i].style.display = "initial";
                } else {
                    mnlist[i].style.display = "none";
                }
                
            }
        }