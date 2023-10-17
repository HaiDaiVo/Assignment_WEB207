
function stringToDate(str) {

}

const formatDate = function (dateInput, format) {
      const date = new Date(dateInput)
      var day = date.getDate();
      var month = date.getMonth() + 1; // Tháng bắt đầu từ 0, nên cộng thêm 1
      var year = date.getFullYear();
      if (format === 'dd-MM-yyyy') return day + '/' + (month < 10 ? "0" + month : month) + '/' + year;
      if (format === 'yyyy-MM-dd') return year + '-' + (month < 10 ? "0" + month : month) + '-' + day;
      if (format === 'MM-dd-yyyy') return month + '-' + day + '-' + year;

      // Định dạng lại ngày tháng theo chuỗi "dd-MM-yyyy"
      return day + '/' + (month < 10 ? "0" + month : month) + '/' + year;
}

const formatDateString = function (dateString, format) {
      const date = new Date(dateString)

      var day = date.getDate();
      var month = date.getMonth() + 1; // Tháng bắt đầu từ 0, nên cộng thêm 1
      var year = date.getFullYear();
      if (format === 'dd-MM-yyyy') return day + '/' + (month < 10 ? "0" + month : month) + '/' + year;
      if (format === 'yyyy-MM-dd') return year + '-' + (month < 10 ? "0" + month : month) + '-' + day;
      if (format === 'MM-dd-yyyy') return month + '-' + day + '-' + year;

      // Định dạng lại ngày tháng theo chuỗi "dd-MM-yyyy"
      return day + '/' + (month < 10 ? "0" + month : month) + '/' + year;
}

const vndateToFormat = function (vndateString, format) {
      // Tạo một mảng chứa ngày, tháng và năm bằng cách tách chuỗi ban đầu
      var dateParts = vndateString.split("/");
      var day = parseInt(dateParts[0], 10);
      var month = parseInt(dateParts[1], 10); // Tháng bắt đầu từ 0
      var year = parseInt(dateParts[2], 10);

      if (format === 'dd-MM-yyyy') return day + '/' + month + '/' + year;
      if (format === 'yyyy-MM-dd') return year + '-' + (month < 10 ? "0" + month : month) + '-' + day;

      // Định dạng lại ngày tháng theo chuỗi "dd-MM-yyyy"
      return day + '/' + month + '/' + year;
}


export { stringToDate, formatDateString, vndateToFormat, formatDate }
export default formatDateString;