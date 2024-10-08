import './style.css'
const SecondComponent = () => {
    return (
        <div>
            Bryan aka d4rkp0w4r
        </div>
    );

}

const ThirdComponent = () => {
    return (
        <>
            <div>Web Security, Software Exploitation</div>
            <div className = "child" style={{borderRadius:"10px"}}>Hack the planet</div>
        </>
    )

}

export { SecondComponent, ThirdComponent };