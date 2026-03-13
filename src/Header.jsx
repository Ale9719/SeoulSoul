export default function Header() {
  return (
    <header style={{ backgroundColor: "##8c1c1"}}>
        <div>
            <h1 style={{
                fontSize: "3rem",
                fontWeight: "bold",
                background: "linear-gradient(90deg, #ff77ff, #c084fc)", // rosa → lilla
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "rgb(242 134 212)",
                textShadow: "0 0 5px #fff, 0 0 10px #ff77ff, 0 0 20px #c084fc"
                }}>
                Experience Korea Pop</h1>
            <p style={{
                fontSize: "1rem",
                fontWeight: "100",
                WebkitTextFillColor: "rgb(0, 0, 0)",
                }}
                >Enjoy sweet treats, discover K-pop, and glow up with Korean skincare all in one dreamy place</p>
            <button>Visit Us</button>
        
        </div>

    </header>
  )
}
