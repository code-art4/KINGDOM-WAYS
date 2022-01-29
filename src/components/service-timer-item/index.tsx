import { FC } from "react";
import { BranchServiceDTO } from "../../dto/Branch.dto";

interface IBranchService {
    day: string, 
    time: string, 
};
export const  BranchServiceTimerItem = ({timers, showDeleteIcon=false, onDelete=undefined}) => {
    return (
        <div className="row">
            
            <p>
                {timers.length > 0 ? timers.map((x, i) => (
                <span key={i} style={{padding: 5}}>
                    <span style={{marginRight: 5, marginLeft: 3}}>
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                    </span>
                    {x.day} {x.time} 
                    {
                        showDeleteIcon &&
                        <span style={{marginRight: 5, marginLeft: 3}} onClick={() => onDelete && onDelete(x.id)}>
                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                        </span>
                    }
                    
                </span>)) : undefined}
                
                
            </p> 
        </div>
    );
}