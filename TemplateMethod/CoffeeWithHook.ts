import {CaffeineBeverage} from "./CaffeineBeverage";

export class CoffeeWithHook extends CaffeineBeverage {
    brew(): void {
        console.log("필터로 커피 우리는중")
    }

    addCondiments(): void {
        console.log('우유와 설탕 추가 중')
    }
    customerWantsCondiments(): boolean {
       const yes =  confirm("우유와 설탕을 추가할까요?");
       if(yes === true){
           alert("우유와 설탕을 넣겠습니다.");
       }

        return super.customerWantsCondiments();
    }

}
