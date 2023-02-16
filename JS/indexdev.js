// console.log("Money Master");

const IncomeInput=document.getElementById('incomeid');
const FoodInput=document.getElementById('foofid');
const RentInput=document.getElementById('rentid');
const ClothInput=document.getElementById('clothid');

const CalculateButton=document.getElementById('calculatebtnid')
const TotalExpenses=document.getElementById('totalexpensesid');
const Balance=document.getElementById('balanceid');


let Remain;

CalculateButton.addEventListener('click',function(){

    const IncomeString=IncomeInput.value;
    const FoodString=FoodInput.value;
    const RentString=RentInput.value;
    const ClothString=ClothInput.value;

    const IncomeAmount=parseFloat(IncomeString);
    const FoodAmount=parseFloat(FoodString);
    const RentAmount=parseFloat(RentString);
    const ClothAmount=parseFloat(ClothString);

    if(IncomeString===''){
        alert("Income Input is empty");
    }else{
        if(isNaN(IncomeAmount) || isNaN(FoodAmount) || isNaN(RentAmount) || isNaN(ClothAmount)){
           alert("Please Give Number");
        }else{
          const Total=FoodAmount+RentAmount+ClothAmount;
          TotalExpenses.innerText=Total;
          Remain=IncomeAmount-Total;
          Balance.innerText=Remain;
        }
    }

   
})

const SaveInputBox=document.getElementById('saveinputid');
const SaveButton=document.getElementById('savebuttonid');

const SavingAmount=document.getElementById('savingamountid');
const RemainingBalance=document.getElementById('remainbalanceid');

SaveButton.addEventListener('click',function(){
    const SaveString=SaveInputBox.value;
    const SaveAmount=parseFloat(SaveString);

    if(isNaN(SaveAmount)){
        alert("Give Number");
    }else{
        const LastAmount=(parseFloat(IncomeInput.value)*SaveAmount)/100;
        SavingAmount.innerText=LastAmount;

        const Remaing_Balace=Remain-LastAmount;
        RemainingBalance.innerText=Remaing_Balace;
    }
})