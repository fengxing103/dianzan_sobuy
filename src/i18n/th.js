export default {
  line: "สวิตช์",
  language: "เลือกภาษา",
  common: [
    "เว็บบอร์ดออนไลน์",
    "ยกเลิกการระงับ"
  ],
    home: {
        broadcast: "ขอแสดงความยินดีกับสมาชิก{member}แนะนำชื่อ{vipname}<br>ได้รับ{currency}{grade}รางวัลโปรโมชั่น!",
        taskHall: {
            title: ["ล็อบบี้ภารกิจ","พ่อค้าปล่อยฮอลล์"]
        },
        memberList: {
            title: "รายชื่อสมาชิก",
            data: ['ขอแสดงความยินดีด้วยครับ:{member}','เสร็จวันนี้{num}แผ่วเบา,การเปลี่ยนทิศทาง{currency}{profit}!']
        },
        businessList: {
            title: "รายชื่อพ่อค้า",
            data: [
            "{member}",
            "ประกาศวันนี้{num}งานเดี่ยว"
            ]
        },
        noticeTitle: "เคล็ดลับอบอุ่น",
        tabBar: ['หน้าแรก','ภารกิจ','วีไอพี','ผลประโยชน์','ของฉัน'],
    menu: [
      "พื้นที่ VIP",
       "วิดีโอสอน",
       "รางวัลส่งเสริมการขาย"
    ],
msg: "ภารกิจไม่เปิด",
video: "ไม่มีวิดีโอสอน"
    
    },

  login: {
    text: [
      "จำชื่อผู้ใช้ / รหัสผ่าน",
       "เข้าสู่ระบบ ... ",
       "เข้าสู่ระบบทันที"
    ],
    placeholder: [
      "โปรดป้อนหมายเลขโทรศัพท์",
       "กรุณาใส่รหัสผ่านของคุณ"
    ],
    i18n: [
      "ไม่{title}หมายเลขบัญชี？{a} {line}",
      "จดทะเบียน"
    ]
  },
  register: {
    text: [
      "ยินดีต้อนรับสู่การลงทะเบียน",
       "การส่งรหัส SMS ... ",
       "รับรหัส SMS",
       "กำลังลงทะเบียน ... ",
       "สมัครตอนนี้เลย",
       "มีบัญชีอยู่แล้วดาวน์โหลดเลย",
       "การลงทะเบียนหมายเลขโทรศัพท์มือถือ",
       "การลงทะเบียนอีเมล"
    ],
    placeholder: [
      "โปรดป้อนหมายเลขโทรศัพท์",
       "โปรดป้อนรหัสยืนยันทาง SMS",
       "กรุณาใส่รหัสผ่านของคุณ",
       "โปรดยืนยันรหัสผ่านของคุณ",
       "โปรดป้อนรหัสเชิญ",
       "รหัสผ่านสองรหัสต่างกัน",
       "โปรดป้อนรหัสยืนยัน",
       "กรุณากรอกหมายเลขตู้จดหมาย"
    ],
    i18n: [
      "มีบัญชีอยู่แล้ว？{a} {line}",
      "เข้าสู่ระบบ"
    ]
  },





    postTask: {
        navBar: {
            title: "โพสต์งาน",
            right: "กฎการเผยแพร่"
        },
        field: [
            {
                label: "การจัดประเภทงาน",
            },
            {
                label: "ชื่องาน",
                placeholder: "โปรดป้อนชื่องาน",
                error: "ชื่องานต้องไม่ว่างเปล่า"
            },
            {
                label: "แนะนำงาน",
                placeholder: "โปรดป้อนโปรไฟล์งาน"
            },
            {
                label: "ราคาต่อหน่วยงาน",
                placeholder: "โปรดป้อนราคาต่อหน่วยงาน",
                right: "{currency}",
                error: ["ราคาต่อหน่วยงานต้องไม่ว่างเปล่า","ราคาต่อหน่วยงานต้องไม่ต่ำกว่า 1{currency}"]
            },
            {
                label: "ปริมาณที่ได้รับ",
                placeholder: "โปรดป้อนจำนวน",
                error: "ปริมาณที่ได้รับต้องไม่ว่างเปล่า"
            },
            {
                label: "จำนวนรับ",
                placeholder: "โปรดป้อนจำนวนครั้ง",
                right: "ครั้ง / คน",
                error: "เวลารวบรวมต้องไม่ว่างเปล่า"
            },
            {
                label: "ราคางานทั้งหมด",
                error: "ไม่ได้คำนวณราคางานทั้งหมด"
            },
            {
                label: "ลิงค์ข้อมูล",
                placeholder: "กรุณากรอกที่อยู่ลิงค์",
                error: "ข้อมูลลิงก์ต้องไม่ว่างเปล่า"
            },
            {
                label: "ระดับงาน",
            },
            {
                label: "เส้นตาย",
                placeholder: "คลิกเพื่อเลือกวันที่",
                error: "กำหนดเวลาต้องไม่ว่างเปล่า"
            },
            {
                label: "เงื่อนไขการเสร็จสิ้น",
                error: "โปรดเลือกเงื่อนไขการสำเร็จ"
            },
            {
                label: "ตัวอย่างการตรวจสอบ",
            },
            {
                label: "ขั้นตอน",
                placeholder: "ขั้นตอนที่ง่ายและเข้าใจง่ายช่วยให้เสร็จสมบูรณ์!",
                error: "ขั้นตอนการดำเนินการต้องไม่ว่างเปล่า"
            },
        ],
        button: "ส่ง",
        step: {
            title: "ขั้นตอน",
            right: "ดำเนินการ",
            placeholder: "โปรดป้อนคำอธิบายขั้นตอน",
            button: ['ลบ','เพิ่ม']
        },
        tips: [
      "เกี่ยวกับค่าธรรมเนียมแพลตฟอร์ม {pump}{br}รุ่นนี้ต้องชำระเงินประมาณ {price}，โปรดตรวจสอบให้แน่ใจว่ายอดเงินในบัญชีเพียงพอ {a}{br}เคล็ดลับ: แพลตฟอร์มนี้ห้ามการเผยแพร่ภาพอนาจารการพนันเนื้อหาที่เกี่ยวข้องกับยาเสพติดและการเมืองที่กฎหมายห้ามหากถูกหักคะแนนบัญชีจะถูกบล็อก",
      "เพื่อเติมพลัง",
      "ทำอย่างน้อยหนึ่งขั้นตอน",
      "เพิ่มได้ถึงสิบขั้นตอน"
    ]
    },
    vip: {
        user: {
            title: ['ตัวตนของคุณ','นักท่องเที่ยว'],
            label: "งานประจำวัน",
            value: ['วันที่มีผล','ถาวร','กรุณาเข้าสู่ระบบก่อน'],
        },
        list: {
            label: "งานประจำวัน:{number}ครั้ง",
            button: "เข้าร่วมเดี๋ยวนี้",
            text: [
                  "รายได้ต่อวัน",
                  "รายได้ต่อเดือน",
                  "รางวัลผู้อ้างอิง: แต่ละรางวัล",
                  "ฟรี",
                  "ต่อคำสั่งซื้อ"
                  ]
        },
        dialog: ['กำหนดต้นทุน {amount} {currency}กลายเป็น{name}ใช่ไหม？','คุณอยู่ในขณะนี้{currname}，ไม่สามารถ{name}','กำหนดต้นทุน {amount} {currency}ต่ออายุ{name}ใช่ไหม？']
    },
    user: {
        myEarnings: {
            grid: ["ความสมดุลส่วนบุคคล","ผลประกอบการของเมื่อวานนี้","รายได้วันนี้","รายได้ในสัปดาห์นี้","รายได้ในเดือนนี้","รายได้ในเดือนที่แล้ว","รายได้รวม","เสร็จสิ้นงานวันนี้(โสด)","งานที่เหลือของวันนี้(โสด)"]
        },

    default: [
      "หัวหน้าของฉัน",
       "เข้าสู่ระบบบัญชี",
       "รหัสการเชิญ",
       "ออกจากระบบ",
       "สมดุล",
       "ทอง",
       "กระเป๋าเงินของฉัน",
       "หัวข้อ",
       "ขีด จำกัด ",
       "ดี",
       "ยอดเยี่ยม",
       "机器人"
    ],
    menu: [
      "บันทึกงาน",
       "งานตรวจสอบ",
       "การจัดการรุ่น",
       "ข้อมูลส่วนบุคคล",
       "การผูกบัญชี",
       "รายงานประจำวัน",
       "บันทึกการเปลี่ยนแปลงบัญชี",
       "เชิญเพื่อน ๆ",
       "รายงานทีม",
       "คู่มือช่วยเหลือ",
       "ศูนย์สินเชื่อ",
       "ดาวน์โหลดแอป"
    ]
    },

  userInfo: {
    default: [
      "ข้อมูลส่วนบุคคล",
       "แนวตั้ง",
       "หมายเลขโทรศัพท์",
       "บัตรเครดิตธนาคาร",
       "Alipay",
       "รายละเอียด",
       "ใส่รหัสผ่าน",
       "รหัสผ่านกองทุน",
       "คลิกเพื่อตั้งค่า",
       "แก้ไขรูปประจำตัว",
       "แก้ไขรหัสผ่านสำหรับเข้าสู่ระบบ",
       "แก้ไขรหัสผ่านกองทุน",
       "ส่ง",
       "ล้างแคช"
    ],
    label: [
      "รหัสผ่านเข้าสู่ระบบเดิม",
       "รหัสผ่านเข้าสู่ระบบใหม่",
       "ยืนยันรหัสผ่าน",
       "รหัสผ่านกองทุนเดิม",
       "รหัสผ่านกองทุนใหม่",
       "ยืนยันรหัสผ่าน"
    ],
    placeholder: [
      "กรุณาใส่รหัสผ่านเดิมสำหรับเข้าสู่ระบบ",
       "โปรดป้อนรหัสผ่านเข้าสู่ระบบใหม่",
       "กรุณายืนยันรหัสผ่านเข้าสู่ระบบ",
       "โปรดป้อนรหัสผ่านกองทุนเดิม",
       "โปรดป้อนรหัสผ่านกองทุนใหม่",
       "กรุณายืนยันรหัสผ่านกองทุน"
    ]
  },
  bankCard: {
    default: [
      "ผูกบัตรธนาคาร",
       "รับรองความถูกต้องตอนนี้",
       "กำลังส่ง ... ",
       "เพิ่มทันที",
       "เพิ่มบัตรธนาคาร"
    ],
    tips: [
      "โปรดเพิ่มบัตรธนาคารหลังการตรวจสอบชื่อจริง",
       "ชื่อเปิดบัญชีของบัตรธนาคารที่ผูกไว้ของคุณจะต้องตรงกับชื่อจริงที่ได้รับการยืนยันของคุณมิฉะนั้นการถอนจะล้มเหลว"
    ],
    label: [
      "ชื่อ",
       "ชื่อธนาคาร",
       "บัญชีธนาคาร",
       "รหัส IFSC"
    ],
    placeholder: [
      "โปรดเลือกชื่อธนาคาร",
       "โปรดป้อนบัญชีธนาคารของคุณ",
       "กรุณากรอกรหัส IFSC"
    ]
  },
  userSet: {
    default: [
      "ยืนยันแล้ว",
       "รายละเอียด",
       "ผูกพัน Alipay",
       "ส่ง"
    ],
    label: [
      "ชื่อจริง",
       "หมายเลข QQ",
       "บัญชี Alipay",
       "ชื่อ Alipay"
    ],
    placeholder: [
      "กรุณากรอกชื่อจริงของคุณ (สำหรับการถอนชื่อของคุณ)",
       "โปรดป้อนหมายเลข QQ",
       "โปรดป้อนบัญชี Alipay ของคุณ",
       "โปรดป้อนชื่อ Alipay ของคุณ"
    ],
    tips: "คำเตือน: ไม่สามารถแก้ไขบัตรธนาคารที่ผูกไว้ได้ แต่จะใช้สำหรับการถอนเงินของคุณ"
  },
  bindAccount: {
    default: [
      "บัญชีที่มีผลผูกพัน",
       "ดูบทแนะนำ",
       "ส่ง"
    ],
    tabs: [
      "หมายเลขบัญชี",
      "หมายเลขบัญชี",
      "หมายเลขบัญชี"
    ],
    label: [
      "คำแนะนำ",
       "เพิ่มภาพหน้าจอ",
      "หมายเลขบัญชี"
    ],
    placeholder: "กรุณาใส่{account}หมายเลขบัญชี"
  },
  dayReport: [
    "รายงานประจำวัน",
     "รายได้รวม",
     "งานของฉันเสร็จสมบูรณ์",
     "รายได้จากภารกิจของฉัน",
     "งานที่ผู้ใต้บังคับบัญชาทำเสร็จแล้ว",
     "รายได้จากงานที่ด้อยกว่า",
     "โสด",
     "30 วันล่าสุด",
     "ปริมาณ",
     "งาน",
     "ผู้ใต้บังคับบัญชา",
     "การบริโภค",
     "วันที่"
  ],
  fundRecord: {
    default: [
      "บันทึกรายจ่าย",
       "บันทึกการเติมเงิน",
       "บันทึกรายได้",
       "ชาร์จ",
       "รับ",
       "สนับสนุน"
    ],
    tabs: [
      "รายได้",
       "รายจ่าย",
       "เติมเงิน"
    ]
  },
  vanPull: [
    "ไม่มีข้อมูลเพิ่มเติม",
     "ไม่มีข้อมูล"
  ],
  promote: [
    "เพื่อนของคุณ",
    "เชิญคุณเข้าร่วม{title}",
    "รหัสคำแนะนำ",
     "คัดลอกรหัสอ้างอิง",
     "คัดลอกลิงก์คำเชิญ",
     "บันทึกรหัส QR",
     "รางวัลส่งเสริมการขาย",
     "บันทึกโปสเตอร์สำเร็จ",
     "บันทึกโปสเตอร์ไม่สำเร็จโปรดลองอีกสองสามครั้งหรือบันทึกภาพหน้าจอ",
     "โปรดจับภาพหน้าจอ",
     "บันทึกโปสเตอร์โปรโมชั่น",
     "บันทึกโปสเตอร์โปรโมตลงในโทรศัพท์ของคุณ <br> หากคุณทำไม่สำเร็จโปรดลองอีกสองสามครั้งหรือบันทึกภาพหน้าจอ"
  ],
  teamReport: {
    default: [
      "ค้นหา",
       "สมดุลของทีม",
       "ผลประโยชน์ของทีม",
       "ทีมเติมเงิน",
       "การถอนทีม",
       "จำนวนการเรียกเก็บเงินครั้งแรก",
       "จำนวนการเปิดตัว",
       "จำนวนทีม",
       "ทีมใหม่",
       "A",
       "ผม",
       "ผู้ใช้",
       "เติมเงิน",
       "ถอน",
       "เงินคืน",
       "ค่าคอมมิชชั่น",
       "เลือกปีเดือนและวัน",
       "ไม่มีข้อมูล",
       "จำนวนเงินที่เติม",
       "หมายเลขเติมเงิน",
       "เติมเงินคืน"
    ],
    tabs: [
      "รายงานทีม",
       "ทีมของฉัน"
    ],
    team: [
      "ระดับ 1",
       "ระดับ 2",
       "ระดับ 3"
    ]
  },
  help: [
    "คู่มือช่วยเหลือ",
     "ยังไม่มีเนื้อหา"
  ],
  credit: [
    "ศูนย์สินเชื่อ",
     "ใบแจ้งยอดเครดิต",
     "ประวัติเครดิต",
     "<p> 1. คะแนนเครดิตจะได้รับการประเมินสัปดาห์ละครั้ง </p> <p> 2. คะแนนเครดิตของผู้ใช้เริ่มต้น: <b>60</b></u> <p> 3. หากตรวจพบว่าผู้ใช้ทำการอัปโหลด รูปภาพปลอมหักหนึ่งวัน: <b> 1 </b> คะแนนขีด จำกัด การหักสูงสุด: <b> 7 </b> คะแนน </p> <p> 4. หากตรวจไม่พบผู้ใช้โดยใช้รูปภาพเท็จให้เพิ่ม <b> 1 </b> คะแนน</u> <p> 5. คะแนนเครดิตที่ต่ำกว่า <b> 50 </b> คะแนนจะถูก จำกัด การถอนออก </p> <p> 6. คะแนนเครดิตที่ต่ำกว่า <b> 30 </b> b> จำนวนงานแตะลดลงครึ่งหนึ่ง </p> <p> 7. คะแนนเครดิตที่น้อยกว่าหรือเท่ากับ <b> 0 </b> จะถูกบล็อก </p> ",
     "เครดิตของฉัน",
     "ไม่มีประวัติเครดิตชั่วคราว"
  ],
  upload: [
    "กำลังอัปโหลด ... ",
     "รูปแบบผิด",
     "อัปโหลดเรียบร้อยแล้ว",
     "การอัพโหลดล้มเหลว"
  ],
  task: {
    default: [
      "รายการงาน",
       "ข้อกำหนดงาน",
       "สร้าง",
       "การตรวจสอบ",
       "เปิดลิ้งค์",
       "คัดลอกลิงค์",
       "ราคาต่อหน่วย",
       "ส่ง",
       "ยอมแพ้"
    ],
    tabs: [
      "กำลังประมวลผล",
       "ภายใต้การทบทวน",
       "เสร็จสมบูรณ์",
       "ล้มเหลว",
       "เป็นอันตราย",
       "ถูกทอดทิ้ง"
    ],
    msg: "โปรดอัปโหลดภาพงานที่เสร็จสมบูรณ์",
    info: [
      "รายละเอียดงาน",
       "ชื่องาน",
       "รายได้จากงาน",
       "รายละเอียดภารกิจ",
       "คำขออัปโหลด",
       "ส่งตัวอย่าง",
       "ผู้ใช้ไม่ได้ส่งตัวอย่าง",
       "คำแนะนำในการตรวจสอบ",
       "วันที่ตรวจสอบ",
       "ด้านอุปสงค์",
       "ปล่อย",
       "สำเนา",
       "กระโดด",
       "ขั้นตอนงาน",
      "อันดับแรก{index}ขั้นตอน",
        "ตัวอย่างการตรวจสอบ",
       "ไม่มีตัวอย่างการตรวจสอบ",
       "กำลังโหลด ... ",
       "ละทิ้งงาน",
       "ส่งเพื่อทำงานให้เสร็จ",
       "โพสต์เนื้อหา"
    ],
    index: [
      "ตัวตนปัจจุบัน",
      "ระดับปัจจุบันของคุณคือ <i style=\"color:#1989fa\">{currVip}</i><br>รับกระแสได้เท่านั้น<i style=\"color:#1989fa\">{currVip}</i>งานระดับ<br>ไม่ว่าจะเข้าร่วม <i style=\"color:#dd6161\">{vip}</i> เกรด",
      "เข้าร่วมเดี๋ยวนี้",
       "โปรดเลือกหมวดหมู่งาน"
    ],
    list: [
      "รายการงาน",
       "ด้านอุปสงค์",
       "ที่เหลืออยู่",
       "อ้างสิทธิ์",
       "รับ"
    ],
    show: [
      "รายละเอียดงาน",
       "คนมีรายได้",
      "ที่เหลืออยู่{num}สถานที่",
      "ตรวจสอบภายใน 48 ชั่วโมง",
       "รายละเอียดภารกิจ",
       "ด้านอุปสงค์",
       "มาตรฐานการตรวจสอบ",
       "สำเนา",
       "กระโดด",
       "ขั้นตอนงาน",
      "อันดับแรก{index}ขั้นตอน",
      "ตัวอย่างการตรวจสอบ",
       "ไม่มีตัวอย่างการตรวจสอบ",
       "กำลังโหลด ... ",
       "กำลังส่ง ... ",
       "รับงาน",
       "เข้าสู่ระบบทันที",
       "โพสต์เนื้อหา"
    ]
  },
  serviceCenter: [
    "บริการลูกค้า",
     "สวัสดีฝ่ายบริการลูกค้าพิเศษ",
     "ยินดีให้บริการ",
     "บริการตัวเอง",
     "บริการออนไลน์",
     "เติมเงินฝ่ายบริการลูกค้า",
     "บริการลูกค้าทางไลน์"
  ],
  audit: {
    default: [
      "งานตรวจสอบ",
       "รับผู้ใช้",
       "วันรับรถ",
       "อัปเดต",
       "การตรวจสอบ"
    ],
    tabs: [
      "กำลังประมวลผล",
       "ภายใต้การทบทวน",
       "เสร็จสมบูรณ์",
       "ล้มเหลว"
    ],
    info: [
      "รายละเอียดการตรวจสอบ",
       "ชื่องาน",
       "จำนวนงาน",
       "บุคคลที่เสร็จสมบูรณ์แล้ว",
      "ที่เหลืออยู่{num}สถานที่",
      "รายละเอียดภารกิจ",
       "ลิงค์ข้อมูล",
       "ตัวอย่างการตรวจสอบ",
       "รับผู้ใช้",
       "รับ",
       "เงื่อนไขสำเร็จรูป",
       "ส่งตัวอย่าง",
       "ผู้ใช้ไม่ได้ส่งตัวอย่าง",
       "อัปเดต",
       "กำลังโหลด ... ",
       "เป็นอันตราย",
       "Retrial",
       "ความล้มเหลว",
       "ความสำเร็จ",
       "งานตรวจสอบ",
       "คำแนะนำในการตรวจสอบ",
       "โปรดป้อนคำอธิบายบทวิจารณ์",
       "งานที่ส่งมานั้นไม่มีคุณสมบัติและจำเป็นต้องส่งใหม่เพื่อตรวจสอบ",
       "ขอแสดงความยินดีที่ภารกิจสำเร็จจงตั้งใจทำงาน",
       "ภาพหน้าจอของหน้างานที่ส่งไม่ถูกต้องงานล้มเหลว",
       "ส่งงานโดยประสงค์ร้ายงานล้มเหลว"
    ]
  },
  postRecord: [
    "การจัดการรุ่น",
     "ปล่อย",
     "รวม",
     "เสร็จสมบูรณ์",
     "เส้นตาย",
     "การตรวจสอบ",
     "ยกเลิก",
     "แก้ไข"
  ],
  wallet: {
    default: [
      "กระเป๋าเงินของฉัน",
       "เติมเงิน",
       "ถอน",
       "บันทึกการเติมเงิน",
       "บันทึกการถอน",
       "ชาร์จ",
       "พูดถึง",
       "Alipay"
    ],
    label: [
      "วิธีการถอน",
       "จำนวนเงินที่ถอน",
       "รหัสผ่านกองทุน",
       "ส่ง",
       "หมายเลขโทรศัพท์",
       "กล่องจดหมาย",
      "IFSC"
    ],
    placeholder: [
      "เลือกวิธีการถอน",
       "กรุณากรอกจำนวนเงินที่ถอนออก",
       "กรุณาใส่รหัสผ่านกองทุน",
       "กรุณาเลือกวิธีการถอน",
       "โปรดป้อนหมายเลขโทรศัพท์มือถือของผู้รับเงิน",
       "โปรดป้อนที่อยู่อีเมลของผู้รับเงิน",
       "กรุณากรอก IFSC ผู้รับเงิน"
    ],
    msg: [
      "คุณยังไม่ได้ตั้งรหัสผ่านกองทุนโปรดตั้งค่าก่อน",
       "คุณยังไม่ได้ผูกบัตรธนาคารโปรดทำการผูกมัดก่อน"
    ]
  },
  recharge: {
    default: [
      "เติมเงิน",
       "รายละเอียดการเติมเงิน",
       "บันทึกการเติมเงิน",
       "ยอดคงเหลือ {money} โปรดเลือกวิธีการเติมเงิน",
       "จำนวนเงินขั้นต่ำสำหรับธุรกรรมเดียวคือ {currency} {min} สูงสุดคือ {currency} {max} และค่าธรรมเนียมการจัดการคือ {fee}%",
       "กำลังส่ง ... ",
       "เติมเงินทันที",
       "กลับ",
       "กำลังโหลด ... "
    ],
    label: [
      "จำนวนเงินที่เติม",
       "ช่องเติมเงิน",
       "ชื่อผู้โอน",
       "ชื่อผู้ชำระเงิน",
       "โทรศัพท์มือถือของผู้ชำระเงิน",
       "บัญชี UPI ของผู้ชำระเงิน",
       "อีเมลของผู้ชำระเงิน"
    ],
    placeholder: [
      "กรุณากรอกจำนวนเงินที่เติม",
       "โปรดเลือกช่องเติมเงิน",
       "กรุณากรอกชื่อผู้โอน",
       "จำนวนเงินขั้นต่ำสำหรับธุรกรรมหนึ่งรายการคือ {currency} {min}",
       "จำนวนเงินสูงสุดของธุรกรรมหนึ่งรายการคือ {currency} {max}",
       "กรุณากรอกชื่อผู้ชำระเงิน",
       "โปรดป้อนหมายเลขโทรศัพท์มือถือของผู้ชำระเงินบวกรหัสพื้นที่ระหว่างประเทศก่อนหมายเลขเช่น +86",
       "โปรดป้อนบัญชี UPI ของผู้ชำระเงิน",
       "โปรดป้อนที่อยู่อีเมลของผู้ชำระเงิน"
    ],
    info: [
      "จำนวนเงินที่เติม",
       "หมายเลขคำสั่งซื้อ",
       "ธนาคารผู้รับผลประโยชน์",
       "บัญชีรับ",
       "ผู้รับเงิน",
       "สำเนา",
       "{type} โอน",
       "โอนภาพหน้าจอ",
       "ส่ง",
       "รหัส IFSC",
       "ประเภทบัญชี",
       "คำแนะนำในการจัดการ"
    ],
    tips: [
      "โปรดเลือกวิธีการต่อไปนี้เพื่อโอนเงินจำนวนที่ตรงกันเพื่อหลีกเลี่ยงความล่าช้าในการตรวจสอบการเงิน <br> หลังจากโอนแล้วโปรดอัปโหลดภาพหน้าจอการโอนเพื่อเป็นหลักฐานยืนยัน",
       "ไม่ต้องเพิ่มเพื่อนสแกนคิวอาร์โค้ดเพื่อโอนเงินให้ฉันและจ่ายเงิน",
       "โปรดปฏิบัติตามข้อมูลด้านล่างเพื่อทำการโอนเงิน",
       "คำเตือน: หลังจากชำระเงินสำเร็จโปรดติดต่อฝ่ายบริการลูกค้าออนไลน์และแจ้งหมายเลขบัญชีสมาชิกของคุณจำนวนเงินที่เติมหมายเลขคำสั่งซื้อหมายเลขบัญชีผู้ฝากและเวลาในการเติมเงินเพื่อความสะดวกทางการเงินในการเติมเงินให้คุณได้ทันเวลา",
       "หมายเหตุ: สมาชิกโปรดส่งการชำระเงินด้วยการโอนแต่ละครั้ง",
       "หลังการโอนโปรดอัปโหลดภาพหน้าจอการโอนเพื่อเป็นหลักฐานยืนยัน"
    ]
  },

  dialog: [
    "พร้อมท์",
     "กำหนด",
     "กำลังส่ง ... ",
     "คัดลอกสำเร็จ",
     "เวอร์ชันระบบ IOS เหลือน้อยและไม่รองรับ",
     "กำลังลงทะเบียน ... ",
     "กำลังโหลด ... "
  ],

  lineList: [
    "การเลือกเส้น",
     "บรรทัดปัจจุบัน",
     "ไลน์"
  ],


}