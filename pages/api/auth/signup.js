import { dbConnect, model } from "@/utils/models";

export default async function handler(req, res) {
  if (req.method != "POST") res.status(404).end("page not found");
  let data = JSON.parse(req.body);
  let newErrors = validateData(data);

  await dbConnect();
  const usersModel = await model("users");
  const isUsernameAvailable = await usersModel.find({
    username: data.username,
  });
  if (isUsernameAvailable.length > 0) newErrors.isUsernameAvailable = false;

  if (Object.keys(newErrors).length === 0) {
    delete data.confirmPassword;
    delete data.showEmailField;
    delete data.showMobileField;
    let response = await usersModel.insertMany(data);
    console.log(response);

    response = res.send({ redirect: true, url: "/auth/login" });
  } else res.send(newErrors);
}

function validateData(data) {
  const errors = {};
  const passwordRegex = /^(?=.*[@#$&*!])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
  const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  const mobileRegex = /^\d{10}$/;

  if (!data) return { err: "validation error" };

  if (!data.firstName.trim()) {
    errors.firstName = "First name is required";
  }

  if (!data.lastName.trim()) {
    errors.lastName = "Last name is required";
  }

  if (data.showEmailField) {
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!data.email.match(emailRegex)) {
      errors.email = "Invalid email format";
    }
  }

  if (data.showMobileField) {
    if (!data.mobile.trim()) {
      errors.mobile = "Mobile number is required";
    } else if (!data.mobile.match(mobileRegex)) {
      errors.mobile = "Invalid mobile number format";
    }
  }

  if (!data.showEmailField && !data.showMobileField)
    [(errors.emailOrMobile = "Either Email or Mobile is required")];

  if (!data.username.trim()) errors.username = "username is required";

  if (!data.password) {
    errors.password = "Password is required";
  } else if (!data.password.match(passwordRegex)) {
    errors.password = "Fullfill all the conditions";
  }

  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
}
