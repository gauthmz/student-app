import React from 'react'
import StudentHeader from './StudentHeader'

const AddStudents = () => {
    return (
        <div>
<StudentHeader/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                                <label htmlFor="" className="form-label">Roll Number</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                                <label htmlFor="" className="form-label">Admission Number</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                                <label htmlFor="" className="form-label">College</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                                <button className="btn btn-success">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default AddStudents