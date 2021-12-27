import DonateBtn from "../../../../components/donate-btn";

export default function PaymentContent({}) {
    
    return (
        <section className="content">
            <h3>PAY FOR YOUR TITHE AND OFFERINGS EASILY</h3>
            <form id="pay-form">
                <div className="row w-100">
                    <div className="col row">
                        <label htmlFor="payment-type">Select Action</label>
                        <select name="payment-type" id="">
                            <option value="offering" selected>OFFERING</option>
                            <option value="tithe">TITHE</option>
                        </select>
                    </div>
                    <div className="col row">
                        <label htmlFor="payment-option">Payment option</label>
                        <select name="payment-option" id="">
                            <option value="offline" selected>Offline</option>
                            <option value="online">Online</option>
                        </select>
                    </div>
                </div>

                <div className="row w-100">
                    <div className="input col">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" />
                    </div>

                    <div className="input col">
                        <div className="payment row" style={{padding: 0}}>
                            <span className="mr-2 span-first" style={{background: "#fff", padding: 0}}>
                                <input type="text" style={{background: "#fff"}} placeholder="Amount" />
                            </span>
                            <span className="row span-last" ><span>#</span> <span>1,000</span></span>
                        </div>
                    </div>
                </div>

                <div className="btn-container">
                    <DonateBtn 
                        label="Pay" 
                        style={{color: "white"}} 
                    />
                </div>
            </form>
        </section>
    );
}