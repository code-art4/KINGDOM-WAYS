import moment from "moment";
import { FC } from "react";

interface branchItem {
    title: String,
    description: String,
    timers: Date[],
    onClick,
};

const BranchItem:FC<branchItem> = ({title, description, timers, onClick}) => {
    const handleClick = (e) => {
        e.preventDefault();
        onClick();
    }
    
    return (
        <div className="col">
            <h4>{title}</h4>

            <div className="row">
                <div className="image">
                    <img src="/images/list-icon-1.svg" alt=""  />
                </div>
                <span>
                    {description}
                </span>
            </div>

            <div className="row">
                <div className="image">
                    <img src="/images/list-icon-2.svg" alt="" />
                </div>

                <span>{`${moment(timers[0]).format("hh:mm a")}-${moment(timers[1]).format("hh:mm a")}`}
                    <ul>
                        <li>{`${moment(timers[2]).format("hh:mm a")}-${moment(timers[3]).format("hh:mm a")}`}</li>
                    </ul>
                </span>
            </div>
            <a href="#" onClick={(e) => handleClick(e)}>See More</a>
        </div>
    );
}

export default BranchItem;