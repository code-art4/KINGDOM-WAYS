export default function HomeTimer() {
    return (
        // <!-- Timer column -->
        <section className="timer_column">
            <div className="event pd-top">
               <p> Our next Live service would be on <strong>thursday 20th October</strong></p>
            </div>
            <div className="time_stamp pd-top">
                <p>Time:</p> <span className="timer_bd">09</span> : <span className="timer_bd">00</span> <span className="timer">AM</span>
            </div>
            <div className="chosen_date pd-top">
                <p>Date:</p> <span className="timer_bd">20</span> / <span className="timer_bd">10</span> / <span className="timer_bd">21</span>
            </div>
        </section>
        // <!-- Timer column End-->
    );
}