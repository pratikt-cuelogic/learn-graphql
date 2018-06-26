import Validator from 'validatorjs'
var data = {
  name: 'John',
  email: 'not-valid-email'
};
var rules = {
  name: 'required',
  email: 'required|email'
};
var validation = new Validator(data, rules);
validation.passes(); // false
validation.errors.first('email'); // 'The email format is invalid.