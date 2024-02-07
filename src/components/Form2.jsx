import { useState } from "react";

function Form2() {
  const [data, setData] = useState(initialState())

  function initialState() {
    return {
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
    }
}


  function onChangeHandler(event) {
    let key = event.target.name;

    if (event.target.type === "checkbox") {
      setData({
        ...data,
        qualification: {
          ...data.qualification,
          [event.target.name]: event.target.checked,
        },
      });
    } else {
      setData({ ...data, [key]: event.target.value });
    }
  }

  function submit() {
    console.log("data", data);
    setData(initialState());
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
                  name="firstName"
                  onChange={onChangeHandler}
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
                  name="lastName"
                  onChange={onChangeHandler}
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
                  name="nickName"
                  onChange={onChangeHandler}
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
                  name="email"
                  onChange={onChangeHandler}
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
                  name="password"
                  onChange={onChangeHandler}
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
                  name="dateOfBirth"
                  onChange={onChangeHandler}
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
                  onChange={onChangeHandler}
                ></input>
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  id="female"
                  checked={data.gender === "female"}
                  onChange={onChangeHandler}
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
                  name="mobile"
                  onChange={onChangeHandler}
                ></input>
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="address">Address</label>
              </td>
              <td>
                <textarea
                  name="address"
                  id="address"
                  value={data.address}
                  cols="25"
                  rows="8"
                  onChange={onChangeHandler}
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
                  onChange={onChangeHandler}
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
                  onChange={onChangeHandler}
                />
                12th
                <input
                  type="checkbox"
                  name="graduation"
                  id="graduation"
                  value="graduation"
                  checked={data.qualification.graduation}
                  onChange={onChangeHandler}
                />
                Graduation
                <input
                  type="checkbox"
                  name="post-graduation"
                  id="post-graduation"
                  value="post-graduation"
                  checked={data.qualification["post-graduation"]}
                  onChange={onChangeHandler}
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

export default Form2;
