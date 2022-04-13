"use strict";

exports.__esModule = true;
exports.default = void 0;
var _default = {
  name: 'เนม',
  tel: 'โทรศัพท์',
  save: 'เก็บรักษา',
  confirm: 'ยืนยัน',
  cancel: 'ยกเลิก',
  delete: 'ลบทิ้ง',
  complete: 'เสร็จสิ้น',
  loading: 'โหลด...',
  telEmpty: 'กรุณากรอกเบอร์โทรศัพท์',
  nameEmpty: 'กรุณากรอกชื่อ',
  nameInvalid: 'กรุณาใส่ชื่อที่ถูกต้อง',
  confirmDelete: 'คุณแน่ใจว่าต้องการลบ',
  telInvalid: 'กรุณาใส่หมายเลขโทรศัพท์ที่ถูกต้อง',
  vanCalendar: {
    end: 'จบ',
    start: 'จุดเริ่มต้น',
    title: 'เลือกวันที่',
    confirm: 'ยืนยัน',
    startEnd: 'จุดเริ่มต้น/จบ',
    weekdays: ['วันอาทิตย์', 'ทั้งมวล', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก'],
    monthTitle: function monthTitle(year, month) {
      return year + "ปี" + month + "ดวงจันทร์";
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "เลือกวันไม่เกิน " + maxRange + " ท้องฟ้า";
    }
  },
  vanContactCard: {
    addText: 'เพิ่มรายชื่อผู้ติดต่อ'
  },
  vanContactList: {
    addText: 'ติดต่อใหม่'
  },
  vanPagination: {
    prev: 'หน้าสุดท้าย',
    next: 'หน้าถัดไป'
  },
  vanPullRefresh: {
    pulling: 'เลื่อนลงเพื่อรีเฟรช...',
    loosing: 'ปล่อยและฟื้นฟู...'
  },
  vanSubmitBar: {
    label: 'ผลรวม：'
  },
  vanCoupon: {
    unlimited: 'ไม่ใช้เกณฑ์',
    discount: function discount(_discount) {
      return _discount + "การพัก";
    },
    condition: function condition(_condition) {
      return "ครบสามสิบสอง" + _condition + "องค์ประกอบที่มีอยู่";
    }
  },
  vanCouponCell: {
    title: 'คูปอง',
    tips: 'ซึ่งไ���่มีประโยชน์',
    count: function count(_count) {
      return _count + "แผ่นกันแดด";
    }
  },
  vanCouponList: {
    empty: 'ไม่มีคูปอง',
    exchange: 'คราว',
    close: 'ไม่ใช้คูปอง',
    enable: 'ใช้',
    disabled: 'สุรินทร์ยังไม่มี',
    placeholder: 'กรุณาใส่รหัสพิเศษ'
  },
  vanAddressEdit: {
    area: 'แว่นแคว้น',
    postal: 'รหัสไปรษณีย์',
    areaEmpty: 'กรุณาเลือกพื้นที่',
    addressEmpty: 'กรุณากรอกรายละเอียด',
    postalEmpty: 'รูปแบบรหัสไปรษณีย์ไม่ถูกต้อง',
    defaultAddress: 'ตั้งค่าเป็นค่าเริ่มต้นรับที่อยู่',
    telPlaceholder: 'เบอร์โทรศัพท์ของผู้รับ',
    namePlaceholder: 'ชื่อผู้รับ',
    areaPlaceholder: 'เลือกจังหวัด / เทศบาลเมือง / เขต'
  },
  vanAddressEditDetail: {
    label: 'รายละเอียดที่อยู่',
    placeholder: 'ป้ายถนนหมายเลขห้องฯลฯ'
  },
  vanAddressList: {
    add: 'ท���่อยู่ใหม่'
  }
};
exports.default = _default;