export class Amplifier{
    on() {
        console.log('앰프를 ON.');
    }

    off() {
        console.log('앰프를 OFF.');
    }

    setVolume(volume: number) {
        console.log(`앰프 볼륨을 ${volume}로 설정합니다.`);
    }
    setTuner():void{
        console.log('튜너를 설정')

    }
    setStreamingPlayer():void{
        console.log('스트리밍 플레이어 설정');
    }
    setStreoSound():void{
        console.log('스테레오 사운드 설정');
    }
    setSurroundSound():void{
        console.log('서라운드 사운드 설정');
    }

}
