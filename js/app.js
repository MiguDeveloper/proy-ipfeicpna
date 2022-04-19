$(document).ready(function () {
  $('input[type="file"]').change(function (e) {
    let fileName = e.target.files.length
      ? e.target.files[0].name
      : 'Falta adjunto';
    $('#nameDoc').val(fileName);
  });

  $('#fNacimiento').datepicker({
    dateFormat: 'dd/mm/yy',
    changeMonth: true,
    changeYear: true,
    yearRange: '-70:+0',
    dayNames: [
      'Domingo',
      'Lunes',
      'Martes',
      'Miercoles',
      'Jueves',
      'Viernes',
      'Sabado',
    ],
    dayNamesMin: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
    firstDay: 1,
    gotoCurrent: true,
    monthNamesShort: [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ],
    monthNames: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Deciembre',
    ],
  });

  $.validator.addMethod(
    'emailfull',
    function (value, element) {
      return (
        this.optional(element) ||
        /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value)
      );
    },
    'Formato correo no valido'
  );

  $.validator.addMethod(
    'filesize',
    function (value, element, param) {
      return this.optional(element) || element.files[0].size <= param;
    },
    'Adjuntar Comprobante menor 1MB'
  );

  $('#frmRegistro').validate({
    ignore: '',
    rules: {
      nombres: {
        required: true,
      },
      primerApellido: {
        required: true,
      },
      segundoApellido: {
        required: true,
      },
      nroDni: {
        required: true,
        number: true,
        minlength: 8,
        maxlength: 8,
      },
      fNacimiento: {
        required: true,
      },
      email: {
        required: true,
        emailfull: true,
      },
      nroCelular: {
        required: true,
        number: true,
        minlength: 9,
        maxlength: 9,
      },
      file: {
        required: true,
        filesize: 1048576,
      },
    },
    messages: {
      nombres: {
        required: 'El campo es requerido',
      },
      primerApellido: {
        required: 'El campo es requerido',
      },
      segundoApellido: {
        required: 'El campo es requerido',
      },
      nroDni: {
        required: 'El campo es requerido',
        number: 'Solo digitos númericos',
        minlength: 'Minimo 8 digitos',
        maxlength: 'Máximo 8 digitos',
      },
      fNacimiento: {
        required: 'El campo es requerido',
      },
      email: {
        required: 'El campo es requerido',
        email: 'Formato de correo no es valido',
      },
      nroCelular: {
        required: 'El campo es requerido',
        number: 'Solo digitos númericos',
        minlength: 'Minimo 9 digitos',
        maxlength: 'Máximo 9 digitos',
      },
      file: {
        required: 'Adjunte el comprobante',
        filesize: 'Adjuntar Comprobante menor 1MB de tamaño',
      },
    },
    submitHandler: function (form) {
      // Formulario Valido
      console.log('...enviando formulario');
      Swal.fire({
        icon: 'success',
        text: 'Se envió con éxito la información',
      });
    },
    invalidHandler: function (event, validator) {
      console.log('form invalid: campos requeridos');
    },
  });
});
