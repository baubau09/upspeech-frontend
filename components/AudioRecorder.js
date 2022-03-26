import { useReactMediaRecorder } from "react-media-recorder";

const AudioRecorder = () => {
    const {
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl,
    } = useReactMediaRecorder({ audio: true });

    return (
        <div>
            <div>
                <p>{status}</p>
                <button onClick={startRecording}>Start Recording</button>
                <button onClick={stopRecording}>Stop Recording</button>
                <audio src={mediaBlobUrl} controls autoPlay loop />
            </div>
        </div>
    )
}

export default AudioRecorder