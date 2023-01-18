const amount = document.querySelector('#exp_amt');
const btn=document.querySelector('.btn');
const myForm = document.querySelector('my-form');
const add=document.getElementById("add");
const reason=document.getElementById("reas").options;
const category=document.getElementById("categ").options;
const allExpense = document.querySelector('#listOfExpense');
btn.addEventListener('click', onSubmit);
let expense = new Array();
this.count=localStorage.length;
console.log("count : "+count);
console.log(localStorage);
function onSubmit(e){
    e.preventDefault();
    count++;
    console.log("count : "+count);
    const reasons=reason[reason.selectedIndex].text;
    const categories=category[category.selectedIndex].text;
    const details = amount.value +" Rupees for "+reasons + "  of  " + categories;
    localStorage.setItem(count,details);
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${amount.value} Rupees for ${reasons}  of  (${categories}) `));
    allExpense.appendChild(li);
    const del=document.createElement('button');
    del.id=count;
    del.appendChild(document.createTextNode("Delete Expense"));
    li.appendChild(del);
    const edit=document.createElement('button');
    edit.id=count;
    edit.appendChild(document.createTextNode("Edit Expense"));
    li.appendChild(edit);

    del.addEventListener('click',(e)=>{

        allExpense.removeChild(li);
        localStorage.removeItem(del.id);
    })

    edit.addEventListener('click',(e)=>{
        alert("Set fields again to update value");
        const reasons=reason[reason.selectedIndex].text;
        const categories=category[category.selectedIndex].text;
        const details = amount.value +" Rupees for "+reasons + "  of  " + categories;
        localStorage.setItem(edit.id,details);
        console.log(localStorage);
    });
}

// window.onload = () =>{
//     count=this.count;
//     for (var i = 1; i < localStorage.length; i++){

//         const li = document.createElement('li');
//         li.appendChild(document.createTextNode(localStorage.getItem(i)));
//         allExpense.appendChild(li);
//         const del=document.createElement('button');
//         del.id=i;
//         del.appendChild(document.createTextNode("Delete Expense"));
//         li.appendChild(del);
//         const edit=document.createElement('button');
//         edit.appendChild(document.createTextNode("Edit Expense"));
//         li.appendChild(edit);
//         del.addEventListener('click',(e)=>{
//             allExpense.removeChild(li);
//             localStorage.removeItem(e.id);
//         })
//         }
    
// }