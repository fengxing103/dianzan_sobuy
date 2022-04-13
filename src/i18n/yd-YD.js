"use strict";

exports.__esModule = true;
exports.default = void 0;
var _default = {
  name: 'नाम',
  tel: 'टेलिफोन',
  save: 'सहेजना',
  confirm: 'पुष्टिकरण',
  cancel: 'रद्द करना',
  delete: 'मिटाएँ',
  complete: 'सम्पन्न',
  loading: 'लोड हो रहा है...',
  telEmpty: 'कृपया फोन भरें',
  nameEmpty: 'कृपया नाम भरें',
  nameInvalid: 'कृपया सही नाम दर्ज करें',
  confirmDelete: 'क्या आप वाकई इसे हटाना चाहते हैं',
  telInvalid: 'कृपया सही फोन नंबर दर्ज करें',
  vanCalendar: {
    end: 'अन्त',
    start: 'आरम्भ करना',
    title: 'तिथि चयन',
    confirm: 'निश्चित करना',
    startEnd: 'प्रारंभ/अंत',
    weekdays: ['दिन', 'एक', 'दो', 'तीन', 'चार', 'पाँच', 'छः'],
    monthTitle: function monthTitle(year, month) {
      return year + "\u5E74" + month + "\u6708";
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "\u9009\u62E9\u5929\u6570\u4E0D\u80FD\u8D85\u8FC7 " + maxRange + " \u5929";
    }
  },
  vanContactCard: {
    addText: 'संपर्क जोड़ें'
  },
  vanContactList: {
    addText: 'नया संपर्क'
  },
  vanPagination: {
    prev: 'पिछला पृष्ठ',
    next: 'अगला पृष्ठ'
  },
  vanPullRefresh: {
    pulling: 'ताज़ा करने के लिए ड्रॉप-डाउन करें...',
    loosing: 'रिफ्रेश करने के लिए रिलीज़ करें...'
  },
  vanSubmitBar: {
    label: 'कुल:'
  },
  vanCoupon: {
    unlimited: 'कोई दहलीज नहीं',
    discount: function discount(_discount) {
      return _discount + "\u6298";
    },
    condition: function condition(_condition) {
      return "\u6EE1" + _condition + "\u5143\u53EF\u7528";
    }
  },
  vanCouponCell: {
    title: 'कूपन',
    tips: 'अनुपलब्ध',
    count: function count(_count) {
      return _count + "\u5F20\u53EF\u7528";
    }
  },
  vanCouponList: {
    empty: 'कोई कूपन नहीं',
    exchange: 'विनिमय',
    close: 'कूपन का उपयोग न करें',
    enable: 'उपलब्ध',
    disabled: 'अनुपलब्ध',
    placeholder: 'कृपया ऑफ़र कोड दर्ज करें'
  },
  vanAddressEdit: {
    area: 'ज़िला',
    postal: 'डाक कोड',
    areaEmpty: 'कृपया एक क्षेत्र चुनें',
    addressEmpty: 'कृपया विस्तृत पता भरें',
    postalEmpty: 'गलत पोस्टकोड फॉर्मेट',
    defaultAddress: 'डिफ़ॉल्ट स्कैपिंग पता के रूप में सेट करें',
    telPlaceholder: 'प्रापक की मोबाइल संख्या',
    namePlaceholder: 'नाम हस्ताक्षर करें',
    areaPlaceholder: 'प्रांत चुनें'
  },
  vanAddressEditDetail: {
    label: 'विस्तृत पता',
    placeholder: 'फ्लूर संख्या, कक्ष संख्या, इत्यादिया'
  },
  vanAddressList: {
    add: 'नवीन पताNew'
  }
};
exports.default = _default;