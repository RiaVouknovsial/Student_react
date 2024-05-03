export default function Header() {
    const now = new Date();
    return (
        <header>
         { /*  <img src ={'vite.svg'} alt=""/>*/}
          <h1>Student project</h1>
          <span> time { now.toLocaleTimeString()} </span>
          {/* <span> time { "hello".toUpperCase()} </span> */}
        </header>        
    )
  }