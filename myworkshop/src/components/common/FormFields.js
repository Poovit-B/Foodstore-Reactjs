import React, { Component } from "react";

export default ({ input, label, type, required, meta }) => {
    console.log(meta);
    return (
        <div className="form-group">
            <label className="">{label}</label>
            <input type={type} {...input} required={required} className="form-control" />
            {meta.error && meta.touched &&
            <small className="text-danger">{meta.error}</small>
            }
        </div>
    )
}