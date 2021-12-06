export default function OfflinePayments(props) {
    
    return (
        <div className="d-flex flex-column w-50 bg-white" style={{...props.style}}>
            <div className="d-flex flex-row">
                <div className="w-75 d-flex flex-row">
                    <img 
                        src={props.img ? props.img : "/assets/images/nigeria-naira-currency.png"} 
                        className={"w-50px h-50px"}
                    />
                    <span className="dark-grey ml-10px">
                        1,000
                    </span>
                </div>
                <div className="w-25 d-flex flex-row">
                    X
                </div>
            </div>
            <div className={"font-bold"}>
                Select payment method
            </div>
            <div className="d-flex flex-row">
                {/* type */}
            </div>
            <div className="d-flex flex-row font-bold">
                Personal Info 
                <img src={"/assets/images/help-web-button(1) 1.png"} className="w-50px h-50px" />
            </div>
        </div>
    );
}