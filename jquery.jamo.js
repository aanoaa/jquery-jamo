
  /*
  usage:
  $.jamo('김춘자')
  [["ㄱ", "ㅣ", "ㅁ"], ["ㅊ", "ㅜ", "ㄴ"], ["ㅈ", "ㅏ", ""]]
  */

  $.extend({
    jamo: function(str) {
      var arr, ch_l, ch_t, ch_v, char, cho, i, jong, jung, l, nchar, res, t, v, _len;
      res = [];
      cho = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
      jung = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
      jong = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
      arr = str.split("");
      for (i = 0, _len = arr.length; i < _len; i++) {
        char = arr[i];
        nchar = char.charCodeAt(0);
        if (nchar >= 0xAC00 && nchar <= 0xD7AF) {
          ch_t = Math.floor(Math.floor((nchar - 0xAC00) / 28) / 21);
          ch_v = Math.floor((nchar - 0xAC00) / 28) % 21;
          ch_l = (nchar - 0xAC00) % 28;
          t = cho[ch_t];
          v = jung[ch_v];
          l = jong[ch_l];
          res.push([t, v, l]);
        } else {
          res.push([String.fromCharCode(nchar)]);
        }
      }
      return res;
    }
  });
