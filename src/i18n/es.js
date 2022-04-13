export default {
  line: "Cambiar la línea",
  language: "Elige el idioma",
  common: [
    "Servicio al cliente en línea", 
"Cancelar suspensión" 
  ],
    home: {
        broadcast: "Felicidades, miembro {membol} recomienda un {vipname} < br > para {currency} {grae} Premio de promoción! ",
        taskHall: {
            title: ["sala de misión","sala de distribución de negocios"]
        },
        memberList: {
            title: "Lista de miembros",
            data: ['Felicidades:{member}','Completar{num}single hoy, ganar {currency}{profit}!']
        },
        businessList: {
            title: "Lista de negocios",
            data: [
            "{member}",
            "Publique {num} una sola tarea hoy"
            ]
        },
        noticeTitle: "Consejos cálidos",
        tabBar: ["Inicio de casa","Tarea","VIP","Ganancia","mío"],
    menu: [
      "Área VIP", 
"Video tutorial", 
"Premio de promoción" 
    ],
msg: "La tarea no está abierta",
video: "No hay video tutorial"
    
    },

  login: {
    text: [
      "Recuerde nombre de usuario/contraseña", 
"Iniciando sesión. ..", 
"Iniciar sesión ahora" 
    ],
    placeholder: [
      "Por favor ingrese el número de teléfono", 
"Por favor ingrese la contraseña de inicio de sesión" 
    ],
    i18n: [
      "Sin cuenta {title}? {a} {line}",
      "Registrarse"
    ]
  },
  register: {
    text: [
      "Bienvenido a registrarse",
      "Código de SMS enviado...",
      "Obtener código SMS",
      "Registrarse...",
      "Regístrese ahora",
      "Tener una cuenta, descargarla de inmediato",
      "Número de teléfono",
      "Registro de correo"
    ],
    placeholder: [
      "Por favor ingrese el número de teléfono", 
"Por favor ingrese el código de verificación de SMS", 
"Por favor ingrese la contraseña de inicio de sesión", 
"Por favor confirme su contraseña", 
"Por favor ingrese el código de invitación", 
"Dos contraseñas no son lo mismo", 
"Por favor ingrese el código de verificación", 
"Introduzca el número de correo." 
    ],
    i18n: [
      "Tener una cuenta？{a} {line}",
      "Iniciar sesión"
    ]
  },





    postTask: {
        navBar: {
            title: "Publicar la tarea ",
            right: "Reglas de publicación"
        },
        field: [
            {
                label: "Clasificación de tareas",
            },
            {
                label: "Título de la tarea",
                placeholder: "Por favor ingrese el título de la tarea",
                error: "El título de la tarea no puede estar vacío"
            },
            {
                label: "Perfil de la misión",
                placeholder: "Por favor ingrese el perfil de la tarea"
            },
            {
                label: "Precio unitario de la tarea",
                placeholder: "Por favor ingrese el precio unitario de la tarea",
                right: "{currency}",
                error: ["El precio unitario de la tarea no puede estar vacío","El precio unitario de la tarea no puede ser inferior a 1{currency}"]
            },
            {
                label: "Recoge la cantidad",
                placeholder: "Por favor ingrese la cantidad recibida",
                error: "La cantidad recibida no puede estar vacía"
            },
            {
                label: "Número de recibos",
                placeholder: "Por favor ingrese el número de recibos",
                right: "Tiempo/persona",
                error: "El número de recibos no puede estar vacío"
            },
            {
                label: "Precio total de la misión",
                error: "El precio total de la tarea no se calcula"
            },
            {
                label: "Información de enlace",
                placeholder: "Por favor ingrese la dirección del enlace",
                error: "La información del enlace no puede estar vacía"
            },
            {
                label: "Nivel de tarea",
            },
            {
                label: "Fecha límite",
                placeholder: "Haga clic para seleccionar la fecha",
                error: "La fecha límite no puede estar vacía"
            },
            {
                label: "Condiciones de finalización",
                error: "Seleccione las condiciones de finalización"
            },
            {
                label: "Ejemplo de auditoría",
            },
            {
                label: "Pasos de operación",
                placeholder: "¡Pasos fáciles de entender ayudan a completar!",
                error: "Los pasos de operación no pueden estar vacíos"
            },
        ],
        button: "Enviado",
        step: {
            title: "Pasos de operación",
            right: "Completa",
            placeholder: "Por favor ingrese la descripción del paso",
            button: ['Eliminar','Adición']
        },
        tips: [
      "Tarifas de plataforma {pump}{br}Pago por esta publicación {price}，Asegúrese de que el saldo sea suficiente. {a}{br}Aviso: Esta plataforma prohíbe publicar todo lo prohibido por la ley, como descuentos de puntos, cierre de cuentas, etc.",
      "Para recargar", 
"Mantener al menos un paso", 
"Agregar hasta diez pasos" 
    ]
    },
    vip: {
        user: {
            title: ['Su identidad.','Turista'],
            label: "Tareas diarias",
            value: ['Fecha de entrada','Validez permanente','Por favor.'],
        },
        list: {
            label: "Tareas diarias:{number}Vez",
            button: "立即加入",
            text: [
                  "Ingresos diarios", 
"Ingresos mensuales", 
"Recompensas recomendadas: por nombre", 
"Gratis", 
"Cada solo" 
                  ]
        },
        dialog: ['Gasto determinado {amount} {currency}Ser{name}Sí？','Por ahora.{currname}，Imposible.{name}','Gasto determinado {amount} {currency}Renovación{name}Sí？']
    },
    user: {
        myEarnings: {
            grid: ["Saldo personal","Ganancias de ayer","Ganancias de hoy","Esta semana.","Ingresos del mes","Ingresos mensuales","Producto bruto","Termina hoy.(Uno)","El resto del día(Uno)"]
        },

    default: [
      "Mis superiores", 
"Cuenta de inicio de sesión", 
"Código de invitación", 
"Salir de inicio de sesión", 
"Saldo", 
"{currency}", 
"Mi billetera", 
"Título", 
"Restricción", 
"Bien", 
"Excelente",
"机器人"
    ],
    menu: [
      "Registro de misión", 
"Misión de auditoría", 
"Gestión de lanzamiento", 
"Información personal", 
"Enlace de cuenta", 
"Informe de fin de día", 
"Registro de cambio de cuenta", 
"Invita a tus amigos", 
"Informe del equipo", 
"Manual de ayuda",  
"Centro de crédito", 
"Descarga de APP" 
    ]
    },

  userInfo: {
    default: [
"Información personal", 
"Avatar", 
"Número de teléfono", 
"Tarjeta bancaria", 
"Alipay", 
"Detalles", 
"Contraseña de inicio de sesión", 
"Contraseña de fondos", 
"Haga clic en Configuración", 
"Modificar avatar", 
"Modificar la contraseña de inicio de sesión", 
"Modificar la contraseña de fondos", 
"Enviado", 
"Caché vacío" 
    ],
    label: [
"Contraseña de inicio de sesión original", 
"Nueva contraseña de inicio de sesión", 
"Confirmar contraseña", 
"Contraseña de fondos original", 
"Nueva contraseña de fondo", 
"Confirmar contraseña" 
    ],
    placeholder: [
"Por favor ingrese la contraseña de inicio de sesión original", 
"Por favor ingrese una nueva contraseña de inicio de sesión", 
"Por favor confirme la contraseña de inicio de sesión", 
"Por favor ingrese la contraseña de capital original", 
"Por favor ingrese una nueva contraseña de fondo", 
"Por favor confirme la contraseña de financiación" 
    ]
  },
  bankCard: {
    default: [
"Tarjeta bancaria enlazada", 
"Certificación inmediata", 
"Enviar...", 
"Agregar ahora", 
"Agregar tarjeta bancaria" 
    ],
    tips: [
"Por favor, nombre real después de la certificación para agregar una tarjeta bancaria", 
"El nombre de su cuenta que vincula su tarjeta bancaria debe ser el mismo que su nombre real certificado; de lo contrario, no podrá cobrar con éxito. " 
    ],
    label: [
"Nombre", 
"Nombre del banco", 
"Cuenta bancaria", 
"Código IFSC" 
    ],
    placeholder: [
"Por favor, elija el nombre del banco", 
"Por favor ingrese la cuenta bancaria", 
"Por favor ingrese el código IFSC" 
    ]
  },
  userSet: {
    default: [
"Certificación de nombre real", 
"Detalles", 
"Alipay enlazado", 
"Enviado" 
    ],
    label: [
"Nombre real", 
"Número QQ", 
"Cuenta Alipay", 
"Nombre Alipay" 
    ],
    placeholder: [
"Por favor ingrese el nombre real (mi nombre es nombre)", 
"Por favor ingrese el número QQ", 
"Por favor ingrese la cuenta de Alipay", 
"Por favor ingrese el nombre de Alipay" 
    ],
    tips: "Consejos: la tarjeta bancaria enlazada no se puede modificar para su retiro"
  },
  bindAccount: {
    default: [
"Cuenta enlazada", 
"Ver tutorial", 
"Enviado" 
    ],
    tabs: [
"Cuenta", 
"Cuenta", 
"Cuenta" 
    ],
    label: [
"Instrucciones de operación", 
"Agregar capturas de pantalla", 
"Cuenta" 
    ],
    placeholder: "Por favor ingrese{account}Cuenta"
  },
  dayReport: [
"Informe de fin de día", 
"Ingresos totales", 
"Completé la tarea", 
"Mi ingreso de la tarea", 
"Tareas realizadas por los subordinados", 
"Ingresos de tareas subordinadas", 
"Solo", 
"Los últimos 30 días", 
"Cantidad", 
"Misión", 
"Subordinado", 
"Consumo", 
"Fecha" 
  ],
  fundRecord: {
    default: [
"Registro de gastos", 
"Registro de recarga", 
"Registro de ingresos", 
"Llena", 
"Recibir", 
"Rama" 
    ],
    tabs: [
"Ingresos", 
"Gasto", 
"Recarga" 
    ]
  },
  vanPull: [
"No más datos", 
"Sin datos" 
  ],
  promote: [
    "Tu amigo",
    "Invitarte a unirte{title}",
"Código recomendado", 
"Copiar código recomendado", 
"Copiar enlace de invitación", 
"Guardar código bidimensional", 
"Recompensa promocional", 
"Guarde el éxito del cartel", 
"Error al guardar el póster, intente varias veces o guarde la pantalla", 
"Por favor capturas de pantalla", 
"Guardar carteles promocionales", 
    "Guarde carteles promocionales en el teléfono<br>Si no tiene éxito, intente varias veces o guarde la captura de pantalla"
  ],
  teamReport: {
    default: [
"Búsqueda", 
"Balance de equipo", 
"Ingresos del equipo", 
"Recarga del equipo", 
"Colección de equipo", 
"El primer número de llenos", 
"Número de empuje", 
"Número de equipos", 
"Nuevo equipo", 
"A", 
"Yo", 
"Usuario", 
"Recarga", 
"Recaudad", 
"Punto de regreso", 
"Comisión", 
"Elige el año, el mes y el día", 
"Sin datos", 
"Cantidad de recarga", 
"Número de recarga", 
"Reembolso" 
    ],
    tabs: [
"Informe del equipo", 
"Mi equipo" 
    ],
    team: [
"Nivel 1", 
"Nivel 2", 
"Tres" 
    ]
  },
  help: [
    "Manual de ayuda ",
    "Sin contenido"
  ],
  credit: [
"Centro de crédito", 
"Declaración de crédito", 
"Historial de crédito", 
    "<p>1.Puntos de crédito una vez a la semana</p><p>2.Crédito inicial de usuario:<b>60</b></p><p>3.Si detecta que el usuario está haciendo una tarea para cargar una deducción de imagen falsa:<b>1</b>Integral,Límite de deducción:<b>7</b>Integral</p><p>4.Si no se detecta el uso de una imagen falsa por el usuario<b>1</b>Integral</p><p>5.Puntos de crédito por debajo<b>50</b>Los puntos serán retirados restringidos</p><p>6.Puntos de crédito por debajo<b>30</b>El número de tareas de derivación se reduce a la mitad</p><p>7.Puntos de crédito menores o iguales<b>0</b>Los puntos serán numerados</p>",
"Mi crédito", 
"No hay registro de crédito por el momento" 
  ],
  upload: [
"Cargar. ..", 
"Formato de error", 
"Subir exitoso", 
"La carga falló" 
  ],
  task: {
    default: [
"Lista de tareas", 
"Requisitos de la misión", 
"Crear", 
"Auditoría", 
"Abra el enlace", 
"Copiar enlace", 
"Precio unitario", 
"Enviado", 
"Renuncia" 
    ],
    tabs: [
"En progreso", 
"Auditoría", 
"Completado", 
"Fallado", 
"Malicioso", 
"Se ha dado por vencido" 
    ],
    msg: "Por favor cargue la imagen de la tarea completa",
    info: [
"Detalles de la misión", 
"Título de la tarea", 
"Ingresos de la misión", 
"Descripción de la tarea", 
"Requisitos de carga", 
"Presentar muestra", 
"El usuario no envió la muestra", 
"Notas de auditoría", 
"Fecha de auditoría", 
"Lado de la demanda", 
"Publicar", 
"Copiar", 
"Salto", 
"Pasos de la misión", 
      "No{index}Paso",
"Ejemplo de auditoría", 
"Sin muestra de auditoría", 
"Carga de datos. ..", 
"Renuncia a la tarea", 
"Enviar para completar la tarea", 
"Publicar contenido" 
    ],
    index: [
      "Identidad actual",
      "Tu nivel actual es <i style=\"color:#1989fa\">{currVip}</i><br>Solo puede recibir el actual<i style=\"color:#1989fa\">{currVip}</i>Tarea de nivel<br>Si unirse o no <i style=\"color:#dd6161\">{vip}</i> Nivel",
"Únete ahora", 
"Seleccione la categoría de la tarea" 
    ],
    list: [
"Lista de tareas", 
"Lado de la demanda", 
"Restante", 
"Requisitos", 
"Recibir" 
    ],
    show: [
"Detalles de la misión", 
"La gente ha ganado", 
      "Residual{num}Lugares",
"Revisión dentro de las 48 horas", 
"Descripción de la tarea", 
"Lado de la demanda", 
"Estándares de auditoría", 
"Copiar", 
"Salto", 
"Pasos de la misión", 
      "No{index}Paso",
"Ejemplo de auditoría", 
"Sin muestra de auditoría", 
"Carga de datos. ..", 
"Enviar...", 
"Recibir tareas", 
"Iniciar sesión ahora", 
"Publicar contenido" 
    ]
  },
  serviceCenter: [
"Centro de servicio al cliente", 
"Hi, servicio al cliente exclusivo", 
"Me complace servirle", 
"Autoservicio", 
"Servicio al cliente en línea", 
"Servicio al cliente recargable", 
"Servicio al cliente de línea" 
  ],
  audit: {
    default: [
"Misión de auditoría", 
"Recibir usuario", 
"Fecha de recolección", 
"Fecha de actualización", 
"Auditoría"
    ],
    tabs: [
"En progreso", 
"Auditoría",
"Completado", 
"Falló" 
    ],
    info: [
"Detalles de la auditoría", 
"Título de la tarea", 
"Cantidad de la misión", 
"La gente ha terminado", 
      "Residual{num}Lugares",
"Descripción de la tarea", 
"Información de enlace", 
"Ejemplo de auditoría", 
"Recibir usuario", 
"Recoger", 
"Estado completo", 
"Presentar muestra", 
"El usuario no envió la muestra", 
"Fecha de actualización", 
"Carga de datos. ..", 
"Malicioso", 
"Revisión", 
"Fallo", 
"Éxito", 
"Misión de auditoría", 
"Notas de auditoría", 
"Por favor ingrese las instrucciones de revisión", 
"Las tareas enviadas fallaron, la necesidad de volver a presentar la revisión", 
"Felicidades por la finalización de la misión, redoblar sus esfuerzos", 
"Error de captura de pantalla de la página de tareas enviada, la tarea falló", 
"Enviar tareas maliciosamente, la tarea falló" 
    ]
  },
  postRecord: [
"Gestión de lanzamiento", 
"Publicar", 
"Total", 
"Completado", 
"Fecha límite", 
"Auditoría", 
"Revocado", 
"Editar" 
  ],
  wallet: {
    default: [
"Mi billetera", 
"Recarga", 
"Recaudad", 
"Registro de recarga", 
"Registro de recogida", 
"Llena", 
"Mencionar", 
"Alipay" 
    ],
    label: [
"Método de recogida", 
"Cantidad de efectivo", 
"Contraseña de fondos", 
"Enviado", 
"Número de teléfono", 
"Correo electrónico", 
"IFSC" 
    ],
    placeholder: [
"Elige la forma de cobrar", 
"Por favor ingrese la cantidad de efectivo", 
"Por favor ingrese la contraseña de fondos", 
"Por favor, elija la forma de cobrar", 
"Por favor ingrese el número de teléfono del beneficiario", 
"Por favor ingrese el buzón del beneficiario", 
"Por favor ingrese el IFSC del beneficiario" 
    ],
    msg: [
"No ha establecido una contraseña de capital, por favor configure", 
"No ha vinculado la tarjeta bancaria, por favor enlace" 
    ]
  },
  recharge: {
    default: [
"Recarga", 
"Detalles de recarga", 
"Registro de recarga", 
      "Saldo disponible{money}，Por favor, elija el método de recarga",
      "La cantidad mínima única es{currency}{min}，El más alto{currency}{max}，Tarifa de manejo{fee}%",
      "Enviado...",
      "Recarga inmediata",
      "Regresa",
      "Carga..."
    ],
    label: [
"Cantidad de recarga", 
"Canal de recarga", 
"Nombre de la transferencia", 
"Nombre del pagador", 
"Teléfono móvil pagador", 
"Cuenta UPI del pagador", 
"Correo electrónico del pagador" 
    ],
    placeholder: [
"Por favor ingrese la cantidad de recarga", 
"Seleccione el canal de recarga", 
"Por favor ingrese el nombre de la transferencia", 
      "La cantidad mínima única es{currency}{min}",
      "La cantidad máxima única es{currency}{max}",
"Por favor ingrese el nombre del pagador", 
"Ingrese el número de teléfono del pagador, antes del número más un código de área internacional, como 86", 
"Por favor ingrese la cuenta UPI del pagador", 
"Por favor ingrese el buzón del pagador" 
    ],
    info: [
"Cantidad de recarga", 
"Número de pedido", 
"Banco receptor", 
"Cuenta de cobro", 
"Beneficiario", 
"Copiar", 
"{type}Transferencia", 
"Captura de pantalla de transferencia", 
"Enviado", 
"Código IFSC", 
"Tipo de cuenta", 
"Instrucciones de procesamiento" 
    ],
    tips: [
      "Seleccione el siguiente método para transferir la cantidad correspondiente a fin de no retrasar la verificación financiera<br>Después de la transferencia, cargue la captura de pantalla de transferencia como prueba de verificación",
"No es necesario agregar amigos, barrer el código bidimensional para pagarme la transferencia", 
"Por favor, siga la información a continuación para completar la transferencia", 
"Consejo: Después del pago exitoso, comuníquese con el servicio de atención al cliente en línea para proporcionar su cuenta de miembro, cantidad de recarga, número de pedido, cuenta de depositante, tiempo de recargación; Facilitar los fondos financieros oportunos para usted ", 
"Nota: los miembros pagan cada transferencia, envíe una vez", 
"Después de la transferencia, cargue la captura de pantalla de transferencia como prueba de verificación" 
    ]
  },

  dialog: [
"Consejo", 
"OK", 
    "Enviado...",
"Copiar exitoso", 
"La versión del sistema IOS no es compatible con bajo", 
    "Registrarse...",
    "Carga de datos..."
  ],

  lineList: [
"Selección de línea", 
"Línea actual", 
"Línea" 
  ],


}