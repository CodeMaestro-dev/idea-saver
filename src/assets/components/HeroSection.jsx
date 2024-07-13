import logo from "/assets/idea-saver.png"

const HeroSection = () => {
  return (
    <div className="main">
        <img src={logo} alt="logo" />
        <h1>Easily <span>Save</span> Your <span>Ideas without Stress</span></h1>
        <p>Now with Idea Saver you don&apos;t need to worry about forgetting your ideas because Idea saver is just a <kbd>Ctrl</kbd> <kbd>I</kbd> away</p> 
        <a href="/assets/idea-saver.zip" download>
            💡Download Idea Saver
        </a>      
    </div>
  )
}

export default HeroSection
