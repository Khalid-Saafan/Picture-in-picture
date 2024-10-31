const videoElement = document.querySelector("#video")
const btnElement = document.querySelector(".btn")


// Prompt to select media stream, pass to video element, then play
async function selectMediaStream () {
    try {
        const mediaStream = await window.navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaStream
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        }


    } catch (error) {
        
    }
}

btnElement.addEventListener('click', async () => {
    btnElement.disabled = true

    await videoElement.requestPictureInPicture()

    btnElement.disabled = false

})

selectMediaStream()