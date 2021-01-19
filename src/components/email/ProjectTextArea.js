import React from 'react';

export const ProjectTextArea = ({input, label, type, rows, className, meta:{touched, error, warning}})=>{
    return(
        <div className="form-group">
            <label>{label}</label>
            <div className="input-group">
                {/* {symbol && 
                <div className="input-group-prepend">
                    <div className="input-group-text">{symbol}</div>
                </div>} */}
                <textarea {...input} type={type} rows={rows} className={className}></textarea>
            </div>
            {touched && ((error && <div className="alert alert-danger">{error}</div>))}
        </div>
    )
}