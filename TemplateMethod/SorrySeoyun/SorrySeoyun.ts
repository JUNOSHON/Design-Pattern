interface Comparable<T> {
}
class Students implements Comparable<Students> {
    name: string;
    weight: number;

    constructor(name: string, weight: number) {
        this.name = name;
        this.weight = weight;
    }

    toString(): string {
        return `${this.name} : ${this.weight}`;
    }

    compareTo(otherStudents: Students): number {
        if (this.weight < otherStudents.weight) {
            return -1;
        } else if (this.weight === otherStudents.weight) {
            return 0;
        } else {
            return 1;
        }
    }
}
function main() {
    const ducks: Students[] = [
        new Students("서윤", 72),
        new Students("준호", 68),
        new Students("재영", 74),
        new Students("진표", 76),
        new Students("근원", 75),
        new Students("동민", 75),
    ];

    console.log("정렬 전 몸무게:");
    console.log()
    ducks.forEach((student) => {
        console.log(student.toString());
    });
    console.log()
    ducks.sort((a, b) => a.compareTo(b));

    console.log("정렬 후 몸무게:");
    console.log()
    ducks.forEach((student) => {
        console.log(student.toString());
    });
}

// 메인 함수 호출
main();
