export default function DonateBtn({label="Donate", withImg=true, style={}}) {
    return (
        <button className="btn" style={{...style, }}>
            {
                withImg &&
                <img
                    src="/assets/images/heart(1) 1donor-hand.png" height={20} width={20}
                />
            }
            
            {/* <i className="fa fa-gift" aria-hidden="true"></i> */}
            <span style={{marginRight: 5}}>
                {` ${label} `}
            </span>
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