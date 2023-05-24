export function validationForm(props) {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const errors = {};

  if (!props.email) {
    errors.email = 'El email no debe estar vacio';
  } else if (!regexEmail.test(props.email)) {
    errors.email = 'Debe ser un correo electrónico';
  } else if (props.email.length > 35) {
    errors.email = 'El email debe tener menos de 35 caracteres';
  }

  if (!props.password) {
    errors.password = 'El password es requerido';
  } else if (!/\d/.test(props.password)) {
    errors.password = 'El password debe contener al menos un numero';
  } else if (props.password.length < 6 || props.password.length > 10) {
    errors.password = 'El password debe tener entre 6 y 10 caracteres';
  }
  return errors;
}
