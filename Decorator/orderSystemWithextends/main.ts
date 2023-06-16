import {americano} from "./americano";
import {vanillaLatte} from "./vaniilaLatte";

class Main{
    public static main() : void{
        const americano1 : americano = new americano();
        const vanillaLatte1 : vanillaLatte = new vanillaLatte();

        console.log("재영 : 아이스 아메리카노 사이즈업에 샷추가 해주세요.");
        console.log("서윤 : 바닐라라떼 아몬드 브리즈로 바꿔주시고 사이즈업 해주시고 샷추가도 해주세요");
        console.log("준호 : 네 준비해드릴게요");
        console.log("");


        //샷추가, 사이즈업 한 아메리카노
        americano1.setSizeup(true);
        americano1.setShot(true);
        americano1.setIce(true);

        //샷추가, 사이즈업, 아몬드브리즈 변경 한 바닐라라떼
        vanillaLatte1.setAlmondBreeze(true);
        vanillaLatte1.setSizeup(true);
        vanillaLatte1.setShot(true);

        console.log("주문 내역 ");
        console.log("================")
        console.log(`음료명 : ${americano1.getDescription()}`);
        console.log(`가격 : ${americano1.cost()} 원`);


        console.log(`음료명 : ${vanillaLatte1.getDescription()}`);
        console.log(`가격 : ${vanillaLatte1.cost()} 원`);

    }
}

Main.main();
