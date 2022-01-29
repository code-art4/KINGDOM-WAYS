import moment from "moment";
import React, { useState, useEffect } from "react";
import {BranchController} from "../../../../controller/admin/branch.controller";
import { BranchDTO } from "../../../../dto/Branch.dto";
import UserDTO from "../../../../dto/User.dto";
import AdminLayout from "../admin.layout";

export default function GetAllBranches() {
    const _tmp: BranchDTO[] = [];
    const [items, setItems] = useState(_tmp);
    
    useEffect(() => {
        branchController.list(setItems);
    }, []);

    const branchController: BranchController = new BranchController();
    
    return (
    <>
    <AdminLayout
        externalStyles={[]}
        navbar={""}
        title={"Dashboard"}
        withFooter={false}
        withSideBar={true}
    >
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header card-header-primary">
                        <div className="nav-tabs-navigation">
                            <div className="nav-tabs-wrapper">
                                <span className="nav-tabs-title">Branch</span>
                                <ul className="nav nav-tabs" data-tabs="tabs">
                                    <li className="nav-item">
                                        <a href="/admin/addbranch" className="nav-link active" data-toggle="tab">Register New Branch</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="col-xl-8 col-md-6" id="spinner_loader">
                        </div>
                        <div className="table-responsive" id="table_div">
                            <table
                                className="table"
                            >
                                <thead className=" text-primary">
                                <th>Title</th>
                                <th>State</th>
                                <th>City</th>
                                <th>Is HQ</th>
                                <th>Date Created</th>
                                <th></th>
                                <th></th>
                                </thead>
                                <tbody id="tbody">
                                    {
                                        items.length > 0 ? items.map((x, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td onClick={() => window.location.href=`/item/${x.id}`}>{x.name}</td>
                                                    <td> {x.state}</td>
                                                    <td> {x.city}</td>
                                                    <td> {x.isBranchHq ? "Yes": "No"}</td>
                                                    <td> {moment(x.dateCreated).format('DD/MMM/yyyy')}</td>
                                                    
                                                    <td className="text-primary">
                                                    <a 
                                                        onClick={() => {
                                                            window.location.href = "/admin/edit-branch?id=" + x.id;
                                                        }}
                                                        className="btn btn-primary pull-right text-white" 
                                                        >
                                                            Edit
                                                        </a>
                                                    </td>
                                                    <td className="text-primary">
                                                    <a 
                                                        onClick={() => {
                                                            alert('delete');
                                                            return;
                                                            const result = prompt('Confirm Delete');
                                                            if (result) {
                                                                //"/questionnaire/delete/[id]" 
                                                            }
                                                            else {

                                                            }
                                                        }}
                                                        className="btn btn-primary pull-right text-white" 
                                                        >
                                                            Delete
                                                        </a>
                                                    </td>
                                                </tr>
                                            );
                                        }) : undefined
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </AdminLayout>
    </>
    );
}