const absTime = require('../src/index').default;

var now = 1587355200000;

describe('test src/index.js', () => {
  describe('test formatAbsTime', () => {
    it('参数错误', () => {
      expect(absTime.formatAbsTime()).toStrictEqual({ day: '', slot: '', time: '' });
    });

    it('入参比现在晚', () => {
      var curr = 1587376800000;
      expect(absTime.formatAbsTime(curr, now)).toStrictEqual({ day: '', slot: '', time: '' });
    });

    it('今天', () => {
      expect(absTime.formatAbsTime(1587333600000, now)).toStrictEqual({ day: '今天', slot: '上午', time: '6:00' });
      expect(absTime.formatAbsTime(1587355200000, now)).toStrictEqual({ day: '今天', slot: '下午', time: '12:00' });
      expect(absTime.formatAbsTime(1587376800000, now)).toStrictEqual({ day: '', slot: '', time: '' });
      expect(absTime.formatAbsTime(1587376800000, now)).toStrictEqual({ day: '', slot: '', time: '' });
      expect(absTime.formatAbsTime(1587312000000, now)).toStrictEqual({ day: '今天', slot: '凌晨', time: '12:00' });
    });

    it('昨天', () => {
      expect(absTime.formatAbsTime(1587247200000, now)).toStrictEqual({ day: '昨天', slot: '上午', time: '6:00' });
      expect(absTime.formatAbsTime(1587268800000, now)).toStrictEqual({ day: '昨天', slot: '下午', time: '12:00' });
      expect(absTime.formatAbsTime(1587290400000, now)).toStrictEqual({ day: '昨天', slot: '晚上', time: '6:00' });
      expect(absTime.formatAbsTime(1587225600000, now)).toStrictEqual({ day: '昨天', slot: '凌晨', time: '12:00' });
    });

    it('不符合周几，符合日期', () => {
      expect(absTime.formatAbsTime(1587160800000, now)).toStrictEqual({ day: '4月18日', slot: '上午', time: '6:00' });
      expect(absTime.formatAbsTime(1587182400000, now)).toStrictEqual({ day: '4月18日', slot: '下午', time: '12:00' });
      expect(absTime.formatAbsTime(1587204000000, now)).toStrictEqual({ day: '4月18日', slot: '晚上', time: '6:00' });
      expect(absTime.formatAbsTime(1587139200000, now)).toStrictEqual({ day: '4月18日', slot: '凌晨', time: '12:00' });
    });

    it('周几', () => {
      expect(absTime.formatAbsTime(1586815200000, 1587182400000)).toStrictEqual({ day: '星期二', slot: '上午', time: '6:00' });
      expect(absTime.formatAbsTime(1586836800000, 1587182400000)).toStrictEqual({ day: '星期二', slot: '下午', time: '12:00' });
      expect(absTime.formatAbsTime(1586858400000, 1587182400000)).toStrictEqual({ day: '星期二', slot: '晚上', time: '6:00' });
      expect(absTime.formatAbsTime(1586793600000, 1587182400000)).toStrictEqual({ day: '星期二', slot: '凌晨', time: '12:00' });
    });

    it('周日、周六', () => {
      expect(absTime.formatAbsTime(1587268800000, 1587268800000)).toStrictEqual({ day: '今天', slot: '下午', time: '12:00' });
      expect(absTime.formatAbsTime(1587182400000, 1587268800000)).toStrictEqual({ day: '昨天', slot: '下午', time: '12:00' });
      expect(absTime.formatAbsTime(1586664000000, 1587182400000)).toStrictEqual({ day: '4月12日', slot: '下午', time: '12:00' });
    });

    it('周一', () => {
      expect(absTime.formatAbsTime(1586728800000, 1587182400000)).toStrictEqual({ day: '星期一', slot: '上午', time: '6:00' });
      expect(absTime.formatAbsTime(1586750400000, 1587182400000)).toStrictEqual({ day: '星期一', slot: '下午', time: '12:00' });
      expect(absTime.formatAbsTime(1586772000000, 1587182400000)).toStrictEqual({ day: '星期一', slot: '晚上', time: '6:00' });
      expect(absTime.formatAbsTime(1586707200000, 1587182400000)).toStrictEqual({ day: '星期一', slot: '凌晨', time: '12:00' });
    });
  });
});
