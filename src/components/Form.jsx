import { useState } from "react";

function Form() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    nickName: "",
    email: "",
    password: "",
    dateOfBirth: "",
    mobile: "",
    address: "",
    city: "",
    qualification: {
      "post-graduation": false,
      graduation: false,
      matric: false,
    },
  });

  function firstNameonChangeHandler(event) {
    setData({ ...data, firstName: event.target.value });
  }
  function lastNameonChangeHandler(event) {
    setData({ ...data, lastName: event.target.value });
  }
  function nickNameonChangeHandler(event) {
    setData({ ...data, nickName: event.target.value });
  }
  function emailonChangeHandler(event) {
    setData({ ...data, email: event.target.value });
  }
  function passwordonChangeHandler(event) {
    setData({ ...data, password: event.target.value });
  }
  function dateOfBirthonChangeHandler(event) {
    setData({ ...data, dateOfBirth: event.target.value });
  }
  function genderonChangeHandler(event) {
    setData({ ...data, gender: event.target.value });
  }
  function mobileonChangeHandler(event) {
    setData({ ...data, mobile: event.target.value });
  }
  function addressonChangeHandler(event) {
    setData({ ...data, address: event.target.value });
  }
  function cityonChangeHandler(event) {
    setData({ ...data, city: event.target.value });
  }
  function qualificationonChangeHandler(event) {
    console.log(data.qualification);
    setData({
      ...data,
      qualification: {
        ...data.qualification,
        [event.target.name]: event.target.checked,
      },
    });
  }

  function submit() {
    console.log("data", data);
  }

  return (
    <>
      <h1 className="form-heading">Registration Form</h1>
      <form autoComplete="on">
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="firstName">First Name</label>
              </td>
              <td>
                <input
                  type="text"
                  value={data.firstName}
                  id="firstName"
                  onChange={firstNameonChangeHandler}
                ></input>
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="lastName">Last Name</label>
              </td>
              <td>
                <input
                  type="text"
                  value={data.lastName}
                  id="lastName"
                  onChange={lastNameonChangeHandler}
                ></input>
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="nickName">Nick Name</label>
              </td>
              <td>
                <input
                  type="text"
                  value={data.nickName}
                  id="nickName"
                  onChange={nickNameonChangeHandler}
                ></input>
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="email">Email</label>
              </td>
              <td>
                <input
                  type="email"
                  value={data.email}
                  id="email"
                  onChange={emailonChangeHandler}
                ></input>
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="password">Password</label>
              </td>
              <td>
                <input
                  type="password"
                  value={data.password}
                  id="password"
                  onChange={passwordonChangeHandler}
                ></input>
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="dateOfBirth">Date of Birth</label>
              </td>
              <td>
                <input
                  type="date"
                  value={data.dateOfBirth}
                  id="dateOfBirth"
                  onChange={dateOfBirthonChangeHandler}
                ></input>
              </td>
            </tr>

            <tr>
              <td>
                <p>Gender</p>
              </td>
              <td>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  id="male"
                  checked={data.gender === "male"}
                  onChange={genderonChangeHandler}
                ></input>
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  id="female"
                  checked={data.gender === "female"}
                  onChange={genderonChangeHandler}
                ></input>
                <label htmlFor="female">Female</label>
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="tel">Mobile</label>
              </td>
              <td>
                <input
                  type="tel"
                  value={data.mobile}
                  id="tel"
                  onChange={mobileonChangeHandler}
                ></input>
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="address">Address</label>
              </td>
              <td>
                <textarea
                  name=""
                  id="address"
                  value={data.address}
                  cols="25"
                  rows="8"
                  onChange={addressonChangeHandler}
                ></textarea>
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="city">City</label>
              </td>
              <td>
                <select
                  name="city"
                  id="city"
                  value={data.city}
                  onChange={cityonChangeHandler}
                >
                  <option hidden={true}>Select City</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Jaipur">Jaipur</option>
                  <option value="Banglore">Banglore</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="qualification">Qualification</label>
              </td>
              <td>
                <input
                  type="checkbox"
                  name="matric"
                  id="matric"
                  value="matric"
                  checked={data.qualification.matric}
                  onChange={qualificationonChangeHandler}
                />
                12th
                <input
                  type="checkbox"
                  name="graduation"
                  id="graduation"
                  value="graduation"
                  checked={data.qualification.graduation}
                  onChange={qualificationonChangeHandler}
                />
                Graduation
                <input
                  type="checkbox"
                  name="post-graduation"
                  id="post-graduation"
                  value="post-graduation"
                  checked={data.qualification["post-graduation"]}
                  onChange={qualificationonChangeHandler}
                />
                Post Graduation
              </td>
            </tr>

            <tr>
              <td>
                <button type="button" onClick={submit}>
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}

export default Form;
