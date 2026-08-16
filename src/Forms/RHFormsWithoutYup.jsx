import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
export const RHFormsWithoutYup = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            age: "",
            password: "",
            phone: "",
            email: "",
            country: "",
            state: "",
            cities: [],
            address: "",
            pincode: "",
            joiningDate: "",
            gender: "",
            hobbies: [],
            profile: "",
            resume: "",
            terms: false,
        }
    });

    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        setLoading(true);

        setTimeout(() => {
            console.log(data);
            toast.success("Form Submitted Successfully");
            reset();
            setLoading(false);
        }, 2000);
    };

    return (
        <div>
            <div className="fw-bold text-info">RHForm Without Yup</div><hr />
            <ToastContainer />
            <div className="container mt-4 mb-5">
                <div className="card shadow p-4">
                    <h2 className="text-center mb-4">Registration Form</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-6">
                                <label>First Name</label>
                                <input
                                    className="form-control"
                                    {...register("firstName", {
                                        required: "First Name is required",
                                    })}
                                />
                                <p className="text-danger">{errors.firstName?.message}</p>
                            </div>

                            <div className="col-md-6">
                                <label>Last Name</label>
                                <input
                                    className="form-control"
                                    {...register("lastName", {
                                        required: "Last Name is required",
                                    })}
                                />
                                <p className="text-danger">{errors.lastName?.message}</p>
                            </div>

                            <div className="col-md-6 mt-3">
                                <label>Age</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    {...register("age", {
                                        required: "Age Required",
                                        min: {
                                            value: 18,
                                            message: "Minimum age is 18",
                                        },
                                        max: {
                                            value: 40,
                                            message: "Maximum age is 40",
                                        },
                                    })}
                                />
                                <p className="text-danger">{errors.age?.message}</p>
                            </div>

                            <div className="col-md-6 mt-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    {...register("password", {
                                        required: "Password Required",
                                        minLength: {
                                            value: 6,
                                            message: "Minimum 6 characters",
                                        },
                                        maxLength: {
                                            value: 10,
                                            message: "Maximum 10 characters",
                                        },
                                        pattern: {
                                            value: /^\S+$/,
                                            message: "Space not allowed",
                                        },
                                    })}
                                />
                                <p className="text-danger">{errors.password?.message}</p>
                            </div>

                            <div className="col-md-6 mt-3">
                                <label>Phone</label>
                                <input
                                    className="form-control"
                                    {...register("phone", {
                                        required: "Phone Required",
                                        pattern: {
                                            value: /^[0-9]{10}$/,
                                            message: "Enter valid phone",
                                        },
                                    })}
                                />
                                <p className="text-danger">{errors.phone?.message}</p>
                            </div>

                            <div className="col-md-6 mt-3">
                                <label>Email</label>
                                <input
                                    className="form-control"
                                    {...register("email", {
                                        required: "Email Required",
                                        pattern: {
                                            value: /^\S+@\S+\.\S+$/,
                                            message: "Invalid Email",
                                        },
                                    })}
                                />
                                <p className="text-danger">{errors.email?.message}</p>
                            </div>

                            <div className="col-md-6 mt-3">
                                <label>Select Country</label>
                                <select
                                    className="form-select"
                                    {...register("country", {
                                        required: "Country is required"
                                    })}
                                >
                                    <option value="">Select Country</option>
                                    <option value="India">India</option>
                                    <option value="USA">USA</option>
                                    <option value="Canada">Canada</option>
                                </select>
                                <p className="text-danger">{errors.country?.message}</p>
                            </div>

                            <div className="col-md-6 mt-3">
                                <label>Select State</label>
                                <select
                                    className="form-select"
                                    {...register("state", {
                                        required: "State is required"
                                    })}
                                >
                                    <option value="">Select State</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                </select>
                                <p className="text-danger">{errors.state?.message}</p>
                            </div>

                            <div className="col-md-6 mt-3">
                                <label className="me-3 d-block">Preferred Cities</label>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" value="Ahmedabad" {...register("cities", { validate: (value) => value.length >= 2 || "Select minimum 2 cities" })} />
                                    <label className="form-check-label">Ahmedabad</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" value="Delhi" {...register("cities")} />
                                    <label className="form-check-label">Delhi</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" value="Mumbai" {...register("cities")} />
                                    <label className="form-check-label">Mumbai</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" value="Surat" {...register("cities")} />
                                    <label className="form-check-label">Surat</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" value="Jaipur" {...register("cities")} />
                                    <label className="form-check-label">Jaipur</label>
                                </div>

                                <p className="text-danger">{errors.cities?.message}</p>
                            </div>

                            <div className="col-md-6 mt-3">
                                <label>Complete Address</label>
                                <textarea
                                    className="form-control"
                                    rows="4"
                                    {...register("address", {
                                        required: "Address is required"
                                    })}
                                />
                                <p className="text-danger">{errors.address?.message}</p>
                            </div>

                            <div className="col-md-6 mt-3">
                                <label>Zip / Pin Code</label>
                                <input
                                    className="form-control"
                                    {...register("pincode", {
                                        required: "Pincode required",
                                        pattern: {
                                            value: /^[0-9]{6}$/,
                                            message: "Enter valid pincode"
                                        }
                                    })}
                                />
                                <p className="text-danger">{errors.pincode?.message}</p>
                            </div>

                            <div className="col-md-6 mt-3">
                                <label>Joining Date</label>
                                <input

                                    type="date"
                                    className="form-control"
                                    {...register("joiningDate", {
                                        required: "Joining Date required",
                                        validate: (value) => {
                                            const selectedDate = new Date(value);
                                            const today = new Date();
                                            return selectedDate <= today || "Current date or previous date only";
                                        }
                                    })}
                                />
                                <p className="text-danger">{errors.joiningDate?.message}</p>
                            </div>

                            <div className="col-md-12 mt-3">
                                <label className="me-3">Gender</label>
                                <input
                                    type="radio"
                                    value="Male"
                                    {...register("gender", {
                                        required: "Select gender"
                                    })}
                                /> Male
                                <input
                                    className="ms-3"
                                    type="radio"
                                    value="Female"
                                    {...register("gender", {
                                        required: "Select gender"
                                    })}
                                /> Female
                                <input
                                    className="ms-3"
                                    type="radio"
                                    value="Transgender"
                                    {...register("gender", {
                                        required: "Select gender"
                                    })}
                                /> Transgender
                                <p className="text-danger">{errors.gender?.message}</p>
                            </div>

                            <div className="col-md-12 mt-3">
                                <label className="me-3">Hobbies</label>
                                <input
                                    type="checkbox"
                                    value="Drawing"
                                    {...register("hobbies", {
                                        validate: (value) =>
                                            value.length >= 2 || "Select minimum 2 hobbies"
                                    })}
                                /> Drawing
                                <input
                                    className="ms-3"
                                    type="checkbox"
                                    value="Singing"
                                    {...register("hobbies")}
                                /> Singing
                                <input
                                    className="ms-3"
                                    type="checkbox"
                                    value="Dancing"
                                    {...register("hobbies")}
                                /> Dancing
                                <p className="text-danger">{errors.hobbies?.message}</p>
                            </div>

                            <div className="col-md-6 mt-3">
                                <label>Profile Picture</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    accept=".jpg,.jpeg,.png,.gif"
                                    {...register("profile", {
                                        required: "Profile picture required",
                                        validate: {
                                            fileType: (files) => {
                                                const file = files?.[0];
                                                if (!file) return "Profile picture required";
                                                return ["image/jpeg", "image/png", "image/gif"].includes(file.type)
                                                    || "Only JPG PNG GIF";
                                            },
                                            fileSize: (files) => {
                                                const file = files?.[0];
                                                if (!file) return true;
                                                return file.size <= 6 * 1024 * 1024
                                                    || "Maximum 6MB";
                                            }
                                        }
                                    })}
                                />
                                <p className="text-danger">{errors.profile?.message}</p>
                            </div>

                            <div className="col-md-6 mt-3">
                                <label>Resume</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    accept=".pdf,.doc,.docx"
                                    {...register("resume", {
                                        required: "Resume required",
                                        validate: {
                                            fileType: (files) => {
                                                const file = files?.[0];
                                                if (!file) return "Resume required";
                                                return [
                                                    "application/pdf",
                                                    "application/msword",
                                                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                                ].includes(file.type)
                                                    || "Only PDF DOC DOCX";
                                            },
                                            fileSize: (files) => {
                                                const file = files?.[0];
                                                if (!file) return true;
                                                return file.size <= 8 * 1024 * 1024
                                                    || "Maximum 8MB";
                                            }
                                        }
                                    })}
                                />
                                <p className="text-danger">{errors.resume?.message}</p>
                            </div>

                            <div className="col-md-12 mt-3">
                                <input
                                    type="checkbox"
                                    {...register("terms", {
                                        required: "Accept Terms & Conditions"
                                    })}
                                />
                                <label className="ms-2">
                                    Agree to Terms & Conditions
                                </label>
                                <p className="text-danger">{errors.terms?.message}</p>
                            </div>
                        </div>

                        <button
                            className="btn btn-primary mt-4"
                            disabled={loading || isSubmitting}
                        >
                            {loading ? "Loading..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
                );
}

