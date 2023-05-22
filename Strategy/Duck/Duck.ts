import {FlyBehavior} from "./FlyBehavior";
import {QuackBehavior} from "./QuackBehavior";

export class Duck {

    flyBehavior: FlyBehavior = {
        fly() {
            console.log('i am flying');
        },
        FlyWithWings() {
            console.log('FlyWithWings')
        }
    };


    quackBehavior: QuackBehavior = {
        quack() {
            console.log("quack quack");
        },
        Squeak() {
            console.log('Squeak Squeak');
        },


        swim() {
            console.log('i can swim');
        },

        performQuack() {
            this.quackBehavior.quack(); //울음소리를 직접 처리하는 대신 인터페이스의 레퍼런스 변수에 의해 참조되는 객체에
                                        //그 행동을 위임한다. 즉 여기선 quackBehavior 변수에 의해 참조되는
                                        // this에 quack()을 위임한다. this가 어떤 오리가 될진 모름
        },

        performFly() {
            this.flyBehavior.fly();

        },

        display() {

        },
    }
}