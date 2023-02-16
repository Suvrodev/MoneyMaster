// console.log("Money Master");

const IncomeInput=document.getElementById('incomeid');
const FoodInput=document.getElementById('foofid');
const RentInput=document.getElementById('rentid');
const ClothInput=document.getElementById('clothid');

const CalculateButton=document.getElementById('calculatebtnid')
const TotalExpenses=document.getElementById('totalexpensesid');
const Balance=document.getElementById('balanceid');


let Remain;

function GetStringValue(inputBox){
    const GetString=inputBox.value;
    return GetString;
}

function GetNumberFromString(stringValue){
    const Number=parseFloat(stringValue);
    if(Number<0){
        return "Give Positive Number"
    }else{
        return Number;
    }

}

CalculateButton.addEventListener('click',function(){

    const IncomeString=GetStringValue(IncomeInput);
    const FoodString=GetStringValue(FoodInput);
    const RentString=GetStringValue(RentInput);
    const ClothString=GetStringValue(ClothInput);

    const IncomeAmount=GetNumberFromString(IncomeString);
    const FoodAmount=GetNumberFromString(FoodString);
    const RentAmount=GetNumberFromString(RentString);
    const ClothAmount=GetNumberFromString(ClothString);

    if(IncomeString===''){
        alert("Income Input is empty");
    }else{
       if(isNaN(IncomeAmount)){
         alert(IncomeAmount)
       }else{
         if(FoodString===''){
            alert("তোমার কি খাওয়া দাওয়া লাগবে না? হাওইয়া খাইয়া বাঁচবা");
         }else{
            if(isNaN(FoodAmount)){
                alert(FoodAmount);
            }else{
                if(RentString===''){
                    alert('নিজের বাসা পাইছো? ভাড়া দেওয়া না?');
                }else{
                    if(isNaN(RentAmount)){
                        alert(RentAmount);
                    }else{
                        if(ClothString===''){
                            alert('লেংটা থাকবা?');
                        }else{
                            if(isNaN(ClothAmount)){
                                alert(ClothAmount);
                            }else{
                                const Total=FoodAmount+RentAmount+ClothAmount;

                                if(Total>IncomeAmount){
                                    alert('কাট ইউর কোট একোরডিং ইয়োর ক্লোথ');
                                }else{
                                    TotalExpenses.innerText=Total;

                                    Remain=IncomeAmount-Total;
                                    Balance.innerHTML=Remain;
                                }
                              
                            }
                        }
                    }
                }
            }
         }
       }
    }

   
})

const SaveInputBox=document.getElementById('saveinputid');
const SaveButton=document.getElementById('savebuttonid');

const SavingAmount=document.getElementById('savingamountid');
const RemainingBalance=document.getElementById('remainbalanceid');

SaveButton.addEventListener('click',function(){
    const SaveString=GetStringValue(SaveInputBox);
    const SaveAmount=GetNumberFromString(SaveString);

    const IncomeString=GetStringValue(IncomeInput);
    const IncomeAmount=GetNumberFromString(IncomeString);

    if(IncomeString===''){
        alert('Income দেও নাই, Save করতে আসছো?')
    }else{
        if(isNaN(IncomeAmount)){
            alert('Income Minus হয়? গাঁজা খাইছোস?');
        }else{
            if(SaveString===''){
                alert('কত save করতে চাস দিবি না?');
            }else{
                if(isNaN(SaveAmount)){
                    alert(SaveAmount);
                }else{
                    const ExpensesBalanceString=TotalExpenses.innerText;
                    const TotalBalanceString=Balance.innerText;
                    if(ExpensesBalanceString==='' || TotalBalanceString===''){
                        alert('আগে সব Calculate করো');
                    }else{

                      
                        const LastAmount=(parseFloat(IncomeInput.value)*SaveAmount)/100;
                        if(parseFloat(TotalBalanceString)<LastAmount){
                            alert('এতো কিভাবে সেভ করবি? ব্যালেন্স আছে?');
                        }else{
                            SavingAmount.innerText=LastAmount;
   
                            const Remaing_Balace=Remain-LastAmount;
                            RemainingBalance.innerText=Remaing_Balace;
                        }
                       
                    }
                }
            }
        }
    }

    // if(isNaN(SaveAmount)){
    //     alert("Give Number");
    // }else{
    //     const LastAmount=(parseFloat(IncomeInput.value)*SaveAmount)/100;
    //     SavingAmount.innerText=LastAmount;

    //     const Remaing_Balace=Remain-LastAmount;
    //     RemainingBalance.innerText=Remaing_Balace;
    // }
})