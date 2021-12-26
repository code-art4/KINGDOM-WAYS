export default function DonateBtn({label="Donate", withImg=true}) {
    return (
        <button className="btn">
            {
                withImg &&
                <img
                    src="/assets/images/heart(1) 1donor-hand.png" height={20} width={20}
                />
            }
            
            {/* <i className="fa fa-gift" aria-hidden="true"></i> */}
            {` ${label} `}
        </button>
    );
    return (
        <div
            className={"border bg-black d-flex align-items-center rounded  p-1 " + props.className}
        >
            <a href={props.href}>
                {
                    !props.noIcon && 
                    <img 
                        src="/assets/images/heart(1) 1donor-hand.png" 
                        className="homepage-donate-icon" 
                    />
                }
                <span className="ml-10px">
                    {props.label ? props.label : "Donate"}
                </span>
            </a>
        </div>
    );
}