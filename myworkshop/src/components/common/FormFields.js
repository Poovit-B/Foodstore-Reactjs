import React, { Component } from "react";

export default ({ input, label, type, required }) => {
    return (
        <div className="form-group">
            <label className="">{label}</label>
            <input type={type} {...input} required={required} className="form-control" />
        </div>
    )
}