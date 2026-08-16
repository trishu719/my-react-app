import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";

const today = new Date().toISOString().split("T")[0];

export const schema = yup.object({
    firstName: yup.string().required("First Name is required"),

    lastName: yup.string().required("Last Name is required"),

    age: yup
        .number()
        .transform((value, originalValue) => (originalValue === "" ? undefined : value))
        .typeError("Age is required")
        .required("Age is required")
        .min(18, "Minimum age is 18")
        .max(40, "Maximum age is 40"),

    password: yup
        .string()
        .required("Password is required")
        .min(6, "Minimum 6 characters")
        .max(10, "Maximum 10 characters")
        .matches(/^\S+$/, "Space not allowed"),

    phone: yup
        .string()
        .required("Phone Number is required")
        .matches(/^[0-9]{10}$/, "Enter valid phone number"),

    email: yup.string()
        .required("Email is required")
        .email("Invalid email format")
        .matches(/\.com$/, "Email must end with .com"),

    country: yup.string().required("Country is required"),

    state: yup.string().required("State is required"),

    cities: yup
        .array()
        .min(2, "Select minimum 2 cities")
        .required("Cities are required"),

    address: yup.string().required("Address is required"),

    pincode: yup
        .string()
        .matches(/^[0-9]{6}$/, "Enter valid pincode")
        .required("Pincode is required"),

    joiningDate: yup
        .string()
        .required("Joining date is required")
        .test("valid-date", "current date or previous dates only",
         (value) => value <= today),

    gender: yup.string().required("Gender is required"),

    hobbies: yup
        .array()
        .min(2, "Select minimum 2 hobbies")
        .required("Hobbies are required"),

    profile: yup
        .mixed()
        .required("Profile picture is required"),

    resume: yup
        .mixed()
        .required("Resume is required"),

    terms: yup
        .boolean()
        .oneOf([true], "Accept Terms & Conditions")
});

export default RHFormsWithYup = ()=> {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
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
            profile: null,
            resume: null,
            terms: false,
        },
    });

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
            <ToastContainer />

            <div className="container mt-4 mb-5">
                <div className="card shadow p-4">
                    <h2 className="text-center mb-4">Registration Form</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            {/* First Name */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("firstName")}
                                />
                                <small className="text-danger">
                                    {errors.firstName?.message}
                                </small>
                            </div>

                            {/* Last Name */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("lastName")}
                                />
                                <small className="text-danger">
                                    {errors.lastName?.message}
                                </small>
                            </div>

                            {/* Age */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Age</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    {...register("age")}
                                />
                                <small className="text-danger">
                                    {errors.age?.message}
                                </small>
                            </div>

                            {/* Password */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    {...register("password")}
                                />
                                <small className="text-danger">
                                    {errors.password?.message}
                                </small>
                            </div>

                            {/* Phone */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Phone Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("phone")}
                                />
                                <small className="text-danger">
                                    {errors.phone?.message}
                                </small>
                            </div>

                            {/* Email */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /\.com$/,
                                            message: "Email must end with .com"
                                        }
                                    })}
                                />
                                <small className="text-danger">
                                    {errors.email?.message}
                                </small>
                            </div>
                            {/* Country */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Country</label>
                                <select className="form-select" {...register("country")}>
                                    <option value="">Select Country</option>
                                    <option value="India">India</option>
                                    <option value="USA">USA</option>
                                    <option value="Canada">Canada</option>
                                </select>
                                <small className="text-danger">
                                    {errors.country?.message}
                                </small>
                            </div>

                            {/* State */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label">State</label>
                                <select className="form-select" {...register("state")}>
                                    <option value="">Select State</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                </select>
                                <small className="text-danger">
                                    {errors.state?.message}
                                </small>
                            </div>

                            {/* Preferred Cities */}
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

                            {/* Address */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Complete Address</label>
                                <textarea
                                    rows="4"
                                    className="form-control"
                                    {...register("address")}
                                ></textarea>
                                <small className="text-danger">
                                    {errors.address?.message}
                                </small>
                            </div>

                            {/* Pin Code */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Zip / Pin Code</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("pincode")}
                                />
                                <small className="text-danger">
                                    {errors.pincode?.message}
                                </small>
                            </div>

                            {/* Joining Date */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Joining Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                
                                    {...register("joiningDate")}
                                />
                                <small className="text-danger">
                                    {errors.joiningDate?.message}
                                </small>
                            </div>

                            {/* Gender */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label d-block">Gender</label>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        value="Male"
                                        {...register("gender")}
                                    />
                                    <label className="form-check-label">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        value="Female"
                                        {...register("gender")}
                                    />
                                    <label className="form-check-label">Female</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        value="Transgender"
                                        {...register("gender")}
                                    />
                                    <label className="form-check-label">Transgender</label>
                                </div>
                                <small className="text-danger d-block">
                                    {errors.gender?.message}
                                </small>
                            </div>

                            {/* Hobbies */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label d-block">Hobbies</label>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value="Drawing"
                                        {...register("hobbies")}
                                    />
                                    <label className="form-check-label">Drawing</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value="Singing"
                                        {...register("hobbies")}
                                    />
                                    <label className="form-check-label">Singing</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value="Dancing"
                                        {...register("hobbies")}
                                    />
                                    <label className="form-check-label">Dancing</label>
                                </div>
                                <small className="text-danger d-block">
                                    {errors.hobbies?.message}
                                </small>
                            </div>

                            {/* Profile Picture */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Profile Picture</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    accept=".jpg,.jpeg,.png,.gif"
                                    {...register("profile")}
                                />
                                <small className="text-danger">
                                    {errors.profile?.message}
                                </small>
                            </div>

                            {/* Resume */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Resume</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    accept=".pdf,.doc,.docx"
                                    {...register("resume")}
                                />
                                <small className="text-danger">
                                    {errors.resume?.message}
                                </small>
                            </div>

                            {/* Terms */}
                            <div className="col-12 mb-3">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        {...register("terms")}
                                    />
                                    <label className="form-check-label">
                                        I Agree to Terms & Conditions
                                    </label>
                                </div>
                                <small className="text-danger">
                                    {errors.terms?.message}
                                </small>
                            </div>

                            {/* Submit */}
                            <div className="col-12">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={loading}
                                >
                                    {loading ? "Submitting..." : "Submit"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}