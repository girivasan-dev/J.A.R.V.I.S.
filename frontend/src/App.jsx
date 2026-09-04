import { useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState("LISTENING");
  const [command, setCommand] = useState("");

  const runCommand = () => {
    if (!command.trim()) return;

    setStatus("PROCESSING");

    setTimeout(() => {
      setStatus("LISTENING");
      setCommand("");
    }, 1500);
  };

  return (
    <div className="jarvis">

      {/* TOP NAVIGATION */}
      <header className="topbar">
        <div className="logo">J.A.R.V.I.S.</div>

        <nav>
          <span>HOME</span>
          <span>DASHBOARD</span>
          <span>SETTINGS</span>
          <span>ABOUT</span>
        </nav>
      </header>

      {/* MAIN DASHBOARD */}
      <main className="dashboard">

        {/* LEFT PANEL */}
        <section className="left-panel">

          <div className="panel">
            <h3>SYS_DIAGNOSTICS</h3>

            <div className="diagnostics">
              <div>
                <strong>63%</strong>
                <small>PWR</small>
              </div>

              <div>
                <strong>72%</strong>
                <small>MEM</small>
              </div>

              <div>
                <strong>45%</strong>
                <small>CPU</small>
              </div>
            </div>

            <div className="network">
              NET: UPLINK_ACTIVE
            </div>
          </div>


          <div className="panel activity">
            <h3>CORE_ACTIVITY</h3>

            <div className="status-button">
              {status}
            </div>

            <p>15:36:08 &gt;&gt; LISTENING</p>
            <p>15:36:05 &gt;&gt; RESPONDING</p>
            <p>15:36:03 &gt;&gt; LISTENING</p>
            <p>15:35:11 &gt;&gt; RESPONDING</p>
            <p>15:35:08 &gt;&gt; COMMAND RECEIVED</p>
          </div>


          <div className="panel system-status">
            <h3>SYSTEM STATUS</h3>

            <p>● SYSTEM ONLINE</p>
            <p>● J.A.R.V.I.S. ACTIVE</p>
            <p>● MICROPHONE READY</p>
            <p>● TTS SPEAKING</p>
            <p>● API CONNECTION</p>
          </div>

        </section>


        {/* CENTER CORE */}
        <section className="core-section">

          <div className="core">

            <div className="ring ring-one"></div>
            <div className="ring ring-two"></div>
            <div className="ring ring-three"></div>

            <div className="core-circle">
              J
            </div>

          </div>

          <div className="greeting">
            <h1>Good Afternoon, Sir</h1>

            <p>
              ALL SYSTEMS OPTIMAL. AWAITING DIRECTIVE.
            </p>

            <div className="jarvis-name">
              [ J.A.R.V.I.S. ]
            </div>
          </div>


          {/* COMMAND BOX */}
          <div className="command-box">

            <input
              type="text"
              placeholder="Speak or type a command..."
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  runCommand();
                }
              }}
            />

            <button onClick={runCommand}>
              EXECUTE
            </button>

          </div>

        </section>


        {/* RIGHT PANEL */}
        <section className="right-panel">

          <div className="panel location">
            <h3>LOCATION_TRACKING</h3>

            <h2>CHENNAI</h2>
            <p>INDIA</p>

            <div className="coordinates">
              LAT: 13.0827°
              <br />
              LNG: 80.2707°
            </div>
          </div>


          <div className="panel clock">

            <h3>CHRONOS_SYNC</h3>

            <div className="time">
              15:36
            </div>

            <div className="date">
              FRIDAY, SEPTEMBER 04
            </div>

            <div className="temperature">
              30°C
            </div>

            <small>
              ATMOSPHERE_CLEAR
            </small>

          </div>


          <div className="panel system-log">

            <h3>SYSTEM_LOG // J.A.R.V.I.S.</h3>

            <p>&gt; SYSTEM &gt; passive mode</p>

            <p>&gt; USER &gt; hello jarvis</p>

            <p>&gt; J.A.R.V.I.S. &gt; hello sir</p>

            <p>&gt; SYSTEM &gt; awaiting directive...</p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;