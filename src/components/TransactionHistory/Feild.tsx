import React from 'react'
import './index.css';
import bin from '../../bin.svg'
import { FeildType } from '../../context/ContextTypes';
export const Feild: React.FC<FeildType> = ({ data, id, RemTrans }) => {

    return (

        <div className={data.am < 0 ? 'NFeild' : 'PFeild'} >
            <img
                className="CrossB"
                alt="Delete"
                onClick={() => { RemTrans(id) }}
                style={{ display: "inline-block", float: "left", width: "30px", marginTop: "-5px", cursor: "pointer" }}
                src={bin}
            />
            <div
                className="subFeild"
            >
                <span
                    className="decs"
                >
                    {data.des}
                </span>
                <span
                    className="amount"
                >
                    {data.am}
                </span>
            </div>
        </div>
    )
}
