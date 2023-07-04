export class StreamingPlayer {
    on(): void {
        console.log('스트리밍 플레이어 ON.');
    }

    off(): void {
        console.log('스트리밍 플레이어 OFF.');
    }

    play(): void {
        console.log('스트리밍 재생.');
    }

    pause(): void {
        console.log('스트리밍 일시정지.');
    }

    setSurroundAudio(): void {
        console.log('서라운드 오디오 설정')
    }

    setTwoChannelAudio(): void {
        console.log('2 채널 오디오 설정');
    }

    stop(): void {
        console.log('스트리밍 중지');
    }
}
