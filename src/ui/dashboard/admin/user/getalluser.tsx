import React, { useState, useEffect } from "react";
import {UserController} from "../../../../controller/admin/users.controller";
import UserDTO from "../../../../dto/User.dto";
import AdminLayout from "../admin.layout";
export default function GetAllUsers() {
    const tmpUsers: UserDTO[] = [];
    const [users, setUsers] = useState(tmpUsers);
    
    useEffect(() => {
        // getAllUsers(setUsers);
        userController.list(setUsers);
    }, []);

    const userController: UserController = new UserController();
    
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
                                <span className="nav-tabs-title">Users</span>
                                <ul className="nav nav-tabs" data-tabs="tabs">
                                    <li className="nav-item">
                                        <a 
                                            href={"/admin/adduser"} 
                                            className="nav-link active" 
                                            data-toggle="tab">
                                                Register New User
                                        </a>
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
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th></th>
                                </thead>
                                <tbody id="tbody">
                                    {
                                        users.length > 0 ? users.map((x, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td onClick={() => window.location.href=`/admin/edit-user?id=${x.id}`}>{x.firstName}</td>
                                                    <td> {x.lastName}</td>
                                                    <td> {x.username}</td>
                                                    <td> {x.email}</td>
                                                    {/* <td className="text-primary">
                                                    <a 
                                                        onClick={() => {
                                                            window.location.href = "/admin/edit-user?id="+x.id
                                                        }}
                                                        className="btn btn-primary pull-right text-white" 
                                                        >
                                                            Edit
                                                        </a>
                                                    </td> */}
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